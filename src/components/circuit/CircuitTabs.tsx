
import React from "react";
import { Circuit } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DescriptionTab from "./tabs/DescriptionTab";
import ProgramTab from "./tabs/ProgramTab";
import InfoTab from "./tabs/InfoTab";
import QuoteCalculator from "@/components/QuoteCalculator";

interface CircuitTabsProps {
  circuit: Circuit;
}

const CircuitTabs = ({ circuit }: CircuitTabsProps) => {
  return (
    <div className="lg:col-span-2 space-y-8">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="programme">Programme</TabsTrigger>
          <TabsTrigger value="infos">Infos pratiques</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description">
          <DescriptionTab circuit={circuit} />
        </TabsContent>
        
        <TabsContent value="programme">
          <ProgramTab circuit={circuit} />
        </TabsContent>
        
        <TabsContent value="infos">
          <InfoTab />
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Calculez votre devis personnalisé</h2>
        <QuoteCalculator />
      </div>
    </div>
  );
};

export default CircuitTabs;
