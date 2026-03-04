"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/** Bottom Sheet Drawer */
const BottomDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-full hover:scale-105 transition-transform"
      >
        Open Bottom Sheet
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > 100 || velocity.y > 500) {
                  setIsOpen(false);
                }
              }}
              className="fixed bottom-0 left-0 right-0 max-h-[85vh] h-[400px] bg-white dark:bg-neutral-900 rounded-t-[2.5rem] p-6 z-50 shadow-2xl flex flex-col"
            >
              {/* Drag Handle */}
              <div className="w-12 h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-full mx-auto mb-6 shrink-0" />
              
              <div className="flex justify-between items-center mb-4 shrink-0">
                <h2 className="text-xl font-bold dark:text-white">Settings</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                >
                  <X size={18} className="dark:text-white" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 pb-6">
                <p className="text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                  Swipe down on this drawer to close it natively, This drawer locks the body scroll beneath it and utilizes advanced Framer Motion drag constraints.
                </p>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-full h-16 bg-neutral-100 dark:bg-neutral-800 rounded-2xl animate-pulse" />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/** Left Sidebar Drawer */
const LeftDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 border border-neutral-200 dark:border-neutral-700 dark:text-white font-medium rounded-full hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
      >
        Open Side Drawer
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 cursor-pointer"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="x"
              dragConstraints={{ right: 0 }}
              dragElastic={0.05}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -100 || velocity.x < -500) {
                  setIsOpen(false);
                }
              }}
              className="fixed top-0 left-0 bottom-0 w-[300px] max-w-[80vw] bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 z-50 shadow-2xl flex flex-col pt-12 p-6"
            >
              <div className="flex justify-between items-center mb-8 shrink-0">
                <h2 className="text-xl font-bold dark:text-white">Menu</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-black dark:hover:text-white transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6">
                {['Dashboard', 'Analytics', 'Settings', 'Profile'].map((item) => (
                  <div key={item} className="text-lg font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer transition">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/** Right Sidebar Drawer */
const RightDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-medium rounded-full shadow-lg hover:scale-105 transition-transform">
        Open Right Drawer
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 cursor-pointer" />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
              drag="x" dragConstraints={{ left: 0 }} dragElastic={0.05} onDragEnd={(e, { offset, velocity }) => { if (offset.x > 100 || velocity.x > 500) setIsOpen(false); }}
              className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-white dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 z-50 shadow-2xl p-6 flex flex-col pt-12"
            >
              <div className="flex justify-between items-center mb-8 shrink-0">
                <h2 className="text-xl font-bold dark:text-white">Notifications</h2>
                <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-black dark:hover:text-white transition"><X size={24} /></button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4">
                {[1, 2, 3].map(item => (
                   <div key={item} className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                     <p className="font-semibold text-sm">System Update</p>
                     <p className="text-xs text-neutral-500 mt-1">A new version is available for download.</p>
                   </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

/** Top Dropdown Drawer */
const TopDrawer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      if (isOpen) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "unset";
    }, [isOpen]);
  
    return (
      <>
        <button onClick={() => setIsOpen(true)} className="px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 font-medium rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
          Open Top Dropdown
        </button>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm z-50 cursor-pointer" />
              <motion.div
                initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}
                drag="y" dragConstraints={{ bottom: 0 }} dragElastic={0.05} onDragEnd={(e, { offset, velocity }) => { if (offset.y < -100 || velocity.y < -500) setIsOpen(false); }}
                className="fixed top-0 left-0 right-0 h-[300px] max-h-[50vh] bg-neutral-900 text-white rounded-b-3xl z-50 shadow-2xl p-6 flex flex-col"
              >
                <div className="flex justify-between items-center mb-8 shrink-0">
                  <h2 className="text-xl font-bold">Command Center</h2>
                  <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition"><X size={24} /></button>
                </div>
                <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {['WiFi', 'Bluetooth', 'AirDrop', 'Focus'].map(item => (
                     <div key={item} className="flex items-center justify-center p-4 rounded-2xl bg-white/10 hover:bg-white/20 cursor-pointer transition">
                       <span className="font-medium">{item}</span>
                     </div>
                  ))}
                </div>
                <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mt-6 shrink-0" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
};

export { BottomDrawer, LeftDrawer, RightDrawer, TopDrawer };
