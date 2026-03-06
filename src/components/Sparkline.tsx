"use client";

import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { TrendingUp, TrendingDown, Activity, BarChart2, ArrowUpRight } from "lucide-react";

// --- Types & Data ---
export interface SparklineProps {
  data?: { value: number }[];
  height?: number;
  color?: string;
  dataKey?: string;
}

// Fixed deterministic data — no Math.random() to avoid SSR hydration mismatches
const defaultSparklineData = [
  { value: 10 }, { value: 15 }, { value: 12 }, { value: 20 },
  { value: 18 }, { value: 25 }, { value: 22 }, { value: 30 },
  { value: 28 }, { value: 35 }, { value: 32 }, { value: 40 },
];

// Fixed 30-day activity counts — replaces the Math.random() version
const activityData = [
  3, 12, 7, 18, 5, 14, 9, 20, 2, 16, 11, 8, 19, 4, 13,
  6, 15, 10, 17, 1, 12, 8, 20, 5, 14, 9, 17, 3, 11, 18,
].map((count, i) => ({ day: `Day ${i + 1}`, count }));

// --- Minimal Tooltip ---
const SparklineTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 dark:bg-white px-2.5 py-1.5 rounded-lg shadow-xl">
        <span className="text-[12px] font-bold text-white dark:text-neutral-900">
          {payload[0].value.toLocaleString()}
        </span>
      </div>
    );
  }
  return null;
};

export const LineSparkline: React.FC<SparklineProps> = ({
  data = defaultSparklineData,
  height = 40,
  color = "#3B82F6",
  dataKey = "value",
}) => (
  <div style={{ height, width: "100%", minWidth: 100 }} className="relative">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
        <YAxis domain={["dataMin - 5", "dataMax + 5"]} hide />
        <Tooltip
          content={<SparklineTooltip />}
          cursor={{ stroke: color, strokeWidth: 1, strokeOpacity: 0.25, strokeDasharray: "3 3" }}
        />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: "#fff", stroke: color, strokeWidth: 2 }}
          animationDuration={1400}
          animationEasing="ease-out"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const AreaSparkline: React.FC<SparklineProps> = ({
  data = defaultSparklineData,
  height = 52,
  color = "#10B981",
  dataKey = "value",
}) => (
  <div style={{ height, width: "100%", minWidth: 100 }} className="relative">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
        <defs>
          {/* Stable gradient ID — no # chars in SVG IDs */}
          <linearGradient id="sp-area-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.28} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis domain={["dataMin - 5", "dataMax + 5"]} hide />
        <Tooltip
          content={<SparklineTooltip />}
          cursor={{ stroke: color, strokeWidth: 1, strokeOpacity: 0.25 }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#sp-area-fill)"
          activeDot={{ r: 4, fill: "#fff", stroke: color, strokeWidth: 2 }}
          animationDuration={1400}
          animationEasing="ease-out"
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export const BarSparkline: React.FC<SparklineProps & { data?: { day: string; count: number }[] }> = ({
  data = activityData,
  height = 40,
  color = "#8B5CF6",
  dataKey = "count",
}) => {
  const max = Math.max(...data.map((d: any) => d[dataKey as string] as number));
  return (
    <div style={{ height, width: "100%", minWidth: 100 }} className="relative">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
          <YAxis hide />
          <Tooltip
            content={<SparklineTooltip />}
            cursor={{ fill: color, opacity: 0.08 }}
          />
          <Bar
            dataKey={dataKey}
            radius={[2, 2, 0, 0]}
            animationDuration={1000}
            animationEasing="ease-out"
          >
            {data.map((entry: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={color}
                fillOpacity={
                  entry[dataKey as string] >= max * 0.7
                    ? 1
                    : entry[dataKey as string] >= max * 0.4
                    ? 0.55
                    : 0.25
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const WidgetSparkline: React.FC = () => {
  const latest = defaultSparklineData[defaultSparklineData.length - 1].value;
  const prev = defaultSparklineData[defaultSparklineData.length - 2].value;
  const isUp = latest >= prev;
  const delta = (((latest - prev) / prev) * 100).toFixed(1);
  const color = isUp ? "#10B981" : "#EF4444";

  return (
    <div className="w-full max-w-[300px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl pt-5 pb-0 px-5 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Activity className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2.5} />
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest">
              Conversion
            </p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-[28px] font-bold text-neutral-900 dark:text-white leading-none tracking-tighter">
              {latest}
            </span>
            <span className="text-[15px] font-bold text-neutral-400">%</span>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 text-[11px] font-semibold mt-0.5 px-2 py-1 rounded-full ${
            isUp
              ? "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          <ArrowUpRight
            className="w-3 h-3"
            style={{ transform: isUp ? "none" : "rotate(90deg)" }}
            strokeWidth={2.5}
          />
          <span>{Math.abs(Number(delta))}%</span>
        </div>
      </div>

      {/* Bleed-edge sparkline */}
      <div className="h-[56px] w-[calc(100%+40px)] -mx-5">
        <LineSparkline height={56} color={color} />
      </div>
    </div>
  );
};
