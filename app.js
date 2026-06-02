// ── WEEKLY DROP · app.js ────────────────────────────────

// Storage key
const STORAGE_KEY = 'weeklyDrop_posts';

// ── Helpers ─────────────────────────────────────────────
function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });
}

function loadPosts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// ── State ────────────────────────────────────────────────
let posts = loadPosts();
let activeTag = 'all';

// ── Seed sample posts if empty ───────────────────────────
if (posts.length === 0) {
  posts = [
    {
      id: Date.now() - 3,
      title: "Team Liquid Takes the Grand Final",
      body: "An incredible series — Liquid came back from 0-2 down to claim the championship trophy in one of the most intense Bo5 matches this season. The crowd went absolutely wild.",
      tag: "tournaments",
      week: getWeekNumber(),
      date: new Date().toISOString()
    },
    {
      id: Date.now() - 2,
      title: "Patch 14.12 Meta Breakdown",
      body: "The new patch shakes up the FPS meta hard. Riflers are finally back in favour after the SMG-heavy weeks, and several agents got significant movement adjustments.",
      tag: "fps",
      week: getWeekNumber(),
      date: new Date().toISOString()
    },
    {
      id: Date.now() - 1,
      title: "Worlds Bracket Stage Announced",
      body: "The bracket for the MOBA World Championship has dropped. Group A looks like a bloodbath with three top-5 ranked teams fighting for two spots. Who's making it through?",
      tag: "moba",
      week: getWeekNumber(),
      date: new Date().toISOString()
    }
  ];
  savePosts(posts);
}

// ── Render ───────────────────────────────────────────────
function renderPosts() {
  const grid = document.getElementById('posts-grid');
  const filtered = activeTag === 'all' ? posts : posts.filter(p => p.tag === activeTag);

  // Update stat count
  document.getElementById('post-count').textContent = posts.length;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">NO POSTS YET — HIT + TO ADD ONE</div>`;
    return;
  }

  grid.innerHTML = filtered
    .slice()
    .reverse()
    .map(p => `
      <div class="post-card" data-id="${p.id}">
        <span class="post-tag ${p.tag}">${p.tag.toUpperCase()}</span>
        <h3 class="post-title">${escapeHTML(p.title)}</h3>
        <p class="post-body">${escapeHTML(p.body)}</p>
        <div class="post-meta">
          <span>${formatDate(p.date)}</span>
          <span class="post-week">WEEK ${p.week}</span>
          <button class="delete-btn" data-id="${p.id}" title="Delete">✕</button>
        </div>
      </div>
    `).join('');

  // Delete buttons
  grid.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      posts = posts.filter(p => p.id !== id);
      savePosts(posts);
      renderPosts();
    });
  });
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Filter ───────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTag = btn.dataset.tag;
    renderPosts();
  });
});

// ── Modal ────────────────────────────────────────────────
const modal   = document.getElementById('modal');
const addBtn  = document.getElementById('add-btn');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');

addBtn.addEventListener('click', () => modal.classList.add('open'));
cancelBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

function closeModal() {
  modal.classList.remove('open');
  document.getElementById('m-title').value = '';
  document.getElementById('m-body').value = '';
}

saveBtn.addEventListener('click', () => {
  const title = document.getElementById('m-title').value.trim();
  const body  = document.getElementById('m-body').value.trim();
  const tag   = document.getElementById('m-tag').value;

  if (!title || !body) {
    document.getElementById(title ? 'm-body' : 'm-title').style.borderColor = '#ff2d55';
    setTimeout(() => {
      document.getElementById('m-title').style.borderColor = '';
      document.getElementById('m-body').style.borderColor = '';
    }, 1500);
    return;
  }

  posts.push({
    id: Date.now(),
    title, body, tag,
    week: getWeekNumber(),
    date: new Date().toISOString()
  });

  savePosts(posts);
  closeModal();
  renderPosts();
});

// ── Init ─────────────────────────────────────────────────
document.getElementById('week-num').textContent = getWeekNumber();
document.getElementById('year').textContent = new Date().getFullYear();
renderPosts();
