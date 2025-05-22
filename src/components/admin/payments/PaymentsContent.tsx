
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { formatAriary, convertEuroToAriary } from "@/utils/formatCurrency";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PaymentsContentProps {
  reservations: any[];
  isLoading?: boolean;
}

const PaymentsContent = ({ reservations, isLoading = false }: PaymentsContentProps) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Paiements récents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Référence</TableHead>
                <TableHead>Circuit</TableHead>
                <TableHead className="text-right">Montant</TableHead>
                <TableHead className="text-right">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-4 w-16 ml-auto" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-6 w-20 ml-auto" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Paiements récents</CardTitle>
      </CardHeader>
      <CardContent>
        {reservations.filter(res => res.paymentInfo).length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Référence</TableHead>
                <TableHead>Circuit</TableHead>
                <TableHead className="text-right">Montant</TableHead>
                <TableHead className="text-right">Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations
                .filter(res => res.paymentInfo)
                .sort((a, b) => new Date(b.paymentInfo.timestamp).getTime() - new Date(a.paymentInfo.timestamp).getTime())
                .map((res) => (
                  <TableRow key={res.id}>
                    <TableCell>{new Date(res.paymentInfo.timestamp).toLocaleDateString('fr-FR')}</TableCell>
                    <TableCell>{res.customerInfo.name}</TableCell>
                    <TableCell>{res.paymentInfo.reference}</TableCell>
                    <TableCell>{res.circuitTitle.substring(0, 20)}{res.circuitTitle.length > 20 ? '...' : ''}</TableCell>
                    <TableCell className="text-right">{formatAriary(convertEuroToAriary(res.paymentInfo.amount))}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={res.paymentStatus === 'verified' ? "default" : "outline"}>
                        {res.paymentStatus === 'awaiting' ? 'En attente' : 
                        res.paymentStatus === 'received' ? 'Reçu' : 'Vérifié'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-muted-foreground">Aucun paiement enregistré</p>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentsContent;
