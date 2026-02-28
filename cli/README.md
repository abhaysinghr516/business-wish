# business-wish

CLI to add **Business Wish** Tailwind CSS components directly into your project.

## Quick Start

```bash
# Add a component
npx business-wish add button

# Initialize config (optional)
npx business-wish init

# Browse all components
npx business-wish list
```

## Commands

### `init`
Creates a `business-wish.json` config file in your project root:
```json
{
  "outputDir": "src/components/ui",
  "typescript": true
}
```

### `add <component>`
Downloads a component into your configured output directory.

```bash
npx business-wish add accordion
npx business-wish add text-reveal
npx business-wish add card
```

### `list`
Shows all available components and motion primitives.

## Available Components

**33 UI Components**: Accordion, Alert, Avatar, Badge, Banner, Bottom Navigation, Breadcrumb, Button, Call to Action, Card, Data Table, Date Picker, Divider, Dropdown, Features, File Upload, Footer, Header, Hero, Line Chart, Loader, Modal, Pagination, Popover, Progress, Sidebar, Skeleton, Social Share, Tabs, Testimonial, Toast, Tooltip, Tree View

**14 Motion Primitives**: Blur Reveal, Card Spotlight, Dock, Fade In, Gradient Text, Magnetic Element, Morphing Text, Number Ticker, Shimmer Button, Split Text, Text Reveal, Text Shimmer, Tilt Card, Word Rotate

## Publishing

```bash
cd cli
npm publish
```
