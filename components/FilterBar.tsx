"use client";

import { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { Dictionary } from "@/lib/i18n/types";
import { Locale } from "@/lib/i18n/config";

interface FilterBarProps {
  dict: Dictionary;
  locale: Locale;
}

export default function FilterBar({ dict, locale }: FilterBarProps) {
  const carTypes = [
    dict.filter.anyType,
    dict.filter.sedan,
    dict.filter.suv,
    dict.filter.hatchback,
    dict.filter.coupe,
    dict.filter.minivan,
    dict.filter.electric,
  ];
  const [carType, setCarType] = useState(dict.filter.anyType);
  const [startDate, setStartDate] = useState("");
  const [location, setLocation] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    console.log({ carType, startDate, location, endDate });
  };

  return (
    <div className="relative -mt-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-30 animate-on-load animate-slide-up animation-delay-500">
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 p-4 lg:p-6">
        <div className="flex flex-col sm:flex-row gap-2.5">
          {/* Car Type */}
          <div className="flex-1 relative">
            <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              {dict.filter.type}
            </label>
            <div className="relative">
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent cursor-pointer transition-all"
              >
                {carTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* Start Date */}
          <div className="flex-1">
            <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              {dict.filter.startDate}
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent transition-all"
            />
          </div>

          {/* Location */}
          <div className="flex-1 relative">
            <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              {dict.filter.location}
            </label>
            <div className="relative">
              <MapPin
                size={14}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 z-10"
              />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 pl-8 pr-8 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent cursor-pointer transition-all"
              >
                <option value="">{dict.filter.selectLocation}</option>
                <option value={dict.filter.airportLocation}>{dict.filter.airportLocation}</option>
                <option value={dict.filter.cityLocation}>{dict.filter.cityLocation}</option>
              </select>
              <ChevronDown
                size={14}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>

          {/* End Date */}
          <div className="flex-1">
            <label className="block text-[10px] font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              {dict.filter.endDate}
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent transition-all"
            />
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto bg-[#E8630A] text-white rounded-lg px-6 py-2 text-sm font-semibold hover:bg-[#D4570A] transition-all duration-200 flex items-center gap-2 justify-center shadow-lg shadow-[#E8630A]/30 hover:shadow-xl hover:shadow-[#E8630A]/40"
            >
              <Search size={16} />
              {dict.filter.search}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
