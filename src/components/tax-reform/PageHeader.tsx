
import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const PageHeader: React.FC = () => {
  return (
    <div className="mb-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Voltar para a página inicial
      </Link>
      
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-2 mb-3"
      >
        <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Sobre a Reforma Tributária
        </h1>
      </motion.div>
      <p className="text-xl text-slate-600 dark:text-slate-400">
        Entenda as principais mudanças e impactos da reforma tributária no Brasil
      </p>
    </div>
  );
};
