
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from "./OverviewTab";
import { TimelineTab } from "./TimelineTab";
import { ImpactsTab } from "./ImpactsTab";
import { FaqTab } from "./FaqTab";

export const TaxReformTabs: React.FC = () => {
  return (
    <Tabs defaultValue="overview" className="space-y-8">
      <TabsList className="grid w-full grid-cols-4 md:w-auto">
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="timeline">Cronograma</TabsTrigger>
        <TabsTrigger value="impacts">Impactos</TabsTrigger>
        <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <OverviewTab />
      </TabsContent>
      
      <TabsContent value="timeline">
        <TimelineTab />
      </TabsContent>
      
      <TabsContent value="impacts">
        <ImpactsTab />
      </TabsContent>
      
      <TabsContent value="faq">
        <FaqTab />
      </TabsContent>
    </Tabs>
  );
};
