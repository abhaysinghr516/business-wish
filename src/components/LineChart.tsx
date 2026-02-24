"use client";
import React, { useMemo } from "react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
  ReferenceLine
} from "recharts";
import { TrendingUp, TrendingDown, ArrowUpRight, Activity } from "lucide-react";

// Types
export interface DataPoint {
  name: string;
  value?: number;
  [key: string]: any;
}

export interface LineChartProps {
  data: DataPoint[];
  height?: number;
  color?: string;
}

// Sample Data
export const revenueData: DataPoint[] = [
  { name: "Jan", value: 12000 },
  { name: "Feb", value: 15000 },
  { name: "Mar", value: 14000 },
  { name: "Apr", value: 22000 },
  { name: "May", value: 18000 },
  { name: "Jun", value: 28000 },
  { name: "Jul", value: 31000 },
  { name: "Aug", value: 29000 },
  { name: "Sep", value: 35000 },
  { name: "Oct", value: 42000 },
  { name: "Nov", value: 38000 },
  { name: "Dec", value: 48000 },
];

export const multiMetricData: DataPoint[] = [
  { name: "Mon", income: 4200, expenses: 2400 },
  { name: "Tue", income: 5100, expenses: 2800 },
  { name: "Wed", income: 3800, expenses: 1900 },
  { name: "Thu", income: 6400, expenses: 3100 },
  { name: "Fri", income: 7200, expenses: 4800 },
  { name: "Sat", income: 8500, expenses: 5200 },
  { name: "Sun", income: 6800, expenses: 3800 },
];

export const performanceData: DataPoint[] = [
  { name: "00:00", ms: 45 },
  { name: "04:00", ms: 52 },
  { name: "08:00", ms: 38 },
  { name: "12:00", ms: 85 },
  { name: "16:00", ms: 65 },
  { name: "20:00", ms: 42 },
  { name: "24:00", ms: 48 },
];

// Custom Tooltip Components
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-white/10 p-3 rounded-xl shadow-xl shadow-neutral-200/50 dark:shadow-black/50 overflow-hidden transform transition-all">
        <p className="text-[12px] font-semibold text-neutral-500 mb-1 tracking-tight uppercase">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-3 mt-1">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-[14px] font-medium text-neutral-600 dark:text-neutral-400">
              {entry.name}:
            </span>
            <span className="text-[14px] font-bold text-neutral-900 dark:text-white ml-auto">
              {entry.name.toLowerCase().includes('value') || entry.name.toLowerCase().includes('income') || entry.name.toLowerCase().includes('expenses') 
                ? `$${entry.value.toLocaleString()}` 
                : entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export const BasicLineChart: React.FC<LineChartProps> = ({ 
  data = revenueData, 
  height = 300, 
  color = "#007AFF" 
}) => {
  return (
    <div className="w-full bg-white dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/10 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white tracking-tight">Revenue Overview</h3>
          <p className="text-[13px] text-neutral-500 mt-1">Monthly performance</p>
        </div>
        <div className="flex items-center gap-2 bg-green-50 dark:bg-green-500/10 px-3 py-1.5 rounded-full">
          <TrendingUp className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
          <span className="text-[12px] font-semibold text-green-600 dark:text-green-400">+24.5%</span>
        </div>
      </div>
      
      <div style={{ height: height, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5EA" strokeOpacity={0.5} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#8E8E93' }} 
              dy={10} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#8E8E93' }}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#E5E5EA', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Line 
              type="monotone" 
              dataKey="value" 
              name="Revenue"
              stroke={color} 
              strokeWidth={3} 
              dot={false}
              activeDot={{ r: 6, fill: color, stroke: '#fff', strokeWidth: 3, className: 'drop-shadow-md' }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const GradientAreaChart: React.FC<LineChartProps> = ({ 
  data = multiMetricData, 
  height = 350 
}) => {
  return (
    <div className="w-full bg-neutral-950 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
      {/* Decorative blurred background orb */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-700" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-[18px] font-bold text-white tracking-tight flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            Cash Flow Analytics
          </h3>
          <p className="text-[14px] text-neutral-400 mt-1">Income vs Expenses over the past week</p>
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-[12px] font-medium text-neutral-300">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/40" />
            <span className="text-[12px] font-medium text-neutral-300">Expenses</span>
          </div>
        </div>
      </div>
      
      <div style={{ height: height, width: '100%' }} className="relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff" strokeOpacity={0.05} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#737373' }} 
              dy={15} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#737373' }}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff', opacity: 0.05 }} />
            
            <Area 
              type="monotone" 
              dataKey="income" 
              stroke="none" 
              fillOpacity={1} 
              fill="url(#colorIncome)" 
            />
            <Line 
              type="monotone" 
              dataKey="income" 
              name="Income"
              stroke="#3B82F6" 
              strokeWidth={3} 
              dot={false}
              activeDot={{ r: 6, fill: "#3B82F6", stroke: '#0a0a0a', strokeWidth: 4 }}
              animationDuration={2000}
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              name="Expenses"
              stroke="#6366f1" 
              strokeWidth={2}
              strokeOpacity={0.6}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 4, fill: "#6366f1", stroke: '#0a0a0a', strokeWidth: 2 }}
              animationDuration={2000}
              animationBegin={500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const SparklineWidget: React.FC<LineChartProps> = ({ 
  data = performanceData, 
  color = "#ff3b30" 
}) => {
  const latestValue = data[data.length - 1].ms;
  const previousValue = data[data.length - 2].ms;
  const isUp = (latestValue as number) > (previousValue as number);

  return (
    <div className="w-full max-w-sm bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[13px] font-medium text-neutral-500 uppercase tracking-wider mb-1">API Latency</p>
          <div className="flex items-baseline gap-2">
            <h4 className="text-[28px] font-bold text-neutral-900 dark:text-white leading-none tracking-tighter">
              {latestValue}
            </h4>
            <span className="text-[14px] font-medium text-neutral-500">ms</span>
          </div>
        </div>
        <div className={`flex items-center gap-1 text-[13px] font-semibold ${isUp ? 'text-red-500' : 'text-green-500'}`}>
          {isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
          <span>{Math.abs((latestValue as number) - (previousValue as number))}ms</span>
        </div>
      </div>

      <div className="h-20 w-full relative">
        {/* Soft, glowing shadow effect for the line itself */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none filter blur-md">
           <ResponsiveContainer width="100%" height="100%">
            <RechartsLineChart data={data}>
              <Line type="monotone" dataKey="ms" stroke={color} strokeWidth={4} dot={false} isAnimationActive={false} />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', fontSize: '12px', fontWeight: 600 }}
              itemStyle={{ color: '#171717' }}
              cursor={{ stroke: '#e5e5e5', strokeWidth: 1 }}
              labelStyle={{ display: 'none' }}
              formatter={(value: any) => [`${value} ms`, 'Lat']}
            />
            <Line 
              type="monotone" 
              dataKey="ms" 
              stroke={color} 
              strokeWidth={2.5} 
              dot={false}
              activeDot={{ r: 5, fill: '#fff', stroke: color, strokeWidth: 2 }}
              animationDuration={1000}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};