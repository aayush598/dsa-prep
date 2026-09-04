"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ── GraphSpotlight ────────────────────────────────────────────────────────
   Cycles a highlight index 0..count-1, one at a time, looping forever.
   Children rendered inside can read the shared `activeIndex` via context
   to decide whether they are in the spotlight.
─────────────────────────────────────────────────────────────────────────── */
import { createContext, useContext } from "react";

const SpotlightContext = createContext<number>(-1);

interface GraphSpotlightProps {
  count: number;
  stepMs?: number;
  repeatDelayMs?: number;
  children: React.ReactNode;
}

export function GraphSpotlight({ count, stepMs = 900, repeatDelayMs = 500, children }: GraphSpotlightProps) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const indexRef = useRef(-1);

  useEffect(() => {
    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (cancelled) return;
      const next = (indexRef.current + 1) % Math.max(1, count);
      indexRef.current = next;
      setActiveIndex(next);
      timeout = setTimeout(tick, next === 0 ? stepMs + repeatDelayMs * 2 : stepMs);
    };

    timeout = setTimeout(() => {
      if (cancelled) return;
      indexRef.current = 0;
      setActiveIndex(0);
      timeout = setTimeout(tick, stepMs);
    }, 500);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [count, stepMs, repeatDelayMs]);

  return (
    <SpotlightContext.Provider value={activeIndex}>
      {children}
    </SpotlightContext.Provider>
  );
}

/* ── useSpotlight ─────────────────────────────────────────────────────────
   Returns true if this element's slot index is currently highlighted.
─────────────────────────────────────────────────────────────────────────── */
export function useSpotlightAt(index: number) {
  const active = useContext(SpotlightContext);
  return active === index;
}

interface GraphNodeProps {
  label: string;
  x: number;
  y: number;
  color?: string;
  size?: number;
  active?: boolean;
  animate?: "pulse" | "float" | "ripple" | "none";
  hover?: boolean;
  spot?: number;
}

export function GraphNode({ label, x, y, color = "#8b5cf6", size = 28, active = false, animate = "none", hover = true, spot }: GraphNodeProps) {
  const animClass = animate === "pulse" ? "g-pulse" : animate === "float" ? "g-float" : "";
  const inSpotlight = spot !== undefined ? useSpotlightAt(spot) : active;

  return (
    <g className={`g-graph-node${hover ? " cursor-pointer" : ""}`}>
      {(inSpotlight || active) && (
        <motion.circle
          cx={x}
          cy={y}
          r={size}
          fill={`${color}30`}
          className="g-pulse-ring"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: inSpotlight ? 0.3 : 0.25 }}
          transition={{ duration: 0.4 }}
        />
      )}
      <motion.circle
        cx={x}
        cy={y}
        r={size}
        fill={inSpotlight ? color : active ? color : `${color}18`}
        stroke={color}
        strokeWidth={(inSpotlight || active) ? 2.5 : 1.5}
        className={inSpotlight ? "g-pulse" : animClass}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
      />
      <text
        x={x}
        y={y + 2}
        textAnchor="middle"
        dominantBaseline="central"
        className={inSpotlight ? "text-xs font-bold fill-white" : "text-xs font-bold fill-zinc-500"}
        style={{ fontSize: size > 24 ? 12 : 10 }}
      >
        {label}
      </text>
    </g>
  );
}

interface GraphEdgeProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  directed?: boolean;
  weight?: number;
  dashed?: boolean;
  label?: string;
  highlight?: boolean;
  animate?: "dash" | "none";
  hover?: boolean;
  spot?: number;
}

export function GraphEdge({
  x1, y1, x2, y2, color = "#3f3f46", directed = false, weight, dashed = false, label, highlight = false, animate = "none", hover = true, spot,
}: GraphEdgeProps) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;

  const startX = x1 + ux * 28;
  const startY = y1 + uy * 28;
  const endX = x2 - ux * 28;
  const endY = y2 - uy * 28;

  const markerId = `arrow-${x1}-${y1}-${x2}-${y2}`;
  const mx = (startX + endX) / 2;
  const my = (startY + endY) / 2;
  const dashClass = animate === "dash" || spot !== undefined ? "g-dash" : "";
  const inSpotlight = spot !== undefined ? useSpotlightAt(spot) : false;
  const isActive = highlight || inSpotlight;

  return (
    <g className={`g-graph-edge${hover ? " cursor-pointer" : ""}`}>
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
        </marker>
      </defs>
      {isActive && (
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke={color}
          strokeWidth={5}
          strokeLinecap="round"
          className="g-edge-glow"
        />
      )}
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={color}
        strokeWidth={isActive ? 2.5 : 1.5}
        strokeDasharray={dashed ? "4,4" : undefined}
        className={dashClass}
        style={{ opacity: inSpotlight ? 1 : isActive ? 0.9 : 0.6 }}
        markerEnd={directed ? `url(#${markerId})` : undefined}
      />
      {weight !== undefined && (
        <g>
          <rect
            x={mx - 12}
            y={my - 10}
            width={24}
            height={20}
            rx={4}
            fill="#18181b"
            stroke={color}
            strokeWidth={1}
          />
          <text
            x={mx}
            y={my}
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[10px] font-mono fill-zinc-300"
          >
            {weight}
          </text>
        </g>
      )}
      {label && (
        <g>
          <rect
            x={mx - 10}
            y={my - 9}
            width={20}
            height={18}
            rx={3}
            fill="#18181b"
            stroke={color}
            strokeWidth={1}
          />
          <text
            x={mx}
            y={my}
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[9px] font-mono fill-zinc-400"
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
}

interface GraphDiagramProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
}

export function GraphDiagram({ children, width = 300, height = 200, className = "" }: GraphDiagramProps) {
  return (
    <div className={`rounded-2xl border border-white/5 bg-zinc-950 overflow-hidden ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        style={{ maxHeight: height }}
      >
        <rect width={width} height={height} fill="#09090b" />
        {children}
      </svg>
    </div>
  );
}
