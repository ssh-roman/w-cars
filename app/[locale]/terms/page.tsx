import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/config";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const sections = [
    {
      title: dict.terms.section1Title,
      content: [
        dict.terms.section1P1,
        dict.terms.section1P2,
        dict.terms.section1P3,
      ],
    },
    {
      title: dict.terms.section2Title,
      content: [
        dict.terms.section2P1,
        dict.terms.section2P2,
        dict.terms.section2P3,
        dict.terms.section2P4,
      ],
    },
    {
      title: dict.terms.section3Title,
      content: [
        dict.terms.section3P1,
        dict.terms.section3P2,
        dict.terms.section3P3,
        dict.terms.section3P4,
      ],
    },
    {
      title: dict.terms.section4Title,
      content: [
        dict.terms.section4P1,
        dict.terms.section4P2,
        dict.terms.section4P3,
      ],
    },
    {
      title: dict.terms.section5Title,
      content: [
        dict.terms.section5P1,
        dict.terms.section5P2,
        dict.terms.section5P3,
        dict.terms.section5P4,
      ],
    },
    {
      title: dict.terms.section6Title,
      content: [
        dict.terms.section6P1,
        dict.terms.section6P2,
        dict.terms.section6P3,
        dict.terms.section6P4,
      ],
    },
    {
      title: dict.terms.section7Title,
      content: [
        dict.terms.section7P1,
        dict.terms.section7P2,
        dict.terms.section7P3,
        dict.terms.section7P4,
      ],
    },
    {
      title: dict.terms.section8Title,
      content: [
        dict.terms.section8P1,
        dict.terms.section8P2,
        dict.terms.section8P3,
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header dict={dict} locale={locale} />

      {/* Hero */}
      <section className="relative bg-[#0C1220] pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            {dict.terms.title}
          </h1>
          <p className="text-white/40 text-sm">
            {dict.terms.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-bold text-[#111827] mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                {dict.terms.contactNote}{" "}
                <a
                  href={`mailto:${dict.terms.contactEmail}`}
                  className="text-[#E8630A] hover:underline"
                >
                  {dict.terms.contactEmail}
                </a>{" "}
                {dict.terms.contactOr}{" "}
                <a
                  href={`tel:${dict.terms.contactPhone}`}
                  className="text-[#E8630A] hover:underline"
                >
                  {dict.terms.contactPhone}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} locale={locale} />
      {/* <FloatingButton /> */}
    </main>
  );
}
