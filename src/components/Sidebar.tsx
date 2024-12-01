"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  Home,
  LayoutDashboard,
  Menu,
  Users,
  Settings,
  Bell,
} from "lucide-react";

export const BasicSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex flex-col w-72 bg-white dark:bg-gray-900 h-screen justify-between border-r border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="overflow-y-auto">
        <div className="px-6 py-8">
          <div className="flex items-center mb-8">
            <span className="font-semibold text-2xl bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Fusion
            </span>
          </div>
          <div className="space-y-1">
            {["Dashboard", "Projects", "Team", "Reports"].map((item) => (
              <div
                key={item}
                className={`cursor-pointer flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeItem === item
                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setActiveItem(item)}
              >
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <img
            className="object-cover rounded-full h-10 w-10 ring-2 ring-gray-100 dark:ring-gray-800"
            src="/api/placeholder/40/40"
            alt="avatar"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              John Doe
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Product Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SidebarwithIcons: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Team", icon: Users },
    { name: "Settings", icon: Settings },
    { name: "Notifications", icon: Bell },
  ];

  return (
    <div className="flex flex-col w-72 bg-white dark:bg-gray-900 h-screen justify-between border-r border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="overflow-y-auto">
        <div className="px-6 py-8">
          <div className="flex items-center mb-8">
            <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mr-3" />
            <span className="font-semibold text-xl text-gray-800 dark:text-gray-200">
              Fusion
            </span>
          </div>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={`cursor-pointer flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                  activeItem === item.name
                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                <item.icon
                  className={`w-5 h-5 transition-colors ${
                    activeItem === item.name
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                  }`}
                />
                <span className="ml-3 text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <img
            className="object-cover rounded-full h-10 w-10 ring-2 ring-gray-100 dark:ring-gray-800"
            src="/api/placeholder/40/40"
            alt="avatar"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              John Doe
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Product Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CollapseSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Team", icon: Users },
    { name: "Settings", icon: Settings },
    { name: "Notifications", icon: Bell },
  ];

  return (
    <div
      className={`flex flex-col bg-white dark:bg-gray-900 h-screen border-r border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-72"
      }`}
    >
      <div className="flex items-center justify-between p-6">
        {!isCollapsed && (
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mr-3" />
            <span className="font-semibold text-xl text-gray-800 dark:text-gray-200">
              Fusion
            </span>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-gray-500 dark:text-gray-400"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <div className="flex-grow overflow-y-auto py-4">
        <nav className="px-4 space-y-1">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center cursor-pointer rounded-xl transition-all duration-200 group ${
                activeItem === item.name
                  ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              } ${isCollapsed ? "p-3 justify-center" : "px-4 py-3"}`}
              onClick={() => setActiveItem(item.name)}
            >
              <item.icon
                className={`w-5 h-5 transition-colors ${
                  activeItem === item.name
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                }`}
              />
              {!isCollapsed && (
                <span className="ml-3 text-sm font-medium">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <div className="flex items-center space-x-3">
          <img
            className="object-cover rounded-full h-10 w-10 ring-2 ring-gray-100 dark:ring-gray-800"
            src="/api/placeholder/40/40"
            alt="User Avatar"
          />
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                John Doe
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Product Designer
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
