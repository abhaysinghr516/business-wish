import { ComponentData } from "../data/componentsData";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const componentsData: ComponentData[] = [
        {
            href: "/components/404",
            title: "Error404",
            components: "2",
        },
        {
            href: "/components/accordion",
            title: "Accordion",
            components: "2",
        },
    ];

    const componentEntries: MetadataRoute.Sitemap = componentsData.map(({ href }) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${href}`,
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/components`,
            lastModified: new Date(),
        },
        ...componentEntries,
    ];
}
