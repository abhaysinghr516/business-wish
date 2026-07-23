# @abhaysinghr516/business-wish

Official CLI to add **Business Wish** Tailwind CSS components & motion primitives directly into your project.

Website & Documentation: [https://businesswish.tech](https://businesswish.tech)

---

## ⚡ Quick Start

```bash
# Add a component directly to your codebase
npx @abhaysinghr516/business-wish add button

# Initialize configuration (optional)
npx @abhaysinghr516/business-wish init

# Browse all available components
npx @abhaysinghr516/business-wish list
```

---

## 🛠️ Commands

### `init`
Creates a `business-wish.json` configuration file in your project root:
```json
{
  "outputDir": "src/components/ui",
  "typescript": true
}
```

### `add <component>`
Downloads and adds any component or motion primitive into your project output directory.

```bash
npx @abhaysinghr516/business-wish add card
npx @abhaysinghr516/business-wish add accordion
npx @abhaysinghr516/business-wish add pricing
npx @abhaysinghr516/business-wish add text-reveal
```

### `list`
Displays the full directory of available components and motion primitives.

---

## 📦 What's Included

Explore 50+ free, accessible, and responsive components on [businesswish.tech/docs/components](https://businesswish.tech/docs/components).

- **UI Components**: Accordion, Alert, Area Chart, Auth, Avatar, Badge, Banner, Bar Chart, Bottom Navigation, Breadcrumb, Button, CTA, Card, Context Menu, Data Table, Date Picker, Divider, Drawer, Dropdown, Features, File Upload, Footer, Header, Hero, Line Chart, Loader, Modal, Pagination, Popover, Pricing, Progress, Sidebar, Skeleton, Slider, Social Share, Switch, Tabs, Testimonial, Toast, Tooltip.
- **Motion Primitives**: Blur Reveal, Card Spotlight, Dock, Fade In, Gradient Text, Magnetic Element, Morphing Text, Number Ticker, Shimmer Button, Split Text, Text Reveal, Text Shimmer, Tilt Card, Word Rotate.

---

## 🔗 Links

- **Homepage**: [https://businesswish.tech](https://businesswish.tech)
- **Documentation**: [https://businesswish.tech/docs/components](https://businesswish.tech/docs/components)
- **GitHub Repository**: [https://github.com/abhaysinghr516/business-wish](https://github.com/abhaysinghr516/business-wish)

---

## 🚀 Publishing Updates

To publish package updates to npm:

```bash
cd cli
npm publish --access public
```
