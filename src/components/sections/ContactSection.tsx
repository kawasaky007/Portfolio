'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { DownloadPortfolioButton } from '@/components/DownloadPortfolioButton';

const CONTACT = {
  email: 'vuhoanganptit@gmail.com',
  phone: '0943481441',
  linkedin: 'https://www.linkedin.com/in/vuhoangan/',
  github: 'https://github.com/kawasaky007',
};

interface ContactCardItem {
  title: string;
  subtitle: string;
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
}

const ITEMS: ContactCardItem[] = [
  {
    title: 'Email',
    subtitle: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Phone',
    subtitle: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M6.6 4h2.2l1.1 4-1.4 1.4a14 14 0 005.9 5.9l1.4-1.4 4 1.1v2.2c0 1.1-.9 2-2 2C10 19.2 4.8 14 4.8 7c0-1.1.9-2 1.8-3z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    subtitle: 'Professional profile',
    href: CONTACT.linkedin,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 11v5M8 8.2v.1M12 16v-3.2c0-1.1.7-1.8 1.7-1.8s1.6.7 1.6 1.8V16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'GitHub',
    subtitle: 'Code repositories',
    href: CONTACT.github,
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3.5a8.5 8.5 0 00-2.7 16.6c.4.1.5-.2.5-.4v-1.6c-2 .4-2.5-.8-2.7-1.3-.1-.4-.5-1-.9-1.2-.3-.2-.7-.6 0-.6.6 0 1 .5 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4a3 3 0 01.8-2.1 2.7 2.7 0 01.1-2.1s.7-.2 2.2.8a7.5 7.5 0 014 0c1.5-1 2.2-.8 2.2-.8.3.8.2 1.5.1 2.1a3 3 0 01.8 2.1c0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.4c0 .2.1.5.5.4A8.5 8.5 0 0012 3.5z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Download CV',
    subtitle: 'Export full portfolio as PDF',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 4v10m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 18h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const ContactSection = () => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }

    window.setTimeout(() => setCopyState('idle'), 1800);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_82%_82%,rgba(34,197,94,0.13),transparent_42%)]" />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Let&apos;s Connect
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Open to collaboration on enterprise frontend products, architecture modernization, and
            high-performance Angular applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-card/55 p-5 shadow-[0_16px_46px_rgba(11,17,32,0.35)] backdrop-blur-xl sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-secondary/0 opacity-0 transition-opacity duration-300 group-hover:from-primary/20 group-hover:via-primary/6 group-hover:to-secondary/14 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/35 bg-primary/10 text-primary">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>

                <div className="mt-5 flex items-center gap-3">
                  {item.title === 'Email' && (
                    <Button
                      variant="glass"
                      size="sm"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                    >
                      {copyState === 'copied'
                        ? 'Copied'
                        : copyState === 'failed'
                          ? 'Copy failed'
                          : 'Copy Email'}
                    </Button>
                  )}

                  {item.title === 'Download CV' && (
                    <DownloadPortfolioButton
                      variant="default"
                      size="sm"
                      aria-label="Download portfolio as PDF"
                    />
                  )}

                  {item.href && item.title !== 'Download CV' && (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer noopener' : undefined}
                      aria-label={item.external ? `Open ${item.title} in a new tab` : `Open ${item.title}`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        aria-label={item.external ? `Open ${item.title} in a new tab` : `Open ${item.title}`}
                      >
                        {item.title === 'Phone' ? 'Call' : 'Open'}
                      </Button>
                    </a>
                  )}
                </div>

                {item.title === 'Email' && (
                  <p className="sr-only" role="status" aria-live="polite">
                    {copyState === 'copied'
                      ? 'Email copied to clipboard'
                      : copyState === 'failed'
                        ? 'Failed to copy email'
                        : ''}
                  </p>
                )}

                <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/55 to-transparent" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
