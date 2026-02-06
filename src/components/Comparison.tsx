"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const common = [
  "Você escolhe (e se perde)",
  "AT e NT separados",
  "3-5 anos (se terminar)",
  "Rotina instável",
  "Começa em janeiro",
  "Comentários que distraem",
];

const mccheyne = [
  "Plano diário pronto",
  "Conexões AT ↔ NT todo dia",
  "1 ano garantido",
  "Disciplina que funciona",
  "Começa HOJE",
  "Zero ruído, só Palavra",
];

export default function Comparison() {
  return (
    <section className="section section-compare" aria-label="Diferencial">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="section-title">
            Você Tem 2 Escolhas. Uma Funciona. A Outra Você Já Tentou 5x.
          </h2>
          <p className="section-text">Escaneie e decida.</p>
        </motion.div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="compare-card muted"
          >
            <h3>❌ Bíblia Comum</h3>
            <ul>
              {common.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="compare-card luminous"
          >
            <h3>✅ Método McCheyne</h3>
            <ul>
              {mccheyne.map((item) => (
                <li key={item}>
                  <CheckCircle2 className="icon-gold" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
        <p className="section-text mt-8 text-center">
          A pergunta não é mais "qual é melhor".
          A pergunta é: quanto tempo mais você vai perder tentando do jeito errado?
        </p>
      </div>
    </section>
  );
}
