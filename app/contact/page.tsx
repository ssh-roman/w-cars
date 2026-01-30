"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact form submitted:", formData);

    setIsSubmitting(false);
    alert("Mulțumim pentru mesaj! Vă vom contacta în curând.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contactează-ne
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Suntem aici să te ajutăm. Contactează-ne pentru orice întrebare despre serviciile noastre.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Company Info */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#111827] mb-6">
                W.Rent - Închirieri Auto
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Suntem o companie de închirieri auto cu experiență în Moldova.
                Oferim servicii profesionale de închiriere cu peste 16 modele disponibile,
                prețuri competitive și livrare rapidă în Chișinău.
              </p>

              {/* Contact Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Telefon</p>
                    <a
                      href="tel:+37368585404"
                      className="text-gray-600 hover:text-[#E8630A] transition-colors"
                    >
                      +373 68 585 404
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href="mailto:office@wrent.md"
                      className="text-gray-600 hover:text-[#E8630A] transition-colors"
                    >
                      office@wrent.md
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Adresă</p>
                    <p className="text-gray-600">
                      Mun. Chișinău, MD-2001<br />
                      Moldova
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Program</p>
                    <p className="text-gray-600">
                      Luni - Vineri: 09:00 - 18:00<br />
                      Sâmbătă: 10:00 - 16:00<br />
                      Duminică: Închis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#111827] mb-6">
                Trimite-ne un mesaj
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nume <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent"
                    placeholder="Numele tău"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[+]?[0-9]{9,15}"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent"
                    placeholder="+373 XX XXX XXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mesaj <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent resize-none"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full bg-[#E8630A] text-white py-3.5 font-semibold hover:bg-[#D4570A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButton />
    </main>
  );
}
