
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, X, Mail, Calendar, Users, TrendingUp, RefreshCw, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reservations, setReservations] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("reservations");
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
        const revenue = sampleReservations.reduce((sum, res) => 
          res.paymentStatus === 'verified' ? sum + res.totalAmount : sum, 0);
        
        const pending = sampleReservations.filter(r => r.paymentStatus === 'awaiting' || r.paymentStatus === 'received').length;
        
        const uniqueCustomers = new Set(sampleReservations.map(r => r.customerInfo.email)).size;
        
        const upcomingTours = sampleReservations.filter(r => 
          new Date(r.startDate) > new Date() && 
          (r.paymentStatus === 'verified' || r.paymentStatus === 'received')
        ).length;
        
        setStats({
          totalRevenue: revenue,
          pendingPayments: pending,
          newCustomers: uniqueCustomers,
          upcomingTours: upcomingTours
        });
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
        const revenue = storedReservations.reduce((sum, res) => 
          res.paymentStatus === 'verified' ? sum + res.totalAmount : sum, 0);
        
        const pending = storedReservations.filter(r => r.paymentStatus === 'awaiting' || r.paymentStatus === 'received').length;
        
        const uniqueCustomers = new Set(storedReservations.map(r => r.customerInfo.email)).size;
        
        const upcomingTours = storedReservations.filter(r => 
          new Date(r.startDate) > new Date() && 
          (r.paymentStatus === 'verified' || r.paymentStatus === 'received')
        ).length;
        
        setStats({
          totalRevenue: revenue,
          pendingPayments: pending,
          newCustomers: uniqueCustomers,
          upcomingTours: upcomingTours
        });
      } else {
        // Generate sample data if none exists
        refreshData();
      }
    }
  }, [isAuthenticated]);
  
  // Generate sample reservation data
  const generateSampleReservations = () => {
    const circuitTitles = [
      "Circuit Découverte du Nord",
      "Aventure dans l'Est Sauvage",
      "Exploration des Hautes Terres",
      "Séjour Plage et Détente",
      "Tour des Parcs Nationaux"
    ];
    
    const customers = [
      { name: "Jean Dupont", email: "jean.dupont@example.com", phone: "+33 6 12 34 56 78" },
      { name: "Marie Laurent", email: "marie.laurent@example.com", phone: "+33 6 23 45 67 89" },
      { name: "Pierre Martin", email: "pierre.martin@example.com", phone: "+33 6 34 56 78 90" },
      { name: "Sophie Dubois", email: "sophie.dubois@example.com", phone: "+33 6 45 67 89 01" },
      { name: "Thomas Leroy", email: "thomas.leroy@example.com", phone: "+33 6 56 78 90 12" }
    ];
    
    // Helper to generate random date in the past 30 days
    const randomPastDate = () => {
      const date = new Date();
      date.setDate(date.getDate() - Math.floor(Math.random() * 30));
      return date;
    };
    
    // Helper to generate random date in the future 90 days
    const randomFutureDate = () => {
      const date = new Date();
      date.setDate(date.getDate() + Math.floor(Math.random() * 90) + 7);
      return date;
    };
    
    // Generate 10-15 random reservations
    const count = Math.floor(Math.random() * 6) + 10;
    const sampleData = [];
    
    for (let i = 0; i < count; i++) {
      const personCount = Math.floor(Math.random() * 4) + 1;
      const pricePerPerson = Math.floor(Math.random() * 1000) + 1000;
      const totalAmount = personCount * pricePerPerson;
      
      const customer = customers[Math.floor(Math.random() * customers.length)];
      const circuit = circuitTitles[Math.floor(Math.random() * circuitTitles.length)];
      
      const createdAt = randomPastDate();
      const startDate = randomFutureDate();
      
      // Determine payment status - 60% verified, 30% received, 10% awaiting
      let paymentStatus;
      const paymentRoll = Math.random();
      if (paymentRoll < 0.6) {
        paymentStatus = 'verified';
      } else if (paymentRoll < 0.9) {
        paymentStatus = 'received';
      } else {
        paymentStatus = 'awaiting';
      }
      
      // Create payment info if not 'awaiting'
      let paymentInfo = null;
      if (paymentStatus !== 'awaiting') {
        const paymentDate = new Date(createdAt);
        paymentDate.setDate(createdAt.getDate() + Math.floor(Math.random() * 3) + 1);
        
        paymentInfo = {
          reference: `PAY-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
          name: customer.name,
          phone: customer.phone,
          amount: totalAmount,
          timestamp: paymentDate
        };
      }
      
      sampleData.push({
        id: `RES-${i+1}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
        circuitTitle: circuit,
        customerInfo: customer,
        personCount,
        totalAmount,
        startDate,
        createdAt,
        paymentStatus,
        paymentInfo,
        notes: Math.random() > 0.7 ? "Client demande une chambre avec vue mer si possible" : ""
      });
    }
    
    return sampleData;
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication (in a real app this would be server-side)
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      toast({ title: "Connecté", description: "Bienvenue dans l'espace administrateur" });
    } else {
      toast({
        title: "Erreur d'authentification",
        description: "Identifiants incorrects",
        variant: "destructive",
      });
    }
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    setPassword("");
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
    const revenue = updatedReservations.reduce((sum, res) => 
      res.paymentStatus === 'verified' ? sum + res.totalAmount : sum, 0);
      
    const pending = updatedReservations.filter(r => r.paymentStatus === 'awaiting' || r.paymentStatus === 'received').length;
    
    setStats({
      ...stats,
      totalRevenue: revenue,
      pendingPayments: pending,
    });
    
    toast({
      title: "Réservation mise à jour",
      description: `Statut de paiement mis à jour: ${status}`,
    });
  };
  
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <div className="container mx-auto px-4 py-12 flex-grow flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Connexion Administrateur</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="username">
                    Nom d'utilisateur
                  </label>
                  <input
                    id="username"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="password">
                    Mot de passe
                  </label>
                  <input
                    id="password"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-adr-900 hover:bg-adr-800">
                  Se connecter
                </Button>
              </form>
              <div className="mt-4 text-sm text-center text-muted-foreground">
                <p>Utilisez admin / password pour vous connecter</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Tableau de bord</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={refreshData} disabled={isLoading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              Actualiser
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Déconnexion
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center">
              <div className="rounded-full bg-adr-50 p-3 mr-4">
                <Users className="h-6 w-6 text-adr-900" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Nouvelles réservations</p>
                <div className="text-2xl font-bold">{reservations.length}</div>
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
                <div className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()} €</div>
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
        
        <Tabs defaultValue="reservations" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="reservations">Réservations</TabsTrigger>
            <TabsTrigger value="payments">Paiements</TabsTrigger>
            <TabsTrigger value="customers">Clients</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reservations" className="space-y-6">
            {reservations.length > 0 ? (
              reservations.map((res) => (
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
                            Montant: {res.totalAmount.toLocaleString()} €
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
                            onClick={() => handleUpdateReservation(res.id, 'verified')}
                          >
                            <Check className="mr-1 w-4 h-4" /> Vérifier le paiement
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="border-red-500 text-red-500 hover:bg-red-50"
                            onClick={() => handleUpdateReservation(res.id, 'awaiting')}
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
              ))
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">Aucune réservation pour l'instant</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="payments" className="space-y-6">
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
                            <TableCell className="text-right">{res.paymentInfo.amount.toLocaleString()} €</TableCell>
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
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-6">
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
                          .reduce((sum, r) => sum + r.totalAmount, 0);
                          
                        return (
                          <TableRow key={email}>
                            <TableCell>{customer.name}</TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{customer.phone}</TableCell>
                            <TableCell className="text-right">{customerReservations.length}</TableCell>
                            <TableCell className="text-right">{totalSpent.toLocaleString()} €</TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
