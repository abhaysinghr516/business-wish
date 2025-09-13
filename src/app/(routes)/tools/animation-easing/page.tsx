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
  Palette,
  TrendingUp,
} from "lucide-react";

interface EasingFunction {
  name: string;
  value: string;
  description: string;
  category: string;
  intensity?: "gentle" | "moderate" | "strong";
}

const easingFunctions: EasingFunction[] = [
  // Linear
  {
    name: "Linear",
    value: "linear",
    description: "Constant speed throughout",
    category: "Linear",
    intensity: "gentle",
  },

  // Ease
  {
    name: "Ease",
    value: "ease",
    description: "Default browser easing",
    category: "Ease",
    intensity: "gentle",
  },
  {
    name: "Ease In",
    value: "ease-in",
    description: "Slow start, fast end",
    category: "Ease",
    intensity: "moderate",
  },
  {
    name: "Ease Out",
    value: "ease-out",
    description: "Fast start, slow end",
    category: "Ease",
    intensity: "moderate",
  },
  {
    name: "Ease In Out",
    value: "ease-in-out",
    description: "Slow start and end",
    category: "Ease",
    intensity: "moderate",
  },

  // Sine
  {
    name: "Ease In Sine",
    value: "cubic-bezier(0.12, 0, 0.39, 0)",
    description: "Gentle sine curve in",
    category: "Sine",
    intensity: "gentle",
  },
  {
    name: "Ease Out Sine",
    value: "cubic-bezier(0.61, 1, 0.88, 1)",
    description: "Gentle sine curve out",
    category: "Sine",
    intensity: "gentle",
  },
  {
    name: "Ease In Out Sine",
    value: "cubic-bezier(0.37, 0, 0.63, 1)",
    description: "Gentle sine curve both",
    category: "Sine",
    intensity: "gentle",
  },

  // Quad
  {
    name: "Ease In Quad",
    value: "cubic-bezier(0.11, 0, 0.5, 0)",
    description: "Quadratic acceleration",
    category: "Quad",
    intensity: "moderate",
  },
  {
    name: "Ease Out Quad",
    value: "cubic-bezier(0.5, 1, 0.89, 1)",
    description: "Quadratic deceleration",
    category: "Quad",
    intensity: "moderate",
  },
  {
    name: "Ease In Out Quad",
    value: "cubic-bezier(0.45, 0, 0.55, 1)",
    description: "Quadratic both directions",
    category: "Quad",
    intensity: "moderate",
  },

  // Cubic
  {
    name: "Ease In Cubic",
    value: "cubic-bezier(0.32, 0, 0.67, 0)",
    description: "Strong cubic acceleration",
    category: "Cubic",
    intensity: "strong",
  },
  {
    name: "Ease Out Cubic",
    value: "cubic-bezier(0.33, 1, 0.68, 1)",
    description: "Strong cubic deceleration",
    category: "Cubic",
    intensity: "strong",
  },
  {
    name: "Ease In Out Cubic",
    value: "cubic-bezier(0.65, 0, 0.35, 1)",
    description: "Strong cubic both directions",
    category: "Cubic",
    intensity: "strong",
  },

  // Quart
  {
    name: "Ease In Quart",
    value: "cubic-bezier(0.5, 0, 0.75, 0)",
    description: "Very strong acceleration",
    category: "Quart",
    intensity: "strong",
  },
  {
    name: "Ease Out Quart",
    value: "cubic-bezier(0.25, 1, 0.5, 1)",
    description: "Very strong deceleration",
    category: "Quart",
    intensity: "strong",
  },
  {
    name: "Ease In Out Quart",
    value: "cubic-bezier(0.76, 0, 0.24, 1)",
    description: "Very strong both directions",
    category: "Quart",
    intensity: "strong",
  },

  // Back
  {
    name: "Ease In Back",
    value: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    description: "Pulls back before moving",
    category: "Back",
    intensity: "strong",
  },
  {
    name: "Ease Out Back",
    value: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    description: "Overshoots then settles",
    category: "Back",
    intensity: "strong",
  },
  {
    name: "Ease In Out Back",
    value: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    description: "Pulls back and overshoots",
    category: "Back",
    intensity: "strong",
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

  // Calculate track width on mount and resize
  useEffect(() => {
    const updateTrackWidth = () => {
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        // Account for padding (24px on each side) and ball width (24px)
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

/* Keyframe Animation */
@keyframes slideAnimation {
  from { transform: translateX(0); }
  to { transform: translateX(${trackWidth}px); }
}

.slide-animation {
  animation: slideAnimation ${duration}ms ${easingValue} forwards;
}`;
  };

  const generateReactSpring = (easingValue: string) => {
    const bezier = parseCubicBezier(easingValue);
    if (!bezier) return "// Only works with cubic-bezier functions";

    return `import { useSpring, animated } from '@react-spring/web'

const MyComponent = () => {
  const styles = useSpring({
    from: { x: 0 },
    to: { x: ${trackWidth} },
    config: {
      duration: ${duration},
      easing: t => /* Custom easing function needed */
    }
  });

  return <animated.div style={styles} />;
};`;
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
      <div className="bg-white border border-gray-200 rounded-lg p-3">
        <svg
          width={size}
          height={size}
          viewBox="0 0 180 180"
          className="rounded-lg"
        >
          {/* Grid */}
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
                stroke="#f9fafb"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="180" height="180" fill="url(#grid)" />

          {/* Axes */}
          <line
            x1="0"
            y1="180"
            x2="180"
            y2="180"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="180"
            x2="0"
            y2="0"
            stroke="#e5e7eb"
            strokeWidth="2"
          />

          {/* Control lines */}
          <line
            x1="0"
            y1="180"
            x2={x1 * 180}
            y2={180 - y1 * 180}
            stroke="#f87171"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.7"
          />
          <line
            x1="180"
            y1="0"
            x2={x2 * 180}
            y2={180 - y2 * 180}
            stroke="#f87171"
            strokeWidth="1"
            strokeDasharray="3,3"
            opacity="0.7"
          />

          {/* Bezier curve */}
          <path
            d={`M 0 180 C ${x1 * 180} ${180 - y1 * 180} ${x2 * 180} ${
              180 - y2 * 180
            } 180 0`}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Control points */}
          <circle cx={x1 * 180} cy={180 - y1 * 180} r="3" fill="#f87171" />
          <circle cx={x2 * 180} cy={180 - y2 * 180} r="3" fill="#f87171" />

          {/* Start and end points */}
          <circle cx="0" cy="180" r="3" fill="#3b82f6" />
          <circle cx="180" cy="0" r="3" fill="#3b82f6" />

          {/* Coordinate labels */}
          <text
            x="8"
            y="174"
            fontSize="10"
            fill="#9ca3af"
            fontFamily="monospace"
          >
            0,1
          </text>
          <text
            x="155"
            y="12"
            fontSize="10"
            fill="#9ca3af"
            fontFamily="monospace"
          >
            1,0
          </text>
        </svg>
      </div>
    );
  };

  const getIntensityColor = (intensity?: string) => {
    switch (intensity) {
      case "gentle":
        return "bg-green-100 text-green-700 border-green-200";
      case "moderate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "strong":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 text-sm mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Animation Easing Studio
                </h1>
                <p className="text-gray-500 text-sm">
                  Interactive CSS timing functions with live preview
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>{animationCount} tests</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Easing Functions Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900">Easing Functions</h3>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {filteredEasings.length} functions
                </span>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-1 mb-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Easing List */}
              <div className="space-y-1 max-h-80 overflow-y-auto pr-1">
                {filteredEasings.map((easing, index) => (
                  <div
                    key={index}
                    className={`group relative p-2 rounded-lg border transition-colors cursor-pointer ${
                      selectedEasing.name === easing.name
                        ? "bg-blue-50 border-blue-200"
                        : "bg-white border-gray-200"
                    }`}
                    onClick={() => setSelectedEasing(easing)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="font-medium text-sm text-gray-900">
                            {easing.name}
                          </div>
                          {easing.intensity && (
                            <span
                              className={`text-xs px-1.5 py-0.5 rounded border ${getIntensityColor(
                                easing.intensity
                              )}`}
                            >
                              {easing.intensity}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {easing.description}
                        </div>
                        <div className="text-xs font-mono text-gray-400 mt-1 truncate">
                          {easing.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Easing */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900 mb-3">Custom Easing</h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Cubic Bezier Function
                  </label>
                  <input
                    type="text"
                    value={customEasing}
                    onChange={(e) => setCustomEasing(e.target.value)}
                    placeholder="cubic-bezier(0.25, 0.1, 0.25, 1)"
                    className="w-full px-2 py-1.5 border border-gray-200 rounded text-xs font-mono focus:outline-none focus:border-blue-300"
                  />
                </div>

                <button
                  onClick={() => runAnimation(customEasing)}
                  disabled={isAnimating}
                  className="w-full flex items-center justify-center gap-2 px-3 py-1.5 bg-orange-600 text-white rounded text-sm font-medium disabled:opacity-50"
                >
                  <Play className="h-3 w-3" />
                  Test Custom
                </button>
              </div>
            </div>
          </div>

          {/* Main Preview Area */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            {/* Animation Demo */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium text-gray-900">
                    Animation Preview
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {selectedEasing.name} • {selectedEasing.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => runAnimation(selectedEasing.value)}
                    disabled={isAnimating}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium disabled:opacity-50"
                  >
                    <Play className="h-3 w-3" />
                    Play
                  </button>
                  <button
                    onClick={resetAnimation}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-600 text-white rounded text-sm font-medium"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                  </button>
                </div>
              </div>

              {/* Duration Controls */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Duration: {duration}ms
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded appearance-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    Quick Presets
                  </label>
                  <div className="flex gap-1">
                    {presetDurations.slice(0, 4).map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setDuration(preset.value)}
                        className={`px-2 py-1 text-xs rounded transition-colors ${
                          duration === preset.value
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animation Track */}
              <div className="bg-gray-50 p-6 rounded-lg border">
                <div
                  ref={trackRef}
                  className="relative h-16 bg-white rounded border overflow-hidden min-w-0"
                >
                  {/* Track */}
                  <div className="absolute inset-0 flex items-center px-6">
                    <div className="w-full h-0.5 bg-gray-300"></div>
                  </div>

                  {/* Progress indicators */}
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-green-400 rounded-full"></div>
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-red-400 rounded-full"></div>

                  {/* Animated Ball */}
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                    <div
                      ref={ballRef}
                      className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-md border-2 border-white"
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-500 mt-2 px-6">
                  <span>Start (0%)</span>
                  <span className="font-mono">{selectedEasing.value}</span>
                  <span>End (100%)</span>
                </div>
              </div>

              {/* Animation Info */}
              {trackWidth > 0 && (
                <div className="mt-4 text-xs text-gray-500 text-center">
                  Animation distance: {trackWidth}px • Duration: {duration}ms
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bezier Curve */}
              {parseCubicBezier(selectedEasing.value) && (
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Timing Curve
                  </h3>
                  <div className="flex justify-center">
                    {drawBezierCurve(selectedEasing.value)}
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-xs text-gray-500">
                      Visual representation of animation timing
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Code Output */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-gray-600" />
                  <h3 className="font-medium text-gray-900">Generated Code</h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      copyToClipboard(generateCSS(selectedEasing.value), "CSS")
                    }
                    className="flex items-center gap-1 px-2 py-1 bg-gray-100 border border-gray-200 rounded text-xs"
                  >
                    {copiedText === "CSS" ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    Copy CSS
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-xs overflow-x-auto">
                <pre className="bg-gray-900 text-gray-100">
                  <code>{generateCSS(selectedEasing.value)}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Features Section */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="h-5 w-5 text-blue-600" />
            <h3 className="font-medium text-gray-900">Enhanced Features</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Interactive Testing
              </h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Real-time animation preview</li>
                <li>• Adjustable duration controls</li>
                <li>• Quick preset durations</li>
                <li>• Animation counter tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Advanced Visualization
              </h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Bezier curve visualization</li>
                <li>• Intensity indicators</li>
                <li>• Category organization</li>
                <li>• Responsive animation track</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">
                Code Generation
              </h4>
              <ul className="text-gray-600 space-y-1">
                <li>• CSS transitions & keyframes</li>
                <li>• Custom cubic-bezier testing</li>
                <li>• Copy-ready code snippets</li>
                <li>• Dynamic distance calculation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
