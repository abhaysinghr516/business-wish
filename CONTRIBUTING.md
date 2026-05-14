# Contributing to Business Wish

Thanks for your interest in contributing. This guide covers the two main areas you can contribute to: **components** and **motion primitives**.

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
