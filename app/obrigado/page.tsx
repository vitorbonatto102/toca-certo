import type { Metadata } from "next";
import Link from "next/link";
import styles from "./Obrigado.module.css";

export const metadata: Metadata = {
  title: "Compra confirmada | Toca Certo",
  description: "Preencha o questionário para começarmos a preparar seu plano Toca Certo.",
  robots: { index: false, follow: false },
};

const steps = [
  ["01", "Você preenche o questionário", "Conte sobre seu orçamento, espaço, preferências e equipamentos atuais."],
  ["02", "Eu analiso suas respostas", "Cada informação é considerada individualmente na construção do seu sistema."],
  ["03", "Confirmamos o que for necessário", "Se surgir alguma dúvida, entrarei em contato antes de finalizar a análise."],
  ["04", "Você recebe seu plano personalizado", "A entrega será enviada por e-mail em até 5 dias úteis após o questionário completo."],
];

export default function ObrigadoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />

      <section className={styles.shell}>
        <header className={styles.brand}>
          <img src="/icon.png" alt="" width="54" height="54" />
          <div>
            <strong>Toca Certo</strong>
            <span>Plano personalizado para seu sistema de vinil</span>
          </div>
        </header>

        <div className={styles.hero}>
          <div className={styles.confirmation} aria-hidden="true">✓</div>
          <span className={styles.eyebrow}>Compra confirmada</span>
          <h1>Obrigado por confiar no Toca Certo.</h1>
          <p>
            Agora preciso conhecer sua realidade para preparar um plano realmente feito para você.
            O próximo passo é preencher o questionário.
          </p>
          <Link className={styles.primaryButton} href="/questionario">
            Preencher meu questionário <span>→</span>
          </Link>
          <small>Leva cerca de 8 a 12 minutos. Você pode salvar e continuar depois.</small>
        </div>

        <section className={styles.process} aria-labelledby="como-funciona">
          <div className={styles.sectionHeading}>
            <span>Próximos passos</span>
            <h2 id="como-funciona">Como seu projeto começa</h2>
          </div>

          <ol className={styles.steps}>
            {steps.map(([number, title, copy]) => (
              <li key={number}>
                <span className={styles.stepNumber}>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className={styles.reminder}>
          <span aria-hidden="true">⌑</span>
          <div>
            <strong>Prefere responder depois?</strong>
            <p>Salve esta página nos favoritos. O questionário continuará disponível por este mesmo endereço.</p>
          </div>
          <Link href="/questionario">Abrir questionário</Link>
        </aside>

        <footer className={styles.footer}>
          <span>Toca Certo · por Vitor Bonatto</span>
          <a href="https://bempronto.vercel.app/" target="_blank" rel="noopener noreferrer">Site por BemPronto ↗</a>
        </footer>
      </section>
    </main>
  );
}
