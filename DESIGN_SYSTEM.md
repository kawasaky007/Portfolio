# Design System - Premium Frontend Developer Portfolio

## 🎨 Overview

A comprehensive design system built with TailwindCSS and Shadcn UI for a premium portfolio website. Features a sophisticated color palette, typography scale, and animation tokens optimized for professional frontend developer portfolios.

---

## 🎭 Color Palette

### Primary Colors
- **Primary**: `#38BDF8` - Cyan blue for primary actions and highlights
- **Secondary**: `#22C55E` - Vibrant green for secondary accents
- **Background**: `#0B1120` - Deep navy for main background
- **Card**: `#111827` - Slightly lighter for card backgrounds
- **Text**: `#F8FAFC` - Off-white for primary text

### Color Spectrum

#### Primary (Cyan)
```
50:   #F0F9FF
100:  #E0F2FE
200:  #BAE6FD
300:  #7DD3FC
400:  #38BDF8  ← Primary
500:  #0EA5E9
600:  #0284C7
700:  #0369A1
800:  #075985
900:  #0C3D66
```

#### Secondary (Green)
```
50:   #F0FDF4
100:  #DCFCE7
200:  #BBF7D0
300:  #86EFAC
400:  #4ADE80
500:  #22C55E  ← Secondary
600:  #16A34A
700:  #15803D
800:  #166534
900:  #145231
```

### Semantic Colors
- **Success**: `#22C55E` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Danger**: `#EF4444` (Red)
- **Info**: `#38BDF8` (Cyan)

---

## 📝 Typography Scale

### Display Text
```
Display 2XL: 60px | line-height: 64px | font-weight: 700
Display XL:  48px | line-height: 52px | font-weight: 700
Display LG:  36px | line-height: 40px | font-weight: 700
Display MD:  30px | line-height: 36px | font-weight: 700
Display SM:  24px | line-height: 32px | font-weight: 600
```

### Heading Text
```
Heading LG:  20px | line-height: 28px | font-weight: 600
Heading MD:  18px | line-height: 28px | font-weight: 600
Heading SM:  16px | line-height: 24px | font-weight: 600
```

### Body Text
```
Body LG:     18px | line-height: 28px | letter-spacing: 0
Body MD:     16px | line-height: 24px | letter-spacing: 0
Body SM:     14px | line-height: 20px | letter-spacing: 0.25px
```

### Caption Text
```
Caption:     12px | line-height: 16px | letter-spacing: 0.5px | font-weight: 500
             UPPERCASE
```

### Usage in CSS Classes
```html
<!-- Display Headlines -->
<h1 class="display-2xl">Extra Large Title</h1>
<h1 class="display-xl">Large Title</h1>

<!-- Headings -->
<h2 class="heading-lg">Section Title</h2>
<h3 class="heading-md">Subsection</h3>

<!-- Body Text -->
<p class="body-lg">Large paragraph</p>
<p class="body-md">Regular paragraph</p>

<!-- Captions -->
<p class="caption">LABEL TEXT</p>
```

---

## 📐 Spacing System

Base unit: **4px**

```
0   = 0px      16  = 64px      64  = 256px
0.5 = 2px      20  = 80px      72  = 288px
1   = 4px      24  = 96px      80  = 320px
1.5 = 6px      28  = 112px     96  = 384px
2   = 8px      32  = 128px
2.5 = 10px     36  = 144px
3   = 12px     40  = 160px
3.5 = 14px     44  = 176px
4   = 16px     48  = 192px
5   = 20px     52  = 208px
6   = 24px     56  = 224px
7   = 28px     60  = 240px
8   = 32px
9   = 36px
10  = 40px
12  = 48px
14  = 56px
```

### Preset Section Paddings
```css
.section-padding      /* px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32 */
.section-padding-sm   /* px-4 py-8 md:px-8 md:py-12 */
.section-padding-lg   /* px-4 py-24 md:px-8 md:py-32 lg:px-12 lg:py-40 */
```

---

## 🔘 Button Variants

### Solid Buttons
```tsx
<Button variant="default">Default (Primary)</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
```

### Outline Buttons
```tsx
<Button variant="outline">Outline Primary</Button>
```

### Ghost Buttons
```tsx
<Button variant="ghost">Ghost Button</Button>
```

### Subtle Buttons
```tsx
<Button variant="subtle">Subtle Primary</Button>
<Button variant="subtle-secondary">Subtle Secondary</Button>
```

