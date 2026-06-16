'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingObjectProps {
  position: [number, number, number];
  scale: number;
  speed: number;
  type: 'box' | 'sphere' | 'octahedron';
  color: string;
  mousePosition: { x: number; y: number };
}

/**
 * Floating geometric object with mouse interaction
 */
const FloatingObject: React.FC<FloatingObjectProps> = ({
  position,
  scale,
  speed,
  type,
  color,
  mousePosition,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useRef(position);
  const time = useRef(0);

  useFrame(() => {
    if (!meshRef.current) return;

    time.current += speed;

    // Floating animation
    meshRef.current.position.y = initialPosition.current[1] + Math.sin(time.current) * 0.5;
    meshRef.current.position.x =
      initialPosition.current[0] + Math.cos(time.current * 0.7) * 0.3;
    meshRef.current.position.z =
      initialPosition.current[2] + Math.sin(time.current * 0.5) * 0.3;

    // Rotation
    meshRef.current.rotation.x += speed * 0.3;
    meshRef.current.rotation.y += speed * 0.5;
    meshRef.current.rotation.z += speed * 0.2;

    // Mouse interaction - subtle attraction
    const targetX = initialPosition.current[0] + mousePosition.x * 0.5;
    const targetY = initialPosition.current[1] + mousePosition.y * 0.3;

    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.02;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.02;
  });

  const geometry =
    type === 'box' ? (
      <boxGeometry args={[scale, scale, scale]} />
    ) : type === 'sphere' ? (
      <sphereGeometry args={[scale / 2, 32, 32]} />
    ) : (
      <octahedronGeometry args={[scale / 2]} />
    );

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshPhongMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        wireframe={false}
        opacity={0.7}
        transparent
      />
    </mesh>
  );
};

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number };
}

/**
 * 3D animated background scene
 */
const BackgroundScene: React.FC<AnimatedBackgroundProps> = ({ mousePosition }) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (!cameraRef.current) return;
    // Subtle camera movement based on mouse
    cameraRef.current.position.x += (mousePosition.x * 2 - cameraRef.current.position.x) * 0.05;
    cameraRef.current.position.y += (mousePosition.y * 2 - cameraRef.current.position.y) * 0.05;
    cameraRef.current.lookAt(0, 0, 0);
  });

  const objects: FloatingObjectProps[] = [
    {
      position: [-3, 2, -5],
      scale: 0.8,
      speed: 0.01,
      type: 'box',
      color: '#38BDF8',
      mousePosition,
    },
    {
      position: [4, -2, -4],
      scale: 1.2,
      speed: 0.015,
      type: 'sphere',
      color: '#22C55E',
      mousePosition,
    },
    {
      position: [2, 3, -6],
      scale: 0.6,
      speed: 0.012,
      type: 'octahedron',
      color: '#38BDF8',
      mousePosition,
    },
    {
      position: [-4, -3, -5],
      scale: 1,
      speed: 0.011,
      type: 'box',
      color: '#22C55E',
      mousePosition,
    },
    {
      position: [3, 0, -7],
      scale: 0.7,
      speed: 0.013,
      type: 'sphere',
      color: '#38BDF8',
      mousePosition,
    },
    {
      position: [-2, -1, -4],
      scale: 0.9,
      speed: 0.009,
      type: 'octahedron',
      color: '#22C55E',
      mousePosition,
    },
  ];

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 5]}
        fov={75}
        near={0.1}
        far={1000}
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#38BDF8" />
      <pointLight position={[-10, -10, 10]} intensity={0.6} color="#22C55E" />
      <pointLight position={[0, 0, 5]} intensity={0.4} color="#ffffff" />

      {/* Animated objects */}
      {objects.map((obj, idx) => (
        <FloatingObject key={idx} {...obj} />
      ))}

      {/* Optional: Add some grid or stars for depth */}
      <Stars />
    </>
  );
};

/**
 * Animated stars for background
 */
const Stars = () => {
  const starsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (!starsRef.current) return;
    starsRef.current.rotation.x += 0.0001;
    starsRef.current.rotation.y += 0.0001;
  });

  const starCount = 500;
  const positions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 100;
    positions[i + 1] = (Math.random() - 0.5) * 100;
    positions[i + 2] = (Math.random() - 0.5) * 100;
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#8891ff" sizeAttenuation />
    </points>
  );
};

interface AnimatedBackgroundCanvasProps {
  mousePosition: { x: number; y: number };
}

/**
 * Canvas wrapper for 3D background
 */
export const AnimatedBackgroundCanvas: React.FC<AnimatedBackgroundCanvasProps> = ({
  mousePosition,
}) => {
  return (
    <Canvas
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #0B1120, #111827)' }}
      gl={{ antialias: true, alpha: true }}
    >
      <BackgroundScene mousePosition={mousePosition} />
    </Canvas>
  );
};
