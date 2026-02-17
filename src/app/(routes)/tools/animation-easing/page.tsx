"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Copy,
  Check,
  Play,
  RotateCcw,
  Code2,
  TrendingUp,
} from "lucide-react";

interface EasingFunction {
  name: string;
  value: string;
  description: string;
  category: string;
}

const easingFunctions: EasingFunction[] = [
  {
    name: "Linear",
    value: "linear",
    description: "Constant speed throughout",
    category: "Linear",
  },
  {
    name: "Ease",
    value: "ease",
    description: "Default browser easing",
    category: "Ease",
  },
  {
    name: "Ease In",
    value: "ease-in",
    description: "Slow start, fast end",
    category: "Ease",
  },
  {
    name: "Ease Out",
    value: "ease-out",
    description: "Fast start, slow end",
    category: "Ease",
  },
  {
    name: "Ease In Out",
    value: "ease-in-out",
    description: "Slow start and end",
    category: "Ease",
  },
  {
    name: "Ease In Sine",
    value: "cubic-bezier(0.12, 0, 0.39, 0)",
    description: "Gentle sine curve in",
    category: "Sine",
  },
  {
    name: "Ease Out Sine",
    value: "cubic-bezier(0.61, 1, 0.88, 1)",
    description: "Gentle sine curve out",
    category: "Sine",
  },
  {
    name: "Ease In Out Sine",
    value: "cubic-bezier(0.37, 0, 0.63, 1)",
    description: "Gentle sine curve both",
    category: "Sine",
  },
  {
    name: "Ease In Quad",
    value: "cubic-bezier(0.11, 0, 0.5, 0)",
    description: "Quadratic acceleration",
    category: "Quad",
  },
  {
    name: "Ease Out Quad",
    value: "cubic-bezier(0.5, 1, 0.89, 1)",
    description: "Quadratic deceleration",
    category: "Quad",
  },
  {
    name: "Ease In Out Quad",
    value: "cubic-bezier(0.45, 0, 0.55, 1)",
    description: "Quadratic both directions",
    category: "Quad",
  },
  {
    name: "Ease In Cubic",
    value: "cubic-bezier(0.32, 0, 0.67, 0)",
    description: "Strong cubic acceleration",
    category: "Cubic",
  },
  {
    name: "Ease Out Cubic",
    value: "cubic-bezier(0.33, 1, 0.68, 1)",
    description: "Strong cubic deceleration",
    category: "Cubic",
  },
  {
    name: "Ease In Out Cubic",
    value: "cubic-bezier(0.65, 0, 0.35, 1)",
    description: "Strong cubic both directions",
    category: "Cubic",
  },
  {
    name: "Ease In Quart",
    value: "cubic-bezier(0.5, 0, 0.75, 0)",
    description: "Very strong acceleration",
    category: "Quart",
  },
  {
    name: "Ease Out Quart",
    value: "cubic-bezier(0.25, 1, 0.5, 1)",
    description: "Very strong deceleration",
    category: "Quart",
  },
  {
    name: "Ease In Out Quart",
    value: "cubic-bezier(0.76, 0, 0.24, 1)",
    description: "Very strong both directions",
    category: "Quart",
  },
  {
    name: "Ease In Back",
    value: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    description: "Pulls back before moving",
    category: "Back",
  },
  {
    name: "Ease Out Back",
    value: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    description: "Overshoots then settles",
    category: "Back",
  },
  {
    name: "Ease In Out Back",
    value: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    description: "Pulls back and overshoots",
    category: "Back",
  },
];

const presetDurations = [
  { label: "Fast", value: 200 },
  { label: "Quick", value: 350 },
  { label: "Normal", value: 500 },
  { label: "Smooth", value: 800 },
  { label: "Slow", value: 1200 },
  { label: "Very Slow", value: 2000 },
];