### Glass Morphism
```tsx
<Button variant="glass">Glass Button</Button>
```

### Link Button
```tsx
<Button variant="link">Link Button</Button>
```

### Button Sizes
```tsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">📝</Button>
<Button size="icon-sm">📝</Button>
<Button size="icon-lg">📝</Button>
```

### Full Width
```tsx
<Button fullWidth>Full Width Button</Button>
```

---

## 🎴 Card Variants

### Default Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
</Card>
```

### Outlined Card
```tsx
<Card variant="outlined">
  Content
</Card>
```

### Elevated Card
```tsx
<Card variant="elevated">
  Elevated content
</Card>
```

### Glass Card
```tsx
<Card variant="glass">
  Glass morphism card
</Card>
```

### Interactive Card
```tsx
<Card variant="interactive">
  Hover me - I scale up and glow
</Card>
```

### Card Padding
```tsx
<Card padding="sm">Small padding</Card>
<Card padding="default">Default padding</Card>
<Card padding="lg">Large padding</Card>
<Card padding="xl">Extra large padding</Card>
```

---

## 🏷️ Badge Variants

### Color Variants
```tsx
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="subtle">Subtle</Badge>
```

### Sizes
```tsx
<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>
```

---

## 📦 Section Layouts

### Basic Section
```tsx
import { Section, SectionHeader, Container } from '@/components/layouts/Section';

<Section>
  <Container>
    <SectionHeader 
      title="Section Title"
      subtitle="Subtitle"
      description="Section description text"
    />
  </Container>
</Section>
```

### Section Variants
```tsx
<Section variant="default">Default background</Section>
<Section variant="gradient">Gradient background</Section>
<Section variant="glass">Glass morphism</Section>
<Section variant="dark">Dark background</Section>
```

### Grid Layout
```tsx
import { Grid } from '@/components/layouts/Section';

<Grid columns={3} gap="lg">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

### Flex Layout
```tsx
import { Flex } from '@/components/layouts/Section';

<Flex direction="row" justify="between" align="center" gap="lg">
  <div>Left</div>
  <div>Right</div>
</Flex>
```

---

## ✨ Animation Tokens

### Duration Presets
```typescript
duration: {
  fastest: 50,    // Quick feedback
  faster: 100,    // Fast interactions
  fast: 150,      // Standard quick
  normal: 200,    // Standard default
  slow: 300,      // Prominent animation
  slower: 500,    // Slow entrance
  slowest: 700,   // Very slow effect
}
```

### Easing Functions
```typescript
easing: {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  entrance: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
}
```

### Delay Presets
```typescript
delay: {
  none: 0,
  xs: 50,
  sm: 100,
  md: 150,
  lg: 200,
  xl: 300,
}
```

### Stagger Delays
```typescript
stagger: {
  xs: 0.05,
  sm: 0.1,
  md: 0.15,
  lg: 0.2,
}
```

### CSS Animation Classes
```css
animate-fade-in       /* Fade in 0.3s */
animate-fade-out      /* Fade out 0.3s */
animate-slide-up      /* Slide up entrance */
animate-slide-down    /* Slide down entrance */
animate-slide-left    /* Slide left entrance */
animate-slide-right   /* Slide right entrance */
animate-scale-in      /* Scale entrance 0.3s */
animate-pulse-subtle  /* Subtle pulse 2s */
```

### Framer Motion Variants
```typescript
MOTION_VARIANTS: {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInCenter,
  blurIn,
  rotateIn,
  slideInLeft,
  slideInRight,
  slideInUp,
  slideInDown,
  staggerContainer,
  staggerItem,
}
```

### Transition Presets
```typescript
TRANSITION_PRESETS: {
  default: 200ms easeOut,
  fast: 150ms easeOut,
  slow: 300ms easeOut,
  spring: spring(damping: 25, stiffness: 300),
  springGentle: spring(damping: 15, stiffness: 100),
  bounce: spring(damping: 8, stiffness: 100),
  easeInOut: 200ms cubic-bezier(0.4, 0, 0.2, 1),
}
```

### Usage Example
```tsx
import { motion } from 'framer-motion';
import { MOTION_VARIANTS, TRANSITION_PRESETS } from '@/lib/animation-tokens';

export const AnimatedCard = () => (
  <motion.div
    variants={MOTION_VARIANTS.fadeInUp}
    initial="initial"
    whileInView="animate"
    exit="exit"
    transition={TRANSITION_PRESETS.default}
  >
    Content
  </motion.div>
);
```

