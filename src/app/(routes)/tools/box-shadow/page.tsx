"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Layers,
  Copy,
  Check,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Shadow {
  id: string;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
  inset: boolean;
  opacity: number;
}

export default function BoxShadowGenerator() {
  const [shadows, setShadows] = useState<Shadow[]>([
    {
      id: "1",
      x: 6,
      y: 6,
      blur: 20,
      spread: 10,
      color: "#ff0000",
      inset: false,
      opacity: 25,
    },
  ]);
  const [copiedText, setCopiedText] = useState("");
  const [expandedShadow, setExpandedShadow] = useState<string | null>("1");

  const addShadow = () => {
    const newShadow: Shadow = {
      id: Date.now().toString(),
      x: 0,
      y: 2,
      blur: 4,
      spread: 0,
      color: "#000000",
      inset: false,
      opacity: 20,
    };
    setShadows([...shadows, newShadow]);
    setExpandedShadow(newShadow.id);
  };

  const removeShadow = (id: string) => {
    if (shadows.length > 1) {
      setShadows(shadows.filter((shadow) => shadow.id !== id));
    }
  };

  const updateShadow = (id: string, updates: Partial<Shadow>) => {
    setShadows(
      shadows.map((shadow) =>
        shadow.id === id ? { ...shadow, ...updates } : shadow
      )
    );
  };

  const generateCSS = (): string => {
    const shadowStrings = shadows.map((shadow) => {
      const { x, y, blur, spread, color, inset, opacity } = shadow;
      const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`;
      };
      const colorWithOpacity = hexToRgba(color, opacity);
      const insetStr = inset ? "inset " : "";
      return `${insetStr}${x}px ${y}px ${blur}px ${spread}px ${colorWithOpacity}`;
    });

    return `box-shadow: ${shadowStrings.join(", ")};`;
  };

  const generateTailwindCSS = (): string => {
    const shadowStrings = shadows.map((shadow) => {
      const { x, y, blur, spread, color, inset, opacity } = shadow;
      const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r},${g},${b},${alpha / 100})`;
      };
      const colorWithOpacity = hexToRgba(color, opacity);
      const insetStr = inset ? "inset_" : "";
      return `${insetStr}${x}px_${y}px_${blur}px_${spread}px_${colorWithOpacity.replace(
        /\s/g,
        ""
      )}`;
    });

    return `shadow-[${shadowStrings.join(",")}]`;
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(""), 2000);
    } catch {
      // handle error
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

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-900 dark:bg-stone-100 rounded-lg">
                <Layers className="h-5 w-5 text-white dark:text-stone-900" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                  CSS Box Shadow Generator
                </h1>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  Create layered, customizable box shadows with live preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-stone-900 dark:text-stone-100">
              Shadows ({shadows.length})
            </h2>
            <button
              onClick={addShadow}
              className="flex items-center gap-2 px-3 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-sm rounded-lg font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Shadow
            </button>
          </div>

          {shadows.map((shadow, index) => (
            <div
              key={shadow.id}
              className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden"
            >
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                onClick={() =>
                  setExpandedShadow(
                    expandedShadow === shadow.id ? null : shadow.id
                  )
                }
              >
                <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  Shadow {index + 1}
                </h3>
                <div className="flex items-center gap-3">
                  {shadows.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeShadow(shadow.id);
                      }}
                      className="text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                  {expandedShadow === shadow.id ? (
                    <ChevronUp className="h-4 w-4 text-stone-400 dark:text-stone-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-stone-400 dark:text-stone-500" />
                  )}
                </div>
              </div>

              {expandedShadow === shadow.id && (
                <div className="px-4 pb-4 space-y-4 text-sm border-t border-stone-200 dark:border-stone-800">
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {[
                      { key: "x", label: "X Offset", min: -50, max: 50 },
                      { key: "y", label: "Y Offset", min: -50, max: 50 },
                      { key: "blur", label: "Blur", min: 0, max: 100 },
                      { key: "spread", label: "Spread", min: -50, max: 50 },
                      { key: "opacity", label: "Opacity", min: 0, max: 100 },
                    ].map(({ key, label, min, max }) => (
                      <div key={key}>
                        <label className="block mb-1 text-xs text-stone-700 dark:text-stone-300">
                          {label}: {shadow[key as keyof Shadow]}
                          {key === "opacity" ? "%" : "px"}
                        </label>
                        <input
                          type="range"
                          min={min}
                          max={max}
                          value={shadow[key as keyof Shadow] as number}
                          onChange={(e) =>
                            updateShadow(shadow.id, {
                              [key]: Number(e.target.value),
                            })
                          }
                          className="w-full"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-stone-100 dark:border-stone-800">
                    <input
                      type="color"
                      value={shadow.color}
                      onChange={(e) =>
                        updateShadow(shadow.id, { color: e.target.value })
                      }
                      className="w-10 h-10 rounded-lg border border-stone-200 dark:border-stone-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={shadow.color}
                      onChange={(e) =>
                        updateShadow(shadow.id, { color: e.target.value })
                      }
                      className="flex-1 px-3 py-2 border border-stone-200 dark:border-stone-700 rounded-lg font-mono text-sm bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-400"
                    />
                    <label className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300">
                      <input
                        type="checkbox"
                        checked={shadow.inset}
                        onChange={(e) =>
                          updateShadow(shadow.id, { inset: e.target.checked })
                        }
                        className="rounded"
                      />
                      Inset
                    </label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Preview + Code Output */}
        <div className="space-y-4">
          {/* Preview */}
          <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-8">
            <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-6">
              Preview
            </h3>
            <div className="flex items-center justify-center min-h-[200px]">
              <div
                className="w-56 h-40 bg-white dark:bg-stone-800 rounded-lg flex items-center justify-center border border-stone-100 dark:border-stone-700"
                style={{
                  boxShadow: generateCSS()
                    .replace("box-shadow: ", "")
                    .replace(";", ""),
                }}
              >
                <span className="text-stone-500 dark:text-stone-400 text-sm">
                  Preview Box
                </span>
              </div>
            </div>
          </div>

          {/* Code Blocks */}
          {[
            { label: "CSS Code", code: generateCSS() },
            {
              label: "Tailwind CSS",
              code: `className="${generateTailwindCSS()}"`,
            },
          ].map((block) => (
            <div
              key={block.label}
              className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden"
            >
              <div className="px-4 py-3 flex items-center justify-between border-b border-stone-200 dark:border-stone-800">
                <h4 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  {block.label}
                </h4>
                <button
                  onClick={() => copyToClipboard(block.code, block.label)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                >
                  {copiedText === block.label ? (
                    <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copiedText === block.label ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="p-4 bg-stone-900 dark:bg-stone-900 text-stone-100 text-xs font-mono break-words leading-relaxed">
                {block.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
