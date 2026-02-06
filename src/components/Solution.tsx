"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";

export default function Solution() {
  return (
    <section className="section" aria-label="Solução">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          data-speed="0.3"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="solution-image"
        >
          <Image
            src="/images/biblia-aberta.webp"
            alt="Bíblia aberta mostrando divisões familiar e pessoal"
            width={640}
            height={800}
          />
        </motion.div>
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <span className="eyebrow">🎯 O Que Fez Spurgeon Virar Spurgeon</span>
          <h2 className="section-title">
            A Única Bíblia Que Te Guia, Dia Após Dia,
            <br />
            Do Gênesis ao Apocalipse. Sem Dúvidas. Sem Desculpas.
          </h2>
          <p className="section-text">
            1842. Escócia. Um jovem pastor chamado Robert Murray McCheyne
            teve uma ideia simples e poderosa: ler os 4 COMEÇOS ao mesmo tempo.
            <br />
            → Gênesis 1 · Mateus 1 · Esdras 1 · Atos 1
            <br />
            <br />
            Resultado? As Escrituras começaram a CONVERSAR.
            O Antigo explicava o Novo. O Novo iluminava o Antigo.
            <br />
            <br />
            E famílias inteiras passaram a ler a Bíblia completa — JUNTAS — em 1 ano.
          </p>
          <div className="space-y-4">
            <motion.div variants={fadeUp} className="feature-item">
              <span>🔹</span>
              <div>
                <h3>Leitura Familiar + Pessoal Todo Dia</h3>
                <p>
                  Dois momentos por dia: um com a família (mesa, sala, cozinha),
                  outro com Deus (seu quarto, sua Bíblia, sua alma nua).
                  <br />
                  Resultado: lares alinhados, filhos memorando Salmos, pais liderando.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="feature-item">
              <span>🔹</span>
              <div>
                <h3>Conexões Simultâneas AT ↔️ NT</h3>
                <p>
                  DILÚVIO em Gênesis. BATISMO em Mateus. RUÍNA em Reis. RESTAURAÇÃO em Atos.
                  Os textos dançam juntos — e você finalmente ENTENDE.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="feature-item">
              <span>🔹</span>
              <div>
                <h3>Zero Comentários. 100% Deus Falando.</h3>
                <p>
                  Sem notas que distraem. É você + Espírito Santo + texto.
                  Na leitura devocional, o TEXTO LÊ VOCÊ.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="feature-item">
              <span>🔹</span>
              <div>
                <h3>Comece Hoje. Não Janeiro.</h3>
                <p>
                  Recebeu em 20 de abril? Começa em 20 de abril.
                  Em 365 dias, você fecha o ciclo. Simples.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="highlight-box">
            💡 VERSÃO ACF — Por Que Isso Importa:
            <br />
            Os grandes avivamentos usaram traduções fiéis ao original (Textus Receptus).
            A ACF é dessa linhagem. História, fidelidade e avivamento.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
