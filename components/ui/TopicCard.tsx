"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Type,
  Link as LinkIcon,
  Layers,
  AlignJustify,
  Hash,
  GitBranch,
  Mountain,
  Network,
  ArrowUpDown,
  Search,
  Brain,
  Zap,
  RotateCcw,
  Binary,
  TreeDeciduous,
  Merge,
  Repeat,
  Split,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { cn, getDifficultyColor } from "@/lib/utils";
import type { Topic } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  Type,
  Link: LinkIcon,
  Layers,
  AlignJustify,
  Hash,
  GitBranch,
  Mountain,
  Network,
  ArrowUpDown,
  Search,
  Brain,
  Zap,
  RotateCcw,
  Binary,
  TreeDeciduous,
  Merge,
  Repeat,
  Split,
};

interface TopicCardProps {
  topic: Topic;
  index: number;
  completionPercentage?: number;
}

export function TopicCard({ topic, index, completionPercentage = 0 }: TopicCardProps) {
  const Icon = iconMap[topic.icon] || Brain;

  const href = topic.slug === "graphs" ? "/graphs/mastery" : `/topics/${topic.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={href} className="block group">
        <div className="relative rounded-2xl border border-white/5 bg-zinc-900/50 p-6 hover:bg-zinc-900/80 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-violet-500/5 overflow-hidden h-full">
          {/* Gradient glow on hover */}
          <div
            className={cn(
              "absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl rounded-full",
              topic.color
            )}
          />

          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg",
                  topic.color
                )}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium border",
                  getDifficultyColor(topic.difficulty)
                )}
              >
                {topic.difficulty}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
              {topic.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">
              {topic.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <BookOpen className="h-3.5 w-3.5" />
                <span>{topic.lessons.length} lessons</span>
                <span className="text-zinc-700">·</span>
                <span>{topic.totalProblems} problems</span>
              </div>
              <ChevronRight className="h-4 w-4 text-zinc-700 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
            </div>

            {completionPercentage > 0 && (
              <div className="mt-4">
                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${completionPercentage}%` }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
