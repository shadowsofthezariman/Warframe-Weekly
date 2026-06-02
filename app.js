// ── WARFRAME WEEKLY · app.js ─────────────────────────

const STORAGE_KEY = 'warframeWeekly_entries';

const SECTIONS = [
  { id: 'steelpath',    gridId: 'steelpath-grid',    label: "Teshin's Steelpath Shop" },
  { id: 'incarnons',   gridId: 'incarnons-grid',    label: 'Circuit Incarnons' },
  { id: 'warframes',   gridId: 'warframes-grid',    label: 'Circuit Warframes' },
  { id: 'archon-shard',gridId: 'archon-shard-grid', label: 'Bird 3 Archon Shard' },
  { id: 'archon-hunt', gridId: 'archon-hunt-grid',  label: 'Archon Hunt' },
  { id: 'expensive',   gridId: 'expensive-grid',    label: 'Expensive Warframe Sets' },
  { id: 'cheapest',    gridId: 'cheapest-grid',     label: 'Cheapest Warframe Sets' },
];

function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
}

function loadEntries() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveEntries(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

let data = loadEntries();

// ── Render all sections ──────────────────────────────
function renderAll() {
  SECTIONS.forEach(sec => {
    const grid = document.getElementById(sec.gridId);
    if (!grid) return;
    const items = data[sec.id] || [];

    if (items.length === 0) {
      grid.innerHTML = `<div class="empty-state">No entries yet — hit + to add this week's info.</div>`;
      return;
    }

    grid.innerHTML = items.map(item => `
      <div class="post-card">
        <h3 class="post-title">${escapeHTML(item.title)}</h3>
        ${item.price ? `<div class="price-tag">◈ ${escapeHTML(item.price)} pt</div>` : ''}
        ${item.notes ? `<p class="post-body">${escapeHTML(item.notes)}</p>` : ''}
        <div class="post-meta">
          <span class="post-week">WEEK ${item.week}</span>
          <button class="delete-btn" data-section="${sec.id}" data-id="${item.id}">✕</button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.section;
        const id  = Number(btn.dataset.id);
        data[sid] = (data[sid] || []).filter(e => e.id !== id);
        saveEntries(data);
        renderAll();
      });
    });
  });
}

// ── Modal ────────────────────────────────────────────
const modal     = document.getElementById('modal');
const addBtn    = document.getElementById('add-btn');
const saveBtn   = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

addBtn.addEventListener('click', () => modal.classList.add('open'));
cancelBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

function closeModal() {
  modal.classList.remove('open');
  document.getElementById('m-title').value = '';
  document.getElementById('m-price').value = '';
  document.getElementById('m-body').value  = '';
}

saveBtn.addEventListener('click', () => {
  const section = document.getElementById('m-section').value;
  const title   = document.getElementById('m-title').value.trim();
  const price   = document.getElementById('m-price').value.trim();
  const notes   = document.getElementById('m-body').value.trim();

  if (!title) {
    document.getElementById('m-title').style.borderColor = '#ff2d55';
    setTimeout(() => document.getElementById('m-title').style.borderColor = '', 1500);
    return;
  }

  if (!data[section]) data[section] = [];
  data[section].push({ id: Date.now(), title, price, notes, week: getWeekNumber() });
  saveEntries(data);
  closeModal();
  renderAll();

  // Scroll to the section
  document.getElementById(section === 'expensive' ? 'expensive-sets' : section === 'cheapest' ? 'cheapest-sets' : section)
    ?.scrollIntoView({ behavior: 'smooth' });
});

// ── Hamburger ────────────────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('main-nav').classList.toggle('open');
});

document.querySelectorAll('#main-nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('main-nav').classList.remove('open'));
});

// ── Init ─────────────────────────────────────────────
document.getElementById('week-num').textContent  = getWeekNumber();
document.getElementById('year').textContent      = new Date().getFullYear();
document.getElementById('footer-year').textContent = new Date().getFullYear();
renderAll();
