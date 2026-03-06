# @abhaysinghr516/business-wish

CLI to add **Business Wish** Tailwind CSS components directly into your project.

## Quick Start

```bash
# Add a component
npx @abhaysinghr516/business-wish add button

# Initialize config (optional)
npx @abhaysinghr516/business-wish init

# Browse all components
npx @abhaysinghr516/business-wish list
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
npx @abhaysinghr516/business-wish add accordion
npx @abhaysinghr516/business-wish add text-reveal
npx @abhaysinghr516/business-wish add card
```

### `list`
Shows all available components and motion primitives.

## Available Components

**UI Components**: Accordion, Alert, Area Chart, Auth, Avatar, Badge, Banner, Bar Chart, Bottom Navigation, Breadcrumb, Button, Call to Action, Card, Context Menu, Data Table, Date Picker, Dashboard, Divider, Drawer, Dropdown, Features, File Upload, Footer, Header, Hero, Line Chart, Loader, Modal, Pagination, Pie Chart, Popover, Pricing, Progress, Settings, Sidebar, Skeleton, Slider, Social Share, Sparkline, Switch, Tabs, Testimonial, Toast, Tooltip, Tree View

**Motion Primitives**: Blur Reveal, Card Spotlight, Dock, Fade In, Gradient Text, Magnetic Element, Morphing Text, Number Ticker, Shimmer Button, Split Text, Text Reveal, Text Shimmer, Tilt Card, Word Rotate

## Publishing

```bash
cd cli
npm publish
```
