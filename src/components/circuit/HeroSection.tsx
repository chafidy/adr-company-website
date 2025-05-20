
import React from "react";
import { Circuit } from "@/types";
import { formatAriary } from "@/utils/formatCurrency";

interface HeroSectionProps {
  circuit: Circuit;
}

const HeroSection = ({ circuit }: HeroSectionProps) => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${circuit.image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{circuit.title}</h1>
            <p className="text-xl text-white opacity-90 mb-6">{circuit.description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-primary-brand/80 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center">
                <span className="font-semibold mr-1">{circuit.duration}</span> jours
              </span>
              <span className="bg-primary-brand/80 text-white px-4 py-2 rounded-full backdrop-blur-sm">
                {formatAriary(circuit.price)}
              </span>
              <span className="bg-secondary-brand/80 text-primary-brand px-4 py-2 rounded-full backdrop-blur-sm">
                {circuit.destinations.length} destinations
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
