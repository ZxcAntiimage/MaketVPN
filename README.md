# Market App - Next.js E-commerce Platform

This is a comprehensive e-commerce application built with Next.js and shadcn/ui components. The Market App provides a modern, responsive interface for online shopping with various product categories, user reviews, and interactive features.

## Features

- **Modern UI Components**: Built with shadcn/ui for beautiful, accessible components
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Product Catalog**: Browse and search through various product categories
- **User Reviews**: Read and submit product reviews
- **Interactive Widgets**: Header navigation, main content sections, and review components
- **TypeScript Support**: Full type safety throughout the application

## Project Structure

```
app/                # Main application pages and layout
components/        # Reusable UI components
  ui/              # shadcn/ui components
widgets/            # Feature widgets (header, main content, reviews)
pages/              # Page components
public/             # Static assets
shared/             # Shared utilities and assets
  api/              # API utilities
  icons/            # SVG icons
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

[Demo](https://maket-vpn.vercel.app/)

## Adding Components

To add new shadcn/ui components to your app:

```bash
npx shadcn@latest add [component-name]
```

This will place the UI components in the `components/ui` directory.

## Using Components

Import and use components in your pages:

```tsx
import { Button } from "@/components/ui/button";

function MyComponent() {
  return <Button>Click me</Button>;
}
```

## Available Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Create production build
- `pnpm start`: Start production server
- `pnpm lint`: Run linting
- `pnpm format`: Format code with Prettier

## Technologies Used

- Next.js 14+
- React 18+
- TypeScript
- shadcn/ui
- Tailwind CSS
- ESLint & Prettier
