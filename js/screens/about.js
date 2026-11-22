import { t } from '../i18n.js';

const COST_ROWS = [
  { labelKey: 'cost_content', amount: 120 },
  { labelKey: 'cost_hosting', amount: 40 },
  { labelKey: 'cost_training', amount: 60 },
  { labelKey: 'cost_support', amount: 30 },
  { labelKey: 'cost_overhead', amount: 50 },
];

const LEARNERS = 1000;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function formatRupees(n) {
  return '₹' + Number(n).toLocaleString('hi-IN');
}

function section(title) {
  const card = el('div', 'card');
  card.appendChild(el('h2', 'card-title', title));
  return card;
}

function costTable() {
  const table = el('table');
  const caption = el('caption', 'muted', t('about_cost_caption'));
  table.appendChild(caption);

  const thead = el('thead');
  const headRow = el('tr');
  headRow.append(el('th', null, t('about_cost_item')), el('th', null, t('about_cost_amount')));
  thead.appendChild(headRow);
  table.appendChild(thead);

  const total = COST_ROWS.reduce((sum, row) => sum + row.amount, 0);

  const tbody = el('tbody');
  for (const row of COST_ROWS) {
    const tr = el('tr');
    tr.append(el('td', null, t(row.labelKey)), el('td', null, formatRupees(row.amount)));
    tbody.appendChild(tr);
  }
  const totalRow = el('tr');
  totalRow.append(el('th', null, t('about_cost_total')), el('td', null, formatRupees(total)));
  tbody.appendChild(totalRow);
  table.appendChild(tbody);

  return { table, total };
}

function backButton(ctx) {
  const btn = el('button', 'btn-ghost back-btn', t('back'));
  btn.type = 'button';
  btn.addEventListener('click', () => ctx.navigate(ctx.backTo || '#/home'));
  return btn;
}

export function render(root, ctx) {
  root.appendChild(backButton(ctx));
  root.appendChild(el('h1', 'screen-title', t('about_title')));

  // 1. Free for students
  const free = section(t('about_free_title'));
  free.appendChild(
    el(
      'p',
      null,
      t('about_free_body'),
    ),
  );
  root.appendChild(free);

  // 2. Who pays
  const payer = section(t('about_payer_title'));
  payer.appendChild(
    el(
      'p',
      null,
      t('about_payer_body'),
    ),
  );
  payer.appendChild(el('p', 'muted', t('about_payer_note')));
  root.appendChild(payer);

  // 3. Cost breakdown
  const costs = section(t('about_costs_title'));
  const { table, total } = costTable();
  costs.appendChild(table);
  root.appendChild(costs);

  // 4. Value reasoning
  const value = section(t('about_value_title'));
  const cohort = total * LEARNERS;
  value.appendChild(
    el(
      'div',
      'notice',
      t('about_value_body', {
        price: formatRupees(total),
        learners: LEARNERS.toLocaleString('hi-IN'),
        total: formatRupees(cohort),
      }),
    ),
  );
  root.appendChild(value);

  // 5. Data note
  const data = section(t('about_data_title'));
  data.appendChild(
    el(
      'p',
      'muted',
      t('about_data_body'),
    ),
  );
  root.appendChild(data);

  // Entry point to the family view.
  const family = el('a', 'btn-secondary', t('family_entry'));
  family.setAttribute('href', '#/family');
  root.appendChild(family);
}
