
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from "recharts";
import { useToast } from "@/components/ui/use-toast";
import { Calculator, Download, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";

// Interface para os dados da empresa
interface CompanyData {
  revenue: number;
  expenses: number;
  sector: string;
  state: string;
  simplified: boolean;
}

// Interface para os resultados da projeção
interface ProjectionResult {
  currentYear: TaxValues;
  projectedYears: ProjectedYear[];
}

// Interface para valores dos impostos
interface TaxValues {
  pis: number;
  cofins: number;
  icms: number;
  iss: number;
  ipi: number;
  ibs: number;
  cbs: number;
  is: number;
  total: number;
}

// Interface para um ano projetado
interface ProjectedYear {
  year: number;
  pis: number;
  cofins: number;
  icms: number;
  iss: number;
  ipi: number;
  ibs: number;
  cbs: number;
  is: number;
  total: number;
}

const TaxProjectionPage = () => {
  const { toast } = useToast();
  const [companyData, setCompanyData] = useState<CompanyData>({
    revenue: 1000000,
    expenses: 600000,
    sector: "comercio",
    state: "sp",
    simplified: false,
  });
  
  const [projectionResult, setProjectionResult] = useState<ProjectionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Função para calcular os impostos atuais
  const calculateCurrentTaxes = (data: CompanyData): TaxValues => {
    // Valores base para diferentes setores e estados (simplificado)
    const sectorRates = {
      comercio: { pis: 0.0165, cofins: 0.076, icms: 0.18, iss: 0, ipi: 0.05 },
      servicos: { pis: 0.0165, cofins: 0.076, icms: 0, iss: 0.05, ipi: 0 },
      industria: { pis: 0.0165, cofins: 0.076, icms: 0.18, iss: 0, ipi: 0.10 },
    };
    
    // Ajustes por estado (simplificado para ICMS)
    const stateAdjustment = {
      sp: 1,
      rj: 0.95,
      mg: 0.9,
      rs: 1.05,
      pr: 0.95,
      outros: 1,
    };
    
    const rates = sectorRates[data.sector as keyof typeof sectorRates];
    const stateAdj = stateAdjustment[data.state as keyof typeof stateAdjustment];
    
    // Calcular impostos com base no faturamento
    const baseRevenue = data.simplified ? data.revenue * 0.32 : data.revenue;
    
    const pis = baseRevenue * rates.pis;
    const cofins = baseRevenue * rates.cofins;
    const icms = baseRevenue * rates.icms * stateAdj;
    const iss = baseRevenue * rates.iss;
    const ipi = data.sector === "industria" ? baseRevenue * rates.ipi : 0;
    
    const total = pis + cofins + icms + iss + ipi;
    
    return {
      pis,
      cofins,
      icms,
      iss,
      ipi,
      ibs: 0,
      cbs: 0,
      is: 0,
      total,
    };
  };
  
  // Função para projetar impostos após a reforma
  const projectTaxes = (data: CompanyData, currentTaxes: TaxValues): ProjectedYear[] => {
    const projectedYears: ProjectedYear[] = [];
    const baseYear = new Date().getFullYear();
    
    // Alíquotas projetadas do IBS e CBS
    const ibsRate = 0.125; // 12.5% em média para o IBS
    const cbsRate = 0.1035; // 10.35% em média para o CBS
    
    // Imposto seletivo para setores específicos
    const isRate = data.sector === "industria" ? 0.03 : 0;
    
    // Para cada ano no período de transição (até 2033)
    for (let year = baseYear + 1; year <= baseYear + 10; year++) {
      // Cálculo da transição gradual
      const transitionProgress = Math.min((year - baseYear) / 9, 1);
      
      // Redução gradual dos impostos atuais
      const pisFactor = Math.max(1 - transitionProgress, 0);
      const cofinsFactor = Math.max(1 - transitionProgress, 0);
      const icmsFactor = Math.max(1 - transitionProgress, 0);
      const issFactor = Math.max(1 - transitionProgress, 0);
      const ipiFactor = Math.max(1 - transitionProgress, 0);
      
      // Aumento gradual dos novos impostos
      const ibsFactor = transitionProgress;
      const cbsFactor = transitionProgress;
      const isFactor = transitionProgress;
      
      // Aplicar fatores de transição
      const pis = currentTaxes.pis * pisFactor;
      const cofins = currentTaxes.cofins * cofinsFactor;
      const icms = currentTaxes.icms * icmsFactor;
      const iss = currentTaxes.iss * issFactor;
      const ipi = currentTaxes.ipi * ipiFactor;
      
      // Calcular novos impostos
      const baseRevenue = data.simplified ? data.revenue * 0.32 : data.revenue;
      const ibs = baseRevenue * ibsRate * ibsFactor;
      const cbs = baseRevenue * cbsRate * cbsFactor;
      const is = baseRevenue * isRate * isFactor;
      
      // Total para o ano
      const total = pis + cofins + icms + iss + ipi + ibs + cbs + is;
      
      // Adicionar ao array de anos projetados
      projectedYears.push({
        year,
        pis,
        cofins,
        icms,
        iss,
        ipi,
        ibs,
        cbs,
        is,
        total,
      });
    }
    
    return projectedYears;
  };
  
  // Função para calcular a projeção
  const calculateProjection = () => {
    setIsCalculating(true);
    
    // Simulando um delay de processamento
    setTimeout(() => {
      try {
        // Calcular impostos atuais
        const currentTaxes = calculateCurrentTaxes(companyData);
        
        // Projetar impostos futuros
        const projectedYears = projectTaxes(companyData, currentTaxes);
        
        // Definir resultado
        setProjectionResult({
          currentYear: currentTaxes,
          projectedYears,
        });
        
        toast({
          title: "Projeção calculada com sucesso",
          description: "Os resultados estão disponíveis para análise.",
          duration: 3000,
        });
      } catch (error) {
        toast({
          title: "Erro ao calcular projeção",
          description: "Verifique os dados inseridos e tente novamente.",
          variant: "destructive",
          duration: 3000,
        });
      } finally {
        setIsCalculating(false);
      }
    }, 1000);
  };
  
  // Preparar dados para os gráficos
  const prepareChartData = () => {
    if (!projectionResult) return [];
    
    return [
      {
        year: new Date().getFullYear(),
        Atual: projectionResult.currentYear.total,
        PIS: projectionResult.currentYear.pis,
        COFINS: projectionResult.currentYear.cofins,
        ICMS: projectionResult.currentYear.icms,
        ISS: projectionResult.currentYear.iss,
        IPI: projectionResult.currentYear.ipi,
        IBS: 0,
        CBS: 0,
        IS: 0,
      },
      ...projectionResult.projectedYears.map(year => ({
        year: year.year,
        Projetado: year.total,
        PIS: year.pis,
        COFINS: year.cofins,
        ICMS: year.icms,
        ISS: year.iss,
        IPI: year.ipi,
        IBS: year.ibs,
        CBS: year.cbs,
        IS: year.is,
      })),
    ];
  };
  
  const chartData = prepareChartData();
  
  // Preparar dados para o gráfico de comparação detalhada
  const prepareDetailedComparisonData = () => {
    if (!projectionResult) return [];
    
    const currentYear = {
      name: "Sistema Atual",
      PIS: projectionResult.currentYear.pis,
      COFINS: projectionResult.currentYear.cofins,
      ICMS: projectionResult.currentYear.icms,
      ISS: projectionResult.currentYear.iss,
      IPI: projectionResult.currentYear.ipi,
      Total: projectionResult.currentYear.total,
    };
    
    // Usar o último ano projetado para comparação total
    const finalYear = projectionResult.projectedYears[projectionResult.projectedYears.length - 1];
    
    const projectedSystem = {
      name: "Sistema Novo",
      IBS: finalYear.ibs,
      CBS: finalYear.cbs,
      IS: finalYear.is,
      Total: finalYear.ibs + finalYear.cbs + finalYear.is,
    };
    
    return [currentYear, projectedSystem];
  };
  
  const detailedComparisonData = prepareDetailedComparisonData();
  
  // Calcular diferença percentual entre sistema atual e projetado
  const calculateTaxDifference = () => {
    if (!projectionResult) return 0;
    
    const currentTotal = projectionResult.currentYear.total;
    const finalYear = projectionResult.projectedYears[projectionResult.projectedYears.length - 1];
    const projectedTotal = finalYear.total;
    
    return ((projectedTotal - currentTotal) / currentTotal) * 100;
  };
  
  const taxDifference = calculateTaxDifference();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Projeção Tributária
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Calcule o impacto da reforma tributária em seu negócio ao longo dos próximos anos.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-4 space-y-6"
        >
          <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-indigo-600 dark:text-indigo-400" />
                Dados da Empresa
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Insira as informações da sua empresa para o cálculo tributário.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="revenue" className="text-slate-700 dark:text-slate-300">
                  Faturamento Anual (R$)
                </Label>
                <Input
                  id="revenue"
                  type="number"
                  value={companyData.revenue}
                  onChange={(e) => setCompanyData({ ...companyData, revenue: Number(e.target.value) || 0 })}
                  className="border-slate-200 dark:border-slate-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="expenses" className="text-slate-700 dark:text-slate-300">
                  Despesas Dedutíveis (R$)
                </Label>
                <Input
                  id="expenses"
                  type="number"
                  value={companyData.expenses}
                  onChange={(e) => setCompanyData({ ...companyData, expenses: Number(e.target.value) || 0 })}
                  className="border-slate-200 dark:border-slate-700"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sector" className="text-slate-700 dark:text-slate-300">
                  Setor de Atuação
                </Label>
                <Select
                  value={companyData.sector}
                  onValueChange={(value) => setCompanyData({ ...companyData, sector: value })}
                >
                  <SelectTrigger id="sector" className="border-slate-200 dark:border-slate-700">
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comercio">Comércio</SelectItem>
                    <SelectItem value="servicos">Serviços</SelectItem>
                    <SelectItem value="industria">Indústria</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state" className="text-slate-700 dark:text-slate-300">
                  Estado
                </Label>
                <Select
                  value={companyData.state}
                  onValueChange={(value) => setCompanyData({ ...companyData, state: value })}
                >
                  <SelectTrigger id="state" className="border-slate-200 dark:border-slate-700">
                    <SelectValue placeholder="Selecione o estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="mg">Minas Gerais</SelectItem>
                    <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                    <SelectItem value="pr">Paraná</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <Label htmlFor="simplified" className="text-slate-700 dark:text-slate-300">
                    Regime Simplificado
                  </Label>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Simples Nacional ou regime presumido
                  </p>
                </div>
                <Switch
                  id="simplified"
                  checked={companyData.simplified}
                  onCheckedChange={(checked) => setCompanyData({ ...companyData, simplified: checked })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={calculateProjection} 
                disabled={isCalculating}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {isCalculating ? "Calculando..." : "Calcular Projeção"}
              </Button>
            </CardFooter>
          </Card>
          
          {projectionResult && (
            <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-white">
                  Resumo da Projeção
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Carga Tributária Atual</p>
                    <p className="text-xl font-semibold text-slate-900 dark:text-white">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.currentYear.total)}
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Carga Tributária Projetada</p>
                    <p className="text-xl font-semibold text-slate-900 dark:text-white">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.projectedYears[projectionResult.projectedYears.length - 1].total)}
                    </p>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Variação Estimada</p>
                  <p className={`text-xl font-semibold ${taxDifference >= 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    {taxDifference >= 0 ? '+' : ''}{taxDifference.toFixed(2)}%
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:border-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-950"
                  onClick={() => {
                    toast({
                      title: "Em desenvolvimento",
                      description: "Exportação de relatório estará disponível em breve.",
                      duration: 3000,
                    });
                  }}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Relatório
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-8"
        >
          {projectionResult ? (
            <Tabs defaultValue="evolucao" className="space-y-6">
              <TabsList className="grid grid-cols-3 gap-4">
                <TabsTrigger value="evolucao" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600 dark:data-[state=active]:bg-indigo-950 dark:data-[state=active]:text-indigo-400">
                  Evolução Temporal
                </TabsTrigger>
                <TabsTrigger value="comparativo" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600 dark:data-[state=active]:bg-indigo-950 dark:data-[state=active]:text-indigo-400">
                  Comparativo de Sistemas
                </TabsTrigger>
                <TabsTrigger value="detalhado" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-600 dark:data-[state=active]:bg-indigo-950 dark:data-[state=active]:text-indigo-400">
                  Detalhamento por Imposto
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="evolucao" className="space-y-4">
                <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white">
                      Evolução da Carga Tributária
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      Projeção ao longo dos anos de transição da reforma tributária.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={chartData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="year" stroke="#94a3b8" />
                          <YAxis
                            stroke="#94a3b8"
                            tickFormatter={(value) => new Intl.NumberFormat('pt-BR', { notation: 'compact', compactDisplay: 'short', maximumFractionDigits: 1 }).format(value)}
                          />
                          <Tooltip
                            formatter={(value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value))}
                            labelFormatter={(label) => `Ano: ${label}`}
                          />
                          <Legend />
                          <Line type="monotone" dataKey="Atual" stroke="#4f46e5" activeDot={{ r: 8 }} strokeWidth={3} />
                          <Line type="monotone" dataKey="Projetado" stroke="#06b6d4" activeDot={{ r: 8 }} strokeWidth={3} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Ano Inicial
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {new Date().getFullYear()}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Ano Final
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {new Date().getFullYear() + 10}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Valor Inicial
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(projectionResult.currentYear.total)}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Valor Final
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-2xl font-bold ${taxDifference >= 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(projectionResult.projectedYears[projectionResult.projectedYears.length - 1].total)}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="comparativo">
                <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white">
                      Comparativo entre Sistemas Tributários
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      Sistema atual vs. sistema após a reforma tributária.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={detailedComparisonData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="name" stroke="#94a3b8" />
                          <YAxis 
                            stroke="#94a3b8"
                            tickFormatter={(value) => new Intl.NumberFormat('pt-BR', { notation: 'compact', compactDisplay: 'short', maximumFractionDigits: 1 }).format(value)}
                          />
                          <Tooltip
                            formatter={(value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value))}
                          />
                          <Legend />
                          <Bar dataKey="PIS" stackId="a" fill="#60a5fa" />
                          <Bar dataKey="COFINS" stackId="a" fill="#818cf8" />
                          <Bar dataKey="ICMS" stackId="a" fill="#a5b4fc" />
                          <Bar dataKey="ISS" stackId="a" fill="#c4b5fd" />
                          <Bar dataKey="IPI" stackId="a" fill="#d8b4fe" />
                          <Bar dataKey="IBS" stackId="a" fill="#0ea5e9" />
                          <Bar dataKey="CBS" stackId="a" fill="#06b6d4" />
                          <Bar dataKey="IS" stackId="a" fill="#0891b2" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 className="font-medium text-slate-900 dark:text-white">Sistema Atual</h4>
                        <p className="font-medium text-slate-900 dark:text-white">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.currentYear.total)}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                        <h4 className="font-medium text-slate-900 dark:text-white">Sistema Novo</h4>
                        <p className="font-medium text-slate-900 dark:text-white">
                          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.projectedYears[projectionResult.projectedYears.length - 1].ibs + 
                            projectionResult.projectedYears[projectionResult.projectedYears.length - 1].cbs + 
                            projectionResult.projectedYears[projectionResult.projectedYears.length - 1].is)}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <h4 className="font-semibold text-slate-900 dark:text-white">Variação</h4>
                        <p className={`font-semibold ${taxDifference >= 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                          {taxDifference >= 0 ? '+' : ''}{taxDifference.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="detalhado">
                <Card className="border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white">
                      Detalhamento por Imposto
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      Evolução de cada imposto ao longo do período de transição.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={chartData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="year" stroke="#94a3b8" />
                          <YAxis 
                            stroke="#94a3b8"
                            tickFormatter={(value) => new Intl.NumberFormat('pt-BR', { notation: 'compact', compactDisplay: 'short', maximumFractionDigits: 1 }).format(value)}
                          />
                          <Tooltip
                            formatter={(value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value))}
                            labelFormatter={(label) => `Ano: ${label}`}
                          />
                          <Legend />
                          <Line type="monotone" dataKey="PIS" stroke="#60a5fa" />
                          <Line type="monotone" dataKey="COFINS" stroke="#818cf8" />
                          <Line type="monotone" dataKey="ICMS" stroke="#a5b4fc" />
                          <Line type="monotone" dataKey="ISS" stroke="#c4b5fd" />
                          <Line type="monotone" dataKey="IPI" stroke="#d8b4fe" />
                          <Line type="monotone" dataKey="IBS" stroke="#0ea5e9" />
                          <Line type="monotone" dataKey="CBS" stroke="#06b6d4" />
                          <Line type="monotone" dataKey="IS" stroke="#0891b2" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                          Impostos Atuais
                        </h4>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">PIS</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.currentYear.pis)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">COFINS</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.currentYear.cofins)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">ICMS</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.currentYear.icms)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">ISS</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.currentYear.iss)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">IPI</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.currentYear.ipi)}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                          Impostos Novos (Final)
                        </h4>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">IBS</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.projectedYears[projectionResult.projectedYears.length - 1].ibs)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">CBS</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.projectedYears[projectionResult.projectedYears.length - 1].cbs)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-slate-600 dark:text-slate-400">Imposto Seletivo</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(projectionResult.projectedYears[projectionResult.projectedYears.length - 1].is)}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-2 mt-4">
                            <p className="text-sm font-medium text-slate-900 dark:text-white">Total Novo</p>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                                projectionResult.projectedYears[projectionResult.projectedYears.length - 1].ibs +
                                projectionResult.projectedYears[projectionResult.projectedYears.length - 1].cbs +
                                projectionResult.projectedYears[projectionResult.projectedYears.length - 1].is
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card className="border border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col justify-center items-center py-16">
              <div className="text-center space-y-4">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-full p-4 inline-flex">
                  <BarChart3 className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 dark:text-white">
                  Insira os dados para gerar a projeção
                </h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Preencha os dados da empresa no formulário ao lado e clique em "Calcular Projeção" para visualizar os gráficos e análises.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      toast({
                        title: "Dica",
                        description: "Para uma simulação rápida, utilize os valores padrão já preenchidos no formulário.",
                        duration: 5000,
                      });
                    }}
                    className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:border-indigo-900 dark:text-indigo-400 dark:hover:bg-indigo-950"
                  >
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Precisa de ajuda?
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TaxProjectionPage;
