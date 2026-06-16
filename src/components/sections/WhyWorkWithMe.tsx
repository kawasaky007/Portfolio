'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ValueItem {
  title: string;
  summary: string;
  icon: React.ReactNode;
}

const VALUES: ValueItem[] = [
  {
    title: '4+ Years Angular',
    summary:
      'Hands-on expertise delivering Angular solutions across multiple major versions in enterprise environments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2L4 5l1.2 10.2L12 22l6.8-6.8L20 5l-8-3z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 6.8l-3 7h1.6l.65-1.6h2.9l.65 1.6h1.6l-3-7H12z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Applications',
    summary:
      'Experience building scalable business-critical products with clean architecture and maintainable standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    summary:
      'Focused on fast rendering, efficient state updates, and measurable frontend performance improvements.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 12l4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Code Review',
    summary:
      'Proactive code quality practices with clear review feedback, consistency checks, and reliability standards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: 'State Management',
    summary:
      'Strong NgRx and RxJS patterns for deterministic data flow, side effects, and maintainable state boundaries.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 11l2.2-2.3M14 8.7L16 11M8 13l2.2 2.2M14 15.2L16 13" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: 'Team Collaboration',
    summary:
      'Cross-functional communication with product, design, and backend teams to deliver aligned outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="8" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4.5 18c.6-2.4 2-3.6 3.5-3.6S10.9 15.6 11.5 18M12.5 18c.6-2.4 2-3.6 3.5-3.6s2.9 1.2 3.5 3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Agile Scrum',
    summary:
      'Comfortable in sprint planning, backlog grooming, standups, and iterative value-focused delivery cycles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];

export const WhyWorkWithMe = () => {
  return (
    <section id="why-work-with-me" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.16),transparent_40%),radial-gradient(circle_at_88%_84%,rgba(34,197,94,0.12),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Professional Value
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Why Work With Me
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A practical blend of technical depth, delivery discipline, and team-first collaboration
            for modern frontend products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {VALUES.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-card/55 p-5 shadow-[0_15px_40px_rgba(11,17,32,0.35)] backdrop-blur-xl sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/20 group-hover:via-primary/5 group-hover:to-secondary/12 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
