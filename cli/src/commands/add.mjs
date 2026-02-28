import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { getConfig } from "../utils/config.mjs";
import { getRegistry, findComponent } from "../utils/registry.mjs";
import { success, error, warn, info, log, dim, bold, highlight } from "../utils/logger.mjs";

export async function add(name) {
    log("");
    info(`Fetching component registry...`);

    let registry;
    try {
        registry = await getRegistry();
    } catch (err) {
        error(`Failed to fetch registry: ${err.message}`);
        log(`  ${dim("Check your internet connection and try again.")}`);
        process.exit(1);
    }

    const component = findComponent(registry, name);

    if (!component) {
        error(`Component "${name}" not found.`);
        log("");
        log(`  ${dim("Run")} npx business-wish list ${dim("to see available components.")}`);
        log("");
        process.exit(1);
    }

    const config = getConfig();
    const outputDir = join(process.cwd(), config.outputDir);

    // Create output directory if it doesn't exist
    if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
        info(`Created directory: ${highlight(config.outputDir)}`);
    }

    // Write the main component file
    const mainFile = component.files[0];
    const filePath = join(outputDir, mainFile.name);

    if (existsSync(filePath)) {
        warn(`${mainFile.name} already exists. Overwriting...`);
    }

    writeFileSync(filePath, mainFile.content + "\n", "utf-8");

    log("");
    success(`Added ${bold(component.title)} → ${highlight(config.outputDir + "/" + mainFile.name)}`);

    // Show variant info
    if (component.variants && component.variants.length > 0) {
        log("");
        info(`${component.variants.length} variant(s) available:`);
        for (const variant of component.variants) {
            log(`  ${dim("•")} ${variant.name}`);
        }
        log(`  ${dim("View all variants at:")} https://www.businesswish.tech/docs/${component.type === "motion" ? "motion" : "components"}/${name}`);
    }

    // Show dependency warnings
    if (component.dependencies && component.dependencies.length > 0) {
        log("");
        warn(`This component requires the following dependencies:`);
        for (const dep of component.dependencies) {
            log(`  ${dim("•")} ${highlight(dep)}`);
        }
        log("");
        log(`  ${dim("Install with:")} npm install ${component.dependencies.join(" ")}`);
    }

    log("");
}
