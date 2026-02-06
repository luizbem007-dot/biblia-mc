"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function VideoSection() {
  return (
    <section className="section section-vsl" aria-label="VSL">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex max-w-4xl flex-col gap-6 text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            ⚠️ Se Você Já Desistiu de Ler a Bíblia Completa, Assista Isso Antes de Tentar de Novo
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title text-cream">
            &quot;Quando Ele Pregava,
            <br />
            Seu Rosto Brilhava Como de Um Anjo&quot;
          </motion.h2>
          <motion.p variants={fadeUp} className="section-text text-cream/90">
            Aos 29 anos, Robert Murray McCheyne criou o que John Stott chamou de
            &quot;o melhor presente da minha vida espiritual&quot;.
            Um método simples de seguir e profundo o suficiente para marcar gerações.
            <br />
            <br />
            Neste vídeo, pastores Renata e Jairo Carvalho revelam:
          </motion.p>
          <motion.div variants={fadeUp} className="video-shell">
            <div className="video-frame" aria-label="Vídeo principal">
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/mlwfj4ffxgM"
                  title="Vídeo principal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="grid gap-4 text-left sm:grid-cols-2">
            <div className="check-item">→ O segredo das conexões diárias AT ↔ NT</div>
            <div className="check-item">→ Por que Salmos 2x por ano muda sua oração</div>
            <div className="check-item">→ Histórias reais de famílias transformadas</div>
            <div className="check-item">→ Por que começar HOJE é melhor que esperar janeiro</div>
          </motion.div>
          <motion.div variants={fadeUp} className="trust-badges">
            <span>✅ Usado em todos os grandes avivamentos da história</span>
            <span>✅ Aprovado por Spurgeon, Stott, D.A. Carson, Martyn Lloyd-Jones</span>
            <span>✅ 180 anos. 50+ países. Milhares de vidas transformadas.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
