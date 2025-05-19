
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 relative">
      {/* Image de fond du Sprinter */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: "url('/lovable-uploads/0f13c2ad-3c75-47bf-b2ec-bde278b9f04f.png')" }}
      />
      
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-adr-900 transition-colors">
            Accueil
          </Link>
          <Link to="/circuits" className="font-medium text-gray-700 hover:text-adr-900 transition-colors">
            Circuits
          </Link>
          <Link to="/a-propos" className="font-medium text-gray-700 hover:text-adr-900 transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-adr-900 transition-colors">
            Contact
          </Link>
          <Button asChild variant="default" className="bg-adr-900 hover:bg-adr-800">
            <Link to="/admin">
              Espace Admin
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-white shadow-lg md:hidden z-50">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-adr-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/circuits" 
                className="font-medium text-gray-700 hover:text-adr-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Circuits
              </Link>
              <Link 
                to="/a-propos" 
                className="font-medium text-gray-700 hover:text-adr-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-700 hover:text-adr-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild variant="default" className="bg-adr-900 hover:bg-adr-800 w-full">
                <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                  Espace Admin
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
