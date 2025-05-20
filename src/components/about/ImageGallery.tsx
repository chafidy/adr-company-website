
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { circuits } from "@/data/circuits";
import Autoplay from "embla-carousel-autoplay";

const ImageGallery = () => {
  const [isMounted, setIsMounted] = useState(false);
  const circuitImages = circuits.map(circuit => ({
    src: circuit.image,
    alt: circuit.title
  }));
  
  // Add any additional images you want to include in the carousel
  const allImages = [
    ...circuitImages,
    { 
      src: "/lovable-uploads/65f74de7-6570-48c3-af5b-f2da92c6734a.png",
      alt: "Allée de baobabs" 
    },
    { 
      src: "/lovable-uploads/8b4eb68e-6c1b-45f7-85bd-c2a970e82f7f.png",
      alt: "Route malgache" 
    }
  ];
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {allImages.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <div className="overflow-hidden rounded-lg h-[250px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageGallery;
