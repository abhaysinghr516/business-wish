"use client";

import React, { useState } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from "recharts";
import { PieChart as PieChartIcon, Activity, Target, Disc } from "lucide-react";

// --- Types & Data ---
export interface DataPoint {
  name: string;
  value: number;
  color?: string;
  [key: string]: any;
}

export interface PieChartProps {
  data?: DataPoint[];
  height?: number;
}

const trafficSourcesData: DataPoint[] = [
  { name: "Direct", value: 35, color: "#3B82F6" },
  { name: "Organic", value: 25, color: "#6366F1" },
  { name: "Referral", value: 20, color: "#8B5CF6" },
  { name: "Social", value: 20, color: "#D946EF" },
];

const categorySalesData: DataPoint[] = [
  { name: "Electronics", value: 450, color: "#10B981" },
  { name: "Clothing", value: 300, color: "#3B82F6" },
  { name: "Home", value: 200, color: "#F59E0B" },
  { name: "Books", value: 150, color: "#8B5CF6" },
];

const performanceScoreData: DataPoint[] = [
  { name: "Score", value: 82, color: "#3B82F6" },
  { name: "Remaining", value: 18, color: "transparent" },
];

const widgetMetricData: DataPoint[] = [
  { name: "Active", value: 65, color: "#EC4899" },
  { name: "Inactive", value: 35, color: "#FCE7F3" },
];

// --- Shared Custom Tooltip ---
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    // Skip tooltip for gauge "Remaining" slice
    if (d.name === "Remaining") return null;
    return (
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-3 rounded-2xl shadow-lg shadow-neutral-200/60 dark:shadow-black/40 min-w-[140px]">
        <div className="flex items-center gap-2.5">
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: d.color || payload[0].fill }}
          />
          <span className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400 capitalize flex-1">
            {d.name}
          </span>
          <span className="text-[13px] font-bold text-neutral-900 dark:text-white tabular-nums">
            {d.value.toLocaleString()}
            {d.name === "Score" ? "%" : ""}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

