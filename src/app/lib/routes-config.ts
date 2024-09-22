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
                title: "404 Not Found",
                href: "/404",
            },
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
                title: "Blog List",
                href: "/blog-list",
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
                title: "Sidebar",
                href: "/sidebar",
            },
            {
                title: "Skeleton",
                href: "/skeleton",
            },
            {
                title: "Tabs",
                href: "/tabs",
            },
            {
                title: "Testimonial",
                href: "/testimonial",
            },
        ]
    },
    {
        title: "Pages",
        href: "/pages",
        noLink: true,
        items: [
            {
                title: "Settings",
                href: "/settings",
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
