"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  subtitle?: string;
  level?: string;
  color?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: string;
}

export function CollapsibleSection({
  title,
  subtitle,
  level,
  color = "#8b5cf6",
  children,
  defaultOpen = false,
  badge,
}: SectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-white/10"
      style={{ borderColor: isOpen ? `${color}20` : undefined }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {level && (
              <span
                className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                style={{ color, background: `${color}15` }}
              >
                {level}
              </span>
            )}
            <h3 className="text-base font-semibold text-white">{title}</h3>
            {badge && (
              <span className="px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-400 text-[10px] font-medium border border-violet-500/20">
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-sm text-zinc-500">{subtitle}</p>
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ChecklistProps {
  items: string[];
  columns?: number;
}

export function Checklist({ items, columns = 2 }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div
      className="grid gap-1.5"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => toggle(i)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all hover:bg-white/5"
        >
          {checked.has(i) ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="h-4 w-4 text-zinc-600 shrink-0" />
          )}
          <span
            className={cn(
              "transition-colors",
              checked.has(i) ? "text-zinc-500 line-through" : "text-zinc-300"
            )}
          >
            {item}
          </span>
        </button>
      ))}
    </div>
  );
}

interface ConceptCardProps {
  title: string;
  items: string[];
  color?: string;
  icon?: string;
}

export function ConceptCard({ title, items, color = "#8b5cf6", icon }: ConceptCardProps) {
  return (
    <div
      className="rounded-xl border p-4 transition-all hover:scale-[1.01]"
      style={{ borderColor: `${color}20`, background: `${color}05` }}
    >
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-sm">{icon}</span>}
        <h4 className="text-sm font-semibold" style={{ color }}>
          {title}
        </h4>
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
            <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: color }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