export default function AnimationEasing() {
  const [selectedEasing, setSelectedEasing] = useState(easingFunctions[0]);
  const [customEasing, setCustomEasing] = useState(
    "cubic-bezier(0.25, 0.1, 0.25, 1)"
  );
  const [duration, setDuration] = useState(500);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copiedText, setCopiedText] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [animationCount, setAnimationCount] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  const ballRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(easingFunctions.map((f) => f.category))),
  ];

  const filteredEasings =
    activeCategory === "All"
      ? easingFunctions
      : easingFunctions.filter((f) => f.category === activeCategory);

  useEffect(() => {
    const updateTrackWidth = () => {
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        setTrackWidth(rect.width - 48 - 24);
      }
    };

    updateTrackWidth();
    window.addEventListener("resize", updateTrackWidth);
    return () => window.removeEventListener("resize", updateTrackWidth);
  }, []);

  const runAnimation = (easingValue: string) => {
    if (!ballRef.current || trackWidth === 0) return;

    if (animationRef.current) {
      animationRef.current.cancel();
    }

    setIsAnimating(true);
    setAnimationCount((prev) => prev + 1);

    ballRef.current.style.transform = "translateX(0)";

    const animation = ballRef.current.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(${trackWidth}px)` },
      ],
      {
        duration: duration,
        easing: easingValue,
        fill: "forwards",
      }
    );

    animationRef.current = animation;

    animation.addEventListener("finish", () => {
      setIsAnimating(false);
    });
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      animationRef.current.cancel();
    }
    if (ballRef.current) {
      ballRef.current.style.transform = "translateX(0)";
    }
    setIsAnimating(false);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error("Failed to copy");
    }
  };

  const generateCSS = (easingValue: string) => {
    return `.animated-element {
  transition: all ${duration}ms ${easingValue};
}

@keyframes slideAnimation {
  from { transform: translateX(0); }
  to { transform: translateX(${trackWidth}px); }
}

.slide-animation {
  animation: slideAnimation ${duration}ms ${easingValue} forwards;
}`;
  };

  const parseCubicBezier = (value: string) => {
    const match = value.match(
      /cubic-bezier\(([-\d.]+),\s*([-\d.]+),\s*([-\d.]+),\s*([-\d.]+)\)/
    );
    if (match) {
      return {
        x1: parseFloat(match[1]),
        y1: parseFloat(match[2]),
        x2: parseFloat(match[3]),
        y2: parseFloat(match[4]),
      };
    }
    return null;
  };

  const drawBezierCurve = (easingValue: string) => {
    const bezier = parseCubicBezier(easingValue);
    if (!bezier) return null;

    const { x1, y1, x2, y2 } = bezier;
    const size = 180;

    return (
      <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-3">
        <svg
          width={size}
          height={size}
          viewBox="0 0 180 180"
          className="rounded-lg"
        >
          <defs>
            <pattern
              id="grid"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 18 0 L 0 0 0 18"
                fill="none"
                className="stroke-stone-100 dark:stroke-stone-800"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="180" height="180" fill="url(#grid)" />

          <line
            x1="0"
            y1="180"
            x2="180"
            y2="180"
            className="stroke-stone-300 dark:stroke-stone-600"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="180"
            x2="0"
            y2="0"
            className="stroke-stone-300 dark:stroke-stone-600"
            strokeWidth="2"
          />

          {/* Control point lines */}
          <line
            x1="0"
            y1="180"
            x2={x1 * 180}
            y2={180 - y1 * 180}
            className="stroke-stone-400 dark:stroke-stone-500"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.7"
          />
          <line
            x1="180"
            y1="0"
            x2={x2 * 180}
            y2={180 - y2 * 180}
            className="stroke-stone-400 dark:stroke-stone-500"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.7"
          />

          {/* Curve */}
          <path
            d={`M 0 180 C ${x1 * 180} ${180 - y1 * 180} ${x2 * 180} ${
              180 - y2 * 180
            } 180 0`}
            fill="none"
            className="stroke-stone-900 dark:stroke-stone-100"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Control points */}
          <circle cx={x1 * 180} cy={180 - y1 * 180} r="3" className="fill-stone-500 dark:fill-stone-400" />
          <circle cx={x2 * 180} cy={180 - y2 * 180} r="3" className="fill-stone-500 dark:fill-stone-400" />

          {/* Start/End points */}
          <circle cx="0" cy="180" r="3" className="fill-stone-900 dark:fill-stone-100" />
          <circle cx="180" cy="0" r="3" className="fill-stone-900 dark:fill-stone-100" />

          <text
            x="8"
            y="174"
            fontSize="10"
            className="fill-stone-400 dark:fill-stone-500"
            fontFamily="monospace"
          >
            0,1
          </text>
          <text
            x="155"
            y="12"
            fontSize="10"
            className="fill-stone-400 dark:fill-stone-500"
            fontFamily="monospace"
          >
            1,0
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
                <Zap className="h-5 w-5 text-white dark:text-stone-900" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                  Animation Easing Studio
                </h1>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  Interactive CSS timing functions with live preview
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400">
              <TrendingUp className="h-4 w-4" />
              <span>{animationCount} tests</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  Easing Functions
                </h3>
                <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded">
                  {filteredEasings.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
                        : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                {filteredEasings.map((easing, index) => (
                  <div
                    key={index}
                    className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                      selectedEasing.name === easing.name
                        ? "border-stone-900 dark:border-stone-100 bg-stone-50 dark:bg-stone-900"
                        : "border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
                    }`}
                    onClick={() => setSelectedEasing(easing)}
                  >
                    <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                      {easing.name}
                    </div>
                    <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      {easing.description}
                    </div>
                    <div className="text-xs font-mono text-stone-400 dark:text-stone-500 mt-0.5 truncate">
                      {easing.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Easing */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-4">
              <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-3">
                Custom Easing
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                    Cubic Bezier Function
                  </label>
                  <input
                    type="text"
                    value={customEasing}
                    onChange={(e) => setCustomEasing(e.target.value)}
                    placeholder="cubic-bezier(0.25, 0.1, 0.25, 1)"
                    className="w-full px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg text-xs font-mono focus:outline-none focus:border-stone-400 dark:focus:border-stone-500 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100"
                  />
                </div>

                <button
                  onClick={() => runAnimation(customEasing)}
                  disabled={isAnimating}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
                >
                  <Play className="h-3 w-3" />
                  Test Custom
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            {/* Animation Preview */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                    Animation Preview
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {selectedEasing.name} — {selectedEasing.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => runAnimation(selectedEasing.value)}
                    disabled={isAnimating}
                    className="flex items-center gap-2 px-3 py-1.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium disabled:opacity-50 hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
                  >
                    <Play className="h-3 w-3" />
                    Play
                  </button>
                  <button
                    onClick={resetAnimation}
                    className="flex items-center gap-2 px-3 py-1.5 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-lg text-sm hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Duration Controls */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Duration: {duration}ms
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-2">
                    Quick Presets
                  </label>
                  <div className="flex gap-1">
                    {presetDurations.slice(0, 4).map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setDuration(preset.value)}
                        className={`px-2 py-1 text-xs rounded-md transition-colors ${
                          duration === preset.value
                            ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
                            : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300"
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Track */}
              <div className="bg-stone-50 dark:bg-stone-900 p-6 rounded-lg border border-stone-200 dark:border-stone-800">
                <div
                  ref={trackRef}
                  className="relative h-16 bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden min-w-0"
                >
                  <div className="absolute inset-0 flex items-center px-6">
                    <div className="w-full h-px bg-stone-300 dark:bg-stone-700"></div>
                  </div>

                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-px h-4 bg-stone-400 dark:bg-stone-500"></div>
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-px h-4 bg-stone-400 dark:bg-stone-500"></div>

                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                    <div
                      ref={ballRef}
                      className="w-6 h-6 bg-stone-900 dark:bg-stone-100 rounded-full"
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-stone-500 dark:text-stone-400 mt-2 px-6">
                  <span>Start (0%)</span>
                  <span className="font-mono">{selectedEasing.value}</span>
                  <span>End (100%)</span>
                </div>
              </div>

              {trackWidth > 0 && (
                <div className="mt-3 text-xs text-stone-400 dark:text-stone-500 text-center">
                  Animation distance: {trackWidth}px · Duration: {duration}ms
                </div>
              )}
            </div>

            {/* Bezier Curve + Code */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {parseCubicBezier(selectedEasing.value) && (
                <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-3">
                    Timing Curve
                  </h3>
                  <div className="flex justify-center">
                    {drawBezierCurve(selectedEasing.value)}
                  </div>
                  <div className="mt-3 text-center text-xs text-stone-500 dark:text-stone-400">
                    Visual representation of animation timing
                  </div>
                </div>
              )}
            </div>

            {/* Generated Code */}
            <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
              <div className="px-4 py-3 flex items-center justify-between border-b border-stone-200 dark:border-stone-800">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-stone-500 dark:text-stone-400" />
                  <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                    Generated Code
                  </h3>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(generateCSS(selectedEasing.value), "CSS")
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                >
                  {copiedText === "CSS" ? (
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copiedText === "CSS" ? "Copied" : "Copy CSS"}
                </button>
              </div>

              <div className="p-4 bg-stone-900">
                <pre className="text-xs font-mono text-stone-100 leading-relaxed overflow-x-auto">
                  <code>{generateCSS(selectedEasing.value)}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
