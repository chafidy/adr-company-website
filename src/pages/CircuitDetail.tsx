
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { circuits } from "@/data/circuits";
import CircuitNotFound from "@/components/circuit/CircuitNotFound";
import HeroSection from "@/components/circuit/HeroSection";
import CircuitTabs from "@/components/circuit/CircuitTabs";
import ReservationSidebar from "@/components/circuit/ReservationSidebar";

const CircuitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const circuit = circuits.find(c => c.id === id);
  
  if (!circuit) {
    return <CircuitNotFound />;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <HeroSection circuit={circuit} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <CircuitTabs circuit={circuit} />
          <ReservationSidebar circuit={circuit} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CircuitDetail;
