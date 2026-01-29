export default function PartnerSection() {
  return (
    <section id="partners" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#F5F5F5] to-[#f0f0f0] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Content */}
            <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#228B5B]/8 text-[#228B5B] px-4 py-1.5 text-sm font-medium mb-6 w-fit">
                Parteneriat
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4D3E] mb-4 leading-tight">
                Devino partenerul nostru
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
                Aflarea cu AutoRent vă oferă acces la o rețea extinsă de
                clienți, sprijin profesional și comisii avantajoase. Creștea
                afacerii dumneavoastră aletur de noi este prioritatea noastră
                .
              </p>
              <div>
                <button className="bg-[#228B5B] text-white px-8 py-3 text-sm font-semibold hover:bg-[#1B7048] transition-colors shadow-md">
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
                      "linear-gradient(135deg, #D4AF37 0%, #C5A028 60%, #B8860B 100%)",
                    borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                  }}
                />
                {/* Pulsing ring */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-[#228B5B]/25 rounded-full"
                  style={{ animation: "pulse 3s ease-in-out infinite" }}
                />
                {/* Accent shapes */}
                <div className="absolute top-1/4 right-1/4 w-14 h-14 bg-[#228B5B]/15 rotate-12" />
                <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-[#D4AF37]/30" />
                <div className="absolute top-3/4 right-1/3 w-8 h-8 bg-[#1B4D3E]/8 -rotate-6" />
                <div className="absolute top-1/2 right-1/6 w-5 h-5 bg-[#F5D782]/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
