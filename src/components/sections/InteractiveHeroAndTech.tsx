'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { TechStack3D } from './TechStack3D';

class SectionErrorBoundary extends React.Component<
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
    console.error('Section render error:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const HeroLoading = () => (
  <div className="relative h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.14),transparent_45%),linear-gradient(to_bottom,#0B1120,#111827)]">
    <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)] animate-[pulse_2.4s_ease-in-out_infinite]" />

    <div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 h-7 w-40 animate-pulse rounded-full border border-primary/25 bg-primary/10" />
      <div className="mb-4 h-14 w-full max-w-[620px] animate-pulse rounded-xl bg-white/10 sm:h-16" />
      <div className="mb-6 h-7 w-64 animate-pulse rounded-lg bg-white/10" />
      <div className="mb-10 h-5 w-full max-w-[420px] animate-pulse rounded-md bg-white/10" />

      <div className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
        <div className="h-11 flex-1 animate-pulse rounded-md bg-primary/25" />
        <div className="h-11 flex-1 animate-pulse rounded-md bg-white/15" />
        <div className="h-11 flex-1 animate-pulse rounded-md bg-white/15" />
      </div>
    </div>
  </div>
);

const TechStackLoading = () => (
  <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="h-4 w-40 animate-pulse rounded bg-primary/30" />
        <div className="h-10 w-72 animate-pulse rounded-lg bg-white/15" />
        <div className="h-5 w-full max-w-lg animate-pulse rounded bg-white/10" />
        <div className="flex flex-wrap gap-2 pt-2">
          <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
          <div className="h-6 w-24 animate-pulse rounded-full bg-white/10" />
          <div className="h-6 w-16 animate-pulse rounded-full bg-white/10" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-white/10" />
        </div>
      </div>

      <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 sm:h-[420px] lg:h-[480px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_70%_75%,rgba(34,197,94,0.14),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] animate-[pulse_2.2s_ease-in-out_infinite]" />
      </div>
    </div>
  </div>
);

const HeroStaticFallback = () => (
  <section className="relative h-screen w-full overflow-hidden bg-[linear-gradient(to_bottom,#0B1120,#111827)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_80%_78%,rgba(34,197,94,0.14),transparent_45%)]" />
    <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Frontend Developer
      </p>
      <h1 className="display-2xl gradient-text">Vu Hoang An</h1>
      <p className="mt-4 body-lg text-muted-foreground">Frontend Developer</p>
    </div>
  </section>
);

const Hero = dynamic(
  async () => {
    try {
      const mod = await import('@/components/sections/Hero');
      return { default: mod.Hero };
    } catch (error) {
      console.error('Hero import failed, using static fallback:', error);
      return { default: HeroStaticFallback };
    }
  },
  {
    ssr: false,
    loading: HeroLoading,
  }
);

export const InteractiveHeroAndTech = () => {
  return (
    <>
      <SectionErrorBoundary fallback={<HeroLoading />}>
        <Hero />
      </SectionErrorBoundary>

      <SectionErrorBoundary fallback={<TechStackLoading />}>
        <TechStack3D />
      </SectionErrorBoundary>
    </>
  );
};
