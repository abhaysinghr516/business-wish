"use client";
import React, { useState } from "react";
import { ChevronLeft, Home, LayoutDashboard, Menu, Users } from "lucide-react";

export const BasicSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex flex-col w-64 bg-gray-50 dark:bg-gray-800 h-screen justify-between text-gray-700 dark:text-gray-300">
      <div className="overflow-y-auto p-4">
        <div className="space-y-2">
          <div className="flex items-center p-2">
            <span className="font-bold text-xl">Logo</span>
          </div>
          {["Dashboard", "Projects", "Team"].map((item) => (
            <div
              key={item}
              className={`cursor-pointer flex items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg ${
                activeItem === item ? "bg-slate-200 dark:bg-slate-700" : ""
              }`}
              onClick={() => setActiveItem(item)}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 flex items-center border-t border-gray-200 dark:border-gray-600">
        <img
          className="object-cover rounded-full h-9 w-9 mr-2"
          src="/api/placeholder/32/32"
          alt="avatar"
        />
        <span className="font-medium">John Doe</span>
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
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-50 dark:bg-gray-800 h-screen justify-between text-gray-700 dark:text-gray-300">
      <div className="overflow-y-auto p-4">
        <div className="space-y-2">
          <div className="flex items-center p-2">
            <span className="font-bold text-xl">Logo</span>
          </div>
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`cursor-pointer flex items-center p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg ${
                activeItem === item.name ? "bg-slate-200 dark:bg-slate-700" : ""
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <item.icon className="w-6 h-6" />
              <span className="ml-3">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 flex items-center border-t border-gray-200 dark:border-gray-600">
        <img
          className="object-cover rounded-full h-9 w-9 mr-2"
          src="/api/placeholder/32/32"
          alt="avatar"
        />
        <span className="font-medium">John Doe</span>
      </div>
    </div>
  );
};

export const CollapseSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Team", icon: Users },
  ];

  return (
    <div
      className={`flex flex-col bg-gray-50 dark:bg-gray-800 h-screen text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-lg ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
        {!isCollapsed && (
          <span className="font-bold text-lg tracking-wide text-gray-800 dark:text-gray-100">
            MyApp
          </span>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      <div className="flex-grow overflow-y-auto py-4">
        <nav className="space-y-2 px-3">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                activeItem === item.name
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <item.icon
                className={`w-6 h-6 transition-all duration-300 ${
                  activeItem === item.name ? "text-white" : "text-gray-500"
                }`}
              />
              {!isCollapsed && (
                <span
                  className={`ml-4 font-medium ${
                    activeItem === item.name
                      ? "text-white"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center">
          <img
            className="object-cover rounded-full h-10 w-10"
            src="/api/placeholder/40/40"
            alt="User Avatar"
          />
          {!isCollapsed && (
            <div className="ml-4">
              <span className="block font-medium text-gray-800 dark:text-gray-100">
                John Doe
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">
                View Profile
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
