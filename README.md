
  # Improve Screenshot Representation

  This is a code bundle for Improve Screenshot Representation. The original project is available at https://www.figma.com/design/Am0mIwamk0RtgIKx7FMlq7/Improve-Screenshot-Representation.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

## Deploying to GitHub Pages

This project is configured to deploy with GitHub Actions to GitHub Pages. The workflow builds to `build/` and publishes it.

Steps:

1. Commit your changes on the branch you want to deploy (default includes `main` and `landing-v2`).
2. Push to GitHub. The `Deploy Vite site to GitHub Pages` workflow will run automatically.
3. Enable Pages: In your repository, go to Settings → Pages → Build and deployment → Source: GitHub Actions (if not already set).

Notes:

- Vite `base` is set automatically for GitHub Pages:
  - User/Org sites like `username.github.io`: base is `/`.
  - Project sites like `username.github.io/repo`: base is `/${repo}/`.
  This is applied when building in GitHub Actions. Local dev remains `/`.

Local build preview:

```bash
npm run build && npx serve -s build
```
  