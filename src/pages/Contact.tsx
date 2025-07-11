
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission success
    toast({
      title: "Message envoyé",
      description: "Nous vous contacterons dans les plus brefs délais",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero with new image */}
      <section className="relative py-20 bg-adr-900 text-white" style={{
        backgroundImage: "url('/lovable-uploads/1f7aa934-0e8d-424d-8207-430fc97bc81a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Notre équipe est à votre écoute pour répondre à toutes vos questions
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Votre nom complet"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    placeholder="Objet de votre message"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Votre message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="px-8 bg-adr-900 hover:bg-adr-800">
                  Envoyer le message
                </Button>
              </form>
            </div>
            
            {/* Contact Info - Updated with new address */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-adr-900 mt-1" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-muted-foreground">Antsirabe, Vakinakaratra</p>
                    <p className="text-muted-foreground">Madagascar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-adr-900 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@adrtravel.com</p>
                    <p className="text-muted-foreground">info@adrtravel.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-adr-900 mt-1" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+225 XX XX XX XX</p>
                    <p className="text-muted-foreground">+225 XX XX XX XX</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium mb-3">Heures d'ouverture</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi:</span>
                      <span>9h00 - 15h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Maps - Updated with Antsirabe coordinates */}
              <div className="mt-8 h-72 rounded-lg overflow-hidden border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59515.56235570202!2d46.986632696303336!3d-19.866246099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21ec8e1ea815587f%3A0xed740c0a17490fbb!2sAntsirabe%2C%20Madagascar!5e0!3m2!1sfr!2sus!4v1715843518580!5m2!1sfr!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-adr-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center">Questions fréquemment posées</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { 
                q: "Comment réserver un circuit ?", 
                a: "Vous pouvez réserver un circuit en ligne en naviguant vers la page du circuit qui vous intéresse, en sélectionnant votre date de départ et le nombre de voyageurs, puis en suivant les instructions pour compléter votre réservation." 
              },
              { 
                q: "Quels modes de paiement acceptez-vous ?", 
                a: "Nous acceptons les paiements par Mobile Money, virement bancaire et espèces à notre agence." 
              },
              { 
                q: "Puis-je annuler ma réservation ?", 
                a: "Oui, vous pouvez annuler votre réservation selon nos conditions d'annulation. Selon le délai avant le départ, des frais d'annulation peuvent s'appliquer." 
              },
              { 
                q: "Les vols sont-ils inclus dans vos circuits ?", 
                a: "Cela dépend du circuit. Certains circuits incluent les vols internationaux, tandis que d'autres ne comprennent que les services terrestres. Consultez la description détaillée du circuit pour plus d'informations." 
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
