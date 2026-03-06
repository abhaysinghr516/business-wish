"use client";

import React from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Globe,
  Smartphone,
  Activity,
  ArrowUpRight,
} from "lucide-react";

// --- Types & Data ---
export interface DataPoint {
  name: string;
  value?: number;
  [key: string]: any;
}

export interface BarChartProps {
  data?: DataPoint[];
  height?: number;
  color?: string;
}

const monthlyVisitorsData: DataPoint[] = [
  { name: "Jan", visitors: 4200 },
  { name: "Feb", visitors: 3100 },
  { name: "Mar", visitors: 5800 },
  { name: "Apr", visitors: 2400 },
  { name: "May", visitors: 6500 },
  { name: "Jun", visitors: 4800 },
  { name: "Jul", visitors: 8100 },
  { name: "Aug", visitors: 6900 },
  { name: "Sep", visitors: 8500 },
  { name: "Oct", visitors: 7200 },
  { name: "Nov", visitors: 9100 },
  { name: "Dec", visitors: 10500 },
];

const topCountriesData: DataPoint[] = [
  { name: "United States", users: 12450 },
  { name: "United Kingdom", users: 8230 },
  { name: "Canada", users: 6500 },
  { name: "Germany", users: 5120 },
  { name: "Australia", users: 4800 },
  { name: "Japan", users: 4100 },
];

const deviceTrafficData: DataPoint[] = [
  { name: "Mon", mobile: 4200, desktop: 2800, tablet: 900 },
  { name: "Tue", mobile: 5100, desktop: 3100, tablet: 1100 },
  { name: "Wed", mobile: 3800, desktop: 2400, tablet: 800 },
  { name: "Thu", mobile: 6400, desktop: 3900, tablet: 1500 },
  { name: "Fri", mobile: 7200, desktop: 4500, tablet: 1800 },
  { name: "Sat", mobile: 8500, desktop: 4100, tablet: 2100 },
  { name: "Sun", mobile: 6800, desktop: 3500, tablet: 2400 },
];

const widgetMetricData: DataPoint[] = [
  { name: "M", value: 120 },
  { name: "T", value: 150 },
  { name: "W", value: 110 },
  { name: "T", value: 180 },
  { name: "F", value: 210 },
  { name: "S", value: 250 },
  { name: "S", value: 220 },
];

