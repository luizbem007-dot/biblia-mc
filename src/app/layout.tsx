import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import LenisProvider from "./lenis-provider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bíblia Devocional Robert Murray McCheyne | Leia a Bíblia Completa em 1 Ano",
  description:
    "O plano de leitura de 1842 usado por John Stott, Spurgeon e D.A. Carson. Leia toda a Bíblia em 1 ano com conexões simultâneas entre AT e NT. Versão ACF, zero comentários, pura devoção. 180 anos transformando vidas.",
  keywords: [
    "bíblia devocional",
    "robert murray mccheyne",
    "plano de leitura bíblica",
    "ler bíblia em 1 ano",
    "ACF",
    "almeida corrigida fiel",
    "john stott",
    "spurgeon",
    "avivamento",
    "leitura familiar",
  ],
  openGraph: {
    type: "website",
    url: "https://bibliamccheyne.com.br/",
    title: "Bíblia Devocional McCheyne - Transforme Sua Vida Espiritual",
    description:
      "O método usado pelos gigantes da fé para ler toda a Bíblia em 1 ano. 180 anos de história, centenas de vidas transformadas. Comece hoje!",
    images: [
      {
        url: "https://bibliamccheyne.com.br/og-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bíblia Devocional McCheyne - Leia a Bíblia em 1 Ano",
    description:
      "Método de 1842 usado por John Stott, Spurgeon, D.A. Carson. Conexões simultâneas AT ↔️ NT.",
    images: ["https://bibliamccheyne.com.br/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://bibliamccheyne.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Bíblia Devocional Robert Murray McCheyne",
  "image": [
    "https://bibliamccheyne.com.br/biblia-lilas.jpg",
    "https://bibliamccheyne.com.br/biblia-cinza.jpg",
    "https://bibliamccheyne.com.br/biblia-caramelo.jpg",
    "https://bibliamccheyne.com.br/biblia-azul.jpg"
  ],
  "description": "Plano de leitura devocional de 365 dias criado por Robert Murray McCheyne em 1842. Leia toda a Bíblia em 1 ano com conexões simultâneas entre AT e NT.",
  "brand": {
    "@type": "Brand",
    "name": "Editora Marcas"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://bibliamccheyne.com.br/",
    "priceCurrency": "BRL",
    "price": "97.00",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Editora Marcas"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "347"
  }
}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Editora Marcas",
  "url": "https://bibliamccheyne.com.br",
  "logo": "https://bibliamccheyne.com.br/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-27-99227-9555",
    "contactType": "Customer Service",
    "areaServed": "BR",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://www.facebook.com/editoramarcas",
    "https://www.instagram.com/editoramarcas",
    "https://www.youtube.com/@editoramarcas"
  ]
}`,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${jakarta.variable} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');`}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');`}
        </Script>
      </body>
    </html>
  );
}
