export default function PartnerSection() {
  return (
    <section id="partners" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F5F5F5] to-[#f0f0f0] rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Content */}
            <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#0D28EF]/8 text-[#0D28EF] px-4 py-1.5 rounded-full text-sm font-medium mb-6 w-fit">
                Parteneriat
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1F4D] mb-4 leading-tight">
                Devino partenerul nostru
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                Aflarea cu AutoRent vă oferă acces la o rețea extinsă de
                clienți, sprijin profesional și comisii avantajoase. Creștea
                afacerii dumneavoastră aletur de noi este prioritatea noastră
                .
              </p>
              <div>
                <button className="bg-[#0D28EF] text-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-[#0b20c4] transition-colors shadow-lg shadow-[#0D28EF]/20">
                  Înregistrare
                </button>
              </div>
            </div>

            {/* Right - Decorative */}
            <div className="flex-shrink-0 w-full lg:w-1/2 relative overflow-hidden">
              <div className="h-64 lg:h-full min-h-64 relative bg-gradient-to-br from-[#f7f7f7] to-[#ececec]">
                {/* Main blob */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 opacity-85"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF6B35 0%, #FF4444 60%, #e53e3e 100%)",
                    borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                  }}
                />
                {/* Pulsing ring */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#0D28EF]/25 rounded-full"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                />
                {/* Accent shapes */}
                <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#0D28EF]/15 rounded-2xl rotate-12" />
                <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-[#FF6B35]/30 rounded-full" />
                <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-[#0A1F4D]/8 rounded-xl -rotate-6" />
                <div className="absolute top-1/2 right-1/6 w-5 h-5 bg-[#FF3B3B]/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
