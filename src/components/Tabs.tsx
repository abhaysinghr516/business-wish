"use client";
import { useState } from "react";

export const BasicTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="flex gap-6 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-2 py-2 text-[15px] font-medium transition-colors duration-300 relative tracking-wide
              ${
                activeTab === tab
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-neutral-900 dark:bg-white rounded-full transition-all duration-300" />
            )}
          </button>
        ))}
        {/* Subtle background track for context */}
        <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-neutral-200/50 dark:bg-neutral-800/50 -z-10" />
      </div>
    </div>
  );
};

export const TabswithUnderline: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="flex border-b border-neutral-200/60 dark:border-white/10 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 pb-4 text-[14px] font-semibold tracking-tight transition-all duration-300 relative
              ${
                activeTab === tab
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-[-1px] left-0 right-0 mx-auto w-full h-[2px] bg-neutral-900 dark:bg-white rounded-t-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export const TabswithBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2.5 text-[14px] font-medium rounded-xl transition-all duration-300 border
              ${
                activeTab === tab
                  ? "bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                  : "bg-white text-neutral-600 border-neutral-200/80 hover:border-neutral-300 dark:bg-[#0A0A0A] dark:text-neutral-400 dark:border-white/10 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-neutral-900"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export const VerticalMinimalTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

  return (
    <div className="w-full max-w-2xl mx-auto py-8 flex gap-12">
      <div className="flex flex-col relative min-w-[140px]">
        {/* Subtle vertical track */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-neutral-100 dark:bg-neutral-800/50 rounded-full z-0" />
        
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex items-center text-left pl-6 py-4 text-[14px] font-medium transition-all duration-300 relative z-10
              ${
                activeTab === tab
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 top-0 bottom-0 my-auto w-[2px] h-full bg-neutral-900 dark:bg-white rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
            )}
          </button>
        ))}
      </div>
      <div className="flex-1 p-6 bg-neutral-50 dark:bg-neutral-900/30 rounded-2xl border border-neutral-100 dark:border-white/5 flex items-center justify-center text-neutral-500 dark:text-neutral-400 text-sm">
        Content for {activeTab}
      </div>
    </div>
  );
};