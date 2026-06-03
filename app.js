// ── WARFRAME WEEKLY · app.js ─────────────────────────
// All rotation data ported from config.json
// Prices fetched live from Warframe Market API v2

// ── START DATES ──────────────────────────────────────
const START_DATES = {
  teshin:      new Date("2025-01-06T00:00:00+00:00"),
  incarnon:    new Date("2025-02-03T00:00:00+00:00"),
  circuit:     new Date("2025-01-06T00:00:00+00:00"),
  bird:        new Date("2025-01-20T00:00:00+00:00"),
  archon:      new Date("2025-01-06T00:00:00+00:00"),
};

// ── ROTATION DATA ────────────────────────────────────
const TESHIN_DATA = {
  1: { items: ["Umbra Forma Blueprint"] },
  2: { items: ["50,000 Kuva"] },
  3: { items: ["Kitgun Riven Mod"] },
  4: { items: ["3 × Forma"] },
  5: { items: ["Zaw Riven Mod"] },
  6: { items: ["30,000 Endo"] },
  7: { items: ["Rifle Riven Mod"] },
  8: { items: ["Shotgun Riven Mod"] },
};

const INCARNON_DATA = {
  1: { items: ["Braton", "Lato", "Skana", "Paris", "Kunai"] },
  2: { items: ["Boar", "Gammacor", "Angstrum", "Gorgon", "Anku"] },
  3: { items: ["Bo", "Latron", "Furis", "Furax", "Strun"] },
  4: { items: ["Lex", "Magistar", "Boltor", "Bronco", "Ceramic Dagger"] },
  5: { items: ["Torid", "Dual Toxocyst", "Dual Ichor", "Miter", "Atomos"] },
  6: { items: ["Ack & Brunt", "Soma", "Vasto", "Nami Solo", "Burston"] },
  7: { items: ["Zylok", "Sibear", "Dread", "Despair", "Hate"] },
  8: { items: ["Dera", "Sybaris", "Cestra", "Sicarus", "Okina"] },
};

const CIRCUIT_DATA = {
  1:  { items: ["Excalibur", "Trinity", "Ember"] },
  2:  { items: ["Loki", "Mag", "Rhino"] },
  3:  { items: ["Ash", "Frost", "Nyx"] },
  4:  { items: ["Saryn", "Vauban", "Nova"] },
  5:  { items: ["Nekros", "Valkyr", "Oberon"] },
  6:  { items: ["Hydroid", "Mirage", "Limbo"] },
  7:  { items: ["Mesa", "Chroma", "Atlas"] },
  8:  { items: ["Ivara", "Inaros", "Titania"] },
  9:  { items: ["Nidus", "Octavia", "Harrow"] },
  10: { items: ["Gara", "Khora", "Revenant"] },
  11: { items: ["Garuda", "Baruuk", "Hildryn"] },
};

const BIRD_DATA = {
  1: { items: ["Azure Archon Shard"],   color: "#4fc3f7", emoji: "🔵" },
  2: { items: ["Amber Archon Shard"],   color: "#ffb300", emoji: "🟡" },
  3: { items: ["Crimson Archon Shard"], color: "#ef5350", emoji: "🔴" },
};

const ARCHON_DATA = {
  1: { items: ["Archon Amar"],   shard: "Crimson", color: "#ef5350", emoji: "🔴" },
  2: { items: ["Archon Nira"],   shard: "Amber",   color: "#ffb300", emoji: "🟡" },
  3: { items: ["Archon Boreal"], shard: "Azure",   color: "#4fc3f7", emoji: "🔵" },
};

