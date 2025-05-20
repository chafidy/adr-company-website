import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Circle } from "lucide-react";
import ImageGallery from "@/components/about/ImageGallery";

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
      
      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1470&auto=format&fit=crop" 
                alt="Notre mission" 
                className="rounded-lg shadow-lg"
              />
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
      
      {/* Paradise Locations */}
      <section className="py-16 bg-adr-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Des destinations paradisiaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/47ed232c-0cc8-4097-b56c-9ca1bba7dd10.png" 
                alt="Plage paradisiaque" 
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-2">Plages de rêve</h3>
                <p className="text-muted-foreground">Des plages de sable blanc bordées d'eaux turquoise vous attendent pour des moments de détente inoubliables.</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/9becc016-758e-46b1-a615-4597575cf80d.png" 
                alt="Faune et flore" 
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-2">Biodiversité unique</h3>
                <p className="text-muted-foreground">Madagascar abrite une faune et une flore exceptionnelles qui raviront les amoureux de la nature.</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/6e577f2f-8d30-4a18-9162-d513a8f7c107.png" 
                alt="Coucher de soleil" 
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-2">Paysages à couper le souffle</h3>
                <p className="text-muted-foreground">Des couchers de soleil spectaculaires sur des paysages variés vous laisseront des souvenirs impérissables.</p>
              </div>
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
