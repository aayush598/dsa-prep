"use client";

import Link from "next/link";
import { Brain, ExternalLink, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="bg-zinc-900 border border-white/10 rounded-lg p-1.5">
                <Brain className="h-5 w-5 text-violet-400" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                DSA<span className="text-violet-400">Mastery</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-md leading-relaxed">
              The most comprehensive resource to learn Data Structures & Algorithms.
              From beginner to advanced — master every concept with clear
              explanations and interactive examples.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Topics</h3>
            <ul className="space-y-2.5">
              {["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"].map(
                (topic) => (
                  <li key={topic}>
                    <Link
                      href={`/topics/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-zinc-500 hover:text-violet-400 transition-colors"
                    >
                      {topic}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {["All Topics", "Roadmap", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "All Topics"
                        ? "/topics"
                        : item === "Roadmap"
                        ? "/roadmap"
                        : "/"
                    }
                    className="text-sm text-zinc-500 hover:text-violet-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} DSAMastery. Open source learning.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-zinc-600 hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-white transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
