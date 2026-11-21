const COST_ROWS = [
  { label: 'सामग्री और पाठ्यक्रम समीक्षा (अनुमान)', amount: 120 },
  { label: 'उपकरण और होस्टिंग, साझा सर्वर और सिंक (अनुमान)', amount: 40 },
  { label: 'शिक्षक / स्वयंसेवक अभिमुखीकरण (अनुमान)', amount: 60 },
  { label: 'डेटा और सहायता (अनुमान)', amount: 30 },
  { label: 'ओवरहेड (अनुमान)', amount: 50 },
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
  const caption = el('caption', 'muted', 'सभी संख्याएँ अनुमान हैं (धारणाएँ)');
  table.appendChild(caption);

  const thead = el('thead');
  const headRow = el('tr');
  headRow.append(el('th', null, 'मद'), el('th', null, 'राशि (प्रति छात्र प्रति वर्ष)'));
  thead.appendChild(headRow);
  table.appendChild(thead);

  const total = COST_ROWS.reduce((sum, row) => sum + row.amount, 0);

  const tbody = el('tbody');
  for (const row of COST_ROWS) {
    const tr = el('tr');
    tr.append(el('td', null, row.label), el('td', null, formatRupees(row.amount)));
    tbody.appendChild(tr);
  }
  const totalRow = el('tr');
  totalRow.append(el('th', null, 'कुल (अनुमान)'), el('td', null, formatRupees(total)));
  tbody.appendChild(totalRow);
  table.appendChild(tbody);

  return { table, total };
}

export function render(root, ctx) {
  void ctx;
  root.appendChild(el('h1', 'screen-title', 'साथी के बारे में'));

  // 1. Free for students
  const free = section('मुफ़्त पढ़ाई');
  free.appendChild(
    el(
      'p',
      null,
      'साथी छात्रों के लिए मुफ़्त है: कोई लॉगिन नहीं, कोई विज्ञापन नहीं, कोई व्यक्तिगत डेटा नहीं बेचा जाता। छात्र कुछ नहीं देते।',
    ),
  );
  root.appendChild(free);

  // 2. Who pays
  const payer = section('कौन पैसे देगा?');
  payer.appendChild(
    el(
      'p',
      null,
      'एनजीओ, कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) की शिक्षा योजनाएँ और ज़िला स्कूल कार्यक्रम प्रति छात्र प्रति वर्ष के हिसाब से भुगतान कर सकते हैं।',
    ),
  );
  payer.appendChild(el('p', 'muted', 'यह एक अनुमान है; वास्तविक कीमत बातचीत से तय होगी।'));
  root.appendChild(payer);

  // 3. Cost breakdown
  const costs = section('प्रति छात्र लागत');
  const { table, total } = costTable();
  costs.appendChild(table);
  root.appendChild(costs);

  // 4. Value reasoning
  const value = section('मूल्य तर्क');
  const cohort = total * LEARNERS;
  value.appendChild(
    el(
      'div',
      'notice',
      `${formatRupees(total)} प्रति छात्र प्रति वर्ष मानकर, ${LEARNERS.toLocaleString('hi-IN')} छात्रों के लिए लगभग ${formatRupees(cohort)} प्रति वर्ष (अनुमान)।`,
    ),
  );
  root.appendChild(value);

  // 5. Data note
  const data = section('डेटा');
  data.appendChild(
    el(
      'p',
      'muted',
      'डेटा: प्रोफ़ाइल और प्रगति केवल इसी फ़ोन पर रहती है; सिंक में केवल सप्ताह के मिनट, महारत की संख्या और कमज़ोर विषय भेजे जाते हैं।',
    ),
  );
  root.appendChild(data);

  // Entry point to the family view.
  const family = el('a', 'btn-secondary', 'परिवार के लिए: कोड से प्रगति देखें');
  family.setAttribute('href', '#/family');
  root.appendChild(family);
}
