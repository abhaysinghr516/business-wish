"use client";

import { useState } from "react";
import Link from "next/link";
import {
 ArrowLeft,
 Zap,
 Copy,
 Check,
 Plus,
 Minus,
 RotateCcw,
 Eye,
 Code,
 Palette,
} from "lucide-react";

interface FlexConfig {
 direction: "row" | "row-reverse" | "column" | "column-reverse";
 wrap: "nowrap" | "wrap" | "wrap-reverse";
 justifyContent:
 | "flex-start"
 | "flex-end"
 | "center"
 | "space-between"
 | "space-around"
 | "space-evenly";
 alignItems: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
 alignContent:
 | "stretch"
 | "flex-start"
 | "flex-end"
 | "center"
 | "space-between"
 | "space-around";
 gap: number;
}

interface ItemConfig {
 flexGrow: number;
 flexShrink: number;
 flexBasis: string;
 alignSelf:
 | "auto"
 | "stretch"
 | "flex-start"
 | "flex-end"
 | "center"
 | "baseline";
}

export default function FlexboxGenerator() {
 const [config, setConfig] = useState<FlexConfig>({
 direction: "row",
 wrap: "nowrap",
 justifyContent: "flex-start",
 alignItems: "stretch",
 alignContent: "stretch",
 gap: 16,
 });
 const [itemCount, setItemCount] = useState(3);
 const [copiedText, setCopiedText] = useState("");
 const [activeTab, setActiveTab] = useState<"preview" | "css" | "tailwind">(
 "preview"
 );
 const [selectedItem, setSelectedItem] = useState<number | null>(null);
 const [itemConfigs, setItemConfigs] = useState<ItemConfig[]>(
 Array.from({ length: 8 }, () => ({
 flexGrow: 0,
 flexShrink: 1,
 flexBasis: "auto",
 alignSelf: "auto",
 }))
 );
 const [containerHeight, setContainerHeight] = useState(200);
 const [showItemControls, setShowItemControls] = useState(false);

 const generateCSS = (): string => {
 let css = `.container {
 display: flex;
 flex-direction: ${config.direction};
 flex-wrap: ${config.wrap};
 justify-content: ${config.justifyContent};
 align-items: ${config.alignItems};
 align-content: ${config.alignContent};
 gap: ${config.gap}px;
 height: ${containerHeight}px;
}`;

 if (showItemControls) {
 for (let i = 0; i < itemCount; i++) {
 const item = itemConfigs[i];
 if (
 item.flexGrow !== 0 ||
 item.flexShrink !== 1 ||
 item.flexBasis !== "auto" ||
 item.alignSelf !== "auto"
 ) {
 css += `

.item-${i + 1} {`;
 if (item.flexGrow !== 0) css += `\n flex-grow: ${item.flexGrow};`;
 if (item.flexShrink !== 1)
 css += `\n flex-shrink: ${item.flexShrink};`;
 if (item.flexBasis !== "auto")
 css += `\n flex-basis: ${item.flexBasis};`;
 if (item.alignSelf !== "auto")
 css += `\n align-self: ${item.alignSelf};`;
 css += `\n}`;
 }
 }
 }

 return css;
 };

 const generateTailwindCSS = (): string => {
 const classes = [
 "flex",
 config.direction !== "row"
 ? `flex-${config.direction.replace("-", "-")}`
 : "",
 config.wrap !== "nowrap" ? `flex-${config.wrap}` : "",
 config.justifyContent !== "flex-start"
 ? `justify-${config.justifyContent.replace("flex-", "")}`
 : "",
 config.alignItems !== "stretch"
 ? `items-${config.alignItems.replace("flex-", "")}`
 : "",
 config.alignContent !== "stretch"
 ? `content-${config.alignContent.replace("flex-", "")}`
 : "",
 config.gap > 0 ? (config.gap % 4 === 0 ? `gap-${config.gap / 4}` : `gap-[${config.gap}px]`) : "",
 ].filter(Boolean);

 return classes.join(" ");
 };

 const updateConfig = (key: keyof FlexConfig, value: any) => {
 setConfig((prev) => ({ ...prev, [key]: value }));
 };

 const updateItemConfig = (
 index: number,
 key: keyof ItemConfig,
 value: any
 ) => {
 setItemConfigs((prev) => {
 const newConfigs = [...prev];
 newConfigs[index] = { ...newConfigs[index], [key]: value };
 return newConfigs;
 });
 };

 const copyToClipboard = async (text: string, label: string) => {
 try {
 await navigator.clipboard.writeText(text);
 setCopiedText(label);
 setTimeout(() => setCopiedText(""), 2000);
 } catch (err) {
 // toast.error("Failed to copy"); // Removed toast dependency as per instructions
 }
 };

 const resetConfig = () => {
 setConfig({
 direction: "row",
 wrap: "nowrap",
 justifyContent: "flex-start",
 alignItems: "stretch",
 alignContent: "stretch",
 gap: 16,
 });
 setItemCount(3);
 setContainerHeight(200);
 setSelectedItem(null);
 setShowItemControls(false);
 setItemConfigs(
 Array.from({ length: 8 }, () => ({
 flexGrow: 0,
 flexShrink: 1,
 flexBasis: "auto",
 alignSelf: "auto",
 }))
 );
 };

 const loadPreset = (
 preset:
 | "center"
 | "space-between"
 | "grid"
 | "sidebar"
 | "navbar"
 | "card-layout"
 ) => {
 const presets = {
 center: {
 direction: "row" as const,
 wrap: "nowrap" as const,
 justifyContent: "center" as const,
 alignItems: "center" as const,
 alignContent: "stretch" as const,
 gap: 16,
 },
 "space-between": {
 direction: "row" as const,
 wrap: "nowrap" as const,
 justifyContent: "space-between" as const,
 alignItems: "center" as const,
 alignContent: "stretch" as const,
 gap: 0,
 },
 grid: {
 direction: "row" as const,
 wrap: "wrap" as const,
 justifyContent: "flex-start" as const,
 alignItems: "stretch" as const,
 alignContent: "flex-start" as const,
 gap: 16,
 },
 sidebar: {
 direction: "row" as const,
 wrap: "nowrap" as const,
 justifyContent: "flex-start" as const,
 alignItems: "stretch" as const,
 alignContent: "stretch" as const,
 gap: 24,
 },
 navbar: {
 direction: "row" as const,
 wrap: "nowrap" as const,
 justifyContent: "space-between" as const,
 alignItems: "center" as const,
 alignContent: "stretch" as const,
 gap: 12,
 },
 "card-layout": {
 direction: "row" as const,
 wrap: "wrap" as const,
 justifyContent: "space-around" as const,
 alignItems: "flex-start" as const,
 alignContent: "flex-start" as const,
 gap: 20,
 },
 };

 setConfig(presets[preset]);
 };

 return (
 <div className="min-h-screen bg-white dark:bg-stone-950">
 <div className="bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
 <div className="max-w-6xl mx-auto px-4 py-3">
 <Link
 href="/tools"
 className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 text-sm mb-2 transition-colors"
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
 Flexbox Generator
 </h1>
 <p className="text-stone-600 dark:text-stone-400 text-sm">
 Create responsive flexbox layouts with live preview and
 advanced controls
 </p>
 </div>
 </div>
 <button
 onClick={resetConfig}
 className="flex items-center gap-2 px-3 py-1.5 text-sm text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-lg transition-colors hover:bg-stone-200 dark:hover:bg-stone-700"
 >
 <RotateCcw className="h-4 w-4" />
 Reset
 </button>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-4 py-6">
 <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
 <div className="xl:col-span-1 space-y-4">
 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 mb-3 text-sm">
 Quick Presets
 </h3>
 <div className="grid grid-cols-2 gap-2">
 {[
 { key: "center", label: "Center" },
 { key: "space-between", label: "Space Between" },
 { key: "grid", label: "Grid" },
 { key: "sidebar", label: "Sidebar" },
 { key: "navbar", label: "Navbar" },
 { key: "card-layout", label: "Card Layout" },
 ].map((preset) => (
 <button
 key={preset.key}
 onClick={() => loadPreset(preset.key as any)}
 className="px-2 py-1.5 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-md text-xs font-medium transition-colors text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700"
 >
 {preset.label}
 </button>
 ))}
 </div>
 </div>

 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 mb-3 text-sm">
 Container Properties
 </h3>

 <div className="space-y-3">
 <div className="grid grid-cols-2 gap-3">
 <div>
 <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
 Direction
 </label>
 <select
 value={config.direction}
 onChange={(e) =>
 updateConfig("direction", e.target.value)
 }
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded-md text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="row">Row</option>
 <option value="row-reverse">Row Reverse</option>
 <option value="column">Column</option>
 <option value="column-reverse">Column Reverse</option>
 </select>
 </div>

 <div>
 <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
 Wrap
 </label>
 <select
 value={config.wrap}
 onChange={(e) => updateConfig("wrap", e.target.value)}
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded-md text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="nowrap">No Wrap</option>
 <option value="wrap">Wrap</option>
 <option value="wrap-reverse">Wrap Reverse</option>
 </select>
 </div>
 </div>

 <div>
 <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
 Justify Content
 </label>
 <select
 value={config.justifyContent}
 onChange={(e) =>
 updateConfig("justifyContent", e.target.value)
 }
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded-md text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="flex-start">Flex Start</option>
 <option value="flex-end">Flex End</option>
 <option value="center">Center</option>
 <option value="space-between">Space Between</option>
 <option value="space-around">Space Around</option>
 <option value="space-evenly">Space Evenly</option>
 </select>
 </div>

 <div>
 <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
 Align Items
 </label>
 <select
 value={config.alignItems}
 onChange={(e) => updateConfig("alignItems", e.target.value)}
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded-md text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="stretch">Stretch</option>
 <option value="flex-start">Flex Start</option>
 <option value="flex-end">Flex End</option>
 <option value="center">Center</option>
 <option value="baseline">Baseline</option>
 </select>
 </div>

 {config.wrap !== "nowrap" && (
 <div>
 <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
 Align Content
 </label>
 <select
 value={config.alignContent}
 onChange={(e) =>
 updateConfig("alignContent", e.target.value)
 }
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded-md text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="stretch">Stretch</option>
 <option value="flex-start">Flex Start</option>
 <option value="flex-end">Flex End</option>
 <option value="center">Center</option>
 <option value="space-between">Space Between</option>
 <option value="space-around">Space Around</option>
 </select>
 </div>
 )}

 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
 Gap
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {config.gap}px
 </span>
 </div>
 <input
 type="range"
 min="0"
 max="64"
 step="4"
 value={config.gap}
 onChange={(e) =>
 updateConfig("gap", Number(e.target.value))
 }
 className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 </div>

 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
 Container Height
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {containerHeight}px
 </span>
 </div>
 <input
 type="range"
 min="100"
 max="400"
 step="20"
 value={containerHeight}
 onChange={(e) => setContainerHeight(Number(e.target.value))}
 className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 </div>

 <div>
 <div className="flex items-center justify-between mb-2">
 <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
 Items
 </label>
 <div className="flex items-center gap-1">
 <button
 onClick={() => setItemCount(Math.max(1, itemCount - 1))}
 className="p-1 bg-stone-100 dark:bg-stone-800 rounded transition-colors dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
 >
 <Minus className="h-3 w-3" />
 </button>
 <span className="text-xs font-medium text-stone-700 dark:text-stone-300 w-6 text-center">
 {itemCount}
 </span>
 <button
 onClick={() => setItemCount(Math.min(8, itemCount + 1))}
 className="p-1 bg-stone-100 dark:bg-stone-800 rounded transition-colors dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
 >
 <Plus className="h-3 w-3" />
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
 <div className="flex items-center justify-between">
 <div>
 <h3 className="font-medium text-stone-900 dark:text-stone-100 text-sm">
 Item Controls
 </h3>
 <p className="text-xs text-stone-600 dark:text-stone-400">
 Configure individual flex items
 </p>
 </div>
 <button
 onClick={() => setShowItemControls(!showItemControls)}
 className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
 showItemControls
 ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
 : "bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300"
 }`}
 >
 {showItemControls ? "Hide" : "Show"}
 </button>
 </div>

 {showItemControls && selectedItem !== null && (
 <div className="mt-3 pt-3 border-t border-stone-200 dark:border-stone-800 space-y-2">
 <h4 className="text-xs font-medium text-stone-700 dark:text-stone-300">
 Item {selectedItem + 1}
 </h4>

 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Flex Grow
 </label>
 <input
 type="number"
 min="0"
 max="3"
 value={itemConfigs[selectedItem]?.flexGrow || 0}
 onChange={(e) =>
 updateItemConfig(
 selectedItem,
 "flexGrow",
 Number(e.target.value)
 )
 }
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>

 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Flex Shrink
 </label>
 <input
 type="number"
 min="0"
 max="3"
 value={itemConfigs[selectedItem]?.flexShrink || 1}
 onChange={(e) =>
 updateItemConfig(
 selectedItem,
 "flexShrink",
 Number(e.target.value)
 )
 }
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>

 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Align Self
 </label>
 <select
 value={itemConfigs[selectedItem]?.alignSelf || "auto"}
 onChange={(e) =>
 updateItemConfig(
 selectedItem,
 "alignSelf",
 e.target.value
 )
 }
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="auto">Auto</option>
 <option value="stretch">Stretch</option>
 <option value="flex-start">Flex Start</option>
 <option value="flex-end">Flex End</option>
 <option value="center">Center</option>
 <option value="baseline">Baseline</option>
 </select>
 </div>
 </div>
 )}
 </div>
 </div>

 <div className="xl:col-span-2 space-y-4">
 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800">
 <div className="border-b border-stone-200 dark:border-stone-800 px-4 py-2">
 <div className="flex items-center gap-1">
 {[
 { key: "preview", label: "Preview", icon: Eye },
 { key: "css", label: "CSS", icon: Code },
 { key: "tailwind", label: "Tailwind", icon: Palette },
 ].map((tab) => {
 const Icon = tab.icon;
 return (
 <button
 key={tab.key}
 onClick={() => setActiveTab(tab.key as any)}
 className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
 activeTab === tab.key
 ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
 : "text-stone-600 dark:text-stone-400"
 }`}
 >
 <Icon className="h-3.5 w-3.5" />
 {tab.label}
 </button>
 );
 })}
 </div>
 </div>

 {activeTab === "preview" && (
 <div className="p-4">
 <div
 className="bg-stone-50 dark:bg-stone-900 border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-lg p-3 overflow-auto"
 style={{
 display: "flex",
 flexDirection: config.direction,
 flexWrap: config.wrap,
 justifyContent: config.justifyContent,
 alignItems: config.alignItems,
 alignContent: config.alignContent,
 gap: `${config.gap}px`,
 height: `${containerHeight}px`,
 }}
 >
 {Array.from({ length: itemCount }, (_, i) => {
 const itemConfig = itemConfigs[i];
 return (
 <div
 key={i}
 onClick={() =>
 setSelectedItem(selectedItem === i ? null : i)
 }
 className={`bg-stone-800 dark:bg-stone-200 rounded-lg p-2 text-white text-xs font-medium text-center cursor-pointer min-w-12 transition-all ${
 selectedItem === i
 ? "ring-2 ring-stone-900 dark:ring-stone-100 ring-offset-2 dark:ring-offset-stone-950"
 : ""
 }`}
 style={{
 flexGrow: itemConfig?.flexGrow || 0,
 flexShrink: itemConfig?.flexShrink || 1,
 flexBasis: itemConfig?.flexBasis || "auto",
 alignSelf:
 itemConfig?.alignSelf === "auto"
 ? undefined
 : itemConfig?.alignSelf,
 }}
 >
 <div className="text-center">
 {i + 1}
 {showItemControls &&
 itemConfig &&
 (itemConfig.flexGrow > 0 ||
 itemConfig.flexShrink !== 1 ||
 itemConfig.alignSelf !== "auto") && (
 <div className="text-xs opacity-75 mt-1">
 {itemConfig.flexGrow > 0 &&
 `G:${itemConfig.flexGrow}`}
 {itemConfig.flexShrink !== 1 &&
 ` S:${itemConfig.flexShrink}`}
 </div>
 )}
 </div>
 </div>
 );
 })}
 </div>
 {showItemControls && (
 <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
 Click on items to configure their individual properties
 </p>
 )}
 </div>
 )}

 {activeTab === "css" && (
 <div>
 <div className="flex items-center justify-between px-4 py-2 border-b border-stone-200 dark:border-stone-800">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
 CSS Code
 </h3>
 <button
 onClick={() => copyToClipboard(generateCSS(), "CSS code")}
 className="flex items-center gap-1.5 px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded-md text-xs font-medium transition-colors text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
 >
 {copiedText === "CSS code" ? (
 <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
 ) : (
 <Copy className="h-3 w-3" />
 )}
 Copy
 </button>
 </div>
 <div className="p-4 bg-stone-900 text-stone-100 rounded-b-lg">
 <pre className="text-xs bg-stone-900 text-stone-100 font-mono whitespace-pre-wrap overflow-auto">
 {generateCSS()}
 </pre>
 </div>
 </div>
 )}

 {activeTab === "tailwind" && (
 <div>
 <div className="flex items-center justify-between px-4 py-2 border-b border-stone-200 dark:border-stone-800">
 <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
 Tailwind CSS
 </h3>
 <button
 onClick={() =>
 copyToClipboard(generateTailwindCSS(), "Tailwind CSS")
 }
 className="flex items-center gap-1.5 px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded-md text-xs font-medium transition-colors text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700"
 >
 {copiedText === "Tailwind CSS" ? (
 <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
 ) : (
 <Copy className="h-3 w-3" />
 )}
 Copy
 </button>
 </div>
 <div className="p-4 bg-stone-900 text-stone-100 rounded-b-lg">
 <pre className="text-xs bg-stone-900 text-stone-100 font-mono break-all">
 className=&quot;{generateTailwindCSS()}&quot;
 </pre>
 </div>
 </div>
 )}
 </div>

 <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-3">
 <div className="flex items-start gap-2">
 <div className="w-1.5 h-1.5 bg-stone-400 dark:bg-stone-600 rounded-full mt-1.5 flex-shrink-0"></div>
 <div>
 <h4 className="text-xs font-medium text-stone-900 dark:text-stone-200">
 Current Layout
 </h4>
 <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
 {config.direction} • {config.wrap} • justify-
 {config.justifyContent} • items-{config.alignItems}
 {config.gap > 0 && ` • gap ${config.gap}px`}
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
