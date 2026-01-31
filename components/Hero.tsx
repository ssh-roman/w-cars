"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0C1220] overflow-hidden min-h-[85vh] flex flex-col">
      {/* Atmospheric gradient overlays */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 50%, #E8630A15, transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 50% 80% at 20% 80%, #D4AF3710, transparent)",
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
        {/* Spacer for fixed header */}
        <div className="pt-16 lg:pt-36 pb-20 flex-1 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
            {/* Left - Text Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/60 uppercase tracking-widest mb-6 animate-on-load animate-fade-in-up">
                <span className="w-1.5 h-1.5 bg-[#E8630A]"></span>
                Chișinău, Moldova
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-5 tracking-tight animate-on-load animate-fade-in-up animation-delay-100">
                Închiriază o
                <br />
                mașină în{" "}
                <span className="text-[#E8630A]">Chișinău</span>
              </h1>

              <p className="text-white/50 text-base lg:text-lg max-w-md mb-8 leading-relaxed animate-on-load animate-fade-in-up animation-delay-200">
                De la <span className="font-semibold text-[#E8630A]">23 €/zi</span>. Prețuri avantajoase, fără garanție, livrare rapidă.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-on-load animate-fade-in-up animation-delay-300">
                <a href="#cars" className="bg-[#E8630A] text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#D4570A] transition-colors inline-flex items-center justify-center gap-2">
                  Vezi flota
                  <ArrowDown size={16} />
                </a>
                <a href="tel:+3731234567" className="border border-white/20 text-white px-8 py-3.5 text-sm font-semibold hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2">
                  Sună acum
                </a>
              </div>
            </div>

            {/* Right - Hero Car */}
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end relative animate-on-load animate-fade-in-right animation-delay-400">
              {/* Glow behind car */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-20"
                style={{
                  background: "radial-gradient(circle, #E8630A 0%, transparent 70%)",
                }}
              />
              <Image
                src="/hero-car.png"
                alt="Car Hero"
                width={600}
                height={360}
                className="relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
