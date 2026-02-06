"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import ProofSocial from "@/components/ProofSocial";
import Comparison from "@/components/Comparison";
import ProductShowcase from "@/components/ProductShowcase";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const elements = gsap.utils.toArray<HTMLElement>(".reveal");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    const parallax = gsap.utils.toArray<HTMLElement>("[data-speed]");
    parallax.forEach((el) => {
      const speed = Number(el.dataset.speed || "0.2");
      gsap.to(el, {
        y: () => -200 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress.toString());
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const showTimer = setTimeout(() => setLoading(true), 0);
    const hideTimer = setTimeout(() => setLoading(false), 900);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.innerWidth < 1024) return;
    const move = (event: MouseEvent) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="page">
      {loading && (
        <div className="loading-screen" aria-live="polite">
          <div className="loading-logo">Editora Marcas</div>
          <div className="loading-bar" />
        </div>
      )}
      <div className="scroll-progress" />
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />
      <main>
        <Hero />
        <div className="reveal">
          <VideoSection />
        </div>
        <div className="reveal">
          <PainPoints />
        </div>
        <div className="reveal">
          <Solution />
        </div>
        <div className="reveal">
          <ProofSocial />
        </div>
        <div className="reveal">
          <Comparison />
        </div>
        <div className="reveal">
          <ProductShowcase />
        </div>
        <div className="reveal">
          <Offer />
        </div>
        <div className="reveal">
          <FAQ />
        </div>
        <FinalCTA />
        <Footer />
      </main>
      <a className={`sticky-cta ${showSticky ? "show" : ""}`} href="#oferta">
        Quero Minha Bíblia - R$ 97
      </a>
    </div>
  );
}
