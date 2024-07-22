import { Metadata } from "next";
import { componentsData } from "../../../../data/componentsData";
import ComponentPage from "@/app/components/Pages/Component/ComponentPage";

export function generateMetadata({
  params,
}: {
  params: { component: string };
}): Metadata {
  const pathname = `/components/${params.component}`;
  const componentData = componentsData.find((data) => data.href === pathname);

  return {
    title: componentData?.title || "Component",
    description: componentData?.description || "Component description",
    keywords: componentData?.keywords || "Component keywords",
  };
}

export default function Page() {
  return <ComponentPage />;
}
