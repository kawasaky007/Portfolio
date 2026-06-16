'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'gradient' | 'glass' | 'dark';
}

/**
 * Premium section layout component
 * Use for main content sections
 */
export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-background',
    gradient: 'bg-gradient-to-b from-background to-card/50',
    glass: 'bg-white/5 backdrop-blur-md',
    dark: 'bg-card/50',
  };

  return (
    <section
      id={id}
      className={cn('section-padding', variants[variant], className)}
    >
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Section header with title and optional subtitle
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 md:mb-16', centered && 'text-center', className)}
    >
      {subtitle && <p className="caption text-primary mb-2">{subtitle}</p>}
      <h2 className="display-lg mb-4 text-foreground">{title}</h2>
      {description && <p className="body-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  );
};

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

/**
 * Responsive container with max-width constraints
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = 'lg',
}) => {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'w-full',
  };

  return (
    <div className={cn('mx-auto w-full px-4 md:px-8', maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  );
};

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Responsive grid layout
 */
export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = 'lg',
  className,
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  return (
    <div
      className={cn('grid', columnClasses[columns], gapClasses[gap], className)}
    >
      {children}
    </div>
  );
};

interface FlexProps {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Flexbox layout utility
 */
export const Flex: React.FC<FlexProps> = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'center',
  gap = 'md',
  className,
}) => {
  const directionClass = direction === 'col' ? 'flex-col' : 'flex-row';
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };
  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  return (
    <div
      className={cn(
        'flex',
        directionClass,
        justifyClasses[justify],
        alignClasses[align],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
};
