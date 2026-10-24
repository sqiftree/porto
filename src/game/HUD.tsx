"use client";

import { useState } from "react";
import { HotspotDef } from "@/data/world";

interface HUDProps {
  currentRoom: string;
  openedCount: number;
  totalStages: number;
  nearHotspot: HotspotDef | null;
  stamina: number;
  echoCooldown: number;
  sfxText: string | null;
  audioActive: boolean;
  onToggleAudio: () => void;
  onExit: () => void;
  isTouchDevice: boolean;
  onTouchAction?: (action: string, value?: any) => void;
}

export function HUD({
  currentRoom,
  openedCount,
  totalStages,
  nearHotspot,
  stamina,
  echoCooldown,
  sfxText,
  audioActive,
  onToggleAudio,
  onExit,
  isTouchDevice,
  onTouchAction,
}: HUDProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-[45] select-none">
      {/* ─── RETICLE / CROSSHAIR (Center) ─────────────────────────── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-4 w-4">
          <div className="absolute left-1/2 top-0 h-1.5 w-[2px] -translate-x-1/2 bg-black/60 dark:bg-white/70" />
          <div className="absolute left-1/2 bottom-0 h-1.5 w-[2px] -translate-x-1/2 bg-black/60 dark:bg-white/70" />
          <div className="absolute top-1/2 left-0 h-[2px] w-1.5 -translate-y-1/2 bg-black/60 dark:bg-white/70" />
          <div className="absolute top-1/2 right-0 h-[2px] w-1.5 -translate-y-1/2 bg-black/60 dark:bg-white/70" />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
        </div>
      </div>

      {/* ─── TOP LEFT: ROOM NAME & STAGES PROGRESS ─────────────────── */}
      <div className="absolute left-6 top-6">
        <div className="flex items-center gap-2">
          <span className="text-gold font-display text-2xl">☆</span>
          <span className="font-display text-3xl tracking-wide text-black dark:text-white">
            {currentRoom}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-sans text-[0.72rem] tracking-[0.2em] uppercase text-muted">
            STAGE TERBUKA:
          </span>
          <span className="font-display text-lg tracking-wider text-gold">
            {openedCount} / {totalStages}
          </span>
        </div>
      </div>

      {/* ─── TOP RIGHT: CONTROLS & EXIT BUTTONS ───────────────────── */}
      <div className="pointer-events-auto absolute right-6 top-6 flex items-center gap-3">
        <button
          onClick={onToggleAudio}
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-bg/85 dark:bg-surface/85 border border-border text-xs font-sans uppercase tracking-[0.15em] text-black dark:text-white hover:border-gold transition-colors backdrop-blur-sm"
          title="Toggle Turntable Ambient Audio"
        >
          <span>♫</span>
          <span>{audioActive ? "AUDIO: ON" : "AUDIO: MUTE"}</span>
        </button>

        <button
          onClick={onExit}
          type="button"
          className="px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black text-xs font-sans uppercase tracking-[0.15em] hover:bg-gold hover:text-white transition-colors"
        >
          SKIP → PORTOFOLIO KLASIK
        </button>
      </div>

      {/* ─── BOTTOM CENTER: INTERACTION PROMPT ─────────────────────── */}
      {nearHotspot && (
        <div className="pointer-events-auto absolute bottom-20 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-black/90 text-white border border-gold/60 backdrop-blur-md shadow-2xl flex items-center gap-3 animate-fade-in">
          <span className="font-mono text-xs px-2 py-0.5 bg-gold text-black font-bold rounded">
            E
          </span>
          <span className="font-sans text-xs tracking-wider uppercase">
            {nearHotspot.label}: <strong className="text-gold">{nearHotspot.title}</strong>
          </span>
        </div>
      )}

      {/* ─── BOTTOM RIGHT: ABILITIES METERS ───────────────────────── */}
      <div className="absolute right-6 bottom-6 flex items-end gap-4">
        {/* Echo Pulse [Q] */}
        <div className="flex flex-col items-center gap-1">
          <div className="relative h-12 w-12 rounded-full border border-border bg-bg/80 dark:bg-surface/80 flex items-center justify-center backdrop-blur-sm">
            <span className="font-display text-lg text-gold">Q</span>
            {echoCooldown > 0 && (
              <div className="absolute inset-0 rounded-full border-2 border-gold/40 flex items-center justify-center bg-black/60">
                <span className="font-mono text-[0.65rem] text-gold-light">
                  {Math.ceil(echoCooldown)}s
                </span>
              </div>
            )}
          </div>
          <span className="font-sans text-[0.65rem] tracking-wider uppercase text-muted">
            ECHO PULSE
          </span>
        </div>

        {/* Dusk Dash [Shift + W] */}
        <div className="flex flex-col gap-1 w-28">
          <div className="flex justify-between items-center text-[0.65rem] font-sans tracking-wider uppercase text-muted">
            <span>DUSK DASH</span>
            <span className="font-mono text-gold">{Math.round(stamina * 100)}%</span>
          </div>
          <div className="h-2 w-full bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-75"
              style={{ width: `${Math.round(stamina * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* ─── BOTTOM LEFT: SHORTCUTS GUIDE ─────────────────────────── */}
      <div className="hidden md:block absolute left-6 bottom-6 text-[0.7rem] font-sans tracking-wider uppercase text-muted">
        WASD bergerak · SHIFT lari · SPACE lompat · E buka · Klik kiri tembak · Q radar
      </div>

      {/* ─── FLOATING COMIC SFX TEXT ──────────────────────────────── */}
      {sfxText && (
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 animate-bounce">
          <div
            className="font-display text-6xl md:text-8xl tracking-widest text-gold -rotate-6"
            style={{
              textShadow: "0 0 25px rgba(201,168,76,0.8), 2px 2px 0 #0D0D0D",
            }}
          >
            {sfxText}!
          </div>
        </div>
      )}

      {/* ─── MOBILE TOUCH CONTROLS (if coarse pointer) ─────────────── */}
      {isTouchDevice && onTouchAction && (
        <div className="pointer-events-auto absolute inset-x-0 bottom-4 px-6 flex justify-between items-end md:hidden">
          {/* Virtual Direction Buttons */}
          <div className="grid grid-cols-3 gap-2 w-32">
            <div />
            <button
              onTouchStart={() => onTouchAction("forward", true)}
              onTouchEnd={() => onTouchAction("forward", false)}
              className="h-10 w-10 bg-black/60 border border-gold text-white font-bold rounded"
            >
              ▲
            </button>
            <div />
            <button
              onTouchStart={() => onTouchAction("left", true)}
              onTouchEnd={() => onTouchAction("left", false)}
              className="h-10 w-10 bg-black/60 border border-gold text-white font-bold rounded"
            >
              ◀
            </button>
            <button
              onTouchStart={() => onTouchAction("back", true)}
              onTouchEnd={() => onTouchAction("back", false)}
              className="h-10 w-10 bg-black/60 border border-gold text-white font-bold rounded"
            >
              ▼
            </button>
            <button
              onTouchStart={() => onTouchAction("right", true)}
              onTouchEnd={() => onTouchAction("right", false)}
              className="h-10 w-10 bg-black/60 border border-gold text-white font-bold rounded"
            >
              ▶
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onTouchStart={() => onTouchAction("jump")}
              className="h-12 w-12 bg-black/70 border border-gold text-white text-xs font-sans rounded-full"
            >
              JUMP
            </button>
            <button
              onTouchStart={() => onTouchAction("shoot")}
              className="h-12 w-12 bg-gold text-black font-bold text-xs font-sans rounded-full shadow-lg"
            >
              FIRE
            </button>
            <button
              onTouchStart={() => onTouchAction("interact")}
              className="h-12 w-12 bg-black/70 border border-gold text-white text-xs font-sans rounded-full"
            >
              [E]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
