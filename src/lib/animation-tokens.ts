/**
 * Animation Tokens & Easing Functions
 * Centralized animation configuration for consistent motion design
 */

export const ANIMATION_TOKENS = {
  // Duration presets (in milliseconds)
  duration: {
    fastest: 50,
    faster: 100,
    fast: 150,
    normal: 200,
    slow: 300,
    slower: 500,
    slowest: 700,
  },

  // Easing functions for different animation types
  easing: {
    // Linear easing
    linear: 'linear',

    // Cubic Bezier easing curves
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Spring-like easing
    easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeOutQuint: 'cubic-bezier(0.22, 1, 0.36, 1)',
    easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeOutCirc: 'cubic-bezier(0, 0.55, 0.45, 1)',
    easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',

    // Entrance animations
    entrance: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    // Exit animations
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
  },

  // Delay presets
  delay: {
    none: 0,
    xs: 50,
    sm: 100,
    md: 150,
    lg: 200,
    xl: 300,
  },

  // Stagger delays for sequences
  stagger: {
    xs: 0.05,
    sm: 0.1,
    md: 0.15,
    lg: 0.2,
  },
};

/**
 * Framer Motion preset variants
 */
export const MOTION_VARIANTS = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  scaleInCenter: {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },

  // Blur animations
  blurIn: {
    initial: { opacity: 0, filter: 'blur(4px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, filter: 'blur(4px)' },
  },

  // Rotate animations
  rotateIn: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -10 },
  },

  // Slide animations
  slideInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  },

  slideInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  },

  slideInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  },

  // Container stagger
  staggerContainer: {
    initial: 'initial',
    animate: 'animate',
  },

  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

/**
 * Transition presets for common animations
 */
export const TRANSITION_PRESETS = {
  // Standard transitions
  default: {
    duration: ANIMATION_TOKENS.duration.normal,
    ease: ANIMATION_TOKENS.easing.easeOut,
  },

  fast: {
    duration: ANIMATION_TOKENS.duration.fast,
    ease: ANIMATION_TOKENS.easing.easeOut,
  },

  slow: {
    duration: ANIMATION_TOKENS.duration.slow,
    ease: ANIMATION_TOKENS.easing.easeOut,
  },

  // Spring transitions
  spring: {
    type: 'spring',
    damping: 25,
    stiffness: 300,
    mass: 1,
  },

  springGentle: {
    type: 'spring',
    damping: 15,
    stiffness: 100,
    mass: 1,
  },

  // Bounce transitions
  bounce: {
    type: 'spring',
    damping: 8,
    stiffness: 100,
    mass: 1,
  },

  // Cubic bezier transitions
  easeInOut: {
    duration: ANIMATION_TOKENS.duration.normal,
    ease: ANIMATION_TOKENS.easing.easeInOut,
  },

  easeOut: {
    duration: ANIMATION_TOKENS.duration.normal,
    ease: ANIMATION_TOKENS.easing.easeOut,
  },

  easeIn: {
    duration: ANIMATION_TOKENS.duration.normal,
    ease: ANIMATION_TOKENS.easing.easeIn,
  },
};

/**
 * CSS animation class helpers
 */
export const ANIMATION_CLASSES = {
  fadeIn: 'animate-fade-in',
  fadeOut: 'animate-fade-out',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  scaleIn: 'animate-scale-in',
  pulse: 'animate-pulse-subtle',
};

/**
 * Get stagger delay for item index
 */
export const getStaggerDelay = (index: number, staggerAmount: number = 0.1): number => {
  return index * staggerAmount;
};

/**
 * Combine animation classes
 */
export const combineAnimations = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};
