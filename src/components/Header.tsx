
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Par défaut, on considère que l'utilisateur n'est pas admin

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-light-brand border-b border-secondary-brand/30 sticky top-0 z-40 relative">
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
          <Link to="/" className="font-medium text-primary-brand hover:text-dark-brand transition-colors">
            Accueil
          </Link>
          <Link to="/circuits" className="font-medium text-primary-brand hover:text-dark-brand transition-colors">
            Circuits
          </Link>
          <Link to="/a-propos" className="font-medium text-primary-brand hover:text-dark-brand transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="font-medium text-primary-brand hover:text-dark-brand transition-colors">
            Contact
          </Link>
          {/* Bouton Admin visible uniquement si l'utilisateur est admin */}
          {isAdmin && (
            <Button asChild variant="default" className="bg-primary-brand hover:bg-primary-brand/90">
              <Link to="/admin">
                Espace Admin
              </Link>
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary-brand" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-light-brand shadow-lg md:hidden z-50">
            <div className="flex flex-col py-4 px-6 space-y-4">
              <Link 
                to="/" 
                className="font-medium text-primary-brand hover:text-dark-brand py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/circuits" 
                className="font-medium text-primary-brand hover:text-dark-brand py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Circuits
              </Link>
              <Link 
                to="/a-propos" 
                className="font-medium text-primary-brand hover:text-dark-brand py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-primary-brand hover:text-dark-brand py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {/* Bouton Admin visible uniquement si l'utilisateur est admin dans le menu mobile */}
              {isAdmin && (
                <Button asChild variant="default" className="bg-primary-brand hover:bg-primary-brand/90 w-full">
                  <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                    Espace Admin
                  </Link>
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
