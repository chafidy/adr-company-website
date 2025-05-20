
import React from "react";

const InfoTab = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Informations pratiques</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg">Inclus dans le prix</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Transport en véhicule adapté aux groupes</li>
              <li>Guide francophone spécialisé Madagascar</li>
              <li>Hébergement en pension complète</li>
              <li>Entrées des sites et parcs nationaux</li>
              <li>Activités mentionnées au programme</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg">Spécial groupes</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Accompagnateur dédié pour les groupes scolaires</li>
              <li>Logements adaptés aux familles nombreuses</li>
              <li>Activités personnalisables selon l'âge</li>
              <li>Réduction pour les grands groupes</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-lg">Non inclus</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Vols internationaux</li>
              <li>Assurance voyage</li>
              <li>Dépenses personnelles</li>
              <li>Pourboires</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg">Conseils pratiques</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Passeport valide 6 mois après retour</li>
              <li>Visa obligatoire (obtention à l'arrivée)</li>
              <li>Vaccins recommandés: consulter un médecin</li>
              <li>Monnaie : Ariary (1€ ≈ 4500 Ar)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
