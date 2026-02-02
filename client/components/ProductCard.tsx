import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
  tagColor?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  image,
  tag,
  tagColor = "bg-primary",
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group h-full flex flex-col bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-secondary h-48 sm:h-56">
        <div className="w-full h-full flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <svg
              className="w-24 h-24 text-muted-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          )}
        </div>

        {/* Tag */}
        {tag && (
          <div
            className={`absolute top-3 right-3 ${tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
          >
            {tag}
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 left-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-md"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="font-semibold text-card-foreground text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-primary font-bold text-xl mb-4">
          ${price.toFixed(2)}
        </p>

        {/* Add to Cart Button */}
        <button className="mt-auto w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
