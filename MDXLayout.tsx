import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "./mdx-components";

const components = useMDXComponents({});

const MDXLayout: React.FC = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="custom-mdx-layout">{children}</div>
    </MDXProvider>
  );
};

export default MDXLayout;
