
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, BarChart3, FileStack } from "lucide-react";
import { motion } from "framer-motion";

export const Features: React.FC = () => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <Card className="border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300 mb-4">
            <Calculator className="h-6 w-6" />
          </div>
          <CardTitle className="text-slate-900 dark:text-white">Cálculo Preciso</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Simulações baseadas nas últimas atualizações da reforma tributária.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <Card className="border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300 mb-4">
            <BarChart3 className="h-6 w-6" />
          </div>
          <CardTitle className="text-slate-900 dark:text-white">Análise Comparativa</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Compare cenários antes e depois da reforma para melhor planejamento.
          </CardDescription>
        </CardHeader>
      </Card>
      
      <Card className="border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader>
          <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300 mb-4">
            <FileStack className="h-6 w-6" />
          </div>
          <CardTitle className="text-slate-900 dark:text-white">Relatórios Detalhados</CardTitle>
          <CardDescription className="text-slate-600 dark:text-slate-400">
            Obtenha relatórios completos para auxiliar em suas decisões empresariais.
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.section>
  );
};
