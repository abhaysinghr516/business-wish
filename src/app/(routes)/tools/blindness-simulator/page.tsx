"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Info, Users, Plus, X } from "lucide-react";

interface ColorBlindnessType {
  name: string;
  description: string;
  prevalence: string;
  severity: "mild" | "moderate" | "severe";
}

const colorBlindnessTypes: Record<string, ColorBlindnessType> = {
  normal: {
    name: "Normal Vision",
    description: "Full color vision",
    prevalence: "92% of men, 99.5% of women",
    severity: "mild",
  },
  protanopia: {
    name: "Protanopia",
    description: "No red receptors",
    prevalence: "1% of men",
    severity: "severe",
  },
  deuteranopia: {
    name: "Deuteranopia",
    description: "No green receptors",
    prevalence: "1% of men",
    severity: "severe",
  },
  tritanopia: {
    name: "Tritanopia",
    description: "No blue receptors",
    prevalence: "0.001% of population",
    severity: "severe",
  },
  deuteranomaly: {
    name: "Deuteranomaly",
    description: "Reduced green sensitivity",
    prevalence: "5% of men, 0.4% of women",
    severity: "moderate",
  },
  protanomaly: {
    name: "Protanomaly",
    description: "Reduced red sensitivity",
    prevalence: "1% of men",
    severity: "mild",
  },
  achromatopsia: {
    name: "Achromatopsia",
    description: "Complete color blindness",
    prevalence: "0.003% of population",
    severity: "severe",
  },
};

