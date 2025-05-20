
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircuitCard from "@/components/CircuitCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Circuit } from "@/types";
import { circuits } from "@/data/circuits";
import { toast } from "@/hooks/use-toast";

const CircuitsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [durationFilter, setDurationFilter] = useState<number | null>(null);
  const [filteredCircuits, setFilteredCircuits] = useState<Circuit[]>(circuits);
  
  // Formatage du prix en Ariary
  const formatAriary = (amount: number): string => {
    return amount.toLocaleString('fr-FR') + ' Ar';
  };
  
  // Appliquer les filtres chaque fois que les valeurs changent
  useEffect(() => {
    const filtered = circuits.filter((circuit) => {
      // Search query filter
      const matchesSearch = circuit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        circuit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        circuit.destinations.some(dest => dest.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Price range filter
      const matchesPrice = circuit.price >= priceRange[0] && circuit.price <= priceRange[1];
      
      // Duration filter
      const matchesDuration = durationFilter ? circuit.duration <= durationFilter : true;
      
      return matchesSearch && matchesPrice && matchesDuration;
    });
    
    setFilteredCircuits(filtered);
    
    // Afficher un toast si aucun circuit ne correspond aux critères
    if (filtered.length === 0 && (searchQuery || durationFilter || priceRange[0] > 0 || priceRange[1] < 5000000)) {
      toast({
        title: "Aucun résultat",
        description: "Essayez de modifier vos critères de recherche",
      });
    }
  }, [searchQuery, priceRange, durationFilter]);

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 5000000]);
    setDurationFilter(null);
    toast({
      title: "Filtres réinitialisés",
      description: "Tous les circuits sont affichés",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative py-16 bg-adr-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nos Circuits</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Découvrez notre sélection de circuits exceptionnels et trouvez votre prochaine destination
          </p>
        </div>
      </section>
      
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Rechercher</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Rechercher un circuit..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Prix (Ariary)</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{formatAriary(priceRange[0])}</span>
                  <span>{formatAriary(priceRange[1])}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="5000000" 
                  step="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Durée</h3>
              <div className="space-y-2">
                <Button 
                  variant={durationFilter === 7 ? "default" : "outline"}
                  size="sm" 
                  className={durationFilter === 7 ? "bg-adr-900" : ""}
                  onClick={() => setDurationFilter(durationFilter === 7 ? null : 7)}
                >
                  Jusqu'à 7 jours
                </Button>
                <Button 
                  variant={durationFilter === 14 ? "default" : "outline"}
                  size="sm"
                  className={durationFilter === 14 ? "bg-adr-900" : ""}
                  onClick={() => setDurationFilter(durationFilter === 14 ? null : 14)}
                >
                  Jusqu'à 14 jours
                </Button>
                <Button 
                  variant={durationFilter === 30 ? "default" : "outline"}
                  size="sm"
                  className={durationFilter === 30 ? "bg-adr-900" : ""}
                  onClick={() => setDurationFilter(durationFilter === 30 ? null : 30)}
                >
                  Jusqu'à 30 jours
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={resetFilters}
            >
              Réinitialiser les filtres
            </Button>
          </div>
          
          {/* Circuits Grid */}
          <div className="md:col-span-3">
            {filteredCircuits.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCircuits.map((circuit: Circuit) => (
                  <CircuitCard key={circuit.id} circuit={circuit} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">Aucun circuit trouvé</h3>
                <p className="text-muted-foreground">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CircuitsList;
