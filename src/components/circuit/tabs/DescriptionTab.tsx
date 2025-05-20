
import React from "react";
import { Circuit } from "@/types";
import { Badge } from "@/components/ui/badge";

interface DescriptionTabProps {
  circuit: Circuit;
}

const DescriptionTab = ({ circuit }: DescriptionTabProps) => {
  return (
    <div className="mt-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">À propos de ce circuit</h2>
        <p className="text-gray-700">{circuit.longDescription}</p>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Destinations visitées</h2>
        <div className="flex flex-wrap gap-2">
          {circuit.destinations.map((destination, index) => (
            <Badge key={index} variant="outline" className="bg-adr-50 text-adr-900 px-3 py-1">
              {destination}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionTab;
