# Contributing to Business Wish

Thanks for your interest in contributing. This guide covers the three main areas you can contribute to: **components**, **motion primitives**, and **developer tools**.

---

## Setup

```bash
# 1. Fork and clone
git clone https://github.com/<your-username>/business-wish.git
cd business-wish

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding a UI component

### 1. Create the component

Add a new `.tsx` file in `src/components/` (or update an existing one). Follow these conventions:

- Use TypeScript with proper types/interfaces
- Support dark mode with `dark:` variants
- Use the `stone` color palette for consistency
- Include proper ARIA attributes for accessibility
- Make it responsive with mobile-first breakpoints

### 2. Register the component

Add your component to `src/app/lib/markdown.ts` so documentation can render it:

```ts
import MyComponent from "@/components/MyComponent";

const components = {
  MyComponent,
  // ...existing components
};
```

### 3. Write documentation

Create an `.mdx` file in `src/app/contents/docs/components/`:

````mdx
---
title: "My Component"
---

<Preview>
  <MyComponent />
</Preview>

```tsx showLineNumbers
// paste full component code here
```

Description of what this component does and how to use it.
````

---

## Adding a motion component

Motion components live in `src/app/contents/docs/motion/` and use [Framer Motion](https://www.framer.com/motion/).

1. Create the component in `src/components/`
2. Register it in `src/app/lib/markdown.ts`
3. Write documentation in `src/app/contents/docs/motion/your-component.mdx`

Same conventions as UI components, plus:

- Import from `framer-motion`
- Keep animations performant (prefer `transform` and `opacity`)
- Include a restart/replay mechanism when appropriate

---

## Adding a developer tool

Tools are standalone pages in `src/app/(routes)/tools/`. Each tool is a self-contained Next.js page.

### 1. Create the tool page

Create a new directory and `page.tsx` in `src/app/(routes)/tools/your-tool/`:

```tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function YourTool() {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-950">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tools
          </Link>
          <h1 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mt-4">
            Your Tool Name
          </h1>
          <p className="text-stone-500 dark:text-stone-400 text-sm">
            Brief description
          </p>
        </div>
      </div>

      {/* Tool content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* ... */}
      </div>
    </div>
  );
}
```

### 2. Register the tool

Add your tool to the `tools` array in `src/app/(routes)/tools/page.tsx`:

```ts
{
  name: "Your Tool",
  description: "What it does in one sentence.",
  href: "/tools/your-tool",
  category: "data", // color | css | data | image | productivity
}
```

### Design conventions for tools

- Use the `stone` color palette (no colored accents)
- Use `max-w-6xl` for content width
- No shadows, no gradients — flat design
- Header icon: `bg-stone-900 dark:bg-stone-100` with `text-white dark:text-stone-900`
- All processing must happen client-side (no server calls)

---

## Commit messages

Use this format:

```
ComponentName: Short description of changes
```

Examples:

```
Button: Add loading state variant
PaletteGenerator: Fix color export format
README: Update feature list
```

---

## Pull requests

1. Create a feature branch from `main`: `git checkout -b feature/your-feature`
2. Make your changes and commit
3. Push and open a PR with:
   - Brief description of what changed
   - Screenshots if it's a visual change
   - Reference any related issues

---

## Questions?

Open a [discussion](https://github.com/abhaysinghr516/business-wish/issues) or reach out to rathoreabhay1234@gmail.com.
