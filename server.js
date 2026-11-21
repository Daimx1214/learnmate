// Saathi static server + family sync API. Zero dependencies, Node 18+.
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SELF = path.join(ROOT, 'server.js');
const DATA_DIR = path.join(ROOT, 'data');
const DATA_FILE = path.join(DATA_DIR, 'families.json');
const PORT = Number(process.env.PORT) || 8080;
const MAX_BODY = 20 * 1024;
const CODE_RE = /^[A-HJ-NP-Z2-9]{6}$/;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/manifest+json',
  '.webmanifest': 'application/manifest+json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};
const NO_CACHE = new Set(['.html', '.js', '.css']);

class HttpError extends Error {
  constructor(status, body) {
    super(body?.error || 'error');
    this.status = status;
    this.body = body;
  }
}

function sendJson(res, status, obj) {
  const payload = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload),
    'Cache-Control': 'no-store',
  });
  res.end(payload);
}

function sendError(res, status, error) {
  sendJson(res, status, { error });
}

// ---- family store (data/families.json) ----

let writeQueue = Promise.resolve();

async function loadStore() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

function saveFamily(code, entry) {
  const run = writeQueue.then(async () => {
    const store = await loadStore();
    store[code] = entry;
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, JSON.stringify(store, null, 2), 'utf8');
  });
  writeQueue = run.catch(() => {});
  return run;
}

function sanitizeSummary(summary) {
  const src = summary && typeof summary === 'object' ? summary : {};
  const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : 0);
  const conceptsNeedingHelp = Array.isArray(src.conceptsNeedingHelp)
    ? src.conceptsNeedingHelp
        .filter((s) => typeof s === 'string')
        .slice(0, 20)
        .map((s) => s.slice(0, 60))
    : [];
  return {
    weekMinutes: num(src.weekMinutes),
    conceptsMastered: num(src.conceptsMastered),
    conceptsNeedingHelp,
    updatedAt: new Date().toISOString(),
  };
}

// ---- body reading (never logged) ----

function readBody(req) {
  return new Promise((resolve, reject) => {
    const declared = Number(req.headers['content-length']);
    if (Number.isFinite(declared) && declared > MAX_BODY) {
      reject(new HttpError(413, { error: 'too_large' }));
      return;
    }
    let size = 0;
    let tooLarge = false;
    const chunks = [];
    req.on('data', (chunk) => {
      if (tooLarge) return;
      size += chunk.length;
      if (size > MAX_BODY) {
        tooLarge = true;
        reject(new HttpError(413, { error: 'too_large' }));
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (!tooLarge) resolve(Buffer.concat(chunks).toString('utf8'));
    });
    req.on('error', reject);
  });
}

// ---- API routes ----

async function handleApi(req, res, pathname) {
  if (pathname === '/api/sync') {
    if (req.method !== 'POST') return sendError(res, 405, 'method_not_allowed');
    const raw = await readBody(req);
    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return sendError(res, 400, 'bad_json');
    }
    const code = body && typeof body === 'object' ? body.familyCode : undefined;
    if (typeof code !== 'string' || !CODE_RE.test(code)) {
      return sendError(res, 400, 'invalid_family_code');
    }
    await saveFamily(code, sanitizeSummary(body.summary));
    return sendJson(res, 200, { ok: true });
  }

  if (pathname.startsWith('/api/family/')) {
    if (req.method !== 'GET') return sendError(res, 405, 'method_not_allowed');
    const code = pathname.slice('/api/family/'.length);
    if (!CODE_RE.test(code)) return sendError(res, 400, 'invalid_family_code');
    const store = await loadStore();
    if (!Object.prototype.hasOwnProperty.call(store, code)) {
      return sendJson(res, 404, { error: 'not_found' });
    }
    return sendJson(res, 200, store[code]);
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return sendError(res, 405, 'method_not_allowed');
  }
  return sendError(res, 404, 'not_found');
}

// ---- static files ----

function resolveStatic(urlPathname) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPathname);
  } catch {
    return null;
  }
  const rel = decoded === '/' ? 'index.html' : decoded.replace(/^\/+/, '');
  const full = path.resolve(ROOT, rel);
  if (full !== ROOT && !full.startsWith(ROOT + path.sep)) return null;
  const inside = path.relative(ROOT, full);
  const first = inside.split(path.sep)[0];
  if (first === 'data' || full === SELF) return null;
  return full;
}

async function serveStatic(req, res, pathname) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return sendError(res, 405, 'method_not_allowed');
  }
  const file = resolveStatic(pathname);
  if (!file) return sendError(res, 404, 'not_found');
  let data;
  try {
    const stat = await fs.stat(file);
    if (!stat.isFile()) return sendError(res, 404, 'not_found');
    data = await fs.readFile(file);
  } catch {
    return sendError(res, 404, 'not_found');
  }
  const ext = path.extname(file).toLowerCase();
  const headers = {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Content-Length': data.length,
  };
  if (NO_CACHE.has(ext)) headers['Cache-Control'] = 'no-cache';
  res.writeHead(200, headers);
  res.end(req.method === 'HEAD' ? undefined : data);
}

// ---- server ----

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || '/', 'http://localhost');
    const pathname = url.pathname;
    if (pathname === '/api' || pathname.startsWith('/api/')) {
      await handleApi(req, res, pathname);
    } else {
      await serveStatic(req, res, pathname);
    }
  } catch (err) {
    if (err instanceof HttpError) {
      if (!res.headersSent) sendJson(res, err.status, err.body);
      else res.end();
      return;
    }
    if (!res.headersSent) sendError(res, 500, 'server_error');
    else res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Saathi running on http://localhost:${PORT}`);
});
