import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Circle } from "lucide-react";
import ImageGallery from "@/components/about/ImageGallery";
import Logo from "@/components/Logo";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero with new image */}
      <section className="relative py-20 bg-adr-900 text-white" style={{
        backgroundImage: "url('/lovable-uploads/65f74de7-6570-48c3-af5b-f2da92c6734a.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">À propos de ADR Travel</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Votre partenaire de confiance pour des voyages exceptionnels depuis plus de 15 ans
          </p>
        </div>
      </section>
      
      {/* Mission - Modified to use the uploaded Logo */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center items-center">
              <div className="bg-black p-8 rounded-lg shadow-lg flex justify-center items-center">
                <img 
                  src="/lovable-uploads/77657e50-5ff1-4ee0-ba50-3a82ac0694af.png" 
                  alt="ADR COMPANY Logo" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre mission</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Chez ADR Travel, notre mission est de créer des expériences de voyage inoubliables qui enrichissent la vie de nos clients et leur permettent de découvrir le monde avec confiance et authenticité.
              </p>
              <p className="text-lg text-muted-foreground">
                Nous sommes passionnés par le voyage et nous nous engageons à offrir un service personnalisé de haute qualité, en mettant l'accent sur la découverte culturelle, la durabilité et le respect des communautés locales.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-adr-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-adr-900 text-white h-12 w-12 rounded-full flex items-center justify-center mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Nous nous efforçons constamment d'offrir un service de la plus haute qualité, en veillant à chaque détail pour que votre voyage soit parfait.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-adr-900 text-white h-12 w-12 rounded-full flex items-center justify-center mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Authenticité</h3>
              <p className="text-muted-foreground">
                Nous privilégions les expériences authentiques qui vous permettent d'établir des connexions significatives avec les cultures et les lieux visités.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-adr-900 text-white h-12 w-12 rounded-full flex items-center justify-center mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Responsabilité</h3>
              <p className="text-muted-foreground">
                Nous nous engageons à promouvoir un tourisme responsable qui respecte l'environnement et contribue positivement aux communautés locales.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Carousel - Replacing Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Découvrez Madagascar en images</h2>
          <ImageGallery />
        </div>
      </section>
      
      {/* Testimonials - Replacing Paradise Locations */}
      <section className="py-16 bg-adr-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Témoignages de nos clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/lovable-uploads/1f7aa934-0e8d-424d-8207-430fc97bc81a.png" alt="Client avatar" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Rakoto Solofo</h3>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Notre voyage à Madagascar a été une expérience extraordinaire. Les plages étaient magnifiques et l'équipe d'ADR Travel a pris soin de chaque détail. Je recommande vivement!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/lovable-uploads/92283851-ccbb-4d65-b22e-fdaebf636e2e.png" alt="Client avatar" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Marie Ranaivo</h3>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Les guides étaient exceptionnels et très attentionnés. Notre circuit à travers Madagascar nous a fait découvrir des paysages à couper le souffle et une culture fascinante."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src="/lovable-uploads/533287da-d4f2-45db-aa7f-c4a7eee7929d.png" alt="Client avatar" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">Jean Andriamasy</h3>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "J'ai voyagé dans de nombreux pays, mais l'expérience avec ADR Travel à Madagascar a été vraiment unique. L'organisation était impeccable et les activités proposées parfaitement équilibrées."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History - Keep this section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre histoire</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-adr-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Nos débuts en 2008</h3>
              <p className="text-muted-foreground">
                ADR Travel a été fondée par Marie Konan avec la vision de créer une agence de voyage offrant des circuits authentiques et de qualité. Après des années d'expérience dans l'industrie du tourisme, Marie a voulu mettre son expertise au service des voyageurs passionnés.
              </p>
            </div>
            <div className="bg-adr-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Croissance et expansion</h3>
              <p className="text-muted-foreground">
                Au fil des ans, ADR Travel s'est développée pour offrir une gamme diversifiée de circuits à travers le monde. Notre réputation d'excellence et notre service personnalisé ont attiré une clientèle fidèle et nous ont permis d'élargir notre offre.
              </p>
            </div>
            <div className="bg-adr-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">ADR Travel aujourd'hui</h3>
              <p className="text-muted-foreground">
                Aujourd'hui, ADR Travel est reconnue comme une agence de référence pour la qualité de ses circuits et son service client exceptionnel. Notre équipe de passionnés continue de créer des expériences de voyage uniques qui reflètent notre engagement envers l'excellence et l'authenticité.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
