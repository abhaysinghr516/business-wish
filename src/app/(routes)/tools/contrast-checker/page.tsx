"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Eye,
  AlertTriangle,
  CheckCircle,
  Shuffle,
  Copy,
  Check,
  ArrowDownUp,
} from "lucide-react";

interface ContrastResult {
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
  wcagAALarge: boolean;
  wcagAAALarge: boolean;
}

export default function ContrastChecker() {
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [contrastResult, setContrastResult] = useState<ContrastResult | null>(
    null
  );
  const [copiedText, setCopiedText] = useState("");
  const [previewSize, setPreviewSize] = useState<"sm" | "md" | "lg">("md");

  // Calculate relative luminance
  const getLuminance = (hex: string): number => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  // Calculate contrast ratio
  const getContrastRatio = useCallback((fg: string, bg: string): number => {
    const l1 = getLuminance(fg);
    const l2 = getLuminance(bg);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  }, []);

  // Check WCAG compliance
  const checkWCAGCompliance = useCallback(() => {
    const ratio = getContrastRatio(foregroundColor, backgroundColor);

    setContrastResult({
      ratio,
      wcagAA: ratio >= 4.5,
      wcagAAA: ratio >= 7,
      wcagAALarge: ratio >= 3,
      wcagAAALarge: ratio >= 4.5,
    });
  }, [foregroundColor, backgroundColor, getContrastRatio]);

  useEffect(() => {
    checkWCAGCompliance();
  }, [checkWCAGCompliance]);

  const generateRandomColors = () => {
    const randomHex = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setForegroundColor(randomHex());
    setBackgroundColor(randomHex());
  };

  const swapColors = () => {
    setForegroundColor(backgroundColor);
    setBackgroundColor(foregroundColor);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    } catch {
      // Handle error if needed
    }
  };

  const getComplianceIcon = (isCompliant: boolean) => {
    return isCompliant ? (
      <CheckCircle className="h-4 w-4 text-green-600" />
    ) : (
      <AlertTriangle className="h-4 w-4 text-red-500" />
    );
  };

  const getComplianceColor = (isCompliant: boolean) => {
    return isCompliant
      ? "text-green-700 bg-green-50 border-green-200"
      : "text-red-700 bg-red-50 border-red-200";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
              <Eye className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Color Contrast Checker
              </h1>
              <p className="text-gray-500 text-sm">
                Test colors & ensure WCAG compliance
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
          {/* Left - Controls */}
          <div className="space-y-4">
            {/* Foreground */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h3 className="font-medium text-gray-800 mb-2 text-sm">
                Foreground
              </h3>
              <div
                className="w-full h-12 rounded-lg mb-3 border border-gray-200"
                style={{ backgroundColor: foregroundColor }}
              />
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="w-8 h-8 rounded-md border border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="flex-1 px-2 py-1 bg-white border border-gray-200 rounded-md font-mono text-sm focus:border-blue-300"
                />
                <button
                  onClick={() =>
                    copyToClipboard(foregroundColor, "foreground color")
                  }
                  className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md"
                >
                  {copiedText === "foreground color" ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>
            </div>

            {/* Background */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h3 className="font-medium text-gray-800 mb-2 text-sm">
                Background
              </h3>
              <div
                className="w-full h-12 rounded-lg mb-3 border border-gray-200"
                style={{ backgroundColor: backgroundColor }}
              />
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-8 h-8 rounded-md border border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1 px-2 py-1 bg-white border border-gray-200 rounded-md font-mono text-sm focus:border-blue-300"
                />
                <button
                  onClick={() =>
                    copyToClipboard(backgroundColor, "background color")
                  }
                  className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md"
                >
                  {copiedText === "background color" ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={generateRandomColors}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-md text-xs"
              >
                <Shuffle className="h-3 w-3" />
                Random
              </button>
              <button
                onClick={swapColors}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs"
              >
                <ArrowDownUp className="h-3 w-3" />
                Swap
              </button>
            </div>

            {/* Contrast Ratio */}
            {contrastResult && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 text-center border border-blue-100">
                <h3 className="font-medium text-gray-800 mb-1 text-sm">
                  Contrast Ratio
                </h3>
                <div className="text-2xl font-light text-gray-900">
                  {contrastResult.ratio.toFixed(2)} : 1
                </div>
              </div>
            )}
          </div>

          {/* Middle - Preview */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800 text-sm">Preview</h3>
              <select
                value={previewSize}
                onChange={(e) =>
                  setPreviewSize(e.target.value as "sm" | "md" | "lg")
                }
                className="text-xs border border-gray-200 rounded-md px-2 py-1"
              >
                <option value="sm">Small</option>
                <option value="md">Normal</option>
                <option value="lg">Large</option>
              </select>
            </div>
            <div
              className="rounded-lg p-4 border border-gray-100"
              style={{
                backgroundColor: backgroundColor,
                color: foregroundColor,
              }}
            >
              <h2
                className={`font-semibold mb-2 ${
                  previewSize === "sm"
                    ? "text-base"
                    : previewSize === "md"
                    ? "text-lg"
                    : "text-xl"
                }`}
              >
                Sample Heading
              </h2>
              <p className="mb-2 text-sm">
                This paragraph shows how your colors work together for
                readability.
              </p>
              <p className="text-xs mb-3">
                Small text requires higher contrast for accessibility.
              </p>
              <button
                className="px-3 py-1.5 border rounded-md font-medium text-xs"
                style={{
                  borderColor: foregroundColor,
                  color: foregroundColor,
                }}
              >
                Sample Button
              </button>
            </div>
          </div>

          {/* Right - WCAG Compliance */}
          {contrastResult && (
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-medium text-gray-800 mb-3 text-sm">
                WCAG Compliance
              </h3>
              <div className="space-y-2">
                <div
                  className={`flex items-center justify-between p-2 rounded-md border text-xs ${getComplianceColor(
                    contrastResult.wcagAA
                  )}`}
                >
                  <span>AA Normal (4.5:1)</span>
                  {getComplianceIcon(contrastResult.wcagAA)}
                </div>
                <div
                  className={`flex items-center justify-between p-2 rounded-md border text-xs ${getComplianceColor(
                    contrastResult.wcagAALarge
                  )}`}
                >
                  <span>AA Large (3:1)</span>
                  {getComplianceIcon(contrastResult.wcagAALarge)}
                </div>
                <div
                  className={`flex items-center justify-between p-2 rounded-md border text-xs ${getComplianceColor(
                    contrastResult.wcagAAA
                  )}`}
                >
                  <span>AAA Normal (7:1)</span>
                  {getComplianceIcon(contrastResult.wcagAAA)}
                </div>
                <div
                  className={`flex items-center justify-between p-2 rounded-md border text-xs ${getComplianceColor(
                    contrastResult.wcagAAALarge
                  )}`}
                >
                  <span>AAA Large (4.5:1)</span>
                  {getComplianceIcon(contrastResult.wcagAAALarge)}
                </div>
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-md">
                <h4 className="font-medium text-gray-800 mb-1 text-xs">
                  Quick Guide
                </h4>
                <ul className="text-xs text-gray-600 space-y-0.5">
                  <li>• AA: 4.5:1 minimum for text</li>
                  <li>• AAA: 7:1 for enhanced readability</li>
                  <li>• Large text has lower thresholds</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
