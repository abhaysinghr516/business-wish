"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Home, User, Settings, Bell, Shield, Folder } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface SlidingTabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
  tabClassName?: string;
  highlightClassName?: string;
  variant?: "pill" | "underline";
}

export const SlidingTabs: React.FC<SlidingTabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = "",
  tabClassName = "",
  highlightClassName = "",
  variant = "pill",
}) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "relative flex items-center gap-1 p-1 rounded-xl bg-stone-100/80 dark:bg-stone-900/50 border border-stone-200/50 dark:border-stone-800/50 w-fit z-0",
        variant === "underline" && "bg-transparent border-none rounded-none p-0 gap-6 border-b border-stone-200 dark:border-stone-800/80 w-full justify-start",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const isHovered = hoveredTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 outline-none select-none flex items-center gap-2",
              isActive
                ? "text-stone-900 dark:text-white"
                : "text-stone-500 hover:text-stone-700 dark:hover:text-stone-300",
              variant === "underline" && "px-1 pb-3 pt-2 text-sm font-medium rounded-none border-b-2 border-transparent",
              tabClassName
            )}
          >
            {/* Hover Highlight (Pill variant only) */}
            {variant === "pill" && isHovered && !isActive && (
              <motion.span
                layoutId="hover-highlight"
                className="absolute inset-0 rounded-lg bg-stone-200/50 dark:bg-stone-800/30 -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}

            {/* Active Highlight */}
            {isActive && (
              <motion.span
                layoutId={`active-highlight-${variant}`}
                className={cn(
                  "absolute inset-0 rounded-lg bg-white dark:bg-stone-950 shadow-sm border border-stone-200/30 dark:border-stone-750/30 -z-10",
                  variant === "underline" && "absolute left-0 right-0 bottom-0 top-auto h-[2px] rounded-none bg-[#FF3903] shadow-none border-none z-10",
                  highlightClassName
                )}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-1.5">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

/* ── Stateful Demo ── */
export const SlidingTabsDemo: React.FC = () => {
  const [activeTab1, setActiveTab1] = useState("home");
  const [activeTab2, setActiveTab2] = useState("overview");

  const demoTabs1: Tab[] = [
    { id: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Folder className="h-4 w-4" /> },
    { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" /> },
  ];

  const demoTabs2: Tab[] = [
    { id: "overview", label: "Overview" },
    { id: "security", label: "Security", icon: <Shield className="h-4 w-4" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 py-8 w-full max-w-4xl px-4 justify-center items-stretch">
      {/* Pill Variant */}
      <div className="flex flex-col items-center gap-4 flex-1 border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 rounded-2xl shadow-sm">
        <span className="text-[10px] text-stone-400 font-mono font-semibold tracking-wider uppercase">Variant: Pill Style</span>
        <SlidingTabs
          tabs={demoTabs1}
          activeTab={activeTab1}
          onChange={setActiveTab1}
        />
        
        {/* Animated Container */}
        <div className="w-full mt-4 h-48 relative overflow-hidden bg-stone-50 dark:bg-stone-950/60 rounded-xl border border-stone-150 dark:border-stone-850 p-5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab1}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex-1 flex flex-col justify-between"
            >
              {activeTab1 === "home" && (
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Dashboard Hub</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">Welcome back! Here is a summary of your workspace activities and deployments.</p>
                  <div className="flex gap-2 mt-4">
                    <div className="h-2 w-12 bg-[#FF3903] rounded-full" />
                    <div className="h-2 w-8 bg-stone-300 dark:bg-stone-700 rounded-full" />
                  </div>
                </div>
              )}
              {activeTab1 === "profile" && (
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">User Identity</h4>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="h-10 w-10 rounded-full bg-[#FF3903]/10 flex items-center justify-center text-xs font-semibold text-[#FF3903]">AS</div>
                    <div>
                      <p className="text-xs font-semibold text-stone-900 dark:text-stone-100">Abhay Singh</p>
                      <p className="text-[10px] text-stone-400">abhay@businesswish.tech</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab1 === "projects" && (
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Repository Assets</h4>
                  <ul className="text-xs text-stone-500 mt-2.5 space-y-1.5 font-mono">
                    <li className="flex items-center gap-1.5">📂 src/components</li>
                    <li className="flex items-center gap-1.5">📂 src/app/motion</li>
                  </ul>
                </div>
              )}
              {activeTab1 === "settings" && (
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Configuration Preferences</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">Customize your dynamic presets, animation easing, and default notification bounds.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="text-[10px] font-mono text-stone-400 dark:text-stone-600 border-t border-stone-200/50 dark:border-stone-800/50 pt-2.5 mt-auto">
            PANEL_INDEX // {activeTab1.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Underline Variant */}
      <div className="flex flex-col items-center gap-4 flex-1 border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 p-6 rounded-2xl shadow-sm">
        <span className="text-[10px] text-stone-400 font-mono font-semibold tracking-wider uppercase">Variant: Underline Style</span>
        <SlidingTabs
          tabs={demoTabs2}
          activeTab={activeTab2}
          onChange={setActiveTab2}
          variant="underline"
        />
        
        {/* Animated Container */}
        <div className="w-full mt-4 h-48 relative overflow-hidden bg-stone-50 dark:bg-stone-950/60 rounded-xl border border-stone-150 dark:border-stone-850 p-5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab2}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.18 }}
              className="flex-1 flex flex-col justify-between"
            >
              {activeTab2 === "overview" && (
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">System Overview</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">API Server is active. Latency: 14ms. Zero package failures detected over the last 24h.</p>
                </div>
              )}
              {activeTab2 === "security" && (
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Security Matrix</h4>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-stone-400">2FA STATUS</span>
                      <span className="text-emerald-500 font-semibold">ENABLED</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-stone-400">SSL CERT</span>
                      <span className="text-blue-500 font-semibold">VALID</span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab2 === "notifications" && (
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Preferences</h4>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">Email digests: Daily. Slack alerts: Realtime. Critical errors are dispatched directly to pager.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="text-[10px] font-mono text-stone-400 dark:text-stone-600 border-t border-stone-200/50 dark:border-stone-800/50 pt-2.5 mt-auto">
            PANEL_INDEX // {activeTab2.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
