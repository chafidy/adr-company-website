
import React from "react";
import { Circuit } from "@/types";

interface HeroSectionProps {
  circuit: Circuit;
}

const HeroSection = ({ circuit }: HeroSectionProps) => {
  return (
    <div className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${circuit.image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{circuit.title}</h1>
            <p className="text-xl text-white opacity-90">{circuit.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
