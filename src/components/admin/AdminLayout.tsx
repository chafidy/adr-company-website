
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, LayoutDashboard, Calendar, CreditCard, UserCircle, Settings, LogOut, Loader } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
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
  const [tabChanging, setTabChanging] = useState(false);
  
  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    
    setTabChanging(true);
    
    // Simulate tab change loading with a slight delay
    setTimeout(() => {
      setActiveTab(tab);
      setTabChanging(false);
    }, 300);
  };

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
                  <SidebarMenuButton isActive={activeTab === 'dashboard'} onClick={() => handleTabChange('dashboard')}>
                    <LayoutDashboard className="size-4" />
                    <span>Tableau de bord</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={activeTab === 'reservations'} onClick={() => handleTabChange('reservations')}>
                    <Calendar className="size-4" />
                    <span>Réservations</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={activeTab === 'payments'} onClick={() => handleTabChange('payments')}>
                    <CreditCard className="size-4" />
                    <span>Paiements</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={activeTab === 'customers'} onClick={() => handleTabChange('customers')}>
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
              {isLoading ? (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
              )}
              Actualiser
            </Button>
          </div>
        </div>
        
        {tabChanging && (
          <div className="mb-6">
            <Progress value={70} className="h-1 animate-pulse" />
          </div>
        )}
        
        <StatCards stats={{...stats, reservationsCount: reservations.length}} />
        
        {activeTab === 'dashboard' && (
          <DashboardContent reservations={reservations} />
        )}
        
        {activeTab === 'reservations' && (
          <ReservationsContent 
            reservations={reservations} 
            onUpdateStatus={onUpdateReservation}
            isLoading={isLoading || tabChanging}
          />
        )}
        
        {activeTab === 'payments' && (
          <PaymentsContent 
            reservations={reservations}
            isLoading={isLoading || tabChanging}
          />
        )}
        
        {activeTab === 'customers' && (
          <CustomersContent 
            reservations={reservations}
            isLoading={isLoading || tabChanging}
          />
        )}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
