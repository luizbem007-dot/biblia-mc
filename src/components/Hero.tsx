"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <section className="section hero-section" aria-label="Hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="hero-content"
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Descobrir o Segredo
            </motion.span>
            <motion.h1 variants={fadeUp} className="hero-title">
              Em 365 Dias, Você Lê a Bíblia Inteira.
              <br />
              No mesmo método que formou Spurgeon e Stott.
              <br />
              <span className="hero-soft">Ou você continua abrindo aleatoriamente…</span>
              <span className="hero-soft">e desistindo em Levítico.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-subtitle">
              O método de 1842 que formou os maiores pregadores da história
              está pela primeira vez impresso em português.
              <br />
              E ele não perdoa: ou você termina, ou você termina.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions">
              <a className="btn-primary" href="#oferta">
                🔥 QUERO LER A BÍBLIA INTEIRA EM 2025
              </a>
              <a className="btn-outline" href="#cores">
                Ver cores disponíveis
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="hero-stats">
              <div className="stat-card">
                <strong>📖 365 Dias</strong>
                <span>Impossível se perder</span>
              </div>
              <div className="stat-card">
                <strong>🔗 4 Leituras/Dia</strong>
                <span>AT e NT conversam</span>
              </div>
              <div className="stat-card">
                <strong>✨ Método McCheyne</strong>
                <span>Desde 1842</span>
              </div>
              <div className="stat-card">
                <strong>🛡️ Versão ACF</strong>
                <span>Texto dos avivamentos</span>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className="trust-line">
              Usado por gigantes. Testado por 180 anos. Agora na sua mão.
            </motion.p>
            <motion.p variants={fadeUp} className="hero-footnote">
              🔒 Compra 100% Segura · 🎁 Frete GRÁTIS · 📦 Chega em 7-15 dias
            </motion.p>
          </motion.div>
          <motion.div variants={fadeUp} className="hero-visual">
            <div className="hero-blob" aria-hidden="true" />
            <div className="hero-media" data-speed="0.2">
              <video
                ref={videoRef}
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Vídeo principal"
              >
                <source src="/images/video.webm" type="video/webm" />
                Seu navegador não suporta vídeo.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
