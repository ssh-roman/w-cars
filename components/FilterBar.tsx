"use client";

import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

const carTypes = [
  "Orice auto",
  "Sedan",
  "SUV",
  "Hatchback",
  "Coupe",
  "Minivan",
  "Electric",
];

export default function FilterBar() {
  const [carType, setCarType] = useState("Orice auto");
  const [startDate, setStartDate] = useState("");
  const [location, setLocation] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="bg-white/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-4 lg:p-5">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Car Type */}
          <div className="flex-1 relative">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 px-1">
              Tip mașină
            </label>
            <div className="relative">
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D28EF] focus:border-transparent cursor-pointer"
              >
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={15}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Start Date */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 px-1">
              Data de pornire
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D28EF] focus:border-transparent"
            />
          </div>

          {/* Location */}
          <div className="flex-1 relative">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 px-1">
              Locație
            </label>
            <div className="relative">
              <MapPin
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Chișinău"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 pl-8 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D28EF] focus:border-transparent"
              />
            </div>
          </div>

          {/* End Date */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1.5 px-1">
              Data de retur
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D28EF] focus:border-transparent"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full sm:w-auto bg-[#0D28EF] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#0b20c4] transition-all duration-200 flex items-center gap-2 justify-center shadow-lg shadow-[#0D28EF]/30">
              <Search size={16} />
              Caută o mașină
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
