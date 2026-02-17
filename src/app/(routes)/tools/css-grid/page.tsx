"use client";

import { useState } from "react";
import Link from "next/link";
import {
 ArrowLeft,
 Grid3X3,
 Copy,
 Check,
 Plus,
 Minus,
 RotateCcw,
 Eye,
 Code,
 Palette,
 Download,
 Settings,
 Zap,
 Layout,
} from "lucide-react";

interface GridTemplate {
 name: string;
 rows: number;
 columns: number;
 gap: number;
 items: Array<{
 id: number;
 rowStart: number;
 rowEnd: number;
 colStart: number;
 colEnd: number;
 content: string;
 }>;
}

export default function CSSGridGenerator() {
 const [rows, setRows] = useState(3);
 const [columns, setColumns] = useState(3);
 const [gap, setGap] = useState(16);
 const [rowGap, setRowGap] = useState(16);
 const [columnGap, setColumnGap] = useState(16);
 const [useIndividualGaps, setUseIndividualGaps] = useState(false);
 const [gridItems, setGridItems] = useState<
 Array<{
 id: number;
 rowStart: number;
 rowEnd: number;
 colStart: number;
 colEnd: number;
 content: string;
 }>
 >([]);
 const [selectedItem, setSelectedItem] = useState<number | null>(null);
 const [copiedText, setCopiedText] = useState("");
 const [activeTab, setActiveTab] = useState<"preview" | "css" | "tailwind">(
 "preview"
 );
 const [containerHeight, setContainerHeight] = useState(320);
 const [autoFill, setAutoFill] = useState(false);
 const [minItemSize, setMinItemSize] = useState(200);
 const [gridUnit, setGridUnit] = useState<"fr" | "px" | "%">("fr");
 const [showTemplates, setShowTemplates] = useState(false);

 const templates: GridTemplate[] = [
 {
 name: "Holy Grail",
 rows: 3,
 columns: 3,
 gap: 16,
 items: [
 {
 id: 1,
 rowStart: 1,
 rowEnd: 2,
 colStart: 1,
 colEnd: 4,
 content: "Header",
 },
 {
 id: 2,
 rowStart: 2,
 rowEnd: 3,
 colStart: 1,
 colEnd: 2,
 content: "Sidebar",
 },
 {
 id: 3,
 rowStart: 2,
 rowEnd: 3,
 colStart: 2,
 colEnd: 3,
 content: "Main",
 },
 {
 id: 4,
 rowStart: 2,
 rowEnd: 3,
 colStart: 3,
 colEnd: 4,
 content: "Aside",
 },
 {
 id: 5,
 rowStart: 3,
 rowEnd: 4,
 colStart: 1,
 colEnd: 4,
 content: "Footer",
 },
 ],
 },
 {
 name: "Dashboard",
 rows: 4,
 columns: 4,
 gap: 12,
 items: [
 {
 id: 1,
 rowStart: 1,
 rowEnd: 2,
 colStart: 1,
 colEnd: 5,
 content: "Header",
 },
 {
 id: 2,
 rowStart: 2,
 rowEnd: 3,
 colStart: 1,
 colEnd: 3,
 content: "Chart 1",
 },
 {
 id: 3,
 rowStart: 2,
 rowEnd: 4,
 colStart: 3,
 colEnd: 5,
 content: "Chart 2",
 },
 {
 id: 4,
 rowStart: 3,
 rowEnd: 4,
 colStart: 1,
 colEnd: 2,
 content: "Stat 1",
 },
 {
 id: 5,
 rowStart: 3,
 rowEnd: 4,
 colStart: 2,
 colEnd: 3,
 content: "Stat 2",
 },
 {
 id: 6,
 rowStart: 4,
 rowEnd: 5,
 colStart: 1,
 colEnd: 5,
 content: "Table",
 },
 ],
 },
 {
 name: "Magazine",
 rows: 3,
 columns: 3,
 gap: 20,
 items: [
 {
 id: 1,
 rowStart: 1,
 rowEnd: 3,
 colStart: 1,
 colEnd: 3,
 content: "Hero",
 },
 {
 id: 2,
 rowStart: 1,
 rowEnd: 2,
 colStart: 3,
 colEnd: 4,
 content: "Article 1",
 },
 {
 id: 3,
 rowStart: 2,
 rowEnd: 3,
 colStart: 3,
 colEnd: 4,
 content: "Article 2",
 },
 {
 id: 4,
 rowStart: 3,
 rowEnd: 4,
 colStart: 1,
 colEnd: 2,
 content: "Article 3",
 },
 {
 id: 5,
 rowStart: 3,
 rowEnd: 4,
 colStart: 2,
 colEnd: 4,
 content: "Article 4",
 },
 ],
 },
 ];

 const generateCSS = () => {
 const gapValue = useIndividualGaps
 ? `${rowGap}px ${columnGap}px`
 : `${gap}px`;

 const colTemplate = autoFill
 ? `repeat(auto-fit, minmax(${minItemSize}px, 1fr))`
 : `repeat(${columns}, 1${gridUnit})`;

 let css = `.grid-container {
 display: grid;
 grid-template-columns: ${colTemplate};
 grid-template-rows: repeat(${rows}, 1${gridUnit === "fr" ? "fr" : gridUnit});
 gap: ${gapValue};
 width: 100%;
 height: ${containerHeight}px;${autoFill ? "\n justify-content: center;" : ""}
}`;

 if (gridItems.length > 0) {
 css += "\n\n/* Grid Items */";
 gridItems.forEach((item, index) => {
 css += `\n.grid-item-${index + 1} {
 grid-row: ${item.rowStart} / ${item.rowEnd};
 grid-column: ${item.colStart} / ${item.colEnd};
}`;
 });
 }

 return css;
 };

 const generateTailwindCSS = () => {
 const classes = ["grid"];

 if (autoFill) {
 classes.push(`grid-cols-[repeat(auto-fit,minmax(${minItemSize}px,1fr))]`);
 } else {
 classes.push(`grid-cols-${columns}`);
 }

 classes.push(`grid-rows-${rows}`);

 if (useIndividualGaps) {
 if (rowGap === columnGap) {
 classes.push(rowGap % 4 === 0 ? `gap-${rowGap / 4}` : `gap-[${rowGap}px]`);
 } else {
 classes.push(columnGap % 4 === 0 ? `gap-x-${columnGap / 4}` : `gap-x-[${columnGap}px]`, rowGap % 4 === 0 ? `gap-y-${rowGap / 4}` : `gap-y-[${rowGap}px]`);
 }
 } else {
 classes.push(gap % 4 === 0 ? `gap-${gap / 4}` : `gap-[${gap}px]`);
 }

 return classes.join(" ");
 };

 const generateHTML = () => {
 let html = `<div class="grid-container">`;

 if (gridItems.length > 0) {
 gridItems.forEach((item, index) => {
 html += `\n <div class="grid-item-${index + 1}">${
 item.content || `Item ${index + 1}`
 }</div>`;
 });
 } else {
 for (let i = 1; i <= Math.min(rows * columns, 12); i++) {
 html += `\n <div class="grid-item">Item ${i}</div>`;
 }
 }

 html += `\n</div>`;
 return html;
 };

 const addGridItem = () => {
 const newItem = {
 id: Date.now(),
 rowStart: 1,
 rowEnd: 2,
 colStart: 1,
 colEnd: 2,
 content: `Item ${gridItems.length + 1}`,
 };
 setGridItems([...gridItems, newItem]);
 setSelectedItem(newItem.id);
 };

 const updateGridItem = (
 id: number,
 updates: Partial<(typeof gridItems)[0]>
 ) => {
 setGridItems((items) =>
 items.map((item) => (item.id === id ? { ...item, ...updates } : item))
 );
 };

 const removeGridItem = (id: number) => {
 setGridItems((items) => items.filter((item) => item.id !== id));
 if (selectedItem === id) {
 setSelectedItem(null);
 }
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

 const resetGrid = () => {
 setRows(3);
 setColumns(3);
 setGap(16);
 setRowGap(16);
 setColumnGap(16);
 setUseIndividualGaps(false);
 setGridItems([]);
 setSelectedItem(null);
 setAutoFill(false);
 setMinItemSize(200);
 setGridUnit("fr");
 setContainerHeight(320);
 };

 const loadTemplate = (template: GridTemplate) => {
 setRows(template.rows);
 setColumns(template.columns);
 setGap(template.gap);
 setRowGap(template.gap);
 setColumnGap(template.gap);
 setGridItems(template.items);
 setSelectedItem(null);
 setShowTemplates(false);
 };

 const downloadCode = () => {
 const css = generateCSS();
 const html = generateHTML();
 const content = `<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>CSS Grid Layout</title>
 <style>
${css}

/* Basic styling */
.grid-container {
 background: #f8fafc;
 border: 2px dashed #cbd5e1;
 border-radius: 8px;
 padding: 16px;
}

.grid-item, [class^="grid-item-"] {
 background: linear-gradient(135deg, #3b82f6, #6366f1);
 color: white;
 border-radius: 8px;
 padding: 16px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
 font-weight: 500;
}
 </style>
</head>
<body>
${html}
</body>
</html>`;

 const blob = new Blob([content], { type: "text/html" });
 const url = URL.createObjectURL(blob);
 const a = document.createElement("a");
 a.href = url;
 a.download = "grid-layout.html";
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
 };

 const selectedItemData = gridItems.find((item) => item.id === selectedItem);

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
 <Grid3X3 className="h-5 w-5 text-white dark:text-stone-900" />
 </div>
 <div>
 <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
 CSS Grid Generator
 </h1>
 <p className="text-stone-600 dark:text-stone-400 text-sm">
 Create responsive grid layouts with advanced controls and
 templates
 </p>
 </div>
 </div>
 <div className="flex items-center gap-2">
 <button
 onClick={() => setShowTemplates(!showTemplates)}
 className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors ${
 showTemplates
 ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
 : "text-stone-600 bg-stone-100 dark:text-stone-300 dark:bg-stone-800"
 }`}
 >
 <Layout className="h-4 w-4" />
 Templates
 </button>
 <button
 onClick={resetGrid}
 className="flex items-center gap-2 px-3 py-1.5 text-sm text-stone-600 bg-stone-100 rounded-lg transition-colors dark:text-stone-300 dark:bg-stone-800"
 >
 <RotateCcw className="h-4 w-4" />
 Reset
 </button>
 </div>
 </div>
 </div>
 </div>

 <div className="max-w-6xl mx-auto px-4 py-6">
 {showTemplates && (
 <div className="mb-6 bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 mb-3 text-sm">
 Quick Templates
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
 {templates.map((template) => (
 <button
 key={template.name}
 onClick={() => loadTemplate(template)}
 className="p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg text-left transition-colors hover:bg-stone-100 dark:hover:bg-stone-800"
 >
 <h4 className="font-medium text-stone-900 dark:text-stone-100 text-sm">
 {template.name}
 </h4>
 <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
 {template.rows}×{template.columns} • {template.items.length}{" "}
 items
 </p>
 </button>
 ))}
 </div>
 </div>
 )}

 <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
 <div className="xl:col-span-1 space-y-4">
 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 mb-3 text-sm">
 Grid Settings
 </h3>

 <div className="space-y-3">
 <div className="flex items-center justify-between">
 <label className="flex items-center gap-2 text-sm">
 <input
 type="checkbox"
 checked={autoFill}
 onChange={(e) => setAutoFill(e.target.checked)}
 className="rounded border-stone-300 dark:border-stone-600 text-stone-700 focus:ring-stone-500 bg-stone-100 dark:bg-stone-900"
 />
 <span className="text-stone-700 dark:text-stone-300">
 Auto-fit columns
 </span>
 </label>
 <Zap className="h-4 w-4 text-stone-500" />
 </div>

 {autoFill ? (
 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
 Min Item Size
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {minItemSize}px
 </span>
 </div>
 <input
 type="range"
 min="100"
 max="400"
 step="20"
 value={minItemSize}
 onChange={(e) => setMinItemSize(parseInt(e.target.value))}
 className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 </div>
 ) : (
 <div className="grid grid-cols-2 gap-3">
 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
 Columns
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {columns}
 </span>
 </div>
 <div className="flex items-center gap-2">
 <button
 onClick={() => setColumns(Math.max(1, columns - 1))}
 className="p-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-stone-700 dark:text-stone-300"
 >
 <Minus className="h-3 w-3" />
 </button>
 <input
 type="range"
 min="1"
 max="12"
 value={columns}
 onChange={(e) => setColumns(parseInt(e.target.value))}
 className="flex-1 h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 <button
 onClick={() => setColumns(Math.min(12, columns + 1))}
 className="p-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-stone-700 dark:text-stone-300"
 >
 <Plus className="h-3 w-3" />
 </button>
 </div>
 </div>

 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs font-medium text-stone-700 dark:text-stone-300">
 Rows
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {rows}
 </span>
 </div>
 <div className="flex items-center gap-2">
 <button
 onClick={() => setRows(Math.max(1, rows - 1))}
 className="p-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-stone-700 dark:text-stone-300"
 >
 <Minus className="h-3 w-3" />
 </button>
 <input
 type="range"
 min="1"
 max="12"
 value={rows}
 onChange={(e) => setRows(parseInt(e.target.value))}
 className="flex-1 h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 <button
 onClick={() => setRows(Math.min(12, rows + 1))}
 className="p-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-stone-700 dark:text-stone-300"
 >
 <Plus className="h-3 w-3" />
 </button>
 </div>
 </div>
 </div>
 )}

 <div>
 <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
 Grid Unit
 </label>
 <select
 value={gridUnit}
 onChange={(e) =>
 setGridUnit(e.target.value as "fr" | "px" | "%")
 }
 className="w-full px-2 py-1 border border-stone-300 dark:border-stone-700 rounded-md text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 >
 <option value="fr">Fractional (fr)</option>
 <option value="px">Pixels (px)</option>
 <option value="%">Percentage (%)</option>
 </select>
 </div>

 <div>
 <label className="flex items-center gap-2 text-sm mb-2">
 <input
 type="checkbox"
 checked={useIndividualGaps}
 onChange={(e) => setUseIndividualGaps(e.target.checked)}
 className="rounded border-stone-300 dark:border-stone-600 text-stone-700 focus:ring-stone-500 bg-stone-100 dark:bg-stone-900"
 />
 <span className="text-stone-700 dark:text-stone-300">
 Individual gaps
 </span>
 </label>

 {useIndividualGaps ? (
 <div className="space-y-2">
 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs text-stone-600 dark:text-stone-400">
 Row Gap
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {rowGap}px
 </span>
 </div>
 <input
 type="range"
 min="0"
 max="64"
 step="4"
 value={rowGap}
 onChange={(e) => setRowGap(parseInt(e.target.value))}
 className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 </div>
 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs text-stone-600 dark:text-stone-400">
 Column Gap
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {columnGap}px
 </span>
 </div>
 <input
 type="range"
 min="0"
 max="64"
 step="4"
 value={columnGap}
 onChange={(e) =>
 setColumnGap(parseInt(e.target.value))
 }
 className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 </div>
 </div>
 ) : (
 <div>
 <div className="flex items-center justify-between mb-1">
 <label className="text-xs text-stone-600 dark:text-stone-400">
 Gap
 </label>
 <span className="text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded">
 {gap}px
 </span>
 </div>
 <input
 type="range"
 min="0"
 max="64"
 step="4"
 value={gap}
 onChange={(e) => setGap(parseInt(e.target.value))}
 className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 </div>
 )}
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
 min="200"
 max="600"
 step="20"
 value={containerHeight}
 onChange={(e) =>
 setContainerHeight(parseInt(e.target.value))
 }
 className="w-full h-1 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer"
 />
 </div>
 </div>

 <div className="flex gap-2 mt-4">
 <button
 onClick={addGridItem}
 className="flex items-center gap-2 px-3 py-1.5 bg-stone-900 text-white rounded-lg text-sm font-medium transition-colors"
 >
 <Plus className="h-3 w-3" />
 Add Item
 </button>
 <button
 onClick={downloadCode}
 className="flex items-center gap-2 px-3 py-1.5 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 rounded-lg text-sm font-medium transition-colors"
 >
 <Download className="h-3 w-3" />
 Export
 </button>
 </div>
 </div>

 {gridItems.length > 0 && (
 <div className="bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
 <div className="flex items-center justify-between mb-3">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 text-sm">
 Grid Items
 </h3>
 <Settings className="h-4 w-4 text-stone-400" />
 </div>

 <div className="space-y-2 max-h-64 overflow-y-auto">
 {gridItems.map((item, index) => (
 <div
 key={item.id}
 className={`p-2.5 bg-stone-50 dark:bg-stone-900 border rounded-lg cursor-pointer transition-all ${
 selectedItem === item.id
 ? "border-stone-900 bg-stone-100 dark:border-stone-100 dark:bg-stone-900"
 : "border-stone-200 dark:border-stone-700"
 }`}
 onClick={() => setSelectedItem(item.id)}
 >
 <div className="flex items-center justify-between mb-1.5">
 <span className="font-medium text-sm text-stone-900 dark:text-stone-100">
 Item {index + 1}
 </span>
 <button
 onClick={(e) => {
 e.stopPropagation();
 removeGridItem(item.id);
 }}
 className="text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 text-xs transition-colors"
 >
 Remove
 </button>
 </div>
 <div className="text-xs text-stone-600 dark:text-stone-400">
 R:{item.rowStart}-{item.rowEnd} | C:{item.colStart}-
 {item.colEnd}
 </div>
 </div>
 ))}
 </div>

 {selectedItemData && (
 <div className="mt-3 p-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg">
 <h4 className="font-medium text-sm mb-2 text-stone-900 dark:text-stone-100">
 Edit Item
 </h4>
 <div className="space-y-2">
 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Content
 </label>
 <input
 type="text"
 value={selectedItemData.content}
 onChange={(e) =>
 updateGridItem(selectedItem!, {
 content: e.target.value,
 })
 }
 className="w-full px-2 py-1 border border-stone-200 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>
 <div className="grid grid-cols-2 gap-2">
 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Row Start
 </label>
 <input
 type="number"
 min="1"
 max={rows + 1}
 value={selectedItemData.rowStart}
 onChange={(e) =>
 updateGridItem(selectedItem!, {
 rowStart: parseInt(e.target.value),
 })
 }
 className="w-full px-2 py-1 border border-stone-200 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>
 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Row End
 </label>
 <input
 type="number"
 min={selectedItemData.rowStart + 1}
 max={rows + 1}
 value={selectedItemData.rowEnd}
 onChange={(e) =>
 updateGridItem(selectedItem!, {
 rowEnd: parseInt(e.target.value),
 })
 }
 className="w-full px-2 py-1 border border-stone-200 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>
 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Col Start
 </label>
 <input
 type="number"
 min="1"
 max={columns + 1}
 value={selectedItemData.colStart}
 onChange={(e) =>
 updateGridItem(selectedItem!, {
 colStart: parseInt(e.target.value),
 })
 }
 className="w-full px-2 py-1 border border-stone-200 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>
 <div>
 <label className="block text-xs text-stone-600 dark:text-stone-400 mb-1">
 Col End
 </label>
 <input
 type="number"
 min={selectedItemData.colStart + 1}
 max={columns + 1}
 value={selectedItemData.colEnd}
 onChange={(e) =>
 updateGridItem(selectedItem!, {
 colEnd: parseInt(e.target.value),
 })
 }
 className="w-full px-2 py-1 border border-stone-200 dark:border-stone-700 rounded text-xs bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
 />
 </div>
 </div>
 </div>
 </div>
 )}
 </div>
 )}
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
 className="bg-stone-50 dark:bg-stone-900 border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-lg p-3 overflow-hidden"
 style={{
 display: "grid",
 gridTemplateColumns: autoFill
 ? `repeat(auto-fit, minmax(${minItemSize}px, 1fr))`
 : `repeat(${columns}, 1${gridUnit})`,
 gridTemplateRows: `repeat(${rows}, 1${
 gridUnit === "fr" ? "fr" : gridUnit
 })`,
 gap: useIndividualGaps
 ? `${rowGap}px ${columnGap}px`
 : `${gap}px`,
 height: `${containerHeight}px`,
 justifyContent: autoFill ? "center" : "normal",
 }}
 >
 {gridItems.length > 0
 ? gridItems.map((item, index) => (
 <div
 key={item.id}
 className={`bg-stone-800 dark:bg-stone-200 rounded-lg p-3 text-white text-xs font-medium text-center cursor-pointer transition-all ${
 selectedItem === item.id
 ? "ring-2 ring-stone-900 dark:ring-stone-100 ring-offset-2 dark:ring-offset-stone-950 scale-105"
 : ""
 }`}
 style={{
 gridRow: `${item.rowStart} / ${item.rowEnd}`,
 gridColumn: `${item.colStart} / ${item.colEnd}`,
 }}
 onClick={() => setSelectedItem(item.id)}
 >
 <div className="flex items-center justify-center h-full">
 {item.content}
 </div>
 </div>
 ))
 : Array.from(
 {
 length: Math.min(autoFill ? 8 : rows * columns, 12),
 },
 (_, i) => (
 <div
 key={i}
 className="bg-stone-100 border border-stone-300 dark:border-stone-600 rounded-lg flex items-center justify-center text-xs font-medium text-stone-600 dark:text-stone-400"
 >
 Item {i + 1}
 </div>
 )
 )}
 </div>

 <div className="mt-3 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
 <div className="flex items-center gap-4">
 <span>
 {autoFill ? "Auto-fit" : `${columns}×${rows}`} Grid
 </span>
 <span>
 Gap:{" "}
 {useIndividualGaps ? `${rowGap}×${columnGap}` : gap}px
 </span>
 <span>Unit: {gridUnit}</span>
 </div>
 {gridItems.length > 0 && (
 <span>{gridItems.length} custom items</span>
 )}
 </div>
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
 className="flex items-center gap-1.5 px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded-md text-xs font-medium transition-colors text-stone-700 dark:text-stone-300"
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
 <pre className="text-xs bg-stone-900 text-stone-100 font-mono whitespace-pre-wrap overflow-auto max-h-80">
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
 className="flex items-center gap-1.5 px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded-md text-xs font-medium transition-colors text-stone-700 dark:text-stone-300"
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
 {gridItems.length > 0 && (
 <div className="mt-3 pt-3 border-t border-stone-700">
 <div className="text-xs text-stone-400 mb-2">
 Grid Items:
 </div>
 {gridItems.map((item, index) => (
 <div key={item.id} className="mb-1">
 <span className="text-stone-300">
 .item-{index + 1}: row-start-{item.rowStart}{" "}
 row-end-{item.rowEnd} col-start-{item.colStart}{" "}
 col-end-{item.colEnd}
 </span>
 </div>
 ))}
 </div>
 )}
 </div>
 </div>
 )}

 <div className="border-t border-stone-200 dark:border-stone-800 px-4 py-2">
 <button
 onClick={() => copyToClipboard(generateHTML(), "HTML code")}
 className="flex items-center gap-1.5 px-2 py-1 bg-stone-50 dark:bg-stone-800 rounded-md text-xs text-stone-600 dark:text-stone-300 transition-colors"
 >
 {copiedText === "HTML code" ? (
 <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
 ) : (
 <Copy className="h-3 w-3" />
 )}
 Copy HTML
 </button>
 </div>
 </div>

 <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-lg p-3">
 <div className="flex items-center justify-between">
 <div className="flex items-start gap-2">
 <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-1.5 flex-shrink-0"></div>
 <div>
 <h4 className="text-xs font-medium text-stone-900 dark:text-stone-200">
 Current Layout
 </h4>
 <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
 {autoFill
 ? `Auto-fit (min: ${minItemSize}px)`
 : `${columns}×${rows} ${gridUnit}`}
 {useIndividualGaps
 ? ` • gap ${rowGap}×${columnGap}px`
 : ` • gap ${gap}px`}
 {gridItems.length > 0 && ` • ${gridItems.length} items`}
 </p>
 </div>
 </div>
 <div className="flex items-center gap-1">
 <button
 onClick={() => copyToClipboard(generateCSS(), "Full CSS")}
 className="px-2 py-1 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded text-xs font-medium text-stone-700 dark:text-stone-200 transition-colors"
 >
 Copy CSS
 </button>
 <button
 onClick={downloadCode}
 className="px-2 py-1 bg-stone-900 text-white rounded text-xs font-medium transition-colors"
 >
 Export
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="mt-8 bg-white dark:bg-stone-950 rounded-lg border border-stone-200 dark:border-stone-800 p-6">
 <h3 className="font-medium text-stone-900 dark:text-stone-100 mb-4 text-sm">
 Advanced Features
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 <div className="flex items-start gap-3">
 <div className="w-8 h-8 bg-stone-100 dark:bg-stone-800 rounded-lg flex items-center justify-center flex-shrink-0">
 <Zap className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 </div>
 <div>
 <h4 className="font-medium text-stone-800 dark:text-stone-200 text-sm mb-1">
 Auto-fit Grids
 </h4>
 <p className="text-xs text-stone-600 dark:text-stone-400">
 Responsive grids that automatically adjust column count based
 on available space and minimum item size.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <div className="w-8 h-8 bg-stone-100 dark:bg-stone-800 rounded-lg flex items-center justify-center flex-shrink-0">
 <Layout className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 </div>
 <div>
 <h4 className="font-medium text-stone-800 dark:text-stone-200 text-sm mb-1">
 Layout Templates
 </h4>
 <p className="text-xs text-stone-600 dark:text-stone-400">
 Pre-built templates for common layouts like Holy Grail,
 Dashboard, and Magazine layouts.
 </p>
 </div>
 </div>
 <div className="flex items-start gap-3">
 <div className="w-8 h-8 bg-stone-100 dark:bg-stone-800 rounded-lg flex items-center justify-center flex-shrink-0">
 <Settings className="h-4 w-4 text-stone-700 dark:text-stone-300" />
 </div>
 <div>
 <h4 className="font-medium text-stone-800 dark:text-stone-200 text-sm mb-1">
 Advanced Controls
 </h4>
 <p className="text-xs text-stone-600 dark:text-stone-400">
 Individual gap controls, multiple grid units, custom spanning,
 and exportable code.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
