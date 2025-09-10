import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return (
    <div
      className="
      prose
      prose-zinc
      dark:prose-invert
      
      /* Base width and responsiveness */
      w-full
      max-w-none
      mx-auto
      !min-w-full
      overflow-hidden
      
      /* Spacing and layout */
      pt-0
      px-0
      
      /* Headings - Mobile optimized */
      prose-headings:scroll-m-20
      prose-headings:font-semibold
      prose-headings:tracking-tight
      prose-h1:text-2xl
      sm:prose-h1:text-3xl
      lg:prose-h1:text-4xl
      prose-h1:leading-tight
      prose-h2:text-xl
      sm:prose-h2:text-2xl
      lg:prose-h2:text-3xl
      prose-h2:leading-tight
      prose-h3:text-lg
      sm:prose-h3:text-xl
      lg:prose-h3:text-2xl
      prose-h4:text-base
      sm:prose-h4:text-lg
      lg:prose-h4:text-xl
      
      /* Paragraph */
      prose-p:leading-relaxed
      prose-p:text-gray-700
      dark:prose-p:text-gray-300
      
      /* Code blocks - Mobile responsive */
      prose-code:font-code
      prose-code:text-xs
      sm:prose-code:text-sm
      prose-code:leading-6
      prose-code:p-1.5
      prose-code:rounded-lg
      prose-code:before:content-none
      prose-code:after:content-none
      prose-code:break-words
      prose-code:whitespace-pre-wrap
      
      /* Pre blocks - Mobile overflow handling */
      prose-pre:overflow-x-auto
      prose-pre:max-w-full
      prose-pre:text-xs
      sm:prose-pre:text-sm
      prose-pre:leading-6
      prose-pre:p-3
      sm:prose-pre:p-4
      prose-pre:rounded-lg
      prose-pre:whitespace-pre
      prose-pre:break-words
      
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
      
      /* Images - Mobile responsive */
      prose-img:rounded-lg
      prose-img:shadow-md
      prose-img:max-w-full
      prose-img:h-auto
      
      /* HR */
      prose-hr:border-gray-200
      dark:prose-hr:border-gray-800
      
      /* Mobile overflow prevention */
      prose-pre:scrollbar-thin
      prose-pre:scrollbar-thumb-gray-300
      dark:prose-pre:scrollbar-thumb-gray-600
      prose-pre:scrollbar-track-transparent
      
      /* Ensure all content respects container bounds */
      [&_*]:max-w-full
      [&_*]:overflow-x-auto
      
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
