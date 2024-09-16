import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface CodeBlockProps {
  codeJsx: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codeJsx }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="flex justify-end mb-2">
        <CopyToClipboard text={codeJsx} onCopy={handleCopy}>
          <button className="px-2 py-1 text-sm rounded bg-green-500 text-white">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
      <div className="my-4 rounded-lg overflow-hidden">
        <SyntaxHighlighter
          showLineNumbers
          language="html"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            lineHeight: "1.5",
          }}
        >
          {codeJsx}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
