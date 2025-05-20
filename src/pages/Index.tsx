
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedCircuits from "@/components/home/FeaturedCircuits";
import QuoteCalculatorSection from "@/components/home/QuoteCalculatorSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { circuits } from "@/data/circuits";

const Index = () => {
  // Sélectionner les circuits à mettre en avant sur la page d'accueil
  // Prioriser les circuits marqués comme featured, mais assurer d'avoir exactement 6 circuits
  const getFeaturedCircuits = () => {
    const featured = circuits.filter(circuit => circuit.featured);
    if (featured.length >= 6) {
      return featured.slice(0, 6);
    } else {
      // Si moins de 6 circuits sont marqués comme featured, compléter avec d'autres
      const nonFeatured = circuits.filter(circuit => !circuit.featured);
      return [...featured, ...nonFeatured.slice(0, 6 - featured.length)];
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCircuits circuits={getFeaturedCircuits()} />
      <QuoteCalculatorSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
