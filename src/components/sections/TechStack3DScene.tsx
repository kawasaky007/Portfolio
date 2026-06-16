'use client';

import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TECH_STACK, type TechItem } from './tech-stack-data';

const getSpherePoints = (count: number, radius: number): Array<[number, number, number]> => {
  const points: Array<[number, number, number]> = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const t = count > 1 ? i / (count - 1) : 0;
    const y = 1 - t * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;

    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
};

interface TechNodeProps {
  item: TechItem;
  position: [number, number, number];
  index: number;
  hoveredTech: string | null;
  setHoveredTech: React.Dispatch<React.SetStateAction<string | null>>;
}

const TechNode: React.FC<TechNodeProps> = ({
  item,
  position,
  index,
  hoveredTech,
  setHoveredTech,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const isHovered = hoveredTech === item.name;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const t = clock.getElapsedTime();
    const pulse = 1 + Math.sin(t * 2 + index) * 0.05;
    const hoverScale = isHovered ? 1.35 : 1;
    meshRef.current.scale.setScalar(pulse * hoverScale);
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHoveredTech(item.name);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHoveredTech(null);
          document.body.style.cursor = 'default';
        }}
      >
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color={item.color}
          emissive={item.color}
          emissiveIntensity={isHovered ? 0.7 : 0.3}
          roughness={0.25}
          metalness={0.55}
        />
      </mesh>
    </group>
  );
};

interface SphereSceneProps {
  hoveredTech: string | null;
  setHoveredTech: React.Dispatch<React.SetStateAction<string | null>>;
}

const SphereScene: React.FC<SphereSceneProps> = ({ hoveredTech, setHoveredTech }) => {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => getSpherePoints(TECH_STACK.length, 2.25), []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.4;
    groupRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.2;
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[5, 5, 5]} intensity={1.1} color="#38BDF8" />
      <pointLight position={[-5, -5, 5]} intensity={0.9} color="#22C55E" />

      <mesh>
        <sphereGeometry args={[2.4, 48, 48]} />
        <meshStandardMaterial
          color="#0f172a"
          wireframe
          transparent
          opacity={0.28}
          emissive="#38BDF8"
          emissiveIntensity={0.07}
        />
      </mesh>

      <group ref={groupRef}>
        {TECH_STACK.map((item, index) => (
          <TechNode
            key={item.name}
            item={item}
            position={positions[index] ?? [0, 0, 0]}
            index={index}
            hoveredTech={hoveredTech}
            setHoveredTech={setHoveredTech}
          />
        ))}
      </group>
    </>
  );
};

export interface TechStack3DSceneProps {
  hoveredTech: string | null;
  setHoveredTech: React.Dispatch<React.SetStateAction<string | null>>;
  fallback?: React.ReactNode;
}

export const TechStack3DScene: React.FC<TechStack3DSceneProps> = ({
  hoveredTech,
  setHoveredTech,
  fallback,
}) => {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      fallback={fallback}
      gl={{ antialias: true, alpha: true }}
    >
      <SphereScene hoveredTech={hoveredTech} setHoveredTech={setHoveredTech} />
    </Canvas>
  );
};
