"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { WALL_DEFS, HOTSPOTS_DATA, HotspotDef } from "@/data/world";

export interface ShotRing {
  id: number;
  start: THREE.Vector3;
  target: THREE.Vector3;
  progress: number;
  rotation: THREE.Euler;
}

interface PlayerProps {
  active: boolean;
  targetsGroup: React.RefObject<THREE.Group>;
  onInteract: (hotspot: HotspotDef) => void;
  onInfoChange: (near: HotspotDef | null, room: string) => void;
  onSfxTrigger: (text: string) => void;
  onStateUpdate: (data: {
    playerPos: THREE.Vector3;
    playerYaw: number;
    stamina: number;
    echoCooldown: number;
    isDashing: boolean;
  }) => void;
  registerShot: (shot: ShotRing) => void;
  touchControls?: {
    moveForward: number;
    moveRight: number;
    lookX: number;
    lookY: number;
    jump: boolean;
    sprint: boolean;
    shoot: boolean;
    echo: boolean;
    interact: boolean;
  };
}

function pushAgainstWalls(x: number, z: number): [number, number] {
  for (const [cx, cz, w, d] of WALL_DEFS) {
    const hx = w / 2 + 0.38;
    const hz = d / 2 + 0.38;
    const dx = x - cx;
    const dz = z - cz;

    if (Math.abs(dx) < hx && Math.abs(dz) < hz) {
      if (hx - Math.abs(dx) < hz - Math.abs(dz)) {
        x = cx + Math.sign(dx || 1) * hx;
      } else {
        z = cz + Math.sign(dz || 1) * hz;
      }
    }
  }
  return [x, z];
}

function getRoomName(x: number, z: number): string {
  if (z < 0) {
    return x < 0 ? "WORKSHOP" : "WEB STUDIO";
  } else {
    return x < 0 ? "LOBBY" : "PROFIL & KONTAK";
  }
}

