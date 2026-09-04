"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PathNode {
  label: string;
  color?: string;
  critical?: boolean;
}

const learningPath: PathNode[] = [
  { label: "Graph Modeling", color: "#8b5cf6", critical: true },
  { label: "Representation", color: "#a78bfa" },
  { label: "BFS", color: "#22d3ee", critical: true },
  { label: "DFS", color: "#06b6d4", critical: true },
  { label: "Grid", color: "#14b8a6" },
  { label: "Connected Components", color: "#10b981", critical: true },
  { label: "Cycle Detection", color: "#34d399" },
  { label: "Bipartite", color: "#fbbf24" },
  { label: "Topological Sort", color: "#f59e0b", critical: true },
  { label: "DSU", color: "#f472b6", critical: true },
  { label: "MST", color: "#ec4899", critical: true },
  { label: "BFS Shortest Path", color: "#60a5fa" },
  { label: "Multi-Source BFS", color: "#3b82f6" },
  { label: "0-1 BFS", color: "#818cf8" },
  { label: "Dijkstra", color: "#a78bfa", critical: true },
  { label: "Dijkstra + State", color: "#c084fc" },
  { label: "Bellman-Ford", color: "#fb923c" },
  { label: "DAG Shortest/Longest", color: "#f97316" },
  { label: "Floyd-Warshall", color: "#ef4444" },
  { label: "SCC", color: "#e879f9", critical: true },
  { label: "Bridges", color: "#f472b6" },
  { label: "Articulation Points", color: "#fb7185" },
  { label: "Low-Link", color: "#f87171" },
  { label: "Eulerian", color: "#4ade80" },
  { label: "Functional Graphs", color: "#22d3ee" },
  { label: "Binary Lifting", color: "#06b6d4" },
  { label: "Bitmask Graph", color: "#8b5cf6" },
  { label: "Graph + DP", color: "#a78bfa" },
  { label: "Advanced DSU", color: "#c084fc" },
  { label: "Flow", color: "#e879f9" },
  { label: "Matching", color: "#f472b6" },
  { label: "Dynamic Graph", color: "#fb923c" },
];

export function LearningPath() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-fuchsia-500/50 to-pink-500/50" />

      <div className="space-y-1">
        {learningPath.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.5) }}
            className="flex items-center gap-3 pl-0 relative"
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center z-10 shrink-0 text-[10px] font-bold border-2",
                node.critical
                  ? "border-current bg-zinc-950 shadow-lg"
                  : "border-zinc-700 bg-zinc-950"
              )}
              style={node.critical ? { color: node.color, boxShadow: `0 0 12px ${node.color}30` } : undefined}
            >
              {i + 1}
            </div>
            <div
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm transition-all",
                node.critical
                  ? "font-semibold border"
                  : "text-zinc-400"
              )}
              style={
                node.critical
                  ? { color: node.color, background: `${node.color}10`, borderColor: `${node.color}20` }
                  : undefined
              }
            >
              {node.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
