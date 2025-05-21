
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, FileText, Calendar } from "lucide-react";
import { formatAriary } from "@/utils/formatCurrency";

interface StatsData {
  totalRevenue: number;
  pendingPayments: number;
  newCustomers: number;
  upcomingTours: number;
  reservationsCount: number;
}

interface StatCardsProps {
  stats: StatsData;
}

const StatCards = ({ stats }: StatCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card>
        <CardContent className="p-6 flex items-center">
          <div className="rounded-full bg-adr-50 p-3 mr-4">
            <Users className="h-6 w-6 text-adr-900" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Nouvelles réservations</p>
            <div className="text-2xl font-bold">{stats.reservationsCount}</div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 flex items-center">
          <div className="rounded-full bg-green-50 p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Revenus totaux</p>
            <div className="text-2xl font-bold">{formatAriary(stats.totalRevenue)}</div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 flex items-center">
          <div className="rounded-full bg-amber-50 p-3 mr-4">
            <FileText className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Paiements en attente</p>
            <div className="text-2xl font-bold">{stats.pendingPayments}</div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6 flex items-center">
          <div className="rounded-full bg-blue-50 p-3 mr-4">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Tours à venir</p>
            <div className="text-2xl font-bold">{stats.upcomingTours}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;
