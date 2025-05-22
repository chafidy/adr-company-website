
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

interface CustomersContentProps {
  reservations: any[];
  isLoading?: boolean;
}

const CustomersContent = ({ reservations, isLoading = false }: CustomersContentProps) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Téléphone</TableHead>
                <TableHead className="text-right">Réservations</TableHead>
                <TableHead className="text-right">Total dépensé</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4].map((i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-4 w-8 ml-auto" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-4 w-20 ml-auto" /></TableCell>
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
        <CardTitle>Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead className="text-right">Réservations</TableHead>
              <TableHead className="text-right">Total dépensé</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from(new Set(reservations.map(r => r.customerInfo.email)))
              .map(email => {
                // Get all reservations for this customer
                const customerReservations = reservations
                  .filter(r => r.customerInfo.email === email);
                
                // Get customer info from first reservation
                const customer = customerReservations[0].customerInfo;
                
                // Calculate total spent (verified payments only)
                const totalSpent = customerReservations
                  .filter(r => r.paymentStatus === 'verified')
                  .reduce((sum, r) => sum + convertEuroToAriary(r.totalAmount), 0);
                  
                return (
                  <TableRow key={email}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell className="text-right">{customerReservations.length}</TableCell>
                    <TableCell className="text-right">{formatAriary(totalSpent)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CustomersContent;
