import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { FeaturedProductSection } from "@/components/FeaturedProductSection";
import { OffersSection } from "@/components/OffersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <FeaturedProductSection />
        <OffersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
