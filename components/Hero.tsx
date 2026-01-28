import FilterBar from "./FilterBar";

export default function Hero() {
  return (
    <section className="relative min-h-[580px] lg:min-h-[680px] bg-gradient-to-br from-[#0A1F4D] via-[#0d2a5e] to-[#0A1F4D] overflow-hidden">
      {/* Decorative background circles */}
      <div
        className="absolute top-10 right-0 w-[450px] h-[450px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #0D28EF 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-[250px] h-[250px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #4d8aff 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spacer for fixed header */}
        <div className="pt-24 lg:pt-32 pb-10 lg:pb-14">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left - Text Content */}
            <div className="w-full lg:flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4">
                Chirie auto
                <br />
                <span className="text-[#4d8aff]">Chișinău</span>
              </h1>
              <p className="text-lg text-white/65 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Închiriați mașina ideală pentru orice ocazie. Prețuri starting
                de la{" "}
                <span className="text-white font-semibold">23 €/zi</span> cu
                livrare directă în Chișinău.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-white/55 text-sm">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d8aff]" />
                  Fără garanție
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d8aff]" />
                  Asigurare inclusa
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d8aff]" />
                  Livrare rapidă
                </span>
              </div>
            </div>

            {/* Right - Decorative Car Shape (desktop only) */}
            <div className="hidden lg:flex lg:flex-1 justify-center items-center">
              <div className="relative w-[380px] h-[340px]">
                {/* Main abstract blob */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[280px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B35 0%, #FF4444 50%, #CC2222 100%)",
                    borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
                    boxShadow: "0 30px 60px rgba(255, 59, 59, 0.3)",
                  }}
                />
                {/* Inner highlight */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[160px] opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,138,96,0.8) 0%, transparent 100%)",
                    borderRadius: "50% 40% 55% 45% / 45% 60% 40% 55%",
                  }}
                />
                {/* Decorative rings */}
                <div className="absolute -top-2 right-8 w-20 h-20 border-2 border-white/20 rounded-full" />
                <div className="absolute -bottom-4 -left-2 w-24 h-24 border border-white/12 rounded-full" />
                {/* Accent dots */}
                <div className="absolute top-1/4 right-12 w-3 h-3 bg-white/40 rounded-full" />
                <div className="absolute bottom-1/3 left-12 w-2 h-2 bg-[#FF8A60] rounded-full" />
                <div className="absolute top-3/4 right-1/3 w-4 h-4 bg-white/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar />
      </div>
    </section>
  );
}
