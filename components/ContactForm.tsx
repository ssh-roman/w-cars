"use client";

import { useState, FormEvent } from "react";
import { Phone, User, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would send the data to your backend
    console.log("Contact request:", {
      name,
      phoneNumber,
    });

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setName("");
      setPhoneNumber("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#E8630A]/5 border border-[#E8630A]/20 text-[#E8630A] px-4 py-1.5 text-sm font-medium mb-4">
                <Phone size={14} />
                Contact
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">
                Dorești să fii contactat?
              </h2>
              <p className="text-gray-500 text-base lg:text-lg">
                Lasă-ne datele tale și te vom contacta în cel mai scurt timp.
              </p>
            </div>

            {/* Form */}
            <div className="bg-[#F8F8F6] border border-gray-200 p-6 lg:p-8">
              {submitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2">
                    Mulțumim!
                  </h3>
                  <p className="text-gray-600">
                    Te vom contacta în curând la numărul {phoneNumber}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nume complet <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ion Popescu"
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Număr de telefon <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type="tel"
                        id="contact-phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+373 XX XXX XXX"
                        required
                        pattern="[+]?[0-9]{9,15}"
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8630A] focus:border-transparent transition-all"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Te vom contacta pentru confirmare și detalii
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E8630A] text-white py-4 text-base font-semibold hover:bg-[#D4570A] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Trimite cererea
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400">
                🔒 Datele tale sunt în siguranță și nu vor fi partajate cu terțe părți
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
