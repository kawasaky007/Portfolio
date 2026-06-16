'use client';

import React, { PropsWithChildren } from 'react';

interface ProviderProps extends PropsWithChildren {
  children: React.ReactNode;
}

/**
 * Root providers wrapper for client-side components
 * Add context providers, theme providers, etc. here
 */
export const Providers: React.FC<ProviderProps> = ({ children }) => {
  return <>{children}</>;
};
