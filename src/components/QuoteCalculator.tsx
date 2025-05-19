
import { useState, useEffect } from 'react';
import { Circuit } from "@/types";
import { circuits } from "@/data/circuits";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator } from "lucide-react";

// Taux de change fixe : 1 EUR = 4500 MGA environ
const EXCHANGE_RATE = 4500;

interface QuoteCalculatorProps {
  className?: string;
}

const QuoteCalculator = ({ className }: QuoteCalculatorProps) => {
  const [selectedCircuit, setSelectedCircuit] = useState<Circuit | null>(null);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [totalMGA, setTotalMGA] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  // Calculer le total à chaque changement
  useEffect(() => {
    if (selectedCircuit) {
      const basePrice = selectedCircuit.price;
      const totalParticipants = adults + children;
      const childDiscount = children * (selectedCircuit.price * 0.3); // 30% de réduction pour les enfants
      const groupDiscount = totalParticipants > 5 ? totalParticipants * 50000 : 0; // Réduction groupe
      
      setDays(selectedCircuit.duration);
      
      // Calcul du prix total
      const calculatedTotal = (adults * basePrice) + (children * (basePrice * 0.7)) - groupDiscount;
      setTotalMGA(calculatedTotal);
    } else {
      setTotalMGA(0);
      setDays(0);
    }
  }, [selectedCircuit, adults, children]);

  const handleCalculate = () => {
    setShowDetails(true);
  };
  
  const formatAriary = (amount: number): string => {
    return amount.toLocaleString('fr-FR') + ' Ar';
  };

  return (
    <Card className={`${className} shadow-lg border-adr-200`}>
      <CardHeader className="bg-adr-50">
        <div className="flex items-center gap-2">
          <Calculator className="text-adr-900" size={20} />
          <CardTitle className="text-xl text-adr-900">Calculateur de Devis</CardTitle>
        </div>
        <CardDescription>Estimez le coût de votre voyage en groupe à Madagascar</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Circuit</label>
          <Select onValueChange={(value) => {
            const selected = circuits.find(c => c.id === value);
            setSelectedCircuit(selected || null);
          }}>
            <SelectTrigger>
              <SelectValue placeholder="Choisissez un circuit" />
            </SelectTrigger>
            <SelectContent>
              {circuits.map((circuit) => (
                <SelectItem key={circuit.id} value={circuit.id}>
                  {circuit.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nombre d'adultes</label>
            <div className="flex items-center">
              <button 
                type="button"
                className="border border-gray-300 px-3 py-1 rounded-l-md hover:bg-gray-100"
                onClick={() => setAdults(Math.max(1, adults - 1))}
              >
                -
              </button>
              <Input 
                type="number" 
                value={adults}
                onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 0))}
                className="rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min={1}
              />
              <button 
                type="button"
                className="border border-gray-300 px-3 py-1 rounded-r-md hover:bg-gray-100"
                onClick={() => setAdults(adults + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Nombre d'enfants (-12 ans)</label>
            <div className="flex items-center">
              <button 
                type="button"
                className="border border-gray-300 px-3 py-1 rounded-l-md hover:bg-gray-100"
                onClick={() => setChildren(Math.max(0, children - 1))}
              >
                -
              </button>
              <Input 
                type="number" 
                value={children}
                onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                className="rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min={0}
              />
              <button 
                type="button"
                className="border border-gray-300 px-3 py-1 rounded-r-md hover:bg-gray-100"
                onClick={() => setChildren(children + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleCalculate}
          className="w-full mt-4 bg-adr-900 hover:bg-adr-800"
          disabled={!selectedCircuit}
        >
          Calculer mon devis
        </Button>
      </CardContent>
      
      {showDetails && selectedCircuit && (
        <CardFooter className="flex-col border-t pt-6">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Circuit:</span>
              <span>{selectedCircuit.title}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium">Durée:</span>
              <span>{days} jours</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-medium">Participants:</span>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-adr-50">
                  {adults} adulte{adults > 1 ? 's' : ''}
                </Badge>
                {children > 0 && (
                  <Badge variant="outline" className="bg-adr-50">
                    {children} enfant{children > 1 ? 's' : ''}
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Devis total:</span>
                <span className="text-adr-900">{formatAriary(totalMGA)}</span>
              </div>
              <p className="text-sm text-muted-foreground text-right mt-1">
                Soit environ {Math.round(totalMGA / EXCHANGE_RATE).toLocaleString('fr-FR')} €
              </p>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-2">
              Ce devis est estimatif et peut varier selon les options choisies et la disponibilité.
            </p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default QuoteCalculator;
