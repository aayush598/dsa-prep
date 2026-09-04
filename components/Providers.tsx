"use client";

import { KeyboardShortcuts } from "@/components/ui/KeyboardShortcuts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <KeyboardShortcuts />
      {children}
    </>
  );
}
