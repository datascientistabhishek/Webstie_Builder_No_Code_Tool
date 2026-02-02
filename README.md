# College Merchandise E-Commerce Store

A modern, production-ready e-commerce website for college merchandise built with React, TypeScript, and Tailwind CSS.

## 🎯 Overview

College Merchandise Store is a full-stack e-commerce application designed specifically for college students to browse, select, and purchase official college apparel and accessories. The site features a clean, modern design with a college-blue theme and provides an excellent user experience across all devices.

### Live Features

- **Hero Section** - Eye-catching banner with clear call-to-action buttons
- **Product Catalog** - Grid layout showcasing merchandise with tags (Best Seller, New, Limited Edition)
- **Featured Product** - Detailed product view with size and color selectors
- **Special Offers** - Highlight combo deals, student discounts, and bundle offers
- **Contact Section** - Contact form and campus pickup information
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Router 6** - Client-side routing (SPA mode)
- **Lucide React** - Icon library
- **Radix UI** - Accessible component library

### Backend
- **Express.js** - Node.js server framework
- **TypeScript** - Type-safe backend code
- **Zod** - Runtime type validation

### Development & Testing
- **Vitest** - Fast unit testing framework
- **Prettier** - Code formatter
- **PNPM** - Fast package manager

## 📁 Project Structure

```
college-merchandise-store/
├── client/                          # React SPA frontend
│   ├── pages/
│   │   ├── Index.tsx               # Home page (main landing)
│   │   └── NotFound.tsx            # 404 page
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── HeroSection.tsx         # Hero banner
│   │   ├── ProductCard.tsx         # Product card component
│   │   ├── ProductsSection.tsx     # Product grid listing
│   │   ├── FeaturedProductSection.tsx  # Featured product with selectors
│   │   ├── OffersSection.tsx       # Pricing and offers
│   │   ├── ContactSection.tsx      # Contact form
│   │   ├── Footer.tsx              # Footer
│   │   └── ui/                     # Pre-built UI components
│   ├── App.tsx                     # App entry point with routing
│   ├── global.css                  # Global styles & theme
│   └── index.html                  # HTML entry point
├── server/                          # Express backend
│   ├── index.ts                    # Server setup
│   └── routes/                     # API endpoints
├── shared/                          # Shared types
│   └── api.ts                      # API interfaces
├── tailwind.config.ts              # Tailwind configuration
├── vite.config.ts                  # Vite configuration
├── vite.config.server.ts           # Server build config
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Dependencies & scripts
└── README.md                        # This file
```

## 🎨 Design & Branding

### Color Scheme
- **Primary**: College Blue (`#003D7A` / HSL: `210 100% 25%`)
- **Secondary**: Light Gray (`#f1f5f9`)
- **Accent**: White & Subtle Gray tones
- **Text**: Dark gray for readability

### Typography
- **Font**: Inter (400, 600, 700, 800 weights)
- **Hierarchy**: Clear heading levels with consistent spacing
- **Responsive**: Font sizes scale on mobile, tablet, and desktop

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- PNPM 10.14.0+ (or npm/yarn)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd college-merchandise-store
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```
   The app will run on `http://localhost:5173` with both frontend and backend hot-reloading.

## 📝 Available Scripts

```bash
# Development
pnpm dev              # Start dev server (client + server with hot reload)

# Building
pnpm build           # Build both client and server for production
pnpm build:client    # Build only the React app
pnpm build:server    # Build only the Express server

# Production
pnpm start           # Start production server

# Testing & Quality
pnpm test            # Run Vitest unit tests
pnpm typecheck       # TypeScript type checking
pnpm format.fix      # Auto-format code with Prettier
```

## 🏗️ Architecture

### Frontend Architecture
- **SPA (Single Page Application)** - Client-side routing with React Router 6
- **Component-Based** - Modular, reusable components
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Type Safety** - Full TypeScript coverage

### Backend Architecture
- **Express Server** - Lightweight API server
- **API Routes** - RESTful endpoints under `/api/` prefix
- **Shared Types** - TypeScript interfaces shared between client and server
- **Single Port** - Development server runs both client and server on one port

## 🎯 Key Components

### Header Component (`Header.tsx`)
- Sticky navigation bar
- Mobile hamburger menu
- Shopping cart icon with badge
- Smooth scroll navigation links

