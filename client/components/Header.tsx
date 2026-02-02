import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="hidden sm:inline font-bold text-primary text-lg">
              College Merch
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#featured"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Featured
            </a>
            <a
              href="#offers"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Offers
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right side - Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative inline-flex items-center justify-center p-2 rounded-lg hover:bg-secondary transition-colors">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a
              href="#products"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#featured"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Featured
            </a>
            <a
              href="#offers"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Offers
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
