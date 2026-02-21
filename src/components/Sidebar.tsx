"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Home,
  LayoutDashboard,
  Menu,
  Users,
  Settings,
  Bell,
  Search,
  PieChart,
  FolderOpen,
  MessageSquare,
  LogOut,
} from "lucide-react";

export const BasicSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex flex-col w-64 bg-white dark:bg-neutral-950 h-screen justify-between border-r border-neutral-200/50 dark:border-white/10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]">
      <div className="overflow-y-auto pt-6 px-4">
        <div className="flex items-center px-4 mb-8">
          <div className="w-7 h-7 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center mr-3 shadow-sm">
            <span className="text-white dark:text-neutral-900 font-bold text-[14px]">A</span>
          </div>
          <span className="font-semibold text-[16px] text-neutral-900 dark:text-white tracking-tight">
            Acme Inc.
          </span>
        </div>
        
        <div className="space-y-1 mt-6">
          <p className="px-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Platform</p>
          {["Dashboard", "Projects", "Team", "Reports", "Settings"].map((item) => (
            <button
              key={item}
              className={`w-full flex items-center px-4 py-2.5 text-[14px] font-medium rounded-xl transition-all duration-200 border border-transparent ${
                activeItem === item
                  ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-sm border-neutral-200/50 dark:border-white/5"
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 mx-4 mb-4 mt-auto">
        <button className="w-full flex items-center gap-3 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-xl transition-colors">
          <img
            className="object-cover rounded-full h-9 w-9 border border-neutral-200 dark:border-neutral-800 shadow-sm"
            src="https://i.pravatar.cc/150?img=32"
            alt="avatar"
          />
          <div className="flex flex-col text-left">
            <span className="text-[14px] font-semibold text-neutral-900 dark:text-white leading-tight">Sarah J.</span>
            <span className="text-[12px] text-neutral-500">sarah@acme.com</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export const SidebarwithIcons: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Projects", icon: FolderOpen },
    { name: "Team", icon: Users },
    { name: "Messages", icon: MessageSquare },
    { name: "Analytics", icon: PieChart },
  ];

  return (
    <div className="flex flex-col w-[260px] bg-neutral-50/50 dark:bg-[#0A0A0A] h-screen justify-between border-r border-neutral-200/60 dark:border-white/10">
      <div className="overflow-y-auto px-4 py-6">
        {/* Search Header */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input 
            type="text"
            placeholder="Search..."
            className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl py-2 pl-9 pr-4 text-[13px] outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800 shadow-sm transition-all"
          />
        </div>

        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`w-full group flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-white dark:bg-neutral-900 shadow-sm border border-neutral-200/60 dark:border-white/10"
                    : "hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isActive ? "text-neutral-900 dark:text-white" : "text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300"
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className={`text-[14px] font-medium transition-colors ${
                    isActive ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                  }`}>
                    {item.name}
                  </span>
                </div>
                {item.name === "Messages" && (
                  <span className="bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
                )}
              </button>
            )
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-neutral-200/60 dark:border-white/10">
        <button className="w-full group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
          <Settings className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300" strokeWidth={2} />
          <span className="text-[14px] font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white">Settings</span>
        </button>
      </div>
    </div>
  );
};

export const FloatingIslandSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Layout");

  const menuItems = [
    { name: "Layout", icon: LayoutDashboard },
    { name: "Analytics", icon: PieChart },
    { name: "Community", icon: Users },
  ];

  return (
    <div className="h-screen bg-neutral-100 dark:bg-neutral-950 p-4 flex">
      {/* The Island */}
      <div className="flex flex-col w-[260px] bg-white/70 dark:bg-neutral-900/70 backdrop-blur-2xl border border-white dark:border-white/10 rounded-[28px] shadow-xl overflow-hidden h-full">
        
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-orange-400 shadow-inner" />
            <span className="font-bold text-[15px] tracking-tight text-neutral-900 dark:text-white">Nexus</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                activeItem === item.name
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-md scale-[0.98]"
                  : "bg-transparent text-neutral-600 dark:text-neutral-400 hover:bg-white/50 dark:hover:bg-neutral-800/50"
              }`}
            >
              <item.icon className="w-[18px] h-[18px]" strokeWidth={activeItem === item.name ? 2.5 : 2} />
              <span className="text-[14px] font-semibold">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="p-4 mt-auto">
          <div className="bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl p-4 flex items-center justify-between border border-neutral-200/50 dark:border-white/5">
            <div className="flex flex-col items-start gap-1">
              <span className="text-[12px] font-bold text-neutral-900 dark:text-white">Pro Plan</span>
              <span className="text-[11px] text-neutral-500">4 days left</span>
            </div>
            <button className="text-[11px] font-semibold bg-white dark:bg-neutral-800 px-2 py-1 rounded-lg shadow-sm border border-neutral-200 dark:border-white/5">Upgrade</button>
          </div>
        </div>

      </div>
    </div>
  );
};

type MenuNode = 
  | { type: 'item'; name: string; icon: React.ElementType; badge?: number }
  | { type: 'divider' }
  | { type: 'group'; name: string; icon: React.ElementType; items: string[] };

export const ExpandableNestedSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Projects: true
  });

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  const menuStructure: MenuNode[] = [
    { type: 'item', name: "Overview", icon: Home },
    { type: 'item', name: "Notifications", icon: Bell, badge: 2 },
    { type: 'divider' },
    { 
      type: 'group', 
      name: "Projects", 
      icon: FolderOpen,
      items: ["Design System", "Marketing Site", "Mobile App"]
    },
    { 
      type: 'group', 
      name: "Team", 
      icon: Users,
      items: ["Developers", "Designers", "Management"]
    }
  ];

  return (
    <div className="flex flex-col w-[260px] bg-white dark:bg-[#0A0A0A] h-screen border-r border-neutral-200/60 dark:border-white/10 shadow-sm">
      <div className="p-6">
        <h2 className="text-[18px] font-semibold text-neutral-900 dark:text-white tracking-tight">Workspace</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-1">
        {menuStructure.map((node, i) => {
          if (node.type === 'divider') {
            return <div key={i} className="h-px w-full bg-neutral-200/60 dark:bg-neutral-800/60 my-4" />
          }
          if (node.type === 'item') {
            const isActive = activeItem === node.name;
            const Icon = node.icon!;
            return (
              <button
                key={node.name}
                onClick={() => setActiveItem(node.name!)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                  isActive ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium" : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span className="text-[14px]">{node.name}</span>
                </div>
                {node.badge && <span className="bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{node.badge}</span>}
              </button>
            )
          }
          if (node.type === 'group') {
            const isOpen = openGroups[node.name!];
            const Icon = node.icon!;
            return (
              <div key={node.name} className="pt-2">
                <button
                  onClick={() => toggleGroup(node.name!)}
                  className="w-full flex items-center justify-between px-3 py-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span className="text-[14px] font-medium">{node.name}</span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                
                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"
                }`}>
                  <div className="ml-5 pl-4 border-l border-neutral-200 dark:border-neutral-800 space-y-1 py-1">
                    {node.items!.map(subItem => (
                      <button
                        key={subItem}
                        onClick={() => setActiveItem(subItem)}
                        className={`w-full flex items-center px-3 py-1.5 text-[13px] rounded-md transition-colors ${
                          activeItem === subItem
                            ? "text-blue-600 dark:text-blue-400 font-medium"
                            : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300"
                        }`}
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
};

export const CollapseSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div
      className={`flex flex-col bg-white dark:bg-[#0A0A0A] h-screen border-r border-neutral-200/60 dark:border-white/10 shadow-sm transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[80px]" : "w-[260px]"
      }`}
    >
      <div className="flex items-center justify-between p-6">
        <div className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}`}>
          <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg min-w-[32px] flex items-center justify-center">
            <span className="text-white dark:text-neutral-900 font-bold">F</span>
          </div>
          <span className="font-semibold text-[18px] text-neutral-900 dark:text-white whitespace-nowrap">
            Fusion
          </span>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors shadow-sm ml-auto"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? "bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:text-neutral-800 dark:hover:text-neutral-300"
              } ${isCollapsed ? "p-3 justify-center" : "px-4 py-3 w-full"}`}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon className="w-5 h-5 min-w-[20px]" strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[14px] font-medium ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                isCollapsed ? "w-0 opacity-0 ml-0" : "w-auto opacity-100"
              }`}>
                {item.name}
              </span>
            </button>
          )
        })}
      </div>

      <div className="p-4 border-t border-neutral-200/60 dark:border-white/10">
        <button className={`flex items-center justify-center p-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500 dark:text-red-400 transition-colors w-full ${isCollapsed ? "" : "gap-3"}`}>
          <LogOut className="w-5 h-5 min-w-[20px]" />
          <span className={`text-[14px] font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          }`}>
            Sign Out
          </span>
        </button>
      </div>
    </div>
  );
};
