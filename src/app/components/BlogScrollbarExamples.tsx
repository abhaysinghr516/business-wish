import React from "react";

export const ScrollbarCustomDemo: React.FC = () => {
  return (
    <div className="w-full p-6 bg-stone-50 dark:bg-stone-900/40 rounded-xl border border-stone-200/60 dark:border-stone-800/60 flex flex-col items-center">
      <p className="text-xs text-stone-400 mb-3 uppercase tracking-wider font-semibold">Interactive Custom Scrollbar</p>
      
      {/* Scrollable area with custom styling classes inline */}
      <div 
        className="w-full max-w-sm h-48 overflow-y-auto bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-850 rounded-lg p-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#FF3903 rgba(0,0,0,0.05)"
        }}
      >
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-stone-900 dark:text-white">Custom Scrollbar Behavior</h4>
          <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            Scroll down this element to see the custom-colored thumb. We have styled this container using standard properties for modern engines, ensuring cross-platform support.
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            Vanilla CSS handles Webkit scrollbars via pseudo-selectors, while Firefox uses standard scrollbar-width and scrollbar-color properties.
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            By coordinating thumb and track background shading, scrollable segments integrate smoothly with minimal dark and light design motifs.
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            You&apos;ve reached the bottom! You can scroll back to the top to see the scroll thumb slide back up.
          </p>
        </div>
      </div>
    </div>
  );
};

export const ScrollbarHiddenDemo: React.FC = () => {
  return (
    <div className="w-full p-6 bg-stone-50 dark:bg-stone-900/40 rounded-xl border border-stone-200/60 dark:border-stone-800/60 flex flex-col items-center">
      <p className="text-xs text-stone-400 mb-3 uppercase tracking-wider font-semibold">Horizontal Scrollbar Hidden (scrollbar-hide)</p>
      
      {/* Scrollable horizontal area with scrollbar hidden */}
      <div className="w-full max-w-sm overflow-x-auto scrollbar-hide flex gap-3 p-2 bg-white dark:bg-stone-950 border border-stone-200 dark:border-stone-850 rounded-lg">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div 
            key={n} 
            className="flex-shrink-0 w-24 h-24 bg-stone-100 dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800 rounded-md flex items-center justify-center font-semibold text-stone-700 dark:text-stone-300 text-sm"
          >
            Card {n}
          </div>
        ))}
      </div>
      <p className="text-[10px] text-stone-400 mt-2">Swipe horizontally to scroll—no scrollbar visible</p>
    </div>
  );
};
