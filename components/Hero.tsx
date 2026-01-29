"use client";

import FilterBar from "./FilterBar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1B4D3E] via-[#165740] to-[#1d5a48] overflow-hidden">
      {/* Background Image */}
      {/* <div
        className="hidden sm:block absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      /> */}

      {/* Dark Overlay for text readability */}
      <div className="hidden absolute inset-0 bg-gradient-to-br from-[#1B4D3E]/50 via-[#165740]/50 to-[#1B4D3E]/50" />

      {/* Decorative background circles
      <div
        className="absolute top-10 right-0 w-[450px] h-[450px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #D4AF37 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-[250px] h-[250px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #52B788 0%, transparent 70%)",
        }}
      /> */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spacer for fixed header */}
        <div className="pt-24 lg:pt-32 pb-10 lg:pb-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left - Text Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                Închiriază o mașină în 
                <span className="text-[#D4AF37]"> Chișinău</span>
              </h1>
              <p className="text-white/90">
                De la <span className="font-semibold text-[#D4AF37]">23 €/zi</span>. Prețuri avantajoase, fără garanție, livrare rapidă.
              </p>
            </div>
            {/* Right - Call to Action */}
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
              <Image src="/hero-car.webp" alt="Car Hero" width={500} height={300} />
            </div>
          </div>
        </div>

        {/* Filter Bar */}
      </div>
      <FilterBar />
    </section>
  );
}
