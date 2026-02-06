"use client";

import { useEffect, useState } from "react";

function getRemaining() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  if (now > end) {
    end.setDate(end.getDate() + 1);
  }
  const diff = end.getTime() - now.getTime();
  const hours = String(Math.floor(diff / 36e5)).padStart(2, "0");
  const minutes = String(Math.floor((diff % 36e5) / 6e4)).padStart(2, "0");
  const seconds = String(Math.floor((diff % 6e4) / 1000)).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export default function FinalCTA() {
  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const timer = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section section-final" aria-label="Última chamada">
      <div className="container text-center">
        <span className="badge pulse">⚠️ ÚLTIMA CHANCE</span>
        <h2 className="section-title text-gold">
          Você Chegou Até Aqui.
          <br />
          Agora Só Falta UMA Decisão.
        </h2>
        <p className="section-text">
          Não é mais &quot;será que funciona?&quot;. Você viu os nomes. Você viu a história.
          <br />
          A pergunta agora é: &quot;Quanto tempo mais eu vou adiar?&quot;
          <br />
          <br />
          2025 pode ser o ano que você FINALMENTE lê a Bíblia inteira.
          Ou pode ser mais um ano de &quot;ano que vem eu leio".
          <br />
          <br />
          Spurgeon não esperou. John Stott não esperou.
          Não espere o momento perfeito. ELE É AGORA.
        </p>
        <a className="btn-primary" href="#oferta">
          🔥 SIM, QUERO COMEÇAR MINHA JORNADA AGORA
          <span className="block text-sm">R$ 97,00 à vista ou 10x R$ 9,70</span>
        </a>
        <p className="section-text">
          🔒 Compra Segura · 🎁 Frete Grátis · 📦 Rastreado · ✅ Garantia 7 dias
        </p>
        <div className="countdown">
          ⏰ Frete grátis expira em: <strong>{time}</strong>
        </div>
        <p className="final-verse">
          &quot;A lei do Senhor é perfeita, e refrigera a alma...&quot;
          — Salmos 19:7
          <br />
          Não deixe essa alma sede por mais um ano.
        </p>
      </div>
    </section>
  );
}
