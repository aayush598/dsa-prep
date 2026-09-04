"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Network } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CollapsibleSection, Checklist, ConceptCard } from "@/components/ui/CollapsibleSection";
import { ComplexityTable } from "@/components/ui/ComplexityTable";
import { InterviewRecognition } from "@/components/ui/InterviewRecognition";
import { ConstraintGuide } from "@/components/ui/ConstraintGuide";
import { LearningPath } from "@/components/ui/LearningPath";
import { GraphDiagram, GraphNode, GraphEdge, GraphSpotlight } from "@/components/ui/GraphDiagram";
import { DecisionTree } from "@/components/ui/DecisionTree";
import { KeyInsight, Comparison, Pseudocode } from "@/components/ui/ContentBlocks";
import { AlgorithmCard, PatternCard, TopicGrid, TieredLevel } from "@/components/ui/GraphComponents";

export default function GraphMasteryPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/topics" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              All Topics
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <Network className="h-6 w-6 text-white" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium border border-rose-400/20 text-rose-400 bg-rose-400/10">advanced</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Graph <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Mastery</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
              The complete graph curriculum — from mental models to expert algorithms. 87 levels covering every graph concept for interviews and beyond.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-zinc-500">
              <span>87 Levels</span><span>·</span><span>32+ Algorithms</span><span>·</span><span>Visual Examples</span><span>·</span><span>No Code — Pure Concepts</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12">
            <GraphDiagram width={400} height={220} className="max-w-lg">
              <GraphEdge x1={100} y1={60} x2={200} y2={60} color="#6366f1" />
              <GraphEdge x1={200} y1={60} x2={300} y2={60} color="#6366f1" />
              <GraphEdge x1={100} y1={60} x2={150} y2={160} color="#6366f1" />
              <GraphEdge x1={200} y1={60} x2={250} y2={160} color="#6366f1" />
              <GraphEdge x1={300} y1={60} x2={250} y2={160} color="#6366f1" />
              <GraphEdge x1={150} y1={160} x2={250} y2={160} color="#6366f1" />
              <GraphNode label="A" x={100} y={60} color="#6366f1" active />
              <GraphNode label="B" x={200} y={60} color="#8b5cf6" active />
              <GraphNode label="C" x={300} y={60} color="#a855f7" active />
              <GraphNode label="D" x={150} y={160} color="#c084fc" active />
              <GraphNode label="E" x={250} y={160} color="#d946ef" active />
            </GraphDiagram>
          </motion.div>

          <div className="space-y-4">

            {/* ═══════════════════════════════════════════ LEVEL 0 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 0.1 — Fundamental Terminology" subtitle="Every graph term you must know — with visual examples and precise definitions" level="Level 0" color="#8b5cf6" defaultOpen badge="Foundation">
              <div className="space-y-8">

                {/* ═══════════════════════════════════════════════════════════════════════════════════════════ */}
                {/* GROUP 1: Vertices, Edges, Adjacency — sequential one-by-one highlighting per term   */}
                {/* ═══════════════════════════════════════════════════════════════════════════════════════════ */}
                <div className="space-y-10">

                  {/* ─── VERTEX / NODE ─── */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-violet-400" />
                        Vertices, Edges & Adjacency
                      </h4>
                      <span className="text-[11px] text-zinc-600">highlights each vertex in turn</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <GraphDiagram width={340} height={160}>
                        <GraphEdge x1={80} y1={60} x2={170} y2={60} color="#27272a" />
                        <GraphEdge x1={170} y1={60} x2={260} y2={60} color="#27272a" />
                        <GraphEdge x1={80} y1={60} x2={125} y2={130} color="#27272a" />
                        <GraphSpotlight count={4}>
                          <GraphNode label="★" x={80} y={60} color="#6366f1" spot={0} />
                          <GraphNode label="" x={170} y={60} color="#8b5cf6" spot={1} />
                          <GraphNode label="" x={260} y={60} color="#a855f7" spot={2} />
                          <GraphNode label="" x={125} y={130} color="#c084fc" spot={3} />
                        </GraphSpotlight>
                        <text x={80} y={108} textAnchor="middle" className="fill-violet-400 text-[13px] font-bold">every circle is a vertex</text>
                      </GraphDiagram>
                      <ConceptCard title="Vertex / Node" icon="⚫" color="#6366f1" items={[
                        "A fundamental unit of a graph — a point in the network",
                        "Represents an entity: city, person, webpage, state, cell, word",
                        "Also called: node, point, element",
                        "Set of all vertices is denoted V",
                        "A graph G = (V, E) where V = vertex set, E = edge set",
                      ]} />
                    </div>
                  </div>

                  {/* ─── EDGE ─── */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <GraphDiagram width={340} height={160}>
                        <GraphSpotlight count={4}>
                          <GraphEdge x1={80} y1={60} x2={170} y2={60} color="#8b5cf6" spot={0} />
                          <GraphEdge x1={170} y1={60} x2={260} y2={60} color="#a78bfa" spot={1} />
                          <GraphEdge x1={80} y1={60} x2={125} y2={130} color="#c084fc" spot={2} />
                          <GraphEdge x1={125} y1={130} x2={170} y2={60} color="#8b5cf6" spot={3} />
                          <GraphNode label="" x={80} y={60} color="#3f3f46" />
                          <GraphNode label="" x={170} y={60} color="#3f3f46" />
                          <GraphNode label="" x={260} y={60} color="#3f3f46" />
                          <GraphNode label="" x={125} y={130} color="#3f3f46" />
                        </GraphSpotlight>
                        <text x={130} y={40} textAnchor="middle" className="fill-violet-400 text-[12px] font-bold">each line is an edge</text>
                        <text x={130} y={150} textAnchor="middle" className="fill-zinc-500 text-[11px]">edges connect two vertices</text>
                      </GraphDiagram>
                      <ConceptCard title="Edge" icon="🔗" color="#8b5cf6" items={[
                        "A connection between two vertices — a pair (u, v)",
                        "Represents a relationship: road, friendship, link, transition",
                        "Also called: link, arc (directed), branch",
                        "Set of all edges is denoted E",
                        "Undirected: {u, v}  ·  Directed: (u, v) or u→v",
                        "An edge connects exactly 2 vertices (its endpoints)",
                      ]} />
                    </div>
                  </div>

                  {/* ─── ENDPOINT ─── */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <GraphDiagram width={340} height={150}>
                        <GraphEdge x1={80} y1={70} x2={260} y2={70} color="#a855f7" highlight />
                        <GraphNode label="u" x={80} y={70} color="#a855f7" active animate="pulse" />
                        <GraphNode label="v" x={260} y={70} color="#a855f7" active animate="pulse" />
                        <line x1={80} y1={32} x2={80} y2={18} stroke="#a855f7" strokeWidth={1.5} opacity={0.6} />
                        <text x={80} y={14} textAnchor="middle" className="fill-violet-400 text-[11px] font-bold">endpoint</text>
                        <line x1={260} y1={32} x2={260} y2={18} stroke="#a855f7" strokeWidth={1.5} opacity={0.6} />
                        <text x={260} y={14} textAnchor="middle" className="fill-violet-400 text-[11px] font-bold">endpoint</text>
                        <text x={170} y={110} textAnchor="middle" className="fill-zinc-500 text-[10px]">edge (u, v)</text>
                      </GraphDiagram>
                      <ConceptCard title="Endpoint" icon="📍" color="#a855f7" items={[
                        "A vertex at either end of an edge",
                        "Edge (u, v) has endpoints u and v",
                        "Each edge has exactly 2 endpoints",
                        "Self-loop: both endpoints are the same vertex",
                        "Endpoint is a relationship between a vertex and an edge",
                      ]} />
                    </div>
                  </div>

                  {/* ─── ADJACENT VERTICES ─── */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <GraphDiagram width={340} height={150}>
                        <GraphSpotlight count={2} stepMs={1200}>
                          <GraphNode label="u" x={100} y={70} color="#c084fc" spot={0} />
                          <GraphNode label="v" x={240} y={70} color="#c084fc" spot={1} />
                          <GraphEdge x1={100} y1={70} x2={240} y2={70} color="#c084fc" highlight directed />
                        </GraphSpotlight>
                        <text x={170} y={115} textAnchor="middle" className="fill-fuchsia-400 text-[12px] font-bold">connected by an edge = adjacent</text>
                      </GraphDiagram>
                      <ConceptCard title="Adjacent Vertices" icon="🤝" color="#c084fc" items={[
                        "Two vertices are adjacent if connected by an edge",
                        "u and v are adjacent ⟺ {u,v} ∈ E (undirected)",
                        "In directed graph: u→v means u is adjacent to v",
                        "v is NOT necessarily adjacent to u (if directed)",
                        "Adjacent = neighbors. Adjacency is the key structural property of graphs.",
                      ]} />
                    </div>
                  </div>

                  {/* ─── INCIDENT EDGE ─── */}
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      <GraphDiagram width={340} height={180}>
                        <GraphEdge x1={170} y1={90} x2={280} y2={90} color="#27272a" />
                        <GraphSpotlight count={3} stepMs={1000}>
                          <GraphEdge x1={60} y1={90} x2={170} y2={90} color="#d946ef" spot={0} />
                          <GraphEdge x1={170} y1={90} x2={280} y2={90} color="#d946ef" spot={1} />
                          <GraphEdge x1={170} y1={90} x2={110} y2={170} color="#d946ef" spot={2} />
                        </GraphSpotlight>
                        <GraphNode label="" x={60} y={90} color="#3f3f46" />
                        <GraphNode label="" x={280} y={90} color="#3f3f46" />
                        <GraphNode label="" x={110} y={170} color="#3f3f46" />
                        <GraphNode label="v" x={170} y={90} color="#d946ef" active animate="float" />
                        <text x={170} y={40} textAnchor="middle" className="fill-fuchsia-400 text-[13px] font-bold">v — 3 edges touch it</text>
                        <text x={170} y={55} textAnchor="middle" className="fill-zinc-500 text-[10px]">each edge is incident to v</text>
                        <line x1={60} y1={105} x2={60} y2={118} stroke="#d946ef" strokeWidth={1} opacity={0.4} />
                        <text x={60} y={130} textAnchor="middle" className="fill-zinc-600 text-[9px]">incident</text>
                        <line x1={280} y1={105} x2={280} y2={118} stroke="#d946ef" strokeWidth={1} opacity={0.4} />
                        <text x={280} y={130} textAnchor="middle" className="fill-zinc-600 text-[9px]">incident</text>
                        <line x1={90} y1={145} x2={110} y2={160} stroke="#d946ef" strokeWidth={1} opacity={0.4} />
                        <text x={82} y={155} textAnchor="middle" className="fill-zinc-600 text-[9px]">incident</text>
                      </GraphDiagram>
                      <ConceptCard title="Incident Edge" icon="🎯" color="#d946ef" items={[
                        "An edge is incident to a vertex if the vertex is one of its endpoints",
                        "Edge e₁ = (u,v) is incident to both u and v",
                        "Degree of v = number of edges incident to v",
                        "Every edge is incident to exactly 2 vertices",
                        "Incidence is the reverse perspective: from vertex to edge",
                      ]} />
                    </div>
                  </div>
                </div>

                {/* ─────────────────────── GROUP 2: Degree ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Degree (Undirected & Directed)
                  </h4>
                  <GraphDiagram width={420} height={190} className="mb-4">
                    <GraphEdge x1={70} y1={50} x2={210} y2={50} color="#22d3ee" />
                    <GraphEdge x1={70} y1={50} x2={140} y2={140} color="#22d3ee" />
                    <GraphEdge x1={70} y1={50} x2={350} y2={50} color="#22d3ee" />
                    <GraphEdge x1={210} y1={50} x2={140} y2={140} color="#22d3ee" />
                    <GraphEdge x1={70} y1={50} x2={70} y2={50} color="#22d3ee" />
                    <GraphNode label="v" x={70} y={50} color="#22d3ee" active />
                    <GraphNode label="w" x={210} y={50} color="#06b6d4" active />
                    <GraphNode label="x" x={140} y={140} color="#0891b2" active />
                    <GraphNode label="y" x={350} y={50} color="#0e7490" active />
                    <text x={70} y={25} textAnchor="middle" className="fill-cyan-400 text-[10px] font-mono">deg(v) = 4</text>
                    <text x={210} y={25} textAnchor="middle" className="fill-cyan-300 text-[10px] font-mono">deg(w) = 3</text>
                    <text x={140} y={175} textAnchor="middle" className="fill-cyan-300 text-[10px] font-mono">deg(x) = 2</text>
                  </GraphDiagram>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <ConceptCard title="Degree (Undirected)" icon="🔢" color="#22d3ee" items={[
                      "Number of edges incident to a vertex",
                      "Self-loops count as 2 toward degree",
                      "deg(v) = |{ e ∈ E : v is endpoint of e }|",
                      "Handshaking lemma: Σ deg(v) = 2|E|",
                      "Max degree: V − 1 (in simple graph)",
                      "Min degree: 0 (isolated vertex)",
                    ]} />
                    <ConceptCard title="In-Degree (Directed)" icon="⬇️" color="#06b6d4" items={[
                      "Number of incoming edges to a vertex",
                      "deg⁻(v) = |{ (u,v) ∈ E : u→v }|",
                      "In-degree 0 = source node (no predecessors)",
                      "Σ deg⁻(v) = |E| for all vertices",
                      "Topological sort starts with in-degree 0",
                    ]} />
                    <ConceptCard title="Out-Degree (Directed)" icon="⬆️" color="#0891b2" items={[
                      "Number of outgoing edges from a vertex",
                      "deg⁺(v) = |{ (v,u) ∈ E : v→u }|",
                      "Out-degree 0 = sink node (no successors)",
                      "Σ deg⁺(v) = |E| for all vertices",
                      "In directed: deg⁻(v) + deg⁺(v) = total degree",
                    ]} />
                  </div>
                  <KeyInsight text="Handshaking lemma: the sum of ALL vertex degrees equals 2|E|. This means an odd-degree vertex must exist in pairs. For directed graphs: sum of in-degrees = sum of out-degrees = |E|." color="#22d3ee" />
                </div>

                {/* ─────────────────────── GROUP 3: Paths & Walks ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Walks, Trails & Paths
                  </h4>
                  <GraphDiagram width={480} height={200} className="mb-4">
                    <GraphEdge x1={50} y1={80} x2={130} y2={80} color="#4ade80" highlight />
                    <GraphEdge x1={130} y1={80} x2={210} y2={80} color="#4ade80" highlight />
                    <GraphEdge x1={210} y1={80} x2={290} y2={80} color="#22c55e" highlight />
                    <GraphEdge x1={290} y1={80} x2={370} y2={80} color="#16a34a" highlight />
                    <GraphEdge x1={370} y1={80} x2={430} y2={80} color="#15803d" highlight />
                    <GraphEdge x1={50} y1={80} x2={210} y2={160} color="#3f3f46" dashed />
                    <GraphEdge x1={210} y1={160} x2={370} y2={160} color="#3f3f46" dashed />
                    <GraphEdge x1={370} y1={160} x2={210} y2={80} color="#f97316" dashed />
                    <GraphNode label="A" x={50} y={80} color="#4ade80" active />
                    <GraphNode label="B" x={130} y={80} color="#22c55e" active />
                    <GraphNode label="C" x={210} y={80} color="#16a34a" active />
                    <GraphNode label="D" x={290} y={80} color="#15803d" active />
                    <GraphNode label="E" x={370} y={80} color="#14532d" active />
                    <GraphNode label="F" x={430} y={80} color="#065f46" active />
                    <GraphNode label="G" x={210} y={160} color="#3f3f46" />
                    <text x={210} y={30} textAnchor="middle" className="fill-emerald-400 text-[9px] font-mono">Walk: A→B→C→D→E→F</text>
                    <text x={210} y={195} textAnchor="middle" className="fill-orange-400 text-[9px] font-mono">Trail: A→G→E→C (no repeated edges)</text>
                  </GraphDiagram>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <ConceptCard title="Walk" icon="🚶" color="#4ade80" items={[
                      "Any sequence of vertices and edges: v₀, e₁, v₁, e₂, ... vₖ",
                      "Vertices and edges may repeat",
                      "No restrictions at all",
                      "Length = number of edges traversed",
                      "A→B→C→A→B is a valid walk",
                    ]} />
                    <ConceptCard title="Trail" icon="🛤️" color="#22c55e" items={[
                      "A walk with NO repeated edges",
                      "Vertices may repeat (just not edges)",
                      "Strictly more restrictive than a walk",
                      "A→B→C→A→D is a valid trail (edges all distinct)",
                    ]} />
                    <ConceptCard title="Path" icon="🛤️" color="#16a34a" items={[
                      "A walk with NO repeated vertices (except possibly start=end)",
                      "Also called: simple path in some texts",
                      "Strictly more restrictive than a trail",
                      "A→B→C→D is a valid path (all vertices distinct)",
                      "Most common interpretation in interview context",
                    ]} />
                    <ConceptCard title="Simple Path" icon="✨" color="#15803d" items={[
                      "A path where ALL vertices are distinct (including start ≠ end)",
                      "Sometimes 'path' means simple path by default",
                      "The most restrictive non-cyclic walk type",
                      "A→B→C→D: no vertex appears twice",
                    ]} />
                  </div>
                  <div className="rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">⚠️ Terminology Confusion — This Matters in Interviews</h4>
                    <p className="text-sm text-zinc-400 mb-2">Different textbooks define "path" differently:</p>
                    <ul className="space-y-1.5 text-sm text-zinc-500">
                      <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-zinc-300">Some texts</strong>: "path" = no repeated vertices (what we call "simple path")</span></li>
                      <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-zinc-300">Other texts</strong>: "path" = no repeated edges (what we call "trail")</span></li>
                      <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-zinc-300">Interview default</strong>: "shortest path" means minimum number of edges/weight with distinct vertices</span></li>
                      <li className="flex items-start gap-2"><span className="text-emerald-400 mt-0.5">•</span><span><strong className="text-zinc-300">Best practice</strong>: always clarify which definition you are using if ambiguous</span></li>
                    </ul>
                  </div>
                </div>

                {/* ─────────────────────── GROUP 4: Cycles ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Cycles & Simple Cycles
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <GraphDiagram width={240} height={200}>
                      <GraphEdge x1={120} y1={40} x2={200} y2={100} color="#fbbf24" highlight />
                      <GraphEdge x1={200} y1={100} x2={160} y2={170} color="#fbbf24" highlight />
                      <GraphEdge x1={160} y1={170} x2={80} y2={170} color="#fbbf24" highlight />
                      <GraphEdge x1={80} y1={170} x2={40} y2={100} color="#fbbf24" highlight />
                      <GraphEdge x1={40} y1={100} x2={120} y2={40} color="#fbbf24" highlight />
                      <GraphNode label="1" x={120} y={40} color="#fbbf24" active />
                      <GraphNode label="2" x={200} y={100} color="#f59e0b" active />
                      <GraphNode label="3" x={160} y={170} color="#d97706" active />
                      <GraphNode label="4" x={80} y={170} color="#b45309" active />
                      <GraphNode label="5" x={40} y={100} color="#92400e" active />
                      <text x={120} y={195} textAnchor="middle" className="fill-amber-400 text-[9px] font-mono">Simple cycle: 1→2→3→4→5→1</text>
                    </GraphDiagram>
                    <GraphDiagram width={240} height={200}>
                      <GraphEdge x1={120} y1={50} x2={200} y2={50} color="#fb923c" highlight />
                      <GraphEdge x1={200} y1={50} x2={200} y2={130} color="#fb923c" highlight />
                      <GraphEdge x1={200} y1={130} x2={120} y2={130} color="#fb923c" highlight />
                      <GraphEdge x1={120} y1={130} x2={120} y2={50} color="#fb923c" highlight />
                      <GraphEdge x1={120} y1={130} x2={60} y2={170} color="#ea580c" highlight />
                      <GraphEdge x1={60} y1={170} x2={120} y2={50} color="#ea580c" highlight dashed />
                      <GraphNode label="A" x={120} y={50} color="#fb923c" active />
                      <GraphNode label="B" x={200} y={50} color="#f97316" active />
                      <GraphNode label="C" x={200} y={130} color="#ea580c" active />
                      <GraphNode label="D" x={120} y={130} color="#c2410c" active />
                      <GraphNode label="E" x={60} y={170} color="#9a3412" active />
                      <text x={140} y={195} textAnchor="middle" className="fill-orange-400 text-[9px] font-mono">Cycle (not simple): A→B→C→D→E→A</text>
                    </GraphDiagram>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <ConceptCard title="Cycle" icon="🔄" color="#fbbf24" items={[
                      "A walk that starts and ends at the same vertex",
                      "Vertices and edges may repeat (except start/end)",
                      "A→B→C→D→A is a cycle of length 4",
                      "Also called: closed walk in some texts",
                      "A cycle of length 1 = self-loop",
                      "A cycle of length 2 = pair of parallel edges (multigraph)",
                    ]} />
                    <ConceptCard title="Simple Cycle" icon="⭕" color="#f59e0b" items={[
                      "A cycle with NO repeated vertices (except start=end)",
                      "Most common meaning of 'cycle' in practice",
                      "Minimum cycle length: 3 (in simple graphs)",
                      "A→B→C→D→A: every vertex appears exactly once (except A)",
                      "Also called: circuit, elementary cycle, chordless cycle",
                      "Cycle detection in algorithms = detecting simple cycles",
                    ]} />
                  </div>
                  <KeyInsight text="A cycle exists in a graph if and only if DFS encounters a back edge (an edge to an already-visiting vertex). This is the fundamental cycle detection principle." color="#fbbf24" />
                </div>

                {/* ─────────────────────── GROUP 5: Connectivity & Components ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    Connectivity & Components
                  </h4>
                  <GraphDiagram width={480} height={200} className="mb-4">
                    <GraphEdge x1={60} y1={70} x2={140} y2={70} color="#3b82f6" />
                    <GraphEdge x1={140} y1={70} x2={140} y2={150} color="#3b82f6" />
                    <GraphEdge x1={140} y1={150} x2={60} y2={150} color="#3b82f6" />
                    <GraphEdge x1={60} y1={150} x2={60} y2={70} color="#3b82f6" />
                    <GraphEdge x1={140} y1={70} x2={60} y2={150} color="#3b82f6" />
                    <GraphEdge x1={300} y1={70} x2={380} y2={70} color="#60a5fa" />
                    <GraphEdge x1={380} y1={70} x2={340} y2={150} color="#60a5fa" />
                    <rect x={20} y={40} width={150} height={140} rx={12} fill="none" stroke="#3b82f6" strokeWidth={1.5} strokeDasharray="4,4" opacity={0.4} />
                    <rect x={280} y={40} width={120} height={140} rx={12} fill="none" stroke="#60a5fa" strokeWidth={1.5} strokeDasharray="4,4" opacity={0.4} />
                    <GraphNode label="A" x={60} y={70} color="#3b82f6" active />
                    <GraphNode label="B" x={140} y={70} color="#3b82f6" active />
                    <GraphNode label="C" x={140} y={150} color="#3b82f6" active />
                    <GraphNode label="D" x={60} y={150} color="#3b82f6" active />
                    <GraphNode label="E" x={300} y={70} color="#60a5fa" active />
                    <GraphNode label="F" x={380} y={70} color="#60a5fa" active />
                    <GraphNode label="G" x={340} y={150} color="#60a5fa" active />
                    <text x={95} y={25} textAnchor="middle" className="fill-blue-400 text-[10px] font-bold">Component 1</text>
                    <text x={340} y={25} textAnchor="middle" className="fill-blue-300 text-[10px] font-bold">Component 2</text>
                    <text x={240} y={100} textAnchor="middle" className="fill-zinc-600 text-[10px] font-mono">no path</text>
                    <text x={240} y={115} textAnchor="middle" className="fill-zinc-600 text-[10px] font-mono">exists</text>
                  </GraphDiagram>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <ConceptCard title="Connected Graph" icon="✅" color="#3b82f6" items={[
                      "A path exists between EVERY pair of vertices",
                      "Equivalently: the graph has exactly 1 component",
                      "For undirected: check with BFS/DFS from any vertex",
                      "For directed: must be strongly connected (path both ways)",
                      "Connected ⟺ number of components = 1",
                    ]} />
                    <ConceptCard title="Disconnected Graph" icon="❌" color="#60a5fa" items={[
                      "At least one pair of vertices has NO path between them",
                      "Equivalently: the graph has 2+ components",
                      "Isolated vertex: degree 0, its own component",
                      "Disconnected ⟺ at least 2 components",
                    ]} />
                    <ConceptCard title="Component" icon="🏝️" color="#93c5fd" items={[
                      "A maximal connected subgraph",
                      "Maximal: cannot add any more vertices and stay connected",
                      "Every vertex belongs to exactly 1 component",
                      "Number of components = times BFS/DFS restarts",
                      "Two vertices in same component ⟺ path exists",
                      "Strongly connected component (directed): path both ways",
                    ]} />
                  </div>
                </div>

                {/* ─────────────────────── GROUP 6: Subgraphs ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Subgraph, Induced & Spanning
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <GraphDiagram width={240} height={170}>
                      <GraphEdge x1={60} y1={50} x2={120} y2={50} color="#3f3f46" />
                      <GraphEdge x1={120} y1={50} x2={180} y2={50} color="#3f3f46" />
                      <GraphEdge x1={60} y1={50} x2={90} y2={120} color="#3f3f46" />
                      <GraphEdge x1={120} y1={50} x2={150} y2={120} color="#3f3f46" />
                      <GraphEdge x1={60} y1={50} x2={120} y2={50} color="#fb7185" highlight />
                      <GraphEdge x1={120} y1={50} x2={90} y2={120} color="#fb7185" highlight />
                      <GraphNode label="1" x={60} y={50} color="#fb7185" active />
                      <GraphNode label="2" x={120} y={50} color="#fb7185" active />
                      <GraphNode label="3" x={180} y={50} color="#3f3f46" />
                      <GraphNode label="4" x={90} y={120} color="#fb7185" active />
                      <GraphNode label="5" x={150} y={120} color="#3f3f46" />
                      <text x={120} y={165} textAnchor="middle" className="fill-rose-400 text-[9px] font-mono">Subgraph: {`{1,2,4}, {(1,2),(2,4)}`}</text>
                    </GraphDiagram>
                    <GraphDiagram width={240} height={170}>
                      <GraphEdge x1={60} y1={50} x2={120} y2={50} color="#3f3f46" />
                      <GraphEdge x1={120} y1={50} x2={180} y2={50} color="#3f3f46" />
                      <GraphEdge x1={60} y1={50} x2={90} y2={120} color="#3f3f46" />
                      <GraphEdge x1={120} y1={50} x2={150} y2={120} color="#3f3f46" />
                      <GraphEdge x1={60} y1={50} x2={120} y2={50} color="#f472b6" highlight />
                      <GraphEdge x1={120} y1={50} x2={90} y2={120} color="#f472b6" highlight />
                      <GraphEdge x1={60} y1={50} x2={90} y2={120} color="#f472b6" highlight />
                      <GraphNode label="1" x={60} y={50} color="#f472b6" active />
                      <GraphNode label="2" x={120} y={50} color="#f472b6" active />
                      <GraphNode label="3" x={180} y={50} color="#3f3f46" />
                      <GraphNode label="4" x={90} y={120} color="#f472b6" active />
                      <GraphNode label="5" x={150} y={120} color="#3f3f46" />
                      <text x={120} y={165} textAnchor="middle" className="fill-pink-400 text-[9px] font-mono">Induced: ALL edges between {`{1,2,4}`}</text>
                    </GraphDiagram>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <ConceptCard title="Subgraph" icon="📦" color="#fb7185" items={[
                      "A graph formed from a SUBSET of vertices and edges",
                      "H ⊆ G if V(H) ⊆ V(G) and E(H) ⊆ E(G)",
                      "Every edge in H must have both endpoints in V(H)",
                      "Can freely omit vertices and edges",
                    ]} />
                    <ConceptCard title="Induced Subgraph" icon="🔒" color="#f472b6" items={[
                      "A subgraph containing ALL edges between the chosen vertices",
                      "G[S] = induced subgraph on vertex set S",
                      "You choose which vertices to include",
                      "ALL edges between those vertices are automatically included",
                      "Critical concept: 'take the subgraph induced by these nodes'",
                    ]} />
                    <ConceptCard title="Spanning Subgraph" icon="🌐" color="#e879f9" items={[
                      "A subgraph containing ALL vertices, but a SUBSET of edges",
                      "Spanning tree = spanning subgraph that is also a tree",
                      "You choose which edges to include",
                      "ALL vertices are automatically included",
                      "MST is a spanning subgraph with minimum total weight",
                    ]} />
                  </div>
                </div>

                {/* ─────────────────────── GROUP 7: Distance & Metric ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    Reachability, Distance & Graph Metric
                  </h4>
                  <GraphDiagram width={460} height={200} className="mb-4">
                    <GraphEdge x1={60} y1={70} x2={140} y2={70} color="#a855f7" />
                    <GraphEdge x1={140} y1={70} x2={230} y2={70} color="#a855f7" />
                    <GraphEdge x1={230} y1={70} x2={320} y2={70} color="#a855f7" />
                    <GraphEdge x1={320} y1={70} x2={400} y2={70} color="#a855f7" />
                    <GraphEdge x1={140} y1={70} x2={190} y2={150} color="#9333ea" />
                    <GraphEdge x1={190} y1={150} x2={230} y2={70} color="#9333ea" />
                    <GraphNode label="A" x={60} y={70} color="#a855f7" active />
                    <GraphNode label="B" x={140} y={70} color="#a855f7" active />
                    <GraphNode label="C" x={230} y={70} color="#a855f7" active />
                    <GraphNode label="D" x={320} y={70} color="#a855f7" active />
                    <GraphNode label="E" x={400} y={70} color="#a855f7" active />
                    <GraphNode label="F" x={190} y={150} color="#9333ea" active />
                    <text x={100} y={55} textAnchor="middle" className="fill-purple-300 text-[9px] font-mono">1</text>
                    <text x={185} y={55} textAnchor="middle" className="fill-purple-300 text-[9px] font-mono">1</text>
                    <text x={275} y={55} textAnchor="middle" className="fill-purple-300 text-[9px] font-mono">1</text>
                    <text x={360} y={55} textAnchor="middle" className="fill-purple-300 text-[9px] font-mono">1</text>
                    <text x={60} y={105} textAnchor="middle" className="fill-purple-400 text-[9px] font-mono">ecc(A)=4</text>
                    <text x={400} y={105} textAnchor="middle" className="fill-purple-400 text-[9px] font-mono">ecc(E)=4</text>
                    <text x={230} y={105} textAnchor="middle" className="fill-purple-300 text-[9px] font-mono">ecc(C)=2</text>
                    <text x={230} y={190} textAnchor="middle" className="fill-purple-400 text-[9px] font-mono">d(A,E) = 4 (shortest path length)</text>
                  </GraphDiagram>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <ConceptCard title="Reachability" icon="🔍" color="#a855f7" items={[
                      "Vertex v is reachable from u if a path exists from u to v",
                      "Reachability is the most basic graph query",
                      "In undirected: reachability = being in same component",
                      "In directed: reachability is asymmetric (u→v doesn't imply v→u)",
                      "BFS/DFS can compute all reachable vertices from a source",
                    ]} />
                    <ConceptCard title="Distance" icon="📏" color="#9333ea" items={[
                      "The length of the shortest path between two vertices",
                      "d(u,v) = minimum number of edges from u to v",
                      "d(u,v) = ∞ if v is not reachable from u",
                      "d(u,v) = 0 if u = v",
                      "In weighted graph: sum of edge weights on shortest path",
                    ]} />
                    <ConceptCard title="Eccentricity" icon="📐" color="#7c3aed" items={[
                      "The maximum distance from a vertex to any other vertex",
                      "ecc(v) = max_v{ d(v,u) : u ∈ V }",
                      "Measures how 'far' the most distant vertex is",
                      "Eccentricity of center vertex = radius",
                      "Eccentricity of peripheral vertex = diameter",
                    ]} />
                    <ConceptCard title="Diameter" icon="↔️" color="#6d28d9" items={[
                      "The maximum eccentricity over all vertices",
                      "diam(G) = max_v{ ecc(v) } = max_{u,v}{ d(u,v) }",
                      "The 'widest' the graph gets — longest shortest path",
                      "Diameter 1 = complete graph",
                      "Disconnected graph: diameter = ∞",
                    ]} />
                    <ConceptCard title="Radius" icon="🎯" color="#5b21b6" items={[
                      "The minimum eccentricity over all vertices",
                      "rad(G) = min_v{ ecc(v) }",
                      "The 'tightest' the graph gets — best-case worst distance",
                      "rad(G) ≤ diam(G) ≤ 2·rad(G)",
                    ]} />
                    <ConceptCard title="Center" icon="⭐" color="#4c1d95" items={[
                      "The set of all vertices with minimum eccentricity",
                      "center(G) = { v : ecc(v) = rad(G) }",
                      "Always non-empty — at least one vertex is the center",
                      "In a tree: center has 1 or 2 vertices",
                      "Eccentricity = radius defines the center",
                    ]} />
                  </div>
                  <KeyInsight text="Distance metrics satisfy: d(u,u)=0, d(u,v)=d(v,u) (symmetric), d(u,w) ≤ d(u,v)+d(v,w) (triangle inequality). These three properties make graph distance a true metric." color="#a855f7" />
                </div>

                {/* ─────────────────────── GLOSSARY TABLE ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-400" />
                    Complete Glossary — All 26 Terms
                  </h4>
                  <div className="rounded-xl border border-white/5 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="text-left px-4 py-2.5 text-zinc-400 font-medium">Term</th>
                            <th className="text-left px-4 py-2.5 text-zinc-400 font-medium">Definition</th>
                            <th className="text-left px-4 py-2.5 text-zinc-400 font-medium hidden sm:table-cell">Category</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {[
                            ["Vertex / Node", "A fundamental unit of a graph", "Structure"],
                            ["Edge", "A connection between two vertices", "Structure"],
                            ["Endpoint", "A vertex at either end of an edge", "Structure"],
                            ["Adjacent vertices", "Two vertices connected by an edge", "Structure"],
                            ["Incident edge", "An edge connected to a vertex", "Structure"],
                            ["Degree", "Number of edges incident to a vertex", "Degree"],
                            ["In-degree", "Number of incoming edges (directed)", "Degree"],
                            ["Out-degree", "Number of outgoing edges (directed)", "Degree"],
                            ["Neighborhood", "Set of all adjacent vertices of a vertex", "Degree"],
                            ["Walk", "Any sequence of vertices and edges", "Path"],
                            ["Trail", "A walk with no repeated edges", "Path"],
                            ["Path", "A walk with no repeated vertices", "Path"],
                            ["Simple path", "A path where all vertices are distinct (incl. start≠end)", "Path"],
                            ["Cycle", "A walk starting and ending at the same vertex", "Cycle"],
                            ["Simple cycle", "A cycle with no repeated vertices except start=end", "Cycle"],
                            ["Connected graph", "A path exists between every pair of vertices", "Connectivity"],
                            ["Disconnected graph", "At least one pair has no path", "Connectivity"],
                            ["Component", "A maximal connected subgraph", "Connectivity"],
                            ["Subgraph", "A graph formed from a subset of V and E", "Subgraph"],
                            ["Induced subgraph", "Subgraph with ALL edges between chosen vertices", "Subgraph"],
                            ["Spanning subgraph", "Subgraph with ALL vertices, subset of edges", "Subgraph"],
                            ["Reachability", "Whether a path exists from u to v", "Metric"],
                            ["Distance", "Length of shortest path between two vertices", "Metric"],
                            ["Diameter", "Maximum distance between any pair of vertices", "Metric"],
                            ["Radius", "Minimum eccentricity over all vertices", "Metric"],
                            ["Center", "Set of vertices with minimum eccentricity", "Metric"],
                            ["Eccentricity", "Maximum distance from a vertex to any other", "Metric"],
                          ].map(([term, def, cat], i) => (
                            <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                              <td className="px-4 py-2 text-zinc-300 font-medium whitespace-nowrap">{term}</td>
                              <td className="px-4 py-2 text-zinc-500">{def}</td>
                              <td className="px-4 py-2 hidden sm:table-cell">
                                <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">{cat}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* ─────────────────────── KEY DISTINCTIONS ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Critical Distinctions — What Interviews Test
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Comparison left={{
                      title: "Walk vs Trail vs Path",
                      items: ["Walk: can repeat vertices AND edges", "Trail: can repeat vertices, NOT edges", "Path: cannot repeat vertices (or edges)", "Walk ⊃ Trail ⊃ Path (each is stricter)", "In interviews: 'path' almost always means simple path"]
                    }} right={{
                      title: "Cycle vs Simple Cycle",
                      items: ["Cycle: start=end, may repeat vertices", "Simple cycle: only start=end repeats", "In simple graphs: simple cycle minimum length = 3", "Self-loop: cycle of length 1", "Parallel edges: cycle of length 2 (multigraph)"]
                    }} />
                    <Comparison left={{
                      title: "Connected vs Strongly Connected",
                      items: ["Connected (undirected): path between every pair", "Strongly connected (directed): path both ways", "Weakly connected: undirected version is connected", "SCC: maximal strongly connected subgraph", "Condensation: SCCs form a DAG"]
                    }} right={{
                      title: "Subgraph vs Induced vs Spanning",
                      items: ["Subgraph: any subset of V and E", "Induced: choose vertices, ALL edges kept", "Spanning: keep ALL vertices, choose edges", "Spanning tree: spanning + tree (V-1 edges)", "Induced subgraph on S = G[S]"]
                    }} />
                  </div>
                </div>

                {/* ─────────────────────── QUICK REFERENCE ─────────────────────── */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-500" />
                    Quick Reference — Formulas & Properties
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {[
                      { label: "Undirected max edges", formula: "V(V−1)/2", color: "#6366f1" },
                      { label: "Directed max edges", formula: "V(V−1)", color: "#8b5cf6" },
                      { label: "Handshaking lemma", formula: "Σ deg(v) = 2|E|", color: "#a78bfa" },
                      { label: "Directed degree sum", formula: "Σ deg⁻ = Σ deg⁺ = |E|", color: "#c084fc" },
                      { label: "Diameter bound", formula: "rad(G) ≤ diam(G) ≤ 2·rad(G)", color: "#d946ef" },
                      { label: "Triangle inequality", formula: "d(u,w) ≤ d(u,v) + d(v,w)", color: "#e879f9" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl border p-3 transition-all hover:scale-[1.02]" style={{ borderColor: `${item.color}20`, background: `${item.color}05` }}>
                        <p className="text-[10px] uppercase tracking-wider font-medium mb-1" style={{ color: item.color }}>{item.label}</p>
                        <p className="text-sm text-zinc-300 font-mono">{item.formula}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <KeyInsight text="Master these 26 terms and you'll never be confused by graph problem statements again. The distinction between walk/trail/path and the subgraph types are the most commonly tested in interviews." color="#8b5cf6" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 1 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 1 — Graph Representation" subtitle="How to store and work with graphs in code — absolutely fundamental" level="Level 1" color="#6366f1">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Edge List", icon: "📋", color: "#22d3ee", items: ["Array of (u, v) or (u, v, w) tuples", "O(E) space", "Good for Kruskal's MST", "No fast neighbor lookup", "Simple to implement", "Iterate over all edges"] },
                  { title: "Adjacency List", icon: "📚", color: "#34d399", items: ["Map: vertex → list of neighbors", "O(V + E) space", "Most common in interviews", "Fast neighbor traversal", "Supports directed/undirected/weighted", "Easy degree computation"] },
                  { title: "Adjacency Matrix", icon: "🔢", color: "#fbbf24", items: ["2D array: matrix[u][v] = weight", "O(V²) space", "O(1) edge lookup", "Good for dense graphs", "Used by Floyd-Warshall", "Simple symmetry check for undirected"] },
                  { title: "Incidence Matrix", icon: "📊", color: "#fb923c", items: ["V × E matrix", "Rows = vertices, columns = edges", "+1/-1 for directed endpoints", "Rarely used in interviews", "Theoretical importance"] },
                  { title: "Reverse Graph", icon: "🔄", color: "#e879f9", items: ["Flip all edge directions", "Essential for Kosaraju's SCC", "Dependency analysis", "Reverse traversal", "Compute from adjacency list"] },
                  { title: "Implicit Graph", icon: "🔮", color: "#f472b6", items: ["Graph NOT explicitly given", "Grid cells → vertices", "Word transformations → edges", "Game states → vertices", "Lock combinations → states", "Must recognize the graph structure"] },
                ]} columns={3} />
                <KeyInsight text='The biggest skill upgrade: learn to ask "What is my node? What is my edge? What constitutes a valid transition?" — this is the biggest distinction between beginner and advanced graph problem solving.' color="#f472b6" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 2-3 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 2-3 — BFS & DFS Traversal" subtitle="The two fundamental traversal paradigms — master both deeply" level="Levels 2-3" color="#06b6d4" badge="Core">
              <div className="space-y-6">
                <Comparison left={{
                  title: "BFS (Breadth-First Search)",
                  items: ["Uses a Queue (FIFO)", "Explores level by level — all neighbors first", "Finds shortest path in unweighted graphs", "Good for: distance, level, multi-source problems", "Iterative implementation", "Space: O(V) for queue + visited"]
                }} right={{
                  title: "DFS (Depth-First Search)",
                  items: ["Uses a Stack or recursion (LIFO)", "Explores as deep as possible before backtracking", "Natural for: paths, cycles, topological sort", "Good for: backtracking, connected components", "Recursive or iterative with explicit stack", "Space: O(V) for recursion stack + visited"]
                }} />
                <ConceptCard title="BFS Deep Dive" icon="🔍" color="#22d3ee" items={[
                  "Queue-based traversal: enqueue start, mark visited",
                  "Process: dequeue node, enqueue all unvisited neighbors",
                  "Level processing: track levels by counting queue size per round",
                  "Distance tracking: distance[neighbor] = distance[current] + 1",
                  "Parent tracking: parent[neighbor] = current (for path reconstruction)",
                  "Path reconstruction: follow parent pointers from target to start",
                  "Multiple starting nodes: enqueue all sources simultaneously",
                  "Disconnected graph BFS: loop over all vertices, BFS from unvisited ones",
                  "Applications: reachability, connected components, min edges, k-distance nodes, nearest target",
                ]} />
                <ConceptCard title="DFS Deep Dive" icon="🌊" color="#06b6d4" items={[
                  "Recursive: visit node, recurse on all unvisited neighbors",
                  "Iterative: use explicit stack (push start, pop and process)",
                  "Visited tracking: mark on entry to prevent revisiting",
                  "DFS tree: the tree formed by tree edges during DFS",
                  "Entry/exit times: discovery and finish timestamps (for topological sort)",
                  "Parent tracking: parent[neighbor] = current (for cycle detection)",
                  "Backtracking relationship: undo state when returning from recursion",
                  "Applications: reachability, components, path enumeration, cycle detection, flood fill, graph cloning",
                ]} />
                <ConceptCard title="DFS State Model (Critical for Directed Graphs)" icon="🎨" color="#818cf8" items={[
                  "UNVISITED (white): haven't processed this vertex yet",
                  "VISITING (gray): currently in the recursion stack",
                  "FINISHED (black): completely processed all descendants",
                  "A back edge = edge to a VISITING node → cycle exists",
                  "This 3-color model is essential for directed cycle detection",
                  "Also used for: topological sort (reverse finish order), SCC algorithms",
                ]} />
                <KeyInsight text="BFS = closest first. DFS = deepest first. Choose BFS for shortest path in unweighted graphs. Choose DFS for path existence, cycle detection, and topological sort." color="#06b6d4" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 4 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 4 — Connected Components" subtitle="Decomposing graphs into independent pieces" level="Level 4" color="#10b981">
              <div className="space-y-6">
                <ConceptCard title="Connected Components in Undirected Graphs" icon="🏝️" color="#10b981" items={[
                  "Component = maximal connected subgraph",
                  "Count components: BFS/DFS from each unvisited vertex",
                  "Number of components = number of times we start a fresh BFS/DFS",
                  "Largest component: track size during each BFS/DFS",
                  "Component size: count nodes visited in each traversal",
                  "Component labeling: assign component ID to each vertex",
                  "Component membership: which component does vertex v belong to?",
                  "Reachability: two vertices in same component ↔ path exists",
                  "Connected subgraphs: any subset forming a connected graph",
                ]} />
                <ConceptCard title="Grid Connected Components" icon="📐" color="#34d399" items={[
                  "Grid problems = graph problems in disguise",
                  "Each cell = vertex, adjacent cells = edges",
                  "Island counting: BFS/DFS flood fill, count restarts",
                  "Island area: count cells in each component",
                  "Number of islands: classic grid DFS/BFS problem",
                  "Component-based optimization: process components independently",
                ]} />
                <ConceptCard title="Dynamic Connectivity Variants" icon="🔄" color="#14b8a6" items={[
                  "Static connectivity: components don't change",
                  "Connectivity after adding edges: DSU handles this efficiently",
                  "Connectivity after removing edges: harder, may need offline processing",
                  "Offline connectivity: process all queries after all edge removals",
                  "Online connectivity: answer queries as they come",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 5 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 5 — Grid as Graph" subtitle="This deserves its own module — grids are everywhere in interviews" level="Level 5" color="#14b8a6" badge="High Frequency">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Grid Modeling", icon: "📐", color: "#14b8a6", items: ["Cell = vertex", "Adjacent cells = edges", "Boundaries are constraints", "Obstacles = removed vertices"] },
                  { title: "Movement Models", icon: "🧭", color: "#0d9488", items: ["4-directional (up/down/left/right)", "8-directional (including diagonals)", "Knight moves (L-shape)", "Custom movements", "Teleportation, wrap-around grids"] },
                  { title: "Grid Traversal", icon: "🔄", color: "#0f766e", items: ["DFS flood fill", "BFS flood fill", "Multi-source BFS", "Shortest path", "Connected components", "Boundary traversal"] },
                  { title: "Advanced Grid", icon: "🚀", color: "#115e59", items: ["Weighted grid → Dijkstra", "0-1 BFS on grid", "A* conceptual understanding", "Grid + bitmask", "Grid + keys/doors", "Grid + limited obstacles", "Grid + teleporters", "State-expanded grids"] },
                ]} columns={2} />
                <KeyInsight text="Grid problems are among the most common in interviews. Every cell is a vertex, every valid move is an edge. Mastering grid-as-graph unlocks dozens of problems." color="#14b8a6" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 6 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 6 — Cycle Detection" subtitle="Detecting cycles in both undirected and directed graphs" level="Level 6" color="#eab308">
              <div className="space-y-6">
                <Comparison left={{
                  title: "Undirected Graph Cycle Detection",
                  items: ["DFS + parent tracking: if visited neighbor ≠ parent → cycle", "BFS + parent tracking: same idea with queue", "DSU-based: if union(u,v) returns false → cycle (already connected)", "Must handle self-loops and parallel edges", "Simpler than directed case"]
                }} right={{
                  title: "Directed Graph Cycle Detection",
                  items: ["DFS coloring: 3-state (unvisited/visiting/finished)", "If DFS encounters a 'visiting' node → back edge → cycle", "Recursion stack = set of currently 'visiting' nodes", "Kahn's algorithm: if processed count < V → cycle exists", "More subtle than undirected — must track direction"]
                }} />
                <ConceptCard title="Cycle-Related Problem Types" icon="🔄" color="#eab308" items={[
                  "Does a cycle exist? → boolean answer",
                  "Find a cycle → return any cycle path",
                  "Return cycle nodes → the actual vertices in the cycle",
                  "Count cycles conceptually → often NP-hard",
                  "Detect redundant edge → edge whose removal keeps connectivity",
                  "Detect dependency cycle → topological sort fails",
                  "Detect deadlock-style cycles → resource allocation cycles",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 7 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 7 — Bipartite Graphs" subtitle="Two-coloring and the odd-cycle equivalence" level="Level 7" color="#f59e0b">
              <div className="space-y-6">
                <ConceptCard title="Bipartite Fundamentals" icon="⚖️" color="#f59e0b" items={[
                  "Definition: vertices split into two sets, edges only between sets",
                  "Two-coloring: assign one of two colors to each vertex",
                  "BFS coloring: color neighbors with opposite color",
                  "DFS coloring: same idea recursively",
                  "Odd-cycle relationship: graph is bipartite ⟺ no odd cycle",
                  "Bipartite checking: attempt 2-coloring, detect conflicts",
                  "Connected bipartite components: check each component separately",
                  "Disconnected bipartite graphs: ALL components must be bipartite",
                ]} />
                <ConceptCard title="Bipartite Applications" icon="🎯" color="#fbbf24" items={[
                  "Conflict assignment: assign items to two groups without conflicts",
                  "Team division: split people into two teams",
                  "Two-group partitioning: general bipartition problems",
                  "Compatibility problems: two-sided matching preparation",
                  "Matching preparation: leads to maximum matching",
                  "Game theory: some game state analysis",
                ]} />
                <KeyInsight text="Graph is bipartite ⟺ graph contains no odd cycle. This equivalence is one of the most important theorems in graph theory and connects coloring, cycles, and matching." color="#f59e0b" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 8 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 8 — Topological Sorting" subtitle="Ordering vertices in DAGs — extremely important for interviews" level="Level 8" color="#22c55e" badge="High Priority">
              <div className="space-y-6">
                <ConceptCard title="DAG Fundamentals" icon="📊" color="#22c55e" items={[
                  "Directed graph with no cycles",
                  "Dependency graph: A → B means A depends on B (or vice versa)",
                  "Partial ordering: some pairs have order, some don't",
                  "Linear extension: a total ordering consistent with partial order",
                  "Multiple valid topological orders may exist",
                ]} />
                <Comparison left={{
                  title: "Kahn's Algorithm (BFS-based)",
                  items: ["Compute in-degree for all vertices", "Queue all zero in-degree vertices", "Dequeue → add to order → reduce neighbors' in-degrees", "Enqueue any neighbor reaching zero in-degree", "Cycle detection: if processed < V, cycle exists", "Lexicographically smallest: use min-heap instead of queue"]
                }} right={{
                  title: "DFS Topological Sort",
                  items: ["Run standard DFS on all unvisited vertices", "Record finish order (postorder)", "Reverse postorder = valid topological order", "Cycle detection: back edge found during DFS", "Natural recursive structure", "Entry/exit times give ordering information"]
                }} />
                <ConceptCard title="Topological Applications" icon="📋" color="#34d399" items={[
                  "Course scheduling: determine valid course order",
                  "Build systems: compilation dependency order",
                  "Package dependencies: install order for packages",
                  "Task scheduling: parallel task ordering",
                  "Alien Dictionary: derive character ordering from word list",
                  "Job ordering: scheduling with prerequisites",
                ]} />
                <ConceptCard title="Advanced DAG Problems" icon="🚀" color="#10b981" items={[
                  "Longest path in DAG: DP over topological order",
                  "Shortest path in DAG: relaxation along topological order",
                  "Number of paths in DAG: count DP",
                  "Path counting: exact number of paths between nodes",
                  "DAG DP: dynamic programming on DAG structure",
                  "Critical path: longest path determines project duration",
                  "Dependency levels: levels in topological ordering",
                  "Minimum / maximum semesters to complete courses",
                  "Parallel task execution optimization",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 9-12 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 9-12 — Shortest Paths: BFS, Multi-Source, 0-1 BFS" subtitle="Finding shortest paths in different weight scenarios" level="Levels 9-12" color="#3b82f6" badge="Core">
              <div className="space-y-6">
                <AlgorithmCard name="BFS Shortest Path" when="Unweighted or unit-weight graphs" time="O(V+E)" space="O(V)" color="#3b82f6"
                  keySteps={["Enqueue start node, set distance[start] = 0", "Dequeue node, explore all neighbors", "If neighbor unvisited: set distance = dist[current] + 1, enqueue", "Track parent pointers for path reconstruction", "Result: shortest distance to all reachable vertices"]}
                  variants={["Minimum number of edges", "Minimum moves/transformations", "Level traversal", "K-distance nodes", "Nearest target", "Multi-source BFS"]} />
                <AlgorithmCard name="Multi-Source BFS" when="Multiple starting nodes, find nearest source" time="O(V+E)" space="O(V)" color="#60a5fa"
                  keySteps={["Enqueue ALL source nodes simultaneously", "Set distance = 0 for all sources", "Standard BFS from all sources at once", "Distance = minimum distance to nearest source", "Natural model for infection/spread problems"]}
                  variants={["Rotting oranges", "Fire spread", "Distance from nearest special node", "Simultaneous expansion", "Infection models"]} />
                <AlgorithmCard name="0-1 BFS" when="Edges have weight 0 or 1 only" time="O(V+E)" space="O(V)" color="#818cf8"
                  keySteps={["Use deque instead of queue", "If edge weight = 0: push to FRONT of deque", "If edge weight = 1: push to BACK of deque", "Standard BFS processing from deque", "Why ordinary BFS fails: 0-weight edges need priority"]}
                  limitation="Only works with 0/1 weights. For general weights, use Dijkstra." />
                <ConceptCard title="Shortest Path Fundamentals" icon="🎯" color="#2563eb" items={[
                  "Source: starting vertex", "Destination: target vertex",
                  "Single-source shortest path: from one source to all others",
                  "Single-destination: to one destination from all others",
                  "All-pairs: shortest path between every pair",
                  "Distance: length of shortest path",
                  "Parent/predecessor: for path reconstruction",
                  "Relaxation: update distance if shorter path found",
                ]} />
                <KeyInsight text="When all edges have weight 1, BFS gives shortest paths in O(V+E). When edges are 0 or 1, 0-1 BFS with a deque achieves the same. Don't reach for Dijkstra prematurely." color="#3b82f6" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 13-14 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 13-14 — Dijkstra & Variants" subtitle="The most important weighted shortest path algorithm — must master" level="Levels 13-14" color="#a78bfa" badge="Must Master">
              <div className="space-y-6">
                <AlgorithmCard name="Dijkstra's Algorithm" when="Non-negative edge weights, single-source shortest path" time="O((V+E) log V)" space="O(V)" color="#a78bfa"
                  keySteps={["Initialize dist[start] = 0, all others = ∞", "Min-heap priority queue with (distance, vertex)", "Extract minimum: process closest unvisited vertex", "Relax all edges from processed vertex", "If new distance < current: update and insert to heap", "Repeat until heap empty or target reached"]}
                  variants={["Single-target (early stopping)", "Multiple destinations", "Modified state (node, constraint)", "Constrained Dijkstra", "Dijkstra on grids", "Dijkstra on implicit graphs"]}
                  limitation="Does NOT work with negative edge weights. Use Bellman-Ford for negative weights." />
                <ConceptCard title="Dijkstra Variants for Hard Interviews" icon="⚡" color="#c084fc" items={[
                  "(node, stops) — limited hop count",
                  "(node, fuel) — remaining resources",
                  "(node, mask) — visited bitmask",
                  "(node, remaining_k) — remaining operations",
                  "(node, parity) — even/odd state",
                  "(node, direction) — directional constraint",
                  "KEY INSIGHT: Sometimes the 'node' is not just the physical node. The node is (location + state).",
                ]} />
                <KeyInsight text="Dijkstra = greedy + priority queue. Always process the closest unvisited node. The priority queue is what makes it efficient. Stale heap entries are skipped when extracted." color="#a78bfa" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 15-18 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 15-18 — Bellman-Ford, SPFA, DAG Path, Floyd-Warshall" subtitle="Negative weights, all-pairs, and special cases" level="Levels 15-18" color="#f97316">
              <div className="space-y-6">
                <AlgorithmCard name="Bellman-Ford" when="Negative edge weights, single-source shortest path" time="O(VE)" space="O(V)" color="#f97316"
                  keySteps={["Initialize dist[start] = 0, all others = ∞", "Repeat V-1 times: relax ALL edges", "After V-1 rounds: shortest paths found (if no negative cycle)", "Run one more round: if any distance improves → negative cycle", "Parent reconstruction: track which edge improved each distance"]}
                  variants={["Negative cycle detection", "Arbitrage-style modeling", "Constraint systems (difference constraints)"]}
                  limitation="O(VE) is slower than Dijkstra. Use only when negative weights exist." />
                <AlgorithmCard name="SPFA (Shortest Path Faster Algorithm)" when="Queue-based Bellman-Ford optimization" time="O(VE) worst, often faster" space="O(V)" color="#fb923c"
                  keySteps={["Like Bellman-Ford but only relax edges from updated vertices", "Use queue: only enqueue vertex when its distance improves", "Can be fast in practice but O(VE) worst case", "Negative edges and negative cycles still handled"]}
                  limitation="Worst-case is still O(VE). Can be slow on adversarial inputs." />
                <AlgorithmCard name="DAG Shortest Path" when="Graph is a DAG (topological order available)" time="O(V+E)" space="O(V)" color="#ef4444"
                  keySteps={["Compute topological order", "Relax edges in topological order", "Negative weights are allowed in DAGs", "Cycles aren't a problem (DAG has none)", "Fastest shortest path algorithm when applicable"]}
                  variants={["Longest path in DAG", "Number of paths", "Maximum reward path", "Critical path analysis"]} />
                <AlgorithmCard name="Floyd-Warshall" when="All-pairs shortest path, dense graphs" time="O(V³)" space="O(V²)" color="#dc2626"
                  keySteps={["Initialize: dist[i][j] = weight(i,j) or ∞", "For each intermediate vertex k: update all pairs (i,j)", "dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])", "After all k: shortest paths between all pairs", "Negative cycle: check dist[i][i] < 0"]}
                  variants={["Transitive closure", "Detect negative cycles", "When O(V³) is acceptable (V ≤ 400)"]}
                  limitation="O(V³) is too slow for V > ~500." />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 19 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 19 — Shortest Path Reconstruction" subtitle="Don't stop at distance — reconstruct actual paths" level="Level 19" color="#06b6d4">
              <div className="space-y-4">
                <ConceptCard title="Path Reconstruction Techniques" icon="🛤️" color="#06b6d4" items={[
                  "Parent array: parent[v] = predecessor of v on shortest path",
                  "Predecessor graph: edges (parent[v], v) form shortest-path tree",
                  "Reconstruct one path: follow parent from target to source",
                  "Reconstruct all shortest paths: follow all equal-distance predecessors",
                  "Counting shortest paths: DP counting during relaxation",
                  "Shortest-path DAG: DAG of all edges on some shortest path",
                  "Recovering actual sequence of states: for state-space graphs",
                ]} />
                <KeyInsight text="Always store parent/predecessor information during shortest-path algorithms. Reconstructing the actual path is often required, not just the distance." color="#06b6d4" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 20-22 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 20-22 — Minimum Spanning Tree: Kruskal & Prim" subtitle="Connecting all vertices with minimum total weight" level="Levels 20-22" color="#ec4899" badge="High Priority">
              <div className="space-y-6">
                <ConceptCard title="MST Fundamentals" icon="🌳" color="#ec4899" items={[
                  "Spanning tree: subset of edges connecting all V vertices with V-1 edges",
                  "Minimum spanning tree: spanning tree with minimum total edge weight",
                  "Cut property: for any cut, the minimum weight edge crossing the cut is in MST",
                  "Cycle property: for any cycle, the maximum weight edge is NOT in MST",
                  "Uniqueness: MST is unique if all edge weights are distinct",
                  "Equal weights: multiple MSTs possible with equal weights",
                  "Disconnected graphs: minimum spanning forest (MST per component)",
                ]} />
                <AlgorithmCard name="Kruskal's Algorithm" when="Sparse graphs, edge list available" time="O(E log E)" space="O(V)" color="#ec4899"
                  keySteps={["Sort all edges by weight (ascending)", "Initialize DSU with each vertex as its own component", "For each edge (u,v,w) in sorted order:", "If find(u) ≠ find(v): add edge to MST, union(u,v)", "Stop when V-1 edges added (or edges exhausted)"]}
                  variants={["Early stopping when MST complete", "Edge list is natural input format"]}
                  limitation="Dominanted by sorting O(E log E). Less efficient on dense graphs." />
                <AlgorithmCard name="Prim's Algorithm" when="Dense graphs, growing MST from a vertex" time="O(E log V)" space="O(V)" color="#f472b6"
                  keySteps={["Start from any vertex, mark as in MST", "Add all edges from MST vertices to priority queue", "Extract minimum edge crossing the cut", "If other endpoint not in MST: add edge and vertex to MST", "Repeat until V-1 edges added"]}
                  variants={["Dense: O(V²) with adjacency matrix", "Sparse: O(E log V) with binary heap"]}
                  limitation="Must handle disconnected graphs: run on each component." />
                <Comparison left={{ title: "Kruskal", items: ["Edge-centric: process sorted edges", "Uses DSU for connectivity", "Natural for sparse graphs", "O(E log E) — sorting dominates"] }} right={{ title: "Prim", items: ["Vertex-centric: grow from a vertex", "Uses priority queue for frontier", "Natural for dense graphs", "O(E log V) — heap operations"] }} />
                <KeyInsight text="Kruskal = sorted edges + DSU. Prim = grow MST from a vertex using priority queue. They look mechanically similar to Dijkstra but solve a fundamentally different optimization problem (minimum total weight vs minimum distance)." color="#ec4899" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 23-24 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 23-24 — DSU / Union-Find" subtitle="Efficient connectivity queries — deserves its own complete module" level="Levels 23-24" color="#f472b6" badge="High Priority">
              <div className="space-y-6">
                <AlgorithmCard name="Union-Find (DSU)" when="Dynamic connectivity queries, cycle detection, component tracking" time="O(α(n)) amortized" space="O(V)" color="#f472b6"
                  keySteps={["Initialize: parent[i] = i (each node is its own component)", "Find(x): follow parent pointers to root", "Path compression: during find, point all nodes directly to root", "Union(x,y): merge components containing x and y", "Union by rank/size: attach smaller tree to larger root", "Component count: decrement on successful union"]}
                  variants={["Path compression", "Union by rank", "Union by size"]}
                  limitation="α(n) = inverse Ackermann function, practically ≤ 5, so effectively O(1)" />
                <ConceptCard title="DSU Applications" icon="🔗" color="#e879f9" items={[
                  "Cycle detection: if union(u,v) fails → cycle exists",
                  "Connected components: count distinct roots",
                  "Kruskal's MST: check connectivity before adding edge",
                  "Accounts merging: group accounts by shared identity",
                  "Network connectivity: track connected servers",
                  "Dynamic connectivity: add edges, query connectivity",
                  "Grouping problems: equivalence classes",
                  "Redundant connections: find the extra edge",
                ]} />
                <ConceptCard title="Advanced DSU" icon="🚀" color="#d946ef" items={[
                  "Component size: track size of each component",
                  "Component metadata: aggregate values per component",
                  "DSU with sums: maintain sum per component",
                  "DSU with min/max: track extremal values per component",
                  "Weighted DSU: maintain distance/weight from each node to root",
                  "Parity DSU: track parity (odd/even) of path to root (bipartite-like)",
                  "Rollback DSU: undo union operations (for offline algorithms)",
                  "Offline queries: process all queries after reading all input",
                  "DSU + segment tree: time-based edge activation",
                  "DSU + divide and conquer: offline dynamic connectivity",
                ]} />
                <KeyInsight text="Path compression + union by rank gives O(α(n)) amortized per operation — effectively constant for any practical input. This optimization is what makes DSU powerful." color="#f472b6" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 25-28 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 25-28 — SCC, Bridges & Articulation Points" subtitle="Expert-level graph decomposition — low-link is the key concept" level="Levels 25-28" color="#e879f9" badge="Advanced">
              <div className="space-y-6">
                <AlgorithmCard name="Kosaraju's SCC" when="Finding strongly connected components" time="O(V+E)" space="O(V)" color="#e879f9"
                  keySteps={["First DFS: compute finish order (postorder)", "Build reverse graph", "Second DFS: process vertices in reverse finish order on reverse graph", "Each tree in second DFS = one SCC", "Condensation graph: compress each SCC to single node → DAG"]}
                  variants={["Two-pass DFS", "Uses reverse graph"]} />
                <AlgorithmCard name="Tarjan's SCC" when="Finding SCC in one pass" time="O(V+E)" space="O(V)" color="#c084fc"
                  keySteps={["DFS with discovery time and low-link value", "Low-link: earliest reachable ancestor via back edges", "Maintain DFS stack of active nodes", "When low-link[v] == disc[v]: v is SCC root, pop stack to form SCC", "Low-link mechanics: update from tree edges and back edges"]}
                  variants={["Single pass", "No reverse graph needed", "Also finds bridges and articulation points"]} />
                <TopicGrid topics={[
                  { title: "SCC Concepts", icon: "💎", color: "#e879f9", items: ["Strong connectivity: path between every ordered pair", "Condensation graph: DAG of SCCs", "Why condensation is acyclic: merging SCCs removes cycles", "SCC compression simplifies graph analysis"] },
                  { title: "Bridges (Cut Edges)", icon: "🌉", color: "#fb7185", items: ["Edge whose removal disconnects graph", "Bridge condition: low[child] > disc[parent]", "DFS tree + discovery time + low-link", "Tarjan bridge algorithm O(V+E)", "Bridge tree: contract non-bridge edges"] },
                  { title: "Articulation Points", icon: "🎯", color: "#f87171", items: ["Vertex whose removal disconnects graph", "Root special case: articulation if 2+ children in DFS tree", "Non-root: articulation if child has low[child] ≥ disc[v]", "Tarjan articulation-point algorithm", "Block-cut tree: contract biconnected components"] },
                  { title: "Biconnected Components", icon: "🔗", color: "#dc2626", items: ["Vertex-biconnected: no articulation point removal disconnects", "Edge-biconnected: no bridge removal disconnects", "Block-cut tree: bipartite tree of blocks and articulation points", "Bridges relate to edge-biconnected components", "Articulation points relate to vertex-biconnected components"] },
                ]} columns={2} />
                <KeyInsight text="Once low-link becomes intuitive, several difficult graph problems become much easier. Low-link is the foundation for bridges, articulation points, SCC, and more." color="#e879f9" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 29 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 29 — Eulerian Paths & Circuits" subtitle="Using every edge exactly once" level="Level 29" color="#4ade80">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Euler Path", icon: "🛤️", color: "#4ade80", items: ["Uses every edge exactly once", "Directed: exactly 0 or 2 vertices with odd in/out degree diff", "Undirected: exactly 0 or 2 vertices with odd degree", "Start and end may differ"] },
                  { title: "Euler Circuit", icon: "🔄", color: "#22c55e", items: ["Uses every edge exactly once, returns to start", "Directed: all vertices have equal in-degree and out-degree", "Undirected: all vertices have even degree", "Start and end are the same"] },
                  { title: "Hierholzer's Algorithm", icon: "⚡", color: "#16a34a", items: ["Start from any vertex with edges", "Follow unused edges until stuck", "When stuck: splicing in cycles from vertices with remaining edges", "O(E) time complexity", "Constructs Eulerian trail efficiently"] },
                ]} columns={3} />
                <ConceptCard title="Interview Applications" icon="🎯" color="#4ade80" items={["Reconstruct itinerary from flights", "Use every edge exactly once in a route", "Route reconstruction problems", "Sequence reconstruction from pairwise constraints"]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 30 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 30 — Hamiltonian Paths & Cycles" subtitle="Visiting every vertex exactly once — computationally hard" level="Level 30" color="#38bdf8">
              <div className="space-y-6">
                <Comparison left={{ title: "Eulerian", items: ["Uses every EDGE exactly once", "Polynomial time O(E)", "Degree conditions characterize existence", "Hierholzer's algorithm constructs it"] }} right={{ title: "Hamiltonian", items: ["Visits every VERTEX exactly once", "NP-complete in general", "No simple characterization", "Backtracking / Bitmask DP needed"] }} />
                <ConceptCard title="Hamiltonian Approaches" icon="👑" color="#38bdf8" items={[
                  "Backtracking: try all vertices, prune on revisit",
                  "Bitmask DP: state = (current vertex, visited set as bitmask)",
                  "Bitmask DP complexity: O(2^N × N²)",
                  "Why hard: no polynomial algorithm exists (NP-complete)",
                  "Special cases: complete graphs always have Hamiltonian cycles",
                  "Connected to TSP: TSP = Hamiltonian cycle with minimum weight",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 31 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 31 — Graph Coloring" subtitle="Assigning colors under adjacency constraints" level="Level 31" color="#fbbf24">
              <div className="space-y-4">
                <ConceptCard title="Graph Coloring" icon="🎨" color="#fbbf24" items={[
                  "Two-coloring: bipartite checking (BFS/DFS coloring)",
                  "K-coloring: assign k colors so no adjacent vertices share a color",
                  "Greedy coloring: assign smallest available color",
                  "Chromatic number: minimum colors needed",
                  "Bipartite relationship: 2-colorable ⟺ bipartite ⟺ no odd cycle",
                  "Conflict graphs: model conflicts as graph coloring",
                  "General graph coloring is NP-hard",
                  "Interview priority: bipartite coloring is high priority",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 32-33 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 32-33 — Matching & Network Flow" subtitle="Assignment problems and maximum flow — advanced but important" level="Levels 32-33" color="#d946ef" badge="Advanced">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Matching Concepts", icon: "🎯", color: "#d946ef", items: ["Matching: set of edges, no shared vertices", "Maximum matching: largest possible matching", "Maximal matching: can't add more edges", "Perfect matching: every vertex matched", "Bipartite matching: matching in bipartite graph"] },
                  { title: "Matching Algorithms", icon: "⚡", color: "#c084fc", items: ["Augmenting paths: paths alternating unmatched/matched edges", "Kuhn's algorithm: O(V × E) augmenting path search", "Hopcroft-Karp: O(E√V) — multiple augmentations per round", "König's theorem: max matching = min vertex cover (bipartite)"] },
                  { title: "Network Flow", icon: "🌊", color: "#a855f7", items: ["Flow network: directed graph with capacities", "Source → Sink, flow ≤ capacity on each edge", "Ford-Fulkerson: DFS augmenting paths", "Edmonds-Karp: BFS augmenting paths O(VE²)", "Dinic's: blocking flow O(V²E)"] },
                  { title: "Flow Concepts", icon: "💡", color: "#9333ea", items: ["Residual graph: remaining capacity after flow", "Augmenting path: path with positive residual capacity", "Bottleneck capacity: minimum residual along path", "Flow conservation: flow in = flow out (except source/sink)", "Max-flow min-cut theorem: max flow = min cut capacity"] },
                ]} columns={2} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 34-35 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 34-35 — Flow Modeling & Min-Cost Max-Flow" subtitle="Transforming problems into flow, and cost optimization" level="Levels 34-35" color="#a855f7">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Flow Modeling Applications", icon: "📋", color: "#a855f7", items: ["Assignment: workers → tasks", "Scheduling: tasks → time slots", "Resource allocation", "Bipartite matching via flow", "Capacity constraints on selections", "Network routing", "Disjoint paths"] },
                  { title: "Advanced Flow Techniques", icon: "🔧", color: "#9333ea", items: ["Node splitting: split vertex into in/out with capacity edge", "Edge capacities: standard model", "Vertex capacities: use node splitting", "Lower bounds: require minimum flow on edges", "Circulation: flow without source/sink", "Flow with demands: supply and demand nodes"] },
                  { title: "Min-Cost Max-Flow", icon: "💰", color: "#7c3aed", items: ["Cost on each edge, minimize total cost", "Successive shortest path: find augmenting path with min cost", "Potential function: handle negative costs in residual graph", "Residual costs: update costs after each augmentation", "Not usually first-line interview material"] },
                ]} columns={3} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 36-40 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 36-40 — Transitive Closure, Graph + DP & Bitmask" subtitle="Bridging graph theory with dynamic programming" level="Levels 36-40" color="#8b5cf6" badge="Advanced">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Transitive Closure", icon: "🔲", color: "#6366f1", items: ["Reachability between every pair of vertices", "Floyd-Warshall boolean interpretation", "Boolean matrix: reachable[i][j] = true/false", "DAG reachability via DFS", "SCC compression for reachability"] },
                  { title: "DAG Dynamic Programming", icon: "📊", color: "#8b5cf6", items: ["DP over topological order (process in topo order)", "Longest path in DAG: DP[i] = max(DP[j] + weight) for all predecessors", "Shortest path in DAG: similar relaxation", "Number of paths: count DP", "Maximum reward / minimum cost path", "Critical path: determines project duration", "Dependency accumulation"] },
                  { title: "Graph + DP Patterns", icon: "🧩", color: "#a78bfa", items: ["DP over nodes: state per vertex", "DP over edges: state per edge", "DP over topological order", "Tree DP: DP on tree structure", "State-expanded graph: (vertex, state) pairs", "Shortest path + state", "Bitmask graph DP", "Subset DP on graphs"] },
                  { title: "Bitmask Graph Problems", icon: "🔢", color: "#c084fc", items: ["Vertex subset as bitmask", "Visited-set bitmask: O(1) membership check", "State: (current node, visited bitmask)", "BFS + bitmask: explore state-space", "DP + bitmask: TSP, Hamiltonian path", "Small-N graph optimization (N ≤ 20)", "Held-Karp algorithm for TSP: O(2^N × N²)"] },
                ]} columns={2} />
                <ConceptCard title="TSP (Traveling Salesman Problem)" icon="🗺️" color="#c084fc" items={[
                  "Hamiltonian cycle in complete weighted graph with minimum total weight",
                  "Brute force: O(N!) — try all permutations",
                  "Bitmask DP: state = (mask of visited vertices, current vertex)",
                  "Transition: DP[mask][v] = min(DP[mask\{v}][u] + dist[u][v]) for all u in mask",
                  "Complexity: O(2^N × N²) — feasible for N ≤ 20",
                  "Why hard: no polynomial algorithm (NP-hard)",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 41-44 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 41-44 — State-Space, Word Graphs, Dependencies, Temporal" subtitle="Advanced graph modeling — recognizing hidden graphs" level="Levels 41-44" color="#22d3ee" badge="Critical">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Constraint / State-Space Graphs", icon: "🔮", color: "#22d3ee", items: ["State = node, Transition = edge", "Lock combinations, word transformations", "Board games, puzzle states", "Robot positions, machine states", "BFS/Dijkstra/DFS over state space", "State compression for large states"] },
                  { title: "Word / String Graphs", icon: "📝", color: "#06b6d4", items: ["Word Ladder: transform word A → word B", "Transformation graph: edges = single char changes", "Alien Dictionary: derive character ordering", "Pattern buckets: group by pattern", "Implicit edges between words", "Trie + graph combinations"] },
                  { title: "Dependency Graphs", icon: "📋", color: "#0891b2", items: ["A depends on B → model as B → A", "Course prerequisites", "Build / package dependencies", "Task scheduling with constraints", "Circular dependency detection (cycle in dep graph)", "Dependency ordering = topological sort", "Dependency levels = BFS levels in DAG"] },
                  { title: "Temporal Graphs", icon: "⏰", color: "#0e7490", items: ["Edges active only during certain times", "Time-dependent traversal", "Earliest arrival problem", "Scheduling constraints", "Time-expanded graphs: add time dimension to state", "State includes time: (vertex, time)"] },
                ]} columns={2} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 45-47 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 45-47 — Dynamic Graphs & Offline/Online Queries" subtitle="Handling graph changes and processing queries efficiently" level="Levels 45-47" color="#f472b6">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Dynamic Graphs", icon: "🔄", color: "#f472b6", items: ["Edge insertion over time", "Edge deletion over time", "Dynamic connectivity: is u reachable from v?", "Offline dynamic connectivity: process all edges first", "DSU for incremental connectivity", "Rollback DSU for deletions", "Query after each edge change"] },
                  { title: "Offline Graph Queries", icon: "📥", color: "#e879f9", items: ["Process all queries after reading all input", "Sort queries in reverse order", "Reverse processing: undo additions", "DSU offline: add edges in reverse", "Parallel binary search concept", "Divide-and-conquer queries", "Segment tree over time", "Rollback DSU for undo support"] },
                  { title: "Online Graph Algorithms", icon: "📤", color: "#d946ef", items: ["Queries arrive sequentially", "Must answer each before seeing next", "Maintaining connectivity online", "Dynamic shortest path", "Data structure requirements", "Higher complexity than offline"] },
                ]} columns={3} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 48-55 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 48-55 — Graph + Other Techniques" subtitle="Powerful combinations: binary search, heap, greedy, backtracking, tries, trees" level="Levels 48-55" color="#f59e0b">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Graph + Binary Search", icon: "🔍", color: "#f59e0b", items: ["Binary search on answer + graph feasibility", "Can I reach destination if max edge cost = X?", "Binary search X + BFS/DFS", "Feasibility graph / threshold graph", "Min possible max edge, max possible min edge", "Connectivity under threshold"] },
                  { title: "Graph + Heap", icon: "⛰️", color: "#fbbf24", items: ["Dijkstra uses min-heap", "Prim uses min-heap", "K-way graph processing", "Best-first search", "Minimum-cost transitions", "Topological + priority queue", "Lexicographically smallest topo order"] },
                  { title: "Graph + Greedy", icon: "⚡", color: "#fcd34d", items: ["MST (Kruskal, Prim)", "Dijkstra", "Scheduling", "Resource allocation", "Edge selection strategies", "Cheapest connectivity", "Learn to recognize when greedy choice is safe"] },
                  { title: "Graph + Backtracking", icon: "🔙", color: "#fb923c", items: ["All paths enumeration", "Simple path enumeration", "Hamiltonian path", "Graph coloring", "Word search on grid", "Constraint traversal", "DFS + undo state = graph backtracking"] },
                  { title: "Graph + Trie", icon: "🌳", color: "#ea580c", items: ["Word graph problems", "Prefix-based transitions", "Word Search II", "Dictionary graph", "String transformation", "Trie + graph traversal"] },
                  { title: "Graph + Segment/Fenwick Tree", icon: "📊", color: "#c2410c", items: ["Dynamic graph intervals", "Offline edge activation", "Segment tree over time", "DSU rollback + segment tree", "Fenwick tree: offline queries, coordinate compression", "Advanced but rare in interviews"] },
                ]} columns={3} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 56 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 56 — Special Graph Types" subtitle="Know these graph families and their properties" level="Level 56" color="#a78bfa">
              <div className="space-y-4">
                <TopicGrid topics={[
                  { title: "Structural Types", icon: "🏗️", color: "#a78bfa", items: ["DAG: directed, acyclic", "Tree: undirected, connected, acyclic", "Forest: undirected, acyclic, possibly disconnected", "Complete: every pair connected", "Bipartite: two-colorable", "Complete bipartite: K_{m,n}"] },
                  { title: "Special Structures", icon: "🔷", color: "#c084fc", items: ["Tournament: complete directed graph", "Regular: every vertex same degree", "Planar: drawable without edge crossings", "Interval: vertices = intervals, edges = overlaps", "Functional: each node has exactly one outgoing edge", "Grid: vertices on grid, edges to neighbors"] },
                  { title: "Application Types", icon: "📋", color: "#d946ef", items: ["State graph: states as vertices", "Dependency graph: ordering constraints", "Flow network: capacities and flow", "Implicit graph: computed, not stored", "Weighted graph: edges have costs"] },
                ]} columns={3} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 57-59 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 57-59 — Functional Graphs, Binary Lifting & LCA" subtitle="Particularly useful advanced interview categories" level="Levels 57-59" color="#06b6d4" badge="Advanced">
              <div className="space-y-6">
                <AlgorithmCard name="Functional Graphs" when="Each node has exactly one outgoing edge (next[i] = j)" time="O(N)" space="O(N)" color="#06b6d4"
                  keySteps={["Every component has exactly one cycle", "Each node: tail (path to cycle) + cycle", "Floyd's cycle detection: find cycle start and length", "Binary lifting: answer k-th successor queries", "Distance to cycle: number of steps to reach cycle", "Component structure: tree pointing into cycle"]}
                  variants={["Cycle detection", "Tail + cycle structure", "Binary lifting on functional graphs", "Jump queries", "K-th successor"]} />
                <AlgorithmCard name="Binary Lifting" when="Answering ancestor/jump queries efficiently" time="O(N log N) preprocess, O(log N) query" space="O(N log N)" color="#22d3ee"
                  keySteps={["Precompute 2^k ancestors for each vertex", "up[v][k] = 2^k-th ancestor of v", "K-th successor: decompose k into powers of 2", "LCA: lift both nodes to same depth, then binary search", "Doubling technique: exponential jumping"]}
                  variants={["K-th successor queries", "LCA queries", "Functional graph queries", "Ancestor queries", "Distance on trees"]} />
                <AlgorithmCard name="Lowest Common Ancestor (LCA)" when="Distance between tree nodes, common ancestor queries" time="O(N log N) preprocess, O(log N) query" space="O(N log N)" color="#14b8a6"
                  keySteps={["Root the tree, compute depths", "Preprocess 2^k ancestors (binary lifting)", "Equalize depths: lift deeper node", "Binary search: lift both nodes together", "Answer: parent of the two nodes just below LCA"]}
                  variants={["Binary lifting LCA", "Euler tour + RMQ", "LCA with DFS", "Distance between tree nodes = depth[u] + depth[v] - 2*depth[LCA]"]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 60 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 60 — Tree as a Special Graph" subtitle="Trees simplify many graph concepts" level="Level 60" color="#22c55e">
              <div className="space-y-4">
                <ConceptCard title="Tree Properties" icon="🌳" color="#22c55e" items={[
                  "A tree is an undirected connected graph with no cycles",
                  "E = V - 1 (exactly V-1 edges)",
                  "Exactly one simple path between any two vertices",
                  "Removing any edge disconnects the tree",
                  "Adding any edge creates exactly one cycle",
                  "Every tree with V ≥ 2 has at least 2 leaves",
                  "BFS/DFS on tree is trivial: no visited set needed (parent tracking suffices)",
                  "Many graph problems become much easier on trees",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 61-62 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 61-62 — Traversal Ordering & Low-Link Concepts" subtitle="Expert-level foundational concepts for advanced algorithms" level="Levels 61-62" color="#e879f9">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Traversal Ordering", icon: "📊", color: "#e879f9", items: ["DFS preorder: visit before children", "DFS postorder: visit after children", "BFS levels: level-by-level", "Discovery time: when vertex first visited", "Finish time: when all descendants processed", "Parent tree: edges from parent tracking"] },
                  { title: "Edge Classification (Directed DFS)", icon: "🏷️", color: "#c084fc", items: ["Tree edge: part of DFS tree", "Back edge: to ancestor (→ cycle!)", "Forward edge: to descendant (non-tree)", "Cross edge: to unrelated vertex", "Classification helps understand structure"] },
                  { title: "Low-Link Concepts", icon: "🔗", color: "#d946ef", items: ["Discovery time disc[v]: when v first visited", "Low-link low[v]: earliest reachable ancestor via back edges", "Bridge condition: low[child] > disc[parent]", "Articulation point: low[child] ≥ disc[v]", "SCC: low[v] == disc[v] (v is SCC root)", "Foundation for Tarjan's algorithms"] },
                ]} columns={3} />
                <KeyInsight text="Low-link is arguably the single most important concept in advanced graph theory. Once it becomes intuitive, bridges, articulation points, and SCC all follow naturally." color="#e879f9" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 63-64 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 63-64 — Graph Decomposition & Compression" subtitle="Simplifying graphs by contracting equivalent structures" level="Levels 63-64" color="#a855f7">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Graph Decomposition", icon: "🔀", color: "#a855f7", items: ["Connected components decomposition", "SCC decomposition → condensation DAG", "Biconnected components (vertex/edge)", "Bridge-connected components", "Component contraction: merge equivalent vertices"] },
                  { title: "Graph Compression", icon: "📦", color: "#9333ea", items: ["SCC compression: each SCC → single node", "Component graph: condensed graph of components", "Condensation DAG: the compressed graph is always a DAG", "Contracting edges: merge two connected vertices", "Contracting equivalent states: merge indistinguishable nodes"] },
                ]} />
                <KeyInsight text="Compressing complicated regions into single nodes often turns a difficult graph into a DAG or tree-like structure, making it much easier to analyze." color="#a855f7" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 65 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 65 — Shortest Path with Special Weights" subtitle="The decision framework — internalize this" level="Level 65" color="#3b82f6" badge="Must Know">
              <div className="space-y-6">
                <DecisionTree title="Shortest Path Algorithm Selection" tree={{
                  label: "Weight type?", color: "#3b82f6",
                  children: [
                    { label: "Weight = 1", color: "#22d3ee", detail: "→ BFS  O(V+E)" },
                    { label: "Weight ∈ {0, 1}", color: "#818cf8", detail: "→ 0-1 BFS  O(V+E)" },
                    { label: "Weight ≥ 0", color: "#a78bfa", detail: "→ Dijkstra  O((V+E) log V)" },
                    { label: "Negative weights", color: "#f97316", detail: "→ Bellman-Ford  O(VE)" },
                    { label: "DAG", color: "#22c55e", detail: "→ Topological DP  O(V+E)" },
                    { label: "All pairs", color: "#ef4444", detail: "→ Floyd-Warshall  O(V³)" },
                  ]
                }} />
                <KeyInsight text="This decision framework is one of the most valuable things to internalize. The right algorithm depends entirely on the weight structure of your graph." color="#3b82f6" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 66-68 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 66-68 — Path Problems Beyond 'Shortest'" subtitle="Widest, bottleneck, minimax, k-shortest, lexicographic paths" level="Levels 66-68" color="#fb923c">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Path Types", icon: "🛤️", color: "#fb923c", items: ["Any path: just existence", "Shortest path: minimum total weight", "Longest path: maximum total weight", "Number of paths: counting", "All paths: enumeration", "K-th shortest: multiple candidates", "Widest path: maximize minimum edge", "Bottleneck path: minimize maximum edge", "Minimax path: minimize the maximum", "Maximin path: maximize the minimum", "Cheapest path: minimum cost", "Lexicographically smallest path", "Constrained path: additional restrictions"] },
                  { title: "Bottleneck / Minimax", icon: "🏔️", color: "#ea580c", items: ["Minimize maximum edge on path", "Maximize minimum edge on path", "Minimum effort path", "Safest route", "Maximum capacity route", "Tools: Dijkstra variant, Binary search + BFS/DFS, MST properties, Union-Find"] },
                  { title: "K-Shortest Paths", icon: "🔢", color: "#c2410c", items: ["Find K shortest distinct paths", "Multiple candidate paths", "Modified Dijkstra", "Best-first exploration", "Yen's algorithm concept", "Advanced: not usually first-line interview"] },
                ]} columns={3} />
                <KeyInsight text="'Shortest' does not necessarily mean ordinary distance. Learn to recognize what 'optimal path' means in each problem's context." color="#fb923c" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 69-71 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 69-71 — Lexicographical, Counting & Probability on Graphs" subtitle="Specialized graph problems requiring careful analysis" level="Levels 69-71" color="#fbbf24">
              <div className="space-y-4">
                <TopicGrid topics={[
                  { title: "Lexicographical Graph Problems", icon: "🔤", color: "#fbbf24", items: ["Lexicographically smallest BFS", "Lexicographically smallest topological order", "Priority queue + graph for tie-breaking", "Sorted neighbor processing", "Eulerian reconstruction", "State tie-breaking strategies"] },
                  { title: "Counting on Graphs", icon: "🔢", color: "#f59e0b", items: ["Number of paths between vertices", "Number of shortest paths", "Number of components", "Component sizes", "Number of reachable nodes", "Path counting in DAG", "Counting walks", "Modulo arithmetic on graphs"] },
                  { title: "Probability on Graphs", icon: "🎲", color: "#d97706", items: ["Random walks on graphs", "Transition probabilities", "Expected path length", "Markov-chain-style graph modeling", "Probability propagation", "Advanced: lower interview priority"] },
                ]} columns={3} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 72-75 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 72-75 — Game Graphs, Adversarial, Randomized & NP-Hard" subtitle="Advanced and theoretical graph topics" level="Levels 72-75" color="#ef4444">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Game Graphs", icon: "🎮", color: "#ef4444", items: ["Game states as vertices", "Legal moves as edges", "Winning/losing states classification", "Minimax on state graphs", "Retrograde analysis", "Game-state DP", "Cyclic game states handling"] },
                  { title: "Adversarial / Minimax", icon: "⚔️", color: "#dc2626", items: ["Two-player games", "Winning/losing positions", "State graph construction", "Minimax with memoization", "Cycle handling in games", "Retrograde BFS from losing states"] },
                  { title: "Randomized Algorithms", icon: "🎲", color: "#b91c1c", items: ["Randomized contraction (Karger's)", "Randomized connectivity", "Randomized MST concepts", "Graph sampling", "Lower interview priority"] },
                  { title: "NP-Hard Graph Problems", icon: "🚫", color: "#991b1b", items: ["TSP (brute force)", "Hamiltonian cycle/path", "General graph coloring", "Maximum independent set", "Clique problem", "Vertex cover (general)", "Set cover", "Graph partitioning", "NP / NP-hard / NP-complete concepts", "Why exact solutions may be infeasible", "Approximation algorithms concept"] },
                ]} columns={2} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 76 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 76 — Classic Graph Theory Problems" subtitle="The families you must know" level="Level 76" color="#6366f1">
              <div className="space-y-4">
                <Checklist columns={3} items={[
                  "Bridges (cut edges)", "Articulation points (cut vertices)",
                  "Strongly Connected Components", "Minimum Spanning Tree",
                  "Maximum Flow", "Bipartite Matching",
                  "Eulerian Path/Circuit", "Hamiltonian Path/Cycle",
                  "Shortest Path", "Topological Sort",
                  "Bipartite Checking", "Graph Coloring",
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 77 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 77 — Interview Graph Recognition" subtitle="Perhaps more important than learning algorithms — pattern matching" level="Level 77" color="#22d3ee" badge="Critical">
              <div className="space-y-6">
                <InterviewRecognition />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 78 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 78 — Hidden Graph Recognition" subtitle="Spotting graphs where none are explicitly mentioned — the biggest skill" level="Level 78" color="#f472b6" badge="Critical">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "Relationships → Graph", icon: "🔗", color: "#f472b6", items: ["friends, connections, roads", "cities, networks", "dependencies, prerequisites", "routes, flights"] },
                  { title: "Transformations → Graph", icon: "🔄", color: "#e879f9", items: ["word A → word B", "state A → state B", "configuration A → configuration B"] },
                  { title: "Other Hidden Graphs", icon: "🔮", color: "#d946ef", items: ["Grid: cell → adjacent cell", "Scheduling: task A before task B → directed graph", "Accounts: same email → connectivity / DSU", "Communication: person → person", "Min connection cost → MST", "Min travel cost → shortest path"] },
                ]} columns={3} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 79-81 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 79-81 — Constraints, Edge Cases & Complexity" subtitle="Choosing algorithms by constraints and handling edge cases" level="Levels 79-81" color="#fb923c">
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">Algorithm Selection by Constraints</h4>
                <ConstraintGuide />
                <ConceptCard title="Edge Cases Checklist" icon="⚠️" color="#f97316" items={[
                  "Empty graph / one vertex / one edge",
                  "Disconnected graph / fully connected graph",
                  "Self-loop / parallel edges / duplicate edges",
                  "Cycle present / no cycle",
                  "Directed / undirected / weighted / unweighted",
                  "Negative weights / zero weights / huge weights",
                  "Unreachable destination",
                  "Multiple shortest paths / multiple valid topological orders",
                  "Isolated vertices / duplicate states / grid boundaries",
                ]} />
                <TopicGrid topics={[
                  { title: "Traversal Complexity", icon: "⏱️", color: "#6366f1", items: ["BFS: O(V + E)", "DFS: O(V + E)"] },
                  { title: "Shortest Path Complexity", icon: "⏱️", color: "#a78bfa", items: ["Dijkstra: O((V + E) log V)", "Bellman-Ford: O(VE)", "Floyd-Warshall: O(V³)"] },
                  { title: "MST Complexity", icon: "⏱️", color: "#ec4899", items: ["Kruskal: O(E log E)", "Prim: O(E log V)"] },
                  { title: "Other Complexities", icon: "⏱️", color: "#22c55e", items: ["DSU: O(α(n)) amortized", "Topo sort: O(V + E)"] },
                ]} columns={4} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 82 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 82 — Graph Algorithm Decision Tree" subtitle="The complete mental model for algorithm selection" level="Level 82" color="#6366f1" defaultOpen>
              <div className="space-y-6">
                <DecisionTree title="What do I need?" tree={{
                  label: "GRAPH PROBLEM", color: "#6366f1",
                  children: [
                    { label: "Traverse", color: "#22d3ee", detail: "→ BFS / DFS" },
                    { label: "Connectivity", color: "#10b981", detail: "→ DFS / BFS / DSU" },
                    { label: "Ordering", color: "#22c55e", detail: "→ Topological Sort" },
                    { label: "Shortest Path?", color: "#3b82f6", children: [
                      { label: "Unweighted", color: "#22d3ee", detail: "→ BFS" },
                      { label: "0/1 weights", color: "#818cf8", detail: "→ 0-1 BFS" },
                      { label: "Non-negative weights", color: "#a78bfa", detail: "→ Dijkstra" },
                      { label: "Negative weights", color: "#f97316", detail: "→ Bellman-Ford" },
                      { label: "All pairs", color: "#ef4444", detail: "→ Floyd-Warshall" },
                      { label: "DAG", color: "#22c55e", detail: "→ Topological DP" },
                    ]},
                    { label: "Min connection cost", color: "#ec4899", children: [
                      { label: "Sparse graph", color: "#f472b6", detail: "→ Kruskal + DSU" },
                      { label: "Dense graph", color: "#f9a8d4", detail: "→ Prim + Heap" },
                    ]},
                    { label: "Strong connectivity", color: "#e879f9", detail: "→ SCC (Kosaraju / Tarjan)" },
                    { label: "Remove edge → disconnects?", color: "#fb7185", detail: "→ Bridge" },
                    { label: "Remove vertex → disconnects?", color: "#f87171", detail: "→ Articulation Point" },
                    { label: "Max matching / assignment", color: "#d946ef", detail: "→ Matching / Flow" },
                  ]
                }} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVELS 83-85 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 83-85 — High-Difficulty Patterns, Hard Topics & Disguised Problems" subtitle="What separates strong candidates from average ones" level="Levels 83-85" color="#f43f5e" badge="Expert">
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">30 High-Difficulty Graph Patterns</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "BFS + state", "DFS + state", "BFS + bitmask", "DFS + backtracking",
                    "Dijkstra + state", "Dijkstra + constraint", "Dijkstra + grid",
                    "0-1 BFS + state", "Binary search + BFS", "Binary search + DFS",
                    "Binary search + DSU", "Topological sort + DP", "Topo sort + priority queue",
                    "DSU + offline queries", "DSU + rollback", "SCC + DAG DP",
                    "SCC + condensation", "Low-link + DFS", "MST + DSU",
                    "MST + LCA", "MST + max edge queries", "BFS + multi-source",
                    "BFS + reverse graph", "Reverse BFS", "Graph + memoization",
                    "Graph + bitmask DP", "Graph + trie", "Graph + segment tree",
                    "Graph + binary lifting", "Graph + shortest path DAG",
                  ].map((p, i) => (
                    <div key={i} className="px-3 py-2 rounded-lg bg-rose-500/5 border border-rose-500/10 text-xs text-rose-300 font-mono">
                      {i + 1}. {p}
                    </div>
                  ))}
                </div>

                <TopicGrid topics={[
                  { title: "Graph Problems Disguised as Array", icon: "📦", color: "#f43f5e", items: ["Functional graph hidden in array", "DSU for grouping array elements", "State graph from array transformations"] },
                  { title: "Disguised as String", icon: "📝", color: "#e11d48", items: ["Trie + graph traversal", "BFS on word transformations", "Transformation graph from string ops", "Topological graph from character ordering"] },
                  { title: "Disguised as Matrix", icon: "🔢", color: "#be123c", items: ["BFS/DFS on grid cells", "Dijkstra on weighted grid", "0-1 BFS on grid with portals"] },
                  { title: "Disguised as Heap/DP/Greedy", icon: "🎭", color: "#9f1239", items: ["Heap problem → Dijkstra / Prim", "DP problem → DAG / state graph", "Greedy problem → MST / shortest path"] },
                ]} columns={2} />
                <KeyInsight text="The recognition skill — knowing when an array/string/matrix/DP problem is actually a graph problem in disguise — is what you should train most heavily." color="#f43f5e" />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 86 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 86 — Professional Interview Communication" subtitle="Knowing the algorithm isn't enough — explain your reasoning" level="Level 86" color="#8b5cf6">
              <div className="space-y-6">
                <TopicGrid topics={[
                  { title: "1. Modeling", icon: "📐", color: "#8b5cf6", items: ["What are the vertices?", "What are the edges?", "Are edges directed?", "Are they weighted?"] },
                  { title: "2. Properties", icon: "🔍", color: "#a78bfa", items: ["Is the graph cyclic?", "Is it connected?", "Are weights negative?", "What's the structure?"] },
                  { title: "3. Algorithm Selection", icon: "🎯", color: "#c084fc", items: ["Why BFS vs DFS?", "Why Dijkstra vs BFS?", "Why DSU vs DFS?", "Why MST vs shortest path?"] },
                  { title: "4. Correctness", icon: "✅", color: "#d946ef", items: ["State the invariant", "Explain greedy choice", "Why visited is safe", "Why relaxation works"] },
                  { title: "5. Complexity", icon: "⏱️", color: "#e879f9", items: ["Always state Time complexity", "Always state Space complexity", "Justify your complexity analysis"] },
                  { title: "6. Edge Cases", icon: "⚠️", color: "#f472b6", items: ["Explicitly discuss edge cases", "Empty graph, single vertex", "Disconnected components", "Negative weights if applicable"] },
                ]} columns={3} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEVEL 87 ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Level 87 — Problem Difficulty Ladder" subtitle="A structured path from foundation to expert" level="Level 87" color="#8b5cf6" defaultOpen>
              <div className="space-y-4">
                <TieredLevel tier="Tier 1 — Foundation" color="#4ade80" items={[
                  { label: "Graph representation", detail: "edge list, adjacency list, adjacency matrix" },
                  { label: "BFS", detail: "queue-based traversal, distance tracking" },
                  { label: "DFS", detail: "recursive and iterative, visited tracking" },
                  { label: "Connected components", detail: "counting, labeling, sizes" },
                  { label: "Grid DFS/BFS", detail: "flood fill, island counting" },
                  { label: "Basic cycle detection", detail: "undirected with parent tracking" },
                ]} />
                <TieredLevel tier="Tier 2 — Interview Core" color="#60a5fa" items={[
                  { label: "Shortest path", detail: "BFS for unweighted graphs" },
                  { label: "Multi-source BFS", detail: "simultaneous expansion, nearest source" },
                  { label: "Bipartite", detail: "two-coloring, odd-cycle check" },
                  { label: "Topological sort", detail: "Kahn's and DFS-based" },
                  { label: "DSU", detail: "union-find with path compression" },
                  { label: "Dijkstra", detail: "non-negative weighted shortest path" },
                  { label: "MST", detail: "Kruskal and Prim" },
                ]} />
                <TieredLevel tier="Tier 3 — Strong Interview" color="#a78bfa" items={[
                  { label: "Word Ladder", detail: "state-space BFS on word transformations" },
                  { label: "State-space BFS", detail: "recognizing implicit state graphs" },
                  { label: "0-1 BFS", detail: "deque-based with 0/1 weights" },
                  { label: "Dijkstra variants", detail: "(node, state) multi-dimensional" },
                  { label: "Course scheduling", detail: "topological sort with constraints" },
                  { label: "Graph + heap", detail: "best-first search patterns" },
                  { label: "Graph + binary search", detail: "search on answer + feasibility" },
                  { label: "Path reconstruction", detail: "parent tracking and path recovery" },
                ]} />
                <TieredLevel tier="Tier 4 — Hard" color="#f97316" items={[
                  { label: "SCC", detail: "Kosaraju and Tarjan" },
                  { label: "Bridges", detail: "cut edges, low-link" },
                  { label: "Articulation points", detail: "cut vertices, DFS tree" },
                  { label: "DAG DP", detail: "longest path, counting, critical path" },
                  { label: "Advanced DSU", detail: "weighted, parity, rollback" },
                  { label: "Bitmask graph", detail: "TSP, state-space exploration" },
                  { label: "Complex state-space graphs", detail: "multi-constraint problems" },
                  { label: "MST variants", detail: "maximum spanning tree, bottleneck" },
                ]} />
                <TieredLevel tier="Tier 5 — Expert" color="#ef4444" items={[
                  { label: "Network flow", detail: "Ford-Fulkerson, Edmonds-Karp, Dinic" },
                  { label: "Matching", detail: "Kuhn, Hopcroft-Karp, König's theorem" },
                  { label: "Min-cost max-flow", detail: "cost optimization on flow" },
                  { label: "Rollback DSU", detail: "undo operations for offline algorithms" },
                  { label: "Offline dynamic connectivity", detail: "process edge changes in batch" },
                  { label: "Binary lifting", detail: "k-th ancestor, LCA" },
                  { label: "Functional graphs", detail: "cycle detection, tail structure" },
                  { label: "Advanced shortest paths", detail: "Johnson's, bidirectional, A*" },
                ]} />
                <TieredLevel tier="Tier 6 — Competitive/Algorithmic Expert" color="#e879f9" items={[
                  { label: "Link-cut trees", detail: "dynamic tree connectivity" },
                  { label: "Heavy-light decomposition", detail: "path queries on trees" },
                  { label: "Centroid decomposition", detail: "tree distance queries" },
                  { label: "Blossom algorithm", detail: "general graph matching" },
                  { label: "Advanced flow", detail: "Dinic, push-relabel, circulation" },
                  { label: "Advanced dynamic graph algorithms", detail: "real-time updates" },
                  { label: "Advanced graph DP", detail: "subset convolution, advanced bitmask" },
                  { label: "Specialized shortest-path algorithms", detail: "A*, bidirectional, potential-based" },
                ]} />
              </div>
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ LEARNING PATH ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Recommended Learning Path" subtitle="Study these topics in this order for maximum efficiency — NOT sequentially" level="Path" color="#a78bfa" defaultOpen>
              <LearningPath />
            </CollapsibleSection>

            {/* ═══════════════════════════════════════════ COMPLEXITY ═══════════════════════════════════════════ */}
            <CollapsibleSection title="Algorithm Complexity Reference" subtitle="Know these precisely" level="Reference" color="#6366f1">
              <ComplexityTable data={[
                { algorithm: "BFS / DFS", time: "O(V + E)", space: "O(V)", color: "#22d3ee" },
                { algorithm: "Dijkstra (binary heap)", time: "O((V + E) log V)", space: "O(V)", color: "#a78bfa" },
                { algorithm: "Bellman-Ford", time: "O(VE)", space: "O(V)", color: "#f97316" },
                { algorithm: "Floyd-Warshall", time: "O(V³)", space: "O(V²)", color: "#ef4444" },
                { algorithm: "Kruskal", time: "O(E log E)", space: "O(V)", color: "#ec4899", note: "sorting dominates" },
                { algorithm: "Prim (binary heap)", time: "O(E log V)", space: "O(V)", color: "#f472b6" },
                { algorithm: "Topological Sort", time: "O(V + E)", space: "O(V)", color: "#22c55e" },
                { algorithm: "DSU (path compress + rank)", time: "O(α(n)) amortized", space: "O(V)", color: "#f472b6", note: "≈ constant" },
                { algorithm: "0-1 BFS", time: "O(V + E)", space: "O(V)", color: "#818cf8" },
                { algorithm: "Kosaraju / Tarjan SCC", time: "O(V + E)", space: "O(V)", color: "#e879f9" },
                { algorithm: "Hierholzer (Eulerian)", time: "O(E)", space: "O(V + E)", color: "#4ade80" },
                { algorithm: "Hopcroft-Karp", time: "O(E√V)", space: "O(V)", color: "#d946ef" },
                { algorithm: "Dinic (max flow)", time: "O(V²E)", space: "O(V + E)", color: "#a855f7" },
                { algorithm: "Binary Lifting / LCA", time: "O(N log N) build, O(log N) query", space: "O(N log N)", color: "#06b6d4" },
              ]} />
            </CollapsibleSection>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
