"use client";

import { useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";

export function KeyboardShortcuts() {
  const { toggleSearch, searchOpen, setSearchOpen } = useUIStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD/CTRL + K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleSearch();
      }
      // ESC to close search
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSearch, searchOpen, setSearchOpen]);

  return null;
}
