"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BookOpen,
  TrendingUp,
  Layers,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Clear Explanations",
    description:
      "Every concept explained in simple language with intuitive analogies. No unnecessary jargon.",
  },
  {
    icon: Code2,
    title: "Clean Code Examples",
    description:
      "Production-ready code in JavaScript. Copy, paste, and understand with line-by-line breakdowns.",
  },
  {
    icon: TrendingUp,
    title: "Complexity Analysis",
    description:
      "Time and space complexity for every algorithm. Understand why one approach beats another.",
  },
  {
    icon: Layers,
    title: "Structured Path",
    description:
      "From basics to advanced — a carefully designed curriculum that builds knowledge progressively.",
  },
];

export function Features() {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for understanding
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Everything you need to truly understand DSA — not just memorize it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                <feature.icon className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