export default function ColorBlindnessSimulator() {
  const [selectedType, setSelectedType] = useState("normal");
  const [testColors, setTestColors] = useState<string[]>([
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#000000",
  ]);

  const [newColor, setNewColor] = useState("#000000");

  const simulateColorBlindness = useCallback(
    (hex: string, type: string): string => {
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
          ? {
              r: parseInt(result[1], 16) / 255,
              g: parseInt(result[2], 16) / 255,
              b: parseInt(result[3], 16) / 255,
            }
          : { r: 0, g: 0, b: 0 };
      };

      const rgbToHex = (r: number, g: number, b: number) => {
        const toHex = (n: number) => {
          const hex = Math.round(Math.max(0, Math.min(255, n * 255))).toString(
            16
          );
          return hex.length === 1 ? "0" + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      };

      const { r, g, b } = hexToRgb(hex);

      switch (type) {
        case "protanopia":
          return rgbToHex(g * 0.9, g, b);
        case "protanomaly":
          return rgbToHex(r * 0.8 + g * 0.2, g * 0.9 + r * 0.1, b);
        case "deuteranopia":
          return rgbToHex(r, g * 0.9, b);
        case "deuteranomaly":
          return rgbToHex(r * 0.9 + g * 0.1, g * 0.8 + r * 0.2, b);
        case "tritanopia":
          return rgbToHex(r, g, b * 0.9);
        case "achromatopsia":
          const gray = 0.299 * r + 0.587 * g + 0.114 * b;
          return rgbToHex(gray, gray, gray);
        default:
          return hex;
      }
    },
    []
  );

  const handleAddColor = () => {
    if (!testColors.includes(newColor)) {
      setTestColors([...testColors, newColor]);
    }
  };

  const handleRemoveColor = (color: string) => {
    setTestColors(testColors.filter((c) => c !== color));
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

          <div className="flex items-center gap-3">
            <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
              <Eye className="h-5 w-5 text-white dark:text-stone-900" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                Color Blindness Simulator
              </h1>
              <p className="text-stone-500 dark:text-stone-400 text-sm">
                See how colors appear to people with different types of color
                vision
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Vision Type Selection */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-3">
            Select Vision Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {Object.entries(colorBlindnessTypes).map(([key, type]) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`p-3 rounded-lg border text-left transition-colors text-sm ${
                  selectedType === key
                    ? "border-stone-900 dark:border-stone-100 bg-stone-50 dark:bg-stone-900"
                    : "border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
                }`}
              >
                <h3 className="font-medium text-stone-900 dark:text-stone-100 text-xs">
                  {type.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  {type.description}
                </p>
                <p className="text-xs text-stone-400 dark:text-stone-500 mt-0.5">
                  {type.prevalence}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Info Bar */}
        <div className="border border-stone-200 dark:border-stone-800 rounded-lg px-4 py-3 mb-6 flex items-center gap-3">
          <Info className="h-4 w-4 text-stone-500 dark:text-stone-400 flex-shrink-0" />
          <div className="flex-1">
            <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
              {colorBlindnessTypes[selectedType].name}
            </span>
            <span className="text-sm text-stone-500 dark:text-stone-400 mx-2">
              —
            </span>
            <span className="text-sm text-stone-500 dark:text-stone-400">
              {colorBlindnessTypes[selectedType].description}
            </span>
          </div>
          <span className="text-xs text-stone-500 dark:text-stone-400">
            Affects: {colorBlindnessTypes[selectedType].prevalence}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Color Simulation */}
          <div>
            <h2 className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-4">
              Color Simulation
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-4">
              {testColors.map((color, index) => {
                const simulatedColor = simulateColorBlindness(
                  color,
                  selectedType
                );
                return (
                  <div
                    key={index}
                    className="border border-stone-200 dark:border-stone-800 rounded-lg p-3 relative"
                  >
                    <button
                      onClick={() => handleRemoveColor(color)}
                      className="absolute top-2 right-2 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300"
                    >
                      <X className="h-3 w-3" />
                    </button>
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">
                          Original
                        </div>
                        <div
                          className="w-full h-10 rounded-md border border-stone-200 dark:border-stone-700"
                          style={{ backgroundColor: color }}
                        />
                        <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mt-1">
                          {color}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mb-1">
                          Simulated
                        </div>
                        <div
                          className="w-full h-10 rounded-md border border-stone-200 dark:border-stone-700"
                          style={{ backgroundColor: simulatedColor }}
                        />
                        <div className="text-xs font-mono text-stone-500 dark:text-stone-400 mt-1">
                          {simulatedColor}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <input
                type="color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                className="h-10 w-14 rounded-lg border border-stone-200 dark:border-stone-700 cursor-pointer"
              />
              <button
                onClick={handleAddColor}
                className="flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 hover:bg-stone-800 dark:hover:bg-stone-200 text-white dark:text-stone-900 rounded-lg text-sm font-medium transition-colors"
              >
                <Plus className="h-4 w-4" />
                Add Color
              </button>
            </div>
          </div>

          {/* UI Element Examples */}
          <div>
            <h2 className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-4">
              UI Element Examples
            </h2>
            <div className="space-y-4">
              {/* Original Design */}
              <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-4">
                <h3 className="text-xs font-medium text-stone-900 dark:text-stone-100 mb-3">
                  Original Design
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">
                      Error
                    </button>
                    <button className="px-3 py-1 bg-yellow-500 text-white rounded text-sm">
                      Warning
                    </button>
                    <button className="px-3 py-1 bg-green-500 text-white rounded text-sm">
                      Success
                    </button>
                  </div>

                  <div className="p-3 bg-stone-50 dark:bg-stone-900 border-l-4 border-blue-500 rounded text-sm">
                    <p className="text-blue-800 dark:text-blue-200">
                      Informational message
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-stone-700 dark:text-stone-300">
                      Online
                    </span>
                    <div className="w-2 h-2 bg-red-500 rounded-full ml-4"></div>
                    <span className="text-stone-700 dark:text-stone-300">
                      Offline
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulated View */}
              <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-4">
                <h3 className="text-xs font-medium text-stone-900 dark:text-stone-100 mb-3">
                  {colorBlindnessTypes[selectedType].name} View
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <button
                      className="px-3 py-1 text-white rounded text-sm"
                      style={{
                        backgroundColor: simulateColorBlindness(
                          "#EF4444",
                          selectedType
                        ),
                      }}
                    >
                      Error
                    </button>
                    <button
                      className="px-3 py-1 text-white rounded text-sm"
                      style={{
                        backgroundColor: simulateColorBlindness(
                          "#EAB308",
                          selectedType
                        ),
                      }}
                    >
                      Warning
                    </button>
                    <button
                      className="px-3 py-1 text-white rounded text-sm"
                      style={{
                        backgroundColor: simulateColorBlindness(
                          "#22C55E",
                          selectedType
                        ),
                      }}
                    >
                      Success
                    </button>
                  </div>

                  <div
                    className="p-3 rounded border-l-4 text-sm"
                    style={{
                      backgroundColor: simulateColorBlindness(
                        "#DBEAFE",
                        selectedType
                      ),
                      borderLeftColor: simulateColorBlindness(
                        "#3B82F6",
                        selectedType
                      ),
                    }}
                  >
                    <p
                      style={{
                        color: simulateColorBlindness("#1E40AF", selectedType),
                      }}
                    >
                      Informational message
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: simulateColorBlindness(
                          "#22C55E",
                          selectedType
                        ),
                      }}
                    ></div>
                    <span className="text-stone-700 dark:text-stone-300">
                      Online
                    </span>
                    <div
                      className="w-2 h-2 rounded-full ml-4"
                      style={{
                        backgroundColor: simulateColorBlindness(
                          "#EF4444",
                          selectedType
                        ),
                      }}
                    ></div>
                    <span className="text-stone-700 dark:text-stone-300">
                      Offline
                    </span>
                  </div>
                </div>
              </div>

              {/* Impact Statistics */}
              <div className="border border-stone-200 dark:border-stone-800 rounded-lg divide-y divide-stone-200 dark:divide-stone-800">
                <div className="px-4 py-3">
                  <h3 className="text-xs font-medium text-stone-900 dark:text-stone-100">
                    Impact Statistics
                  </h3>
                </div>
                <div className="grid grid-cols-3 divide-x divide-stone-200 dark:divide-stone-800">
                  <div className="px-4 py-4 text-center">
                    <Users className="h-4 w-4 text-stone-400 dark:text-stone-500 mx-auto mb-1" />
                    <div className="text-lg font-light text-stone-900 dark:text-stone-100">
                      8%
                    </div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      of men
                    </div>
                  </div>
                  <div className="px-4 py-4 text-center">
                    <Users className="h-4 w-4 text-stone-400 dark:text-stone-500 mx-auto mb-1" />
                    <div className="text-lg font-light text-stone-900 dark:text-stone-100">
                      0.5%
                    </div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      of women
                    </div>
                  </div>
                  <div className="px-4 py-4 text-center">
                    <Users className="h-4 w-4 text-stone-400 dark:text-stone-500 mx-auto mb-1" />
                    <div className="text-lg font-light text-stone-900 dark:text-stone-100">
                      300M
                    </div>
                    <div className="text-xs text-stone-500 dark:text-stone-400">
                      worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
