"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TestSession } from "@/lib/stats";
import { Translations } from "@/lib/translations";

interface HistoryChartProps {
  history: TestSession[];
  t: Translations;
}

export default function HistoryChart({ history, t }: HistoryChartProps) {
  const data = history
    .slice(0, 10)
    .reverse()
    .map((s, i) => ({
      name: `#${i + 1}`,
      avg: s.average,
      best: s.best,
    }));

  return (
    <div>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#9ca3af" }} />
          <YAxis
            tick={{ fontSize: 12, fill: "#9ca3af" }}
            domain={["auto", "auto"]}
            unit="ms"
          />
          <Tooltip
            formatter={(value: number) => [`${value}ms`]}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
          <Line
            type="monotone"
            dataKey="avg"
            stroke="#22c55e"
            strokeWidth={2}
            dot={{ fill: "#22c55e", r: 4 }}
            name={t.average}
          />
          <Line
            type="monotone"
            dataKey="best"
            stroke="#3b82f6"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={{ fill: "#3b82f6", r: 4 }}
            name={t.best}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex gap-4 justify-center mt-2">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <div className="w-4 h-0.5 bg-green-500" />
          <span>{t.average}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <div className="w-4 h-0.5 bg-blue-500 border-dashed" />
          <span>{t.best}</span>
        </div>
      </div>
    </div>
  );
}
