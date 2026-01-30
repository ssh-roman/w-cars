"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/data";
import { Car } from "@/lib/types";

const carTypes = [
  { value: "all", label: "Toate mașinile" },
  { value: "Sedan", label: "Sedan" },
  { value: "SUV", label: "SUV" },
  { value: "Hatchback", label: "Hatchback" },
  { value: "Coupe", label: "Coupe" },
];

function FleetContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("type") || "all";
  const [selectedType, setSelectedType] = useState(initialFilter);

  const filteredCars = selectedType === "all"
    ? cars
    : cars.filter((car: Car) => car.category === selectedType);

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#0C1220] pt-32 pb-16">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 50%, #E8630A10, transparent)",
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Flota noastră de mașini
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Explorați colecția noastră completă de vehicule. De la mașini compacte la SUV-uri luxoase.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Cars Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {carTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`cursor-pointer px-6 py-3 font-semibold transition-all duration-200 ${
                    selectedType === type.value
                      ? "bg-[#111827] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 text-center">
              <span className="font-semibold text-[#E8630A]">{filteredCars.length}</span> mașini disponibile
              {selectedType !== "all" && ` în categoria ${carTypes.find(t => t.value === selectedType)?.label}`}
            </p>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* Empty State */}
          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                Nu am găsit mașini în această categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingButton />
    </main>
  );
}

export default function FleetPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#F8F8F6]">
        <Header />
        <section className="relative bg-[#0C1220] pt-32 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Flota noastră de mașini
              </h1>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    }>
      <FleetContent />
    </Suspense>
  );
}
