export default function PartnerSection() {
  return (
    <section id="partners" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C1220] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Content */}
            <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 px-4 py-1.5 text-sm font-medium mb-6 w-fit">
                Parteneriat
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Devino partenerul nostru
              </h2>
              <p className="text-white/40 text-base leading-relaxed mb-8 max-w-lg">
                Aflarea cu AutoRent vă oferă acces la o rețea extinsă de
                clienți, sprijin profesional și comisii avantajoase. Creștea
                afacerii dumneavoastră aletur de noi este prioritatea noastră
                .
              </p>
              <div>
                <button className="bg-[#E8630A] text-white px-8 py-3 text-sm font-semibold hover:bg-[#D4570A] transition-colors shadow-lg shadow-[#E8630A]/20">
                  Înregistrare
                </button>
              </div>
            </div>

            {/* Right - Decorative */}
            <div className="flex-shrink-0 w-full lg:w-1/2 relative overflow-hidden">
              <div className="h-64 lg:h-full min-h-64 relative bg-gradient-to-br from-[#111827] to-[#0C1220]">
                {/* Main blob */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 opacity-85"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4AF37 0%, #C5A028 60%, #B8860B 100%)",
                    borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                  }}
                />
                {/* Pulsing ring */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#E8630A]/20 rounded-full"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                />
                {/* Accent shapes */}
                <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#E8630A]/15 rotate-12" />
                <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-[#D4AF37]/30" />
                <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-white/5 -rotate-6" />
                <div className="absolute top-1/2 right-1/6 w-5 h-5 bg-[#E8630A]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
