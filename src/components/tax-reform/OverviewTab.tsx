
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";

export const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <CardTitle>Principais Mudanças</CardTitle>
          </div>
          <CardDescription>
            Entenda os fundamentos da nova estrutura tributária
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">IVA Dual</h3>
            <p className="text-slate-600 dark:text-slate-400">
              A reforma implementa um sistema de Imposto sobre Valor Agregado (IVA) dual, composto por:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Contribuição sobre Bens e Serviços (CBS)</strong> - Imposto federal que substituirá o PIS e a Cofins.</li>
              <li><strong>Imposto sobre Bens e Serviços (IBS)</strong> - Imposto compartilhado entre estados e municípios que substituirá o ICMS e o ISS.</li>
            </ul>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">Imposto Seletivo</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Também conhecido como "imposto do pecado", será cobrado sobre produtos prejudiciais à saúde e ao meio ambiente, como:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Bebidas alcoólicas</li>
              <li>Cigarros</li>
              <li>Bebidas açucaradas</li>
              <li>Veículos poluentes</li>
            </ul>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">Cashback para Baixa Renda</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Sistema de devolução de parte dos impostos pagos por famílias de baixa renda em produtos essenciais, especialmente alimentos e itens da cesta básica.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <CardTitle>Objetivos da Reforma</CardTitle>
          </div>
          <CardDescription>
            Propósitos e metas da reestruturação tributária
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-3 text-slate-600 dark:text-slate-400">
            <li><strong>Simplificação</strong> - Reduzir a complexidade do sistema tributário brasileiro, diminuindo custos administrativos e de conformidade.</li>
            <li><strong>Transparência</strong> - Tornar mais claro quanto de imposto está sendo cobrado em cada produto ou serviço.</li>
            <li><strong>Neutralidade</strong> - Eliminar distorções econômicas causadas pelo sistema atual, promovendo decisões empresariais baseadas em eficiência e não em vantagens tributárias.</li>
            <li><strong>Não-cumulatividade</strong> - Evitar a tributação em cascata, onde impostos são cobrados sobre impostos já incluídos no preço.</li>
            <li><strong>Equidade</strong> - Distribuir a carga tributária de forma mais justa entre os diferentes setores da economia e faixas de renda.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
