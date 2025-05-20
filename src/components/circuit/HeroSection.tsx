
import React from "react";
import { Circuit } from "@/types";
import { formatAriary } from "@/utils/formatCurrency";

interface HeroSectionProps {
  circuit: Circuit;
}

const HeroSection = ({ circuit }: HeroSectionProps) => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${circuit.image})` }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 flex items-end pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{circuit.title}</h1>
            <p className="text-xl text-white opacity-95 mb-4">{circuit.description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                {circuit.duration} jours
              </span>
              <span className="bg-adr-900 text-white px-4 py-2 rounded-full font-semibold">
                {formatAriary(circuit.price)}
              </span>
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
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
