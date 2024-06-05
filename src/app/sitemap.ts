import { componentsData } from "../data/componentsData";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const componentEntries: MetadataRoute.Sitemap = componentsData.map((component, index) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${component.href}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/components`,
            lastModified: new Date(),
        },
        ...componentEntries,
    ];
}
