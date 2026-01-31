"use client";

import { CheckCircle, FileText, Car, HeadphonesIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Dictionary } from "@/lib/i18n/types";

interface ValuePropositionProps {
  dict: Dictionary;
}

export default function ValueProposition({ dict }: ValuePropositionProps) {
  const steps = [
    {
      id: "1",
      icon: Car,
      title: dict.valueProposition.step1Title,
      description: dict.valueProposition.step1Description,
    },
    {
      id: "2",
      icon: FileText,
      title: dict.valueProposition.step2Title,
      description: dict.valueProposition.step2Description,
    },
    {
      id: "3",
      icon: HeadphonesIcon,
      title: dict.valueProposition.step3Title,
      description: dict.valueProposition.step3Description,
    },
    {
      id: "4",
      icon: CheckCircle,
      title: dict.valueProposition.step4Title,
      description: dict.valueProposition.step4Description,
    },
  ];

  return (
    <section id="steps" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">
              {dict.valueProposition.title}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-lg">
              {dict.valueProposition.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.id} delay={index * 100}>
                <div className="bg-[#F8F8F6] border border-gray-200 p-6 relative group hover:shadow-lg hover:shadow-black/5 transition-all duration-300 hover:-translate-y-1"
                >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#111827] text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mb-4 bg-[#E8630A]/8 flex items-center justify-center mt-2">
                  <Icon size={28} className="text-[#E8630A]" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>

                  {/* Connection Line - Desktop Only */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-[#E8630A]/20" />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
