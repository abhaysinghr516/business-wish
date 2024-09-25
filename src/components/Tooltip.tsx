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
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
          {text}
        </div>
      )}
    </div>
  );
};

export function BasicTooltip() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Tooltip text="This is a simple tooltip">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
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
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip-${position}`}
          style={{ whiteSpace: "nowrap" }}
        >
          {text}
          <div
            className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
              position === "top"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                : position === "right"
                ? "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                : position === "bottom"
                ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                : "right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export function ArrowTooltip() {
  return (
    <div className="flex items-center justify-center space-x-4 h-64">
      <TooltipArrow text="Top tooltip" position="top">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Top
        </button>
      </TooltipArrow>
      <TooltipArrow text="Right tooltip" position="right">
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Right
        </button>
      </TooltipArrow>
      <TooltipArrow text="Bottom tooltip" position="bottom">
        <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
          Bottom
        </button>
      </TooltipArrow>
      <TooltipArrow text="Left tooltip" position="left">
        <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-600">
          Left
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
          absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm
          transition-all duration-700 ease-in-out
          ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}
          bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2
        `}
      >
        {text}
      </div>
    </div>
  );
};

export function AnimatedTooltip() {
  return (
    <div className="flex items-center justify-center h-screen">
      <TooltipAnimated text="This tooltip fades in and out">
        <button className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600">
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
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`
            absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm
            ${getTooltipStyles()}
          `}
        >
          {text}
          <div
            className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
              currentDirection === "top"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                : currentDirection === "right"
                ? "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                : currentDirection === "bottom"
                ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                : "right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};

export function TooltipDemo() {
  const [globalDirection, setGlobalDirection] = useState<Direction>("auto");

  const getTooltipDirection = (defaultDirection: Direction): Direction => {
    return globalDirection === "auto" ? defaultDirection : globalDirection;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setGlobalDirection("auto")}
          className={`px-4 py-2 rounded ${
            globalDirection === "auto"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Auto
        </button>
        <button
          onClick={() => setGlobalDirection("top")}
          className={`px-4 py-2 rounded ${
            globalDirection === "top" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Top
        </button>
        <button
          onClick={() => setGlobalDirection("right")}
          className={`px-4 py-2 rounded ${
            globalDirection === "right"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Right
        </button>
        <button
          onClick={() => setGlobalDirection("bottom")}
          className={`px-4 py-2 rounded ${
            globalDirection === "bottom"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Bottom
        </button>
        <button
          onClick={() => setGlobalDirection("left")}
          className={`px-4 py-2 rounded ${
            globalDirection === "left"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Left
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div></div>
        <TooltipAdaptive
          text="Top tooltip"
          direction={getTooltipDirection("top")}
        >
          <button className="w-full px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
            Top
          </button>
        </TooltipAdaptive>
        <div></div>
        <TooltipAdaptive
          text="Left tooltip"
          direction={getTooltipDirection("left")}
        >
          <button className="w-full px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
            Left
          </button>
        </TooltipAdaptive>
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500">
            Current: {globalDirection}
          </span>
        </div>
        <TooltipAdaptive
          text="Right tooltip"
          direction={getTooltipDirection("right")}
        >
          <button className="w-full px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
            Right
          </button>
        </TooltipAdaptive>
        <div></div>
        <TooltipAdaptive
          text="Bottom tooltip"
          direction={getTooltipDirection("bottom")}
        >
          <button className="w-full px-4 py-2 text-white bg-teal-500 rounded hover:bg-teal-600">
            Bottom
          </button>
        </TooltipAdaptive>
        <div></div>
      </div>
    </div>
  );
}
