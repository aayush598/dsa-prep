"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Circle,
  BookOpen,
  Clock,
  Cpu,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { getTopicBySlug } from "@/data/topics";
import { useProgressStore } from "@/store/useProgressStore";
import { cn, getDifficultyColor } from "@/lib/utils";

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <TopicContent topic={topic} />
      </main>
      <Footer />
    </div>
  );
}

function TopicContent({ topic }: { topic: NonNullable<ReturnType<typeof getTopicBySlug>> }) {
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const { completeLesson, uncompleteLesson, toggleBookmark, getTopicProgress } =
    useProgressStore();

  const activeLesson = topic.lessons[activeLessonIndex];
  const topicProgress = getTopicProgress(topic.slug);
  const completedCount = topicProgress.completedLessons.length;
  const progressPercent = topic.lessons.length
    ? Math.round((completedCount / topic.lessons.length) * 100)
    : 0;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/topics"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          All Topics
        </Link>
      </motion.div>

      {/* Topic Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium border",
                  getDifficultyColor(topic.difficulty)
                )}
              >
                {topic.difficulty}
              </span>
              <span className="text-xs text-zinc-600">
                {topic.lessons.length} lessons
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {topic.title}
            </h1>
            <p className="text-zinc-400 max-w-2xl">{topic.description}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <span className="text-sm text-zinc-500 font-medium">
            {completedCount}/{topic.lessons.length}
          </span>
        </div>
      </motion.div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar: Lesson List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4"
        >
          <div className="sticky top-24">
            <h2 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
              Lessons
            </h2>
            <div className="space-y-1.5">
              {topic.lessons.map((lesson, index) => {
                const isCompleted = topicProgress.completedLessons.includes(
                  lesson.id
                );
                const isActive = index === activeLessonIndex;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLessonIndex(index)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all",
                      isActive
                        ? "bg-white/10 border border-white/10"
                        : "hover:bg-white/5 border border-transparent"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle
                        className={cn(
                          "h-5 w-5 shrink-0",
                          isActive ? "text-violet-400" : "text-zinc-600"
                        )}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div
                        className={cn(
                          "text-sm font-medium truncate",
                          isActive ? "text-white" : "text-zinc-300"
                        )}
                      >
                        {lesson.title}
                      </div>
                      <div className="text-xs text-zinc-600 truncate mt-0.5">
                        {lesson.description}
                      </div>
                    </div>
                    {isActive && (
                      <ChevronRight className="h-4 w-4 text-violet-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLesson.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Lesson Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {activeLesson.title}
                  </h2>
                  <p className="text-zinc-400">{activeLesson.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-4">
                  <button
                    onClick={() =>
                      toggleBookmark(topic.slug, activeLesson.id)
                    }
                    className="p-2 rounded-lg hover:bg-white/5 text-zinc-500 hover:text-white transition-all"
                  >
                    {topicProgress.bookmarkedLessons.includes(
                      activeLesson.id
                    ) ? (
                      <BookmarkCheck className="h-5 w-5 text-violet-400" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Meta info */}
              {(activeLesson.timeComplexity ||
                activeLesson.spaceComplexity) && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {activeLesson.timeComplexity && (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm">
                      <Clock className="h-3.5 w-3.5 text-violet-400" />
                      <span className="text-zinc-400">Time:</span>
                      <span className="text-white font-mono text-xs">
                        {activeLesson.timeComplexity}
                      </span>
                    </div>
                  )}
                  {activeLesson.spaceComplexity && (
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm">
                      <Cpu className="h-3.5 w-3.5 text-fuchsia-400" />
                      <span className="text-zinc-400">Space:</span>
                      <span className="text-white font-mono text-xs">
                        {activeLesson.spaceComplexity}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="prose prose-invert max-w-none mb-8">
                <div className="text-zinc-300 leading-relaxed whitespace-pre-wrap text-sm">
                  {activeLesson.content === "LESSON_CONTENT_PLACEHOLDER"
                    ? "Lesson content will be added soon. Check back for detailed explanations, diagrams, and step-by-step walkthroughs."
                    : activeLesson.content}
                </div>
              </div>

              {/* Key Insights */}
              {activeLesson.keyInsights &&
                activeLesson.keyInsights.length > 0 && (
                  <div className="mb-8 p-5 rounded-2xl bg-violet-500/5 border border-violet-500/10">
                    <h3 className="text-sm font-semibold text-violet-400 mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Key Insights
                    </h3>
                    <ul className="space-y-2">
                      {activeLesson.keyInsights.map((insight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-zinc-300"
                        >
                          <span className="text-violet-500 mt-1 shrink-0">→</span>
                          {insight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Code Example */}
              {activeLesson.codeExample && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                    Code Example
                  </h3>
                  <CodeBlock
                    code={activeLesson.codeExample}
                    language={activeLesson.language || "javascript"}
                  />
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <button
                  onClick={() =>
                    setActiveLessonIndex((i) => Math.max(0, i - 1))
                  }
                  disabled={activeLessonIndex === 0}
                  className="text-sm text-zinc-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous Lesson
                </button>

                <button
                  onClick={() =>
                    completeLesson(topic.slug, activeLesson.id)
                  }
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                    topicProgress.completedLessons.includes(activeLesson.id)
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  )}
                >
                  {topicProgress.completedLessons.includes(activeLesson.id)
                    ? "✓ Completed"
                    : "Mark as Complete"}
                </button>

                <button
                  onClick={() =>
                    setActiveLessonIndex((i) =>
                      Math.min(topic.lessons.length - 1, i + 1)
                    )
                  }
                  disabled={activeLessonIndex === topic.lessons.length - 1}
                  className="text-sm text-zinc-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next Lesson →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
