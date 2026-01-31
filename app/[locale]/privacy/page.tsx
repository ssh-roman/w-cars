import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/config";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const sections = [
    {
      title: dict.privacy.section1Title,
      content: [dict.privacy.section1P1, dict.privacy.section1P2],
    },
    {
      title: dict.privacy.section2Title,
      content: [
        dict.privacy.section2P1,
        dict.privacy.section2P2,
        dict.privacy.section2P3,
        dict.privacy.section2P4,
      ],
    },
    {
      title: dict.privacy.section3Title,
      content: [
        dict.privacy.section3P1,
        dict.privacy.section3P2,
        dict.privacy.section3P3,
        dict.privacy.section3P4,
        dict.privacy.section3P5,
      ],
    },
    {
      title: dict.privacy.section4Title,
      content: [
        dict.privacy.section4P1,
        dict.privacy.section4P2,
        dict.privacy.section4P3,
        dict.privacy.section4P4,
        dict.privacy.section4P5,
      ],
    },
    {
      title: dict.privacy.section5Title,
      content: [
        dict.privacy.section5P1,
        dict.privacy.section5P2,
        dict.privacy.section5P3,
      ],
    },
    {
      title: dict.privacy.section6Title,
      content: [
        dict.privacy.section6P1,
        dict.privacy.section6P2,
        dict.privacy.section6P3,
        dict.privacy.section6P4,
        dict.privacy.section6P5,
        dict.privacy.section6P6,
      ],
    },
    {
      title: dict.privacy.section7Title,
      content: [dict.privacy.section7P1, dict.privacy.section7P2],
    },
    {
      title: dict.privacy.section8Title,
      content: [
        dict.privacy.section8P1,
        dict.privacy.section8P2,
        dict.privacy.section8P3,
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
            {dict.privacy.title}
          </h1>
          <p className="text-white/40 text-sm">{dict.privacy.lastUpdated}</p>
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
                {dict.privacy.contactNote}{" "}
                <a
                  href={`mailto:${dict.privacy.contactEmail}`}
                  className="text-[#E8630A] hover:underline"
                >
                  {dict.privacy.contactEmail}
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
