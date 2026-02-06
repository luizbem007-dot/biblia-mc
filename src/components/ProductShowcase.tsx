"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function ProductShowcase() {
  return (
    <section id="cores" className="section" aria-label="Cores">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Escolha a Cor. Comece a Jornada.</h2>
          <p className="section-text">
            Cada cor carrega um propósito. Muitas famílias compram uma para cada membro.
            Pai, mãe, filhos — todos lendo juntos, cada um com sua identidade.
          </p>
        </div>
        <div className="mt-10">
          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1.2}
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 200, modifier: 1, slideShadows: false }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="product-swiper"
          >
            <SwiperSlide>
              <article className="product-card" data-tone="#BFA6FF">
                <Image src="/images/roxa.webp" alt="Bíblia Lilás Elegante" width={360} height={480} />
                <h3>💜 Lilás Elegante</h3>
                <p>Contemplação. Realeza espiritual.</p>
                <span className="price-tag">R$ 97,00</span>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="product-card" data-tone="#C7935A">
                <Image src="/images/caramelo.webp" alt="Bíblia Caramelo" width={360} height={480} />
                <h3>🤎 Caramelo Doce de Leite</h3>
                <p>Calor. Intimidade com Deus.</p>
                <span className="price-tag">R$ 97,00</span>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="product-card" data-tone="#B8B8B8">
                <Image src="/images/cinza.webp" alt="Bíblia Cinza" width={360} height={480} />
                <h3>🩶 Cinza Clássico</h3>
                <p>Elegância eterna. Sofisticação.</p>
                <span className="price-tag">R$ 97,00</span>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="product-card" data-tone="#4A9B9B">
                <Image src="/images/azul.webp" alt="Bíblia Azul Turquesa" width={360} height={480} />
                <h3>💙 Azul Turquesa</h3>
                <p>Renovação. Energia jovem.</p>
                <span className="price-tag">R$ 97,00</span>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="callout-box">
          💡 Ideia: Pai com cinza, mãe com lilás, filha com turquesa, filho com caramelo.
          Todos lendo o mesmo texto, no mesmo dia, mas cada um com sua Bíblia.
          <br />
          Jantares nunca mais foram os mesmos.
        </div>
      </div>
    </section>
  );
}
