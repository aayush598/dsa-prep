"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Constraint {
  v: string;
  approaches: string[];
  color: string;
}

const constraints: Constraint[] = [
  { v: "V ≤ 10", approaches: ["Brute force", "Subsets", "Permutations", "Bitmask DP"], color: "#4ade80" },
  { v: "V ≤ 100", approaches: ["Floyd-Warshall O(V³)", "DP on graph"], color: "#fbbf24" },
  { v: "V ≈ 10⁵, E ≈ 10⁵", approaches: ["BFS / DFS", "Dijkstra", "DSU", "Topological Sort", "O(V + E) algorithms"], color: "#60a5fa" },
  { v: "V ≈ 10⁵", approaches: ["Avoid O(V²) and O(V³)", "Unless structure allows"], color: "#f87171" },
];

export function ConstraintGuide() {
  return (
    <div className="space-y-3">
      {constraints.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="rounded-xl border border-white/5 bg-zinc-950 overflow-hidden"
        >
          <div className="flex items-stretch">
            <div
              className="w-32 shrink-0 flex items-center justify-center font-mono text-sm font-bold"
              style={{ background: `${c.color}10`, color: c.color, borderRight: `1px solid ${c.color}20` }}
            >
              {c.v}
            </div>
            <div className="flex-1 p-3">
              <div className="flex flex-wrap gap-1.5">
                {c.approaches.map((a, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 rounded-lg text-xs font-medium border"
                    style={{ color: c.color, borderColor: `${c.color}20`, background: `${c.color}08` }}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
