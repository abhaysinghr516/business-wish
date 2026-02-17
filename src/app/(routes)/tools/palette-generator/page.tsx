"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Copy,
  Download,
  Palette,
  Check,
  ArrowLeft,
  Shuffle,
  Info,
  Sun,
  Moon,
  Contrast,
} from "lucide-react";

interface Color {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
}

interface ColorPalette {
  name: string;
  colors: Color[];
  description: string;
}

const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const rgbToHsl = (
  r: number,
  g: number,
  b: number
): { h: number; s: number; l: number } => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
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

const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const generateRandomColor = (): Color => {
  const hex =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  const rgb = hexToRgb(hex)!;
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  return { hex, rgb, hsl };
};

const generateComplementaryPalette = (baseColor: Color): Color[] => {
  const colors = [baseColor];
  const baseHue = baseColor.hsl.h;

  const complementaryHex = hslToHex(
    (baseHue + 180) % 360,
    baseColor.hsl.s,
    baseColor.hsl.l
  );
  colors.push({
    hex: complementaryHex,
    rgb: hexToRgb(complementaryHex)!,
    hsl: { h: (baseHue + 180) % 360, s: baseColor.hsl.s, l: baseColor.hsl.l },
  });

  return colors;
};

const generateTriadicPalette = (baseColor: Color): Color[] => {
  const colors = [baseColor];
  const baseHue = baseColor.hsl.h;

  for (let i = 1; i < 3; i++) {
    const hue = (baseHue + i * 120) % 360;
    const hex = hslToHex(hue, baseColor.hsl.s, baseColor.hsl.l);
    colors.push({
      hex,
      rgb: hexToRgb(hex)!,
      hsl: { h: hue, s: baseColor.hsl.s, l: baseColor.hsl.l },
    });
  }

  return colors;
};

const generateAnalogousPalette = (baseColor: Color): Color[] => {
  const colors = [];
  const baseHue = baseColor.hsl.h;

  for (let i = -2; i <= 2; i++) {
    const hue = (baseHue + i * 30 + 360) % 360;
    const hex = hslToHex(hue, baseColor.hsl.s, baseColor.hsl.l);
    colors.push({
      hex,
      rgb: hexToRgb(hex)!,
      hsl: { h: hue, s: baseColor.hsl.s, l: baseColor.hsl.l },
    });
  }

  return colors;
};

const generateMonochromaticPalette = (baseColor: Color): Color[] => {
  const colors: Color[] = [];
  const lightnesses = [15, 30, 50, 70, 85];

  lightnesses.forEach((lightness) => {
    const hex = hslToHex(baseColor.hsl.h, baseColor.hsl.s, lightness);
    colors.push({
      hex,
      rgb: hexToRgb(hex)!,
      hsl: { h: baseColor.hsl.h, s: baseColor.hsl.s, l: lightness },
    });
  });

  return colors;
};

const generateSplitComplementaryPalette = (baseColor: Color): Color[] => {
  const colors = [baseColor];
  const baseHue = baseColor.hsl.h;

  const complement = (baseHue + 180) % 360;
  const splitAngle = 30;

  const split1Hex = hslToHex(
    (complement - splitAngle + 360) % 360,
    baseColor.hsl.s,
    baseColor.hsl.l
  );
  const split2Hex = hslToHex(
    (complement + splitAngle) % 360,
    baseColor.hsl.s,
    baseColor.hsl.l
  );

  colors.push({
    hex: split1Hex,
    rgb: hexToRgb(split1Hex)!,
    hsl: {
      h: (complement - splitAngle + 360) % 360,
      s: baseColor.hsl.s,
      l: baseColor.hsl.l,
    },
  });

  colors.push({
    hex: split2Hex,
    rgb: hexToRgb(split2Hex)!,
    hsl: {
      h: (complement + splitAngle) % 360,
      s: baseColor.hsl.s,
      l: baseColor.hsl.l,
    },
  });

  return colors;
};

const generateTetradicPalette = (baseColor: Color): Color[] => {
  const colors = [baseColor];
  const baseHue = baseColor.hsl.h;

  for (let i = 1; i < 4; i++) {
    const hue = (baseHue + i * 90) % 360;
    const hex = hslToHex(hue, baseColor.hsl.s, baseColor.hsl.l);
    colors.push({
      hex,
      rgb: hexToRgb(hex)!,
      hsl: { h: hue, s: baseColor.hsl.s, l: baseColor.hsl.l },
    });
  }

  return colors;
};

