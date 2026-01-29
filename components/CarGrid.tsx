import CarCard from "./CarCard";
import { cars } from "@/lib/data";

export default function CarGrid() {
  return (
    <section id="cars" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B4D3E] mb-3">
            Mașini disponibile
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Alegați mașina perfectă pentru nevoile dumneavoastră. Filtrați prin
            tipuri, prețuri și specificații.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
