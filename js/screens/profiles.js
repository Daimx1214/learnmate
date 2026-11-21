import {
  AVATARS,
  getProfiles,
  createProfile,
  deleteProfile,
  setActiveProfile,
} from '../store.js';
import { t, langSelector } from '../i18n.js';

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

export function render(root, ctx) {
  const profiles = getProfiles();
  let selectedAvatar = AVATARS[0].id;

  root.appendChild(el('div', 'brand-title', 'साथी'));
  root.appendChild(el('h1', 'brand-subtitle', t('profiles_title')));
  root.appendChild(langSelector());

  // Existing profiles.
  const grid = el('div', 'grid-avatars');
  for (const p of profiles) {
    const avatar = avatarFor(p.avatar);
    const card = el('div', 'card');

    const pick = touchButton('btn-secondary', `${avatar.emoji} ${p.nickname}`);
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

    card.append(pick, remove);
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
        });
        setActiveProfile(created.id);
        ctx.navigate('#/home');
      } catch (err) {
        ctx.toast(err && err.message ? err.message : t('profiles_create_failed'));
      }
    });

    form.append(avatarGrid, input, start);
    root.appendChild(form);
  }

  root.appendChild(el('p', 'muted', t('profiles_limit')));

  // Entry point to the family view.
  const family = touchButton('btn-secondary', t('family_entry'));
  family.addEventListener('click', () => ctx.navigate('#/family'));
  root.appendChild(family);
}
