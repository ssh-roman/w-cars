"use client";

import { useState, useEffect, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/data";
import {
  ArrowLeft,
  Settings,
  Users,
  Droplets,
  Fuel,
  Phone,
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  X,
} from "lucide-react";

const includedFeatures = [
  { icon: Shield, label: "Asigurare civilă inclusă" },
  { icon: Fuel, label: "Rezervor plin la preluare" },
  { icon: MapPin, label: "Livrare în Chișinău" },
  { icon: Clock, label: "Suport 24/7" },
  { icon: CheckCircle, label: "Kilometri nelimitați în Moldova" },
  { icon: Settings, label: "Inspecție tehnică validă" },
];

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const car = cars.find((c) => c.id === id);

  const [modalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  if (!car) {
    notFound();
  }

  const relatedCars = cars
    .filter((c) => c.category === car.category && c.id !== car.id)
    .slice(0, 3);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Reservation request:", { car: car.name, phoneNumber });
    setIsSubmitting(false);
    setModalOpen(false);
    setPhoneNumber("");
    alert(
      `Mulțumim! Vă vom contacta în curând la numărul ${phoneNumber} pentru ${car.name}.`
    );
  };

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header />

      {/* Hero — Car Image */}
      <section className="relative bg-[#0C1220] pt-20 lg:pt-24 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 60% 70%, #E8630A15, transparent)",
          }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="pt-6 pb-4">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 transition-colors"
            >
              <ArrowLeft size={16} />
              Înapoi la flotă
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pb-12 lg:pb-16">
            {/* Left — Info */}
            <div className="w-full lg:w-2/5 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/5 border border-white/10 text-white/50 text-xs font-medium px-3 py-1 uppercase tracking-wider">
                  {car.category}
                </span>
                {car.hasNoDeposit && (
                  <span className="bg-[#E8630A] text-white text-xs font-bold px-3 py-1">
                    Fără garanție
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {car.name}
              </h1>

              <p className="text-white/30 text-sm mb-8 max-w-md leading-relaxed">
                Închiriază {car.name} în Chișinău. Vehicul de categorie{" "}
                {car.category.toLowerCase()} cu transmisie{" "}
                {car.transmission.toLowerCase()} și motor{" "}
                {car.fuel.toLowerCase()}.
              </p>

              {/* Price block */}
              <div className="bg-white/5 border border-white/10 p-5 mb-6">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Preț de la
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#E8630A] font-bold text-4xl">
                    {car.price} €
                  </span>
                  <span className="text-white/30 text-sm">/zi</span>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="cursor-pointer w-full bg-[#E8630A] text-white py-3.5 text-sm font-semibold hover:bg-[#D4570A] transition-colors"
              >
                Solicită această mașină
              </button>
            </div>

            {/* Right — Image */}
            <div className="w-full lg:w-3/5 order-1 lg:order-2">
              <div className="relative h-64 sm:h-80 lg:h-96">
                {car.image ? (
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${car.gradientFrom}, ${car.gradientTo})`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-12 lg:py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center p-4">
              <Settings
                size={24}
                className="text-[#E8630A] mx-auto mb-3"
              />
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Transmisie
              </p>
              <p className="font-semibold text-[#111827]">
                {car.transmission}
              </p>
            </div>
            <div className="text-center p-4">
              <Users size={24} className="text-[#E8630A] mx-auto mb-3" />
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Locuri
              </p>
              <p className="font-semibold text-[#111827]">{car.seats}</p>
            </div>
            <div className="text-center p-4">
              <Droplets
                size={24}
                className="text-[#E8630A] mx-auto mb-3"
              />
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Combustibil
              </p>
              <p className="font-semibold text-[#111827]">{car.fuel}</p>
            </div>
            <div className="text-center p-4">
              <Shield size={24} className="text-[#E8630A] mx-auto mb-3" />
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                Garanție
              </p>
              <p className="font-semibold text-[#111827]">
                {car.hasNoDeposit ? "Fără garanție" : "Standard"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features + CTA */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Included Features */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-[#111827] mb-6">
                Ce este inclus
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includedFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.label}
                      className="flex items-center gap-3 bg-white border border-gray-200 p-4"
                    >
                      <Icon size={18} className="text-[#E8630A] flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {feature.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sticky CTA sidebar */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-28 bg-white border border-gray-200 p-6">
                <h3 className="font-bold text-[#111827] text-lg mb-1">
                  {car.name}
                </h3>
                <p className="text-gray-400 text-sm mb-5">
                  {car.category} · {car.transmission} · {car.fuel}
                </p>

                <div className="border-t border-gray-100 pt-4 mb-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-gray-500 text-sm">Preț/zi</span>
                    <span className="text-[#E8630A] font-bold text-2xl">
                      {car.price} €
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-gray-500 text-sm">Preț/săptămână</span>
                    <span className="text-[#111827] font-semibold">
                      {Math.round(car.price * 6)} €
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="cursor-pointer w-full bg-[#E8630A] text-white py-3 text-sm font-semibold hover:bg-[#D4570A] transition-colors mb-3"
                >
                  Solicită acum
                </button>
                <a
                  href="tel:+37368585404"
                  className="w-full border border-gray-200 text-[#111827] py-3 text-sm font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  Sună direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Cars */}
      {relatedCars.length > 0 && (
        <section className="py-12 lg:py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#111827]">
                Alte {car.category}-uri
              </h2>
              <Link
                href={`/fleet?type=${car.category}`}
                className="text-[#E8630A] text-sm font-semibold hover:underline"
              >
                Vezi toate
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedCars.map((c) => (
                <CarCard key={c.id} car={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButton />

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-white sm:bg-black/60"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white w-full sm:max-w-md relative sm:m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <div className="p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2 pr-8">
                Solicită {car.name}
              </h2>
              <p className="text-gray-600 text-sm">
                Introdu numărul de telefon pentru a fi contactat.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              <div className="mb-4 p-3 bg-gray-50 border border-gray-200 sm:hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {car.name}
                    </p>
                    <p className="text-[#E8630A] font-bold text-base">
                      {car.price} €{" "}
                      <span className="text-xs text-gray-500 font-normal">
                        /zi
                      </span>
                    </p>
                  </div>
                  {car.image && (
                    <div className="relative w-20 h-14 flex-shrink-0">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Număr de telefon <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+373 XX XXX XXX"
                    required
                    pattern="[+]?[0-9]{9,15}"
                    className="w-full pl-10 pr-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  Te vom contacta pentru confirmare
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E8630A] text-white py-3.5 text-base font-semibold hover:bg-[#D4570A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Se trimite..." : "Trimite solicitarea"}
              </button>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full mt-3 sm:hidden text-gray-600 py-3 text-sm font-medium hover:text-gray-800 transition-colors"
              >
                Anulează
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
