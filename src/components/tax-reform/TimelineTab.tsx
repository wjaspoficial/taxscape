
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";

export const TimelineTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <CardTitle>Cronograma de Implementação</CardTitle>
          </div>
          <CardDescription>
            A transição para o novo sistema será gradual
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">2023-2024</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Aprovação da PEC da Reforma Tributária (Emenda Constitucional nº 132/2023)</li>
              <li>Elaboração e discussão das leis complementares que regulamentarão a reforma</li>
            </ul>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">2025-2026</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Início da implementação do IBS e da CBS com alíquotas teste de 1%</li>
              <li>Redução equivalente nas alíquotas dos tributos que serão extintos</li>
              <li>Início da implementação do Imposto Seletivo</li>
            </ul>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">2027-2032</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Transição gradual: aumento progressivo do IBS e da CBS</li>
              <li>Redução proporcional do PIS, Cofins, IPI, ICMS e ISS</li>
            </ul>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">2033 em diante</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Implementação completa do novo sistema</li>
              <li>Extinção definitiva dos antigos tributos</li>
              <li>Pleno funcionamento do IBS, CBS e Imposto Seletivo</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
