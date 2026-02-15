"use client";

import { useSyncExternalStore } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const subscribers = new Set<() => void>();

function subscribe(callback: () => void) {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function emitChange() {
  subscribers.forEach((cb) => cb());
}

export default function DarkModeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    emitChange();
  }

  return (
    <button
      onClick={toggle}
      suppressHydrationWarning
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-2 text-gray transition-colors hover:text-pink-dark"
    >
      {dark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}
