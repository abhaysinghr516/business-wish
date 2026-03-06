"use client";

import React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, TrendingDown, Activity, Layers, PieChart, ArrowUpRight } from "lucide-react";

// --- Types & Dummy Data ---
export interface DataPoint {
  name: string;
  value?: number;
  [key: string]: any;
}

export interface AreaChartProps {
  data?: DataPoint[];
  height?: number;
  color?: string;
}

const totalRevenueData: DataPoint[] = [
  { name: "Jan", revenue: 12000 },
  { name: "Feb", revenue: 15000 },
  { name: "Mar", revenue: 14000 },
  { name: "Apr", revenue: 22000 },
  { name: "May", revenue: 18000 },
  { name: "Jun", revenue: 28000 },
  { name: "Jul", revenue: 31000 },
  { name: "Aug", revenue: 29000 },
  { name: "Sep", revenue: 35000 },
  { name: "Oct", revenue: 42000 },
  { name: "Nov", revenue: 38000 },
  { name: "Dec", revenue: 48000 },
];

const trafficSourceData: DataPoint[] = [
  { name: "Mon", organic: 4200, direct: 2800, referral: 900 },
  { name: "Tue", organic: 5100, direct: 3100, referral: 1100 },
  { name: "Wed", organic: 3800, direct: 2400, referral: 800 },
  { name: "Thu", organic: 6400, direct: 3900, referral: 1500 },
  { name: "Fri", organic: 7200, direct: 4500, referral: 1800 },
  { name: "Sat", organic: 8500, direct: 4100, referral: 2100 },
  { name: "Sun", organic: 6800, direct: 3500, referral: 2400 },
];

const marketShareData: DataPoint[] = [
  { name: "Q1", productA: 4000, productB: 2400, productC: 2400 },
  { name: "Q2", productA: 3000, productB: 1398, productC: 2210 },
  { name: "Q3", productA: 2000, productB: 9800, productC: 2290 },
  { name: "Q4", productA: 2780, productB: 3908, productC: 2000 },
  { name: "Q5", productA: 1890, productB: 4800, productC: 2181 },
  { name: "Q6", productA: 2390, productB: 3800, productC: 2500 },
  { name: "Q7", productA: 3490, productB: 4300, productC: 2100 },
];

const widgetMetricData: DataPoint[] = [
  { name: "00:00", value: 120 },
  { name: "04:00", value: 150 },
  { name: "08:00", value: 110 },
  { name: "12:00", value: 180 },
  { name: "16:00", value: 210 },
  { name: "20:00", value: 250 },
  { name: "24:00", value: 220 },
];

// Preprocessing: convert raw values to percentages for the 100% stacked chart
const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;
  return Number((ratio * 100).toFixed(0));
};

const processedMarketData = marketShareData.map((item) => {
  const total =
    (item.productA as number) +
    (item.productB as number) +
    (item.productC as number);
  return {
    ...item,
    ProductAPercent: getPercent(item.productA as number, total),
    ProductBPercent: getPercent(item.productB as number, total),
    ProductCPercent: getPercent(item.productC as number, total),
  };
});

