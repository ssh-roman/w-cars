import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/config";
import { Car, Users, Clock, Award, Shield, HeadphonesIcon, MapPin } from "lucide-react";
import Link from "next/link";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const stats = [
    { value: dict.about.stat1Value, label: dict.about.stat1Label, icon: Car },
    { value: dict.about.stat2Value, label: dict.about.stat2Label, icon: Users },
    { value: dict.about.stat3Value, label: dict.about.stat3Label, icon: Clock },
    { value: dict.about.stat4Value, label: dict.about.stat4Label, icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: dict.about.value1Title,
      description: dict.about.value1Description,
    },
    {
      icon: HeadphonesIcon,
      title: dict.about.value2Title,
      description: dict.about.value2Description,
    },
    {
      icon: Car,
      title: dict.about.value3Title,
      description: dict.about.value3Description,
    },
    {
      icon: MapPin,
      title: dict.about.value4Title,
      description: dict.about.value4Description,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header dict={dict} locale={locale} />

      {/* Hero */}
      <section className="relative bg-[#0C1220] pt-32 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #E8630A10, transparent)",
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-medium text-white/50 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-[#E8630A]"></span>
              {dict.about.badge}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              {dict.about.title}
            </h1>
            <p className="text-white/40 text-base lg:text-lg max-w-2xl leading-relaxed">
              {dict.about.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`py-10 lg:py-12 text-center ${
                    index < stats.length - 1 ? "border-r border-gray-100" : ""
                  }`}
                >
                  <Icon
                    size={22}
                    className="text-[#E8630A] mx-auto mb-3"
                  />
                  <p className="text-2xl lg:text-3xl font-bold text-[#111827] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-6">
              {dict.about.storyTitle}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>{dict.about.storyP1}</p>
              <p>{dict.about.storyP2}</p>
              <p>{dict.about.storyP3}</p>
              <p>{dict.about.storyP4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">
              {dict.about.valuesTitle}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {dict.about.valuesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-[#F8F8F6] border border-gray-200 p-6 lg:p-8"
                >
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-[#E8630A]" />
                  </div>
                  <h3 className="font-bold text-[#111827] text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#0C1220]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            {dict.about.ctaTitle}
          </h2>
          <p className="text-white/40 mb-8 max-w-lg mx-auto">
            {dict.about.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}/fleet`}
              className="bg-[#E8630A] text-white px-8 py-3.5 text-sm font-semibold hover:bg-[#D4570A] transition-colors inline-block"
            >
              {dict.about.ctaFleet}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="border border-white/20 text-white px-8 py-3.5 text-sm font-semibold hover:bg-white/5 transition-colors inline-block"
            >
              {dict.about.ctaContact}
            </Link>
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
      {/* <FloatingButton /> */}
    </main>
  );
}
