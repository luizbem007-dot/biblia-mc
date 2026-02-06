"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Offer() {
  return (
    <section id="oferta" className="section section-offer" aria-label="Oferta">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <span className="badge">⏰ Última Chamada Para Começar em 2025</span>
          <h2 className="section-title">
            Ou Você Age Agora,
            <br />
            Ou Repete 2024.
          </h2>
        </motion.div>
        <div className="pricing-box">
          <p className="text-sm">De R$ 147,00 por apenas:</p>
          <p className="price">R$ 97,00</p>
          <p className="text-sm">ou 10x de R$ 9,70 sem juros</p>
          <div className="bonus-list">
            <p>🎁 Você recebe HOJE:</p>
            <ul>
              <li>✅ Frete GRÁTIS (economize R$ 25)</li>
              <li>✅ Embalagem presenteável</li>
              <li>✅ Rastreamento completo</li>
              <li>✅ Suporte via WhatsApp</li>
            </ul>
          </div>
          <a className="btn-primary" href="#oferta">🔥 SIM, QUERO TERMINAR A BÍBLIA EM 2025</a>
          <p className="text-xs">🔒 Compra 100% Segura (SSL 256-bit)</p>
          <p className="text-xs">📦 Entrega Correios em 7-15 dias</p>
          <p className="text-xs">🛡️ Garantia de 7 dias — devolução total sem perguntas</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="include-card">
            <h4>📖 1.600+ páginas</h4>
            <p>Bíblia completa + plano de 365 dias</p>
          </div>
          <div className="include-card">
            <h4>✨ Versão ACF</h4>
            <p>A mesma dos avivamentos históricos</p>
          </div>
          <div className="include-card">
            <h4>🔗 Conexões diárias</h4>
            <p>AT e NT conversando todo dia</p>
          </div>
          <div className="include-card">
            <h4>💬 Perguntas reflexivas</h4>
            <p>&quot;O que Deus te disse hoje?&quot;</p>
          </div>
          <div className="include-card">
            <h4>📦 Entrega rastreada</h4>
            <p>Você acompanha cada passo</p>
          </div>
          <div className="include-card">
            <h4>🎁 Embalagem de presente</h4>
            <p>Perfeita para dar de presente</p>
          </div>
        </div>
        <div className="guarantee-box">
          <h3>🛡️ GARANTIA BLINDADA</h3>
          <p>
            7 dias para testar. Não gostou? Devolvemos 100% do dinheiro.
            Sem perguntas. Sem burocracia. Sem ressentimentos.
            <br />
            <br />
            (Mas avisamos: em 15 anos, menos de 0,5% devolveu.
            Quem começa, não para.)
          </p>
        </div>
        <div className="offer-reminder">
          John Stott leu assim. Spurgeon leu assim. D.A. Carson lê assim.
          <br />
          <br />
          Histórias reais de transformação: lares restaurados,
          crianças memorizando Salmos, igrejas avivadas.
          <br />
          <br />
          E se Deus está esperando VOCÊ abrir esta Bíblia
          para começar algo novo na sua casa?
          <br />
          <br />
          Você tem 2 opções:
          <br />
          1️⃣ Clicar no botão e começar HOJE
          <br />
          2️⃣ Fechar esta página e repetir 2024 em 2025
          <br />
          <br />
          Escolha.
        </div>
      </div>
    </section>
  );
}
