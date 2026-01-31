"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Settings, Users, Droplets, X, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import type { Car } from "@/lib/types";
import { Locale } from "@/lib/i18n/config";
import { getCarsData } from "@/lib/i18n/data/cars";

export interface CarCardProps {
  car: Car;
  dict: any;
  locale: Locale;
}

export default function CarCard({ car, dict, locale }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carsData = getCarsData(locale);
  const translatedTransmission = carsData.transmissions[car.transmission] || car.transmission;
  const translatedFuel = carsData.fuelTypes[car.fuel] || car.fuel;

  const displayImages = car.images && car.images.length > 0 ? car.images : (car.image ? [car.image] : []);
  const hasMultipleImages = displayImages.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const previousImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Prevent body scroll when modal is open
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would send the data to your backend
    console.log("Reservation request:", {
      car: car.name,
      phoneNumber,
    });

    setIsSubmitting(false);
    setModalOpen(false);
    setPhoneNumber("");

    // Show success message (you can replace with a toast notification)
    alert(`Mulțumim! Vă vom contacta în curând la numărul ${phoneNumber} pentru ${car.name}.`);
  };

  return (
    <>
    <div className="bg-white overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1 flex flex-col group">
      {/* Image Area */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {displayImages.length > 0 ? (
          <Image
            src={displayImages[currentImageIndex]}
            alt={`${car.name} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${car.gradientFrom}, ${car.gradientTo})`,
            }}
          />
        )}

        {/* No Deposit Badge */}
        {car.hasNoDeposit && (
          <span className="absolute top-3 left-3 bg-[#E8630A] text-white text-xs font-bold px-3 py-1 shadow-sm z-10">
            {dict.car.noDeposit}
          </span>
        )}

        {/* Navigation Arrows - only show if multiple images */}
        {hasMultipleImages && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all z-20 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-all z-20 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Counter & Dots - only show if multiple images */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {displayImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToImage(index, e)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Clickable overlay to detail page */}
        <Link href={`/${locale}/fleet/${car.id}`} className="absolute inset-0 z-[5]" aria-label={`${dict.car.viewDetails} ${car.name}`} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Specs Row */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Settings size={13} className="text-gray-400" />
            {translatedTransmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-gray-400" />
            {car.seats} {dict.car.seats}
          </span>
          <span className="flex items-center gap-1.5">
            <Droplets size={13} className="text-gray-400" />
            {translatedFuel}
          </span>
        </div>

        {/* Name */}
        <Link href={`/${locale}/fleet/${car.id}`} className="hover:text-[#E8630A] transition-colors">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{car.name}</h3>
        </Link>

        {/* Price */}
        <p className="text-gray-500 text-sm mb-4">
          {dict.car.pricePerDay}{" "}
          <span className="text-[#E8630A] font-bold text-xl">{car.price} €</span>
          {dict.car.perDay}
        </p>

        {/* Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="cursor-pointer mt-auto w-full bg-[#111827] text-white py-2.5 text-sm font-semibold hover:bg-[#E8630A] transition-colors"
        >
          {dict.car.reserve}
        </button>
      </div>
    </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-white sm:bg-black/60" onClick={() => setModalOpen(false)}>
          <div
            className="bg-white w-full sm:max-w-md relative sm:m-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-2 pr-8">
                {dict.car.requestTitle} {car.name}
              </h2>
              <p className="text-gray-600 text-sm">
                {dict.car.requestDescription}
              </p>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6">
              {/* Car Details */}
              {/* <div className="mb-6 p-4 bg-gray-50 border border-gray-200">
                <div className="flex items-start gap-4">
                  {car.image && (
                    <div className="relative w-24 h-16 flex-shrink-0">
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{car.name}</h3>
                    <p className="text-[#E8630A] font-bold text-lg">
                      {car.price} € <span className="text-sm text-gray-500 font-normal">/zi</span>
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                      <span>{car.transmission}</span>
                      <span>•</span>
                      <span>{car.seats} locuri</span>
                      <span>•</span>
                      <span>{car.fuel}</span>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Car Info - Mobile Only */}
              <div className="mb-4 p-3 bg-gray-50 border border-gray-200 sm:hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{car.name}</p>
                    <p className="text-[#E8630A] font-bold text-base">
                      {car.price} € <span className="text-xs text-gray-500 font-normal">{dict.car.perDay}</span>
                    </p>
                  </div>
                  {displayImages.length > 0 && (
                    <div className="relative w-20 h-14 flex-shrink-0">
                      <Image
                        src={displayImages[currentImageIndex]}
                        alt={car.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Phone Input */}
              <div className="mb-4 sm:mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  {dict.car.phoneLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder={dict.car.phonePlaceholder}
                    required
                    pattern="[+]?[0-9]{9,15}"
                    className="w-full pl-10 pr-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  {dict.car.phoneRequired}
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E8630A] text-white py-3.5 text-base font-semibold hover:bg-[#D4570A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? dict.car.submitting : dict.car.submitRequest}
              </button>

              {/* Cancel Button - Mobile */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-full mt-3 sm:hidden text-gray-600 py-3 text-sm font-medium hover:text-gray-800 transition-colors"
              >
                {dict.car.cancel}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
