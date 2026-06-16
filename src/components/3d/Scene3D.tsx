'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
}

/**
 * 3D Scene wrapper using React Three Fiber
 * Provides canvas context for 3D components
 */
export const Scene3D: React.FC<Scene3DProps> = ({
  children,
  className = 'w-full h-full',
  fallback = <div className="flex items-center justify-center h-full">Loading 3D...</div>,
}) => {
  return (
    <Canvas className={className}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </Canvas>
  );
};
