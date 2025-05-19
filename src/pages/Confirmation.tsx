import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Confirmation = () => {
  const navigate = useNavigate();
  const [reservationId, setReservationId] = useState<string | null>(null);
  const [reservation, setReservation] = useState<any>(null);
  
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
    
    // Clear current reservation data but keep the reservations list
    localStorage.removeItem("currentReservation");
    localStorage.removeItem("currentReservationId");
  }, [navigate]);
  
  if (!reservation) {
    return <div>Chargement...</div>;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-green-600" size={48} />
            </div>
            <h1 className="text-3xl font-bold mb-2">Merci pour votre réservation !</h1>
            <p className="text-xl text-muted-foreground">
              Votre demande de réservation a bien été enregistrée.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Détails de la réservation</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{reservation.circuitTitle}</h3>
                  <p className="text-muted-foreground">
                    Départ le {new Date(reservation.startDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Contact</p>
                    <p>{reservation.customerInfo.name}</p>
                    <p>{reservation.customerInfo.email}</p>
                    <p>{reservation.customerInfo.phone}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Voyage</p>
                    <p>{reservation.personCount} voyageur{reservation.personCount > 1 ? "s" : ""}</p>
                    <p>Montant total: {reservation.totalAmount.toLocaleString()} €</p>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-2">Statut du paiement</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                    <p>
                      Votre confirmation de paiement a bien été reçue. Notre équipe va vérifier 
                      votre transaction et vous enverra une confirmation par email.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Prochaines étapes</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Vérification du paiement par notre équipe (24-48h)</li>
                    <li>Envoi d'un email de confirmation avec tous les détails du voyage</li>
                    <li>Préparation de vos documents de voyage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/circuits">
                Découvrir d'autres circuits
              </Link>
            </Button>
            <Button asChild className="bg-adr-900 hover:bg-adr-800">
              <Link to="/">
                Retour à l'accueil
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Confirmation;
