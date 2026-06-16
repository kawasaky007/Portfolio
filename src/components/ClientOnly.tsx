'use client';

import React from 'react';
import { useIsMounted } from '@/hooks';

interface ClientOnlyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Wrapper component to ensure children only render on client
 * Prevents hydration mismatches
 */
export const ClientOnly: React.FC<ClientOnlyProps> = ({ children, fallback = null }) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
