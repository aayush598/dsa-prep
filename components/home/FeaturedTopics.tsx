"use client";

import { motion } from "framer-motion";
import { topics } from "@/data/topics";
import { TopicCard } from "@/components/ui/TopicCard";
import { useProgressStore } from "@/store/useProgressStore";

export function FeaturedTopics() {
  const { getTopicCompletionPercentage } = useProgressStore();

  const featuredTopics = topics.slice(0, 6);

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start with the fundamentals
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Begin your journey with core data structures and algorithms.
            Each topic builds on the previous one for a structured learning path.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTopics.map((topic, index) => (
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
      </div>
    </section>
  );
}
