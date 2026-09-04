"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TreeNode {
  label: string;
  detail?: string;
  color?: string;
  children?: TreeNode[];
  icon?: string;
}

export function DecisionTree({ tree, title }: { tree: TreeNode; title: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-zinc-950 p-6 overflow-x-auto">
      <h4 className="text-sm font-semibold text-zinc-400 mb-4 uppercase tracking-wider">{title}</h4>
      <TreeNodeItem node={tree} level={0} isLast={true} />
    </div>
  );
}

function TreeNodeItem({ node, level, isLast }: { node: TreeNode; level: number; isLast: boolean }) {
  const [expanded, setExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className={cn("relative", level > 0 && "ml-6")}>
      {level > 0 && (
        <div className="absolute left-[-14px] top-0 h-full">
          <div className={cn("w-px h-full", isLast ? "bg-transparent" : "bg-white/10")} />
          <div className="absolute top-3 left-0 w-3 h-px bg-white/10" />
        </div>
      )}

      <button
        onClick={() => hasChildren && setExpanded(!expanded)}
        className={cn(
          "flex items-center gap-2 py-1.5 px-2 rounded-lg w-full text-left transition-colors",
          "hover:bg-white/5",
          node.color && "border border-white/5"
        )}
        style={node.color ? { borderColor: `${node.color}30`, background: `${node.color}08` } : undefined}
      >
        {hasChildren ? (
          <motion.div animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-500" />
          </motion.div>
        ) : (
          <div className="w-3.5 h-3.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          </div>
        )}
        <span
          className={cn(
            "text-sm font-medium",
            node.color ? "text-white" : "text-zinc-300"
          )}
          style={node.color ? { color: node.color } : undefined}
        >
          {node.label}
        </span>
        {node.icon && <span className="text-xs">{node.icon}</span>}
      </button>

      {node.detail && (
        <div className="ml-7 mb-1 text-xs text-zinc-500 leading-relaxed">
          {node.detail}
        </div>
      )}

      <AnimatePresence>
        {expanded && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {node.children!.map((child, i) => (
              <TreeNodeItem
                key={i}
                node={child}
                level={level + 1}
                isLast={i === node.children!.length - 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