// ── HAMBURGER ────────────────────────────────────────
function getCurrentWeek(startDate, cycleLength) {
  const now = new Date();
  const daysSince = (now - startDate) / (1000 * 60 * 60 * 24);
  return (Math.floor(daysSince / 7) % cycleLength) + 1;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;")
    .replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function setLoading(id, msg = "Loading...") {
  const el = document.getElementById(id);
  if (el) el.innerHTML = `<div class="loading-state">${msg}</div>`;
}

// ── RENDER: TESHIN ────────────────────────────────────
function renderTeshin() {
  const week = getCurrentWeek(START_DATES.teshin, 8);
  const data = TESHIN_DATA[week];
  const grid = document.getElementById("steelpath-grid");
  grid.innerHTML = `
    <div class="post-card featured">
      <div class="week-badge">WEEK ${week} OF 8</div>
      <h3 class="post-title">${escapeHTML(data.items[0])}</h3>
      <p class="post-body">This week's rotating offering from Teshin's Steel Path Honors shop.</p>
      <div class="rotation-bar">
        ${Object.entries(TESHIN_DATA).map(([w, d]) =>
          `<div class="rot-pip ${+w === week ? 'active' : ''}" title="Week ${w}: ${d.items[0]}"></div>`
        ).join('')}
      </div>
    </div>
    <div class="cycle-list">
      <h4 class="cycle-title">Full 8-Week Cycle</h4>
      ${Object.entries(TESHIN_DATA).map(([w, d]) => `
        <div class="cycle-row ${+w === week ? 'current' : ''}">
          <span class="cycle-week">Wk ${w}</span>
          <span class="cycle-item">${+w === week ? '▶ ' : ''}${escapeHTML(d.items[0])}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── RENDER: INCARNONS ────────────────────────────────
function renderIncarnons() {
  const week = getCurrentWeek(START_DATES.incarnon, 8);
  const data = INCARNON_DATA[week];
  const grid = document.getElementById("incarnons-grid");
  grid.innerHTML = `
    <div class="post-card featured">
      <div class="week-badge">WEEK ${week} OF 8</div>
      <h3 class="post-title">This Week's Incarnons</h3>
      <div class="item-pills">
        ${data.items.map(i => `<span class="item-pill">${escapeHTML(i)}</span>`).join('')}
      </div>
      <div class="rotation-bar">
        ${Object.entries(INCARNON_DATA).map(([w]) =>
          `<div class="rot-pip ${+w === week ? 'active' : ''}"></div>`
        ).join('')}
      </div>
    </div>
    <div class="cycle-list">
      <h4 class="cycle-title">Full 8-Week Cycle</h4>
      ${Object.entries(INCARNON_DATA).map(([w, d]) => `
        <div class="cycle-row ${+w === week ? 'current' : ''}">
          <span class="cycle-week">Wk ${w}</span>
          <span class="cycle-item">${+w === week ? '▶ ' : ''}${d.items.join(', ')}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── RENDER: CIRCUIT WARFRAMES ────────────────────────
function renderCircuit() {
  const week = getCurrentWeek(START_DATES.circuit, 11);
  const data = CIRCUIT_DATA[week];
  const grid = document.getElementById("warframes-grid");
  grid.innerHTML = `
    <div class="post-card featured">
      <div class="week-badge">WEEK ${week} OF 11</div>
      <h3 class="post-title">This Week's Circuit Warframes</h3>
      <div class="item-pills">
        ${data.items.map(i => `<span class="item-pill">${escapeHTML(i)}</span>`).join('')}
      </div>
      <div class="rotation-bar">
        ${Object.entries(CIRCUIT_DATA).map(([w]) =>
          `<div class="rot-pip ${+w === week ? 'active' : ''}"></div>`
        ).join('')}
      </div>
    </div>
    <div class="cycle-list">
      <h4 class="cycle-title">Full 11-Week Cycle</h4>
      ${Object.entries(CIRCUIT_DATA).map(([w, d]) => `
        <div class="cycle-row ${+w === week ? 'current' : ''}">
          <span class="cycle-week">Wk ${w}</span>
          <span class="cycle-item">${+w === week ? '▶ ' : ''}${d.items.join(', ')}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── RENDER: BIRD ARCHON SHARD ────────────────────────
function renderBird() {
  const week = getCurrentWeek(START_DATES.bird, 3);
  const data = BIRD_DATA[week];
  const grid = document.getElementById("archon-shard-grid");
  const isCrimson = week === 3;
  grid.innerHTML = `
    <div class="post-card featured ${isCrimson ? 'crimson-alert' : ''}">
      <div class="week-badge">WEEK ${week} OF 3</div>
      ${isCrimson ? '<div class="alert-banner">🔴 RARK! RARK! IT\'S RED!</div>' : ''}
      <h3 class="post-title">${data.emoji} ${escapeHTML(data.items[0])}</h3>
      <p class="post-body" style="color:${data.color}">This week's Bird 3 Archon Shard color.</p>
      <div class="rotation-bar">
        ${[1,2,3].map(w =>
          `<div class="rot-pip ${w === week ? 'active' : ''}" style="${w === week ? `background:${data.color}` : ''}"></div>`
        ).join('')}
      </div>
    </div>
    <div class="cycle-list">
      <h4 class="cycle-title">3-Week Cycle</h4>
      ${Object.entries(BIRD_DATA).map(([w, d]) => `
        <div class="cycle-row ${+w === week ? 'current' : ''}">
          <span class="cycle-week">${d.emoji} Wk ${w}</span>
          <span class="cycle-item">${+w === week ? '▶ ' : ''}${escapeHTML(d.items[0])}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── RENDER: ARCHON HUNT ──────────────────────────────
function renderArchonHunt() {
  const week = getCurrentWeek(START_DATES.archon, 3);
  const data = ARCHON_DATA[week];
  const grid = document.getElementById("archon-hunt-grid");
  const isAmar = week === 1;
  grid.innerHTML = `
    <div class="post-card featured ${isAmar ? 'crimson-alert' : ''}">
      <div class="week-badge">WEEK ${week} OF 3</div>
      ${isAmar ? '<div class="alert-banner">🔴 RED WEEK — ARCHON AMAR!</div>' : ''}
      <h3 class="post-title">${data.emoji} ${escapeHTML(data.items[0])}</h3>
      <p class="post-body">Drops: <span style="color:${data.color}">${data.shard} Archon Shard</span></p>
      <div class="rotation-bar">
        ${[1,2,3].map(w =>
          `<div class="rot-pip ${w === week ? 'active' : ''}"></div>`
        ).join('')}
      </div>
    </div>
    <div class="cycle-list">
      <h4 class="cycle-title">3-Week Cycle</h4>
      ${Object.entries(ARCHON_DATA).map(([w, d]) => `
        <div class="cycle-row ${+w === week ? 'current' : ''}">
          <span class="cycle-week">${d.emoji} Wk ${w}</span>
          <span class="cycle-item">${+w === week ? '▶ ' : ''}${escapeHTML(d.items[0])} → ${d.shard} Shard</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ── HAMBURGER ────────────────────────────────────────
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("main-nav").classList.toggle("open");
});
document.querySelectorAll("#main-nav a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("main-nav").classList.remove("open"));
});

// ── INIT ─────────────────────────────────────────────
document.getElementById("week-num").textContent     = getCurrentWeek(START_DATES.teshin, 8);
document.getElementById("year").textContent         = new Date().getFullYear();
document.getElementById("footer-year").textContent  = new Date().getFullYear();

renderTeshin();
renderIncarnons();
renderCircuit();
renderBird();
renderArchonHunt();
