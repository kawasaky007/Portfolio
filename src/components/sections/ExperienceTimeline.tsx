'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  company: string;
  period: string;
  project?: string;
  projectPeriod?: string;
  description: string;
  highlights?: string[];
  stack?: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'VNG',
    period: '11/2024 - Present',
    project: 'Human Resource Management (HRM) Platform',
    projectPeriod: 'Dec 2025 - Present',
    description:
      'Developing an enterprise HRM ecosystem with Micro Frontend monorepo architecture for scalable workforce management and digital employee operations.',
    highlights: [
      'Built and maintained Angular 18 Micro Frontend modules with Webpack Module Federation in a monorepo setup.',
      'Implemented complex business logic, org chart features, and enterprise workflows across HRM modules.',
      'Handled date-time management and synchronization with backend services to keep behavior consistent across systems.',
      'Developed reusable shared UI components and dynamic low-code form engines to accelerate internal product delivery.',
      'Collaborated with Backend Engineers, BAs, PMs, and UI/UX Designers, while contributing to Playwright E2E stability.',
    ],
    stack: [
      'Angular 18',
      'Angular Material',
      'Tailwind CSS',
      'Playwright',
      'Webpack Module Federation',
      'Micro Frontend',
      'Monorepo',
      'Java Spring Boot',
      'PostgreSQL',
      'AWS',
    ],
  },
  {
    company: 'CMC Global',
    period: '07/2023 - 11/2024',
    description:
      'Contributed to enterprise product delivery with scalable frontend architecture and collaborative engineering practices.',
  },
  {
    company: 'FPT Telecom',
    period: '11/2021 - 06/2023',
    description:
      'Delivered business-facing web applications with a focus on reliability, maintainability, and user experience.',
  },
  {
    company: 'Patitek',
    period: '10/2020 - 11/2021',
    description:
      'Built foundational frontend features and strengthened practical experience across product development workflows.',
  },
];

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.14),transparent_36%),radial-gradient(circle_at_85%_75%,rgba(34,197,94,0.12),transparent_38%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Career Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Experience Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A focused timeline of product and enterprise teams, from foundational development to
            modern frontend leadership.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/10 via-primary/60 to-secondary/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {EXPERIENCES.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 28, x: isLeft ? -18 : 18 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.62, delay: index * 0.08, ease: 'easeOut' }}
                  className="relative grid grid-cols-1 items-center gap-4 pl-12 md:grid-cols-2 md:gap-10 md:pl-0"
                >
                  <div
                    className={[
                      'hidden md:block',
                      isLeft ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-2 md:justify-self-start',
                    ].join(' ')}
                  >
                    <div className="glass-lg w-[min(90vw,440px)] rounded-2xl p-6 shadow-[0_10px_40px_rgba(11,17,32,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_44px_rgba(56,189,248,0.18)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">{item.company}</h3>
                      {item.project && (
                        <div className="mt-3 rounded-xl border border-primary/15 bg-primary/5 p-3">
                          <p className="text-sm font-semibold text-foreground">{item.project}</p>
                          {item.projectPeriod && (
                            <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-primary/90">
                              {item.projectPeriod}
                            </p>
                          )}
                        </div>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.stack && item.stack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute left-4 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_0_6px_rgba(56,189,248,0.18)] md:left-1/2" />

                  <div className="md:hidden">
                    <div className="glass-lg rounded-2xl p-5 shadow-[0_10px_40px_rgba(11,17,32,0.45)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/90">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">{item.company}</h3>
                      {item.project && (
                        <div className="mt-3 rounded-xl border border-primary/15 bg-primary/5 p-3">
                          <p className="text-sm font-semibold text-foreground">{item.project}</p>
                          {item.projectPeriod && (
                            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-primary/90">
                              {item.projectPeriod}
                            </p>
                          )}
                        </div>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.stack && item.stack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
