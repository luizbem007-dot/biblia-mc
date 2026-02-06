"use client";

import { useState } from "react";

const faqs = [
  {
    q: "❓ Posso começar a leitura em qualquer época do ano ou preciso esperar janeiro?",
    a: "💡 SIM, comece HOJE! A Bíblia é organizada por datas (1º janeiro a 31 dezembro), \nmas você inicia no dia que receber. Se receber em 20 de abril, começa em 20 de abril. \nEm 365 dias completa seu primeiro ciclo (terminará em 19 de abril do ano seguinte). \nNão perca mais tempo esperando janeiro!",
  },
  {
    q: "❓ Qual versão da Bíblia é usada e por quê?",
    a: "💡 Almeida Corrigida Fiel (ACF), a versão mais próxima do texto original \n(Textus Receptus). É a mesma versão da Sociedade Bíblica Trinitariana de Londres (1831), \ncujos fundadores eram amigos pessoais de McCheyne. Historicamente, TODOS os avivamentos \n(Reforma, Reavivamento Escocês, Azusa Street) usaram traduções fiéis ao original, \nnão paráfrases modernas.",
  },
  {
    q: "❓ Esta Bíblia tem comentários de teólogos ou pastores?",
    a: "💡 NÃO, e isso é PROPOSITAL. Esta é uma Bíblia DEVOCIONAL pura. \nComentários humanos atrapalham a voz do Espírito Santo. Na leitura devocional, \no TEXTO LÊ VOCÊ (não você lendo o texto). É um encontro sagrado: você + Espírito Santo + Palavra. \nNada mais. Comentários são para Bíblias de estudo, não para devoção íntima.",
  },
  {
    q: "❓ E se eu perder um dia de leitura? Preciso desistir?",
    a: "💡 NÃO! McCheyne disse: \"Não deve ser um fardo pesado. Se procedermos assim, \nestamos indo para o inferno com uma mentira na mão direita.\" Perdeu um dia? \nContinue de onde parou. Perdeu uma semana? Continue. O Espírito Santo te guia \nno SEU ritmo. Disciplina sim, legalismo NUNCA.",
  },
  {
    q: "❓ Quanto tempo leva a leitura diária?",
    a: "💡 15-25 minutos para leitura FAMILIAR + 15-25 minutos para leitura PESSOAL. \nTotal: 30-50 minutos por dia. É o tempo de 2 episódios de série na Netflix. \nA pergunta é: vale a pena trocar entretenimento por transformação eterna?",
  },
  {
    q: "❓ Como funciona a divisão \"Familiar\" e \"Pessoal\"?",
    a: "💡 McCheyne sonhou com FAMÍLIAS lendo juntas. Cada dia tem:\n• Leitura FAMILIAR: para fazer com cônjuge, filhos, ao redor da mesa. \n  Promove união, conversas espirituais, edificação coletiva.\n• Leitura PESSOAL: seu momento SOZINHO com Deus. Intimidade profunda, \n  confissão, cura, oração pessoal.\nNão tem família? Faça as duas sozinho. São dois encontros diários com Deus!",
  },
  {
    q: "❓ Tem alguma garantia se eu não gostar?",
    a: "💡 SIM! Garantia de 7 dias após receber. Se por qualquer motivo não ficar \nsatisfeito, devolvemos 100% do seu dinheiro. Zero burocracia. Mas avisamos: \nem 15 anos vendendo esta Bíblia, tivemos menos de 0,5% de devoluções. \nQuem começa a ler, não para mais.",
  },
  {
    q: "❓ Posso comprar mais de uma (para família/presente)?",
    a: "💡 SIM, e recomendamos MUITO! Muitas famílias compram uma cor para cada membro: \npai com cinza, mãe com lilás, filha com turquesa, filho com caramelo. \nTodos leem os mesmos textos no mesmo dia, mas cada um tem sua Bíblia personalizada. \nGera conversas incríveis à mesa de jantar. Use o carrinho para adicionar múltiplas unidades.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" aria-label="FAQ">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">
            Perguntas Que TODO MUNDO Faz
            <br />
            (E Que Você Também Está Pensando)
          </h2>
          <p className="section-text">
            Não achou sua dúvida? WhatsApp: (27) 99227-9555 — Respondemos em minutos.
          </p>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-icon">▾</span>
                </button>
                <div className="faq-answer" role="region" aria-hidden={!isOpen}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="faq-final">
          Ainda tem dúvidas? 
          <br />
          📱 WhatsApp: (27) 99227-9555
          <br />
          📧 Email: contato@editoramarcas.com.br
          <br />
          Respondemos em minutos!
        </div>
      </div>
    </section>
  );
}
