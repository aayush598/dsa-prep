"use client";

import { cn } from "@/lib/utils";

interface ComplexityRow {
  algorithm: string;
  time: string;
  space: string;
  note?: string;
  color?: string;
}

export function ComplexityTable({ data }: { data: ComplexityRow[] }) {
  return (
    <div className="rounded-2xl border border-white/5 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-zinc-900/50">
              <th className="text-left px-4 py-3 font-semibold text-zinc-400 text-xs uppercase tracking-wider">
                Algorithm
              </th>
              <th className="text-left px-4 py-3 font-semibold text-zinc-400 text-xs uppercase tracking-wider">
                Time
              </th>
              <th className="text-left px-4 py-3 font-semibold text-zinc-400 text-xs uppercase tracking-wider">
                Space
              </th>
              {data.some((d) => d.note) && (
                <th className="text-left px-4 py-3 font-semibold text-zinc-400 text-xs uppercase tracking-wider">
                  Note
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                )}
              >
                <td className="px-4 py-3">
                  <span
                    className="font-medium"
                    style={{ color: row.color || "#e4e4e7" }}
                  >
                    {row.algorithm}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <code className="px-2 py-0.5 rounded bg-zinc-800 text-violet-400 text-xs font-mono">
                    {row.time}
                  </code>
                </td>
                <td className="px-4 py-3">
                  <code className="px-2 py-0.5 rounded bg-zinc-800 text-fuchsia-400 text-xs font-mono">
                    {row.space}
                  </code>
                </td>
                {data.some((d) => d.note) && (
                  <td className="px-4 py-3 text-xs text-zinc-500">
                    {row.note || "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
