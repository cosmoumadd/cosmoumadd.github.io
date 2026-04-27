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

## File Structure
 
```
src/
  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    Contact.tsx
    NotFound.tsx              ← new
    UnderMaintenance.tsx      ← new
  components/
    Header.tsx
    Footer.tsx
  App.tsx                     ← updated
```
 
## Important Notes
 
1. **Route Order Matters**: The `path="*"` catch-all route MUST be the last route in your `<Routes>` block. Otherwise it'll swallow all routes that come after it.
2. **UnderMaintenance is Reusable**: You can use it for any page that's not ready. Just pass different props.
3. **Navigation Still Works**: Both pages include CTA buttons back to Home and other working sections.
4. **Remove from Header**: If a page shows UnderMaintenance, consider removing it from the nav or marking it differently:
   ```tsx
   { to: '/blog', label: 'Blog', disabled: true }
   ```
 
## Quick Win: Remove Blog from Nav Temporarily
 
In `Header.tsx`, comment out the blog link until it's ready:
 
```tsx
const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  // { to: '/blog', label: 'Blog' },  // Coming soon
  { to: '/contact', label: 'Contact' },
]
```

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