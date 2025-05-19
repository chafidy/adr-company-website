
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";
import { circuits } from "@/data/circuits";
import { toast } from "@/hooks/use-toast";

const CircuitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const circuit = circuits.find(c => c.id === id);
  
  const [selectedDate, setSelectedDate] = useState("");
  const [personCount, setPersonCount] = useState(1);
  
  if (!circuit) {
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
  }
  
  const handleReservation = () => {
    if (!selectedDate) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner une date de départ",
        variant: "destructive",
      });
      return;
    }
    
    // Store reservation data in localStorage for the next page
    const reservationData = {
      circuitId: circuit.id,
      circuitTitle: circuit.title,
      startDate: selectedDate,
      personCount,
      totalAmount: circuit.price * personCount,
    };
    
    localStorage.setItem("currentReservation", JSON.stringify(reservationData));
    navigate("/reservation");
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero */}
      <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${circuit.image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{circuit.title}</h1>
              <p className="text-xl text-white opacity-90">{circuit.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700">{circuit.longDescription}</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Destinations</h2>
              <div className="flex flex-wrap gap-2">
                {circuit.destinations.map((destination, index) => (
                  <Badge key={index} variant="outline" className="bg-adr-50 text-adr-900 px-3 py-1">
                    {destination}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Programme</h2>
              <div className="space-y-4">
                <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
                  <h3 className="font-medium text-lg">Jour 1-2 : Départ et arrivée</h3>
                  <p className="text-gray-600 mt-2">Accueil à l'aéroport, transfert à l'hôtel et briefing sur le déroulement du séjour. Temps libre pour se reposer et s'acclimater.</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
                  <h3 className="font-medium text-lg">Jour 3-{circuit.duration - 3} : Exploration</h3>
                  <p className="text-gray-600 mt-2">Découverte des sites emblématiques, immersion dans la culture locale, et expériences authentiques à travers les différentes destinations.</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
                  <h3 className="font-medium text-lg">Jour {circuit.duration - 1}-{circuit.duration} : Détente et retour</h3>
                  <p className="text-gray-600 mt-2">Temps libre pour profiter des derniers moments, shopping pour les souvenirs, et préparation au retour. Transfert à l'aéroport et vol retour.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-adr-900">
                    {circuit.price.toLocaleString()} €
                  </div>
                  <div className="text-sm text-muted-foreground">par personne</div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Date de départ</label>
                    <div className="relative">
                      <select 
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adr-900 pr-10"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      >
                        <option value="">Sélectionner une date</option>
                        {circuit.departureDates.map((date) => (
                          <option key={date} value={date}>{new Date(date).toLocaleDateString('fr-FR')}</option>
                        ))}
                      </select>
                      <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block mb-2 font-medium">Nombre de personnes</label>
                    <div className="flex items-center">
                      <button 
                        className="border border-gray-300 px-3 py-1 rounded-l-md hover:bg-gray-100"
                        onClick={() => setPersonCount(Math.max(1, personCount - 1))}
                      >
                        -
                      </button>
                      <div className="border-t border-b border-gray-300 px-4 py-1 min-w-[40px] text-center">
                        {personCount}
                      </div>
                      <button 
                        className="border border-gray-300 px-3 py-1 rounded-r-md hover:bg-gray-100"
                        onClick={() => setPersonCount(personCount + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex justify-between font-medium">
                    <span>Prix total:</span>
                    <span>{(circuit.price * personCount).toLocaleString()} €</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-adr-900 hover:bg-adr-800"
                    size="lg"
                    onClick={handleReservation}
                  >
                    Réserver ce circuit
                  </Button>
                </div>
                
                <div className="text-sm text-center text-muted-foreground pt-4">
                  Pas de frais de réservation
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CircuitDetail;
