const CATEGORY_COLORS = {
  "Arcade Classics": "#FFC857",
  "Racing & Driving": "#FF5D73",
  "Runners & Platformers": "#6BCB77",
  "Clickers & Idle": "#7FB2FF",
  "Puzzle & Brain": "#C792EA",
  "Cooking & Sim": "#FFA36B",
};

const grid = document.getElementById("grid");
const chipsEl = document.getElementById("chips");
const searchEl = document.getElementById("search");
const emptyEl = document.getElementById("empty");

const categories = ["All", ...new Set(GAMES.map(g => g.category))];
let activeCategory = "All";
let query = "";

document.getElementById("stat-games").textContent = GAMES.length;
document.getElementById("stat-cats").textContent = categories.length - 1;

function renderChips() {
  chipsEl.innerHTML = "";
  categories.forEach(cat => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (cat === activeCategory ? " active" : "");
    chip.textContent = cat;
    chip.style.setProperty("--chip-accent", CATEGORY_COLORS[cat] || "#FFC857");
    chip.addEventListener("click", () => {
      activeCategory = cat;
      renderChips();
      renderGrid();
    });
    chipsEl.appendChild(chip);
  });
}

function matches(game) {
  const inCategory = activeCategory === "All" || game.category === activeCategory;
  const inQuery = game.name.toLowerCase().includes(query.trim().toLowerCase());
  return inCategory && inQuery;
}

function renderGrid() {
  grid.innerHTML = "";
  const results = GAMES.filter(matches);
  emptyEl.hidden = results.length !== 0;

  results.forEach(game => {
    const card = document.createElement(game.type === "embed" ? "button" : "a");
    card.className = "card";
    card.style.setProperty("--accent", CATEGORY_COLORS[game.category] || "#FFC857");

    if (game.type === "embed") {
      card.type = "button";
      card.addEventListener("click", () => openPlayer(game));
    } else {
      card.href = game.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    card.innerHTML = `
      <div class="card-tile">${game.icon}</div>
      <div class="card-body">
        <div class="card-name">${game.name}</div>
        <div class="card-cat">${game.category}</div>
      </div>
      <div class="card-go">${game.type === "embed" ? "Play here" : "Open ↗"}</div>
    `;
    grid.appendChild(card);
  });
}

searchEl.addEventListener("input", e => {
  query = e.target.value;
  renderGrid();
});

// Local player, for the one game that actually lives on this site.
const player = document.getElementById("player");
const playerFrame = document.getElementById("player-frame");
const playerTitle = document.getElementById("player-title");

function openPlayer(game) {
  playerTitle.textContent = game.name;
  playerFrame.src = game.path;
  player.hidden = false;
  document.body.style.overflow = "hidden";
}

function closePlayer() {
  player.hidden = true;
  playerFrame.src = "";
  document.body.style.overflow = "";
}

document.getElementById("player-close").addEventListener("click", closePlayer);
document.getElementById("player-fullscreen").addEventListener("click", () => {
  playerFrame.requestFullscreen?.();
});

renderChips();
renderGrid();
