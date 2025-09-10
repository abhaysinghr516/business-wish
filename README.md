# [Business Wish](https://www.businesswish.tech) - Free Tailwind CSS UI Components

[![License: Apache-2](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/license/apache-2-0)
[![GitHub stars](https://img.shields.io/github/stars/abhaysinghr516/business-wish.svg)](https://github.com/abhaysinghr516/business-wish/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/abhaysinghr516/business-wish.svg)](https://github.com/abhaysinghr516/business-wish/issues)

A comprehensive library of **50+ production-ready Tailwind CSS components** designed for modern web developers. Copy, paste, and ship faster with zero dependencies.

## 🚀 Features

- **50+ Components**: Comprehensive collection including buttons, cards, forms, navigation, data display, and layout components
- **Copy-Paste Ready**: One-click copy functionality with syntax highlighting
- **Zero Dependencies**: No package installations or complex setups required
- **Dark Mode Support**: All components include built-in dark mode variants
- **Accessibility First**: WCAG compliant components with proper ARIA attributes
- **TypeScript Support**: Full type safety and IntelliSense support
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Framework Agnostic**: Works with Next.js, Vite, Create React App, and other React frameworks

## 📚 Documentation

Visit our comprehensive documentation at [businesswish.tech](https://www.businesswish.tech)

### Quick Links

- [Getting Started](https://www.businesswish.tech/docs/getting-started)
- [Component Library](https://www.businesswish.tech/docs/components)
- [Design System](https://www.businesswish.tech/docs/design-system)
- [Migration Guide](https://www.businesswish.tech/docs/migration)

## 🎯 Popular Components

| Component         | Description                          | Link                                                               |
| ----------------- | ------------------------------------ | ------------------------------------------------------------------ |
| **Button**        | Multiple variants, sizes, and states | [View →](https://www.businesswish.tech/docs/components/button)     |
| **Card**          | Flexible content containers          | [View →](https://www.businesswish.tech/docs/components/card)       |
| **Data Table**    | Sortable, filterable tables          | [View →](https://www.businesswish.tech/docs/components/data-table) |
| **Hero Sections** | Landing page heroes                  | [View →](https://www.businesswish.tech/docs/components/hero)       |
| **Navigation**    | Responsive nav bars                  | [View →](https://www.businesswish.tech/docs/components/header)     |

## 🛠️ Installation

### Option 1: Copy & Paste (Recommended)

Simply visit our [component library](https://www.businesswish.tech/docs/components), find the component you need, and copy the code directly into your project.

### Option 2: Clone Repository

```bash
git clone https://github.com/abhaysinghr516/business-wish.git
cd business-wish
npm install
npm run dev
```

## 🏗️ Usage

1. **Browse Components**: Visit [businesswish.tech/docs/components](https://www.businesswish.tech/docs/components)
2. **Copy Code**: Click the copy button on any component
3. **Paste & Customize**: Add to your project and customize as needed

### Example: Button Component

```tsx
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

## 🎨 Customization

All components are built with Tailwind CSS utility classes, making them highly customizable:

```tsx
// Customize colors, spacing, and styles
<Button className="bg-purple-600 hover:bg-purple-700 px-8 py-4">
  Custom Button
</Button>
```

## 📱 Responsive Design

Components are mobile-first and responsive by default:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid layout */}
</div>
```

## 🌙 Dark Mode

All components support dark mode out of the box:

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  {/* Automatic dark mode support */}
</div>
```

## 🚀 Performance

- **Zero Runtime Dependencies**: No JavaScript libraries required
- **Optimized Bundle Size**: Only include what you use
- **Fast Loading**: Minimal CSS and optimized components
- **SEO Friendly**: Semantic HTML and proper accessibility

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide React](https://lucide.dev/)
- Accessibility primitives by [Radix UI](https://www.radix-ui.com/)

## 📊 Stats

- **50+** Production-ready components
- **100%** Responsive design
- **0** Runtime dependencies
- **MIT** Licensed

## 🔗 Links

- **Website**: [businesswish.tech](https://www.businesswish.tech)
- **Documentation**: [businesswish.tech/docs](https://www.businesswish.tech/docs)
- **GitHub**: [github.com/abhaysinghr516/business-wish](https://github.com/abhaysinghr516/business-wish)
- **Issues**: [github.com/abhaysinghr516/business-wish/issues](https://github.com/abhaysinghr516/business-wish/issues)

---

Made with ❤️ by [Abhay Singh Rathore](https://abhay-singh-rathore.vercel.app/)
