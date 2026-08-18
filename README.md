# macOS-style Personal Landing Page

A static personal portfolio designed to feel like a macOS desktop.

## Customize

Open `index.html` and replace:

- `Your Name`
- `YN`
- GitHub URL
- Email address
- LinkedIn URL
- Discord URL
- Project names/descriptions/tags

No framework, build step, database, or server is required.

## Cloudflare Pages

This is a static site, so it works directly on Cloudflare Pages.

For a GitHub-connected deployment:

1. Push these files to a GitHub repository.
2. In Cloudflare, create a Pages project from that repository.
3. Framework preset: **None**
4. Build command: leave empty.
5. Build output directory: `/`
6. Deploy.

Alternatively, upload the folder directly using Cloudflare Pages' direct upload option.

## Files

- `index.html` — page structure/content
- `style.css` — macOS-style UI and responsive layout
- `script.js` — clock and persistent light/dark mode
