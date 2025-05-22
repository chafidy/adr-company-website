
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";

interface AdminLoginProps {
  onSuccess: () => void;
}

const AdminLogin = ({ onSuccess }: AdminLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    // Simple authentication (in a real app this would be server-side)
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        onSuccess();
        toast({ title: "Connecté", description: "Bienvenue dans l'espace administrateur" });
      } else {
        setIsLoggingIn(false);
        toast({
          title: "Erreur d'authentification",
          description: "Identifiants incorrects",
          variant: "destructive",
        });
      }
    }, 800); // Simulating API call delay
  };

  return (
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
                disabled={isLoggingIn}
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
                disabled={isLoggingIn}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-adr-900 hover:bg-adr-800"
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Connexion en cours...
                </>
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>
          <div className="mt-4 text-sm text-center text-muted-foreground">
            <p>Utilisez admin / password pour vous connecter</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