export const BasicDonutChart: React.FC<PieChartProps> = ({ height = 300 }) => {
  const total = trafficSourcesData.reduce((s, d) => s + d.value, 0);

  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <PieChartIcon
            className="w-3.5 h-3.5 text-neutral-400"
            strokeWidth={2.5}
          />
          <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
            Traffic Sources
          </p>
        </div>
        <h3 className="text-[22px] font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
          Visitor Breakdown
        </h3>
        <p className="text-[13px] text-neutral-400 mt-1">
          Distribution of incoming sessions
        </p>
      </div>

      {/* Chart + legend side-by-side on wider screens */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Donut */}
        <div style={{ height, width: "100%", maxWidth: 280 }} className="relative flex-shrink-0">
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[28px] font-bold text-neutral-900 dark:text-white tracking-tighter leading-none">
              {total}%
            </span>
            <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mt-1">
              Total
            </span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                data={trafficSourcesData}
                cx="50%"
                cy="50%"
                innerRadius="58%"
                outerRadius="80%"
                paddingAngle={2}
                dataKey="value"
                stroke="none"
                animationDuration={1400}
                animationEasing="ease-out"
              >
                {trafficSourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend — stacked, richer */}
        <div className="flex flex-col gap-3 w-full">
          {trafficSourcesData.map((entry) => {
            const pct = ((entry.value / total) * 100).toFixed(0);
            return (
              <div key={entry.name} className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-[13px] font-medium text-neutral-600 dark:text-neutral-400 flex-1">
                  {entry.name}
                </span>
                {/* Progress track */}
                <div className="flex-1 max-w-[100px] h-1 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: entry.color,
                    }}
                  />
                </div>
                <span className="text-[12px] font-bold text-neutral-900 dark:text-white tabular-nums w-8 text-right">
                  {pct}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const renderActiveShape = (props: any) => {
  const {
    cx, cy,
    innerRadius, outerRadius,
    startAngle, endAngle,
    fill, payload, percent, value,
  } = props;

  return (
    <g>
      {/* Category name */}
      <text
        x={cx}
        y={cy - 14}
        textAnchor="middle"
        fill={fill}
        fontSize={15}
        fontWeight={700}
        letterSpacing={-0.3}
      >
        {payload.name}
      </text>
      {/* Value */}
      <text
        x={cx}
        y={cy + 8}
        textAnchor="middle"
        fill="#8E8E93"
        fontSize={13}
        fontWeight={600}
      >
        {value.toLocaleString()}
      </text>
      {/* Percent */}
      <text
        x={cx}
        y={cy + 26}
        textAnchor="middle"
        fill="#8E8E93"
        fontSize={12}
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      {/* Expanded sector */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      {/* Outer ring accent */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 12}
        outerRadius={outerRadius + 15}
        fill={fill}
        opacity={0.35}
      />
    </g>
  );
};

export const InteractiveDonutChart: React.FC<PieChartProps> = ({
  height = 340,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = categorySalesData.reduce((s, d) => s + d.value, 0);

  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Disc
              className="w-3.5 h-3.5 text-neutral-400"
              strokeWidth={2.5}
            />
            <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
              Category Sales
            </p>
          </div>
          <h3 className="text-[22px] font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
            Revenue Mix
          </h3>
          <p className="text-[13px] text-neutral-400 mt-1">
            Hover segments to explore
          </p>
        </div>
        {/* Active item stat */}
        <div className="flex flex-col items-end">
          <span
            className="text-[22px] font-bold tracking-tighter leading-none"
            style={{ color: categorySalesData[activeIndex].color }}
          >
            {categorySalesData[activeIndex].value.toLocaleString()}
          </span>
          <span className="text-[11px] font-semibold text-neutral-400 mt-0.5">
            {((categorySalesData[activeIndex].value / total) * 100).toFixed(0)}% of total
          </span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              {...({
                activeIndex,
                activeShape: renderActiveShape,
              } as any)}
              data={categorySalesData}
              cx="50%"
              cy="50%"
              innerRadius="38%"
              outerRadius="58%"
              dataKey="value"
              stroke="none"
              onMouseEnter={(_: any, index: number) => setActiveIndex(index)}
              animationDuration={1000}
              className="cursor-pointer outline-none"
            >
              {categorySalesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {categorySalesData.map((entry, index) => (
          <button
            key={entry.name}
            onMouseEnter={() => setActiveIndex(index)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium transition-all duration-150 cursor-pointer ${
              activeIndex === index
                ? "border-transparent text-white"
                : "bg-neutral-50 dark:bg-neutral-800/50 border-neutral-200 dark:border-neutral-700/60 text-neutral-500 dark:text-neutral-400"
            }`}
            style={
              activeIndex === index
                ? { backgroundColor: entry.color, borderColor: entry.color }
                : {}
            }
          >
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: activeIndex === index ? "#fff" : entry.color }}
            />
            {entry.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export const GaugeChart: React.FC<PieChartProps> = ({ height = 280 }) => {
  const score = performanceScoreData[0].value;
  const color = performanceScoreData[0].color as string;

  // Derive label
  const label =
    score >= 90
      ? "EXCELLENT"
      : score >= 75
      ? "GREAT"
      : score >= 60
      ? "GOOD"
      : "NEEDS WORK";

  return (
    <div className="w-full bg-[#0A0A0F] border border-white/[0.06] rounded-3xl p-6 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="text-center mb-2">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Target
            className="w-3.5 h-3.5 text-neutral-500"
            strokeWidth={2.5}
          />
          <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
            Performance Score
          </p>
        </div>
        <p className="text-[13px] text-neutral-500">
          Overall system health metric
        </p>
      </div>

      {/* Gauge */}
      <div style={{ height, width: "100%" }} className="relative mt-[-8px]">
        {/* Center overlay */}
        <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
          <span className="text-[52px] font-bold text-white tracking-tighter leading-none">
            {score}
          </span>
          <span
            className="text-[11px] font-bold tracking-widest mt-1.5"
            style={{ color }}
          >
            {label}
          </span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            {/* Background track */}
            <Pie
              data={[{ value: 100 }]}
              cx="50%"
              cy="70%"
              startAngle={180}
              endAngle={0}
              innerRadius="54%"
              outerRadius="68%"
              dataKey="value"
              stroke="none"
              fill="rgba(255,255,255,0.06)"
              isAnimationActive={false}
            />
            {/* Foreground arc */}
            <Pie
              data={performanceScoreData}
              cx="50%"
              cy="70%"
              startAngle={180}
              endAngle={0}
              innerRadius="54%"
              outerRadius="68%"
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              cornerRadius={8}
              animationDuration={2000}
              animationEasing="ease-out"
            >
              <Cell fill={color} />
              <Cell fill="transparent" />
            </Pie>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>

      {/* Scale labels */}
      <div className="flex justify-between px-8 mt-[-12px]">
        <span className="text-[11px] font-semibold text-neutral-600">0</span>
        <span className="text-[11px] font-semibold text-neutral-600">100</span>
      </div>
    </div>
  );
};

export const WidgetPieChart: React.FC<PieChartProps> = () => {
  const activeValue = widgetMetricData[0].value;
  const inactiveValue = widgetMetricData[1].value;
  const color = widgetMetricData[0].color as string;

  return (
    <div className="w-full max-w-[340px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-5">
      {/* Left: stats */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-2">
          <Activity
            className="w-3.5 h-3.5 text-neutral-400"
            strokeWidth={2.5}
          />
          <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest truncate">
            Retention Rate
          </p>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[32px] font-bold text-neutral-900 dark:text-white leading-none tracking-tighter">
            {activeValue}
          </span>
          <span className="text-[16px] font-bold text-neutral-400">%</span>
        </div>
        <p className="text-[12px] font-medium text-neutral-400 mt-2">
          Active users
        </p>

        {/* Mini legend */}
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-[11px] font-medium text-neutral-500">
              Active {activeValue}%
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <span className="text-[11px] font-medium text-neutral-400">
              Inactive {inactiveValue}%
            </span>
          </div>
        </div>
      </div>

      {/* Right: solid pie */}
      <div className="h-[88px] w-[88px] flex-shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={widgetMetricData}
              cx="50%"
              cy="50%"
              innerRadius="36%"
              outerRadius="50%"
              dataKey="value"
              stroke="none"
              paddingAngle={2}
              animationDuration={1000}
            >
              <Cell fill={color} />
              <Cell fill="currentColor" className="text-neutral-100 dark:text-neutral-800" />
            </Pie>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
