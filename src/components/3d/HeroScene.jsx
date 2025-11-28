import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 100 }) {
  const ref = useRef();
  const particleCount = count;

  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

function Earth() {
  const earthRef = useRef();
  const atmosphereRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Load the realistic Earth texture
  const earthTexture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return loader.load('/assets/textures/earth.jpg');
  }, []);

  useFrame((state) => {
    if (earthRef.current) {
      // Continuous rotation
      earthRef.current.rotation.y += 0.002;
      // Hover effect
      const scale = hovered ? 1.15 : 1;
      earthRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group
      ref={earthRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Realistic Earth Sphere with HD texture - Ultra Optimized geometry */}
      <Sphere args={[2.5, 32, 32]}>
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.1}
          roughness={0.8}
          emissive="#0a0a1a"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Atmospheric glow - layer 1 (inner) - Ultra Optimized geometry */}
      <Sphere ref={atmosphereRef} args={[2.65, 24, 24]}>
        <meshBasicMaterial
          color="#4dabf7"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Atmospheric glow - layer 2 (outer) - Ultra Optimized geometry */}
      <Sphere args={[2.85, 24, 24]}>
        <meshBasicMaterial
          color="#74c0fc"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Subtle orbital rings */}
      <mesh rotation={[Math.PI / 5, 0, 0]}>
        <torusGeometry args={[3.5, 0.03, 16, 100]} />
        <meshBasicMaterial color="#4dabf7" transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[Math.PI / 5, Math.PI / 2, 0]}>
        <torusGeometry args={[3.7, 0.02, 16, 100]} />
        <meshBasicMaterial color="#74c0fc" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <Suspense fallback={null}>
          {/* Enhanced lighting for realistic Earth */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 5, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -5, -5]} intensity={0.4} color="#4dabf7" />
          <pointLight position={[5, 5, 10]} intensity={0.3} color="#74c0fc" />

          {/* Background stars */}
          {/* Background stars - Ultra Optimized */}
          <Stars
            radius={100}
            depth={50}
            count={500}
            factor={4}
            saturation={0}
            speed={1}
          />

          {/* Floating particles - Optimized */}
          <FloatingParticles count={100} />

          {/* Main Earth */}
          <Earth />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI - Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
