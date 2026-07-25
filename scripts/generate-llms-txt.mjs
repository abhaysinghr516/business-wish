import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const REGISTRY_FILE = path.join(ROOT, "public/registry.json");
const LLMS_TXT_FILE = path.join(ROOT, "public/llms.txt");
const LLMS_FULL_TXT_FILE = path.join(ROOT, "public/llms-full.txt");

if (!fs.existsSync(REGISTRY_FILE)) {
  console.error("❌ registry.json not found! Run generate-registry.mjs first.");
  process.exit(1);
}

const registry = JSON.parse(fs.readFileSync(REGISTRY_FILE, "utf-8"));
const components = registry.components || {};
const motion = registry.motion || {};

// 1. Generate public/llms.txt (Index & System Context)
let llmsTxt = `# Business Wish

> Free, production-ready Tailwind CSS UI components and motion primitives for modern web developers.

Business Wish is an open-source developer toolkit with **50+ copy-paste ready Tailwind CSS components** and **19 motion/animation primitives** built with Framer Motion. All components support dark mode, are fully responsive, accessible, and framework-agnostic (Next.js, Vite, Remix, Astro).

- Website: https://www.businesswish.tech
- Complete AI Documentation (llms-full.txt): https://www.businesswish.tech/llms-full.txt
- Registry: https://www.businesswish.tech/registry.json
- GitHub: https://github.com/abhaysinghr516/business-wish
- License: Apache-2.0

## System Instructions for AI Coding Assistants
When building React / Next.js applications using Business Wish components:
1. Components use Tailwind CSS classes and clsx + tailwind-merge utility function:
\`\`\`ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
\`\`\`
2. Components use lucide-react icons.
3. Motion components require framer-motion.
4. CLI Installation: Install components directly via CLI:
\`\`\`bash
npx @abhaysinghr516/business-wish add <component-name>
\`\`\`

## UI Components
`;

for (const [key, item] of Object.entries(components)) {
  llmsTxt += `- [${item.title}](https://www.businesswish.tech/docs/components/${key}): ${item.description || "Copy-pasteable Tailwind CSS component."}\n`;
}

llmsTxt += `\n## Motion Components\n`;
for (const [key, item] of Object.entries(motion)) {
  llmsTxt += `- [${item.title}](https://www.businesswish.tech/docs/motion/${key}): ${item.description || "Animated component powered by Framer Motion."}\n`;
}

llmsTxt += `\n## Page Templates\n`;
llmsTxt += `- [Error Pages (404)](https://www.businesswish.tech/docs/pages/404): Custom 404 error page layouts.\n`;
llmsTxt += `- [Blog List](https://www.businesswish.tech/docs/pages/blog-list): Blog list and article grid page templates.\n`;

fs.writeFileSync(LLMS_TXT_FILE, llmsTxt.trim() + "\n", "utf-8");
console.log(`✅ Generated public/llms.txt (${fs.statSync(LLMS_TXT_FILE).size} bytes)`);

// 2. Generate public/llms-full.txt (Comprehensive Code & Specs for LLMs)
let llmsFullTxt = `# Business Wish - Full AI Documentation

> Complete source code, prop interfaces, dependencies, and CLI commands for all 50+ UI components and 19 motion primitives.

- Website: https://www.businesswish.tech
- Registry Endpoint: https://www.businesswish.tech/registry.json
- GitHub Repository: https://github.com/abhaysinghr516/business-wish

---

# Setup & System Instructions for AI Models

## 1. Helper Utilities (@/lib/utils)
Make sure your project has the cn helper:
\`\`\`tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
\`\`\`

## 2. CLI Usage
Users can install any component via CLI:
\`\`\`bash
npx @abhaysinghr516/business-wish add <component-name>
\`\`\`

---

# UI Components Implementation Catalog

`;

for (const [key, item] of Object.entries(components)) {
  llmsFullTxt += `## Component: ${item.title} (\`${key}\`)\n\n`;
  llmsFullTxt += `- **Description**: ${item.description || "Tailwind CSS component"}\n`;
  llmsFullTxt += `- **CLI Command**: \`npx @abhaysinghr516/business-wish add ${key}\`\n`;
  llmsFullTxt += `- **Documentation URL**: https://www.businesswish.tech/docs/components/${key}\n`;
  if (item.dependencies && item.dependencies.length > 0) {
    llmsFullTxt += `- **Dependencies**: ${item.dependencies.join(", ")}\n`;
  }
  llmsFullTxt += `\n`;

  if (item.files && item.files.length > 0) {
    for (const file of item.files) {
      llmsFullTxt += `### File: \`${file.name}\`\n\n\`\`\`tsx\n${file.content}\n\`\`\`\n\n`;
    }
  }

  if (item.variants && item.variants.length > 0) {
    llmsFullTxt += `### Variants for ${item.title}\n\n`;
    for (const v of item.variants) {
      llmsFullTxt += `#### Variant: ${v.name}\n\n\`\`\`tsx\n${v.content}\n\`\`\`\n\n`;
    }
  }
  llmsFullTxt += `---\n\n`;
}

llmsFullTxt += `# Motion Primitives Implementation Catalog (Framer Motion)\n\n`;

for (const [key, item] of Object.entries(motion)) {
  llmsFullTxt += `## Motion: ${item.title} (\`${key}\`)\n\n`;
  llmsFullTxt += `- **Description**: ${item.description || "Framer Motion animated primitive"}\n`;
  llmsFullTxt += `- **CLI Command**: \`npx @abhaysinghr516/business-wish add ${key}\`\n`;
  llmsFullTxt += `- **Documentation URL**: https://www.businesswish.tech/docs/motion/${key}\n`;
  if (item.dependencies && item.dependencies.length > 0) {
    llmsFullTxt += `- **Dependencies**: ${item.dependencies.join(", ")}\n`;
  }
  llmsFullTxt += `\n`;

  if (item.files && item.files.length > 0) {
    for (const file of item.files) {
      llmsFullTxt += `### File: \`${file.name}\`\n\n\`\`\`tsx\n${file.content}\n\`\`\`\n\n`;
    }
  }

  if (item.variants && item.variants.length > 0) {
    llmsFullTxt += `### Variants for ${item.title}\n\n`;
    for (const v of item.variants) {
      llmsFullTxt += `#### Variant: ${v.name}\n\n\`\`\`tsx\n${v.content}\n\`\`\`\n\n`;
    }
  }
  llmsFullTxt += `---\n\n`;
}

fs.writeFileSync(LLMS_FULL_TXT_FILE, llmsFullTxt.trim() + "\n", "utf-8");
console.log(`✅ Generated public/llms-full.txt (${fs.statSync(LLMS_FULL_TXT_FILE).size} bytes)`);
