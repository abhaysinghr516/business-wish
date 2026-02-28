import https from "node:https";
import http from "node:http";

const REGISTRY_URL =
    "https://www.businesswish.tech/registry.json";

const DEV_URL =
    "http://localhost:3000/registry.json";

const FALLBACK_URL =
    "https://raw.githubusercontent.com/abhaysinghr516/business-wish/main/public/registry.json";

function fetchUrl(url) {
    const client = url.startsWith("https") ? https : http;
    return new Promise((resolve, reject) => {
        client
            .get(url, (res) => {
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    return fetchUrl(res.headers.location).then(resolve).catch(reject);
                }
                if (res.statusCode !== 200) {
                    reject(new Error(`HTTP ${res.statusCode}`));
                    return;
                }
                let data = "";
                res.on("data", (chunk) => (data += chunk));
                res.on("end", () => resolve(data));
            })
            .on("error", reject);
    });
}

let _cache = null;

export async function getRegistry() {
    if (_cache) return _cache;

    let raw;
    try {
        raw = await fetchUrl(REGISTRY_URL);
    } catch {
        try {
            // Try localhost dev server
            raw = await fetchUrl(DEV_URL);
        } catch {
            // Fallback to GitHub raw
            raw = await fetchUrl(FALLBACK_URL);
        }
    }

    _cache = JSON.parse(raw);
    return _cache;
}

export function findComponent(registry, name) {
    const slug = name.toLowerCase().trim();

    // Search in components
    if (registry.components[slug]) {
        return registry.components[slug];
    }

    // Search in motion
    if (registry.motion[slug]) {
        return registry.motion[slug];
    }

    return null;
}

export function getAllComponents(registry) {
    const components = Object.values(registry.components);
    const motion = Object.values(registry.motion);
    return { components, motion };
}
