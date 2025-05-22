
import ReservationCard from "./ReservationCard";
import ReservationsLoading from "./ReservationsLoading";
import { Card, CardContent } from "@/components/ui/card";

interface ReservationsContentProps {
  reservations: any[];
  onUpdateStatus: (id: string, status: string) => void;
  isLoading?: boolean;
}

const ReservationsContent = ({ 
  reservations, 
  onUpdateStatus, 
  isLoading = false 
}: ReservationsContentProps) => {
  
  if (isLoading) {
    return <ReservationsLoading />;
  }
  
  return (
    <div className="space-y-6">
      {reservations.length > 0 ? (
        reservations.map((res) => (
          <ReservationCard 
            key={res.id} 
            reservation={res} 
            onUpdateStatus={onUpdateStatus} 
          />
        ))
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">Aucune réservation pour l'instant</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ReservationsContent;
