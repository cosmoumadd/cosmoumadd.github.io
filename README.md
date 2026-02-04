[zh](Intro_Readme)

## Cosmo's Personal Website

This repository contains the source code of my personal website, which is deployed on GitHub Pages:

- **GitHub Pages**: `https://cosmoumadd.github.io/`

The site is still under construction and will be continuously updated with more content and design improvements.

---

## Tech Stack

- **React 19** (function components)
- **TypeScript**
- **Vite** (development and build tool)
- **Tailwind CSS v4** (via `@tailwindcss/vite` and `@tailwindcss/postcss`)
- **GitHub Actions + GitHub Pages** (CI/CD and deployment)

---

## Development & Scripts

Run the following commands in the project root:

- **Install dependencies**

```bash
npm install
```

- **Start the dev server**

```bash
npm run dev
```

By default the app will be available at `http://localhost:5173` (see the terminal output for the exact URL).

- **Build for production**

```bash
npm run build
```

The build output will be generated in the `dist` folder.

---

## Project Structure

- `src/App.tsx`: Main page component, currently showing a simple “site under construction” message.
- `src/main.tsx`: React entry point that mounts `App` to the DOM.
- `src/index.css` / `src/App.css`: CSS entry files using `@import "tailwindcss";`.
- `vite.config.ts`: Vite configuration (including React and Tailwind plugins).
- `tailwind.config.js` / `postcss.config.js`: Tailwind and PostCSS configuration.

---

## Deployment (GitHub Pages)

This project uses **GitHub Actions** to automatically deploy to GitHub Pages:

- Whenever changes are pushed to the `main` branch, the workflow will:
  - Install dependencies
  - Run `npm run build`
  - Upload the `dist` folder and deploy it to GitHub Pages

You can check the status of each deployment under the **Actions** tab of the repository.

---

## Future Plans

- Add “About” and “Projects” pages
- Add light/dark theme toggle
- Publish more technical and learning notes

Feel free to check back later to see new updates to the site!  