// --- Custom Tooltip ---
// NOTE: Uses a stable numeric prefix on gradient IDs — no two charts share the same SVG IDs.
const CustomTooltip = ({
  active,
  payload,
  label,
  prefix = "",
  suffix = "",
}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-3 rounded-2xl shadow-lg shadow-neutral-200/60 dark:shadow-black/40 min-w-[150px]">
        <p className="text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 mb-2 tracking-widest uppercase">
          {label}
        </p>
        <div className="flex flex-col gap-1.5">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2.5">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400 capitalize flex-1">
                {entry.name}
              </span>
              <span className="text-[13px] font-bold text-neutral-900 dark:text-white tabular-nums">
                {prefix}
                {typeof entry.value === "number"
                  ? entry.value.toLocaleString()
                  : entry.value}
                {suffix}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const PercentTooltip = (props: any) => (
  <CustomTooltip {...props} suffix="%" />
);

const DollarTooltip = (props: any) => (
  <CustomTooltip {...props} prefix="$" />
);


export const BasicAreaChart: React.FC<AreaChartProps> = ({
  height = 320,
  color = "#007AFF",
}) => {
  const total = totalRevenueData.reduce((s, d) => s + (d.revenue as number), 0);
  const prev = totalRevenueData.slice(0, 6).reduce((s, d) => s + (d.revenue as number), 0);
  const curr = totalRevenueData.slice(6).reduce((s, d) => s + (d.revenue as number), 0);
  const delta = ((curr - prev) / prev) * 100;
  const isUp = delta >= 0;

  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2.5} />
            <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
              Total Revenue
            </p>
          </div>
          <h3 className="text-[28px] font-bold text-neutral-900 dark:text-white tracking-tighter leading-none">
            ${(total / 1000).toFixed(0)}k
          </h3>
          <p className="text-[13px] text-neutral-400 mt-1">Annual performance</p>
        </div>
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold ${
            isUp
              ? "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          {isUp ? (
            <TrendingUp className="w-3.5 h-3.5" strokeWidth={2.5} />
          ) : (
            <TrendingDown className="w-3.5 h-3.5" strokeWidth={2.5} />
          )}
          <span>{Math.abs(delta).toFixed(1)}% H2 vs H1</span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={totalRevenueData}
            margin={{ top: 8, right: 4, left: -24, bottom: 0 }}
          >
            <defs>
              <linearGradient id="ac-basic-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.18} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-neutral-200 dark:text-neutral-800"
              strokeOpacity={0.8}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8E8E93", fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8E8E93", fontWeight: 500 }}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip
              content={<DollarTooltip />}
              cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.4 }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke={color}
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#ac-basic-fill)"
              animationDuration={1400}
              animationEasing="ease-out"
              activeDot={{ r: 5, fill: color, stroke: "#fff", strokeWidth: 2.5 }}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const StackedAreaChart: React.FC<AreaChartProps> = ({ height = 320 }) => {
  const legend = [
    { key: "organic", label: "Organic", color: "#3B82F6" },
    { key: "direct", label: "Direct", color: "#818CF8" },
    { key: "referral", label: "Referral", color: "#C084FC" },
  ];

  return (
    <div className="w-full bg-[#0A0A0F] border border-white/[0.06] rounded-3xl p-6 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-3.5 h-3.5 text-neutral-500" strokeWidth={2.5} />
            <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
              Traffic Sources
            </p>
          </div>
          <h3 className="text-[22px] font-bold text-white tracking-tight leading-tight">
            Acquisition Channels
          </h3>
          <p className="text-[13px] text-neutral-500 mt-1">Weekly distribution</p>
        </div>
        {/* Legend pills */}
        <div className="flex flex-wrap gap-2">
          {legend.map((l) => (
            <div
              key={l.key}
              className="flex items-center gap-1.5 bg-white/5 border border-white/[0.07] px-2.5 py-1 rounded-full"
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: l.color }}
              />
              <span className="text-[11px] font-medium text-neutral-400">
                {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ height, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={trafficSourceData}
            margin={{ top: 8, right: 4, left: -24, bottom: 0 }}
          >
            <defs>
              <linearGradient id="ac-stk-organic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="ac-stk-direct" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818CF8" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#818CF8" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="ac-stk-referral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C084FC" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#C084FC" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ffffff"
              strokeOpacity={0.04}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#525252", fontWeight: 500 }}
              dy={12}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#525252", fontWeight: 500 }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : String(v))}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#ffffff", strokeWidth: 1, strokeOpacity: 0.08 }}
            />
            <Area
              type="monotone"
              dataKey="organic"
              stackId="1"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#ac-stk-organic)"
              activeDot={{ r: 4, strokeWidth: 0, fill: "#3B82F6" }}
              animationDuration={1000}
            />
            <Area
              type="monotone"
              dataKey="direct"
              stackId="1"
              stroke="#818CF8"
              strokeWidth={2}
              fill="url(#ac-stk-direct)"
              activeDot={{ r: 4, strokeWidth: 0, fill: "#818CF8" }}
              animationDuration={1000}
              animationBegin={100}
            />
            <Area
              type="monotone"
              dataKey="referral"
              stackId="1"
              stroke="#C084FC"
              strokeWidth={2}
              fill="url(#ac-stk-referral)"
              activeDot={{ r: 4, strokeWidth: 0, fill: "#C084FC" }}
              animationDuration={1000}
              animationBegin={200}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const PercentAreaChart: React.FC<AreaChartProps> = ({ height = 320 }) => {
  const legend = [
    { key: "ProductAPercent", label: "Product A", color: "#10B981" },
    { key: "ProductBPercent", label: "Product B", color: "#14B8A6" },
    { key: "ProductCPercent", label: "Product C", color: "#06B6D4" },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <PieChart className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2.5} />
            <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
              Market Share
            </p>
          </div>
          <h3 className="text-[22px] font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
            Product Dominance
          </h3>
          <p className="text-[13px] text-neutral-400 mt-1">
            Relative share over 7 quarters
          </p>
        </div>
        {/* Legend pills */}
        <div className="flex flex-wrap gap-2">
          {legend.map((l) => (
            <div
              key={l.key}
              className="flex items-center gap-1.5 bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 px-2.5 py-1 rounded-full"
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: l.color }}
              />
              <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ height, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={processedMarketData}
            margin={{ top: 8, right: 4, left: -24, bottom: 0 }}
          >
            <defs>
              <linearGradient id="ac-pct-a" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0.15} />
              </linearGradient>
              <linearGradient id="ac-pct-b" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14B8A6" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#14B8A6" stopOpacity={0.15} />
              </linearGradient>
              <linearGradient id="ac-pct-c" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.7} />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity={0.15} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-neutral-200 dark:text-neutral-800"
              strokeOpacity={0.8}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8E8E93", fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8E8E93", fontWeight: 500 }}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 100]}
            />
            <Tooltip
              content={<PercentTooltip />}
              cursor={{ stroke: "#10B981", strokeWidth: 1, strokeDasharray: "4 4", strokeOpacity: 0.3 }}
            />
            <Area
              type="monotone"
              dataKey="ProductAPercent"
              stackId="1"
              name="Product A"
              stroke="#10B981"
              strokeWidth={1.5}
              fill="url(#ac-pct-a)"
              animationDuration={1000}
            />
            <Area
              type="monotone"
              dataKey="ProductBPercent"
              stackId="1"
              name="Product B"
              stroke="#14B8A6"
              strokeWidth={1.5}
              fill="url(#ac-pct-b)"
              animationDuration={1000}
              animationBegin={100}
            />
            <Area
              type="monotone"
              dataKey="ProductCPercent"
              stackId="1"
              name="Product C"
              stroke="#06B6D4"
              strokeWidth={1.5}
              fill="url(#ac-pct-c)"
              animationDuration={1000}
              animationBegin={200}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const WidgetAreaChart: React.FC<AreaChartProps> = ({
  color = "#8B5CF6",
}) => {
  const latestValue = widgetMetricData[widgetMetricData.length - 1].value as number;
  const prevValue = widgetMetricData[widgetMetricData.length - 2].value as number;
  const isUp = latestValue >= prevValue;
  const delta = (((latestValue - prevValue) / prevValue) * 100).toFixed(1);

  return (
    <div className="w-full max-w-[340px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl pt-5 pb-0 px-5 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Top info row */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Activity className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2.5} />
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest">
              Active Users
            </p>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[32px] font-bold text-neutral-900 dark:text-white leading-none tracking-tighter">
              {latestValue}
            </span>
            <span className="text-[13px] font-medium text-neutral-400">/hr</span>
          </div>
        </div>
        <div
          className={`flex items-center gap-1 text-[11px] font-semibold mt-1 px-2 py-1 rounded-full ${
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

      {/* Sparkline — bleeds to edges */}
      <div className="h-[88px] w-[calc(100%+40px)] -mx-5">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart
            data={widgetMetricData}
            margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="ac-widget-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.22} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis domain={["dataMin - 20", "dataMax + 20"]} hide />
            <Tooltip
              cursor={{ stroke: color, strokeWidth: 1, strokeOpacity: 0.3 }}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                fontSize: "12px",
                fontWeight: 600,
                padding: "6px 10px",
              }}
              itemStyle={{ color: "#171717" }}
              labelStyle={{ display: "none" }}
              formatter={(value: any) => [`${value}`, "Users"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#ac-widget-fill)"
              activeDot={{ r: 4, fill: "#fff", stroke: color, strokeWidth: 2 }}
              animationDuration={800}
              dot={false}
            />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
