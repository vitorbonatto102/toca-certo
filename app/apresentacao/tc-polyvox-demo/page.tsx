import type { Metadata } from "next";
import { PlanStoryTemplate } from "../../plano-2/PlanStoryTemplate";
import { polyvoxDemoPlan } from "../../plano/tc-polyvox-demo/plan";

export const metadata: Metadata = {
  title: "Apresentação Polyvox | Toca Certo",
  description: "Apresentação de um projeto demonstrativo Toca Certo para a Polyvox.",
  robots: { index: false, follow: false },
};

export default function PolyvoxDemoPresentationPage() {
  return <PlanStoryTemplate plan={polyvoxDemoPlan} planHref="/plano/tc-polyvox-demo" />;
}
