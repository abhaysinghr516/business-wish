"use client";
import { CheckCircle, Heart, Home, Search, User } from "lucide-react";
import React, { useState } from "react";

const FloatingAlert: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home },
    { id: "search", icon: Search },
    { id: "favorites", icon: Heart },
    { id: "profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-4 ${
              activeTab === tab.id ? "text-blue-500" : "text-gray-400"
            }`}
          >
            <tab.icon className="h-6 w-6" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default FloatingAlert;
