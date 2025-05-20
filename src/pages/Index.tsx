
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
  const featuredCircuits = circuits.filter(circuit => circuit.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedCircuits circuits={featuredCircuits} />
      <QuoteCalculatorSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
