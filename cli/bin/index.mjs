#!/usr/bin/env node

import { argv, exit } from "node:process";
import { init } from "../src/commands/init.mjs";
import { add } from "../src/commands/add.mjs";
import { list } from "../src/commands/list.mjs";
import { log, error, dim } from "../src/utils/logger.mjs";

const VERSION = "1.1.0";

const HELP = `
  ${dim("Usage:")}
    npx @abhaysinghr516/business-wish <command> [options]

  ${dim("Commands:")}
    init                Create a business-wish.json config file
    add <component>     Add a component to your project
    list                List all available components

  ${dim("Options:")}
    --help, -h          Show this help message
    --version, -v       Show version number

  ${dim("Examples:")}
    npx @abhaysinghr516/business-wish init
    npx @abhaysinghr516/business-wish add button
    npx @abhaysinghr516/business-wish add text-reveal
    npx @abhaysinghr516/business-wish list
`;

async function main() {
    const args = argv.slice(2);
    const command = args[0];

    if (!command || command === "--help" || command === "-h") {
        log(HELP);
        exit(0);
    }

    if (command === "--version" || command === "-v") {
        log(`business-wish v${VERSION}`);
        exit(0);
    }

    switch (command) {
        case "init":
            await init();
            break;

        case "add": {
            const componentName = args[1];
            if (!componentName) {
                error("Please specify a component name: npx @abhaysinghr516/business-wish add <name>");
                exit(1);
            }
            await add(componentName);
            break;
        }

        case "list":
            await list();
            break;

        default:
            error(`Unknown command: "${command}"`);
            log(HELP);
            exit(1);
    }
}

main().catch((err) => {
    error(err.message);
    exit(1);
});
