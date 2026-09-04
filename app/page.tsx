"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { FeaturedTopics } from "@/components/home/FeaturedTopics";
import { Features } from "@/components/home/Features";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <FeaturedTopics />
        <Features />

        {/* CTA Section */}
        <section className="py-24 relative border-t border-white/5">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to master DSA?
              </h2>
              <p className="text-zinc-500 max-w-xl mx-auto mb-8">
                Start with the roadmap and follow the structured path.
                Every topic, every concept, explained from scratch.
              </p>
              <Link
                href="/roadmap"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 text-lg"
              >
                <Sparkles className="h-5 w-5" />
                Start the Roadmap
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
