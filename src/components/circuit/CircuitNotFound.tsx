
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CircuitNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Circuit non trouvé</h1>
          <Button asChild>
            <Link to="/circuits">Retour aux circuits</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CircuitNotFound;
