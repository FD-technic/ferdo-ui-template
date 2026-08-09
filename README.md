# FD-ferdo-ui-template

Reusable React UI foundation and design system for FD projects.

Built with:

- React
- TypeScript
- Vite
- CSS custom properties
- Responsive Grid / Flexbox layouts

## Features

- Reusable UI components
- Layout components (`Container`, `Section`, `Row`, `Col`, `Grid`, `Stack`)
- Buttons, badges and cards
- Light / dark theme
- Centralized design tokens
- Typography system
- Data-driven project and contact components

## Structure

```text
src/
├── core/
│   ├── components/
│   ├── hooks/
│   ├── layout/
│   ├── providers/
│   └── styles/
└── web/
    ├── components/
    ├── content/
    ├── images/
    └── pages/
```

## Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Purpose

The project was developed as a reusable UI foundation for FDweb and future
personal projects.

The main goal is to keep reusable UI, layout and design tokens separate from
application-specific content.
