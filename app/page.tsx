import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CarGrid from "@/components/CarGrid";
import ValueProposition from "@/components/ValueProposition";
import FAQ from "@/components/FAQ";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header />
      <Hero />
      <CarGrid />
      <ValueProposition />
      <FAQ />
      <PartnerSection />
      <Footer />
      <FloatingButton />
    </main>
  );
}
