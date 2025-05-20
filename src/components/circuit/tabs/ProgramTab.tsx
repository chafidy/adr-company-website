
import React from "react";
import { Circuit } from "@/types";

interface ProgramTabProps {
  circuit: Circuit;
}

const ProgramTab = ({ circuit }: ProgramTabProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Programme détaillé</h2>
      <div className="space-y-4">
        <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
          <h3 className="font-medium text-lg">Jour 1-2 : Accueil et découverte</h3>
          <p className="text-gray-600 mt-2">Accueil à l'aéroport d'Antananarivo, transfert à l'hôtel et briefing sur le déroulement du séjour. Introduction à la culture malgache et présentation du programme. Premier contact avec la capitale.</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
          <h3 className="font-medium text-lg">Jour 3-{Math.round(circuit.duration * 0.6)} : Exploration des sites</h3>
          <p className="text-gray-600 mt-2">Découverte des destinations principales du circuit. Immersion dans les paysages variés de Madagascar, rencontres avec les populations locales et observation de la faune et flore emblématiques de l'île.</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-4 border border-gray-100">
          <h3 className="font-medium text-lg">Jour {Math.round(circuit.duration * 0.6) + 1}-{circuit.duration} : Dernières découvertes</h3>
          <p className="text-gray-600 mt-2">Poursuite de l'exploration avec des activités adaptées aux groupes. Temps libre pour profiter des derniers moments, achats de souvenirs artisanaux auprès des communautés locales. Transfert à l'aéroport et vol retour.</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramTab;