const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (hex: string) => {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    const { r, g, b } = rgb;
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

export default function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState<string>("#6366F1");
  const [palettes, setPalettes] = useState<ColorPalette[]>([]);
  const [copiedColor, setCopiedColor] = useState<string>("");
  const [activeFormat, setActiveFormat] = useState<"hex" | "rgb" | "hsl">(
    "hex"
  );
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const generatePalettes = useCallback(() => {
    const rgb = hexToRgb(baseColor);
    if (!rgb) return;

    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const color: Color = { hex: baseColor, rgb, hsl };

    const newPalettes: ColorPalette[] = [
      {
        name: "Complementary",
        colors: generateComplementaryPalette(color),
        description: "Colors opposite on the color wheel",
      },
      {
        name: "Triadic",
        colors: generateTriadicPalette(color),
        description: "Three colors evenly spaced",
      },
      {
        name: "Analogous",
        colors: generateAnalogousPalette(color),
        description: "Adjacent colors for harmony",
      },
      {
        name: "Monochromatic",
        colors: generateMonochromaticPalette(color),
        description: "Same hue, different lightness",
      },
      {
        name: "Split Complementary",
        colors: generateSplitComplementaryPalette(color),
        description: "Base plus two adjacent to complement",
      },
      {
        name: "Tetradic",
        colors: generateTetradicPalette(color),
        description: "Four colors forming a rectangle",
      },
    ];

    setPalettes(newPalettes);

    setColorHistory((prev) => {
      const newHistory = [baseColor, ...prev.filter((c) => c !== baseColor)];
      return newHistory.slice(0, 8);
    });
  }, [baseColor]);

  useEffect(() => {
    generatePalettes();
  }, [generatePalettes]);

  const copyToClipboard = async (text: string, colorHex: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(colorHex);
      setTimeout(() => setCopiedColor(""), 1500);
    } catch (err) {
      console.error("Failed to copy");
    }
  };

  const generateRandomBaseColor = () => {
    const randomColor = generateRandomColor();
    setBaseColor(randomColor.hex);
  };

  const exportPalette = (palette: ColorPalette) => {
    const data = {
      name: palette.name,
      description: palette.description,
      colors: palette.colors.map((color) => ({
        hex: color.hex,
        rgb: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
        hsl: `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`,
      })),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${palette.name
      .toLowerCase()
      .replace(/\s+/g, "-")}-palette.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportAllPalettes = () => {
    const data = {
      baseColor,
      palettes: palettes.map((palette) => ({
        name: palette.name,
        description: palette.description,
        colors: palette.colors.map((color) => ({
          hex: color.hex,
          rgb: `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
          hsl: `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`,
        })),
      })),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `color-palettes-${baseColor.replace("#", "")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatColor = (color: Color, format: "hex" | "rgb" | "hsl"): string => {
    switch (format) {
      case "hex":
        return color.hex;
      case "rgb":
        return `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
      case "hsl":
        return `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`;
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
                <Palette className="h-5 w-5 text-white dark:text-stone-900" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100">
                  Color Palette Generator
                </h1>
                <p className="text-stone-500 dark:text-stone-400 text-sm">
                  Create harmonious color schemes using color theory
                </p>
              </div>
            </div>

            <button
              onClick={exportAllPalettes}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-sm font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
            >
              <Download className="h-4 w-4" />
              Export All
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Controls */}
        <div className="border border-stone-200 dark:border-stone-800 rounded-lg p-5 mb-8">
          <div className="flex items-start gap-5">
            <div
              className="w-20 h-20 rounded-lg border border-stone-200 dark:border-stone-700 cursor-pointer flex-shrink-0"
              style={{ backgroundColor: baseColor }}
              onClick={() => colorInputRef.current?.click()}
            />

            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                    Color Value
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      ref={colorInputRef}
                      type="color"
                      value={baseColor}
                      onChange={(e) => setBaseColor(e.target.value)}
                      className="w-8 h-8 rounded-lg border border-stone-200 dark:border-stone-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={baseColor}
                      onChange={(e) => setBaseColor(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg font-mono text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-400 dark:focus:border-stone-500"
                      placeholder="#6366F1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                    Format
                  </label>
                  <div className="flex border border-stone-200 dark:border-stone-700 rounded-lg p-0.5">
                    {(["hex", "rgb", "hsl"] as const).map((format) => (
                      <button
                        key={format}
                        onClick={() => setActiveFormat(format)}
                        className={`flex-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                          activeFormat === format
                            ? "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900"
                            : "text-stone-500 dark:text-stone-400"
                        }`}
                      >
                        {format.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                    Actions
                  </label>
                  <button
                    onClick={generateRandomBaseColor}
                    className="flex items-center gap-2 px-4 py-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg text-xs font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
                  >
                    <Shuffle className="h-3.5 w-3.5" />
                    Random Color
                  </button>
                </div>
              </div>

              {/* Color Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="text-center">
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    Brightness
                  </div>
                  <div className="text-sm font-medium text-stone-900 dark:text-stone-100 mt-0.5">
                    {Math.round(
                      hexToRgb(baseColor)!.r * 0.299 +
                        hexToRgb(baseColor)!.g * 0.587 +
                        hexToRgb(baseColor)!.b * 0.114
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    Contrast (vs White)
                  </div>
                  <div className="text-sm font-medium text-stone-900 dark:text-stone-100 mt-0.5">
                    {getContrastRatio(baseColor, "#ffffff").toFixed(1)}:1
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    Temperature
                  </div>
                  <div className="text-sm font-medium text-stone-900 dark:text-stone-100 flex items-center justify-center gap-1 mt-0.5">
                    {hexToRgb(baseColor)!.b > hexToRgb(baseColor)!.r ? (
                      <>
                        <Sun className="h-3.5 w-3.5 text-stone-400" />
                        Cool
                      </>
                    ) : (
                      <>
                        <Moon className="h-3.5 w-3.5 text-stone-400" />
                        Warm
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Color History */}
          {colorHistory.length > 0 && (
            <div className="mt-4 pt-4 border-t border-stone-200 dark:border-stone-800">
              <div className="text-xs font-medium text-stone-700 dark:text-stone-300 mb-2">
                Recent Colors
              </div>
              <div className="flex gap-1.5">
                {colorHistory.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setBaseColor(color)}
                    className="w-6 h-6 rounded border border-stone-200 dark:border-stone-700 transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Palette Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {palettes.map((palette) => (
            <div
              key={palette.name}
              className="border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden"
            >
              <div className="px-4 py-3 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-stone-900 dark:text-stone-100">
                    {palette.name}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {palette.description}
                  </p>
                </div>
                <button
                  onClick={() => exportPalette(palette)}
                  className="p-1.5 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
                >
                  <Download className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="p-4">
                {/* Swatch Row */}
                <div className="grid grid-cols-5 gap-1.5 mb-3">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="relative cursor-pointer group"
                      onClick={() =>
                        copyToClipboard(
                          formatColor(color, activeFormat),
                          color.hex
                        )
                      }
                    >
                      <div
                        className="aspect-square rounded-lg border border-stone-200 dark:border-stone-700"
                        style={{ backgroundColor: color.hex }}
                      />
                      {copiedColor === color.hex && (
                        <div className="absolute inset-0 bg-stone-950/50 rounded-lg flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Color Detail Rows */}
                <div className="divide-y divide-stone-100 dark:divide-stone-800">
                  {palette.colors.map((color, colorIndex) => {
                    const colorValue = formatColor(color, activeFormat);
                    return (
                      <div
                        key={colorIndex}
                        className="flex items-center justify-between py-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded border border-stone-300 dark:border-stone-600"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="font-mono text-xs text-stone-700 dark:text-stone-300">
                            {colorValue}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-stone-400 dark:text-stone-500 tabular-nums">
                            {getContrastRatio(color.hex, "#ffffff").toFixed(1)}
                            :1
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(colorValue, color.hex)
                            }
                            className="p-1 text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
                          >
                            {copiedColor === color.hex ? (
                              <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Color Theory Guide */}
        <div className="mt-8 border border-stone-200 dark:border-stone-800 rounded-lg divide-y divide-stone-200 dark:divide-stone-800">
          <div className="px-4 py-3 flex items-center gap-2">
            <Info className="h-4 w-4 text-stone-500 dark:text-stone-400" />
            <h2 className="text-sm font-medium text-stone-900 dark:text-stone-100">
              Color Theory Quick Guide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 dark:divide-stone-800">
            {[
              {
                name: "Complementary",
                desc: "High contrast, vibrant looks",
                use: "Headlines, CTAs",
              },
              {
                name: "Triadic",
                desc: "Vibrant yet balanced palettes",
                use: "Illustrations, logos",
              },
              {
                name: "Analogous",
                desc: "Serene, comfortable designs",
                use: "Backgrounds, nature",
              },
              {
                name: "Monochromatic",
                desc: "Elegant, cohesive looks",
                use: "Minimalist, professional",
              },
              {
                name: "Split Complementary",
                desc: "High contrast, less tension",
                use: "Web interfaces",
              },
              {
                name: "Tetradic",
                desc: "Rich, complex palettes",
                use: "Art, creative projects",
              },
            ].map((theory) => (
              <div key={theory.name} className="px-4 py-3">
                <div className="text-xs font-medium text-stone-900 dark:text-stone-100">
                  {theory.name}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  {theory.desc}
                </div>
                <div className="text-xs text-stone-700 dark:text-stone-300 font-medium mt-1">
                  Best for: {theory.use}
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 bg-stone-50 dark:bg-stone-900">
            <div className="flex items-start gap-2">
              <Contrast className="h-3.5 w-3.5 text-stone-500 dark:text-stone-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                <strong className="text-stone-700 dark:text-stone-300">
                  Accessibility Tip:
                </strong>{" "}
                Aim for contrast ratios of 4.5:1 for normal text and 3:1 for
                large text to ensure readability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
