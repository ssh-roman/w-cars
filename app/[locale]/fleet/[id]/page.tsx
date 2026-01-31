import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Locale } from "@/lib/i18n/config";
import CarDetailContent from "./CarDetailContent";

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}) {
  const { id, locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header dict={dict} locale={locale} />
      <CarDetailContent dict={dict} locale={locale} id={id} />
      <Footer dict={dict} locale={locale} />
    </main>
  );
}
