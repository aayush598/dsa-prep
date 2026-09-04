"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  X,
  Brain,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/useUIStore";
import { topics } from "@/data/topics";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { searchOpen, setSearchOpen, searchQuery, setSearchQuery } = useUIStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-zinc-900 border border-white/10 rounded-lg p-1.5">
                  <Brain className="h-5 w-5 text-violet-400" />
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                DSA<span className="text-violet-400">Mastery</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                Home
              </Link>
              <Link
                href="/topics"
                className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                Topics
              </Link>
              <Link
                href="/roadmap"
                className="px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                Roadmap
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {searchOpen && (
          <SearchModal
            query={searchQuery}
            onQueryChange={setSearchQuery}
            onClose={() => {
              setSearchOpen(false);
              setSearchQuery("");
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function SearchModal({
  query,
  onQueryChange,
  onClose,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  onClose: () => void;
}) {
  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(query.toLowerCase()) ||
      topic.description.toLowerCase().includes(query.toLowerCase()) ||
      topic.lessons.some((l) =>
        l.title.toLowerCase().includes(query.toLowerCase())
      )
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="mx-auto mt-24 max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 px-5 border-b border-white/5">
            <Search className="h-5 w-5 text-zinc-400" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search topics, lessons, algorithms..."
              className="flex-1 py-4 bg-transparent text-white placeholder-zinc-500 outline-none text-lg"
            />
            <button
              onClick={onClose}
              className="p-1 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto p-2">
            {query === "" ? (
              <div className="px-4 py-8 text-center text-zinc-500 text-sm">
                Start typing to search across all topics and lessons
              </div>
            ) : filteredTopics.length === 0 ? (
              <div className="px-4 py-8 text-center text-zinc-500 text-sm">
                No results found for &quot;{query}&quot;
              </div>
            ) : (
              filteredTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/topics/${topic.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group"
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold",
                      topic.color
                    )}
                  >
                    {topic.title.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white group-hover:text-violet-400 transition-colors">
                      {topic.title}
                    </div>
                    <div className="text-xs text-zinc-500 truncate">
                      {topic.lessons.length} lessons
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </Link>
              ))
            )}
          </div>

          <div className="px-5 py-3 border-t border-white/5 text-xs text-zinc-600">
            Press <kbd className="px-1.5 py-0.5 bg-white/5 rounded text-zinc-400">ESC</kbd> to close
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
