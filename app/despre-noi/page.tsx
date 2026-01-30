import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Car, Users, Clock, MapPin, Shield, Award, HeadphonesIcon } from "lucide-react";

const stats = [
  { value: "100+", label: "Mașini disponibile", icon: Car },
  { value: "5000+", label: "Clienți mulțumiți", icon: Users },
  { value: "24/7", label: "Suport clienți", icon: Clock },
  { value: "10+", label: "Ani de experiență", icon: Award },
];

const values = [
  {
    icon: Shield,
    title: "Transparență",
    description:
      "Fără costuri ascunse sau surprize. Prețul pe care îl vezi este prețul pe care îl plătești. Toate condițiile sunt clare de la început.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suport dedicat",
    description:
      "Echipa noastră este disponibilă non-stop pentru orice întrebare sau situație. Suntem mereu la un telefon distanță.",
  },
  {
    icon: Car,
    title: "Calitate",
    description:
      "Fiecare mașină din flota noastră trece prin inspecții regulate. Vehicule curate, întreținute și pregătite pentru drum.",
  },
  {
    icon: MapPin,
    title: "Flexibilitate",
    description:
      "Livrare la adresă în Chișinău, perioade flexibile de închiriere și opțiuni fără garanție pentru confortul tău.",
  },
];

export default function DesprePage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0C1220] pt-32 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #E8630A10, transparent)",
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/50 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-[#E8630A]"></span>
              Despre W.Rent
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Servicii de închiriere auto de încredere în Moldova
            </h1>
            <p className="text-white/40 text-base lg:text-lg max-w-2xl leading-relaxed">
              Din 2014, W.Rent oferă servicii profesionale de închiriere auto în
              Chișinău. Am început cu 5 mașini și astăzi avem o flotă de peste
              100 de vehicule.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`py-10 lg:py-12 text-center ${
                    index < stats.length - 1 ? "border-r border-gray-100" : ""
                  }`}
                >
                  <Icon
                    size={22}
                    className="text-[#E8630A] mx-auto mb-3"
                  />
                  <p className="text-2xl lg:text-3xl font-bold text-[#111827] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-6">
              Povestea noastră
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                W.Rent a fost fondată în 2014 cu un scop simplu: să facem
                închirierea unei mașini în Chișinău la fel de ușoară ca și
                chemarea unui taxi. Am început cu o flotă mică de 5 vehicule
                și o echipă de 3 persoane.
              </p>
              <p>
                De-a lungul anilor, am crescut organic, ascultând feedback-ul
                clienților și adaptându-ne serviciile. Am fost printre primii
                din Moldova care au oferit opțiunea de închiriere fără garanție
                — un pas care a schimbat industria locală.
              </p>
              <p>
                Astăzi, cu o flotă de peste 100 de mașini — de la vehicule
                economice la SUV-uri premium — deservim atât clienți
                individuali, cât și companii. Fiecare mașină trece prin
                inspecții regulate, iar echipa noastră de suport este
                disponibilă 24/7.
              </p>
              <p>
                Misiunea noastră rămâne aceeași: mobilitate accesibilă,
                transparentă și de calitate pentru toți cei care au nevoie de
                un vehicul în Moldova.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">
              Valorile noastre
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi și în fiecare
              interacțiune cu clienții noștri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#F8F8F6] border border-gray-200 p-6 lg:p-8"
                >
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#E8630A]" />
                  </div>
                  <h3 className="font-bold text-[#111827] text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#0C1220]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Pregătit să închiriezi?
          </h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">
            Alege din flota noastră de peste 100 de mașini și fii pe drum în
            mai puțin de 2 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/fleet"
              className="bg-[#E8630A] text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#D4570A] transition-colors inline-block"
            >
              Vezi flota
            </a>
            <a
              href="/contact"
              className="border border-white/20 text-white px-8 py-3.5 text-sm font-semibold hover:bg-white/5 transition-colors inline-block"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButton />
    </main>
  );
}
