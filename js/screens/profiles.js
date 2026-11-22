import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
  setActiveProfile,
} from '../store.js';
import { t } from '../i18n.js';

const MAX_PROFILES = 4;

let editingProfileId = null;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
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
  const editing = editingProfileId ? profiles.find((p) => p.id === editingProfileId) || null : null;
  if (editingProfileId && !editing) editingProfileId = null;

  root.appendChild(el('h1', 'screen-title', t('profiles_title')));
  root.appendChild(el('p', 'muted', t('profiles_intro')));

  // Existing profiles.
  const grid = el('div', 'grid-avatars');
  for (const p of profiles) {
    const card = el('div', 'card');

    const pick = touchButton('btn-secondary', '');
    pick.appendChild(el('span', 'row-photo-blank'));
    pick.appendChild(el('span', null, p.nickname));
    pick.style.display = 'inline-flex';
    pick.style.alignItems = 'center';
    pick.style.gap = '10px';
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

    const editBtn = touchButton('btn-ghost', '✏️ ' + t('profiles_edit'));
    editBtn.addEventListener('click', () => {
      editingProfileId = p.id;
      ctx.refresh();
    });

    card.append(pick, editBtn, remove);
    grid.appendChild(card);
  }
  if (profiles.length) root.appendChild(grid);

  // New-profile form, only while there is room.
  if (profiles.length < MAX_PROFILES || editing) {
    const form = el('div', 'card');

    const input = el('input', 'nickname-input');
    if (editing) input.value = editing.nickname;
    input.type = 'text';
    input.maxLength = 20;
    input.placeholder = t('profiles_name');
    input.setAttribute('aria-label', t('profiles_name'));
    input.style.minHeight = '48px';
    input.style.width = '100%';

    const start = touchButton('btn', editing ? t('profiles_save') : t('profiles_start'));
    start.addEventListener('click', () => {
      try {
        if (editing) {
          updateProfile(editing.id, {
            nickname: input.value,
          });
          editingProfileId = null;
          ctx.refresh();
        } else {
          const created = createProfile({
            nickname: input.value,
          });
          setActiveProfile(created.id);
          ctx.navigate('#/home');
        }
      } catch (err) {
        ctx.toast(err && err.message ? err.message : t('profiles_create_failed'));
      }
    });

    form.append(input, start);
    if (editing) {
      const cancel = touchButton('btn-ghost', t('profiles_cancel'));
      cancel.addEventListener('click', () => {
        editingProfileId = null;
        ctx.refresh();
      });
      form.appendChild(cancel);
    }
    root.appendChild(form);
  }

  root.appendChild(el('p', 'muted', t('profiles_limit')));

  // Entry point to the family view.
  const family = touchButton('btn-secondary', t('family_entry'));
  family.style.width = '100%';
  family.addEventListener('click', () => ctx.navigate('#/family'));
  root.appendChild(family);
}
