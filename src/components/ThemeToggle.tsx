"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    // Check initial preference from localStorage
    const savedTheme = localStorage.getItem("yashif-theme") as "dark" | "light" | null;
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
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
      className="p-2 rounded-md border border-border bg-surface hover:bg-surface-hover text-text transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={`Ganti ke mode ${theme === "dark" ? "terang" : "gelap"}`}
      title={`Beralih ke mode ${theme === "dark" ? "terang" : "gelap"}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-highlight" />
      ) : (
        <Moon className="w-4 h-4 text-accent" />
      )}
    </button>
  );
}
