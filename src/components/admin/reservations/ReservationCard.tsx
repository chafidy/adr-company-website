
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Mail } from "lucide-react";
import { formatAriary, convertEuroToAriary } from "@/utils/formatCurrency";

interface ReservationCardProps {
  reservation: any;
  onUpdateStatus: (id: string, status: string) => void;
}

const ReservationCard = ({ reservation: res, onUpdateStatus }: ReservationCardProps) => {
  return (
    <Card key={res.id} className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-adr-50 p-4 flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{res.circuitTitle}</h3>
            <p className="text-sm text-muted-foreground">
              Réservé le {new Date(res.createdAt).toLocaleDateString('fr-FR')}
            </p>
          </div>
          <Badge variant={res.paymentStatus === 'verified' ? "default" : "outline"}>
            {res.paymentStatus === 'awaiting' ? 'En attente' : 
             res.paymentStatus === 'received' ? 'Reçu' : 'Vérifié'}
          </Badge>
        </div>
        
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Client</h4>
              <p>{res.customerInfo.name}</p>
              <p className="text-sm text-muted-foreground">{res.customerInfo.email}</p>
              <p className="text-sm text-muted-foreground">{res.customerInfo.phone}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-1">Détails</h4>
              <p>{res.personCount} personne(s)</p>
              <p className="text-sm text-muted-foreground">
                Départ: {new Date(res.startDate).toLocaleDateString('fr-FR')}
              </p>
              <p className="text-sm text-muted-foreground">
                Montant: {formatAriary(convertEuroToAriary(res.totalAmount))}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium mb-1">Paiement</h4>
              {res.paymentInfo ? (
                <>
                  <p>Référence: {res.paymentInfo.reference}</p>
                  <p className="text-sm text-muted-foreground">
                    De: {res.paymentInfo.name} ({res.paymentInfo.phone})
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Le: {new Date(res.paymentInfo.timestamp).toLocaleDateString('fr-FR')}
                  </p>
                </>
              ) : (
                <p className="text-sm text-muted-foreground">Pas encore payé</p>
              )}
            </div>
          </div>
          
          {res.notes && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <p className="text-sm font-medium">Note:</p>
              <p className="text-sm text-muted-foreground">{res.notes}</p>
            </div>
          )}
          
          {res.paymentInfo && res.paymentStatus !== 'verified' && (
            <div className="flex gap-3 mt-4">
              <Button 
                variant="default" 
                size="sm" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => onUpdateStatus(res.id, 'verified')}
              >
                <Check className="mr-1 w-4 h-4" /> Vérifier le paiement
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-red-500 text-red-500 hover:bg-red-50"
                onClick={() => onUpdateStatus(res.id, 'awaiting')}
              >
                <X className="mr-1 w-4 h-4" /> Rejeter
              </Button>
              <Button 
                variant="outline" 
                size="sm"
              >
                <Mail className="mr-1 w-4 h-4" /> Contacter le client
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservationCard;
