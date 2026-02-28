const COLORS = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    magenta: "\x1b[35m",
};

export function log(msg) {
    console.log(msg);
}

export function success(msg) {
    console.log(`${COLORS.green}✓${COLORS.reset} ${msg}`);
}

export function warn(msg) {
    console.log(`${COLORS.yellow}⚠${COLORS.reset} ${msg}`);
}

export function error(msg) {
    console.error(`${COLORS.red}✗${COLORS.reset} ${msg}`);
}

export function info(msg) {
    console.log(`${COLORS.cyan}ℹ${COLORS.reset} ${msg}`);
}

export function dim(msg) {
    return `${COLORS.dim}${msg}${COLORS.reset}`;
}

export function bold(msg) {
    return `${COLORS.bold}${msg}${COLORS.reset}`;
}

export function highlight(msg) {
    return `${COLORS.cyan}${msg}${COLORS.reset}`;
}
