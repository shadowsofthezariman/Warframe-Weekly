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
  1: { items: ["Umbra Forma Blueprint"],  img: "images/Teshin's Rotating Items/UmbraForma.png" },
  2: { items: ["50,000 Kuva"],            img: "images/Teshin's Rotating Items/Kuva.png" },
  3: { items: ["Kitgun Riven Mod"],       img: "images/Teshin's Rotating Items/RivenModTemplate.png" },
  4: { items: ["3 × Forma"],             img: "images/Teshin's Rotating Items/Forma.png" },
  5: { items: ["Zaw Riven Mod"],          img: "images/Teshin's Rotating Items/RivenModTemplate.png" },
  6: { items: ["30,000 Endo"],            img: "images/Teshin's Rotating Items/Endo.png" },
  7: { items: ["Rifle Riven Mod"],        img: "images/Teshin's Rotating Items/RivenModTemplate.png" },
  8: { items: ["Shotgun Riven Mod"],      img: "images/Teshin's Rotating Items/RivenModTemplate.png" },
};

const INCARNON_DATA = {
  1: { items: ["Braton", "Lato", "Skana", "Paris", "Kunai"], imgs: ["images/Incarnon Genesis Weapons/BratonIncarnon.png", "images/Incarnon Genesis Weapons/LatoIncarnon.png", "images/Incarnon Genesis Weapons/SkanaIncarnon.png", "images/Incarnon Genesis Weapons/ParisIncarnon.png", "images/Incarnon Genesis Weapons/KunaiIncarnon.png"] },
  2: { items: ["Boar", "Gammacor", "Angstrum", "Gorgon", "Anku"], imgs: ["images/Incarnon Genesis Weapons/BoarIncarnon.png", "images/Incarnon Genesis Weapons/GammacorIncarnon.png", "images/Incarnon Genesis Weapons/AngstrumIncarnon.png", "images/Incarnon Genesis Weapons/GorgonIncarnon.png", "images/Incarnon Genesis Weapons/AnkuIncarnon.png"] },
  3: { items: ["Bo", "Latron", "Furis", "Furax", "Strun"], imgs: ["images/Incarnon Genesis Weapons/BoIncarnon.png", "images/Incarnon Genesis Weapons/LatronIncarnon.png", "images/Incarnon Genesis Weapons/FurisIncarnon.png", "images/Incarnon Genesis Weapons/FuraxIncarnon.png", "images/Incarnon Genesis Weapons/StrunIncarnon.png"] },
  4: { items: ["Lex", "Magistar", "Boltor", "Bronco", "Ceramic Dagger"], imgs: ["images/Incarnon Genesis Weapons/LexIncarnon.png", "images/Incarnon Genesis Weapons/MagistarIncarnon.png", "images/Incarnon Genesis Weapons/BoltorIncarnon.png", "images/Incarnon Genesis Weapons/BroncoIncarnon.png", "images/Incarnon Genesis Weapons/CeramicDaggerIncarnon.png"] },
  5: { items: ["Torid", "Dual Toxocyst", "Dual Ichor", "Miter", "Atomos"], imgs: ["images/Incarnon Genesis Weapons/ToridIncarnon.png", "images/Incarnon Genesis Weapons/DualToxocystIncarnon.png", "images/Incarnon Genesis Weapons/DualIchorIncarnon.png", "images/Incarnon Genesis Weapons/MiterIncarnon.png", "images/Incarnon Genesis Weapons/AtomosIncarnon.png"] },
  6: { items: ["Ack & Brunt", "Soma", "Vasto", "Nami Solo", "Burston"], imgs: ["images/Incarnon Genesis Weapons/Ack_BruntIncarnon.png", "images/Incarnon Genesis Weapons/SomaIncarnon.png", "images/Incarnon Genesis Weapons/VastoIncarnon.png", "images/Incarnon Genesis Weapons/NamiSoloIncarnon.png", "images/Incarnon Genesis Weapons/BurstonIncarnon.png"] },
  7: { items: ["Zylok", "Sibear", "Dread", "Despair", "Hate"], imgs: ["images/Incarnon Genesis Weapons/ZylokIncarnon.png", "images/Incarnon Genesis Weapons/SibearIncarnon.png", "images/Incarnon Genesis Weapons/DreadIncarnon.png", "images/Incarnon Genesis Weapons/DespairIncarnon.png", "images/Incarnon Genesis Weapons/HateIncarnon.png"] },
  8: { items: ["Dera", "Sybaris", "Cestra", "Sicarus", "Okina"], imgs: ["images/Incarnon Genesis Weapons/DeraIncarnon.png", "images/Incarnon Genesis Weapons/SybarisIncarnon.png", "images/Incarnon Genesis Weapons/CestraIncarnon.png", "images/Incarnon Genesis Weapons/SicarusIncarnon.png", "images/Incarnon Genesis Weapons/OkinaIncarnon.png"] },
};

