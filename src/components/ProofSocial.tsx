"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function ProofSocial() {
  const figures = [
    {
      name: "Charles Spurgeon",
      quote:
        "Este método moldou minha disciplina espiritual desde criança. Tudo que preguei veio dessa fonte diária."
    },
    {
      name: "John Stott",
      quote:
        "Agradeço ao Dr. Martyn Lloyd-Jones por me apresentar McCheyne. Foi o melhor presente que recebi para minha vida devocional."
    },
    {
      name: "D.A. Carson",
      quote:
        "Escrevi um livro inteiro ('Por Amor a Deus' - CPAD) só para convencer as pessoas a usarem este método."
    },
  ];

  return (
    <section className="section section-proof" aria-label="Prova social">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="section-title text-gold">
            Eles Não São Famosos Por Acaso. Eles Leram Assim.
          </h2>
          <p className="section-text">180 anos. Gerações de pregadores. Um único método.</p>
        </motion.div>
        <div className="proof-footer">
          ⚡ Usado em 50+ países · 🔥 Base de todos os avivamentos · 📖 180 anos provando que funciona
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {figures.map((figure) => (
            <article key={figure.name} className="museum-card">
              <h3>{figure.name}</h3>
              <p>{figure.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
