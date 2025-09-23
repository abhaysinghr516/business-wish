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

  const getSeverityColor = (severity: "mild" | "moderate" | "severe") => {
    switch (severity) {
      case "mild":
        return "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800";
      case "moderate":
        return "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800";
      case "severe":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800";
    }
  };

  const handleAddColor = () => {
    if (!testColors.includes(newColor)) {
      setTestColors([...testColors, newColor]);
    }
  };

  const handleRemoveColor = (color: string) => {
    setTestColors(testColors.filter((c) => c !== color));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-light text-gray-900 dark:text-gray-100">
                Color Blindness Simulator
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                See how colors appear to different users
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            Select Vision Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {Object.entries(colorBlindnessTypes).map(([key, type]) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`p-3 rounded-xl border text-left transition-all text-sm ${
                  selectedType === key
                    ? "border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-950"
                    : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-white dark:bg-black"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 text-xs">
                    {type.name}
                  </h3>
                  <div
                    className={`px-1 py-0.5 rounded text-xs font-medium border ${getSeverityColor(
                      type.severity
                    )}`}
                  >
                    {type.severity}
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                  {type.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {type.prevalence}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">
                {colorBlindnessTypes[selectedType].name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {colorBlindnessTypes[selectedType].description}
              </p>
            </div>
            <div className="ml-auto text-right text-sm text-gray-600 dark:text-gray-400">
              <div>Affects: {colorBlindnessTypes[selectedType].prevalence}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
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
                    className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-3 relative"
                  >
                    <button
                      onClick={() => handleRemoveColor(color)}
                      className="absolute top-2 right-2 text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400"
                    >
                      <X className="h-3 w-3" />
                    </button>
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Original
                        </div>
                        <div
                          className="w-full h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                          style={{ backgroundColor: color }}
                        />
                        <div className="text-xs font-mono text-gray-600 dark:text-gray-400 mt-1">
                          {color}
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          Simulated
                        </div>
                        <div
                          className="w-full h-12 rounded-lg border border-gray-200 dark:border-gray-700"
                          style={{ backgroundColor: simulatedColor }}
                        />
                        <div className="text-xs font-mono text-gray-600 dark:text-gray-400 mt-1">
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
                className="h-10 w-16 rounded border border-gray-300 dark:border-gray-700 cursor-pointer"
              />
              <button
                onClick={handleAddColor}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
              >
                <Plus className="h-4 w-4" />
                Add Color
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
              UI Element Examples
            </h2>
            <div className="space-y-4">
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 text-sm">
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

                  <div className="p-3 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 dark:border-blue-400 rounded text-sm">
                    <p className="text-blue-800 dark:text-blue-200">
                      Informational message
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Online
                    </span>
                    <div className="w-2 h-2 bg-red-500 rounded-full ml-4"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Offline
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-3 text-sm">
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
                    <span className="text-gray-700 dark:text-gray-300">
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
                    <span className="text-gray-700 dark:text-gray-300">
                      Offline
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 mb-3 text-sm">
                  Impact Statistics
                </h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <Users className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                    <div className="text-lg font-light text-gray-900">8%</div>
                    <div className="text-xs text-gray-600">of men</div>
                  </div>
                  <div>
                    <Users className="h-4 w-4 text-purple-600 mx-auto mb-1" />
                    <div className="text-lg font-light text-gray-900">0.5%</div>
                    <div className="text-xs text-gray-600">of women</div>
                  </div>
                  <div>
                    <Users className="h-4 w-4 text-green-600 mx-auto mb-1" />
                    <div className="text-lg font-light text-gray-900">300M</div>
                    <div className="text-xs text-gray-600">worldwide</div>
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
