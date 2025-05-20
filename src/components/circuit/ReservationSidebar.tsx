
import React, { useState } from "react";
import { Circuit } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { formatAriary } from "@/utils/formatCurrency";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ReservationSidebarProps {
  circuit: Circuit;
}

const ReservationSidebar = ({ circuit }: ReservationSidebarProps) => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [personCount, setPersonCount] = useState(1);
  
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
    <div>
      <Card className="sticky top-24">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-adr-900">
              {formatAriary(circuit.price)}
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
              <span>{formatAriary(circuit.price * personCount)}</span>
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
            Réduction pour les groupes de 10+
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReservationSidebar;