export function Player({
  active,
  targetsGroup,
  onInteract,
  onInfoChange,
  onSfxTrigger,
  onStateUpdate,
  registerShot,
  touchControls,
}: PlayerProps) {
  const { camera, gl } = useThree();
  const playerGroup = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);

  // Player physics state
  const state = useRef({
    x: 0,
    y: 0,
    z: 3.5,
    vy: 0,
    yaw: 0,
    pitch: 0.25,
    stamina: 1.0,
    echoCooldown: 0,
    lastShotTime: 0,
    nearHotspot: null as HotspotDef | null,
    currentRoom: "LOBBY",
  });

  const keys = useRef<Record<string, boolean>>({});
  const isRightClickAim = useRef(false);

  // Stable callback refs
  const cb = useRef({
    active,
    onInteract,
    onInfoChange,
    onSfxTrigger,
    onStateUpdate,
    registerShot,
  });
  cb.current = {
    active,
    onInteract,
    onInfoChange,
    onSfxTrigger,
    onStateUpdate,
    registerShot,
  };

  // Input listeners
  useEffect(() => {
    const dom = gl.domElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.code] = true;

      // [E] Interact
      if (e.code === "KeyE" && state.current.nearHotspot && cb.current.active) {
        cb.current.onInteract(state.current.nearHotspot);
      }

      // [Q] Echo Pulse
      if (e.code === "KeyQ" && state.current.echoCooldown <= 0 && cb.current.active) {
        state.current.echoCooldown = 8.0;
        cb.current.onSfxTrigger("ECHO PULSE");
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.code] = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement !== dom) return;
      state.current.yaw -= e.movementX * 0.0024;
      state.current.pitch = THREE.MathUtils.clamp(
        state.current.pitch + e.movementY * 0.002,
        -0.2,
        1.05
      );
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (!cb.current.active) return;
      if (document.pointerLockElement !== dom) {
        dom.requestPointerLock();
        return;
      }

      if (e.button === 2) {
        isRightClickAim.current = true;
        return;
      }

      // Left click = Reverb Shot
      if (e.button === 0) {
        triggerReverbShot();
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (e.button === 2) {
        isRightClickAim.current = false;
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const triggerReverbShot = () => {
      const now = performance.now();
      if (now - state.current.lastShotTime < 250) return; // 0.25s cooldown
      state.current.lastShotTime = now;

      // Raycast from camera center
      const ray = new THREE.Raycaster();
      ray.setFromCamera(new THREE.Vector2(0, 0), camera);

      // Check hit with targets
      const hitCandidates: THREE.Object3D[] = [];
      if (targetsGroup.current) {
        targetsGroup.current.traverse((child) => {
          if (child.userData && child.userData.hotspot) {
            hitCandidates.push(child);
          }
        });
      }

      const intersects = ray.intersectObjects(hitCandidates, false);

      const shotStart = new THREE.Vector3(
        state.current.x + Math.sin(state.current.yaw) * 0.5,
        state.current.y + 1.2,
        state.current.z + Math.cos(state.current.yaw) * 0.5
      );

      let shotEnd: THREE.Vector3;

      if (intersects.length > 0) {
        const hit = intersects[0];
        shotEnd = hit.point.clone();
        const hotspot = hit.object.userData.hotspot as HotspotDef;

        cb.current.onSfxTrigger("DOON");
        cb.current.onInteract(hotspot);
      } else {
        shotEnd = ray.ray.at(25, new THREE.Vector3());
        cb.current.onSfxTrigger("KRRK");
      }

      cb.current.registerShot({
        id: Math.random(),
        start: shotStart,
        target: shotEnd,
        progress: 0,
        rotation: camera.rotation.clone(),
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    document.addEventListener("mousemove", handleMouseMove);
    dom.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    dom.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("mousemove", handleMouseMove);
      dom.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      dom.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [gl, camera, targetsGroup]);

  // Main frame loop
  useFrame(({ clock }, dt) => {
    dt = Math.min(dt, 0.05);
    const p = state.current;
    const k = keys.current;
    const tc = touchControls;

    // Cooldown ticks
    if (p.echoCooldown > 0) {
      p.echoCooldown = Math.max(0, p.echoCooldown - dt);
    }

    let isDashing = false;

    if (cb.current.active) {
      // Movement vectors
      let f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
      let r = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0);

      // Add touch joystick input if present
      if (tc) {
        f += tc.moveForward;
        r += tc.moveRight;
        p.yaw -= tc.lookX * 0.03;
        p.pitch = THREE.MathUtils.clamp(p.pitch + tc.lookY * 0.02, -0.2, 1.05);
      }

      let dx = -Math.sin(p.yaw) * f + Math.cos(p.yaw) * r;
      let dz = -Math.cos(p.yaw) * f - Math.sin(p.yaw) * r;
      const len = Math.hypot(dx, dz);

      const wantSprint = (k.ShiftLeft || (tc && tc.sprint)) && len > 0;

      // Dusk Dash Stamina mechanics
      if (wantSprint && p.stamina > 0.08) {
        isDashing = true;
        p.stamina = Math.max(0, p.stamina - dt / 3.0); // 3s sprint duration
      } else {
        p.stamina = Math.min(1.0, p.stamina + dt / 4.0); // 4s full recharge
      }

      if (len > 0) {
        dx /= len;
        dz /= len;
        const speed = isDashing ? 6.2 : 3.0;
        const [nx, nz] = pushAgainstWalls(p.x + dx * speed * dt, p.z + dz * speed * dt);
        p.x = nx;
        p.z = nz;

        if (playerGroup.current) {
          playerGroup.current.rotation.y = THREE.MathUtils.lerp(
            playerGroup.current.rotation.y,
            Math.atan2(dx, dz),
            0.2
          );
        }

        // Leg walking cycle
        const walkAnim = Math.sin(clock.elapsedTime * (isDashing ? 16 : 9)) * 0.35;
        if (leftLegRef.current) leftLegRef.current.rotation.x = walkAnim;
        if (rightLegRef.current) rightLegRef.current.rotation.x = -walkAnim;
      } else {
        if (leftLegRef.current) leftLegRef.current.rotation.x = 0;
        if (rightLegRef.current) rightLegRef.current.rotation.x = 0;
      }

      // Jump
      const wantJump = k.Space || (tc && tc.jump);
      if (wantJump && p.y === 0) {
        p.vy = 4.8;
      }
    }

    // Gravity
    p.vy -= 14 * dt;
    p.y = Math.max(0, p.y + p.vy * dt);
    if (p.y === 0) p.vy = 0;

    if (playerGroup.current) {
      playerGroup.current.position.set(p.x, p.y, p.z);
    }

    // Camera follow with aim mode
    const isAiming = isRightClickAim.current;
    const camDist = isAiming ? 2.1 : 3.4;
    const shoulderOffset = isAiming ? 0.75 : 0.55;

    const cx =
      p.x +
      Math.sin(p.yaw) * Math.cos(p.pitch) * camDist +
      Math.cos(p.yaw) * shoulderOffset;
    const cy = 1.45 + Math.sin(p.pitch) * camDist;
    const cz =
      p.z +
      Math.cos(p.yaw) * Math.cos(p.pitch) * camDist -
      Math.sin(p.yaw) * shoulderOffset;

    camera.position.set(cx, cy, cz);
    camera.lookAt(p.x, 1.4, p.z);

    // Hotspot proximity detection
    let nearHotspot: HotspotDef | null = null;
    let minDistance = 2.4;

    for (const h of HOTSPOTS_DATA) {
      const dist = Math.hypot(p.x - h.position[0], p.z - h.position[2]);
      if (dist < minDistance) {
        minDistance = dist;
        nearHotspot = h;
      }
    }

    const room = getRoomName(p.x, p.z);

    if (nearHotspot !== p.nearHotspot || room !== p.currentRoom) {
      p.nearHotspot = nearHotspot;
      p.currentRoom = room;
      cb.current.onInfoChange(nearHotspot, room);
    }

    // Emit state for StandCompanion & HUD
    cb.current.onStateUpdate({
      playerPos: new THREE.Vector3(p.x, p.y, p.z),
      playerYaw: p.yaw,
      stamina: p.stamina,
      echoCooldown: p.echoCooldown,
      isDashing,
    });
  });

  return (
    <group ref={playerGroup}>
      {/* ─── ORIGINAL CHARACTER "sqiftree" ────────────────────────── */}
      {/* Torso & Long Explorer Coat */}
      <mesh position={[0, 0.95, 0]} castShadow>
        <capsuleGeometry args={[0.26, 0.75, 8, 16]} />
        <meshStandardMaterial color="#161618" roughness={0.7} />
      </mesh>

      {/* Coat Collar & Gold Trim Scarf */}
      <mesh position={[0, 1.38, 0.12]}>
        <boxGeometry args={[0.28, 0.1, 0.26]} />
        <meshStandardMaterial color="#C9A84C" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Head with Explorer Beanie */}
      <group position={[0, 1.58, 0]}>
        {/* Head */}
        <mesh castShadow>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#E8D5C4" roughness={0.5} />
        </mesh>
        {/* Beanie / Cap */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.17, 0.18, 0.14, 16]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      </group>

      {/* Left Arm (Dark coat sleeve) */}
      <mesh position={[-0.32, 0.95, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.5, 6, 12]} />
        <meshStandardMaterial color="#161618" />
      </mesh>

      {/* Right Arm */}
      <mesh position={[0.32, 0.95, 0]} castShadow>
        <capsuleGeometry args={[0.08, 0.5, 6, 12]} />
        <meshStandardMaterial color="#161618" />
      </mesh>

      {/* Lower Coat Skirt / Trench Hem */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.26, 0.36, 0.45, 12]} />
        <meshStandardMaterial color="#161618" />
      </mesh>

      {/* Left Leg & Trail Boot */}
      <mesh ref={leftLegRef} position={[-0.14, 0.35, 0]} castShadow>
        <capsuleGeometry args={[0.09, 0.6, 6, 12]} />
        <meshStandardMaterial color="#0D0D0D" />
      </mesh>

      {/* Right Leg & Trail Boot */}
      <mesh ref={rightLegRef} position={[0.14, 0.35, 0]} castShadow>
        <capsuleGeometry args={[0.09, 0.6, 6, 12]} />
        <meshStandardMaterial color="#0D0D0D" />
      </mesh>
    </group>
  );
}
