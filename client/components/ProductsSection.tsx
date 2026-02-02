import { ProductCard } from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  tag?: string;
  tagColor?: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "College Hoodie",
    price: 49.99,
    tag: "Best Seller",
    tagColor: "bg-orange-500",
  },
  {
    id: "2",
    name: "College T-Shirt",
    price: 24.99,
    tag: "New",
    tagColor: "bg-green-500",
  },
  {
    id: "3",
    name: "College Cap",
    price: 19.99,
    tag: "Limited Edition",
    tagColor: "bg-red-500",
  },
  {
    id: "4",
    name: "College Backpack",
    price: 79.99,
  },
  {
    id: "5",
    name: "College Mug",
    price: 12.99,
    tag: "New",
    tagColor: "bg-green-500",
  },
  {
    id: "6",
    name: "College Sweatshirt",
    price: 44.99,
  },
];

export const ProductsSection = () => {
  return (
    <section
      id="products"
      className="w-full py-16 sm:py-20 md:py-24 bg-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-4">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium college merchandise
            designed for students like you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              tag={product.tag}
              tagColor={product.tagColor}
            />
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};
