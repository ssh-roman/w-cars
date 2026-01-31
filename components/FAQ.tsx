"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F8F8F6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 bg-[#111827]/5 text-[#111827] px-4 py-1.5 text-sm font-medium mb-4">
              <HelpCircle size={14} />
              Întrebări frecvente
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]">
              FAQ
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 50}>
              <div className={`bg-white border overflow-hidden transition-all duration-300 ${
                openId === item.id ? "shadow-md border-[#E8630A]/30" : "border-gray-200"
              }`}
              >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openId === item.id}
              >
                <span className="text-sm font-semibold text-gray-800 pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#E8630A] transition-transform duration-300 flex-shrink-0 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === item.id ? "max-h-48" : "max-h-0"
                }`}
              >
                  <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
