<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Project Setup Complete: Vũ Hoàng An Portfolio

## Project Overview
- **Name**: vu-hoang-an-portfolio
- **Type**: Next.js 15 Portfolio Website
- **Status**: Foundation Architecture Ready ✅

## Tech Stack
- Next.js 15 with App Router
- TypeScript
- TailwindCSS (Dark Theme)
- Shadcn UI
- Framer Motion + GSAP
- React Three Fiber + Drei
- Zustand for state management

## Completed Setup Tasks

- ✅ Project structure created with scalable folder organization
- ✅ All dependencies configured (see package.json)
- ✅ TypeScript configuration with path aliases
- ✅ TailwindCSS dark theme setup
- ✅ ESLint + Prettier configured
- ✅ Base utilities and hooks for animations
- ✅ GSAP and Three.js integration ready
- ✅ Responsive design utilities
- ✅ Environment configuration templates
- ✅ Base components (Button, AnimatedSection, Scene3D, etc.)

## Next Steps for Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Add Shadcn UI Components
```bash
npx shadcn-ui@latest add [component-name]
# Example: npx shadcn-ui@latest add card
```

### 4. Create Portfolio Sections
Sections should be created in `src/components/sections/`:
- Hero/Header
- About
- Projects/Portfolio
- Skills
- Contact
- Footer

### 5. Add 3D Elements
Place 3D components in `src/components/3d/`:
- Create reusable Three.js scenes
- Use `@react-three/drei` helpers
- Wrap in `Scene3D` component

## Development Guidelines

### Component Organization
- `src/components/ui/` - Shadcn UI components
- `src/components/sections/` - Page sections
- `src/components/3d/` - Three.js components
- Use `ClientOnly` wrapper for client-specific features

### Animations
- **Simple animations**: Framer Motion (AnimatedSection)
- **Advanced scroll effects**: GSAP with ScrollTrigger
- **3D animations**: React Three Fiber

### Responsive Design
- Mobile-first approach
- Use Tailwind responsive prefixes: `md:`, `lg:`, `xl:`
- Use `useResponsive` hook for complex logic

### Dark Theme
- Configured by default
- CSS variables in `src/styles/globals.css`
- Customize colors in `tailwind.config.ts`

## File Structure Reference
```
src/
├── app/              # Pages & layouts (Next.js 15 App Router)
├── components/       # Reusable components
│  ├── ui/           # Base UI components
│  ├── sections/     # Page sections (to be added)
│  └── 3d/           # 3D components
├── hooks/           # Custom React hooks
├── lib/             # Utilities & config
├── utils/           # Helper functions
└── styles/          # Global styles
```

## Quick Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - Check code quality
- `npm run format` - Format code
- `npm run type-check` - TypeScript check

## Key Files to Know
- `tsconfig.json` - Path aliases configured
- `tailwind.config.ts` - Dark theme + animations
- `src/styles/globals.css` - Global styles & theme colors
- `next.config.js` - Next.js configuration
- `src/lib/store.ts` - Zustand store setup

## When Building Sections
1. Create component in `src/components/sections/YourSection.tsx`
2. Use `'use client'` directive for interactivity
3. Wrap in `AnimatedSection` for animations
4. Import and use in app pages
5. Ensure mobile responsiveness with Tailwind classes

## Helpful Utilities Available
- `useResponsive()` - Get device type
- `useScrollDirection()` - Detect scroll direction
- `useMousePosition()` - Track mouse
- `cn()` - Merge Tailwind classes
- `gsap` + `ScrollTrigger` - Advanced animations

## Resources
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Drei](https://github.com/pmndrs/drei)

---

**Ready to start!** Run `npm install` to begin development.
