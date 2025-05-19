
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, X, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reservations, setReservations] = useState<any[]>([]);
  
  // Load reservations from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      const storedReservations = JSON.parse(localStorage.getItem("reservations") || "[]");
      setReservations(storedReservations);
    }
  }, [isAuthenticated]);
  
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
          <Button variant="outline" onClick={handleLogout}>
            Déconnexion
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">{reservations.length}</div>
              <div className="text-muted-foreground">Réservations totales</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {reservations.filter(r => r.paymentStatus === 'received').length}
              </div>
              <div className="text-muted-foreground">Paiements reçus</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">
                {reservations.filter(r => r.paymentStatus === 'verified').length}
              </div>
              <div className="text-muted-foreground">Paiements vérifiés</div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="reservations" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="reservations">Réservations</TabsTrigger>
            <TabsTrigger value="payments">Paiements</TabsTrigger>
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
                  <div className="space-y-4">
                    {reservations
                      .filter(res => res.paymentInfo)
                      .sort((a, b) => new Date(b.paymentInfo.timestamp).getTime() - new Date(a.paymentInfo.timestamp).getTime())
                      .map((res) => (
                        <div key={res.id} className="flex justify-between items-center py-2">
                          <div>
                            <p className="font-medium">{res.customerInfo.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Ref: {res.paymentInfo.reference} | {new Date(res.paymentInfo.timestamp).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold text-right">{res.paymentInfo.amount.toLocaleString()} €</p>
                            <Badge variant={res.paymentStatus === 'verified' ? "default" : "outline"} className="mt-1">
                              {res.paymentStatus === 'awaiting' ? 'En attente' : 
                               res.paymentStatus === 'received' ? 'Reçu' : 'Vérifié'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">Aucun paiement enregistré</p>
                )}
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
