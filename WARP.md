# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Development Server
```bash
npm run dev
```
Starts the Next.js development server with Turbopack on http://localhost:3000

### Building and Deployment
```bash
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Package Management
```bash
npm install              # Install dependencies
npm ci                   # Clean install (CI/CD)
```

## Architecture Overview

This is a **Next.js 15** portfolio website for Dania Kleinbaum-Labelle built with:
- **App Router** (Next.js 13+ routing system)
- **TypeScript** for type safety
- **Tailwind CSS** v4 for styling
- **Motion** (Framer Motion) for animations
- **Base UI Components** for accessible UI primitives

### Project Structure

```
src/
├── app/              # App Router pages and layouts
│   ├── layout.tsx    # Root layout with fonts and globals
│   ├── page.tsx      # Root page (redirects to /_fr)
│   ├── _fr/          # French language route
│   └── en/           # English language route
├── components/       # Reusable UI components
│   ├── Header/       # Navigation header with social links
│   ├── CardStack.tsx # Interactive hobby cards component
│   └── Icon/         # SVG icon components with barrel exports
└── lib/
    └── utils.ts      # Utility functions (cn for className merging)
```

### Key Architecture Patterns

**Multi-language Support**: The site uses route-based internationalization with `/en` and `/_fr` routes, each having their own layouts and content.

**Component Organization**: Icons are organized in a dedicated folder with a barrel export pattern (`Icon/index.ts`) for clean imports.

**Animation System**: Uses Motion (Framer Motion) for complex animations, particularly in the CardStack component which features automatic cycling and hover interactions.

**Styling Architecture**: 
- Tailwind CSS v4 with custom configuration
- Custom CSS variables for fonts (`--font-inter`, `--font-mona-sans`)
- Utility-first approach with `cn()` utility for conditional classes

**State Management**: Uses React's built-in state management (useState, useEffect) for component-level state, particularly for the interactive card animations.

### Component Highlights

**Header Component**: 
- Fixed positioning with progressive blur background
- Social media links with tooltips (Base UI)
- PDF download functionality
- Responsive design patterns

**CardStack Component**:
- Complex animation logic with auto-cycling cards
- User interaction handling (hover interrupts auto-cycle)
- Motion-powered card animations with spring physics
- Timeout management for smooth UX

### Development Notes

- Uses **Turbopack** for faster development builds (enabled in package.json dev script)
- TypeScript configuration includes path aliases (`@/*` → `./src/*`)
- ESLint configured with Next.js recommended rules and TypeScript support
- PostCSS configured specifically for Tailwind CSS v4

### Font Configuration
- **Inter**: Variable font for body text
- **Mona Sans**: Variable font for headings (GitHub's font)
- Both fonts loaded via `next/font/google` with Latin subsets

This is a personal portfolio/CV website showcasing a clean, modern design with smooth animations and bilingual content support.
