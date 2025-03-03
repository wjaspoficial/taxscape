
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HelpCircle, BookOpen } from "lucide-react";

export const FaqTab: React.FC = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};