// --- Shared Custom Tooltip ---
const CustomTooltip = ({ active, payload, label }: any) => {
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
                style={{ backgroundColor: entry.color || entry.fill }}
              />
              <span className="text-[13px] font-medium text-neutral-500 dark:text-neutral-400 capitalize flex-1">
                {entry.name}
              </span>
              <span className="text-[13px] font-bold text-neutral-900 dark:text-white tabular-nums">
                {typeof entry.value === "number"
                  ? entry.value.toLocaleString()
                  : entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const BasicBarChart: React.FC<BarChartProps> = ({
  height = 320,
  color = "#3B82F6",
}) => {
  const total = monthlyVisitorsData.reduce(
    (s, d) => s + (d.visitors as number),
    0
  );
  const h1 = monthlyVisitorsData
    .slice(0, 6)
    .reduce((s, d) => s + (d.visitors as number), 0);
  const h2 = monthlyVisitorsData
    .slice(6)
    .reduce((s, d) => s + (d.visitors as number), 0);
  const delta = ((h2 - h1) / h1) * 100;
  const isUp = delta >= 0;
  const maxVal = Math.max(
    ...monthlyVisitorsData.map((d) => d.visitors as number)
  );

  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users
              className="w-3.5 h-3.5 text-neutral-400"
              strokeWidth={2.5}
            />
            <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
              Monthly Visitors
            </p>
          </div>
          <h3 className="text-[28px] font-bold text-neutral-900 dark:text-white tracking-tighter leading-none">
            {(total / 1000).toFixed(1)}k
          </h3>
          <p className="text-[13px] text-neutral-400 mt-1">
            Unique traffic this year
          </p>
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
          <RechartsBarChart
            data={monthlyVisitorsData}
            margin={{ top: 8, right: 4, left: -24, bottom: 0 }}
          >
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
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : String(v))}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: color, fillOpacity: 0.04 }}
            />
            <Bar
              dataKey="visitors"
              radius={[5, 5, 0, 0]}
              barSize={22}
              animationDuration={1400}
              animationEasing="ease-out"
            >
              {monthlyVisitorsData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    (entry.visitors as number) === maxVal
                      ? color
                      : `${color}55`
                  }
                />
              ))}
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const HorizontalBarChart: React.FC<BarChartProps> = ({
  height = 320,
  color = "#8B5CF6",
}) => {
  const maxUsers = Math.max(
    ...topCountriesData.map((d) => d.users as number)
  );

  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Globe className="w-3.5 h-3.5 text-neutral-400" strokeWidth={2.5} />
          <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
            Top Geographies
          </p>
        </div>
        <h3 className="text-[22px] font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
          User Distribution
        </h3>
        <p className="text-[13px] text-neutral-400 mt-1">By country, all time</p>
      </div>

      {/* Chart */}
      <div style={{ height, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={topCountriesData}
            layout="vertical"
            margin={{ top: 0, right: 56, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="currentColor"
              className="text-neutral-200 dark:text-neutral-800"
              strokeOpacity={0.8}
            />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#8E8E93", fontWeight: 500 }}
              tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : String(v))}
            />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#525252", fontWeight: 500 }}
              width={108}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: color, fillOpacity: 0.04 }}
            />
            <Bar
              dataKey="users"
              radius={[0, 5, 5, 0]}
              barSize={18}
              animationDuration={1400}
              animationBegin={100}
              label={{
                position: "right",
                formatter: (v) => {
                  const n = Number(v);
                  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
                },
                fontSize: 11,
                fontWeight: 600,
                fill: "#8E8E93",
              }}
            >
              {topCountriesData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    (entry.users as number) === maxUsers
                      ? color
                      : `${color}55`
                  }
                />
              ))}
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const StackedBarChart: React.FC<BarChartProps> = ({ height = 320 }) => {
  const legend = [
    { key: "mobile", label: "Mobile", color: "#3B82F6" },
    { key: "desktop", label: "Desktop", color: "#818CF8" },
    { key: "tablet", label: "Tablet", color: "#C084FC" },
  ];

  return (
    <div className="w-full bg-[#0A0A0F] border border-white/[0.06] rounded-3xl p-6 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Smartphone
              className="w-3.5 h-3.5 text-neutral-500"
              strokeWidth={2.5}
            />
            <p className="text-[12px] font-semibold text-neutral-500 uppercase tracking-widest">
              Device Traffic
            </p>
          </div>
          <h3 className="text-[22px] font-bold text-white tracking-tight leading-tight">
            Platform Breakdown
          </h3>
          <p className="text-[13px] text-neutral-500 mt-1">
            Last 7 days by device type
          </p>
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
          <RechartsBarChart
            data={deviceTrafficData}
            margin={{ top: 8, right: 4, left: -24, bottom: 0 }}
          >
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
              cursor={{ fill: "#ffffff", fillOpacity: 0.04 }}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="#3B82F6"
              radius={[0, 0, 4, 4]}
              barSize={28}
              animationDuration={1000}
            />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="#818CF8"
              animationDuration={1000}
              animationBegin={100}
            />
            <Bar
              dataKey="tablet"
              stackId="a"
              fill="#C084FC"
              radius={[4, 4, 0, 0]}
              animationDuration={1000}
              animationBegin={200}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const WidgetBarChart: React.FC<BarChartProps> = ({
  color = "#F59E0B",
}) => {
  const latestValue = widgetMetricData[widgetMetricData.length - 1]
    .value as number;
  const prevValue = widgetMetricData[widgetMetricData.length - 2]
    .value as number;
  const isUp = latestValue >= prevValue;
  const delta = (((latestValue - prevValue) / prevValue) * 100).toFixed(1);

  return (
    <div className="w-full max-w-[340px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl pt-5 pb-4 px-5 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Top info row */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Activity
              className="w-3.5 h-3.5 text-neutral-400"
              strokeWidth={2.5}
            />
            <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest">
              Acquisitions
            </p>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[32px] font-bold text-neutral-900 dark:text-white leading-none tracking-tighter">
              {latestValue}
            </span>
            <span className="text-[13px] font-medium text-neutral-400">
              this week
            </span>
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

      {/* Sparkline bars */}
      <div className="h-[72px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={widgetMetricData}
            margin={{ top: 4, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip
              cursor={{ fill: color, fillOpacity: 0.06 }}
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
              formatter={(value: any) => [`${value}`, "New"]}
            />
            <Bar
              dataKey="value"
              radius={[4, 4, 4, 4]}
              barSize={20}
              animationDuration={800}
            >
              {widgetMetricData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    index === widgetMetricData.length - 1
                      ? color
                      : `${color}40`
                  }
                />
              ))}
            </Bar>
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
