// Drives the REAL js/screens/family.js render() under node with a minimal DOM stub.
// fetch is pointed at the static server (python http.server on 127.0.0.1:8765).
const BASE = 'http://127.0.0.1:8765';
const realFetch = globalThis.fetch;
globalThis.fetch = (url, opts) => realFetch(BASE + url, opts);
globalThis.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };

class Node_ {
  constructor(tag) { this.tag = tag; this.children = []; this.style = {}; this.listeners = {}; this.textContent = ''; this.className = ''; }
  appendChild(c) { this.children.push(c); return c; }
  append(...cs) { cs.forEach(c => this.appendChild(c)); }
  replaceChildren(...cs) { this.children = cs; }
  addEventListener(t, f) { (this.listeners[t] ||= []).push(f); }
  dispatch(t, ev) { (this.listeners[t] || []).forEach(f => f(ev)); }
  text() { return (this.textContent || '') + this.children.map(c => c.text()).join(' '); }
}
globalThis.document = { createElement: (t) => new Node_(t) };

const { render } = await import('../../js/screens/family.js');

const root = new Node_('root');
const toasts = [];
render(root, { toast: (m) => toasts.push(m) });

const form = root.children.find(c => c.tag === 'form');
const input = form.children.find(c => c.tag === 'input');
const submitBtn = form.children.find(c => c.tag === 'div').children.find(c => c.tag === 'button');
const resultBox = root.children.find(c => c.tag === 'section');

input.value = 'ABCDE2';
form.dispatch('submit', { preventDefault() {} });

// lookup() is async and not returned to the handler; wait until it finishes (busy cleared -> button enabled).
await new Promise(r => setTimeout(r, 500));
await new Promise(r => setTimeout(r, 100));

console.log('submit.disabled after lookup =', submitBtn.disabled);
console.log('toasts =', JSON.stringify(toasts));
console.log('resultBox children =', JSON.stringify(resultBox.children.map(c => ({ tag: c.tag, className: c.className, text: c.textContent }))));
console.log('resultBox full text =', JSON.stringify(resultBox.text()));
