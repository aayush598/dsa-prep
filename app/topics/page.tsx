"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TopicCard } from "@/components/ui/TopicCard";
import { topics } from "@/data/topics";
import { useProgressStore } from "@/store/useProgressStore";
import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = ["all", "beginner", "intermediate", "advanced"] as const;

export default function TopicsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("all");
  const { getTopicCompletionPercentage } = useProgressStore();

  const filteredTopics =
    activeFilter === "all"
      ? topics
      : topics.filter((t) => t.difficulty === activeFilter);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              All Topics
            </h1>
            <p className="text-zinc-500 max-w-2xl text-lg">
              Explore every data structure and algorithm. Filter by difficulty
              and track your progress as you learn.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-10"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize",
                  activeFilter === filter
                    ? "bg-white/10 text-white border border-white/10"
                    : "text-zinc-500 hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTopics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                index={index}
                completionPercentage={getTopicCompletionPercentage(
                  topic.slug,
                  topic.lessons.length
                )}
              />
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              No topics found for this filter.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
