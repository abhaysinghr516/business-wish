"use client";
import { useState } from "react";

export const BasicTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "text-blue-600 font-semibold dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
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

export const TabswithUnderline: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <div className="flex space-x-4 border-b dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold dark:border-blue-400 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
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

export const TabswithPill: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-full dark:bg-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab
                ? "bg-white shadow text-blue-600 font-semibold dark:bg-gray-700 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300"
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

export const TabswithBox: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];

  return (
    <div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`px-4 py-2 border-t border-b border-r dark:border-gray-700 ${
              index === 0 ? "rounded-l border-l" : ""
            } ${index === tabs.length - 1 ? "rounded-r" : ""} ${
              activeTab === tab
                ? "bg-blue-600 text-white font-semibold dark:bg-blue-500 dark:text-gray-300"
                : "bg-white text-gray-600 dark:bg-gray-800 dark:text-gray-300"
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
