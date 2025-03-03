
import React from "react";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center max-w-3xl mx-auto py-12"
    >
      <div className="inline-block p-2 bg-indigo-100 rounded-full text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 mb-4">
        <Calculator className="h-6 w-6" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 md:text-5xl">
        Projeção Tributária Pós-Reforma
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        Simule o impacto da reforma tributária em seus negócios com nossa ferramenta de projeção avançada.
      </p>
      <Button 
        size="lg" 
        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8"
        onClick={() => setActiveTab("projecao")}
      >
        Iniciar Projeção <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.section>
  );
};
