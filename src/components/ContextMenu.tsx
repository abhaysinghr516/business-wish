"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Plus, Trash2, Edit, Check, Settings, Eye, Download } from "lucide-react";

/** Fixed local pointer-mapped Context Menu */
const InteractiveContextMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const buttons = Array.from(menuRef.current?.querySelectorAll("button") || []);
        if (!buttons.length) return;
        const currentIndex = buttons.indexOf(document.activeElement as HTMLButtonElement);
        let nextIndex = e.key === "ArrowDown" ? currentIndex + 1 : currentIndex - 1;
        if (nextIndex >= buttons.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = buttons.length - 1;
        buttons[nextIndex]?.focus();
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect();
      let x = e.clientX - bounds.left;
      let y = e.clientY - bounds.top;
      
      // Menu dimensions approximation to prevent overflowing the container
      const menuWidth = 224; // w-56
      const menuHeight = 130; 

      if (x + menuWidth > bounds.width) {
        x = bounds.width - menuWidth - 8;
      }
      if (y + menuHeight > bounds.height) {
        y = bounds.height - menuHeight - 8;
      }
      
      // Ensure positive coordinates
      x = Math.max(8, x);
      y = Math.max(8, y);

      setPoint({ x, y });
      setIsOpen(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      onContextMenu={handleContextMenu}
      className="w-full max-w-xl mx-auto my-12 h-64 relative overflow-hidden border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl flex items-center justify-center bg-neutral-50 dark:bg-neutral-900/50 cursor-context-menu"
    >
      <p className="text-neutral-500 font-medium select-none z-0">Right-click anywhere in this zone</p>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ top: point.y, left: point.x }}
            className="absolute w-56 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-1 z-50 overflow-hidden"
          >
            <div className="flex flex-col">
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors w-full text-left group focus:outline-none focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black"
              >
                <span className="flex items-center"><Plus size={16} className="mr-2 opacity-70 group-hover:opacity-100" /> New Tab</span>
                <span className="text-[10px] opacity-50 tracking-widest">⌘T</span>
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm text-neutral-700 dark:text-neutral-200 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors w-full text-left group focus:outline-none focus:bg-black focus:text-white dark:focus:bg-white dark:focus:text-black"
              >
                <span className="flex items-center"><Copy size={16} className="mr-2 opacity-70 group-hover:opacity-100" /> Copy Link</span>
                <span className="text-[10px] opacity-50 tracking-widest">⌘C</span>
              </button>
              
              <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-1 mx-2" />
              
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm text-rose-600 dark:text-rose-400 rounded-md hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 dark:hover:text-white transition-colors w-full text-left group focus:outline-none focus:bg-rose-500 focus:text-white dark:focus:bg-rose-500"
              >
                <span className="flex items-center"><Trash2 size={16} className="mr-2 opacity-70 group-hover:opacity-100" /> Delete Asset</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
  
export { InteractiveContextMenu };
