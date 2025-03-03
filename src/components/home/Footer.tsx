
import React from "react";
import { Calculator } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-16 py-8 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Calculator className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <p className="text-sm font-medium text-slate-900 dark:text-white">TaxScape</p>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} TaxScape. Todas as projeções são estimativas baseadas nas informações disponíveis.
          </p>
        </div>
      </div>
    </footer>
  );
};
