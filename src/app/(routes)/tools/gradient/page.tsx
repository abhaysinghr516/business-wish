"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Zap,
  Copy,
  Check,
  Plus,
  Trash2,
  Shuffle,
  Settings,
  Image as ImageIcon,
} from "lucide-react";

interface ColorStop {
  id: string;
  color: string;
  position: number;
}

interface GradientConfig {
  type: "linear" | "radial";
  angle: number;
  colorStops: ColorStop[];
  radialShape: "circle" | "ellipse";
  radialSize:
    | "closest-side"
    | "closest-corner"
    | "farthest-side"
    | "farthest-corner";
}

export default function GradientGenerator() {
  const [config, setConfig] = useState<GradientConfig>({
    type: "linear",
    angle: 45,
    colorStops: [
      { id: "1", color: "#3B82F6", position: 0 },
      { id: "2", color: "#8B5CF6", position: 100 },
    ],
    radialShape: "circle",
    radialSize: "farthest-corner",
  });
  const [copiedText, setCopiedText] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [previewSize, setPreviewSize] = useState<"small" | "medium" | "large">(
    "medium"
  );
  const [opacity, setOpacity] = useState(100);

  const generateCSS = (): string => {
    const stops = config.colorStops
      .sort((a, b) => a.position - b.position)
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(", ");

    let gradient = "";
    switch (config.type) {
      case "linear":
        gradient = `linear-gradient(${config.angle}deg, ${stops})`;
        break;
      case "radial":
        gradient = `radial-gradient(${config.radialShape} ${config.radialSize}, ${stops})`;
        break;
      default:
        gradient = "";
    }

    return `background: ${gradient};${
      opacity < 100 ? ` opacity: ${opacity / 100};` : ""
    }`;
  };

  const addColorStop = () => {
    const newStop: ColorStop = {
      id: Date.now().toString(),
      color: "#FF0000",
      position: 50,
    };
    setConfig((prev) => ({
      ...prev,
      colorStops: [...prev.colorStops, newStop].sort(
        (a, b) => a.position - b.position
      ),
    }));
  };

  const removeColorStop = (id: string) => {
    if (config.colorStops.length > 2) {
      setConfig((prev) => ({
        ...prev,
        colorStops: prev.colorStops.filter((stop) => stop.id !== id),
      }));
    }
  };

  const updateColorStop = (id: string, updates: Partial<ColorStop>) => {
    setConfig((prev) => ({
      ...prev,
      colorStops: prev.colorStops.map((stop) =>
        stop.id === id ? { ...stop, ...updates } : stop
      ),
    }));
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    } catch {
      console.error("Failed to copy to clipboard");
    }
  };

  const randomizeGradient = () => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
      "#F7DC6F",
      "#BB8FCE",
      "#A8E6CF",
      "#FFD93D",
      "#6BCF7F",
    ];
    const randomColors = Array.from(
      { length: Math.floor(Math.random() * 3) + 2 },
      (_, i) => ({
        id: Date.now().toString() + i,
        color: colors[Math.floor(Math.random() * colors.length)],
        position: Math.round((i * 100) / (Math.floor(Math.random() * 2) + 1)),
      })
    );

    setConfig((prev) => ({
      ...prev,
      colorStops: randomColors,
      angle: Math.floor(Math.random() * 360),
    }));
  };

  const downloadGradientAsImage = () => {
    const canvas = document.createElement("canvas");
    const size = 1200;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      let gradient;
      if (config.type === "linear") {
        const radians = (config.angle * Math.PI) / 180;
        const x1 = size / 2 + (Math.cos(radians) * size) / 2;
        const y1 = size / 2 + (Math.sin(radians) * size) / 2;
        const x2 = size / 2 - (Math.cos(radians) * size) / 2;
        const y2 = size / 2 - (Math.sin(radians) * size) / 2;
        gradient = ctx.createLinearGradient(x1, y1, x2, y2);
      } else {
        gradient = ctx.createRadialGradient(
          size / 2,
          size / 2,
          0,
          size / 2,
          size / 2,
          size / 2
        );
      }

      config.colorStops.forEach((stop) => {
        gradient.addColorStop(stop.position / 100, stop.color);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      const link = document.createElement("a");
      link.download = `gradient-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    }
  };

  const loadPreset = (
    preset:
      | "sunset"
      | "ocean"
      | "forest"
      | "purple"
      | "rainbow"
      | "minimal"
      | "neon"
      | "earth"
  ) => {
    const presets = {
      sunset: [
        { id: "1", color: "#FF6B6B", position: 0 },
        { id: "2", color: "#FFE66D", position: 50 },
        { id: "3", color: "#FF8E53", position: 100 },
      ],
      ocean: [
        { id: "1", color: "#667eea", position: 0 },
        { id: "2", color: "#764ba2", position: 100 },
      ],
      forest: [
        { id: "1", color: "#134E5E", position: 0 },
        { id: "2", color: "#71B280", position: 100 },
      ],
      purple: [
        { id: "1", color: "#667eea", position: 0 },
        { id: "2", color: "#764ba2", position: 100 },
      ],
      rainbow: [
        { id: "1", color: "#FF0000", position: 0 },
        { id: "2", color: "#FF7F00", position: 16.66 },
        { id: "3", color: "#FFFF00", position: 33.33 },
        { id: "4", color: "#00FF00", position: 50 },
        { id: "5", color: "#0000FF", position: 66.66 },
        { id: "6", color: "#4B0082", position: 83.33 },
        { id: "7", color: "#9400D3", position: 100 },
      ],
      minimal: [
        { id: "1", color: "#F8F9FA", position: 0 },
        { id: "2", color: "#E9ECEF", position: 100 },
      ],
      neon: [
        { id: "1", color: "#FF006E", position: 0 },
        { id: "2", color: "#00F5FF", position: 100 },
      ],
      earth: [
        { id: "1", color: "#8B4513", position: 0 },
        { id: "2", color: "#DEB887", position: 50 },
        { id: "3", color: "#F4E4C1", position: 100 },
      ],
    };
    setConfig((prev) => ({ ...prev, colorStops: presets[preset] }));
  };

  const previewHeights = {
    small: "h-28",
    medium: "h-40",
    large: "h-56",
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  CSS Gradient Generator
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Create beautiful gradients with live preview
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={randomizeGradient}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
              >
                <Shuffle className="h-4 w-4" />
                Random
              </button>
              <button
                onClick={downloadGradientAsImage}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md text-sm font-medium shadow-sm"
              >
                <ImageIcon className="h-4 w-4" />
                Export PNG
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
          <div className="xl:col-span-2 space-y-5">
            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 text-sm">
                Gradient Type
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {["linear", "radial"].map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      setConfig((prev) => ({ ...prev, type: type as any }))
                    }
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      config.type === type
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    {type[0].toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {config.type === "linear" ? "Direction" : "Angle"}
                </h3>
                <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded font-mono">
                  {config.angle}°
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={config.angle}
                onChange={(e) =>
                  setConfig((prev) => ({
                    ...prev,
                    angle: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
              />
            </div>

            {config.type === "radial" && (
              <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-4 shadow-sm space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Shape
                  </label>
                  <select
                    value={config.radialShape}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        radialShape: e.target.value as any,
                      }))
                    }
                    className="w-full px-2 py-1.5 border border-gray-200 dark:border-gray-700 rounded-md text-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                  >
                    <option value="circle">Circle</option>
                    <option value="ellipse">Ellipse</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Size
                  </label>
                  <select
                    value={config.radialSize}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        radialSize: e.target.value as any,
                      }))
                    }
                    className="w-full px-2 py-1.5 border border-gray-200 dark:border-gray-700 rounded-md text-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                  >
                    <option value="closest-side">Closest Side</option>
                    <option value="closest-corner">Closest Corner</option>
                    <option value="farthest-side">Farthest Side</option>
                    <option value="farthest-corner">Farthest Corner</option>
                  </select>
                </div>
              </div>
            )}

            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  Color Stops
                </h3>
                <button
                  onClick={addColorStop}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md text-xs font-medium"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add
                </button>
              </div>

              <div className="space-y-2">
                {config.colorStops.map((stop) => (
                  <div
                    key={stop.id}
                    className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-900 rounded-md"
                  >
                    <input
                      type="color"
                      value={stop.color}
                      onChange={(e) =>
                        updateColorStop(stop.id, { color: e.target.value })
                      }
                      className="w-8 h-8 rounded-md border border-gray-200 dark:border-gray-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={stop.color}
                      onChange={(e) =>
                        updateColorStop(stop.id, { color: e.target.value })
                      }
                      className="flex-1 px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-md font-mono text-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={stop.position}
                      onChange={(e) =>
                        updateColorStop(stop.id, {
                          position: Number(e.target.value),
                        })
                      }
                      className="w-14 px-1.5 py-1 border border-gray-200 dark:border-gray-700 rounded-md text-xs text-center bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    />
                    {config.colorStops.length > 2 && (
                      <button
                        onClick={() => removeColorStop(stop.id)}
                        className="p-1 text-red-500 dark:text-red-400 rounded"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-4 shadow-sm">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full mb-2"
              >
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  Advanced Settings
                </h3>
                <Settings
                  className={`h-4 w-4 text-gray-500 dark:text-gray-400 ${
                    showAdvanced ? "rotate-90" : ""
                  }`}
                />
              </button>
              {showAdvanced && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Opacity: {opacity}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={opacity}
                      onChange={(e) => setOpacity(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Preview Size
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["small", "medium", "large"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setPreviewSize(size as any)}
                          className={`px-2 py-1 rounded-md text-xs font-medium ${
                            previewSize === size
                              ? "bg-indigo-600 text-white"
                              : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          {size[0].toUpperCase() + size.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="xl:col-span-3 space-y-5">
            <div
              className={`w-full ${previewHeights[previewSize]} rounded-lg border border-gray-200/50 dark:border-gray-800/50 shadow-sm`}
              style={{
                background: generateCSS()
                  .split(";")[0]
                  .replace("background: ", ""),
                opacity: opacity / 100,
              }}
            ></div>
            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  CSS Code
                </h3>
                <button
                  onClick={() => copyToClipboard(generateCSS(), "CSS Code")}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md text-xs font-medium"
                >
                  {copiedText === "CSS Code" ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg">
                <code className="text-sm font-mono text-gray-100 break-all leading-relaxed">
                  {generateCSS()}
                </code>
              </div>
            </div>
            <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 text-sm">
                Presets
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: "Sunset", key: "sunset" },
                  { name: "Ocean", key: "ocean" },
                  { name: "Forest", key: "forest" },
                  { name: "Purple", key: "purple" },
                  { name: "Rainbow", key: "rainbow" },
                  { name: "Minimal", key: "minimal" },
                  { name: "Neon", key: "neon" },
                  { name: "Earth", key: "earth" },
                ].map((preset) => (
                  <button
                    key={preset.key}
                    onClick={() => loadPreset(preset.key as any)}
                    className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
