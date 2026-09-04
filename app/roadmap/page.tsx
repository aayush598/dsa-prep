"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  ChevronRight,
  Trophy,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { topics } from "@/data/topics";
import { useProgressStore } from "@/store/useProgressStore";
import { cn, getDifficultyColor } from "@/lib/utils";

const roadmapPhases = [
  {
    title: "Phase 1: Foundations",
    description: "Build a rock-solid understanding of the basics",
    topicSlugs: ["arrays", "strings", "recursion", "linked-lists"],
  },
  {
    title: "Phase 2: Core Structures",
    description: "Master essential data structures used everywhere",
    topicSlugs: ["stacks", "queues", "hash-maps", "trees", "heaps"],
  },
  {
    title: "Phase 3: Algorithms",
    description: "Learn the most important algorithmic paradigms",
    topicSlugs: [
      "searching",
      "sorting",
      "divide-and-conquer",
      "greedy",
      "bit-manipulation",
    ],
  },
  {
    title: "Phase 4: Advanced Topics",
    description: "Tackle advanced concepts for interview mastery",
    topicSlugs: ["graphs", "dynamic-programming", "backtracking", "tries", "union-find"],
  },
];

export default function RoadmapPage() {
  const { getTopicProgress, getTopicCompletionPercentage } = useProgressStore();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Learning Roadmap
            </h1>
            <p className="text-zinc-500 max-w-2xl text-lg">
              A structured path from zero to DSA mastery. Follow this order
              for the best learning experience.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden sm:block" />

            <div className="space-y-12">
              {roadmapPhases.map((phase, phaseIndex) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
                >
                  {/* Phase Header */}
                  <div className="flex items-center gap-4 mb-6 relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/20 z-10 shrink-0">
                      {phaseIndex + 1}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {phase.title}
                      </h2>
                      <p className="text-sm text-zinc-500">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Topics in phase */}
                  <div className="sm:ml-16 space-y-3">
                    {phase.topicSlugs.map((topicSlug, topicIndex) => {
                      const topic = topics.find((t) => t.slug === topicSlug);
                      if (!topic) return null;

                      const progress = getTopicProgress(topic.slug);
                      const percentage = getTopicCompletionPercentage(
                        topic.slug,
                        topic.lessons.length
                      );
                      const isComplete = percentage === 100;

                      return (
                        <motion.div
                          key={topic.slug}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: phaseIndex * 0.1 + topicIndex * 0.05,
                          }}
                        >
                          <Link
                            href={topic.slug === "graphs" ? "/graphs/mastery" : `/topics/${topic.slug}`}
                            className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all group"
                          >
                            <div className="shrink-0">
                              {isComplete ? (
                                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                              ) : (
                                <Circle className="h-5 w-5 text-zinc-600" />
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium text-white group-hover:text-violet-400 transition-colors">
                                  {topic.title}
                                </span>
                                <span
                                  className={cn(
                                    "px-1.5 py-0.5 rounded text-[10px] font-medium border",
                                    getDifficultyColor(topic.difficulty)
                                  )}
                                >
                                  {topic.difficulty}
                                </span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden max-w-[200px]">
                                  <div
                                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all"
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                                <span className="text-xs text-zinc-600">
                                  {progress.completedLessons.length}/
                                  {topic.lessons.length}
                                </span>
                              </div>
                            </div>

                            <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all shrink-0" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Completion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20">
                <Trophy className="h-6 w-6 text-violet-400" />
                <div className="text-left">
                  <div className="text-sm font-semibold text-white">
                    DSA Master
                  </div>
                  <div className="text-xs text-zinc-500">
                    Complete all phases to become interview-ready
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
