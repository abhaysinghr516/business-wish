import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const CONFIG_FILE = "business-wish.json";

const DEFAULT_CONFIG = {
    outputDir: "src/components/ui",
    typescript: true,
};

export function getConfig() {
    const configPath = join(process.cwd(), CONFIG_FILE);

    if (!existsSync(configPath)) {
        return DEFAULT_CONFIG;
    }

    try {
        const raw = readFileSync(configPath, "utf-8");
        return { ...DEFAULT_CONFIG, ...JSON.parse(raw) };
    } catch {
        return DEFAULT_CONFIG;
    }
}

export { CONFIG_FILE, DEFAULT_CONFIG };
