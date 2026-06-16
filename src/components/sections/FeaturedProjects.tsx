'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ProjectItem {
  name: string;
  stack: string[];
  summary: string;
  accent: string;
}

const PROJECTS: ProjectItem[] = [
  {
    name: 'HRM',
    stack: ['Angular 18', 'GraphQL', 'Material', 'AG Grid'],
    summary:
      'Built a robust HR management platform with real-time data handling and high-density enterprise tables.',
    accent: 'from-sky-400/35 via-cyan-400/20 to-transparent',
  },
  {
    name: 'VELA Logistics',
    stack: ['Angular 16', 'NgRx', '.NET', 'NG-ZORRO'],
    summary:
      'Delivered an operational logistics workflow with resilient state architecture and seamless backend integration.',
    accent: 'from-emerald-400/30 via-lime-400/15 to-transparent',
  },
  {
    name: 'HRIS',
    stack: ['Angular 11', 'NgRx', 'RxJS', 'DevExtreme'],
    summary:
      'Implemented scalable employee information modules with advanced reactive patterns and rich UI controls.',
    accent: 'from-indigo-400/30 via-violet-400/20 to-transparent',
  },
];

const ACHIEVEMENTS = [
  { label: 'Featured Enterprise Projects', value: '3' },
  { label: 'Angular Generations Delivered', value: '11 -> 18' },
  { label: 'Core Stack Families', value: '10+' },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(56,189,248,0.14),transparent_40%),radial-gradient(circle_at_88%_86%,rgba(34,197,94,0.1),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Portfolio Highlights
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Enterprise-grade solutions delivered across human resources and logistics domains with
            a strong Angular-first architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="h-full"
            >
              <Card
                variant="glass"
                padding="lg"
                className="group relative h-full overflow-hidden rounded-2xl border-white/15 bg-card/55 backdrop-blur-xl"
              >
                <div
                  className={[
                    'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
                    'bg-gradient-to-br',
                    project.accent,
                  ].join(' ')}
                />

                <CardHeader className="relative z-10 p-0">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <CardTitle className="text-2xl font-semibold tracking-tight text-foreground">
                      {project.name}
                    </CardTitle>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Case
                    </span>
                  </div>

                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </CardDescription>
                </CardHeader>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" size="sm" className="border-white/20 bg-background/40">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-10 rounded-2xl border border-white/15 bg-white/[0.03] p-6 shadow-[0_20px_60px_rgba(11,17,32,0.35)] backdrop-blur-lg sm:p-7"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Achievements</h3>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/90">
              Project Impact
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-card/55 p-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
