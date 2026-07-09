# Mihir — Portfolio

A single-page, Apple-styled personal portfolio. Plain HTML + CSS + vanilla JS, zero build step, zero npm dependencies. Deploys as a static site.

```
leopanthera07.github.io/
├── index.html      # markup + section shells
├── style.css       # full design-token system (light + dark)
├── script.js       # journey / projects / skills data + interactivity
├── assets/
│   └── memoji.png   # ← you drop this in (fallback renders until you do)
├── .nojekyll        # tells GitHub Pages to serve files as-is
└── README.md
```

## Before you publish — fill these in

Search the code for `TODO: MIHIR` and replace:

- **Email** — `index.html`, contact section: `mailto:MIHIR@EMAIL.COM`
- **LinkedIn** — `index.html`, contact section: `https://linkedin.com/in/MIHIR`
- **GitHub username** — `script.js`, `GITHUB_USER` constant (pre-set to `LeoPanthera07`)
- **Project repo names** — `script.js`, each project's `repo` field builds its GitHub link. Confirm they match your actual repo names.
- **Memoji** — export from iPhone and save as `assets/memoji.png` (see below)

The GitHub profile link and repo origin are already set to `LeoPanthera07`.

## Add your Memoji

1. iPhone → Messages → tap your Memoji → hold → **Save as Sticker**
2. AirDrop the PNG to your Mac
3. Rename it `memoji.png` and place it in `assets/`

Until the file exists, the hero shows a gradient circle with an "M" — no broken image.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy — GitHub Pages (this repo is already named for it)

This repo is `leopanthera07.github.io`, so GitHub serves it at your root domain automatically.

```bash
git add .
git commit -m "Build portfolio site"
git push -u origin main
```

Then: **repo → Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**
Wait ~60 seconds; the site goes live at **https://leopanthera07.github.io**.

### Custom domain (optional)
Buy e.g. `mihirai.dev` (~$10/yr), add a `CNAME` file containing the domain to this repo, and set it under Settings → Pages → Custom domain.

## Alternative hosts
- **Netlify** — netlify.com → Add new site → Deploy manually → drag this folder in.
- **Vercel** — Import the GitHub repo, no build command (static), Deploy. Auto-deploys on push.

## Notes
- Respects `prefers-color-scheme` (light/dark) and `prefers-reduced-motion`.
- Responsive down to 375px with no horizontal scroll.
- All content lives in `script.js` data arrays (`JOURNEY`, `FEATURED`, `PROJECTS`, `SKILLS`) — edit there to update the site.

© 2025 Mihir · Built with intention
