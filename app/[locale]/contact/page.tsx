import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/config";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header dict={dict} locale={locale} />

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
              {dict.contact.heroTitle}
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              {dict.contact.heroSubtitle}
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
                {dict.contact.companyTitle}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {dict.contact.companyDescription}
              </p>

              {/* Contact Details */}
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{dict.contact.phoneTitle}</p>
                    <a
                      href={`tel:${dict.footer.phone}`}
                      className="text-gray-600 hover:text-[#E8630A] transition-colors"
                    >
                      {dict.footer.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{dict.contact.emailTitle}</p>
                    <a
                      href={`mailto:${dict.footer.email}`}
                      className="text-gray-600 hover:text-[#E8630A] transition-colors"
                    >
                      {dict.footer.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{dict.contact.addressTitle}</p>
                    <p className="text-gray-600 whitespace-pre-line">
                      {dict.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8630A]/8 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#E8630A]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{dict.contact.scheduleTitle}</p>
                    <p className="text-gray-600 whitespace-pre-line">
                      {dict.contact.schedule}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white border border-gray-200 p-6 lg:p-8">
              <h3 className="text-xl font-bold text-[#111827] mb-6">
                {dict.contact.formTitle}
              </h3>
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
      {/* <FloatingButton /> */}
    </main>
  );
}
