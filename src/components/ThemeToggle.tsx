"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    // Check initial preference from localStorage (Light is default per reference)
    const savedTheme = localStorage.getItem("yashif-theme") as "dark" | "light" | null;
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("yashif-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="w-8 h-8 rounded border border-border bg-surface hover:border-gold text-mid hover:text-gold transition-colors flex items-center justify-center focus:outline-none"
      aria-label={`Ganti ke mode ${theme === "dark" ? "terang" : "gelap"}`}
      title={`Beralih ke mode ${theme === "dark" ? "terang" : "gelap"}`}
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5 text-gold" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-mid" />
      )}
    </button>
  );
}
