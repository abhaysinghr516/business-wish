"use client";

import { useEffect, useRef, useState } from "react";

interface TooltipProps {
  text: string;
  position?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        className={`
          absolute z-10 px-3 py-2 text-sm font-medium text-gray-900 bg-white/90 
          rounded-lg shadow-lg border border-gray-200/20
          transition-all duration-300 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
          bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2
        `}
      >
        {text}
      </div>
    </div>
  );
};

export function BasicTooltip() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <Tooltip text="This is a simple tooltip">
        <button className="px-4 py-2 text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Hover me
        </button>
      </Tooltip>
    </div>
  );
}

const TooltipArrow: React.FC<TooltipProps> = ({
  text,
  position = "top",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (isVisible && tooltipRef.current && targetRef.current) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        let top = 0;
        let left = 0;

        switch (position) {
          case "top":
            top = -tooltipRect.height - 10;
            left = (targetRect.width - tooltipRect.width) / 2;
            break;
          case "right":
            top = (targetRect.height - tooltipRect.height) / 2;
            left = targetRect.width + 10;
            break;
          case "bottom":
            top = targetRect.height + 10;
            left = (targetRect.width - tooltipRect.width) / 2;
            break;
          case "left":
            top = (targetRect.height - tooltipRect.height) / 2;
            left = -tooltipRect.width - 10;
            break;
        }

        tooltipRef.current.style.top = `${top}px`;
        tooltipRef.current.style.left = `${left}px`;
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isVisible, position]);

  return (
    <div className="relative inline-block">
      <div
        ref={targetRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        ref={tooltipRef}
        className={`
          absolute z-10 px-3 py-2 text-sm font-medium
          text-gray-900 bg-white/90
          rounded-lg shadow-lg border border-gray-200/20
          transition-all duration-300 ease-out
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          tooltip-${position}
        `}
        style={{ whiteSpace: "nowrap" }}
      >
        {text}
        <div
          className={`
            absolute w-2 h-2 bg-white/90 border-t border-l border-gray-200/20
            transform rotate-45
            ${
              position === "top"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -rotate-45"
                : position === "right"
                ? "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-135"
                : position === "bottom"
                ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-135"
                : "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45"
            }
          `}
        />
      </div>
    </div>
  );
};

export function ArrowTooltip() {
  return (
    <div className="flex items-center justify-center space-x-4 h-64 bg-gray-100 dark:bg-gray-900">
      <TooltipArrow text="Left tooltip" position="left">
        <button className="px-4 py-2 text-white bg-gradient-to-b from-purple-500 to-purple-600 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Left
        </button>
      </TooltipArrow>
      <TooltipArrow text="Top tooltip" position="top">
        <button className="px-4 py-2 text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Top
        </button>
      </TooltipArrow>
      <TooltipArrow text="Bottom tooltip" position="bottom">
        <button className="px-4 py-2 text-white bg-gradient-to-b from-red-500 to-red-600 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Bottom
        </button>
      </TooltipArrow>
      <TooltipArrow text="Right tooltip" position="right">
        <button className="px-4 py-2 text-white bg-gradient-to-b from-green-500 to-green-600 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Right
        </button>
      </TooltipArrow>
    </div>
  );
}

const TooltipAnimated: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        className={`
          absolute z-10 px-3 py-2 text-sm font-medium
          text-gray-900 bg-white/90
          rounded-lg shadow-lg border border-gray-200/20
          transition-all duration-500 ease-out
          transform
          ${
            isVisible
              ? "opacity-100 visible translate-y-0 scale-100"
              : "opacity-0 invisible translate-y-1 scale-95"
          }
          bottom-full left-1/2 -translate-x-1/2 -translate-y-2
        `}
      >
        {text}
      </div>
    </div>
  );
};

export function AnimatedTooltip() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <TooltipAnimated text="This tooltip animates smoothly">
        <button className="px-4 py-2 text-white bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Hover for animated tooltip
        </button>
      </TooltipAnimated>
    </div>
  );
}

type Direction = "auto" | "top" | "right" | "bottom" | "left";

