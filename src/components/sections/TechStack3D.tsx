'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { TECH_STACK } from './tech-stack-data';
import type { TechStack3DSceneProps } from './TechStack3DScene';

const ORBIT_POINTS = [
  { x: 50, y: 8, scale: 0.98 },
  { x: 76, y: 18, scale: 0.92 },
  { x: 88, y: 43, scale: 1 },
  { x: 74, y: 70, scale: 0.9 },
  { x: 51, y: 84, scale: 1 },
  { x: 25, y: 72, scale: 0.9 },
  { x: 12, y: 47, scale: 0.98 },
  { x: 25, y: 21, scale: 0.88 },
  { x: 50, y: 50, scale: 1.08 },
  { x: 64, y: 38, scale: 0.82 },
];

const CENTER_ORBIT_POINT = { x: 50, y: 50, scale: 1 };

const TechStackOrbitPreview = () => (
  <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_60%_62%,rgba(34,197,94,0.14),transparent_44%),linear-gradient(145deg,rgba(15,23,42,0.78),rgba(2,6,23,0.95))]">
    <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] opacity-70" />

    <div
      className="absolute left-1/2 top-1/2 aspect-square h-[min(76%,370px)]"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/35 shadow-[0_0_52px_rgba(56,189,248,0.18)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-[10%] rounded-full border border-emerald-400/25"
        style={{ transform: 'rotateX(66deg)' }}
        animate={{ rotateZ: -360 }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-sky-300/20"
        style={{ transform: 'rotateY(64deg)' }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-20 w-20 rounded-full border border-white/10 bg-primary/15 shadow-[0_0_44px_rgba(56,189,248,0.26)] backdrop-blur-sm"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {TECH_STACK.map((tech, index) => {
        const point = ORBIT_POINTS[index] ?? CENTER_ORBIT_POINT;

        return (
          <div
            key={tech.name}
            className="absolute"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              transform: `translate(-50%, -50%) scale(${point.scale})`,
            }}
          >
            <motion.span
              className="block rounded-full border px-3 py-1 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md"
              style={{
                backgroundColor: `${tech.color}24`,
                borderColor: `${tech.color}80`,
                boxShadow: `0 0 24px ${tech.color}24`,
              }}
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 2.8 + index * 0.16,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              {tech.name}
            </motion.span>
          </div>
        );
      })}
    </div>
  </div>
);

const TechStackSceneLoading = () => <TechStackOrbitPreview />;

const TechStackSceneFallback = () => <TechStackOrbitPreview />;

class SceneErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('TechStack3D scene failed:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const TechStack3DScene = dynamic<TechStack3DSceneProps>(
  () => import('./TechStack3DScene').then((mod) => mod.TechStack3DScene),
  {
    ssr: false,
    loading: TechStackSceneLoading,
  }
);

export const TechStack3D = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="tech-stack" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.14),transparent_45%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-4"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Core Technologies
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            3D Tech Stack Sphere
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hover any node to inspect the technology stack. The sphere rotates continuously to
            visualize a balanced frontend and backend toolkit.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-foreground"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-[360px] w-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 shadow-[0_0_40px_rgba(56,189,248,0.12)] sm:h-[420px] lg:h-[480px]"
        >
          <SceneErrorBoundary fallback={<TechStackSceneFallback />}>
            <TechStack3DScene
              hoveredTech={hoveredTech}
              setHoveredTech={setHoveredTech}
              fallback={<TechStackSceneFallback />}
            />
          </SceneErrorBoundary>

          {hoveredTech && (
            <div className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 rounded-full border border-primary/40 bg-background/80 px-4 py-1.5 text-sm font-semibold text-foreground shadow-lg backdrop-blur-md">
              {hoveredTech}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
