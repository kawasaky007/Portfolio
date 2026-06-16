/**
 * Check if window/document is available (client-side)
 */
export const isClient = () => typeof window !== 'undefined';

/**
 * Get device type based on viewport width
 */
export const getDeviceType = () => {
  if (!isClient()) return 'desktop';
  const width = window.innerWidth;
  if (width < 640) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * Breakpoint values for responsive design
 */
export const breakpoints = {
  mobile: 640,
  tablet: 1024,
  desktop: 1280,
  wide: 1536,
};

/**
 * Media query helpers
 */
export const mobileOnly = `@media (max-width: ${breakpoints.mobile - 1}px)`;
export const tabletUp = `@media (min-width: ${breakpoints.mobile}px)`;
export const desktopUp = `@media (min-width: ${breakpoints.desktop}px)`;

/**
 * Check if viewport matches media query
 */
export const matchesMediaQuery = (query: string): boolean => {
  if (!isClient()) return false;
  return window.matchMedia(query).matches;
};

/**
 * Check if viewport is mobile
 */
export const isMobile = () => matchesMediaQuery(`(max-width: ${breakpoints.mobile - 1}px)`);

/**
 * Check if viewport is tablet or below
 */
export const isTabletOrBelow = () =>
  matchesMediaQuery(`(max-width: ${breakpoints.tablet - 1}px)`);

/**
 * Check if viewport is desktop or above
 */
export const isDesktopOrAbove = () =>
  matchesMediaQuery(`(min-width: ${breakpoints.desktop}px)`);
