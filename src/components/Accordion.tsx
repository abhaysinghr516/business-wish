"use client";
import React, { useState, useRef, useEffect } from "react";

const AnimatedArrow: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transform transition-transform duration-300 ease-in-out dark:text-white ${
      isExpanded ? "rotate-180" : ""
    } ${isExpanded ? "animate-bounce-down" : "animate-bounce-up"}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const BasicAccordion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState<number | undefined>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      const contentEl = contentRef.current;
      setHeight(contentEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-lg mx-auto sm:max-w-sm lg:max-w-3xl my-4">
      <div className="rounded-lg overflow-hidden">
        <div
          className="flex items-center justify-between cursor-pointer py-2 px-6 bg-gray-100 dark:bg-gray-800"
          onClick={toggleAccordion}
        >
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-200">
            Accordion Title
          </div>
          <span>
            <AnimatedArrow isExpanded={isExpanded} />
          </span>
        </div>
        <div
          className="transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-800"
          style={{ height: height }}
        >
          <div ref={contentRef} className="px-6 py-4">
            <p className="text-base text-gray-700 dark:text-gray-300">
              Accordion content goes here...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BorderedAccordion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState<number | undefined>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      const contentEl = contentRef.current;
      setHeight(contentEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden max-w-lg mx-auto sm:max-w-sm lg:max-w-3xl my-4">
      <div>
        <div
          className={`border-b flex items-center justify-between cursor-pointer py-2 px-6 
            ${isExpanded ? "border-b dark:border-gray-600" : "border-none"}`}
          onClick={toggleAccordion}
        >
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-200">
            Accordion Title
          </div>
          <span>
            <AnimatedArrow isExpanded={isExpanded} />
          </span>
        </div>
        <div
          className="transition-all duration-300 ease-in-out"
          style={{ height: height }}
        >
          <div ref={contentRef} className="px-6 py-4">
            <p className="text-base text-gray-700 dark:text-gray-300">
              Accordion content goes here...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BasicAccordion, BorderedAccordion };
