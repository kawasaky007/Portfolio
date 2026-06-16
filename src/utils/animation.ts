export const classNameBuilder = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * t;
};

export const easeInOutQuad = (t: number) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export const easeOutCubic = (t: number) => {
  return 1 - Math.pow(1 - t, 3);
};

export const easeInOutCubic = (t: number) => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
