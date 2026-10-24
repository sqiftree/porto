"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { WALL_DEFS, HOTSPOTS_DATA, HotspotDef } from "@/data/world";

interface HouseProps {
  onInteract: (hotspot: HotspotDef) => void;
  echoPulseActive: boolean;
}

export function House({ onInteract, echoPulseActive }: HouseProps) {
  const monitorsRef = useRef<THREE.Group>(null);
  const rcPlaneRef = useRef<THREE.Group>(null);
  const turntableDiscRef = useRef<THREE.Mesh>(null);

  // Dynamic animations for props
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    // RC Plane subtle floating / sway
    if (rcPlaneRef.current) {
      rcPlaneRef.current.position.y = 2.1 + Math.sin(t * 1.5) * 0.04;
      rcPlaneRef.current.rotation.z = Math.sin(t * 0.8) * 0.03;
    }
    // Turntable record spinning
    if (turntableDiscRef.current) {
      turntableDiscRef.current.rotation.y = t * 1.8;
    }
  });

  const goldMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#C9A84C",
        roughness: 0.3,
        metalness: 0.7,
      }),
    []
  );

  const echoMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#FFE27A",
        wireframe: true,
      }),
    []
  );

  return (
    <group>
      {/* ─── FLOOR (Wood plank tone) ──────────────────────────────── */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[16.2, 10.2]} />
        <meshStandardMaterial color="#EAE4D8" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* Floor Rugs */}
      {/* Lobby Welcome Rug */}
      <mesh rotation-x={-Math.PI / 2} position={[-2, 0.01, 2.5]} receiveShadow>
        <planeGeometry args={[3.2, 2.2]} />
        <meshStandardMaterial color="#2B2724" roughness={0.9} />
      </mesh>
      {/* Workshop Mat */}
      <mesh rotation-x={-Math.PI / 2} position={[-5, 0.01, -2.5]} receiveShadow>
        <planeGeometry args={[3.8, 3.2]} />
        <meshStandardMaterial color="#353A40" roughness={0.9} />
      </mesh>
      {/* Web Studio Mat */}
      <mesh rotation-x={-Math.PI / 2} position={[4, 0.01, -2.5]} receiveShadow>
        <planeGeometry args={[4.2, 3.4]} />
        <meshStandardMaterial color="#2E332B" roughness={0.9} />
      </mesh>

      {/* ─── CEILING & CEILING BEAMS ─────────────────────────────── */}
      <mesh rotation-x={Math.PI / 2} position={[0, 3.0, 0]}>
        <planeGeometry args={[16.2, 10.2]} />
        <meshStandardMaterial color="#F5F2EE" roughness={0.9} />
      </mesh>
      {/* Exposed Ceiling Beams */}
      {[-6, -2, 2, 6].map((x) => (
        <mesh key={`beam-${x}`} position={[x, 2.9, 0]}>
          <boxGeometry args={[0.2, 0.2, 10]} />
          <meshStandardMaterial color="#3E342B" />
        </mesh>
      ))}

      {/* ─── WALLS (from WALL_DEFS) ──────────────────────────────── */}
      {WALL_DEFS.map(([cx, cz, w, d], i) => (
        <group key={`wall-${i}`}>
          {/* Main wall body */}
          <mesh position={[cx, 1.5, cz]} castShadow receiveShadow>
            <boxGeometry args={[w, 3.0, d]} />
            <meshStandardMaterial color="#DDD6C9" roughness={0.85} />
          </mesh>
          {/* Wooden baseboard */}
          <mesh position={[cx, 0.1, cz]}>
            <boxGeometry args={[w, 0.2, d + 0.04]} />
            <meshStandardMaterial color="#2E2620" />
          </mesh>
        </group>
      ))}

      {/* ─── ROOM A: WORKSHOP FURNITURE (UAV & Telemetry) ─────────── */}
      <group position={[-5.5, 0, -3.8]}>
        {/* Work desk */}
        <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.4, 0.08, 1.0]} />
          <meshStandardMaterial color="#2A2420" />
        </mesh>
        {/* Desk legs */}
        {[-1.1, 1.1].map((lx) =>
          [-0.4, 0.4].map((lz) => (
            <mesh key={`leg-${lx}-${lz}`} position={[lx, 0.2, lz]}>
              <cylinderGeometry args={[0.03, 0.03, 0.4, 8]} />
              <meshStandardMaterial color="#111111" metalness={0.8} />
            </mesh>
          ))
        )}
        {/* Dual GCS Monitors */}
        <group ref={monitorsRef} position={[0, 0.75, -0.2]}>
          {/* Left Monitor (Artificial Horizon) */}
          <group position={[-0.45, 0, 0]} rotation-y={0.15}>
            <mesh>
              <boxGeometry args={[0.7, 0.45, 0.04]} />
              <meshStandardMaterial color="#111111" />
            </mesh>
            <mesh position={[0, 0, 0.025]}>
              <planeGeometry args={[0.64, 0.4]} />
              <meshBasicMaterial color="#005588" />
            </mesh>
            <mesh position={[0, -0.25, 0]}>
              <cylinderGeometry args={[0.02, 0.06, 0.15, 8]} />
              <meshStandardMaterial color="#222" />
            </mesh>
          </group>
          {/* Right Monitor (MAVLink Telemetry & Waypoints) */}
          <group position={[0.45, 0, 0]} rotation-y={-0.15}>
            <mesh>
              <boxGeometry args={[0.7, 0.45, 0.04]} />
              <meshStandardMaterial color="#111111" />
            </mesh>
            <mesh position={[0, 0, 0.025]}>
              <planeGeometry args={[0.64, 0.4]} />
              <meshBasicMaterial color="#0B2A1E" />
            </mesh>
            <mesh position={[0, -0.25, 0]}>
              <cylinderGeometry args={[0.02, 0.06, 0.15, 8]} />
              <meshStandardMaterial color="#222" />
            </mesh>
          </group>
        </group>
        {/* Radio telemetry transmitter unit on desk */}
        <mesh position={[0.85, 0.5, 0.1]}>
          <boxGeometry args={[0.25, 0.08, 0.2]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </group>

      {/* Hanging RC Plane Model (Narash BUV) */}
      <group ref={rcPlaneRef} position={[-2.5, 2.1, -2.5]}>
        {/* Fuselage */}
        <mesh rotation-z={Math.PI / 2} castShadow>
          <cylinderGeometry args={[0.08, 0.04, 1.6, 12]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.4} />
        </mesh>
        {/* Wing */}
        <mesh position={[0, 0.05, 0]} castShadow>
          <boxGeometry args={[2.4, 0.03, 0.35]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.3} roughness={0.5} />
        </mesh>
        {/* V-Tail Stabilizers */}
        <mesh position={[0, 0.15, -0.65]} rotation-z={0.5} castShadow>
          <boxGeometry args={[0.45, 0.02, 0.2]} />
          <meshStandardMaterial color="#0D0D0D" />
        </mesh>
        <mesh position={[0, 0.15, -0.65]} rotation-z={-0.5} castShadow>
          <boxGeometry args={[0.45, 0.02, 0.2]} />
          <meshStandardMaterial color="#0D0D0D" />
        </mesh>
        {/* Pusher Propeller */}
        <mesh position={[0, 0, -0.82]} rotation-z={Math.PI / 4}>
          <boxGeometry args={[0.3, 0.02, 0.01]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
        {/* Suspension wires */}
        <mesh position={[-0.8, 0.45, 0]}>
          <cylinderGeometry args={[0.003, 0.003, 0.9, 4]} />
          <meshBasicMaterial color="#888" />
        </mesh>
        <mesh position={[0.8, 0.45, 0]}>
          <cylinderGeometry args={[0.003, 0.003, 0.9, 4]} />
          <meshBasicMaterial color="#888" />
        </mesh>
      </group>

      {/* ─── ROOM B: WEB STUDIO FURNITURE ─────────────────────────── */}
      {/* Bingilo Cashier POS Desk */}
      <group position={[2.5, 0, -3.8]}>
        <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.0, 0.08, 1.0]} />
          <meshStandardMaterial color="#2C3539" />
        </mesh>
        {/* POS Screen */}
        <mesh position={[0, 0.72, -0.1]} rotation-x={-0.2}>
          <boxGeometry args={[0.6, 0.4, 0.05]} />
          <meshStandardMaterial color="#1A1A1A" />
        </mesh>
        <mesh position={[0, 0.72, -0.07]} rotation-x={-0.2}>
          <planeGeometry args={[0.54, 0.34]} />
          <meshBasicMaterial color="#C9A84C" />
        </mesh>
        {/* Cash Drawer Base */}
        <mesh position={[0, 0.48, 0.15]}>
          <boxGeometry args={[0.45, 0.08, 0.35]} />
          <meshStandardMaterial color="#111" metalness={0.7} />
        </mesh>
      </group>

      {/* Desa Jetis Wall Poster / Map Frame */}
      <group position={[6.2, 1.4, -4.82]}>
        <mesh>
          <boxGeometry args={[1.6, 1.1, 0.04]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.6} />
        </mesh>
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.5, 1.0]} />
          <meshBasicMaterial color="#0A3A2A" />
        </mesh>
      </group>

      {/* HaloMBG Smartphone on Stand */}
      <group position={[6.5, 0.45, -2.0]}>
        {/* Small pedestal table */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.9, 16]} />
          <meshStandardMaterial color="#232323" />
        </mesh>
        {/* Phone */}
        <mesh position={[0, 0.58, 0]} rotation-x={-0.3}>
          <boxGeometry args={[0.18, 0.34, 0.02]} />
          <meshStandardMaterial color="#0D0D0D" />
        </mesh>
        <mesh position={[0, 0.58, 0.015]} rotation-x={-0.3}>
          <planeGeometry args={[0.16, 0.32]} />
          <meshBasicMaterial color="#7C3AED" />
        </mesh>
      </group>

      {/* Prototype NEO MyPertamina Board */}
      <group position={[3.2, 1.4, -0.18]}>
        {/* Whiteboard / UI Board */}
        <mesh>
          <boxGeometry args={[2.0, 1.2, 0.04]} />
          <meshStandardMaterial color="#D9D3C8" metalness={0.2} roughness={0.3} />
        </mesh>
        {/* UI Mockup stickies */}
        {[-0.6, 0, 0.6].map((sx, idx) => (
          <mesh key={`sticky-${idx}`} position={[sx, 0.1, 0.03]}>
            <planeGeometry args={[0.4, 0.5]} />
            <meshBasicMaterial color={idx === 1 ? "#C9A84C" : "#E8D49A"} />
          </mesh>
        ))}
      </group>

      {/* ─── ROOM C: PROFIL & KONTAK FURNITURE ─────────────────────── */}
      {/* Stand Stats Radar Board */}
      <group position={[5.8, 1.5, 3.2]} rotation-y={-Math.PI / 2}>
        <mesh>
          <boxGeometry args={[2.2, 1.5, 0.05]} />
          <meshStandardMaterial color="#161616" metalness={0.5} />
        </mesh>
        {/* Radar Graphic representation */}
        <mesh position={[0, 0, 0.03]}>
          <circleGeometry args={[0.55, 6]} />
          <meshBasicMaterial color="#C9A84C" wireframe />
        </mesh>
      </group>

      {/* Race Log Corkboard */}
      <group position={[2.8, 1.5, 4.82]}>
        <mesh>
          <boxGeometry args={[2.2, 1.2, 0.04]} />
          <meshStandardMaterial color="#A67B48" roughness={0.9} />
        </mesh>
        {/* Pins / Badges */}
        {[-0.7, -0.2, 0.3, 0.7].map((px, idx) => (
          <mesh key={`pin-${idx}`} position={[px, 0.1, 0.03]}>
            <planeGeometry args={[0.35, 0.45]} />
            <meshBasicMaterial color={idx % 2 === 0 ? "#F5F2EE" : "#C9A84C"} />
          </mesh>
        ))}
      </group>

      {/* Vintage Brass Mailbox */}
      <group position={[6.5, 0.9, 4.5]}>
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.6, 0.25]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.1, 0.13]}>
          <boxGeometry args={[0.25, 0.03, 0.02]} />
          <meshStandardMaterial color="#0D0D0D" />
        </mesh>
      </group>

      {/* ─── ROOM D: LOBBY & ENTRANCE FURNITURE ───────────────────── */}
      {/* Wooden Credenza with Turntable */}
      <group position={[-4.5, 0.45, 3.8]}>
        {/* Credenza */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.6, 0.7, 0.7]} />
          <meshStandardMaterial color="#3E342B" roughness={0.7} />
        </mesh>
        {/* Turntable Base */}
        <mesh position={[0, 0.38, 0]}>
          <boxGeometry args={[0.6, 0.06, 0.45]} />
          <meshStandardMaterial color="#161616" metalness={0.6} />
        </mesh>
        {/* Turntable Platter (Vinyl Record) */}
        <mesh ref={turntableDiscRef} position={[-0.08, 0.42, 0]} rotation-x={-Math.PI / 2}>
          <cylinderGeometry args={[0.18, 0.18, 0.01, 24]} />
          <meshStandardMaterial color="#0D0D0D" roughness={0.3} metalness={0.4} />
        </mesh>
        {/* Tonearm */}
        <mesh position={[0.18, 0.44, 0.1]} rotation-y={0.3}>
          <boxGeometry args={[0.02, 0.02, 0.22]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.9} />
        </mesh>
      </group>

      {/* Front Door */}
      <group position={[0, 1.25, 4.84]}>
        {/* Door Panel */}
        <mesh castShadow>
          <boxGeometry args={[1.4, 2.5, 0.08]} />
          <meshStandardMaterial color="#2E241E" roughness={0.6} />
        </mesh>
        {/* Door Handle */}
        <mesh position={[0.5, -0.05, -0.06]}>
          <cylinderGeometry args={[0.02, 0.02, 0.16, 8]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.9} />
        </mesh>
        {/* Brass Welcome Plaque */}
        <mesh position={[0, 0.5, -0.05]}>
          <boxGeometry args={[0.5, 0.14, 0.02]} />
          <meshStandardMaterial color="#C9A84C" metalness={0.8} />
        </mesh>
      </group>

      {/* ─── HOTSPOT PEDESTALS (Stage & Interactive Bases) ────────── */}
      {HOTSPOTS_DATA.map((h, i) => (
        <group key={h.id} position={h.position}>
          {/* Base Cylinder */}
          <mesh position={[0, -h.position[1] + 0.05, 0]} receiveShadow>
            <cylinderGeometry args={[0.6, 0.7, 0.1, 24]} />
            <meshStandardMaterial color="#0D0D0D" />
          </mesh>
          {/* Glowing Ring */}
          <mesh position={[0, -h.position[1] + 0.11, 0]} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.55, 0.65, 24]} />
            <meshBasicMaterial
              color={echoPulseActive ? "#FFE27A" : "#C9A84C"}
              transparent
              opacity={echoPulseActive ? 0.9 : 0.6}
            />
          </mesh>

          {/* Echo Pulse Wireframe Indicator */}
          {echoPulseActive && (
            <mesh position={[0, 0.5, 0]}>
              <boxGeometry args={[1.2, 1.6, 1.2]} />
              <primitive object={echoMat} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}
