"use client";

import { useEffect, useState } from "react";
import { Palette, Check } from "lucide-react";

export type AccentColor = "cobalt" | "sunset" | "emerald" | "crimson";

const ACCENTS: { id: AccentColor; name: string; hex: string }[] = [
  { id: "cobalt", name: "Electric Cobalt", hex: "#0062FF" },
  { id: "sunset", name: "Sunset Tangerine", hex: "#FF5500" },
  { id: "emerald", name: "Cyber Emerald", hex: "#059669" },
  { id: "crimson", name: "Last.fm Red", hex: "#D92338" },
];

export function AccentPicker() {
  const [accent, setAccent] = useState<AccentColor>("cobalt");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("yashif-accent") as AccentColor | null;
      if (saved && ACCENTS.some((a) => a.id === saved)) {
        setAccent(saved);
        document.documentElement.setAttribute("data-accent", saved);
      } else {
        document.documentElement.setAttribute("data-accent", "cobalt");
      }
    } catch (_) {}
  }, []);

  const handleSelect = (id: AccentColor) => {
    setAccent(id);
    document.documentElement.setAttribute("data-accent", id);
    try {
      localStorage.setItem("yashif-accent", id);
    } catch (_) {}
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        className="p-2 rounded-md bg-white/10 hover:bg-white/15 text-white/85 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-accent"
        title="Pilih Tone Warna Portofolio"
        aria-label="Pilih Tone Warna Portofolio"
      >
        <span
          className="w-3 h-3 rounded-full border border-white/30 shadow-2xs"
          style={{ backgroundColor: ACCENTS.find((a) => a.id === accent)?.hex ?? "#0062FF" }}
        />
        <Palette className="w-3.5 h-3.5 opacity-80" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#1A1C23] border border-white/15 shadow-2xl py-2 z-50 text-xs font-mono animate-soft-slide">
            <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-white/50 font-semibold border-b border-white/10 mb-1">
              Pilihan Warna Cerah
            </div>
            {ACCENTS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full px-3 py-2 flex items-center justify-between text-left hover:bg-white/10 transition-colors ${
                  accent === item.id ? "text-white font-medium" : "text-white/70"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/20 flex-shrink-0"
                    style={{ backgroundColor: item.hex }}
                  />
                  <span>{item.name}</span>
                </div>
                {accent === item.id && <Check className="w-3.5 h-3.5 text-accent" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
