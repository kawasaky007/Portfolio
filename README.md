# Vũ Hoàng An - Portfolio

Modern portfolio website built with Next.js 15, TypeScript, and cutting-edge web technologies.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with dark theme
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: React Three Fiber + Drei
- **State Management**: Zustand
- **Code Quality**: ESLint + Prettier

## 📋 Project Structure

```
src/
├── app/                 # Next.js App Router pages and layouts
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   ├── ui/            # Base UI components (Button, etc.)
│   ├── sections/      # Page section components
│   ├── 3d/            # 3D/Three.js components
│   ├── Providers.tsx  # Client-side providers
│   ├── ClientOnly.tsx # Hydration-safe wrapper
│   └── AnimatedSection.tsx
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configs
│   ├── gsap.ts       # GSAP configuration
│   ├── store.ts      # Zustand stores
│   └── utils.ts      # Helper functions
├── utils/            # Utility functions
│   ├── animation.ts  # Animation helpers
│   └── responsive.ts # Responsive design utilities
├── styles/           # Global styles
│   └── globals.css   # Tailwind + custom CSS
└── public/           # Static assets

```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```

3. **Initialize Shadcn UI** (if needed):
   ```bash
   npx shadcn-ui@latest init
   ```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## 🎨 Architecture & Best Practices

### Responsive Design

The project includes responsive utilities for mobile-first development:

```typescript
import { useResponsive, isMobile, isDesktopOrAbove } from '@/utils/responsive';

// In components
const { isMobile, isTablet, isDesktop } = useResponsive();
```

### Client-Side Safety

Use `ClientOnly` wrapper for components that need client-side rendering:

```typescript
<ClientOnly fallback={<Loading />}>
  <YourComponent />
</ClientOnly>
```

### Animations

**Framer Motion** - For UI animations:
```typescript
import { AnimatedSection } from '@/components/AnimatedSection';

<AnimatedSection delay={0.2} direction="up">
  Content
</AnimatedSection>
```

**GSAP** - For advanced scroll animations:
```typescript
import { gsap, ScrollTrigger } from '@/lib/gsap';

gsap.registerPlugin(ScrollTrigger);
// Use in useEffect with proper cleanup
```

### 3D Components

React Three Fiber components go in `src/components/3d/`:

```typescript
import { Scene3D } from '@/components/3d/Scene3D';

<Scene3D>
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Scene3D>
```

### State Management

Use Zustand for global state:

```typescript
import { useAnimationStore } from '@/lib/store';

const { isLoading, setIsLoading } = useAnimationStore();
```

### Dark Theme

The site uses a dark theme by default. CSS variables are defined in `globals.css`:

```css
:root {
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;
  --accent: 262 80% 50%;
  /* ... */
}
```

## 🚀 Adding New Sections

1. Create component in `src/components/sections/`
2. Export from main app or route
3. Use `AnimatedSection` for built-in animations
4. Ensure responsive with Tailwind's `md:` and `lg:` breakpoints

Example:

```typescript
// src/components/sections/Hero.tsx
'use client';

import { AnimatedSection } from '@/components/AnimatedSection';

export const Hero = () => {
  return (
    <AnimatedSection className="section-padding">
      <h1 className="gradient-text text-5xl font-bold">
        Section Title
      </h1>
    </AnimatedSection>
  );
};
```

## 🎯 Adding Shadcn Components

Install components with shadcn-ui CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

Example:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

Use Tailwind's responsive prefixes:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🔧 Environment Variables

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_GA_ID=your_analytics_id
```

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## 📦 Dependencies Overview

| Package | Purpose |
|---------|---------|
| Next.js | React framework |
| TypeScript | Type safety |
| TailwindCSS | Utility-first CSS |
| Shadcn UI | Pre-built components |
| Framer Motion | React animations |
| GSAP | Advanced animations |
| Three.js | 3D graphics |
| React Three Fiber | Three.js for React |
| Drei | Useful R3F helpers |
| Zustand | State management |

## 🐛 Debugging

- Check browser console for errors
- Use `npm run type-check` to verify TypeScript
- Use `npm run lint` to check code quality
- Ensure environment variables are set

## 🚢 Deployment

The site is ready to deploy on Vercel, Netlify, or any Node.js hosting:

```bash
npm run build
```

## 📄 License

MIT

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize!

---

**Next Steps**: 
1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Begin adding portfolio sections in `src/components/sections/`
4. Customize colors and theme in `tailwind.config.ts` and `globals.css`
