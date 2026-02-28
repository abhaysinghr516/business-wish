import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const COMPONENTS_DIR = path.join(ROOT, "src/app/contents/docs/components");
const MOTION_DIR = path.join(ROOT, "src/app/contents/docs/motion");
const OUTPUT_FILE = path.join(ROOT, "public/registry.json");

/**
 * Extract the first code block after "## Implementation" heading from MDX content.
 * Falls back to the first code block in the file if no Implementation section found.
 */
function extractImplementationCode(mdxContent) {
    // Try to find code block after ## Implementation
    const implMatch = mdxContent.match(
        /##\s*Implementation\s*\n+```(?:tsx|jsx|ts|js)?\s*\n([\s\S]*?)```/
    );
    if (implMatch) return implMatch[1].trim();

    // Fallback: grab the first fenced code block
    const firstBlock = mdxContent.match(
        /```(?:tsx|jsx|ts|js)?(?:\s+showLineNumbers)?\s*\n([\s\S]*?)```/
    );
    if (firstBlock) return firstBlock[1].trim();

    return null;
}

/**
 * Extract all variant code blocks (after ## Implementation) from MDX content.
 * Each variant has a heading (### Name) followed by a code block.
 */
function extractVariants(mdxContent) {
    const variants = [];

    // Find all ### headings followed by code blocks
    const variantRegex =
        /###\s+(.+?)\n[\s\S]*?```(?:tsx|jsx|ts|js)?(?:\s+showLineNumbers)?\s*\n([\s\S]*?)```/g;
    let match;
    while ((match = variantRegex.exec(mdxContent)) !== null) {
        variants.push({
            name: match[1].trim(),
            code: match[2].trim(),
        });
    }

    return variants;
}

/**
 * Extract metadata from MDX frontmatter.
 */
function extractFrontmatter(mdxContent) {
    const match = mdxContent.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) return {};

    const frontmatter = {};
    const lines = match[1].split("\n");
    for (const line of lines) {
        const colonIdx = line.indexOf(":");
        if (colonIdx > 0) {
            const key = line.slice(0, colonIdx).trim();
            const value = line.slice(colonIdx + 1).trim();
            frontmatter[key] = value;
        }
    }
    return frontmatter;
}

/**
 * Detect dependencies from code content.
 */
function detectDependencies(code) {
    const deps = [];
    if (/from\s+["']framer-motion["']/.test(code)) deps.push("framer-motion");
    if (/from\s+["']recharts["']/.test(code)) deps.push("recharts");
    if (/from\s+["']lucide-react["']/.test(code)) deps.push("lucide-react");
    return deps;
}

/**
 * Convert kebab-case to PascalCase for file names.
 */
function toPascalCase(str) {
    return str
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("");
}

/**
 * Process a directory of component MDX files into registry entries.
 */
function processDirectory(dir, type) {
    const entries = {};
    const componentDirs = fs.readdirSync(dir, { withFileTypes: true });

    for (const dirent of componentDirs) {
        if (!dirent.isDirectory()) continue;

        const mdxPath = path.join(dir, dirent.name, "index.mdx");
        if (!fs.existsSync(mdxPath)) continue;

        const mdxContent = fs.readFileSync(mdxPath, "utf-8");
        const frontmatter = extractFrontmatter(mdxContent);
        const implementationCode = extractImplementationCode(mdxContent);
        const variants = extractVariants(mdxContent);

        if (!implementationCode) {
            console.warn(`⚠  No code found for ${type}/${dirent.name}, skipping`);
            continue;
        }

        const fileName = `${toPascalCase(dirent.name)}.tsx`;
        const allCode = [implementationCode, ...variants.map((v) => v.code)].join(
            "\n"
        );
        const dependencies = detectDependencies(allCode);

        entries[dirent.name] = {
            name: dirent.name,
            type,
            title: frontmatter.title || toPascalCase(dirent.name),
            description: frontmatter.description || "",
            files: [
                {
                    name: fileName,
                    content: implementationCode,
                },
            ],
            variants: variants.map((v) => ({
                name: v.name,
                fileName: `${toPascalCase(dirent.name)}${toPascalCase(v.name.replace(/\s+/g, "-"))}.tsx`,
                content: v.code,
            })),
            dependencies,
        };
    }

    return entries;
}

// ── Main ──────────────────────────────────────────────────────────────
console.log("📦 Generating component registry...\n");

const components = processDirectory(COMPONENTS_DIR, "component");
const motion = processDirectory(MOTION_DIR, "motion");

const registry = {
    $schema: "https://www.businesswish.tech/registry.json",
    version: "1.0.0",
    baseUrl: "https://www.businesswish.tech",
    components,
    motion,
};

const componentCount = Object.keys(components).length;
const motionCount = Object.keys(motion).length;

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2), "utf-8");

console.log(`✅ Registry generated successfully!`);
console.log(`   ${componentCount} components`);
console.log(`   ${motionCount} motion primitives`);
console.log(`   → ${path.relative(ROOT, OUTPUT_FILE)}\n`);
