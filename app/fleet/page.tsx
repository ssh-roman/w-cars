"use client";

import { useState } from "react";
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

export default function FleetPage() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("type") || "all";
  const [selectedType, setSelectedType] = useState(initialFilter);

  const filteredCars = selectedType === "all"
    ? cars
    : cars.filter((car: Car) => car.category === selectedType);

  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B4D3E] via-[#165740] to-[#1B4D3E] pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Flota noastră de mașini
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
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
                  className={`px-6 py-3 font-semibold transition-all duration-200 ${
                    selectedType === type.value
                      ? "bg-[#228B5B] text-white shadow-md"
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
              <span className="font-semibold text-[#228B5B]">{filteredCars.length}</span> mașini disponibile
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
