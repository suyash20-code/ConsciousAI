# ConsciousAI React JS Portfolio

Component-based React + Vite portfolio for ConsciousAI.

## Install and run

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx
│   │   ├── Services.jsx
│   │   ├── TechStack.jsx
│   │   ├── Team.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Button.jsx
│       └── SectionHeading.jsx
├── data/siteData.js
├── styles/global.css
├── App.jsx
└── main.jsx
```

All portfolio content is centralized in `src/data/siteData.js`.
