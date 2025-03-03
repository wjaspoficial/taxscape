
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calculator } from "lucide-react";

export const ImpactsTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <CardTitle>Impactos Setoriais</CardTitle>
          </div>
          <CardDescription>
            Como diferentes setores serão afetados pela reforma
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 mr-2 dark:bg-green-900 dark:text-green-300">+</span>
                Setores Potencialmente Beneficiados
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li><strong>Indústria</strong> - Desoneração de exportações e investimentos</li>
                <li><strong>Agronegócio</strong> - Alíquotas reduzidas e regime específico</li>
                <li><strong>Transporte público</strong> - Regime favorecido</li>
                <li><strong>Saúde</strong> - Alíquota reduzida para medicamentos e dispositivos</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 mr-2 dark:bg-red-900 dark:text-red-300">-</span>
                Setores com Possíveis Desafios
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                <li><strong>Serviços</strong> - Possível aumento da carga tributária</li>
                <li><strong>Bebidas alcoólicas e cigarros</strong> - Impacto do Imposto Seletivo</li>
                <li><strong>Combustíveis fósseis</strong> - Tributação adicional</li>
                <li><strong>Bens de luxo</strong> - Possível tributação diferenciada</li>
              </ul>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">Impacto nos Preços</h3>
            <p className="text-slate-600 dark:text-slate-400">
              O efeito nos preços ao consumidor dependerá de diversos fatores:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Alíquota final</strong> - A carga tributária total poderá influenciar os preços</li>
              <li><strong>Eficiência</strong> - Redução nos custos de conformidade pode compensar aumentos em alguns setores</li>
              <li><strong>Concorrência</strong> - Maior transparência pode levar a ajustes competitivos de preços</li>
              <li><strong>Cashback</strong> - Sistema de devolução de imposto para baixa renda poderá mitigar o impacto</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
