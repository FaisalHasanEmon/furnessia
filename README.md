## Furnessia

Furnessia is a React single-page application built with Vite, React Router, Tailwind CSS and `i18next` for internationalization.

This guide explains how to **clone**, **set up**, and **run** the project on your machine.

> Replace `YOUR_GITHUB_USERNAME` and repository name in the commands below with the actual values for your repo if they differ.

### 1. Prerequisites

- **Node.js**: v18 or newer (LTS recommended)
- **npm**: comes with Node.js
- **Git**: to clone the repository

You can verify your versions with:

```bash
node -v
npm -v
git --version
```

### 2. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/furnis.git
cd furnis
```

If your project is in a subfolder inside the repo, `cd` into that folder (for example, `cd furnis/furnis`).

### 3. Install dependencies

From the project root (where `package.json` lives), run:

```bash
npm install
```

This will install all required dependencies (React, Vite, Tailwind CSS, i18next, React Router, etc.).

### 4. Run the development server

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.

### 5. Build for production

To create an optimized production build:

```bash
npm run build
```

The built files will be output to the `dist` directory.

### 6. Preview the production build

After building, you can preview the production build locally:

```bash
npm run preview
```

### 7. Linting

To run ESLint and check for code style or potential issues:

```bash
npm run lint
```

### 8. Project structure (high level)

Some key files/folders:

- **`src/main.jsx`**: entry point that sets up React, React Router, and `i18next`.
- **`src/routes/`**: application routes configuration.
- **`src/components/`**: reusable React components.
- **`src/i18n.js`**: internationalization configuration.
- **`src/index.css`**: global styles (including Tailwind CSS setup).

You can now start modifying components and routes to customize the Furnis application.
