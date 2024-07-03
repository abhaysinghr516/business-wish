import React, { useState } from "react";

const BasicAccordion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-header flex items-center justify-between cursor-pointer py-2 px-6 bg-gray-100"
          onClick={toggleAccordion}
        >
          <div className="text-lg font-semibold">Accordion Title</div>
          <span className="accordion-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        {isExpanded && (
          <div className="accordion-body px-6 py-4 bg-gray-50">
            <p className="text-base">Accordion content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

const BorderedAccordion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion border border-gray-300 rounded-lg">
      <div className="accordion-item">
        <div
          className={`accordion-header border-b flex items-center justify-between cursor-pointer py-4 px-6 
            // add conditional classes here based on the state of the accordion
            ${isExpanded ? "border-b" : "border-none"}
            `}
          onClick={toggleAccordion}
        >
          <div className="text-lg font-semibold">Accordion Title</div>
          <span className="accordion-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transform ${isExpanded ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        {isExpanded && (
          <div className="accordion-body px-6 py-4">
            <p className="text-base">Accordion content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { BasicAccordion, BorderedAccordion };
