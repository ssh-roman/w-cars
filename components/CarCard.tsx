"use client";

import { useState } from "react";
import { Heart, Settings, Users, Droplets } from "lucide-react";
import type { Car } from "@/lib/types";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group">
      {/* Image Area */}
      <div
        className="relative h-48 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${car.gradientFrom}, ${car.gradientTo})`,
        }}
      >
        {/* No Deposit Badge */}
        {car.hasNoDeposit && (
          <span className="absolute top-3 left-3 bg-[#FF3B3B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            Fără garanție
          </span>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/90 rounded-full shadow-sm hover:scale-110 transition-transform"
          aria-label={isFavorite ? "Eliminare din preferinte" : "Adăugare la preferinte"}
        >
          <Heart
            size={16}
            className={
              isFavorite ? "fill-[#FF3B3B] text-[#FF3B3B]" : "text-gray-400"
            }
          />
        </button>

        {/* Category Label */}
        <span className="absolute bottom-3 left-3 text-white/60 text-xs font-medium">
          {car.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Specs Row */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Settings size={13} className="text-gray-400" />
            {car.transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-gray-400" />
            {car.seats} Locuri
          </span>
          <span className="flex items-center gap-1.5">
            <Droplets size={13} className="text-gray-400" />
            {car.fuel}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-bold text-gray-900 text-lg mb-1">{car.name}</h3>

        {/* Price */}
        <p className="text-gray-500 text-sm mb-4">
          de la{" "}
          <span className="text-[#0D28EF] font-bold text-xl">{car.price} €</span>
          /zi
        </p>

        {/* Button */}
        <button className="mt-auto w-full bg-[#0D28EF] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0b20c4] transition-colors">
          Solicită
        </button>
      </div>
    </div>
  );
}
