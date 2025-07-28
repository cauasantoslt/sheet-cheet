import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const sections = [
  {
    key: "divisao",
    title: "Divisão dos Dados",
    content: `Utilize o train_test_split para dividir seus dados em treino, validação e teste de forma estratificada:

from sklearn.model_selection import train_test_split
x_treino, x_val, y_treino, y_val = train_test_split(x, y, stratify=y)`
  },
  {
    key: "modelo",
    title: "Criação do Modelo",
    content: `Importe e instancie modelos como DecisionTreeClassifier ou RandomForestClassifier:

from sklearn.tree import DecisionTreeClassifier
modelo = DecisionTreeClassifier(max_depth=10)`
  },
  {
    key: "treinamento",
    title: "Treinamento",
    content: `Ajuste o modelo com os dados de treino:

modelo.fit(x_treino, y_treino)`
  },
  {
    key: "avaliacao",
    title: "Avaliação e Previsão",
    content: `Avalie o desempenho do modelo com os dados de validação:

modelo.score(x_val, y_val)
y_previsto = modelo.predict(x_val)`
  },
  {
    key: "matriz",
    title: "Matriz de Confusão",
    content: `Visualize os erros e acertos com a matriz de confusão:

from sklearn.metrics import ConfusionMatrixDisplay
ConfusionMatrixDisplay.from_predictions(y_val, y_previsto)`
  },
  {
    key: "metricas",
    title: "Métricas de Desempenho",
    content: `Calcule métricas como precisão, recall e F1-score:

from sklearn.metrics import accuracy_score, precision_score
accuracy_score(y_val, y_previsto)`
  },
  {
    key: "graficos",
    title: "Gráficos de Avaliação",
    content: `Gere curvas ROC e Precision-Recall:

from sklearn.metrics import RocCurveDisplay
RocCurveDisplay.from_predictions(y_val, y_previsto)`
  },
  {
    key: "balanceamento",
    title: "Balanceamento de Dados",
    content: `Corrija desbalanceamento com SMOTE ou NearMiss:

from imblearn.over_sampling import SMOTE
x_bal, y_bal = SMOTE().fit_resample(x, y)`
  },
  {
    key: "pipeline",
    title: "Pipeline de Dados",
    content: `Organize o processo com Pipeline:

from imblearn.pipeline import Pipeline
pipeline = Pipeline([('oversample', SMOTE()), ('modelo', modelo)])`
  },
  {
    key: "validacao",
    title: "Validação Cruzada",
    content: `Avalie com KFold, StratifiedKFold ou LeaveOneOut:

from sklearn.model_selection import cross_val_score
cross_val_score(modelo, x, y, cv=5)`
  }
];

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("divisao");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Validação de Modelos e Métricas de Desempenho
      </h1>
      <Tabs defaultValue="divisao" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap justify-center mb-4 gap-2">
          {sections.map(({ key, title }) => (
            <TabsTrigger key={key} value={key} className="capitalize">
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollArea className="h-[400px] border rounded-lg bg-white shadow-md">
          {sections.map(({ key, content }) => (
            <TabsContent key={key} value={key} className="p-4">
              <Card>
                <CardContent className="whitespace-pre-wrap p-4 text-sm">
                  {content}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>
    </div>
  );
}