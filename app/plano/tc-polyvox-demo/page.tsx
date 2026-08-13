import type { Metadata } from "next";
import { PlanTemplate } from "../PlanTemplate";
import { polyvoxDemoPlan } from "./plan";

export const metadata: Metadata = {
  title: "Projeto demonstrativo Polyvox | Toca Certo",
  description: "Projeto demonstrativo de um sistema Polyvox completo dentro de R$ 3.000.",
  robots: { index: false, follow: false },
};

export default function PolyvoxDemoPlanPage() {
  return <PlanTemplate plan={polyvoxDemoPlan} />;
}
