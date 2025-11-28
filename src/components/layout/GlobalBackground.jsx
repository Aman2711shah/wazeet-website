import React, { useRef, useMemo, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere, Points, PointMaterial, Trail } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 50 }) {
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
                opacity={0.6}
            />
        </Points>
    );
}

function Earth() {
    const earthRef = useRef();
    const atmosphereRef = useRef();

    // Load the realistic Earth texture
    const earthTexture = useMemo(() => {
        const loader = new THREE.TextureLoader();
        return loader.load('/assets/textures/earth.jpg');
    }, []);

    useFrame((state) => {
        if (earthRef.current) {
            // Very slow continuous rotation for subtle movement
            earthRef.current.rotation.y += 0.001;
        }
        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.y += 0.0005;
        }
    });

    return (
        <group ref={earthRef} position={[3, -2, -5]}>
            {/* Realistic Earth Sphere with HD texture - smaller and more subtle */}
            <Sphere args={[1.5, 64, 64]}>
                <meshStandardMaterial
                    map={earthTexture}
                    metalness={0.1}
                    roughness={0.8}
                    emissive="#0a0a1a"
                    emissiveIntensity={0.2}
                />
            </Sphere>

            {/* Atmospheric glow - layer 1 (inner) */}
            <Sphere ref={atmosphereRef} args={[1.6, 32, 32]}>
                <meshBasicMaterial
                    color="#4dabf7"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>

            {/* Atmospheric glow - layer 2 (outer) */}
            <Sphere args={[1.75, 32, 32]}>
                <meshBasicMaterial
                    color="#74c0fc"
                    transparent
                    opacity={0.05}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>

            {/* Subtle orbital rings */}
            <mesh rotation={[Math.PI / 5, 0, 0]}>
                <torusGeometry args={[2.2, 0.015, 16, 100]} />
                <meshBasicMaterial color="#4dabf7" transparent opacity={0.1} />
            </mesh>
        </group>
    );
}

function Comet() {
    const cometRef = useRef();
    const [position, setPosition] = useState(() => {
        // Start from top-left, far away
        return new THREE.Vector3(-15, 10, -10);
    });

    // Randomize speed and reset delay
    const speed = useRef(0.15 + Math.random() * 0.1);
    const resetDelay = useRef(0);

    useFrame((state, delta) => {
        if (cometRef.current) {
            // Move diagonally down-right
            cometRef.current.position.x += speed.current;
            cometRef.current.position.y -= speed.current * 0.6;
            cometRef.current.position.z += speed.current * 0.2;

            // Reset if out of view
            if (cometRef.current.position.x > 20 || cometRef.current.position.y < -15) {
                resetDelay.current += delta;

                // Wait a bit before resetting to make it feel more natural
                if (resetDelay.current > 2 + Math.random() * 5) {
                    // Reset to random start position
                    const startX = -20 - Math.random() * 10;
                    const startY = 10 + Math.random() * 10;
                    cometRef.current.position.set(startX, startY, -10);

                    // Randomize speed for next pass
                    speed.current = 0.15 + Math.random() * 0.1;
                    resetDelay.current = 0;
                }
            }
        }
    });

    return (
        <group>
            <Trail
                width={2}
                length={8}
                color={new THREE.Color("#ff8a00")}
                attenuation={(t) => t * t}
            >
                <mesh ref={cometRef} position={position}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshBasicMaterial color="#ffaa00" emissive="#ff4400" emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </Trail>
        </group>
    );
}

export default function GlobalBackground() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 0,
            pointerEvents: 'none', // Allow clicks to pass through to content
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        }}>
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
                <Suspense fallback={null}>
                    {/* Subtle lighting */}
                    <ambientLight intensity={0.3} />
                    <directionalLight position={[10, 5, 5]} intensity={1.2} color="#ffffff" />
                    <pointLight position={[-10, -5, -5]} intensity={0.3} color="#4dabf7" />

                    {/* Background stars - Ultra Optimized */}
                    <Stars
                        radius={100}
                        depth={50}
                        count={500}
                        factor={4}
                        saturation={0}
                        speed={0.5}
                    />

                    {/* Floating particles - Optimized */}
                    <FloatingParticles count={50} />

                    {/* Comet Effect */}
                    <Comet />


                </Suspense>
            </Canvas>
        </div>
    );
}
