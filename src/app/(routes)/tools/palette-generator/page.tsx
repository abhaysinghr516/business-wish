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
  Zap,
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/tools"
            className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm mb-3"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Tools
          </Link>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <Palette className="h-4 w-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Color Palette Generator
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Create harmonious color schemes using color theory
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={exportAllPalettes}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-900 dark:bg-gray-50 text-white dark:text-black rounded-lg text-sm font-medium"
              >
                <Download className="h-3.5 w-3.5" />
                Export All
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 p-4 mb-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div
                className="w-20 h-20 rounded-xl border-3 border-white dark:border-gray-950 shadow-lg cursor-pointer"
                style={{ backgroundColor: baseColor }}
                onClick={() => colorInputRef.current?.click()}
              />
            </div>

            <div className="flex-1 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    Color Value
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      ref={colorInputRef}
                      type="color"
                      value={baseColor}
                      onChange={(e) => setBaseColor(e.target.value)}
                      className="w-8 h-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={baseColor}
                      onChange={(e) => setBaseColor(e.target.value)}
                      className="flex-1 px-2.5 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg font-mono text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-400 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-gray-900"
                      placeholder="#6366F1"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    Format
                  </label>
                  <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
                    {(["hex", "rgb", "hsl"] as const).map((format) => (
                      <button
                        key={format}
                        onClick={() => setActiveFormat(format)}
                        className={`flex-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                          activeFormat === format
                            ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {format.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    Actions
                  </label>
                  <div className="flex gap-1.5">
                    <button
                      onClick={generateRandomBaseColor}
                      className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-gray-900 dark:bg-gray-50 text-white dark:text-black rounded-lg text-xs font-medium"
                    >
                      <Shuffle className="h-3.5 w-3.5" />
                      Random
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                <div className="text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Brightness
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {Math.round(
                      hexToRgb(baseColor)!.r * 0.299 +
                        hexToRgb(baseColor)!.g * 0.587 +
                        hexToRgb(baseColor)!.b * 0.114
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Contrast (vs White)
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {getContrastRatio(baseColor, "#ffffff").toFixed(1)}:1
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Temperature
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center justify-center gap-1">
                    {hexToRgb(baseColor)!.b > hexToRgb(baseColor)!.r ? (
                      <>
                        <Sun className="h-3.5 w-3.5 text-blue-500" />
                        Cool
                      </>
                    ) : (
                      <>
                        <Moon className="h-3.5 w-3.5 text-orange-500" />
                        Warm
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {colorHistory.length > 0 && (
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Recent Colors
              </div>
              <div className="flex gap-1.5">
                {colorHistory.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setBaseColor(color)}
                    className="w-6 h-6 rounded border-2 border-gray-200 dark:border-gray-700"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"}>
          {palettes.map((palette, index) => (
            <div
              key={palette.name}
              className={
                "bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm p-0"
              }
            >
              <div
                className={
                  "p-3 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
                }
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {palette.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {palette.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => exportPalette(palette)}
                      className="p-1.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      <Download className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <div className="grid grid-cols-5 gap-1.5 mb-3">
                  {palette.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="group relative cursor-pointer"
                      onClick={() =>
                        copyToClipboard(
                          formatColor(color, activeFormat),
                          color.hex
                        )
                      }
                    >
                      <div
                        className="aspect-square rounded-lg border border-gray-200 dark:border-gray-700"
                        style={{ backgroundColor: color.hex }}
                      />
                      {copiedColor === color.hex && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  {palette.colors.map((color, colorIndex) => {
                    const colorValue = formatColor(color, activeFormat);
                    return (
                      <div
                        key={colorIndex}
                        className="flex items-center justify-between p-1.5 bg-gray-50 dark:bg-gray-900 rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded border border-gray-300 dark:border-gray-600"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="font-mono text-xs text-gray-700 dark:text-gray-300">
                            {colorValue}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {getContrastRatio(color.hex, "#ffffff").toFixed(1)}
                            :1
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(colorValue, color.hex)
                            }
                            className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            {copiedColor === color.hex ? (
                              <Check className="h-3 w-3 text-green-600" />
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

        <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-indigo-600" />
            <h2 className="font-semibold text-gray-900 text-sm">
              Color Theory Quick Guide
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              {
                name: "Complementary",
                desc: "High contrast, vibrant looks",
                icon: <Contrast className="h-3.5 w-3.5 text-pink-600" />,
                use: "Headlines, CTAs",
              },
              {
                name: "Triadic",
                desc: "Vibrant yet balanced palettes",
                icon: (
                  <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full" />
                ),
                use: "Illustrations, logos",
              },
              {
                name: "Analogous",
                desc: "Serene, comfortable designs",
                icon: <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />,
                use: "Backgrounds, nature",
              },
              {
                name: "Monochromatic",
                desc: "Elegant, cohesive looks",
                icon: <div className="w-3.5 h-3.5 bg-blue-500 rounded-full" />,
                use: "Minimalist, professional",
              },
              {
                name: "Split Complementary",
                desc: "High contrast, less tension",
                icon: (
                  <div className="w-3.5 h-3.5 bg-purple-500 rounded-full" />
                ),
                use: "Web interfaces",
              },
              {
                name: "Tetradic",
                desc: "Rich, complex palettes",
                icon: <div className="w-3.5 h-3.5 bg-red-500 rounded-full" />,
                use: "Art, creative projects",
              },
            ].map((theory) => (
              <div
                key={theory.name}
                className="bg-white/60 rounded-lg p-3 border border-white/50"
              >
                <div className="flex items-center gap-2 mb-1">
                  {theory.icon}
                  <div className="font-medium text-gray-900 text-xs">
                    {theory.name}
                  </div>
                </div>
                <div className="text-xs text-gray-600 mb-1">{theory.desc}</div>
                <div className="text-xs text-indigo-600 font-medium">
                  Best for: {theory.use}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-indigo-200">
            <div className="flex items-start gap-2">
              <div className="p-1 bg-indigo-100 rounded">
                <Contrast className="h-3 w-3 text-indigo-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900 text-xs mb-1">
                  Accessibility Tip
                </div>
                <div className="text-xs text-gray-600">
                  Aim for contrast ratios of 4.5:1 for normal text and 3:1 for
                  large text to ensure readability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