const CIRCUIT_DATA = {
  1:  { items: ["Excalibur", "Trinity", "Ember"],    imgs: ["images/Warframes/Excalibur.png", "images/Warframes/Trinity.png", "images/Warframes/Ember.png"] },
  2:  { items: ["Loki", "Mag", "Rhino"],             imgs: ["images/Warframes/Loki.png", "images/Warframes/Mag.png", "images/Warframes/Rhino.png"] },
  3:  { items: ["Ash", "Frost", "Nyx"],              imgs: ["images/Warframes/Ash.png", "images/Warframes/Frost.png", "images/Warframes/Nyx.png"] },
  4:  { items: ["Saryn", "Vauban", "Nova"],          imgs: ["images/Warframes/Saryn.png", "images/Warframes/Vauban.png", "images/Warframes/Nova.png"] },
  5:  { items: ["Nekros", "Valkyr", "Oberon"],       imgs: ["images/Warframes/Nekros.png", "images/Warframes/Valkyr.png", "images/Warframes/Oberon.png"] },
  6:  { items: ["Hydroid", "Mirage", "Limbo"],       imgs: ["images/Warframes/Hydroid.png", "images/Warframes/Mirage.png", "images/Warframes/Limbo.png"] },
  7:  { items: ["Mesa", "Chroma", "Atlas"],          imgs: ["images/Warframes/Mesa.png", "images/Warframes/Chroma.png", "images/Warframes/Atlas.png"] },
  8:  { items: ["Ivara", "Inaros", "Titania"],       imgs: ["images/Warframes/Ivara.png", "images/Warframes/Inaros.png", "images/Warframes/Titania.png"] },
  9:  { items: ["Nidus", "Octavia", "Harrow"],       imgs: ["images/Warframes/Nidus.png", "images/Warframes/Octavia.png", "images/Warframes/Harrow.png"] },
  10: { items: ["Gara", "Khora", "Revenant"],        imgs: ["images/Warframes/Gara.png", "images/Warframes/Khora.png", "images/Warframes/Revenant.png"] },
  11: { items: ["Garuda", "Baruuk", "Hildryn"],      imgs: ["images/Warframes/Garuda.png", "images/Warframes/Baruuk.png", "images/Warframes/Hildryn.png"] },
};

const BIRD_DATA = {
  1: { items: ["Azure Archon Shard"],   color: "#4fc3f7", emoji: "🔵", img: "images/ArchonShards/AzureArchonShard.png" },
  2: { items: ["Amber Archon Shard"],   color: "#ffb300", emoji: "🟡", img: "images/ArchonShards/AmberArchonShard.png" },
  3: { items: ["Crimson Archon Shard"], color: "#ef5350", emoji: "🔴", img: "images/ArchonShards/CrimsonArchonShard.png" },
};

const ARCHON_DATA = {
  1: { items: ["Archon Amar"],   shard: "Crimson", color: "#ef5350", emoji: "🔴", img: "images/Archons/ArchonAmar.png",   shardImg: "images/ArchonShards/CrimsonArchonShard.png" },
  2: { items: ["Archon Nira"],   shard: "Amber",   color: "#ffb300", emoji: "🟡", img: "images/Archons/ArchonNira.png",   shardImg: "images/ArchonShards/AmberArchonShard.png" },
  3: { items: ["Archon Boreal"], shard: "Azure",   color: "#4fc3f7", emoji: "🔵", img: "images/Archons/ArchonBoreal.png", shardImg: "images/ArchonShards/AzureArchonShard.png" },
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
      ${data.img ? `<img class="item-img" src="${data.img}" alt="${escapeHTML(data.items[0])}" />` : ''}
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
      <div class="item-img-row">
        ${data.items.map((item, i) => `
          <div class="item-img-cell">
            <img class="item-img item-img-sm" src="${data.imgs[i]}" alt="${escapeHTML(item)}" />
            <span class="item-img-label">${escapeHTML(item)}</span>
          </div>
        `).join('')}
      </div>
      <p class="post-body">Every week in the Steel Path Circuit, players can select two Incarnon Genesis Adapters as the Tier 5 and 10 rewards.</p>
      <div class="rotation-bar">
        ${Object.entries(INCARNON_DATA).map(([w]) =>
          `<div class="rot-pip ${+w === week ? 'active' : ''}"></div>`
        ).join('')}
      </div>
      
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
      <div class="item-img-row">
        ${data.items.map((item, i) => `
          <div class="item-img-cell">
            <img class="item-img item-img-sm" src="${data.imgs[i]}" alt="${escapeHTML(item)}" />
            <span class="item-img-label">${escapeHTML(item)}</span>
          </div>
        `).join('')}
      </div>
      <p class="post-body">Every week in the Circuit,
players can choose to earn the blueprints of a Warframe. 
The Main Blueprint is at Tier 10. 
The others are:
Tier 2 Neuroptics,
Tier 5 Chassis, 
Tier 7 Augment Mod, 
Tier 8 Systems.</p>
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
      <img class="item-img" src="${data.img}" alt="${escapeHTML(data.items[0])}" />
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
      <div class="item-img-row">
        <div class="item-img-cell">
          <img class="item-img item-img-sm" src="${data.img}" alt="${escapeHTML(data.items[0])}" />
          <span class="item-img-label">${escapeHTML(data.items[0])}</span>
        </div>
        <div class="item-img-cell">
          <img class="item-img item-img-sm" src="${data.shardImg}" alt="${data.shard} Archon Shard" />
          <span class="item-img-label" style="color:${data.color}">${data.shard} Shard</span>
        </div>
      </div>
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
