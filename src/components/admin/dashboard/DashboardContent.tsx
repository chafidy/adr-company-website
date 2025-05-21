
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { formatAriary, convertEuroToAriary } from "@/utils/formatCurrency";

interface Reservation {
  id: string;
  circuitTitle: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  personCount: number;
  totalAmount: number;
  startDate: string;
  createdAt: string;
  paymentStatus: string;
  paymentInfo: {
    reference: string;
    name: string;
    phone: string;
    amount: number;
    timestamp: string;
  } | null;
  notes: string;
}

interface DashboardContentProps {
  reservations: Reservation[];
}

const DashboardContent = ({ reservations }: DashboardContentProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Résumé des activités</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Bienvenue sur le tableau de bord d'ADR Tours. Utilisez la navigation pour gérer vos réservations, paiements et clients.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Réservations récentes</h3>
            <div className="space-y-2">
              {reservations.slice(0, 3).map(res => (
                <div key={res.id} className="flex justify-between p-2 border rounded-md">
                  <div>{res.customerInfo.name}</div>
                  <div>{new Date(res.createdAt).toLocaleDateString('fr-FR')}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Paiements récents</h3>
            <div className="space-y-2">
              {reservations
                .filter(res => res.paymentInfo)
                .slice(0, 3)
                .map(res => (
                  <div key={res.id} className="flex justify-between p-2 border rounded-md">
                    <div>{res.paymentInfo?.reference}</div>
                    <div>{formatAriary(convertEuroToAriary(res.paymentInfo?.amount || 0))}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardContent;
