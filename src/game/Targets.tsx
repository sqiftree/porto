"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { HOTSPOTS_DATA, HotspotDef } from "@/data/world";

interface TargetsProps {
  targetsGroup: React.RefObject<THREE.Group>;
  echoPulseActive: boolean;
  openedIds: string[];
}

export function Targets({ targetsGroup, echoPulseActive, openedIds }: TargetsProps) {
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (targetsGroup.current) {
      targetsGroup.current.children.forEach((child, i) => {
        child.rotation.y = t * 1.5 + i * 0.5;
        // Subtle floating bob
        const basePos = (child.userData.baseY as number) || 2.0;
        child.position.y = basePos + Math.sin(t * 2.5 + i * 0.8) * 0.12;
      });
    }
  });

  return (
    <group ref={targetsGroup}>
      {HOTSPOTS_DATA.map((h, i) => {
        const isOpened = h.projectId ? openedIds.includes(h.projectId) : false;
        const targetPos = h.targetPosition || [h.position[0], 2.0, h.position[2]];

        return (
          <group
            key={h.id}
            position={targetPos}
            userData={{
              index: i,
              hotspotId: h.id,
              hotspot: h,
              baseY: targetPos[1],
            }}
          >
            {/* Main Diamond Shape */}
            <mesh userData={{ hotspotIndex: i, hotspot: h }}>
              <octahedronGeometry args={[0.32, 0]} />
              <meshStandardMaterial
                color={isOpened ? "#E8D49A" : "#C9A84C"}
                emissive={echoPulseActive ? "#FFE27A" : "#C9A84C"}
                emissiveIntensity={echoPulseActive ? 1.2 : isOpened ? 0.3 : 0.75}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Glowing Ring around diamond */}
            <mesh rotation-x={Math.PI / 2}>
              <ringGeometry args={[0.42, 0.46, 24]} />
              <meshBasicMaterial
                color={echoPulseActive ? "#FFE27A" : "#C9A84C"}
                transparent
                opacity={echoPulseActive ? 0.8 : 0.45}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
