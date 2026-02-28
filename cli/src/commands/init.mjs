import { writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createInterface } from "node:readline";
import { CONFIG_FILE, DEFAULT_CONFIG } from "../utils/config.mjs";
import { success, warn, info, log, dim, bold, highlight } from "../utils/logger.mjs";

function question(rl, prompt) {
    return new Promise((resolve) => rl.question(prompt, resolve));
}

export async function init() {
    const configPath = join(process.cwd(), CONFIG_FILE);

    if (existsSync(configPath)) {
        warn(`${CONFIG_FILE} already exists in this directory.`);
        return;
    }

    log("");
    log(`  ${bold("Business Wish")} ${dim("— Component CLI Setup")}`);
    log("");

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const outputDir = await question(
        rl,
        `  Output directory ${dim(`(${DEFAULT_CONFIG.outputDir})`)}:  `
    );

    const tsAnswer = await question(
        rl,
        `  TypeScript? ${dim("(Y/n)")}:  `
    );

    rl.close();

    const config = {
        $schema: "https://www.businesswish.tech/registry.json",
        outputDir: outputDir.trim() || DEFAULT_CONFIG.outputDir,
        typescript: tsAnswer.trim().toLowerCase() !== "n",
    };

    writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n", "utf-8");

    log("");
    success(`Created ${highlight(CONFIG_FILE)}`);
    log("");
    info(`Output directory: ${highlight(config.outputDir)}`);
    info(`TypeScript: ${highlight(config.typescript ? "Yes" : "No")}`);
    log("");
    log(`  ${dim("Next steps:")}`);
    log(`  ${dim("npx business-wish add button")}`);
    log(`  ${dim("npx business-wish list")}`);
    log("");
}
