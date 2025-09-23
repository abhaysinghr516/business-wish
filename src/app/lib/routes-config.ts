// for page navigation & to sort on leftbar

export type EachRoute = {
    title: string;
    href: string;
    noLink?: true;
    items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
    {
        title: "Components",
        href: "/components",
        noLink: true,
        items: [
            {
                title: "Accordion",
                href: "/accordion",
            },
            {
                title: "Alert",
                href: "/alert",
            },
            {
                title: "Avatar",
                href: "/avatar",
            },
            {
                title: "Badge",
                href: "/badge",
            },
            {
                title: "Banner",
                href: "/banner",
            },
            {
                title: "Bottom Navigation",
                href: "/bottom-navigation",
            },
            {
                title: "Breadcrumb",
                href: "/breadcrumb",
            },
            {
                title: "Button",
                href: "/button",
            },
            {
                title: "Call to Action",
                href: "/call-to-action",
            },
            {
                title: "Card",
                href: "/card",
            },
            {
                title: "Data Table",
                href: "/data-table",
            },
            {
                title: "Date Picker",
                href: "/date-picker",
            },
            {
                title: "Divider",
                href: "/divider",
            },
            {
                title: "Dropdown",
                href: "/dropdown",
            },
            {
                title: "Featues",
                href: "/features",
            },
            {
                title: "File Upload",
                href: "/file-upload",
            },
            {
                title: "Footer",
                href: "/footer",
            },
            {
                title: "Header",
                href: "/header",
            },
            {
                title: "Hero",
                href: "/hero",
            },
            {
                title: "Loader",
                href: "/loader",
            },
            {
                title: "Pagination",
                href: "/pagination",
            },
            {
                title: "Popover",
                href: "/popover",
            },
            {
                title: "Progress",
                href: "/progress",
            },
            {
                title: "Sidebar",
                href: "/sidebar",
            },
            {
                title: "Skeleton",
                href: "/skeleton",
            },
            {
                title: "Social Share",
                href: "/social-share",
            },
            {
                title: "Tabs",
                href: "/tabs",
            },
            {
                title: "Testimonial",
                href: "/testimonial",
            },
            {
                title: "Tooltip",
                href: "/tooltip",
            },
        ]
    },
    {
        title: "Pages",
        href: "/pages",
        noLink: true,
        items: [
            {
                title: "Error Pages",
                href: "/404",
            },
            {
                title: "Blog List",
                href: "/blog-list",
            },
            // {
            //     title: "Settings",
            //     href: "/settings",
            // },
        ]
    },
    {
        title: "Tools",
        href: "/tools",
        noLink: true,
        items: [
            {
                title: "Palette Generator",
                href: "/palette-generator",
            },
            {
                title: "Contrast Checker",
                href: "/contrast-checker",
            },
            {
                title: "Blindness Simulator",
                href: "/blindness-simulator",
            },
            {
                title: "Color Converter",
                href: "/format-converter",
            },
            {
                title: "Image Color Picker",
                href: "/image-extractor",
            },
            {
                title: "JSON Formatter",
                href: "/json-formatter",
            },
            {
                title: "QR Code Generator",
                href: "/qr-generator",
            },
            {
                title: "CSS Box Shadow",
                href: "/box-shadow",
            },
            {
                title: "CSS Gradient",
                href: "/gradient",
            },
            {
                title: "Flexbox Generator",
                href: "/flexbox",
            },
            {
                title: "CSV to JSON",
                href: "/csv-to-json",
            },
            {
                title: "Word Counter",
                href: "/word-counter",
            },
            {
                title: "Image Compressor",
                href: "/image-compressor",
            },
            {
                title: "CSS Grid Generator",
                href: "/css-grid",
            },
            {
                title: "Pomodoro Timer",
                href: "/pomodoro-timer",
            },
            {
                title: "Animation Easing",
                href: "/animation-easing",
            },
            {
                title: "Image Formatter",
                href: "/image-formatter",
            },
        ]
    },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
    const ans: Page[] = [];
    if (!node.noLink) {
        ans.push({ title: node.title, href: node.href });
    }
    node.items?.forEach((subNode) => {
        const temp = { ...subNode, href: `${node.href}${subNode.href}` };
        ans.push(...getRecurrsiveAllLinks(temp));
    });
    return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
