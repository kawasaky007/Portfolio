'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DownloadPortfolioButton } from '@/components/DownloadPortfolioButton';
import { TRANSITION_PRESETS } from '@/lib/animation-tokens';
import Link from 'next/link';

/**
 * Hero Section with premium animated background
 */
export const Hero = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: TRANSITION_PRESETS.default,
    },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  const descriptionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.4,
      },
    },
  };

  const buttonGroupVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.6,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,#0B1120,#111827)]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        animate={{ opacity: [0.7, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      {/* Gradient Overlay - subtle to keep content readable */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/20 via-transparent to-background/40 pointer-events-none" />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <Badge variant="primary">Frontend Developer</Badge>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={titleVariants}
            className="display-2xl md:display-2xl lg:text-7xl gradient-text font-bold leading-tight"
          >
            Vu Hoang An
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={subtitleVariants}
            className="display-md md:display-lg text-foreground font-semibold"
          >
            Frontend Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={descriptionVariants}
            className="body-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Angular Expert Building Enterprise Solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonGroupVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 md:pt-8"
          >
            <Link href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="default"
                fullWidth
                className="text-base md:text-lg font-semibold"
              >
                View Projects
              </Button>
            </Link>

            <div className="w-full sm:w-auto">
              <DownloadPortfolioButton
                size="lg"
                variant="outline"
                fullWidth
                className="text-base md:text-lg font-semibold"
              />
            </div>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="glass"
                fullWidth
                className="text-base md:text-lg font-semibold"
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-8 md:pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 mx-auto text-primary opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile-optimized touch hint */}
      <div className="absolute bottom-4 left-4 z-20 md:hidden">
        <p className="text-xs text-muted-foreground">Move your device to explore</p>
      </div>
    </section>
  );
};
