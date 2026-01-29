import { CheckCircle, FileText, Car, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    id: "1",
    icon: Car,
    title: "Alege mașina",
    description: "Explorează flota noastră și selectează vehiculul potrivit pentru nevoile tale. Peste 16 modele disponibile.",
    step: "Pasul 1",
  },
  {
    id: "2",
    icon: FileText,
    title: "Completează cererea",
    description: "Introdu datele tale de contact și perioada închirierii. Fără documente complicate sau garanții.",
    step: "Pasul 2",
  },
  {
    id: "3",
    icon: HeadphonesIcon,
    title: "Confirmarea",
    description: "Echipa noastră te va contacta în maximum 2 ore pentru confirmare și detalii despre preluarea mașinii.",
    step: "Pasul 3",
  },
  {
    id: "4",
    icon: CheckCircle,
    title: "Preia și pornește",
    description: "Preluarea rapidă cu livrare la adresa ta în Chișinău. Contractul se semnează în 5 minute.",
    step: "Pasul 4",
  },
];

export default function ValueProposition() {
  return (
    <section id="steps" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4D3E] mb-4">
            Cum funcționează?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
            Procesul de închiriere este simplu și rapid. În doar 4 pași simpli poți fi la volanul mașinii tale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white border border-gray-200 p-6 relative group hover:shadow-md transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#228B5B] text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mb-4 bg-[#228B5B]/10 flex items-center justify-center mt-2">
                  <Icon size={28} className="text-[#228B5B]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-[#228B5B]/20" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
