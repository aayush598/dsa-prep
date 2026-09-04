import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case "beginner":
      return "text-emerald-400 bg-emerald-400/10 border-emerald-400/20";
    case "intermediate":
      return "text-amber-400 bg-amber-400/10 border-amber-400/20";
    case "advanced":
      return "text-rose-400 bg-rose-400/10 border-rose-400/20";
    default:
      return "text-zinc-400 bg-zinc-400/10 border-zinc-400/20";
  }
}

export function getProgressPercentage(
  completed: number,
  total: number
): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}
