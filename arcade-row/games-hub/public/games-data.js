// Each external game links out to its original site — nothing here is
// re-hosted except Flappy Bird, which ships as a local, self-contained build.
const GAMES = [
  { name: "Flappy Bird", category: "Arcade Classics", icon: "🐤", type: "embed", path: "games/flappybird/index.html" },

  // Racing & Driving
  { name: "Drift Hunters", category: "Racing & Driving", icon: "🏎️", url: "https://www.hoodamath.com/games/drifthunters.html" },
  { name: "Eggy Car", category: "Racing & Driving", icon: "🥚", url: "https://www.hoodamath.com/games/eggycar.html" },
  { name: "Drift Boss", category: "Racing & Driving", icon: "🏁", url: "https://www.hoodamath.com/games/driftboss.html" },
  { name: "Wheelie Bike", category: "Racing & Driving", icon: "🚲", url: "https://www.hoodamath.com/games/wheeliebike.html" },
  { name: "Soflo Wheelie Life", category: "Racing & Driving", icon: "🏍️", url: "https://www.hoodamath.com/games/soflowheelielife.html" },
  { name: "Shortcut Race", category: "Racing & Driving", icon: "🚗", url: "https://www.hoodamath.com/games/shortcutrace.html" },
  { name: "Rodha Passage", category: "Racing & Driving", icon: "🚙", url: "https://www.hoodamath.com/games/rodhapassage.html" },
  { name: "Rolling Ball 3D", category: "Racing & Driving", icon: "🔵", url: "https://www.hoodamath.com/games/rollingball3d.html" },

  // Runners & Platformers
  { name: "Snow Rider 3D", category: "Runners & Platformers", icon: "🛷", url: "https://www.hoodamath.com/games/snowrider3d.html" },
  { name: "OvO", category: "Runners & Platformers", icon: "🏃", url: "https://www.hoodamath.com/games/ovo.html" },
  { name: "Thorn and Balloons", category: "Runners & Platformers", icon: "🎈", url: "https://www.hoodamath.com/games/thornandballoons.html" },
  { name: "Geometry Rash", category: "Runners & Platformers", icon: "🔺", url: "https://www.hoodamath.com/games/geometryrash.html" },
  { name: "Level Devil Trap Path", category: "Runners & Platformers", icon: "😈", url: "https://www.hoodamath.com/games/leveldeviltrappath.html" },
  { name: "Slope Run", category: "Runners & Platformers", icon: "📉", url: "https://www.hoodamath.com/games/sloperun.html" },
  { name: "Opposite Day 2", category: "Runners & Platformers", icon: "🔁", url: "https://www.hoodamath.com/games/oppositeday2.html" },
  { name: "Algebra Run Lite", category: "Runners & Platformers", icon: "➗", url: "https://www.hoodamath.com/games/algebrarunlite.html" },
  { name: "Algebra Run", category: "Runners & Platformers", icon: "➗", url: "https://www.hoodamath.com/games/algebrarun.html" },
  { name: "Algebra Run Subzero", category: "Runners & Platformers", icon: "❄️", url: "https://www.hoodamath.com/games/algebrarunsubzero.html" },
  { name: "Algebra Run Meltdown", category: "Runners & Platformers", icon: "🔥", url: "https://www.hoodamath.com/games/algebrarunmeltdown.html" },
  { name: "Algebra Run Wave", category: "Runners & Platformers", icon: "🌊", url: "https://www.hoodamath.com/games/algebrarunwave.html" },
  { name: "Algebra Run World: Toxic Factory", category: "Runners & Platformers", icon: "☣️", url: "https://www.hoodamath.com/games/algebrarunworldtoxicfactory.html" },

  // Clickers & Idle
  { name: "Spacebar Clicker", category: "Clickers & Idle", icon: "⌨️", url: "https://www.hoodamath.com/games/spacebarclicker.html" },
  { name: "67 Clicker", category: "Clickers & Idle", icon: "6️⃣", url: "https://www.hoodamath.com/games/67clicker.html" },
  { name: "Butter Clicker", category: "Clickers & Idle", icon: "🧈", url: "https://www.hoodamath.com/games/butterclicker.html" },
  { name: "Dr Pepper Clicker", category: "Clickers & Idle", icon: "🥤", url: "https://www.hoodamath.com/games/drpepperclicker.html" },
  { name: "Italian Brainrot Clicker", category: "Clickers & Idle", icon: "🇮🇹", url: "https://www.hoodamath.com/games/italianbrainrotclicker.html" },
  { name: "Duck Duck Clicker", category: "Clickers & Idle", icon: "🦆", url: "https://www.hoodamath.com/games/duckduckclicker.html" },
  { name: "Duck Duck Clicker 3D", category: "Clickers & Idle", icon: "🦆", url: "https://www.hoodamath.com/games/duckduckclicker3d.html" },
  { name: "Learn to Fly Idle", category: "Clickers & Idle", icon: "🐧", url: "https://www.hoodamath.com/games/learntoflyidle.html" },
  { name: "Popsicle Clicker", category: "Clickers & Idle", icon: "🍧", url: "https://www.hoodamath.com/games/popsicleclicker.html" },
  { name: "Idle Breakout", category: "Clickers & Idle", icon: "🧱", url: "https://www.hoodamath.com/games/idlebreakout.html" },
  { name: "Easter Clicker", category: "Clickers & Idle", icon: "🥚", url: "https://www.hoodamath.com/games/easterclicker.html" },
  { name: "Planet Clicker", category: "Clickers & Idle", icon: "🪐", url: "https://www.hoodamath.com/games/planetclicker.html" },
  { name: "Capybara Clicker", category: "Clickers & Idle", icon: "🦫", url: "https://www.hoodamath.com/games/capybaraclicker.html" },
  { name: "Bitcoin Clicker", category: "Clickers & Idle", icon: "🪙", url: "https://www.hoodamath.com/games/bitcoinclicker.html" },
  { name: "Whopper Clicker", category: "Clickers & Idle", icon: "🍔", url: "https://www.hoodamath.com/games/whopperclicker.html" },
  { name: "Candy Clicker", category: "Clickers & Idle", icon: "🍬", url: "https://www.hoodamath.com/games/candyclicker.html" },
  { name: "Candy Clicker 2", category: "Clickers & Idle", icon: "🍬", url: "https://www.hoodamath.com/games/candyclicker2.html" },
  { name: "Cookie Clicker", category: "Clickers & Idle", icon: "🍪", url: "https://www.hoodamath.com/games/cookieclicker.html" },
  { name: "Stack Game", category: "Clickers & Idle", icon: "🟪", url: "https://www.hoodamath.com/games/stackgame.html" },

  // Puzzle & Brain
  { name: "Hooda Slice It", category: "Puzzle & Brain", icon: "🔪", url: "https://www.hoodamath.com/games/hoodasliceit.html" },
  { name: "Element Merge", category: "Puzzle & Brain", icon: "🧪", url: "https://www.hoodamath.com/games/elementmerge.html" },
  { name: "Infinite Craft", category: "Puzzle & Brain", icon: "♾️", url: "https://www.hoodamath.com/games/infinitecraft.html" },
  { name: "Little Alchemy", category: "Puzzle & Brain", icon: "⚗️", url: "https://www.hoodamath.com/games/littlealchemy.html" },
  { name: "Pop The Lock", category: "Puzzle & Brain", icon: "🔓", url: "https://www.hoodamath.com/games/popthelock.html" },
  { name: "Block Blast", category: "Puzzle & Brain", icon: "🟦", url: "https://www.hoodamath.com/games/blockblast.html" },
  { name: "Piano Tiles", category: "Puzzle & Brain", icon: "🎹", url: "https://www.hoodamath.com/games/pianotiles.html" },
  { name: "Destress Game", category: "Puzzle & Brain", icon: "🫧", url: "https://www.hoodamath.com/games/destressgame.html" },
  { name: "Hooda Life", category: "Puzzle & Brain", icon: "🌱", url: "https://www.hoodamath.com/games/hoodalife.html" },

  // Cooking & Sim
  { name: "Papa's Freezeria", category: "Cooking & Sim", icon: "🍨", url: "https://www.hoodamath.com/games/papasfreezeria.html" },
  { name: "Papa's Scooperia", category: "Cooking & Sim", icon: "🍦", url: "https://www.hoodamath.com/games/papasscooperia.html" },
];
