import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import CarGrid from "@/components/CarGrid";
import ValueProposition from "@/components/ValueProposition";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header />
      <Hero />
      <FilterBar />
      <CarGrid />
      <ValueProposition />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingButton />
    </main>
  );
}
