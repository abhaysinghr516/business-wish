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

  // Color transformation functions for different types of color blindness
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
          return rgbToHex(0, g, b);
        case "protanomaly":
          return rgbToHex(r * 0.567 + g * 0.433, g, b);
        case "deuteranopia":
          return rgbToHex(r, 0, b);
        case "deuteranomaly":
          return rgbToHex(r, g * 0.567 + r * 0.433, b);
        case "tritanopia":
          return rgbToHex(r, g, 0);
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
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "moderate":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "severe":
        return "bg-red-100 text-red-800 border-red-200";
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-light text-gray-900">
                Color Blindness Simulator
              </h1>
              <p className="text-gray-500 text-sm">
                See how colors appear to different users
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Vision Type Selector */}
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Select Vision Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {Object.entries(colorBlindnessTypes).map(([key, type]) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`p-3 rounded-xl border text-left transition-all text-sm ${
                  selectedType === key
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-gray-900 text-xs">
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
                <p className="text-xs text-gray-600 mb-1">{type.description}</p>
                <p className="text-xs text-gray-500">{type.prevalence}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Current Selection Info */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3">
            <Info className="h-4 w-4 text-blue-600" />
            <div>
              <h3 className="font-medium text-gray-900">
                {colorBlindnessTypes[selectedType].name}
              </h3>
              <p className="text-sm text-gray-600">
                {colorBlindnessTypes[selectedType].description}
              </p>
            </div>
            <div className="ml-auto text-right text-sm text-gray-600">
              <div>Affects: {colorBlindnessTypes[selectedType].prevalence}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Color Test Grid */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
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
                    className="bg-white border border-gray-200 rounded-xl p-3 relative"
                  >
                    <button
                      onClick={() => handleRemoveColor(color)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                    <div className="space-y-2">
                      {/* Original Color */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Original
                        </div>
                        <div
                          className="w-full h-12 rounded-lg border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                        <div className="text-xs font-mono text-gray-600 mt-1">
                          {color}
                        </div>
                      </div>

                      {/* Simulated Color */}
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Simulated
                        </div>
                        <div
                          className="w-full h-12 rounded-lg border border-gray-200"
                          style={{ backgroundColor: simulatedColor }}
                        />
                        <div className="text-xs font-mono text-gray-600 mt-1">
                          {simulatedColor}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Color Picker */}
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={newColor}
                onChange={(e) => setNewColor(e.target.value)}
                className="h-10 w-16 rounded border border-gray-300 cursor-pointer"
              />
              <button
                onClick={handleAddColor}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm"
              >
                <Plus className="h-4 w-4" />
                Add Color
              </button>
            </div>
          </div>

          {/* UI Examples */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              UI Element Examples
            </h2>
            <div className="space-y-4">
              {/* Original UI */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 mb-3 text-sm">
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

                  <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded text-sm">
                    <p className="text-blue-800">Informational message</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Online</span>
                    <div className="w-2 h-2 bg-red-500 rounded-full ml-4"></div>
                    <span className="text-gray-700">Offline</span>
                  </div>
                </div>
              </div>

              {/* Simulated UI */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-medium text-gray-900 mb-3 text-sm">
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
                    <span className="text-gray-700">Online</span>
                    <div
                      className="w-2 h-2 rounded-full ml-4"
                      style={{
                        backgroundColor: simulateColorBlindness(
                          "#EF4444",
                          selectedType
                        ),
                      }}
                    ></div>
                    <span className="text-gray-700">Offline</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
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
