'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  highlights: string[];
}

const ARCHITECTURE_FLOW: ArchitectureNode[] = [
  {
    id: 'ui',
    title: 'UI',
    subtitle: 'Design System Layer',
    details:
      'Responsive interface built with reusable components, consistent tokens, and smooth interaction states.',
    highlights: ['Component Library', 'Accessibility', 'Responsive Layout'],
  },
  {
    id: 'angular',
    title: 'Angular',
    subtitle: 'Application Framework',
    details:
      'Feature modules and routing orchestrate business pages with strongly typed forms and maintainable structure.',
    highlights: ['Standalone Components', 'Routing', 'Typed Forms'],
  },
  {
    id: 'ngrx',
    title: 'NgRx',
    subtitle: 'State Management',
    details:
      'Centralized store, effects, and selectors coordinate async workflows and deterministic state transitions.',
    highlights: ['Actions & Reducers', 'Effects', 'Memoized Selectors'],
  },
  {
    id: 'api',
    title: 'GraphQL / REST',
    subtitle: 'API Gateway Layer',
    details:
      'Unified data access strategy combines GraphQL flexibility with REST service endpoints for domain-specific tasks.',
    highlights: ['Query Efficiency', 'Typed Contracts', 'Scalable Integrations'],
  },
  {
    id: 'dotnet',
    title: '.NET',
    subtitle: 'Backend Services',
    details:
      'Robust services enforce business rules, authentication, and persistence for enterprise-grade reliability.',
    highlights: ['Domain Services', 'Security', 'Performance'],
  },
];

export const ArchitectureShowcase = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>(ARCHITECTURE_FLOW[0]?.id ?? 'ui');

  const activeNode = useMemo(
    () => ARCHITECTURE_FLOW.find((node) => node.id === activeNodeId) ?? ARCHITECTURE_FLOW[0],
    [activeNodeId]
  );

  return (
    <section id="architecture" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_15%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_86%_78%,rgba(34,197,94,0.14),transparent_42%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            System Blueprint
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Architecture Showcase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Interactive flow from presentation to backend services. Hover or tap each node to view
            layer responsibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative rounded-2xl border border-white/15 bg-card/45 p-5 backdrop-blur-xl sm:p-6"
          >
            <div className="absolute left-1/2 top-8 h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/65 to-secondary/30" />

            <div className="relative flex flex-col gap-3 sm:gap-4">
              {ARCHITECTURE_FLOW.map((node, index) => {
                const isActive = activeNodeId === node.id;
                const isLast = index === ARCHITECTURE_FLOW.length - 1;

                return (
                  <React.Fragment key={node.id}>
                    <motion.button
                      type="button"
                      onMouseEnter={() => setActiveNodeId(node.id)}
                      onFocus={() => setActiveNodeId(node.id)}
                      onClick={() => setActiveNodeId(node.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={[
                        'relative z-10 mx-auto w-full max-w-[340px] rounded-xl border px-4 py-4 text-left transition-colors duration-300',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                        isActive
                          ? 'border-primary/60 bg-primary/10 shadow-[0_0_0_4px_rgba(56,189,248,0.14)]'
                          : 'border-white/15 bg-card/75 hover:border-primary/35 hover:bg-card/90',
                      ].join(' ')}
                      aria-pressed={isActive}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-lg font-semibold text-foreground sm:text-xl">{node.title}</p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                            {node.subtitle}
                          </p>
                        </div>
                        <span
                          className={[
                            'h-3 w-3 rounded-full border border-background transition-colors duration-300',
                            isActive ? 'bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.2)]' : 'bg-muted',
                          ].join(' ')}
                        />
                      </div>
                    </motion.button>

                    {!isLast && (
                      <div className="relative z-10 mx-auto h-8 w-8">
                        <motion.span
                          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/85 to-secondary/70"
                          animate={{ opacity: [0.35, 1, 0.35] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.span
                          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary"
                          animate={{ y: [0, 22, 0], opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(11,17,32,0.35)] backdrop-blur-lg sm:p-7"
          >
            <AnimatePresence mode="wait">
              {activeNode && (
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Hover Details
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                    {activeNode.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {activeNode.subtitle}
                  </p>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {activeNode.details}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeNode.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
