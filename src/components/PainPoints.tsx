"use client";

import { motion } from "framer-motion";
import { BatteryLow, Compass, Clock } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const cards = [
  {
    Icon: Clock,
    title: "😓 Sem Rotina Clara",
    text: "Caos espiritual → ✨ Método: Disciplina guiada",
  },
  {
    Icon: Compass,
    title: "🤔 Texto Sem Conexão",
    text: "Confusão total → 🔗 Método: Conexão profunda AT ↔ NT",
  },
  {
    Icon: BatteryLow,
    title: "💔 Começou 5x, Desistiu 5x",
    text: "Culpa acumulada → ⚡ Método: Constância que funciona",
  },
];

export default function PainPoints() {
  return (
    <section className="section section-pain" aria-label="Jornada interativa">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <span className="eyebrow">Você Reconhece Algum Desses?</span>
          <h2 className="section-title">
            Cansou de Começar em Gênesis
            <br />
            e Morrer em Levítico?
          </h2>
          <p className="section-text">
            A verdade? Não é falta de fé. É falta de método.
            <br />
            Mas isso muda HOJE. ⬇️
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ Icon, title, text }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="pain-card minimalist-card"
            >
              <Icon className="icon-gold" size={32} />
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
