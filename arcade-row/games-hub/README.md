# Arcade Row

A small, honest games hub: a searchable, categorized list of browser games.
Most cards link out to their original site in a new tab; Flappy Bird runs
locally since its files are bundled in `public/games/flappybird`.

No tab-cloaking, no proxy, no disguise features — just a normal site with a
normal title and icon.

## Run locally

```
npm install
npm start
```

Then open http://localhost:3000

## Deploy to Railway

1. Push this folder to a GitHub repo (or use `railway init` + `railway up`
   from inside this folder with the Railway CLI).
2. In Railway, create a new project from that repo.
3. Railway detects Node automatically, runs `npm install`, then `npm start`
   (see `Procfile` / the `start` script in `package.json`).
4. Railway assigns a public URL once the deploy finishes — no extra config
   needed, since the server reads `process.env.PORT`.

## Adding more games

Open `public/games-data.js` and add an entry to the `GAMES` array:

```js
{ name: "New Game", category: "Puzzle & Brain", icon: "🧩", url: "https://example.com/game" }
```

For a game you want to host locally (like Flappy Bird), drop its files in
`public/games/<slug>/` and use `type: "embed", path: "games/<slug>/index.html"`
instead of `url`.
