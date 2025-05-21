
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, LayoutDashboard, Calendar, CreditCard, UserCircle, Settings, LogOut } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset
} from "@/components/ui/sidebar";

import StatCards from "./StatCards";
import DashboardContent from "./dashboard/DashboardContent";
import ReservationsContent from "./reservations/ReservationsContent";
import PaymentsContent from "./payments/PaymentsContent";
import CustomersContent from "./customers/CustomersContent";

interface AdminLayoutProps {
  reservations: any[];
  stats: {
    totalRevenue: number;
    pendingPayments: number;
    newCustomers: number;
    upcomingTours: number;
  };
  onRefreshData: () => void;
  onLogout: () => void;
  onUpdateReservation: (id: string, status: string) => void;
  isLoading: boolean;
}

const AdminLayout = ({ 
  reservations, 
  stats, 
  onRefreshData, 
  onLogout, 
  onUpdateReservation,
  isLoading 
}: AdminLayoutProps) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <SidebarProvider defaultOpen={true} className="flex-grow">
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold">Admin ADR</h1>
          <SidebarTrigger />
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>
                    <LayoutDashboard className="size-4" />
                    <span>Tableau de bord</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={activeTab === 'reservations'} onClick={() => setActiveTab('reservations')}>
                    <Calendar className="size-4" />
                    <span>Réservations</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={activeTab === 'payments'} onClick={() => setActiveTab('payments')}>
                    <CreditCard className="size-4" />
                    <span>Paiements</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={activeTab === 'customers'} onClick={() => setActiveTab('customers')}>
                    <UserCircle className="size-4" />
                    <span>Clients</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Paramètres</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Settings className="size-4" />
                    <span>Configuration</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton onClick={onLogout}>
                    <LogOut className="size-4" />
                    <span>Déconnexion</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      
      <SidebarInset className="px-4 py-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">{activeTab === 'dashboard' ? 'Tableau de bord' : 
                                            activeTab === 'reservations' ? 'Réservations' :
                                            activeTab === 'payments' ? 'Paiements' : 'Clients'}</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onRefreshData} disabled={isLoading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Actualiser
            </Button>
          </div>
        </div>
        
        <StatCards stats={{...stats, reservationsCount: reservations.length}} />
        
        {activeTab === 'dashboard' && (
          <DashboardContent reservations={reservations} />
        )}
        
        {activeTab === 'reservations' && (
          <ReservationsContent 
            reservations={reservations} 
            onUpdateStatus={onUpdateReservation} 
          />
        )}
        
        {activeTab === 'payments' && (
          <PaymentsContent reservations={reservations} />
        )}
        
        {activeTab === 'customers' && (
          <CustomersContent reservations={reservations} />
        )}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
