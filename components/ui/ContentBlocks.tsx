"use client";

import { cn } from "@/lib/utils";

interface PseudocodeProps {
  lines: string[];
  title?: string;
  highlight?: number[];
}

export function Pseudocode({ lines, title, highlight = [] }: PseudocodeProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-zinc-950 overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-white/5 bg-zinc-900/30">
          <span className="text-xs font-mono text-zinc-500">{title}</span>
        </div>
      )}
      <div className="p-4">
        <pre className="text-sm font-mono leading-relaxed">
          {lines.map((line, i) => (
            <div
              key={i}
              className={cn(
                "px-2 py-0.5 -mx-2 rounded transition-colors",
                highlight.includes(i) ? "bg-violet-500/10 text-violet-300" : "text-zinc-400"
              )}
            >
              {line || "\u00A0"}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

interface KeyInsightProps {
  text: string;
  color?: string;
}

export function KeyInsight({ text, color = "#a78bfa" }: KeyInsightProps) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl border"
      style={{ borderColor: `${color}20`, background: `${color}05` }}
    >
      <div className="w-1 h-full min-h-[20px] rounded-full shrink-0" style={{ background: color }} />
      <p className="text-sm leading-relaxed" style={{ color }}>
        {text}
      </p>
    </div>
  );
}

interface ComparisonProps {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}

export function Comparison({ left, right }: ComparisonProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
        <h4 className="text-sm font-semibold text-cyan-400 mb-3">{left.title}</h4>
        <ul className="space-y-1.5">
          {left.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-cyan-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <h4 className="text-sm font-semibold text-amber-400 mb-3">{right.title}</h4>
        <ul className="space-y-1.5">
          {right.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-amber-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
