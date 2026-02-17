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
 const [foregroundColor, setForegroundColor] = useState("#FFFFFF");
 const [backgroundColor, setBackgroundColor] = useState("#000000");
 const [contrastResult, setContrastResult] = useState<ContrastResult | null>(
 null
 );
 const [copiedText, setCopiedText] = useState("");

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

 const getContrastRatio = useCallback((fg: string, bg: string): number => {
 const l1 = getLuminance(fg);
 const l2 = getLuminance(bg);
 const lighter = Math.max(l1, l2);
 const darker = Math.min(l1, l2);
 return (lighter + 0.05) / (darker + 0.05);
 }, []);

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
 Color Contrast Checker
 </h1>
 <p className="text-stone-500 dark:text-stone-400 text-sm">
 Test color pairs against WCAG accessibility standards
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Content */}
 <div className="max-w-6xl mx-auto px-6 py-8">
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
 {/* Controls */}
 <div className="space-y-4">
 {/* Foreground */}
 <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-4">
 <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
 Foreground
 </label>
 <div
 className="w-full h-14 rounded-md mt-2 mb-3 border border-stone-200 dark:border-stone-800"
 style={{ backgroundColor: foregroundColor }}
 />
 <div className="flex items-center gap-2">
 <input
 type="color"
 value={foregroundColor}
 onChange={(e) => setForegroundColor(e.target.value)}
 className="w-8 h-8 rounded border border-stone-200 dark:border-stone-700 cursor-pointer"
 />
 <input
 type="text"
 value={foregroundColor}
 onChange={(e) => setForegroundColor(e.target.value)}
 className="flex-1 px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md font-mono text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-stone-500"
 />
 <button
 onClick={() =>
 copyToClipboard(foregroundColor, "foreground")
 }
 className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
 >
 {copiedText === "foreground" ? (
 <Check className="h-3.5 w-3.5" />
 ) : (
 <Copy className="h-3.5 w-3.5" />
 )}
 </button>
 </div>
 </div>

 {/* Background */}
 <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-4">
 <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider">
 Background
 </label>
 <div
 className="w-full h-14 rounded-md mt-2 mb-3 border border-stone-200 dark:border-stone-800"
 style={{ backgroundColor: backgroundColor }}
 />
 <div className="flex items-center gap-2">
 <input
 type="color"
 value={backgroundColor}
 onChange={(e) => setBackgroundColor(e.target.value)}
 className="w-8 h-8 rounded border border-stone-200 dark:border-stone-700 cursor-pointer"
 />
 <input
 type="text"
 value={backgroundColor}
 onChange={(e) => setBackgroundColor(e.target.value)}
 className="flex-1 px-3 py-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-md font-mono text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-stone-500"
 />
 <button
 onClick={() =>
 copyToClipboard(backgroundColor, "background")
 }
 className="p-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
 >
 {copiedText === "background" ? (
 <Check className="h-3.5 w-3.5" />
 ) : (
 <Copy className="h-3.5 w-3.5" />
 )}
 </button>
 </div>
 </div>

 {/* Actions */}
 <div className="flex gap-2">
 <button
 onClick={swapColors}
 className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border border-stone-200 dark:border-stone-800 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
 >
 <ArrowDownUp className="h-3.5 w-3.5" />
 Swap
 </button>
 <button
 onClick={generateRandomColors}
 className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
 >
 <Shuffle className="h-3.5 w-3.5" />
 Random
 </button>
 </div>

 {/* Contrast Ratio */}
 {contrastResult && (
 <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-5 text-center">
 <div className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
 Contrast Ratio
 </div>
 <div className="text-3xl font-light text-stone-900 dark:text-stone-100 tabular-nums">
 {contrastResult.ratio.toFixed(2)}
 <span className="text-stone-400 dark:text-stone-500">
 {" "}
 : 1
 </span>
 </div>
 </div>
 )}
 </div>

 {/* Preview */}
 <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
 <div className="px-4 py-3 border-b border-stone-200 dark:border-stone-800">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
 Preview
 </h3>
 </div>
 <div
 className="p-6"
 style={{
 backgroundColor: backgroundColor,
 color: foregroundColor,
 }}
 >
 <h2 className="text-2xl font-semibold mb-3">Heading Text</h2>
 <p className="text-base mb-3 leading-relaxed">
 The quick brown fox jumps over the lazy dog. This demonstrates body text
 readability at normal size.
 </p>
 <p className="text-sm mb-4 leading-relaxed">
 Small text like captions and footnotes need higher contrast to remain
 accessible.
 </p>
 <div className="flex gap-2">
 <button
 className="px-4 py-2 border rounded-md text-sm font-medium"
 style={{ borderColor: foregroundColor }}
 >
 Button
 </button>
 <a
 href="#"
 className="px-4 py-2 text-sm font-medium underline"
 onClick={(e) => e.preventDefault()}
 >
 Link Text
 </a>
 </div>
 </div>
 </div>

 {/* WCAG Results */}
 {contrastResult && (
 <div className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden">
 <div className="px-4 py-3 border-b border-stone-200 dark:border-stone-800">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
 WCAG Compliance
 </h3>
 </div>
 <div className="divide-y divide-stone-200 dark:divide-stone-800">
 {[
 { label: "AA Normal Text", threshold: "4.5 : 1", pass: contrastResult.wcagAA },
 { label: "AA Large Text", threshold: "3.0 : 1", pass: contrastResult.wcagAALarge },
 { label: "AAA Normal Text", threshold: "7.0 : 1", pass: contrastResult.wcagAAA },
 { label: "AAA Large Text", threshold: "4.5 : 1", pass: contrastResult.wcagAAALarge },
 ].map((item) => (
 <div
 key={item.label}
 className="flex items-center justify-between px-4 py-3"
 >
 <div>
 <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
 {item.label}
 </div>
 <div className="text-xs text-stone-500 dark:text-stone-400">
 min {item.threshold}
 </div>
 </div>
 {item.pass ? (
 <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950 px-2.5 py-1 rounded-full">
 <CheckCircle className="h-3.5 w-3.5" />
 Pass
 </span>
 ) : (
 <span className="inline-flex items-center gap-1.5 text-xs font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950 px-2.5 py-1 rounded-full">
 <AlertTriangle className="h-3.5 w-3.5" />
 Fail
 </span>
 )}
 </div>
 ))}
 </div>

 {/* Quick Guide */}
 <div className="px-4 py-3 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
 <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
 <strong className="text-stone-700 dark:text-stone-300">AA</strong> is the minimum standard. <strong className="text-stone-700 dark:text-stone-300">AAA</strong> is enhanced. Large text is 18px+ bold or 24px+ normal.
 </p>
 </div>
 </div>
 )}
 </div>
 </div>
 </div>
 );
}
