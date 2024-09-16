import Link from "next/link";
import { ComponentData, componentsData } from "../../data/componentsData";

const Sidebar = () => {
  return (
    <aside className=" hidden sm:block w-64 py-6 px-8 border-r lg:max-h-screen overflow-y-scroll ">
      <Link href="/components">
        <h2 className="text-xl font-bold mb-4">Components</h2>
      </Link>
      <ul>
        {componentsData.map((component) => (
          <Link
            href={component.href}
            key={component.title}
            className="text-gray-700 hover:text-blue-500"
          >
            <li
              key={component.title}
              className=" hover:bg-slate-100 px-4 py-1 rounded"
            >
              {component.title}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