---

## 🎨 Glass Morphism & Effects

### Glass Container
```tsx
<div class="glass">
  Glass morphism container
</div>

<div class="glass-lg">
  Large glass with more blur
</div>
```

### Gradient Text
```tsx
<h1 class="gradient-text">
  Gradient text from primary to secondary
</h1>
```

### Shadow Effects
```css
shadow-sm           /* Subtle shadow */
shadow-base         /* Default shadow */
shadow-md           /* Medium shadow */
shadow-lg           /* Large shadow */
shadow-xl           /* Extra large shadow */
shadow-glow-primary /* Cyan glow */
shadow-glow-secondary /* Green glow */
```

### Backdrop Blur
```css
backdrop-blur-xs    /* 2px blur */
backdrop-blur-sm    /* 4px blur */
backdrop-blur-md    /* 12px blur */
backdrop-blur-lg    /* 16px blur */
backdrop-blur-xl    /* 24px blur */
```

---

## 📱 Responsive Design

### Breakpoints
```
Mobile: < 640px
Tablet: 640px - 1023px
Desktop: ≥ 1024px
```

### Usage
```tsx
<div class="text-sm md:text-base lg:text-lg">
  Responsive typography
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

---

## 🧩 Utility Classes

### Text Utilities
```css
.gradient-text        /* Gradient from primary to secondary */
.link-primary         /* Primary color link with hover */
.link-secondary       /* Secondary color link */
```

### Component Utilities
```css
.card-base           /* Base card styling */
.card-hover          /* Card with hover effects */
.card-interactive    /* Interactive card with scale */
.focus-ring          /* Focus state ring */
.focus-ring-inset    /* Inset focus ring */
.badge-primary       /* Primary badge */
.badge-secondary     /* Secondary badge */
.divider             /* Gradient divider line */
.code-block          /* Code block styling */
```

---

## 🚀 Best Practices

### Component Organization
```
src/
├── components/
│  ├── ui/              # Base UI components (button, card, badge)
│  ├── layouts/         # Layout components (Section, Grid, etc.)
│  └── sections/        # Page sections (to be added)
├── lib/
│  ├── animation-tokens.ts  # Animation configuration
│  └── utils.ts
└── styles/
   └── globals.css      # Design system CSS
```

### Animation Guidelines
1. **Use appropriate durations**:
   - Micro-interactions: 50-150ms
   - Transitions: 200-300ms
   - Entrance animations: 300-500ms
   - Complex animations: 500-700ms

2. **Easing selection**:
   - Entrances: Use `easeOutBack` or `entrance` for dynamic feel
   - Exits: Use `easeIn` or `exit` for quick departure
   - Continuous: Use spring for bouncy feel, easeOut for smooth

3. **Stagger sequences**:
   - Use 0.1-0.15s delays between items for smooth cascade
   - Keep total sequence under 1s for responsiveness

### Accessibility
- All color contrasts meet WCAG AA standards
- Focus states are clearly visible
- Animations can be disabled via `prefers-reduced-motion`
- Interactive elements have proper sizing (min 44x44px)

---

## 🎯 Quick Reference

### Common Patterns
```tsx
// Hero Section
<Section variant="gradient" className="min-h-screen">
  <Container>
    <h1 className="display-2xl gradient-text">Title</h1>
    <p className="body-lg text-muted-foreground mt-6">Description</p>
    <Flex gap="lg" className="mt-8">
      <Button>Primary</Button>
      <Button variant="outline">Secondary</Button>
    </Flex>
  </Container>
</Section>

// Feature Grid
<Section>
  <Container>
    <SectionHeader title="Features" centered />
    <Grid columns={3} gap="lg">
      {features.map(feature => (
        <Card key={feature.id} variant="interactive">
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </Grid>
  </Container>
</Section>

// CTA Section
<Section variant="dark">
  <Container maxWidth="md">
    <div className="text-center">
      <h2 className="display-lg mb-6">Ready to work together?</h2>
      <Button size="lg" fullWidth>Get In Touch</Button>
    </div>
  </Container>
</Section>
```

---

**Last Updated**: 2026-06-16
**Version**: 1.0.0
