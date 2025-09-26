## Brew — Website

Static site built with Jekyll, configured for GitHub Pages.

### Prerequisites
- Ruby (3.x recommended)
- Bundler (`gem install bundler`)

The site uses the `github-pages` gem (pins Jekyll and plugins) and `webrick` for local serving on Ruby 3.

### Quick Start (Development)
```bash
git clone <repo-url>
cd brewhq.github.io
bundle install
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000` (or the host/port shown in the console).

Useful options:
- Custom port: `bundle exec jekyll serve --port 4001`
- Build without serving: `bundle exec jekyll build`

### Project Structure
- `_layouts/` — HTML layouts (e.g., `default.html`)
- `_includes/` — Reusable partials (e.g., header, footer)
- `pages/` — Source pages that generate routes
- `assets/` — Images and static assets
- `_site/` — Build output (generated)
- `scripts/` — Client-side JavaScript
- `_config.yml` — Jekyll configuration

### Deployment

#### Option A: GitHub Pages (recommended)
This project uses the `github-pages` gem, which matches the GitHub Pages build environment.

1) Push to your GitHub repository default branch (e.g., `main`).
2) In the repo: Settings → Pages → Build and deployment → Source: “Deploy from a branch”. Set Branch to your default branch and Folder to `/ (root)`.
3) (Optional) Custom domain: Add your domain in Settings → Pages. Create a DNS CNAME record to GitHub Pages and commit a `CNAME` file containing your domain if needed.

GitHub Pages will build and publish automatically on push.

#### Option B: Any static host (Netlify, Cloudflare, S3, etc.)
Build locally or in CI, then upload `_site/`:
```bash
bundle exec jekyll build
# publish the contents of `_site/` to your static host
```
Typical CI config:
- Build command: `bundle install && bundle exec jekyll build`
- Publish directory: `_site`
- Environment: `JEKYLL_ENV=production`

### Troubleshooting
- If `jekyll serve` fails on Ruby 3 with WEBrick errors, ensure `webrick` is installed (already in Gemfile) and run via Bundler: `bundle exec jekyll serve`.
- If Bundler can’t resolve dependencies: `bundle update github-pages`.
- If port 4000 is busy: `bundle exec jekyll serve --port 4001`.

### License
Proprietary (update if different).


