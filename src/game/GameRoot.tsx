"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import type { Project } from "@/data/projects";
import { HOTSPOTS_DATA, HotspotDef } from "@/data/world";
import { House } from "./House";
import { Targets } from "./Targets";
import { Player, ShotRing } from "./Player";
import { StandCompanion } from "./StandCompanion";
import { Cinematic } from "./Cinematic";
import { HUD } from "./HUD";

interface GameRootProps {
  projects: Project[];
  paused: boolean;
  onOpen: (p: Project) => void;
  onExit: () => void;
}

const TIPS = [
  "WASD bergerak · SHIFT lari · SPACE lompat",
  "Dekati panggung emas lalu tekan E, atau tembak intan di atasnya.",
  "Klik layar untuk mengunci mouse. ESC melepasnya.",
  "Setiap Stage adalah satu proyek nyata Yashif Victoriawan.",
  "Tidak suka game? Tekan SKIP untuk portofolio klasik kapan saja.",
  "Stand KING KRULE mengambang di samping kanan-belakang karakter.",
];

export default function GameRoot({ projects, paused, onOpen, onExit }: GameRootProps) {
  const [phase, setPhase] = useState<"loading" | "title" | "cinematic" | "play">("loading");
  const [progress, setProgress] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);
  const [openedIds, setOpenedIds] = useState<string[]>([]);
  const [currentRoom, setCurrentRoom] = useState("LOBBY");
  const [nearHotspot, setNearHotspot] = useState<HotspotDef | null>(null);
  const [sfxText, setSfxText] = useState<string | null>(null);
  const [echoPulseActive, setEchoPulseActive] = useState(false);
  const [quality, setQuality] = useState<"high" | "low">("high");
  const [audioActive, setAudioActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Stand & Player state
  const [playerPos, setPlayerPos] = useState(() => new THREE.Vector3(0, 0, 3.5));
  const [playerYaw, setPlayerYaw] = useState(0);
  const [stamina, setStamina] = useState(1.0);
  const [echoCooldown, setEchoCooldown] = useState(0);
  const [activeShots, setActiveShots] = useState<ShotRing[]>([]);

  const targetsGroup = useRef<THREE.Group>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioOscRef = useRef<OscillatorNode | null>(null);

  // Check hardware & capabilities
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const noGL = !(canvas.getContext("webgl2") || canvas.getContext("webgl"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(pointer: coarse)").matches;

    if (noGL) {
      onExit();
      return;
    }
    if (touch) {
      setIsTouchDevice(true);
    }
  }, [onExit]);

  // Loading screen progression
  useEffect(() => {
    if (phase !== "loading") return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    const tipTimer = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % TIPS.length);
    }, 2400);

    return () => {
      clearInterval(interval);
      clearInterval(tipTimer);
    };
  }, [phase]);

  useEffect(() => {
    if (progress >= 100 && phase === "loading") {
      setPhase("title");
    }
  }, [progress, phase]);

  // Title screen Enter key shortcut
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && phase === "title") {
        setPhase("cinematic");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [phase]);

  // Unlock pointer when paused (e.g., ProjectModal open)
  useEffect(() => {
    if (paused) {
      document.exitPointerLock();
    }
  }, [paused]);

  // Animate Reverb Shot rings
  useEffect(() => {
    if (activeShots.length === 0) return;
    const timer = setInterval(() => {
      setActiveShots((prev) =>
        prev
          .map((s) => ({ ...s, progress: s.progress + 0.12 }))
          .filter((s) => s.progress < 1.0)
      );
    }, 16);
    return () => clearInterval(timer);
  }, [activeShots]);

  // SFX text floating banner auto-dismiss
  const triggerSfx = useCallback((text: string) => {
    setSfxText(text);
    if (text === "ECHO PULSE") {
      setEchoPulseActive(true);
      setTimeout(() => setEchoPulseActive(false), 3000);
    }
    setTimeout(() => {
      setSfxText(null);
    }, 900);
  }, []);

  // Web Audio Turntable Synthesizer (Zero external dependencies)
  const toggleAudio = useCallback(() => {
    if (audioActive) {
      if (audioOscRef.current) {
        audioOscRef.current.stop();
        audioOscRef.current.disconnect();
        audioOscRef.current = null;
      }
      setAudioActive(false);
    } else {
      try {
        const AudioContextClass =
          window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }
        // Warm ambient harmonic drone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(146.83, ctx.currentTime); // D3 chord root
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        audioOscRef.current = osc;
        setAudioActive(true);
        triggerSfx("♫ AUDIO ON");
      } catch (err) {
        console.error("Audio initialize error", err);
      }
    }
  }, [audioActive, triggerSfx]);

  // Hotspot interaction dispatcher
  const handleInteract = useCallback(
    (h: HotspotDef) => {
      if (h.type === "exit") {
        document.exitPointerLock();
        onExit();
        return;
      }

      if (h.type === "turntable") {
        toggleAudio();
        return;
      }

      if (h.projectId) {
        const found = projects.find((p) => p.id === h.projectId);
        if (found) {
          setOpenedIds((prev) =>
            prev.includes(found.id) ? prev : [...prev, found.id]
          );
          document.exitPointerLock();
          onOpen(found);
          return;
        }
      }

      // If generic hotspot, open first matching project or toast
      const fallbackProject = projects[0];
      if (fallbackProject) {
        document.exitPointerLock();
        onOpen(fallbackProject);
      }
    },
    [projects, onOpen, onExit, toggleAudio]
  );

  const totalStages = useMemo(() => {
    return HOTSPOTS_DATA.filter((h) => h.type === "project").length;
  }, []);

  return (
    <div className="fixed inset-0 z-[40] bg-[#F5F2EE] text-[#0D0D0D] overflow-hidden select-none">
      {/* ─── 3D CANVAS (Rendered for title, cinematic, and play) ───── */}
      {phase !== "loading" && (
        <Canvas
          shadows={quality === "high"}
          camera={{ fov: 60, near: 0.1, far: 60 }}
          dpr={quality === "high" ? [1, 1.75] : 1}
        >
          <color attach="background" args={["#E8D49A"]} />
          <fog attach="fog" args={["#E8D49A", 10, 36]} />

          {/* Golden hour dusk lighting */}
          <ambientLight intensity={0.85} color="#F5F2EE" />
          <directionalLight
            position={[8, 10, 5]}
            intensity={1.7}
            color="#FFE6B3"
            castShadow={quality === "high"}
            shadow-mapSize={[1024, 1024]}
          />
          <hemisphereLight args={["#FFE49E", "#2B241E", 0.6]} />

          {/* House Architecture & Furniture Props */}
          <House onInteract={handleInteract} echoPulseActive={echoPulseActive} />

          {/* Spinning Interactive Diamond Targets */}
          <Targets
            targetsGroup={targetsGroup}
            echoPulseActive={echoPulseActive}
            openedIds={openedIds}
          />

          {/* Player Character */}
          <Player
            active={phase === "play" && !paused}
            targetsGroup={targetsGroup}
            onInteract={handleInteract}
            onInfoChange={(near, room) => {
              setNearHotspot(near);
              setCurrentRoom(room);
            }}
            onSfxTrigger={triggerSfx}
            onStateUpdate={(data) => {
              setPlayerPos(data.playerPos);
              setPlayerYaw(data.playerYaw);
              setStamina(data.stamina);
              setEchoCooldown(data.echoCooldown);
            }}
            registerShot={(shot) => {
              setActiveShots((prev) => [...prev, shot]);
            }}
          />

          {/* Stand Companion KING KRULE */}
          <StandCompanion
            playerPos={playerPos}
            playerYaw={playerYaw}
            activeShots={activeShots}
          />
        </Canvas>
      )}

      {/* ─── PHASE: LOADING SCREEN ───────────────────────────────── */}
      {phase === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[#F5F2EE] text-[#0D0D0D]">
          <div className="font-display text-5xl md:text-8xl tracking-wider text-black flex items-center gap-3">
            <span className="text-gold">☆</span> SQIFTREE RUN
          </div>
          <div className="h-1.5 w-[min(460px,85vw)] bg-[#D9D3C8] rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="font-display text-xl tracking-widest text-black">
            {progress}% MEMUAT DUNIA 3D
          </div>
          <p className="font-sans text-xs md:text-sm text-mid max-w-md text-center px-4">
            {TIPS[tipIndex]}
          </p>
          <button
            onClick={onExit}
            type="button"
            className="mt-6 text-xs font-sans uppercase tracking-[0.2em] text-muted underline hover:text-black"
          >
            Lewati ke Portofolio Klasik
          </button>
        </div>
      )}

      {/* ─── PHASE: TITLE SCREEN ─────────────────────────────────── */}
      {phase === "title" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#F5F2EE]/85 backdrop-blur-md text-[#0D0D0D]">
          <div className="text-xs font-sans tracking-[0.3em] uppercase text-gold font-bold">
            STAND USER · YASHIF VICTORIAWAN
          </div>
          <div className="font-display text-6xl md:text-9xl tracking-wide text-black drop-shadow-sm">
            SQIFTREE RUN
          </div>
          <p className="font-serif italic text-base md:text-lg text-mid max-w-lg text-center px-4">
            Jelajahi The House: Studio kerja, prototipe telemetri UAV, dan sistem perangkat lunak.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button
              onClick={() => setPhase("cinematic")}
              type="button"
              className="px-10 py-3 bg-[#0D0D0D] text-[#F5F2EE] hover:bg-gold hover:text-[#0D0D0D] text-xs font-sans uppercase tracking-[0.25em] font-bold transition-all shadow-xl"
            >
              ▶ PRESS START
            </button>
            <button
              onClick={onExit}
              type="button"
              className="px-8 py-3 border border-[#D9D3C8] hover:border-[#0D0D0D] text-xs font-sans uppercase tracking-[0.2em] transition-all"
            >
              PORTOFOLIO KLASIK
            </button>
          </div>
          <div className="text-[0.7rem] font-sans tracking-widest uppercase text-muted mt-4">
            TEKAN [ENTER] UNTUK MULAI
          </div>
        </div>
      )}

      {/* ─── PHASE: CINEMATIC SUMMON ─────────────────────────────── */}
      {phase === "cinematic" && (
        <Cinematic onComplete={() => setPhase("play")} />
      )}

      {/* ─── PHASE: PLAY (HUD & OVERLAY) ─────────────────────────── */}
      {phase === "play" && (
        <HUD
          currentRoom={currentRoom}
          openedCount={openedIds.length}
          totalStages={totalStages}
          nearHotspot={nearHotspot}
          stamina={stamina}
          echoCooldown={echoCooldown}
          sfxText={sfxText}
          audioActive={audioActive}
          onToggleAudio={toggleAudio}
          onExit={onExit}
          isTouchDevice={isTouchDevice}
        />
      )}
    </div>
  );
}