const TooltipAdaptive: React.FC<TooltipProps & { direction?: Direction }> = ({
  text,
  children,
  direction = "auto",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDirection, setCurrentDirection] =
    useState<Direction>(direction);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (
        isVisible &&
        tooltipRef.current &&
        targetRef.current &&
        direction === "auto"
      ) {
        const targetRect = targetRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        let newDirection: Direction = "top";

        if (targetRect.top > tooltipRect.height) {
          newDirection = "top";
        } else if (viewportWidth - targetRect.right > tooltipRect.width) {
          newDirection = "right";
        } else if (viewportHeight - targetRect.bottom > tooltipRect.height) {
          newDirection = "bottom";
        } else if (targetRect.left > tooltipRect.width) {
          newDirection = "left";
        }

        setCurrentDirection(newDirection);
      } else {
        setCurrentDirection(direction);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isVisible, direction]);

  const getTooltipStyles = () => {
    switch (currentDirection) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2";
      case "right":
        return "top-1/2 left-full transform translate-x-2 -translate-y-1/2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 translate-y-2";
      case "left":
        return "top-1/2 right-full transform -translate-x-2 -translate-y-1/2";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2";
    }
  };

  return (
    <div className="relative inline-block">
      <div
        ref={targetRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        ref={tooltipRef}
        className={`
          absolute z-10 px-3 py-2 text-sm font-medium
          text-gray-900 bg-white/90
          rounded-lg shadow-lg border border-gray-200/20
          transition-all duration-300 ease-out
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          ${getTooltipStyles()}
        `}
      >
        {text}
        <div
          className={`
            absolute w-2 h-2 bg-white/90 border-t border-l border-gray-200/20
            transform rotate-45
            ${
              currentDirection === "top"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 -rotate-45"
                : currentDirection === "right"
                ? "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-135"
                : currentDirection === "bottom"
                ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-135"
                : "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45"
            }
          `}
        />
      </div>
    </div>
  );
};

export function TooltipDemo() {
  const [globalDirection, setGlobalDirection] = useState<Direction>("auto");

  const getTooltipDirection = (defaultDirection: Direction): Direction => {
    return globalDirection === "auto" ? defaultDirection : globalDirection;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex space-x-2 p-1 bg-gray-200/50 dark:bg-gray-800/50 rounded-lg">
        {["auto", "top", "right", "bottom", "left"].map((dir) => (
          <button
            key={dir}
            onClick={() => setGlobalDirection(dir as Direction)}
            className={`
              px-4 py-2 rounded-md transition-all duration-300
              ${
                globalDirection === dir
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-white/50"
              }
            `}
          >
            {dir.charAt(0).toUpperCase() + dir.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
        <div></div>
        <TooltipAdaptive
          text="Top tooltip"
          direction={getTooltipDirection("top")}
        >
          <button className="w-full px-4 py-2 text-white bg-gradient-to-b from-teal-500 to-teal-600 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Top
          </button>
        </TooltipAdaptive>
        <div></div>
        <TooltipAdaptive
          text="Left tooltip"
          direction={getTooltipDirection("left")}
        >
          <button className="w-full px-4 py-2 text-white bg-gradient-to-b from-teal-500 to-teal-600 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Left
          </button>
        </TooltipAdaptive>
        <div className="flex items-center justify-center">
          <div className="text-sm text-gray-500 dark:text-gray-200">
            Current: {globalDirection}
          </div>
        </div>
        <TooltipAdaptive
          text="Right tooltip"
          direction={getTooltipDirection("right")}
        >
          <button className="w-full px-4 py-2 text-white bg-gradient-to-b from-teal-500 to-teal-600 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Right
          </button>
        </TooltipAdaptive>
        <div></div>
        <TooltipAdaptive
          text="Bottom tooltip"
          direction={getTooltipDirection("bottom")}
        >
          <button className="w-full px-4 py-2 text-white bg-gradient-to-b from-teal-500 to-teal-600 rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Bottom
          </button>
        </TooltipAdaptive>
        <div></div>
      </div>
    </div>
  );
}
