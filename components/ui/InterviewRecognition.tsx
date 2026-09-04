"use client";

import { motion } from "framer-motion";

interface RecognitionItem {
  when: string;
  think: string;
  color: string;
  icon: string;
}

const recognitions: RecognitionItem[] = [
  { when: '"Minimum number of moves"', think: "BFS", color: "#22d3ee", icon: "🔄" },
  { when: '"Shortest path, unweighted"', think: "BFS", color: "#22d3ee", icon: "🎯" },
  { when: '"Minimum cost, non-negative weights"', think: "Dijkstra", color: "#a78bfa", icon: "⚡" },
  { when: '"Edges have 0/1 cost"', think: "0-1 BFS", color: "#c084fc", icon: "🔀" },
  { when: '"Negative edges"', think: "Bellman-Ford", color: "#fb923c", icon: "⚠️" },
  { when: '"Prerequisites / dependencies"', think: "Topological Sort", color: "#34d399", icon: "📋" },
  { when: '"Can everything be connected?"', think: "DFS / BFS / DSU", color: "#60a5fa", icon: "🔗" },
  { when: '"Dynamic connectivity"', think: "DSU", color: "#f472b6", icon: "🔄" },
  { when: '"Minimum cost to connect everything"', think: "MST", color: "#fbbf24", icon: "🌳" },
  { when: '"Strong mutual reachability"', think: "SCC", color: "#c084fc", icon: "💎" },
  { when: '"Removing edge disconnects graph"', think: "Bridge", color: "#fb7185", icon: "🌉" },
  { when: '"Removing vertex disconnects graph"', think: "Articulation Point", color: "#f87171", icon: "🎯" },
  { when: '"Use every edge exactly once"', think: "Eulerian Path", color: "#4ade80", icon: "🛤️" },
  { when: '"Visit every vertex"', think: "Hamiltonian Path", color: "#38bdf8", icon: "👑" },
  { when: '"Groups / conflicts / two teams"', think: "Bipartite", color: "#fbbf24", icon: "⚖️" },
  { when: '"Maximum assignments"', think: "Matching / Flow", color: "#e879f9", icon: "🎯" },
];

export function InterviewRecognition() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {recognitions.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.03 }}
          className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-white/10 bg-zinc-950/50 hover:bg-zinc-900/50 transition-all"
        >
          <span className="text-lg shrink-0">{item.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-zinc-500 mb-0.5">{item.when}</div>
            <div className="text-sm font-semibold" style={{ color: item.color }}>
              → {item.think}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
