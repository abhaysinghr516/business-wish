import { PropsWithChildren } from "react";

export function Typography({ children }: PropsWithChildren) {
  return (
    <div
      className="
      prose
      prose-neutral
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
      
      /* Headings */
      prose-headings:scroll-m-20
      prose-headings:font-semibold
      prose-headings:tracking-tight
      prose-h1:tracking-tighter
      prose-h2:tracking-tight
      prose-h3:tracking-tight
      
      prose-h1:text-3xl
      sm:prose-h1:text-4xl
      lg:prose-h1:text-5xl
      prose-h1:leading-[1.1]
      
      prose-h2:text-2xl
      sm:prose-h2:text-3xl
      lg:prose-h2:text-4xl
      prose-h2:leading-tight
      
      prose-h3:text-xl
      sm:prose-h3:text-2xl
      lg:prose-h3:text-3xl
      
      prose-h4:text-lg
      sm:prose-h4:text-xl
      
      /* Paragraph */
      prose-p:leading-relaxed
      prose-p:text-neutral-600
      dark:prose-p:text-neutral-400
      
      /* Inline Code blocks */
      prose-code:font-mono
      prose-code:text-[13px]
      sm:prose-code:text-sm
      prose-code:font-medium
      prose-code:px-1.5
      prose-code:py-0.5
      prose-code:rounded-md
      prose-code:before:content-none
      prose-code:after:content-none
      prose-code:break-words
      
      /* Pure styling for inline code (light/dark) - exclude <pre> */
      [&_:not(pre)>code]:bg-neutral-100/80
      [&_:not(pre)>code]:text-neutral-900
      [&_:not(pre)>code]:border
      [&_:not(pre)>code]:border-neutral-200/50
      
      dark:[&_:not(pre)>code]:bg-white/10
      dark:[&_:not(pre)>code]:text-white
      dark:[&_:not(pre)>code]:border-white/5
      
      /* Pre blocks - Handled primarily by pre.tsx, but setting prose resets */
      prose-pre:overflow-x-auto
      prose-pre:max-w-full
      prose-pre:text-[13px]
      sm:prose-pre:text-sm
      prose-pre:leading-relaxed
      prose-pre:px-0
      prose-pre:py-0
      prose-pre:bg-transparent
      prose-pre:border-none
      prose-pre:shadow-none
      prose-pre:whitespace-pre
      prose-pre:break-normal
      dark:prose-pre:bg-transparent
      dark:prose-pre:border-none
      
      /* Lists */
      prose-ul:list-disc
      prose-ul:pl-6
      prose-ul:text-neutral-600
      dark:prose-ul:text-neutral-400
      prose-ol:pl-6
      prose-ol:text-neutral-600
      dark:prose-ol:text-neutral-400
      prose-li:marker:text-neutral-400
      dark:prose-li:marker:text-neutral-600
      
      prose-a:text-neutral-900
      dark:prose-a:text-white
      prose-a:font-medium
      prose-a:decoration-neutral-300
      dark:prose-a:decoration-neutral-600/50
      hover:prose-a:decoration-neutral-900
      dark:hover:prose-a:decoration-white
      prose-a:transition-all
      
      /* Blockquotes */
      prose-blockquote:border-l-2
      prose-blockquote:border-neutral-200
      prose-blockquote:pl-6
      prose-blockquote:italic
      prose-blockquote:text-neutral-600
      dark:prose-blockquote:border-neutral-800
      dark:prose-blockquote:text-neutral-400
      
      /* Tables */
      prose-table:border-collapse
      prose-table:w-full
      prose-table:text-sm
      prose-td:p-3
      prose-td:border-b
      prose-td:border-neutral-200/50
      dark:prose-td:border-white/[0.05]
      prose-th:p-3
      prose-th:border-b
      prose-th:border-neutral-200
      dark:prose-th:border-white/10
      prose-th:bg-neutral-50/50
      dark:prose-th:bg-white/[0.02]
      prose-th:font-medium
      prose-th:text-neutral-900
      dark:prose-th:text-white
      prose-th:text-left
      
      /* Images */
      prose-img:rounded-xl
      prose-img:shadow-sm
      prose-img:max-w-full
      prose-img:h-auto
      prose-img:border
      prose-img:border-neutral-200/50
      dark:prose-img:border-white/5
      
      /* HR */
      prose-hr:border-neutral-200/50
      dark:prose-hr:border-white/[0.05]
      prose-hr:my-12
      
      /* Ensure block bounds */
      [&_*]:max-w-full
      
      /* Selection */
      selection:bg-neutral-200/80
      dark:selection:bg-white/20
      selection:text-neutral-900
      dark:selection:text-white
    "
    >
      {children}
    </div>
  );
}
