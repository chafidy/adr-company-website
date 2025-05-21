
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminLayout from "@/components/admin/AdminLayout";
import { generateSampleReservations, calculateStats } from "@/utils/adminHelpers";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reservations, setReservations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    pendingPayments: 0,
    newCustomers: 0,
    upcomingTours: 0
  });
  
  // Simulate data loading with refresh function
  const refreshData = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate sample data if none exists
      if (reservations.length === 0) {
        const sampleReservations = generateSampleReservations();
        setReservations(sampleReservations);
        localStorage.setItem("reservations", JSON.stringify(sampleReservations));
        
        // Calculate stats
        const calculatedStats = calculateStats(sampleReservations);
        setStats(calculatedStats);
      }
      
      setIsLoading(false);
      toast({ title: "Données actualisées", description: "Les dernières données ont été chargées" });
    }, 1000);
  };
  
  // Load reservations from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const storedReservations = JSON.parse(localStorage.getItem("reservations") || "[]");
      setReservations(storedReservations);
      
      // Calculate stats from loaded data
      if (storedReservations.length > 0) {
        const calculatedStats = calculateStats(storedReservations);
        setStats(calculatedStats);
      } else {
        // Generate sample data if none exists
        refreshData();
      }
    }
  }, [isAuthenticated]);
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  
  const handleUpdateReservation = (id: string, status: string) => {
    const updatedReservations = reservations.map((res) => {
      if (res.id === id) {
        return { ...res, paymentStatus: status };
      }
      return res;
    });
    
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    
    // Update stats after changing payment status
    const calculatedStats = calculateStats(updatedReservations);
    setStats(calculatedStats);
    
    toast({
      title: "Réservation mise à jour",
      description: `Statut de paiement mis à jour: ${status}`,
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {!isAuthenticated ? (
        <AdminLogin onSuccess={handleLogin} />
      ) : (
        <AdminLayout 
          reservations={reservations}
          stats={stats}
          onRefreshData={refreshData}
          onLogout={handleLogout}
          onUpdateReservation={handleUpdateReservation}
          isLoading={isLoading}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Admin;
