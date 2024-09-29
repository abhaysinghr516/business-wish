# Contributing to Business Wish

Thank you for considering contributing to the project! Contributions help make this project better for everyone.

## How to Contribute

### 1. Fork the Repository

- Fork the repo and create your own branch from `main`.
- Ensure your fork is up to date with the latest changes from the original repository.

### 2. Create or Update a Component

#### Step 1: Create or Open a File in `src/components`

- Navigate to the `src/components` folder.
- Either create a new `.tsx` file for the component or open an existing one to make updates.
- Follow existing coding conventions and ensure the component follows modern React and TypeScript best practices.

#### Step 2: Add Your Component to `src/app/lib/markdown.ts`

- Once your component is created, register it in the `src/app/lib/markdown.ts` file.
- This ensures the component is available for use throughout the project.

```ts
// Example of adding the component in markdown.ts
import MyNewComponent from "@/components/MyNewComponent";

// Add it to the components object
const components = {
  MyNewComponent,
  // other components...
};
```

#### Step 3: Add Documentation for Your Component

- Navigate to the documentation folder `src/app/contents/docs`.
- If you're documenting a specific component, go to `src/app/contents/docs/components` and create a new `.mdx` file for your component documentation.
- For pages, add a `.mdx` file in `src/app/contents/docs/pages`.

Example:

````mdx
---
title: "MyNewComponent"
---

<Preview>
  <MyNewComponent />
</Preview>

```tsx showLineNumbers
{component code}
```
````

Description of what this component does and how to use it.

### 3. Commit Your Changes

- Write a clear and concise commit message, summarizing your work.
- Format: `ComponentName: Short description of changes`

```bash
git commit -m "MyNewComponent: Added new button component"
```

### 4. Submit a Pull Request

- Open a Pull Request with a brief description of your changes.
- Reference any related issues and include relevant screenshots or context to help reviewers understand your changes.

## Communication

If you have questions or need help, feel free to open a discussion or reach out to rathoreabhay1234@gmail.com.
