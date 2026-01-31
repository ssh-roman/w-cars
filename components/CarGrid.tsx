import CarCard from "./CarCard";
import { cars } from "@/lib/data";

export default function CarGrid() {
  return (
    <section id="cars" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-[#F8F8F6] z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14 animate-on-load animate-fade-in-up animation-delay-600">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-3">
            Mașini disponibile
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Alegați mașina perfectă pentru nevoile dumneavoastră. Filtrați prin
            tipuri, prețuri și specificații.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="animate-on-load animate-fade-in-up"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
