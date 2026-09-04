"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AlgorithmCardProps {
  name: string;
  when: string;
  time: string;
  space: string;
  color: string;
  keySteps: string[];
  variants?: string[];
  limitation?: string;
}

export function AlgorithmCard({ name, when, time, space, color, keySteps, variants, limitation }: AlgorithmCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border overflow-hidden"
      style={{ borderColor: `${color}20`, background: `${color}03` }}
    >
      <div className="px-5 py-4 border-b" style={{ borderColor: `${color}15`, background: `${color}05` }}>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-base font-bold" style={{ color }}>{name}</h4>
          <div className="flex gap-2">
            <code className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-violet-400">T: {time}</code>
            <code className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-800 text-fuchsia-400">S: {space}</code>
          </div>
        </div>
        <p className="text-xs text-zinc-500">When to use: <span className="text-zinc-300">{when}</span></p>
      </div>
      <div className="px-5 py-4 space-y-3">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Key Steps</span>
          <ol className="mt-1.5 space-y-1">
            {keySteps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border" style={{ color, borderColor: `${color}30`, background: `${color}10` }}>
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        {variants && variants.length > 0 && (
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Variants</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {variants.map((v, i) => (
                <span key={i} className="px-2 py-0.5 rounded-lg text-xs border" style={{ color, borderColor: `${color}20`, background: `${color}08` }}>
                  {v}
                </span>
              ))}
            </div>
          </div>
        )}
        {limitation && (
          <div className="flex items-start gap-2 px-3 py-2 rounded-lg bg-rose-500/5 border border-rose-500/10">
            <span className="text-rose-400 text-xs shrink-0 mt-0.5">⚠</span>
            <span className="text-xs text-rose-300">{limitation}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface PatternCardProps {
  number: number;
  name: string;
  description: string;
  tools: string[];
  color: string;
}

export function PatternCard({ number, name, description, tools, color }: PatternCardProps) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border bg-zinc-950/50 hover:bg-zinc-900/30 transition-all" style={{ borderColor: `${color}15` }}>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0" style={{ color, background: `${color}15` }}>
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <h5 className="text-sm font-semibold text-white mb-0.5">{name}</h5>
        <p className="text-xs text-zinc-500 mb-2">{description}</p>
        <div className="flex flex-wrap gap-1">
          {tools.map((t, i) => (
            <span key={i} className="px-1.5 py-0.5 rounded text-[10px] font-mono border" style={{ color, borderColor: `${color}20`, background: `${color}08` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TopicGridProps {
  topics: { title: string; items: string[]; color: string; icon: string }[];
  columns?: number;
}

export function TopicGrid({ topics, columns = 3 }: TopicGridProps) {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {topics.map((topic, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03 }}
          className="rounded-xl border p-4 transition-all hover:scale-[1.01]"
          style={{ borderColor: `${topic.color}20`, background: `${topic.color}05` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm">{topic.icon}</span>
            <h4 className="text-sm font-semibold" style={{ color: topic.color }}>{topic.title}</h4>
          </div>
          <ul className="space-y-1">
            {topic.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-xs text-zinc-400">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full" style={{ background: topic.color }} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

interface TieredLevelProps {
  tier: string;
  color: string;
  items: { label: string; detail: string }[];
}

export function TieredLevel({ tier, color, items }: TieredLevelProps) {
  return (
    <div className="rounded-xl border p-5" style={{ borderColor: `${color}20`, background: `${color}05` }}>
      <h4 className="text-sm font-bold mb-4" style={{ color }}>{tier}</h4>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: color }} />
            <div>
              <span className="text-sm font-medium text-zinc-200">{item.label}</span>
              <span className="text-sm text-zinc-500"> — {item.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
