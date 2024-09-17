"use client";

import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4 relative overflow-hidden">
      {/* Floating UI Components Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <defs>
          <pattern
            id="grid-pattern"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100" height="100" fill="none" />
            <path
              d="M 0 0 L 100 0 100 100 0 100 Z"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        {/* Floating UI Components */}
        <g>
          <rect
            x="10%"
            y="20%"
            width="80"
            height="40"
            rx="5"
            fill="#3B82F6"
            opacity="0.2"
          >
            <animateMotion
              path="M0 0 L20 -10 L40 10 L60 -20 Z"
              dur="20s"
              repeatCount="indefinite"
            />
          </rect>
          <circle cx="30%" cy="70%" r="25" fill="#10B981" opacity="0.2">
            <animateMotion
              path="M0 0 Q30 -30 60 0 T120 0"
              dur="25s"
              repeatCount="indefinite"
            />
          </circle>
          <path
            d="M0,0 L30,0 L15,25 Z"
            fill="#EF4444"
            opacity="0.2"
            transform="translate(70%, 40%)"
          >
            <animateMotion
              path="M0 0 Q-30 50 0 100 T0 200"
              dur="22s"
              repeatCount="indefinite"
            />
          </path>
          <rect
            x="80%"
            y="80%"
            width="60"
            height="60"
            rx="10"
            fill="#F59E0B"
            opacity="0.2"
          >
            <animateMotion
              path="M0 0 L-20 20 L-40 -10 L-60 30 Z"
              dur="28s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>

      <div className="relative w-full max-w-4xl">
        {/* Background blur effect */}
        <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-3xl shadow-2xl"></div>

        {/* Content */}
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center">
          {/* Left side: Text content */}
          <div className="flex-1 text-gray-800 mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Exciting Templates
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">
              Coming Soon
            </h2>
            <p className="text-lg md:text-xl leading-relaxed">
              I&apos;m crafting a stunning, versatile template to elevate your
              projects. Putting the finishing touches on a design that will
              transform your ideas into reality.
            </p>
          </div>

          {/* Right side: Minimal yet vibrant SVG emoji */}
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Background circle */}
              <circle cx="100" cy="100" r="90" fill="#FFE0B2" />

              {/* Robot body */}
              <rect
                x="70"
                y="80"
                width="60"
                height="70"
                rx="10"
                fill="#64B5F6"
              />

              {/* Robot head */}
              <rect
                x="75"
                y="40"
                width="50"
                height="45"
                rx="5"
                fill="#64B5F6"
              />
              <line
                x1="85"
                y1="80"
                x2="85"
                y2="85"
                stroke="#1565C0"
                strokeWidth="2"
              />
              <line
                x1="115"
                y1="80"
                x2="115"
                y2="85"
                stroke="#1565C0"
                strokeWidth="2"
              />

              {/* Robot eyes */}
              <circle cx="90" cy="60" r="8" fill="white" />
              <circle cx="110" cy="60" r="8" fill="white" />
              <circle cx="90" cy="60" r="4" fill="#1565C0">
                <animate
                  attributeName="cy"
                  values="60;58;60"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="110" cy="60" r="4" fill="#1565C0">
                <animate
                  attributeName="cy"
                  values="60;58;60"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Robot antenna */}
              <line
                x1="100"
                y1="40"
                x2="100"
                y2="25"
                stroke="#1565C0"
                strokeWidth="2"
              />
              <circle cx="100" cy="22" r="4" fill="#F44336">
                <animate
                  attributeName="r"
                  values="4;5;4"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Robot arms */}
              <line
                x1="70"
                y1="100"
                x2="50"
                y2="120"
                stroke="#1565C0"
                strokeWidth="8"
                strokeLinecap="round"
              >
                <animate
                  attributeName="x2"
                  values="50;45;50"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values="120;115;120"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="130"
                y1="100"
                x2="150"
                y2="120"
                stroke="#1565C0"
                strokeWidth="8"
                strokeLinecap="round"
              >
                <animate
                  attributeName="x2"
                  values="150;155;150"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y2"
                  values="120;115;120"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>

              {/* "Coming Soon" text */}
              <text
                x="100"
                y="180"
                font-family="Arial, sans-serif"
                font-size="16"
                fill="#1565C0"
                text-anchor="middle"
                font-weight="bold"
              >
                Coming Soon
                <animate
                  attributeName="y"
                  values="180;178;180"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
