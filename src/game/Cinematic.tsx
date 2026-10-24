"use client";

import { useEffect, useState } from "react";

interface CinematicProps {
  onComplete: () => void;
}

export function Cinematic({ onComplete }: CinematicProps) {
  const [step, setStep] = useState(0); // 0: approach (0-2s), 1: enter (2-4s), 2: summon (4-6s)
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    // Step 0 -> 1 at 2s
    const t1 = setTimeout(() => setStep(1), 2000);
    // Step 1 -> 2 at 4s
    const t2 = setTimeout(() => {
      setStep(2);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }, 4000);
    // Complete at 6.2s
    const t3 = setTimeout(() => onComplete(), 6200);

    const handleSkip = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        onComplete();
      }
    };
    window.addEventListener("keydown", handleSkip);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("keydown", handleSkip);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[50] pointer-events-auto flex flex-col items-center justify-center transition-transform select-none ${
        shaking ? "translate-x-1 translate-y-1" : ""
      }`}
      style={{
        background:
          step === 0
            ? "radial-gradient(circle at center, rgba(201,168,76,0.18) 0%, rgba(13,13,13,0.85) 100%)"
            : step === 1
            ? "radial-gradient(circle at center, rgba(201,168,76,0.3) 0%, rgba(13,13,13,0.7) 100%)"
            : "radial-gradient(circle at center, rgba(232,212,154,0.45) 0%, rgba(13,13,13,0.6) 100%)",
      }}
    >
      {/* Top Banner */}
      <div className="absolute top-10 text-center font-display tracking-[0.25em] text-xs text-gold uppercase animate-pulse">
        {step === 0 && "MENDEKATI THE HOUSE · SENJA"}
        {step === 1 && "MEMASUKI LOBBY WORKSHOP"}
        {step === 2 && "STAND SUMMON · MANIFESTASI"}
      </div>

      {/* Center Cinematic SFX / Title */}
      {step === 2 && (
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div
            className="font-display text-7xl md:text-9xl text-gold tracking-wider drop-shadow-[0_4px_24px_rgba(201,168,76,0.6)]"
            style={{ textShadow: "0 0 40px #C9A84C" }}
          >
            DOON!
          </div>
          <div className="font-serif text-2xl md:text-3xl text-cream tracking-widest mt-2">
            STAND : KING KRULE
          </div>
          <p className="font-sans text-xs text-gold-light tracking-[0.2em] uppercase">
            COMPANION · REVERB SHOT · ECHO PULSE · DUSK DASH
          </p>
        </div>
      )}

      {/* Skip Button */}
      <button
        onClick={onComplete}
        type="button"
        className="absolute bottom-10 px-6 py-2.5 bg-black/80 hover:bg-black border border-gold/50 text-gold text-xs font-sans uppercase tracking-[0.2em] transition-all"
      >
        LEWATI CINEMATIC [ESC / SPASI]
      </button>
    </div>
  );
}
