"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Settings2,
  Bell,
  LogOut,
  User,
  Shield,
  CreditCard,
  X,
  Search,
  Command,
  Monitor,
  Moon,
  Sun,
  Laptop
} from "lucide-react";

function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const BasicPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <div className="flex justify-center items-center">
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2.5 rounded-xl transition-all duration-300 ${
          isOpen
            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white"
            : "bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-neutral-900 shadow-sm"
        }`}
      >
        <Settings2 className="w-5 h-5" />
      </button>

      <div
        className={`absolute top-full mt-2 -left-20 w-72 z-50 transition-all duration-300 origin-top-right ${
          isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
        }`}
      >
        <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200/50 dark:border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] overflow-hidden">
          <div className="p-4 border-b border-neutral-200/50 dark:border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[15px] text-neutral-900 dark:text-white">Settings</h3>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[13px] text-neutral-500 mt-1 leading-relaxed">
              Manage your application preferences and general configurations.
            </p>
          </div>
          <div className="p-2 flex flex-col gap-1">
            {["General", "Appearance", "Advanced"].map((item) => (
              <button key={item} className="px-3 py-2 text-[14px] text-left text-neutral-600 dark:text-neutral-300 font-medium rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export const MenuPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <div className="flex justify-center items-center">
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all shadow-sm"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-inner">
          <User className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-[14px] font-medium text-neutral-700 dark:text-neutral-200 pl-1 pr-2">Olivia P.</span>
      </button>

      <div
        className={`absolute top-full mt-2 left-0 w-60 z-50 transition-all duration-300 origin-top-left ${
          isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
        }`}
      >
        <div className="bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl border border-neutral-200/50 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden p-1.5">
          <div className="flex flex-col gap-0.5">
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 transition-colors w-full text-left">
              <User className="w-4 h-4 text-neutral-400" />
              <span className="text-[14px] font-medium">My Account</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 transition-colors w-full text-left">
              <CreditCard className="w-4 h-4 text-neutral-400" />
              <span className="text-[14px] font-medium">Billing</span>
            </button>
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-neutral-100/80 dark:hover:bg-neutral-900/80 text-neutral-600 dark:text-neutral-300 transition-colors w-full text-left">
              <Settings2 className="w-4 h-4 text-neutral-400" />
              <span className="text-[14px] font-medium">Preferences</span>
            </button>
          </div>
          
          <div className="h-px w-full bg-neutral-200/60 dark:bg-neutral-800/60 my-1.5" />
          
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-red-600 dark:text-red-400 transition-colors w-full text-left">
            <LogOut className="w-4 h-4" />
            <span className="text-[14px] font-medium">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export const NotificationPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <div className="flex justify-center items-center">
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all shadow-sm"
      >
        <Bell className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 border-2 border-white dark:border-neutral-950 rounded-full" />
      </button>

      <div
        className={`absolute top-full mt-2 -left-36 w-80 z-50 transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
        }`}
      >
        <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/50 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden">
          <div className="px-5 py-4 flex items-center justify-between border-b border-neutral-200/50 dark:border-white/5">
            <h3 className="font-semibold text-[15px] text-neutral-900 dark:text-white">Notifications</h3>
            <span className="text-[12px] font-medium text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">2 New</span>
          </div>
          
          <div className="max-h-[300px] overflow-y-auto p-2">
            {[
              { title: "Design System Update", desc: "v2.0 is now available.", time: "2m ago", unread: true },
              { title: "Weekly Report", desc: "Your analytics report is ready.", time: "1h ago", unread: true },
              { title: "Security Alert", desc: "New login from unauthorized device.", time: "2d ago", unread: false }
            ].map((noti, i) => (
              <div key={i} className="flex gap-4 p-3 rounded-2xl hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer group">
                <div className="mt-1">
                  <div className={`w-2 h-2 rounded-full ${noti.unread ? "bg-blue-500" : "bg-transparent"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-[14px] ${noti.unread ? "font-semibold text-neutral-900 dark:text-white" : "font-medium text-neutral-700 dark:text-neutral-300"}`}>{noti.title}</p>
                    <span className="text-[12px] text-neutral-400">{noti.time}</span>
                  </div>
                  <p className="text-[13px] text-neutral-500 mt-0.5 pr-4">{noti.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-2 border-t border-neutral-200/50 dark:border-white/5">
            <button className="w-full py-2 text-[13px] font-medium text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors">
              Mark all as read
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export const RichProfilePopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <div className="flex justify-center items-center">
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-12 h-12 rounded-full border-2 border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all focus:outline-none"
      >
        <img 
          src="https://i.pravatar.cc/150?img=32" 
          alt="Profile" 
          className="w-full h-full rounded-full object-cover shadow-sm group-hover:scale-95 transition-transform"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-neutral-950 rounded-full" />
      </button>

      <div
        className={`absolute top-full mt-3 -left-24 w-80 z-50 transition-all duration-400 origin-top ${
          isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-4 invisible"
        }`}
      >
        <div className="bg-white/95 dark:bg-[#111] backdrop-blur-3xl rounded-[28px] shadow-2xl overflow-hidden border border-neutral-200/60 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/5 p-2">
          
          {/* Header Card */}
          <div className="bg-neutral-100/50 dark:bg-neutral-900 p-4 rounded-2xl flex items-center gap-4 mb-2">
            <img src="https://i.pravatar.cc/150?img=32" className="w-14 h-14 rounded-full border border-neutral-200 dark:border-neutral-800" alt="Avatar"/>
            <div>
              <h3 className="text-[16px] font-semibold text-neutral-900 dark:text-white leading-tight">Sarah Jenkins</h3>
              <p className="text-[13px] text-neutral-500 font-medium">Product Designer</p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="flex items-center justify-center w-5 h-5 rounded bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 text-[10px] font-bold">Pro</span>
                <span className="text-[12px] text-neutral-400">sarah@apple.com</span>
              </div>
            </div>
          </div>

          {/* Action Grid */}
          <div className="grid grid-cols-2 gap-1 mb-2">
            <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <Shield className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[12px] font-medium">Security</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <CreditCard className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[12px] font-medium">Billing</span>
            </button>
          </div>

          <div className="h-px bg-neutral-200/50 dark:bg-neutral-800/50 mx-2 mb-2" />

          {/* Footer Action */}
          <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl hover:bg-red-500/10 text-red-500 dark:text-red-400 transition-colors font-medium text-[14px]">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export const CommandPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside(popoverRef, () => setIsOpen(false));

  return (
    <div className="flex justify-center items-center">
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-[14px] text-neutral-500 w-[240px]"
      >
        <Search className="w-4 h-4" />
        <span>Search quickly...</span>
        <div className="ml-auto flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 bg-white dark:bg-neutral-950 rounded text-[10px] font-semibold border border-neutral-200 dark:border-neutral-800 shadow-sm">⌘</kbd>
          <kbd className="px-1.5 py-0.5 bg-white dark:bg-neutral-950 rounded text-[10px] font-semibold border border-neutral-200 dark:border-neutral-800 shadow-sm">K</kbd>
        </div>
      </button>

      <div
        className={`absolute top-full mt-2 left-0 w-[400px] z-50 transition-all duration-200 ${
          isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 translate-y-1 invisible pointer-events-none"
        }`}
      >
        <div className="bg-white/95 dark:bg-[#111]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] border border-neutral-200/50 dark:border-white/10 overflow-hidden flex flex-col">
          
          {/* Input Header */}
          <div className="flex items-center px-4 py-3 border-b border-neutral-200/50 dark:border-white/5">
            <Search className="w-4 h-4 text-neutral-400 mr-2" />
            <input 
              type="text" 
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent border-none outline-none text-[14px] text-neutral-900 dark:text-white placeholder:text-neutral-400"
              autoFocus={isOpen}
            />
          </div>

          {/* List items */}
          <div className="p-2 max-h-[300px] overflow-y-auto w-full">
            <p className="px-2 py-1.5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">Suggestions</p>
            
            <button className="flex items-center w-full gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors group">
              <div className="w-6 h-6 rounded bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center p-1 border border-neutral-300 dark:border-neutral-800 group-hover:bg-white dark:group-hover:bg-neutral-950 transition-colors">
                <Settings2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-[13px] font-medium">Open Settings</span>
            </button>
            <button className="flex items-center w-full gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors group">
              <div className="w-6 h-6 rounded bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center p-1 border border-neutral-300 dark:border-neutral-800 group-hover:bg-white dark:group-hover:bg-neutral-950 transition-colors">
                <Sun className="w-3.5 h-3.5" />
              </div>
              <span className="text-[13px] font-medium">Toggle Light Theme</span>
            </button>
            <button className="flex items-center w-full gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors group">
              <div className="w-6 h-6 rounded bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center p-1 border border-neutral-300 dark:border-neutral-800 group-hover:bg-white dark:group-hover:bg-neutral-950 transition-colors">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="text-[13px] font-medium">View Profile</span>
            </button>
          </div>
          
          <div className="p-2 border-t border-neutral-200/50 dark:border-white/5 bg-neutral-50 dark:bg-black/20 flex items-center justify-between text-[11px] text-neutral-500 font-medium">
            <span className="flex items-center gap-1">Navigate with <span className="p-0.5 bg-neutral-200 dark:bg-neutral-800 rounded px-1">↓</span><span className="p-0.5 bg-neutral-200 dark:bg-neutral-800 rounded px-1">↑</span></span>
            <span className="flex items-center gap-1">Select with <span className="p-0.5 bg-neutral-200 dark:bg-neutral-800 rounded px-1">↵</span></span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
