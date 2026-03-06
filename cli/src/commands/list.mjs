import { getRegistry, getAllComponents } from "../utils/registry.mjs";
import { error, info, log, dim, bold, highlight } from "../utils/logger.mjs";

export async function list() {
    log("");
    info("Fetching component registry...");

    let registry;
    try {
        registry = await getRegistry();
    } catch (err) {
        error(`Failed to fetch registry: ${err.message}`);
        process.exit(1);
    }

    const { components, motion } = getAllComponents(registry);

    log("");
    log(`  ${bold("Components")} ${dim(`(${components.length})`)}`);
    log(`  ${dim("─".repeat(40))}`);

    for (const c of components) {
        const variants = c.variants?.length || 0;
        const deps = c.dependencies?.length
            ? dim(` [${c.dependencies.join(", ")}]`)
            : "";
        log(
            `  ${highlight(c.name.padEnd(22))} ${dim(
                variants + " variant" + (variants !== 1 ? "s" : "")
            )}${deps}`
        );
    }

    log("");
    log(`  ${bold("Motion Primitives")} ${dim(`(${motion.length})`)}`);
    log(`  ${dim("─".repeat(40))}`);

    for (const m of motion) {
        const variants = m.variants?.length || 0;
        const deps = m.dependencies?.length
            ? dim(` [${m.dependencies.join(", ")}]`)
            : "";
        log(
            `  ${highlight(m.name.padEnd(22))} ${dim(
                variants + " variant" + (variants !== 1 ? "s" : "")
            )}${deps}`
        );
    }

    log("");
    log(
        `  ${dim("Add a component:")} npx @abhaysinghr516/business-wish add ${dim("<name>")}`
    );
    log("");
}
