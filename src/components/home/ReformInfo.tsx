
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ReformInfo: React.FC = () => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="py-12"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Entenda a Reforma Tributária
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A reforma tributária traz mudanças significativas para o cenário fiscal brasileiro. Conheça os principais pontos.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white flex items-center">
              <Info className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
              Imposto sobre Valor Agregado (IVA)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Substitui cinco tributos atuais (PIS, Cofins, IPI, ICMS e ISS) por dois impostos: a Contribuição sobre Bens e Serviços (CBS) federal e o Imposto sobre Bens e Serviços (IBS) de estados e municípios.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white flex items-center">
              <Info className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
              Imposto Seletivo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Conhecido como "imposto do pecado", incidirá sobre produtos prejudiciais à saúde e ao meio ambiente, como cigarros, bebidas alcoólicas e veículos poluentes.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white flex items-center">
              <Info className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
              Período de Transição
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              A implementação será gradual, com um período de transição de 8 anos para a substituição completa dos tributos atuais pelo novo sistema.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader>
            <CardTitle className="text-slate-900 dark:text-white flex items-center">
              <Info className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
              Cashback para Baixa Renda
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-400">
              Sistema de devolução parcial de impostos para famílias de baixa renda em produtos essenciais, como alimentos e itens de cesta básica.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-10">
        <Button 
          variant="outline" 
          size="lg"
          className="rounded-full border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:border-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-950"
          asChild
        >
          <Link to="/tax-reform">
            Saiba mais sobre a reforma
          </Link>
        </Button>
      </div>
    </motion.section>
  );
};
