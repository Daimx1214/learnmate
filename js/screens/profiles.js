import {
  AVATARS,
  getProfiles,
  createProfile,
  deleteProfile,
  setActiveProfile,
} from '../store.js';
import { t } from '../i18n.js';

const MAX_PROFILES = 4;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function avatarFor(id) {
  return AVATARS.find((a) => a.id === id) || AVATARS[0];
}

function touchButton(className, text) {
  const btn = el('button', className, text);
  btn.type = 'button';
  btn.style.minHeight = '48px';
  btn.style.minWidth = '48px';
  return btn;
}

// Shrinks a picked photo to a small JPEG data URL (max side 256px,
// ~60 KB) so up to 4 profile photos fit in on-device storage.
async function downscaleProfilePhoto(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = () => reject(new Error('decode'));
      i.src = url;
    });
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    if (!w || !h) throw new Error('decode');
    const scale = Math.min(1, 256 / Math.max(w, h));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(w * scale));
    canvas.height = Math.max(1, Math.round(h * scale));
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
    for (const q of [0.85, 0.75, 0.65, 0.55]) {
      const dataUrl = canvas.toDataURL('image/jpeg', q);
      if (dataUrl.startsWith('data:image/jpeg') && dataUrl.length <= 80000) return dataUrl;
    }
    throw new Error('too-large');
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function render(root, ctx) {
  const profiles = getProfiles();
  let selectedAvatar = AVATARS[0].id;

  root.appendChild(el('h1', 'screen-title', t('profiles_title')));
  root.appendChild(el('p', 'muted', t('profiles_intro')));

  // Existing profiles.
  const grid = el('div', 'grid-avatars');
  for (const p of profiles) {
    const avatar = avatarFor(p.avatar);
    const card = el('div', 'card');

    const pick = touchButton('btn-secondary', p.photo ? '' : `${avatar.emoji} ${p.nickname}`);
    if (p.photo) {
      const img = el('img', 'row-photo');
      img.src = p.photo;
      img.alt = '';
      pick.append(img, el('span', null, p.nickname));
      pick.style.display = 'inline-flex';
      pick.style.alignItems = 'center';
      pick.style.gap = '10px';
    }
    pick.addEventListener('click', () => {
      setActiveProfile(p.id);
      ctx.navigate('#/home');
    });

    const remove = touchButton('btn-ghost', t('profiles_delete'));
    remove.addEventListener('click', () => {
      if (!window.confirm(t('profiles_confirm_delete'))) return;
      try {
        deleteProfile(p.id);
        ctx.refresh();
      } catch (err) {
        ctx.toast(t('profiles_delete_failed'));
      }
    });

    card.append(pick);
    if (profiles.length > 1) card.append(remove);
    grid.appendChild(card);
  }
  if (profiles.length) root.appendChild(grid);

  // New-profile form, only while there is room.
  if (profiles.length < MAX_PROFILES) {
    const form = el('div', 'card');

    const avatarGrid = el('div', 'grid-avatars');
    const avatarButtons = [];
    const paintSelection = () => {
      for (const { id, btn } of avatarButtons) {
        const on = id === selectedAvatar;
        btn.style.outline = on ? '3px solid var(--yellow)' : 'none';
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    };
    for (const a of AVATARS) {
      const btn = touchButton('avatar-option', `${a.emoji} ${t('avatar_' + a.id)}`);
      btn.addEventListener('click', () => {
        selectedAvatar = a.id;
        paintSelection();
      });
      avatarButtons.push({ id: a.id, btn });
      avatarGrid.appendChild(btn);
    }
    paintSelection();

    // Optional own photo (owner request, 22 Nov). Stored only on this
    // phone inside the profile; when set, it replaces the emoji avatar
    // in the header and the profile list.
    let selectedPhoto = null;
    const photoRow = el('div', 'photo-row');
    const preview = el('span', 'photo-preview', '📷');
    const photoBtn = touchButton('btn-secondary', t('profiles_photo_add'));
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.hidden = true;
    fileInput.setAttribute('aria-label', t('profiles_photo_add'));
    photoBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', async () => {
      const file = fileInput.files && fileInput.files[0];
      if (!file) return;
      try {
        selectedPhoto = await downscaleProfilePhoto(file);
        preview.textContent = '';
        const img = el('img', 'photo-preview-img');
        img.src = selectedPhoto;
        img.alt = '';
        preview.appendChild(img);
        photoBtn.textContent = t('profiles_photo_change');
      } catch (err) {
        ctx.toast(t('profiles_photo_failed'));
      }
      fileInput.value = '';
    });
    photoRow.append(preview, photoBtn, fileInput);
    const photoNote = el('p', 'muted', t('profiles_photo_note'));

    const input = el('input', 'nickname-input');
    input.type = 'text';
    input.maxLength = 20;
    input.placeholder = t('profiles_name');
    input.setAttribute('aria-label', t('profiles_name'));
    input.style.minHeight = '48px';
    input.style.width = '100%';

    const start = touchButton('btn', t('profiles_start'));
    start.addEventListener('click', () => {
      try {
        const created = createProfile({
          nickname: input.value,
          avatar: selectedAvatar,
          photo: selectedPhoto,
        });
        setActiveProfile(created.id);
        ctx.navigate('#/home');
      } catch (err) {
        ctx.toast(err && err.message ? err.message : t('profiles_create_failed'));
      }
    });

    form.append(avatarGrid, photoRow, photoNote, input, start);
    root.appendChild(form);
  }

  root.appendChild(el('p', 'muted', t('profiles_limit')));

  // Entry point to the family view.
  const family = touchButton('btn-secondary', t('family_entry'));
  family.style.width = '100%';
  family.addEventListener('click', () => ctx.navigate('#/family'));
  root.appendChild(family);
}
