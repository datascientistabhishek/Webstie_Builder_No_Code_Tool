import { Zap, Tag, Percent } from "lucide-react";

export const OffersSection = () => {
  const offers = [
    {
      id: "1",
      title: "Combo Offer",
      description: "Hoodie + T-Shirt",
      discount: "Save 20%",
      icon: Zap,
      highlight: true,
      originalPrice: "$74.98",
      finalPrice: "$59.98",
    },
    {
      id: "2",
      title: "Student Discount",
      description: "With valid student ID",
      discount: "15% OFF",
      icon: Tag,
      highlight: false,
      originalPrice: null,
      finalPrice: "15% Off Everything",
    },
    {
      id: "3",
      title: "Bundle Deal",
      description: "Any 3 Items",
      discount: "Save 25%",
      icon: Percent,
      highlight: false,
      originalPrice: null,
      finalPrice: "Mix & Match",
    },
  ];

  return (
    <section id="offers" className="w-full py-16 sm:py-20 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-card-foreground mb-4">
            Special Offers & Deals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Grab the best deals on college merchandise this season!
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer) => {
            const IconComponent = offer.icon;
            return (
              <div
                key={offer.id}
                className={`relative rounded-2xl p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  offer.highlight
                    ? "bg-gradient-to-br from-primary to-blue-700 text-white shadow-lg border-2 border-blue-400 md:scale-105"
                    : "bg-card text-card-foreground border-2 border-border hover:border-primary"
                }`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full bg-white blur-2xl" />

                {/* Icon */}
                <div
                  className={`mb-4 inline-block p-3 rounded-lg ${
                    offer.highlight
                      ? "bg-white/20"
                      : "bg-primary/10"
                  }`}
                >
                  <IconComponent
                    className={`w-6 h-6 ${
                      offer.highlight ? "text-white" : "text-primary"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2`}>
                  {offer.title}
                </h3>
                <p
                  className={`mb-4 text-sm sm:text-base ${
                    offer.highlight ? "text-blue-100" : "text-muted-foreground"
                  }`}
                >
                  {offer.description}
                </p>

                {/* Discount Badge */}
                <div
                  className={`inline-block px-4 py-2 rounded-full font-bold mb-4 ${
                    offer.highlight
                      ? "bg-white text-primary"
                      : "bg-primary text-white"
                  }`}
                >
                  {offer.discount}
                </div>

                {/* Pricing Info */}
                <div className="mt-6">
                  {offer.originalPrice && (
                    <p
                      className={`text-sm line-through opacity-75 mb-1 ${
                        offer.highlight ? "text-blue-100" : "text-muted-foreground"
                      }`}
                    >
                      {offer.originalPrice}
                    </p>
                  )}
                  <p
                    className={`text-xl sm:text-2xl font-bold ${
                      offer.highlight ? "text-white" : "text-primary"
                    }`}
                  >
                    {offer.finalPrice}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all ${
                    offer.highlight
                      ? "bg-white text-primary hover:bg-blue-50"
                      : "bg-primary text-white hover:bg-blue-700"
                  }`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        {/* Limited Time Banner */}
        <div className="mt-12 md:mt-16 bg-red-50 border-2 border-red-200 rounded-xl p-6 md:p-8 text-center">
          <p className="text-red-600 font-bold text-sm uppercase tracking-wide mb-2">
            ⏰ Limited Time Only
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-2">
            These offers expire in 7 days!
          </h3>
          <p className="text-red-600 mb-4">
            Don't miss out on the best college merchandise deals of the season.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
            Shop Limited Offers
          </button>
        </div>
      </div>
    </section>
  );
};
