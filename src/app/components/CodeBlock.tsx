import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CodeBlockProps {
  codeHtml: string;
  codeJsx: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codeHtml, codeJsx }) => {
  const [activeTab, setActiveTab] = useState<"html" | "jsx">("html");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const code = activeTab === "html" ? codeHtml : codeJsx;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <button
            className={`px-2 py-1 text-sm rounded ${
              activeTab === "html" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("html")}
          >
            HTML
          </button>
          <button
            className={`px-2 py-1 text-sm rounded ml-2 ${
              activeTab === "jsx" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("jsx")}
          >
            JSX
          </button>
        </div>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <button className="px-2 py-1 text-sm rounded bg-green-500 text-white">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
      <div className="my-4 rounded-lg overflow-hidden">
        <SyntaxHighlighter
          language={activeTab}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
