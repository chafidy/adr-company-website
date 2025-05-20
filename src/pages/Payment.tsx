
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const [reservationId, setReservationId] = useState<string | null>(null);
  const [reservation, setReservation] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reference: "",
    amount: "",
    timestamp: "",
  });
  
  useEffect(() => {
    const storedId = localStorage.getItem("currentReservationId");
    if (!storedId) {
      navigate("/circuits");
      return;
    }
    
    setReservationId(storedId);
    
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    const foundReservation = reservations.find((r: any) => r.id === storedId);
    
    if (!foundReservation) {
      navigate("/circuits");
      return;
    }
    
    setReservation(foundReservation);
    setFormData(prev => ({
      ...prev,
      amount: String(foundReservation.totalAmount),
    }));
    
  }, [navigate]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.phone || !formData.reference || !formData.amount || !formData.timestamp) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }
    
    if (!reservationId || !reservation) return;
    
    // Update reservation with payment information
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    const updatedReservations = reservations.map((r: any) => {
      if (r.id === reservationId) {
        return {
          ...r,
          paymentInfo: {
            name: formData.name,
            phone: formData.phone,
            reference: formData.reference,
            amount: parseFloat(formData.amount),
            timestamp: formData.timestamp,
          },
          paymentStatus: 'received',
        };
      }
      return r;
    });
    
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    
    // Show success message and navigate to confirmation page
    toast({
      title: "Paiement confirmé",
      description: "Votre confirmation de paiement a été envoyée avec succès",
    });
    
    navigate("/confirmation");
  };
  
  if (!reservation) {
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
        <h1 className="text-3xl font-bold mb-8 text-center">Paiement de votre réservation</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Instructions */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Instructions de paiement Mobile Money</CardTitle>
                <CardDescription>Suivez ces étapes pour effectuer votre paiement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-adr-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Étape 1: Envoi du paiement</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Ouvrez votre application Mobile Money sur votre téléphone</li>
                    <li>Sélectionnez "Transfert d'argent"</li>
                    <li>Entrez le numéro: <span className="font-semibold">+225 XX XX XX XX</span></li>
                    <li>Entrez le montant: <span className="font-semibold">{formatAriary(reservation.totalAmount)}</span></li>
                    <li>Confirmez le paiement avec votre code PIN</li>
                    <li>Conservez le code de référence de la transaction</li>
                  </ul>
                </div>
                
                <div className="bg-adr-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Étape 2: Confirmation du paiement</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Remplissez le formulaire ci-dessous avec les détails de votre transaction</li>
                    <li>Assurez-vous que le code de référence est correct</li>
                    <li>Soumettez le formulaire pour confirmer votre paiement</li>
                    <li>Notre équipe vérifiera votre paiement et confirmera votre réservation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Confirmation Form */}
            <Card>
              <CardHeader>
                <CardTitle>Confirmer votre paiement</CardTitle>
                <CardDescription>Remplissez les détails de votre transaction Mobile Money</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom utilisé pour le paiement *</Label>
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
                      <Label htmlFor="phone">Numéro utilisé pour le paiement *</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        placeholder="+225 XX XX XX XX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="reference">Référence de la transaction *</Label>
                    <Input 
                      id="reference"
                      name="reference"
                      placeholder="Code de référence de la transaction"
                      value={formData.reference}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Montant payé *</Label>
                      <Input 
                        id="amount"
                        name="amount"
                        type="number"
                        placeholder="Montant en euros"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timestamp">Date et heure du paiement *</Label>
                      <Input 
                        id="timestamp"
                        name="timestamp"
                        type="datetime-local"
                        value={formData.timestamp}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-adr-900 hover:bg-adr-800">
                    Soumettre la confirmation de paiement
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Reservation Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Récapitulatif</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{reservation.circuitTitle}</h3>
                  <p className="text-muted-foreground">
                    Départ le {new Date(reservation.startDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Voyageurs</span>
                    <span>{reservation.personCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prix par personne</span>
                    <span>{formatAriary(reservation.totalAmount / reservation.personCount)}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total à payer</span>
                  <span>{formatAriary(reservation.totalAmount)}</span>
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

export default Payment;
