
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, BarChart3, Calculator, FileStack, Info } from "lucide-react";
import TaxProjectionPage from "./TaxProjection";
import { motion } from "framer-motion";

export default function Index() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
    >
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto py-4 px-4 sm:px-6 md:px-8">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-xl font-medium text-slate-900 dark:text-white">TaxScape</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href="#" 
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("inicio");
                }}
              >
                Início
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("projecao");
                }}
              >
                Projeção Tributária
              </a>
              <a 
                href="#" 
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Em desenvolvimento",
                    description: "Esta funcionalidade estará disponível em breve.",
                    duration: 3000,
                  });
                }}
              >
                Sobre a Reforma
              </a>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-slate-700 dark:text-slate-300">
                <span className="sr-only">Abrir menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </Button>
            </div>
          </motion.div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="hidden">
            <TabsTrigger value="inicio">Início</TabsTrigger>
            <TabsTrigger value="projecao">Projeção Tributária</TabsTrigger>
          </TabsList>
          
          <TabsContent value="inicio" className="space-y-8">
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
                  onClick={() => {
                    toast({
                      title: "Em desenvolvimento",
                      description: "Conteúdo detalhado sobre a reforma tributária estará disponível em breve.",
                      duration: 3000,
                    });
                  }}
                >
                  Saiba mais sobre a reforma
                </Button>
              </div>
            </motion.section>
          </TabsContent>
          
          <TabsContent value="projecao">
            <TaxProjectionPage />
          </TabsContent>
        </Tabs>
      </main>
      
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
    </motion.div>
  );
}
