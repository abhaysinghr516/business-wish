"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Check, X } from "lucide-react";

const BasicSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-[52px] h-[32px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out shadow-inner ${
        isOn ? "bg-green-500 dark:bg-green-500" : "bg-neutral-200 dark:bg-neutral-800"
      }`}
      onClick={() => setIsOn(!isOn)}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOn(!isOn);
        }
      }}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.2)] flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{ x: isOn ? 20 : 0 }}
      />
    </div>
  );
};

/** Icon Switch (e.g. Dark Mode Toggle) */
const IconSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-[60px] h-[34px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out relative ${
        isOn ? "bg-neutral-900" : "bg-sky-400"
      }`}
      onClick={() => setIsOn(!isOn)}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOn(!isOn);
        }
      }}
    >
      {/* Background Icons */}
      <div className="absolute inset-0 h-full flex items-center justify-between px-[9px] pointer-events-none text-white">
        <Sun size={14} className="opacity-80" />
        <Moon size={14} className="opacity-80" />
      </div>

      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-[0_2px_5px_rgba(0,0,0,0.2)] z-10 flex items-center justify-center relative"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{ x: isOn ? 28 : 0 }}
      >
        <motion.div
          key={isOn ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {isOn ? (
            <Moon size={14} className="text-neutral-900" />
          ) : (
            <Sun size={14} className="text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

/** Labeled Switch (Internal Text) */
const LabeledSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={`w-20 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out relative ${
        isOn ? "bg-black dark:bg-white" : "bg-neutral-200 dark:bg-neutral-800"
      }`}
      onClick={() => setIsOn(!isOn)}
      role="switch"
      aria-checked={isOn}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOn(!isOn);
        }
      }}
    >
      <div className={`absolute w-full px-3 flex justify-between text-[11px] font-bold pointer-events-none uppercase tracking-wider ${isOn ? 'text-white dark:text-black' : 'text-neutral-500'}`}>
        <span className={isOn ? 'opacity-100' : 'opacity-0'}>ON</span>
        <span className={!isOn ? 'opacity-100' : 'opacity-0'}>OFF</span>
      </div>
      
      <motion.div
        className="w-6 h-6 bg-white dark:bg-neutral-900 rounded-full shadow-md z-10 flex items-center justify-center"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{ x: isOn ? 48 : 0 }}
      >
          {isOn ? <Check size={12} className="text-black dark:text-white" /> : <X size={12} className="text-neutral-400" />}
      </motion.div>
    </div>
  );
};

/** Desktop Size Theme Switch */
const ThemeSwitch: React.FC = () => {
    const [isDark, setIsDark] = useState(false);
  
    return (
      <div
        className={`w-28 h-10 flex items-center rounded-3xl p-1 cursor-pointer transition-colors duration-500 relative shadow-inner ${
          isDark ? "bg-neutral-800" : "bg-neutral-200"
        }`}
        onClick={() => setIsDark(!isDark)}
        role="switch"
        aria-checked={isDark}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsDark(!isDark);
          }
        }}
      >
        <div className="absolute w-full px-4 flex justify-between z-0 pointer-events-none">
          <Moon size={16} className={`transition-opacity ${isDark ? 'opacity-100 text-neutral-500' : 'opacity-50 text-neutral-400'}`} />
          <Sun size={16} className={`transition-opacity ${!isDark ? 'opacity-100 text-amber-500' : 'opacity-50 text-neutral-400'}`} />
        </div>
        
        <motion.div
          className="w-1/2 h-full bg-white dark:bg-neutral-900 rounded-full shadow-md z-10"
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          animate={{ x: isDark ? "0%" : "100%" }}
        />
      </div>
    );
};
  
export { BasicSwitch, IconSwitch, LabeledSwitch, ThemeSwitch };
