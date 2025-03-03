
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import TaxProjectionPage from "./TaxProjection";
import { Header } from "@/components/home/Header";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ReformInfo } from "@/components/home/ReformInfo";
import { Footer } from "@/components/home/Footer";

export default function Index() {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
    >
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 md:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="hidden">
            <TabsTrigger value="inicio">Início</TabsTrigger>
            <TabsTrigger value="projecao">Projeção Tributária</TabsTrigger>
          </TabsList>
          
          <TabsContent value="inicio" className="space-y-8">
            <Hero setActiveTab={setActiveTab} />
            <Features />
            <ReformInfo />
          </TabsContent>
          
          <TabsContent value="projecao">
            <TaxProjectionPage />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </motion.div>
  );
}
