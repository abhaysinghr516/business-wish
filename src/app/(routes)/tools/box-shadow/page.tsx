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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { toast } from "react-toastify";

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
      x: 0,
      y: 4,
      blur: 6,
      spread: -1,
      color: "#000000",
      inset: false,
      opacity: 25,
    },
  ]);
  const [copiedText, setCopiedText] = useState("");
  const [expandedShadow, setExpandedShadow] = useState<string | null>(null);

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
      return `${insetStr}${x}px_${y}px_${blur}px_${spread}px_${colorWithOpacity}`;
    });

    return `shadow-[${shadowStrings.join(",")}]`;
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(label);
      toast.success(`Copied ${label}`);
      setTimeout(() => setCopiedText(""), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>

          <div className="flex items-center gap-3 mt-4">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                CSS Box Shadow Generator
              </h1>
              <p className="text-gray-500 text-sm">
                Create layered, customizable box shadows with live preview
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Controls */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-900">
              Shadows ({shadows.length})
            </h2>
            <button
              onClick={addShadow}
              className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white text-sm rounded-md"
            >
              <Plus className="h-4 w-4" />
              Add Shadow
            </button>
          </div>

          {shadows.map((shadow, index) => (
            <div
              key={shadow.id}
              className="bg-gray-50 rounded-xl border border-gray-200"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer"
                onClick={() =>
                  setExpandedShadow(
                    expandedShadow === shadow.id ? null : shadow.id
                  )
                }
              >
                <h3 className="text-sm font-medium text-gray-800">
                  Shadow {index + 1}
                </h3>
                <div className="flex items-center gap-3">
                  {shadows.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeShadow(shadow.id);
                      }}
                      className="text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                  {expandedShadow === shadow.id ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </div>
              </div>

              {/* Expanded Controls */}
              {expandedShadow === shadow.id && (
                <div className="px-4 pb-4 space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: "x", label: "X Offset", min: -50, max: 50 },
                      { key: "y", label: "Y Offset", min: -50, max: 50 },
                      { key: "blur", label: "Blur", min: 0, max: 100 },
                      { key: "spread", label: "Spread", min: -50, max: 50 },
                      { key: "opacity", label: "Opacity", min: 0, max: 100 },
                    ].map(({ key, label, min, max }) => (
                      <div key={key}>
                        <label className="block mb-1 text-gray-700">
                          {label}: {shadow[key as keyof Shadow]}px
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

                  {/* Color + Inset */}
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={shadow.color}
                      onChange={(e) =>
                        updateShadow(shadow.id, { color: e.target.value })
                      }
                      className="w-10 h-10 rounded border border-gray-200"
                    />
                    <input
                      type="text"
                      value={shadow.color}
                      onChange={(e) =>
                        updateShadow(shadow.id, { color: e.target.value })
                      }
                      className="flex-1 px-2 py-1 border border-gray-200 rounded font-mono"
                    />
                    <label className="flex items-center gap-2 text-gray-700">
                      <input
                        type="checkbox"
                        checked={shadow.inset}
                        onChange={(e) =>
                          updateShadow(shadow.id, { inset: e.target.checked })
                        }
                      />
                      Inset
                    </label>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Preview & Code */}
        <div className="space-y-6">
          {/* Preview */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="font-medium text-gray-900 mb-4">Preview</h3>
            <div className="flex items-center justify-center min-h-[220px]">
              <div
                className="w-56 h-40 bg-white rounded-lg flex items-center justify-center"
                style={{
                  boxShadow: generateCSS()
                    .replace("box-shadow: ", "")
                    .replace(";", ""),
                }}
              >
                <span className="text-gray-600 text-sm">Preview Box</span>
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
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                <h4 className="font-medium text-gray-900 text-sm">
                  {block.label}
                </h4>
                <button
                  onClick={() => copyToClipboard(block.code, block.label)}
                  className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 rounded-md"
                >
                  {copiedText === block.label ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  Copy
                </button>
              </div>
              <div className="p-4 bg-gray-900 text-gray-100 text-xs font-mono break-words">
                {block.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
