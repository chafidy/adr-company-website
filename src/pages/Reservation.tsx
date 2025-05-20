
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ReservationData {
  circuitId: string;
  circuitTitle: string;
  startDate: string;
  personCount: number;
  totalAmount: number;
}

const Reservation = () => {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState<ReservationData | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
  useEffect(() => {
    const storedData = localStorage.getItem("currentReservation");
    if (!storedData) {
      navigate("/circuits");
      return;
    }
    
    try {
      setReservationData(JSON.parse(storedData));
    } catch (error) {
      console.error("Error parsing reservation data:", error);
      navigate("/circuits");
    }
  }, [navigate]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }
    
    if (!reservationData) return;
    
    // Create reservation object
    const reservation = {
      id: `res-${Date.now()}`,
      ...reservationData,
      customerInfo: formData,
      status: 'pending',
      paymentStatus: 'awaiting',
      createdAt: new Date().toISOString(),
    };
    
    // Store reservation in localStorage
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    
    // Store current reservation ID
    localStorage.setItem("currentReservationId", reservation.id);
    
    // Navigate to payment page
    navigate("/paiement");
  };
  
  if (!reservationData) {
    return <div>Chargement...</div>;
  }
  
  // Formatage du prix en Ariary
  const formatAriary = (amount: number): string => {
    return amount.toLocaleString('fr-FR') + ' Ar';
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Finaliser votre réservation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input 
                        id="name"
                        name="name"
                        placeholder="Votre nom complet"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="votre.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="+225 01 23 45 67 89"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-adr-900 hover:bg-adr-800">
                    Continuer vers le paiement
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Reservation Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{reservationData.circuitTitle}</h3>
                  <p className="text-muted-foreground">
                    Départ le {new Date(reservationData.startDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                
                <div className="border-t border-b py-3 space-y-2">
                  <div className="flex justify-between">
                    <span>Voyageurs</span>
                    <span>{reservationData.personCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prix par personne</span>
                    <span>{formatAriary(reservationData.totalAmount / reservationData.personCount)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{formatAriary(reservationData.totalAmount)}</span>
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

export default Reservation;
