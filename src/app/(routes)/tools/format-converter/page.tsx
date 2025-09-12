"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  Check,
  Shuffle,
  RefreshCw,
  Hash,
  AlertCircle,
  Droplet,
} from "lucide-react";
import { toast } from "react-toastify";

interface ColorFormats {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  hsv: { h: number; s: number; v: number };
  cmyk: { c: number; m: number; y: number; k: number };
  lab: { l: number; a: number; b: number };
}

export default function ColorFormatConverter() {
  const [inputColor, setInputColor] = useState("#3B82F6");
  const [inputFormat, setInputFormat] = useState<"hex" | "rgb" | "hsl">("hex");
  const [colorFormats, setColorFormats] = useState<ColorFormats | null>(null);
  const [copiedFormat, setCopiedFormat] = useState("");
  const [inputError, setInputError] = useState("");

  // --- Parsing Logic (unchanged) ---
  const parseColorInput = (
    input: string,
    format: "hex" | "rgb" | "hsl"
  ): { r: number; g: number; b: number } | null => {
    try {
      setInputError("");
      switch (format) {
        case "hex":
          return parseHex(input);
        case "rgb":
          return parseRgb(input);
        case "hsl":
          return parseHsl(input);
        default:
          return null;
      }
    } catch {
      setInputError("Invalid color format");
      return null;
    }
  };

  const parseHex = (hex: string) => {
    const cleanHex = hex.replace("#", "");
    if (!/^[0-9A-F]{6}$/i.test(cleanHex)) throw new Error("Invalid hex format");
    return {
      r: parseInt(cleanHex.slice(0, 2), 16),
      g: parseInt(cleanHex.slice(2, 4), 16),
      b: parseInt(cleanHex.slice(4, 6), 16),
    };
  };

  const parseRgb = (rgb: string) => {
    const match =
      rgb.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/) ||
      rgb.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (!match) throw new Error("Invalid RGB format");

    const [r, g, b] = match.slice(1).map(Number);
    if ([r, g, b].some((v) => v < 0 || v > 255))
      throw new Error("RGB values must be between 0–255");
    return { r, g, b };
  };

  const parseHsl = (hsl: string) => {
    const match =
      hsl.match(/hsl\s*\(\s*(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?\s*\)/) ||
      hsl.match(/(\d+)\s*,\s*(\d+)%?\s*,\s*(\d+)%?/);
    if (!match) throw new Error("Invalid HSL format");

    const [h, s, l] = match.slice(1).map(Number);
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100)
      throw new Error("HSL values out of range");
    return hslToRgb(h, s, l);
  };

  // --- Utility conversion functions (unchanged) ---
  const hslToRgb = (h: number, s: number, l: number) => {
    h /= 360;
    s /= 100;
    l /= 100;
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    if (s === 0) {
      const gray = Math.round(l * 255);
      return { r: gray, g: gray, b: gray };
    }
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    return {
      r: Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
      g: Math.round(hue2rgb(p, q, h) * 255),
      b: Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
    };
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = 0,
      s = 0,
      l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    };
  };

  const rgbToHsv = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      d = max - min;
    let h = 0,
      s = max === 0 ? 0 : d / max,
      v = max;
    if (max !== min) {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      v: Math.round(v * 100),
    };
  };

  const rgbToCmyk = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const k = 1 - Math.max(r, g, b);
    const c = k === 1 ? 0 : (1 - r - k) / (1 - k);
    const m = k === 1 ? 0 : (1 - g - k) / (1 - k);
    const y = k === 1 ? 0 : (1 - b - k) / (1 - k);
    return {
      c: Math.round(c * 100),
      m: Math.round(m * 100),
      y: Math.round(y * 100),
      k: Math.round(k * 100),
    };
  };

  const rgbToLab = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
    let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
    return {
      l: Math.round(116 * y - 16),
      a: Math.round(500 * (x - y)),
      b: Math.round(200 * (y - z)),
    };
  };

  const rgbToHex = (r: number, g: number, b: number) =>
    "#" +
    [r, g, b]
      .map((n) => {
        const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  // --- Conversion ---
  const convertColor = useCallback(
    (input: string, format: "hex" | "rgb" | "hsl"): ColorFormats | null => {
      const rgb = parseColorInput(input, format);
      if (!rgb) return null;
      return {
        hex: rgbToHex(rgb.r, rgb.g, rgb.b),
        rgb,
        hsl: rgbToHsl(rgb.r, rgb.g, rgb.b),
        hsv: rgbToHsv(rgb.r, rgb.g, rgb.b),
        cmyk: rgbToCmyk(rgb.r, rgb.g, rgb.b),
        lab: rgbToLab(rgb.r, rgb.g, rgb.b),
      };
    },
    []
  );

  useEffect(() => {
    setColorFormats(convertColor(inputColor, inputFormat));
  }, [inputColor, inputFormat, convertColor]);

  const generateRandomColor = () => {
    setInputColor(
      "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")
    );
    setInputFormat("hex");
  };

  const copyToClipboard = async (text: string, format: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(format);
      toast.success(`Copied ${format} format`);
      setTimeout(() => setCopiedFormat(""), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  const getPlaceholder = () =>
    inputFormat === "hex"
      ? "#3B82F6"
      : inputFormat === "rgb"
      ? "rgb(59, 130, 246) or 59, 130, 246"
      : "hsl(217, 91%, 60%) or 217, 91%, 60%";

  const formatStrings = colorFormats
    ? {
        hex: colorFormats.hex,
        hexNoHash: colorFormats.hex.substring(1),
        rgb: `rgb(${colorFormats.rgb.r}, ${colorFormats.rgb.g}, ${colorFormats.rgb.b})`,
        rgbValues: `${colorFormats.rgb.r}, ${colorFormats.rgb.g}, ${colorFormats.rgb.b}`,
        hsl: `hsl(${colorFormats.hsl.h}, ${colorFormats.hsl.s}%, ${colorFormats.hsl.l}%)`,
        hslValues: `${colorFormats.hsl.h}, ${colorFormats.hsl.s}%, ${colorFormats.hsl.l}%`,
        hsv: `hsv(${colorFormats.hsv.h}, ${colorFormats.hsv.s}%, ${colorFormats.hsv.v}%)`,
        hsvValues: `${colorFormats.hsv.h}, ${colorFormats.hsv.s}%, ${colorFormats.hsv.v}%`,
        cmyk: `cmyk(${colorFormats.cmyk.c}%, ${colorFormats.cmyk.m}%, ${colorFormats.cmyk.y}%, ${colorFormats.cmyk.k}%)`,
        cmykValues: `${colorFormats.cmyk.c}%, ${colorFormats.cmyk.m}%, ${colorFormats.cmyk.y}%, ${colorFormats.cmyk.k}%`,
        lab: `lab(${colorFormats.lab.l}, ${colorFormats.lab.a}, ${colorFormats.lab.b})`,
        labValues: `${colorFormats.lab.l}, ${colorFormats.lab.a}, ${colorFormats.lab.b}`,
        css: `background-color: ${colorFormats.hex};`,
        tailwind: `bg-[${colorFormats.hex}]`,
      }
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-gray-500 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
              <Hash className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-medium text-gray-900">
                Color Format Converter
              </h1>
              <p className="text-gray-500 text-sm">
                Convert and explore color values in multiple formats
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Input Section */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-6">
              {colorFormats && (
                <div
                  className="w-20 h-20 rounded-xl border border-gray-200 shadow-inner"
                  style={{ backgroundColor: colorFormats.hex }}
                />
              )}
              <div className="flex flex-col gap-3">
                {/* Format Selector */}
                <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
                  {(["hex", "rgb", "hsl"] as const).map((format) => (
                    <button
                      key={format}
                      onClick={() => setInputFormat(format)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium ${
                        inputFormat === format
                          ? "bg-white text-indigo-600 shadow-sm"
                          : "text-gray-500"
                      }`}
                    >
                      {format.toUpperCase()}
                    </button>
                  ))}
                </div>

                {/* Inputs */}
                <div className="flex gap-3 items-center">
                  <input
                    type="text"
                    value={inputColor}
                    onChange={(e) => setInputColor(e.target.value)}
                    placeholder={getPlaceholder()}
                    className={`w-64 px-3 py-2 border rounded-lg font-mono text-sm focus:outline-none ${
                      inputError ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  <input
                    type="color"
                    value={colorFormats?.hex ?? "#3B82F6"}
                    onChange={(e) => setInputColor(e.target.value)}
                    className="w-10 h-10 rounded-md border border-gray-300 cursor-pointer"
                  />
                </div>
                {inputError && (
                  <div className="flex items-center gap-2 text-red-600 text-xs">
                    <AlertCircle className="h-3 w-3" />
                    {inputError}
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={generateRandomColor}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
              >
                <Shuffle className="h-3 w-3" />
                Random
              </button>
              <button
                onClick={() =>
                  setColorFormats(convertColor(inputColor, inputFormat))
                }
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm"
              >
                <RefreshCw className="h-3 w-3" />
                Convert
              </button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        {formatStrings && (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries({
              Hex: formatStrings.hex,
              "Hex (no #)": formatStrings.hexNoHash,
              RGB: formatStrings.rgb,
              "RGB Values": formatStrings.rgbValues,
              HSL: formatStrings.hsl,
              "HSL Values": formatStrings.hslValues,
              HSV: formatStrings.hsv,
              "HSV Values": formatStrings.hsvValues,
              CMYK: formatStrings.cmyk,
              "CMYK Values": formatStrings.cmykValues,
              LAB: formatStrings.lab,
              "LAB Values": formatStrings.labValues,
              CSS: formatStrings.css,
              Tailwind: formatStrings.tailwind,
            }).map(([label, value]) => (
              <div
                key={label}
                className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between shadow-sm"
              >
                <div className="mb-3">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {label}
                  </span>
                  <p className="font-mono text-sm mt-1 text-gray-800 break-all">
                    {value}
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(value, label)}
                  className={`self-end flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition-all duration-150
                    ${
                      copiedFormat === label
                        ? "bg-green-100 text-green-700 border-green-300"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200"
                    }
                  `}
                >
                  {copiedFormat === label ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                  {copiedFormat === label ? "Copied" : "Copy"}
                </button>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
