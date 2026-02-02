import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export const FeaturedProductSection = () => {
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>("blue");

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "blue", hex: "#003D7A", label: "College Blue" },
    { name: "black", hex: "#000000", label: "Black" },
    { name: "white", hex: "#FFFFFF", label: "White" },
    { name: "gray", hex: "#6B7280", label: "Gray" },
  ];

  return (
    <section id="featured" className="w-full py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-2">
            Featured Product
          </h2>
          <p className="text-muted-foreground">
            Premium College Hoodie - Bestseller
          </p>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-secondary rounded-2xl p-8 md:p-12 h-96 md:h-full">
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-3/4 h-3/4 text-primary/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Hoodie illustration */}
                <ellipse cx="12" cy="6" rx="4" ry="5" />
                <path
                  d="M8 11 Q6 15 6 20 Q6 22 8 22 L8 12 L12 12 L12 22 Q14 22 14 20 Q14 15 12 11"
                  fill="currentColor"
                  opacity="0.8"
                />
                <path
                  d="M12 11 Q14 15 14 20 Q14 22 16 22 L16 12 L12 12 L12 11"
                  fill="currentColor"
                  opacity="0.8"
                />
                <path d="M9 12 Q12 9 15 12" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(256 reviews)</span>
            </div>

            {/* Title and Price */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-2">
                Premium College Hoodie
              </h3>
              <p className="text-4xl font-bold text-primary">$49.99</p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crafted from premium quality fabric, this college hoodie is perfect
              for campus life. Features a comfortable fit, durable construction, and
              the official college branding on the chest.
            </p>

            {/* Size Selector */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-card-foreground">
                Size
              </label>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg font-semibold transition-all ${
                      selectedSize === size
                        ? "bg-primary text-white shadow-lg"
                        : "bg-secondary text-card-foreground hover:border-primary border-2 border-transparent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-card-foreground">
                Color: {colors.find((c) => c.name === selectedColor)?.label}
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full transition-all transform hover:scale-110 ${
                      selectedColor === color.name
                        ? "ring-2 ring-offset-2 ring-primary scale-110"
                        : "hover:scale-105"
                    }`}
                    style={{
                      backgroundColor: color.hex,
                      border:
                        color.name === "white" ? "2px solid #e5e7eb" : "none",
                    }}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl mt-8">
              <ShoppingCart className="w-6 h-6" />
              Add to Cart
            </button>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Free Shipping</p>
                <p className="font-semibold text-card-foreground">
                  On orders over $50
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Easy Returns</p>
                <p className="font-semibold text-card-foreground">
                  30-day guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
