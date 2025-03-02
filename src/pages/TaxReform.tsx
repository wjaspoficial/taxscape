
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FileText, Info, AlertTriangle, HelpCircle, BookOpen, Calculator, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function TaxReform() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-6xl"
    >
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

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="timeline">Cronograma</TabsTrigger>
          <TabsTrigger value="impacts">Impactos</TabsTrigger>
          <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
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
        </TabsContent>
        
        <TabsContent value="timeline" className="space-y-6">
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
        </TabsContent>
        
        <TabsContent value="impacts" className="space-y-6">
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
        </TabsContent>
        
        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <CardTitle>Perguntas Frequentes</CardTitle>
              </div>
              <CardDescription>
                Esclarecimentos sobre os principais pontos da reforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">A reforma vai aumentar a carga tributária?</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  A reforma foi concebida para ser neutra em termos de arrecadação total. O objetivo não é aumentar a carga tributária, mas redistribuí-la de forma mais eficiente e justa. A alíquota de referência será definida para manter a arrecadação em níveis equivalentes aos atuais.
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">O que acontece com os benefícios fiscais existentes?</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  A reforma prevê a extinção gradual da maioria dos benefícios fiscais atuais. No entanto, alguns setores e atividades terão regimes diferenciados ou alíquotas reduzidas, como saúde, educação, transporte público e produtos da cesta básica.
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Como funcionará o sistema de cashback?</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  O sistema permitirá a devolução de parte dos impostos pagos por famílias de baixa renda, especialmente em itens essenciais. A implementação será feita por meio de mecanismos digitais vinculados a programas de identificação social, como o Cadastro Único.
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Qual será a alíquota do novo IVA?</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  A alíquota padrão ainda não foi definida oficialmente, mas estimativas sugerem que ficará entre 25% e 27%. Esta será a alíquota de referência, com valores reduzidos para setores específicos. A alíquota exata será calculada para manter a neutralidade da carga tributária.
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white">Como as empresas devem se preparar para a transição?</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  As empresas devem considerar:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>Atualização dos sistemas de gestão fiscal e contábil</li>
                  <li>Capacitação de equipes para o novo sistema</li>
                  <li>Revisão de modelos de negócios e cadeias produtivas</li>
                  <li>Avaliação do impacto da não-cumulatividade plena</li>
                  <li>Planejamento financeiro para o período de transição</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex items-center justify-center p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
            <BookOpen className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              Para mais informações, consulte o texto oficial da Emenda Constitucional nº 132/2023 e as leis complementares.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