### Hero Section (`HeroSection.tsx`)
- Full-width gradient banner
- Headline and subheading
- Dual CTA buttons (Shop Now, Explore Collection)
- SVG illustration of merchandise

### Product Card (`ProductCard.tsx`)
- Product image with hover effect
- Product name and price
- Tags (Best Seller, New, Limited Edition)
- Favorite/wishlist toggle
- Add to cart button

### Featured Product (`FeaturedProductSection.tsx`)
- Large product image
- Star rating with review count
- Product description
- **Size Selector** - XS to XXL options
- **Color Picker** - 4 color options
- Additional info (Free shipping, Easy returns)

### Offers Section (`OffersSection.tsx`)
- Combo deals
- Student discounts
- Bundle offers
- Limited-time offer banner

### Contact Section (`ContactSection.tsx`)
- Contact form (Name, Email, Message)
- Contact information cards
- Campus pickup details
- Email, phone, and location info

### Footer (`Footer.tsx`)
- Brand information
- Quick links
- Customer service links
- Legal links
- Social media icons

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile** - 375px (iPhone SE)
- **Tablet** - 768px (iPad)
- **Desktop** - 1440px+ (Desktop/Laptop)

Tailwind responsive utilities are used throughout:
- `sm:` - Small screens (640px)
- `md:` - Medium screens (768px)
- `lg:` - Large screens (1024px)

## 🔄 Deployment

### Building for Production
```bash
pnpm build
```

This creates:
- `dist/spa/` - Compiled React application
- `dist/server/` - Compiled Express server

### Deployment Options

#### **Netlify** (Recommended for Static Sites)
1. Connect via MCP integration
2. Deploy runs automatically on code changes

#### **Vercel** (Recommended for Full-Stack)
1. Connect via MCP integration
2. Automatic deployments with serverless functions

#### **Self-Hosted**
```bash
pnpm start  # Runs the production server on port 8080
```

## 🎨 Customization

### Changing Theme Colors
Edit `client/global.css` and update the CSS variables:
```css
:root {
  --primary: 210 100% 25%;        /* College Blue */
  --secondary: 210 40% 96.1%;     /* Light Gray */
  /* ... other colors */
}
```

Also update `tailwind.config.ts` if needed.

### Adding New Products
Edit `client/components/ProductsSection.tsx` and add to the `PRODUCTS` array:
```typescript
{
  id: "7",
  name: "Product Name",
  price: 29.99,
  tag: "New",
  tagColor: "bg-green-500",
}
```

### Adding New Pages
1. Create a new file in `client/pages/`
2. Add route in `client/App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```

## 📦 API Integration

The backend is set up to handle API requests. To add new endpoints:

1. **Create route** in `server/routes/my-route.ts`:
```typescript
import { RequestHandler } from "express";

export const handleMyRoute: RequestHandler = (req, res) => {
  res.json({ message: "Hello from API" });
};
```

2. **Register in** `server/index.ts`:
```typescript
import { handleMyRoute } from "./routes/my-route";
app.get("/api/my-endpoint", handleMyRoute);
```

3. **Use in React**:
```typescript
const response = await fetch("/api/my-endpoint");
const data = await response.json();
```

## ✨ Features Overview

### Current Features
- ✅ Product catalog with filtering tags
- ✅ Featured product with size/color selection
- ✅ Special offers and promotions
- ✅ Contact form
- ✅ Responsive mobile design
- ✅ Smooth animations and transitions
- ✅ Modern UI components

### Future Enhancements
- 🔲 Shopping cart functionality
- 🔲 User authentication & accounts
- 🔲 Payment integration (Stripe/PayPal)
- 🔲 Order management system
- 🔲 Product search and filtering
- 🔲 User reviews and ratings
- 🔲 Email notifications
- 🔲 Admin dashboard

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in vite.config.ts if needed
```

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### TypeScript Errors
```bash
pnpm typecheck
```

## 📞 Support

For issues or questions:
- Check existing GitHub issues
- Review component documentation
- Check Tailwind CSS docs: https://tailwindcss.com
- React docs: https://react.dev
- Vite docs: https://vitejs.dev

## 📄 License

This project is proprietary and created for college merchandise sales. All rights reserved.

## 👥 Team

Built with modern web development best practices using the Fusion Starter template.

---

**Last Updated**: February 2026  
**Version**: 1.0.0  
**Status**: Production Ready
