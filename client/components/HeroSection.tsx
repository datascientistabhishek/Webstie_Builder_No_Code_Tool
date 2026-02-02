import { ChevronRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-700 pt-12 sm:pt-20 md:pt-28 pb-12 sm:pb-20 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Official College Merchandise Store
              </h1>
              <p className="text-lg sm:text-xl text-blue-100">
                Shop Hoodies, T-Shirts & Accessories
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Shop Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="#featured"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Collection
              </a>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative h-64 sm:h-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/30 to-transparent rounded-2xl overflow-hidden">
              {/* Placeholder for college merchandise display */}
              <svg
                className="w-full h-full"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified illustration of hoodie and t-shirt */}
                <rect width="400" height="400" fill="none" />
                
                {/* Hoodie */}
                <ellipse cx="150" cy="100" rx="35" ry="40" fill="white" opacity="0.1" />
                <path
                  d="M130 130 Q130 180 120 220 Q120 240 140 240 L140 160 L160 160 L160 240 Q180 240 180 220 Q170 180 170 130"
                  fill="white"
                  opacity="0.15"
                />
                <path d="M135 145 Q150 140 165 145" stroke="white" strokeWidth="2" opacity="0.2" />

                {/* T-Shirt */}
                <ellipse cx="280" cy="110" rx="30" ry="35" fill="white" opacity="0.12" />
                <path
                  d="M260 140 Q250 160 250 200 Q250 220 270 220 L270 150 L290 150 L290 220 Q310 220 310 200 Q310 160 300 140"
                  fill="white"
                  opacity="0.18"
                />

                {/* Cap */}
                <circle cx="200" cy="280" r="25" fill="white" opacity="0.14" />
                <path
                  d="M175 290 Q200 275 225 290"
                  stroke="white"
                  strokeWidth="2"
                  opacity="0.2"
                />

                {/* Decorative lines */}
                <line
                  x1="50"
                  y1="300"
                  x2="350"
                  y2="300"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.1"
                />
              </svg>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
