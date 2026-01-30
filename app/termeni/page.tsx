import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const sections = [
  {
    title: "1. Condiții generale",
    content: [
      'Prezentele Termeni și Condiții reglementează raportul dintre W.Rent SRL (denumit în continuare "Compania") și persoana care închiriază vehiculul (denumit în continuare "Clientul").',
      "Prin efectuarea unei rezervări sau semnarea contractului de închiriere, Clientul acceptă integral acești termeni.",
      "Compania își rezervă dreptul de a modifica acești termeni cu notificarea prealabilă a clienților.",
    ],
  },
  {
    title: "2. Condiții de închiriere",
    content: [
      "Vârsta minimă a conducătorului auto: 21 de ani.",
      "Experiența minimă de conducere: 1 an de la obținerea permisului de conducere.",
      "Documente necesare: permis de conducere valid, act de identitate sau pașaport, adresă de contact validă.",
      "Clientul trebuie să prezinte documentele originale la momentul preluării vehiculului.",
    ],
  },
  {
    title: "3. Rezervare și plată",
    content: [
      "Rezervarea se poate efectua online, telefonic sau la sediul companiei.",
      "Prețul de închiriere include: asigurarea de răspundere civilă auto, kilometri nelimitați pe teritoriul Republicii Moldova și un rezervor plin de combustibil.",
      "Plata se efectuează la preluarea vehiculului în numerar, prin transfer bancar sau cu card bancar (Visa/Mastercard).",
      "Anularea gratuită este posibilă cu minimum 24 de ore înainte de data de preluare.",
    ],
  },
  {
    title: "4. Garanție și depozit",
    content: [
      "Pentru anumite vehicule din flotă, închirierea se face fără garanție (depozit). Aceste vehicule sunt marcate corespunzător.",
      "Pentru vehiculele care necesită garanție, depozitul se restituie integral la returnarea mașinii în stare corespunzătoare.",
      "Suma garanției variază în funcție de categoria vehiculului și este comunicată înainte de semnarea contractului.",
    ],
  },
  {
    title: "5. Utilizarea vehiculului",
    content: [
      "Vehiculul poate fi utilizat exclusiv pe teritoriul Republicii Moldova, dacă nu se convine altfel în scris.",
      "Este interzisă utilizarea vehiculului: în curse auto, pentru transport de mărfuri periculoase, sub influența substanțelor interzise, pentru subînchiriere.",
      "Clientul este responsabil pentru respectarea regulilor de circulație și plata amenzilor.",
      "Fumatul în vehicul este interzis. Taxa de curățare: 50 €.",
    ],
  },
  {
    title: "6. Returnarea vehiculului",
    content: [
      "Vehiculul se returnează la data și ora convenite în contract, la locația stabilită.",
      "Întârzierea la returnare se taxează cu tariful zilnic complet pentru fiecare zi suplimentară.",
      "Vehiculul se returnează cu rezervorul plin de combustibil. În caz contrar, se percepe taxa de alimentare plus un comision de serviciu.",
      "Orice deteriorare constatată la returnare, care nu a fost documentată la preluare, este în responsabilitatea Clientului.",
    ],
  },
  {
    title: "7. Asigurare și responsabilitate",
    content: [
      "Toate vehiculele sunt asigurate cu asigurare de răspundere civilă auto (RCA) valabilă.",
      "În cazul unui accident, Clientul trebuie să contacteze imediat poliția și Compania.",
      "Clientul este responsabil pentru franșiza stabilită în contractul de asigurare, dacă accidentul a fost produs din vina sa.",
      "Asigurarea CASCO suplimentară este disponibilă contra cost.",
    ],
  },
  {
    title: "8. Litigii",
    content: [
      "Orice neînțelegere va fi soluționată pe cale amiabilă.",
      "În cazul în care nu se ajunge la o soluție amiabilă, litigiile vor fi soluționate de instanțele competente din Republica Moldova.",
      "Legea aplicabilă este legislația Republicii Moldova.",
    ],
  },
];

export default function TermeniPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0C1220] pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Termeni și Condiții
          </h1>
          <p className="text-white/40 text-sm">
            Ultima actualizare: Ianuarie 2025
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
                Ai întrebări despre acești termeni? Contactează-ne la{" "}
                <a
                  href="mailto:office@wrent.md"
                  className="text-[#E8630A] hover:underline"
                >
                  office@wrent.md
                </a>{" "}
                sau la{" "}
                <a
                  href="tel:+37368585404"
                  className="text-[#E8630A] hover:underline"
                >
                  +373 68 585 404
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButton />
    </main>
  );
}
