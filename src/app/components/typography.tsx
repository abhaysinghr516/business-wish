import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return (
    <div
      className="
      prose
      prose-zinc
      dark:prose-invert
      
      /* Base width and responsiveness */
      w-[85vw]
      sm:w-full
      mx-auto
      !min-w-full
      
      /* Spacing and layout */
      pt-4
      px-4
      sm:px-0
      
      /* Headings */
      prose-headings:scroll-m-20
      prose-headings:font-semibold
      prose-headings:tracking-tight
      prose-h1:text-4xl
      prose-h1:leading-tight
      prose-h2:text-3xl
      prose-h2:leading-tight
      prose-h3:text-2xl
      prose-h4:text-xl
      
      /* Paragraph */
      prose-p:leading-relaxed
      prose-p:text-gray-700
      dark:prose-p:text-gray-300
      
      /* Code blocks */
      prose-code:font-code
      prose-code:text-sm
      prose-code:leading-6
      prose-code:p-1.5
      prose-code:rounded-lg
      prose-code:before:content-none
      prose-code:after:content-none
      
      /* Light mode code styling */
      prose-code:bg-gray-50
      prose-code:text-gray-800
      prose-pre:bg-gray-50
      prose-pre:border
      prose-pre:border-gray-200
      prose-pre:shadow-sm
      
      /* Dark mode code styling */
      dark:prose-code:bg-neutral-900
      dark:prose-code:text-gray-100
      dark:prose-pre:bg-neutral-900
      dark:prose-pre:border-neutral-800
      
      /* Lists */
      prose-ul:list-disc
      prose-ul:pl-4
      prose-ol:pl-4
      
      /* Links */
      prose-a:text-blue-600
      prose-a:no-underline
      hover:prose-a:underline
      dark:prose-a:text-blue-400
      
      /* Blockquotes */
      prose-blockquote:border-l-4
      prose-blockquote:border-gray-300
      prose-blockquote:pl-4
      prose-blockquote:italic
      dark:prose-blockquote:border-gray-700
      
      /* Tables */
      prose-table:border-collapse
      prose-table:w-full
      prose-td:p-2
      prose-td:border
      prose-td:border-gray-300
      dark:prose-td:border-gray-700
      prose-th:p-2
      prose-th:border
      prose-th:border-gray-300
      dark:prose-th:border-gray-700
      prose-th:bg-gray-50
      dark:prose-th:bg-neutral-900
      
      /* Images */
      prose-img:rounded-lg
      prose-img:shadow-md
      
      /* HR */
      prose-hr:border-gray-200
      dark:prose-hr:border-gray-800
      
      /* Selection */
      selection:bg-blue-100
      dark:selection:bg-blue-900
      selection:text-blue-900
      dark:selection:text-blue-100
      
      /* Transitions */
      transition-colors
      duration-200
    "
    >
      {children}
    </div>
  );
}
