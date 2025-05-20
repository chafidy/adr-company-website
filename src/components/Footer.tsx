
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-adr-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-gray-300 mt-4 max-w-md">
              Votre agence de voyage spécialisée dans les circuits sur mesure. Découvrez le monde avec nos experts passionnés.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/circuits" className="text-gray-300 hover:text-white transition-colors">
                  Nos circuits
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contact@adrtravel.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@adrtravel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+22500000000" className="text-gray-300 hover:text-white transition-colors">
                  +225 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ADR COMPANY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
