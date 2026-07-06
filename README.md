# Business Wish

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-stone.svg)](https://opensource.org/license/apache-2-0)
[![GitHub stars](https://img.shields.io/github/stars/abhaysinghr516/business-wish.svg)](https://github.com/abhaysinghr516/business-wish/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/abhaysinghr516/business-wish.svg)](https://github.com/abhaysinghr516/business-wish/issues)

An open-source developer toolkit — **50+ Tailwind CSS components** and **13 motion primitives**. No installs, no config, no accounts.

**[businesswish.tech](https://www.businesswish.tech)**

---

## What's inside

### Components

50+ copy-paste Tailwind CSS components with dark mode, accessibility, and responsive design built in. Browse them all at [/docs/components](https://www.businesswish.tech/docs/components).

Accordion · Alert · Avatar · Badge · Banner · Bottom Navigation · Breadcrumb · Button · Call to Action · Card · Data Table · Date Picker · Divider · Dropdown · Features · File Upload · Footer · Header · Hero · Loader · Pagination · Popover · Progress · Sidebar · Skeleton · Social Share · Tabs · Testimonial · Tooltip

### Motion

13 animation components built with Framer Motion. See them at [/docs/motion](https://www.businesswish.tech/docs/motion).

Text Reveal · Number Ticker · Card Spotlight · Shimmer Button · Gradient Text · Fade In · Morphing Text · Magnetic Element · Text Shimmer · Word Rotate · Dock · Split Text · Blur Reveal


---

## Getting started

### Copy & paste (recommended)

1. Browse components at [businesswish.tech/docs/components](https://www.businesswish.tech/docs/components)
2. Click the copy button on any component
3. Paste into your project and customize

### Run locally

```bash
git clone https://github.com/abhaysinghr516/business-wish.git
cd business-wish
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Using the CLI

Install components directly into your project without browsing the website:

```bash
# Add a component
npx @abhaysinghr516/business-wish add button

# Initialize config (optional)
npx @abhaysinghr516/business-wish init

# Browse all components
npx @abhaysinghr516/business-wish list
```

---

## Project structure

```
src/
├── app/
│   ├── (routes)/
│   │   └── docs/           # Component & motion documentation
│   ├── components/         # Shared app components (Navbar, Footer, etc.)
│   ├── contents/docs/      # MDX documentation files
│   └── lib/                # Utilities and markdown config
├── components/
│   └── ui/                 # shadcn/ui primitives (Button, etc.)
```

---

## Tech stack

- **Framework** — [Next.js](https://nextjs.org/)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/)
- **Icons** — [Lucide React](https://lucide.dev/)
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Primitives** — [Radix UI](https://www.radix-ui.com/)

---

## Contributing

We welcome contributions of all kinds — new components, motion primitives, docs improvements, and bug fixes.

See our [Contributing Guide](CONTRIBUTING.md) for the full walkthrough.

```
fork → branch → commit → pull request
```

---

## Stats

| 50+ | 13 | 0 |
|:---:|:---:|:---:|
| Components | Motion Primitives | Dependencies |

---

## License

[Apache-2.0](LICENSE)

---

## Links

- [Website](https://www.businesswish.tech)
- [Documentation](https://www.businesswish.tech/docs/components)
- [GitHub](https://github.com/abhaysinghr516/business-wish)
- [Issues](https://github.com/abhaysinghr516/business-wish/issues)

---

Built by [Abhay Singh Rathore](https://abhaysr.in)
