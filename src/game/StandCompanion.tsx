"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

interface ShotRing {
  id: number;
  start: THREE.Vector3;
  target: THREE.Vector3;
  progress: number;
  rotation: THREE.Euler;
}

interface StandCompanionProps {
  playerPos: THREE.Vector3;
  playerYaw: number;
  activeShots: ShotRing[];
}

export function StandCompanion({ playerPos, playerYaw, activeShots }: StandCompanionProps) {
  const standGroup = useRef<THREE.Group>(null);
  const auraRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (standGroup.current) {
      // Calculate offset (+0.9, +0.4, -0.8) rotated by player's yaw
      const ox = Math.cos(playerYaw) * 0.9 + Math.sin(playerYaw) * 0.8;
      const oz = -Math.sin(playerYaw) * 0.9 + Math.cos(playerYaw) * 0.8;

      const targetX = playerPos.x + ox;
      const targetY = playerPos.y + 1.25 + Math.sin(t * 2.6) * 0.08;
      const targetZ = playerPos.z + oz;

      standGroup.current.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);
      standGroup.current.rotation.y = playerYaw;
    }

    if (auraRef.current) {
      auraRef.current.rotation.z = t * 0.8;
      const scale = 1 + Math.sin(t * 4) * 0.06;
      auraRef.current.scale.set(scale, scale, scale);
    }
  });

  const standMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#E8D49A",
        emissive: "#C9A84C",
        emissiveIntensity: 0.65,
        transparent: true,
        opacity: 0.65,
        roughness: 0.2,
        metalness: 0.5,
      }),
    []
  );

  const goldTrimMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#FFE49E",
        wireframe: true,
      }),
    []
  );

  return (
    <>
      {/* ─── STAND BODY HIERARCHY (Original Silhouette) ───────────── */}
      <group ref={standGroup}>
        {/* Torso & Head */}
        <mesh position={[0, 0.45, 0]} castShadow>
          <capsuleGeometry args={[0.22, 0.7, 8, 16]} />
          <primitive object={standMat} />
        </mesh>

        {/* Head with Bowed Posture */}
        <group position={[0, 0.95, 0.1]} rotation-x={0.25}>
          <mesh>
            <sphereGeometry args={[0.18, 16, 16]} />
            <primitive object={standMat} />
          </mesh>
          {/* Subtle Golden Crown / Aura Ring */}
          <mesh position={[0, 0.18, 0]} rotation-x={Math.PI / 2}>
            <torusGeometry args={[0.16, 0.02, 8, 24]} />
            <meshBasicMaterial color="#FFE27A" />
          </mesh>
        </group>

        {/* Elongated Arms (Resembling guitar-neck barrels) */}
        {/* Right Arm (Shooting Barrel) */}
        <group position={[0.34, 0.55, 0.15]} rotation-x={-0.45}>
          <mesh position={[0, -0.4, 0]}>
            <cylinderGeometry args={[0.04, 0.06, 0.85, 12]} />
            <primitive object={standMat} />
          </mesh>
          {/* Muzzle ring at tip */}
          <mesh position={[0, -0.85, 0]} rotation-x={Math.PI / 2}>
            <torusGeometry args={[0.06, 0.015, 8, 16]} />
            <meshBasicMaterial color="#FFE27A" />
          </mesh>
        </group>

        {/* Left Arm */}
        <group position={[-0.34, 0.55, 0]} rotation-x={0.15}>
          <mesh position={[0, -0.4, 0]}>
            <cylinderGeometry args={[0.04, 0.06, 0.85, 12]} />
            <primitive object={standMat} />
          </mesh>
        </group>

        {/* Lower Body Drapery / Wisps */}
        <mesh position={[0, -0.1, 0]}>
          <coneGeometry args={[0.28, 0.6, 12]} />
          <primitive object={standMat} />
        </mesh>

        {/* Glowing Aura Halo */}
        <mesh ref={auraRef} position={[0, 0.5, 0]}>
          <ringGeometry args={[0.55, 0.68, 32]} />
          <primitive object={goldTrimMat} />
        </mesh>
      </group>

      {/* ─── REVERB SHOT RINGS (Fired expanding waves) ────────────── */}
      {activeShots.map((shot) => {
        const currentPos = new THREE.Vector3().lerpVectors(
          shot.start,
          shot.target,
          shot.progress
        );
        const ringScale = 0.3 + shot.progress * 1.2;
        const opacity = Math.max(0, 1 - shot.progress);

        return (
          <group
            key={shot.id}
            position={[currentPos.x, currentPos.y, currentPos.z]}
            rotation={shot.rotation}
            scale={[ringScale, ringScale, ringScale]}
          >
            <mesh>
              <torusGeometry args={[0.4, 0.035, 8, 24]} />
              <meshBasicMaterial
                color="#FFE49E"
                transparent
                opacity={opacity}
                side={THREE.DoubleSide}
              />
            </mesh>
            <mesh>
              <circleGeometry args={[0.38, 24]} />
              <meshBasicMaterial
                color="#C9A84C"
                transparent
                opacity={opacity * 0.3}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}
    </>
  );
}
