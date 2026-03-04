"use client";

import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BasicSlider: React.FC = () => {
  const [value, setValue] = useState(40);

  return (
    <div className="w-full max-w-sm mx-auto my-6 relative flex items-center h-6 group">
      {/* Background track */}
      <div className="absolute w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden transition-colors duration-300">
        {/* Fill track */}
        <div 
          className="h-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-75 ease-out" 
          style={{ width: `${value}%` }} 
        />
      </div>
      
      {/* Thumb */}
      <div 
        className="absolute h-5 w-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.12)] pointer-events-none transition-all duration-75 ease-out flex items-center justify-center group-hover:scale-110 group-active:scale-95"
        style={{ left: `calc(${value}% - 10px)` }}
      />
      
      {/* Invisible Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

const IconSlider: React.FC = () => {
  const [value, setValue] = useState(60);

  return (
    <div className="w-full max-w-sm mx-auto my-6 flex items-center space-x-4 group">
      <VolumeX className="w-5 h-5 text-neutral-400 group-hover:text-neutral-500 transition-colors" />
      <div className="relative flex-1 flex items-center h-6">
        <div className="absolute w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-75 ease-out" 
            style={{ width: `${value}%` }} 
          />
        </div>
        <div 
          className="absolute h-5 w-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.12)] pointer-events-none transition-all duration-75 ease-out group-hover:scale-110 group-active:scale-95"
          style={{ left: `calc(${value}% - 10px)` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <Volume2 className="w-5 h-5 text-neutral-400 group-hover:text-neutral-500 transition-colors" />
    </div>
  );
};

const TooltipSlider: React.FC = () => {
  const [value, setValue] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full max-w-sm mx-auto my-12 relative flex items-center h-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="absolute w-full h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-75 ease-out" 
          style={{ width: `${value}%` }} 
        />
      </div>
      
      <div 
        className="absolute h-6 w-6 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 rounded-full shadow-md pointer-events-none transition-all duration-75 ease-out flex items-center justify-center top-1/2 -translate-y-1/2"
        style={{ left: `calc(${value}% - 12px)` }}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: -35, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute px-2.5 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1)] whitespace-nowrap z-10"
            >
              {value}%
              <div className="absolute left-1/2 -bottom-1 w-2 h-2 bg-neutral-900 dark:bg-white transform -translate-x-1/2 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
};

const SteppedSlider: React.FC = () => {
  const [value, setValue] = useState(50);
  const steps = [0, 25, 50, 75, 100];

  return (
    <div className="w-full max-w-sm mx-auto my-8 flex flex-col gap-4">
      <div className="relative flex items-center h-6 w-full group">
        <div className="absolute w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full">
          <div 
            className="h-full bg-neutral-900 dark:bg-neutral-100 transition-all duration-75 ease-out rounded-full" 
            style={{ width: `${value}%` }} 
          />
        </div>
        
        {/* Step Markers */}
        <div className="absolute w-full flex justify-between px-[2px] pointer-events-none">
          {steps.map((step) => (
            <div 
              key={step} 
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${value >= step ? 'bg-neutral-900 dark:bg-neutral-100' : 'bg-neutral-400 dark:bg-neutral-600'}`} 
            />
          ))}
        </div>

        <div 
          className="absolute h-5 w-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.12)] pointer-events-none transition-all duration-75 ease-out group-hover:scale-110 group-active:scale-95"
          style={{ left: `calc(${value}% - 10px)` }}
        />
        
        <input
          type="range"
          min="0"
          max="100"
          step="25"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="flex justify-between w-full text-[13px] font-medium text-neutral-500 dark:text-neutral-400">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
  );
};

export { BasicSlider, IconSlider, TooltipSlider, SteppedSlider };
