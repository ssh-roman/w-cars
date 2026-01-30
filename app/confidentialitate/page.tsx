import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

const sections = [
  {
    title: "1. Informații generale",
    content: [
      'W.Rent SRL (denumit în continuare "W.Rent", "noi") respectă confidențialitatea datelor dumneavoastră personale. Această politică explică modul în care colectăm, utilizăm și protejăm informațiile dumneavoastră.',
      "Politica se aplică tuturor vizitatorilor site-ului wrent.md și clienților care utilizează serviciile noastre de închiriere auto.",
    ],
  },
  {
    title: "2. Date colectate",
    content: [
      "Date de identificare: nume, prenume, număr de telefon, adresă de email.",
      "Date ale documentelor: seria și numărul permisului de conducere, seria și numărul actului de identitate/pașaportului.",
      "Date tehnice: adresa IP, tipul browser-ului, paginile vizitate pe site-ul nostru, cookie-uri.",
      "Date de plată: informațiile cardului bancar sunt procesate securizat prin furnizorul nostru de plăți și nu sunt stocate pe serverele noastre.",
    ],
  },
  {
    title: "3. Scopul prelucrării",
    content: [
      "Procesarea rezervărilor și contractelor de închiriere.",
      "Comunicarea cu dumneavoastră privind rezervările, modificările sau anulările.",
      "Îmbunătățirea serviciilor și a experienței pe site.",
      "Respectarea obligațiilor legale (raportări fiscale, evidență contracte).",
      "Trimiterea de oferte și noutăți doar cu acordul dumneavoastră explicit.",
    ],
  },
  {
    title: "4. Cookie-uri",
    content: [
      "Site-ul nostru utilizează cookie-uri pentru a asigura funcționarea corectă și pentru a analiza traficul.",
      "Cookie-uri esențiale: necesare pentru funcționarea site-ului. Nu pot fi dezactivate.",
      "Cookie-uri analitice: ne ajută să înțelegem cum este utilizat site-ul. Sunt anonimizate.",
      "Cookie-uri de marketing: utilizate pentru a afișa reclame relevante. Sunt activate doar cu consimțământul dumneavoastră.",
      "Puteți gestiona preferințele cookie-urilor din setările browser-ului dumneavoastră.",
    ],
  },
  {
    title: "5. Partajarea datelor",
    content: [
      "Nu vindem și nu închiriem datele dumneavoastră personale către terți.",
      "Datele pot fi partajate cu: companii de asigurări (în cazul accidentelor), autorități publice (la cerere legală), furnizori de servicii IT (hosting, email) care respectă standarde de securitate echivalente.",
      "Toate companiile terțe cu care lucrăm au obligații contractuale de a proteja datele dumneavoastră.",
    ],
  },
  {
    title: "6. Drepturile dumneavoastră",
    content: [
      "Dreptul de acces: puteți solicita o copie a datelor pe care le deținem despre dumneavoastră.",
      "Dreptul la rectificare: puteți solicita corectarea datelor inexacte.",
      "Dreptul la ștergere: puteți solicita ștergerea datelor, cu excepția celor necesare obligațiilor legale.",
      "Dreptul la portabilitate: puteți solicita transferul datelor către un alt operator.",
      "Dreptul de opoziție: puteți refuza prelucrarea datelor în scopuri de marketing.",
      "Pentru exercitarea acestor drepturi, contactați-ne la office@wrent.md.",
    ],
  },
  {
    title: "7. Securitatea datelor",
    content: [
      "Utilizăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor: conexiuni criptate (SSL/TLS), acces restricționat la baze de date, audit periodic de securitate.",
      "În cazul unei breșe de securitate, vom notifica autoritățile competente și persoanele afectate conform legislației în vigoare.",
    ],
  },
  {
    title: "8. Retenția datelor",
    content: [
      "Datele personale sunt păstrate pe durata relației contractuale și pentru o perioadă de 5 ani ulterior, conform cerințelor legale fiscale.",
      "Datele tehnice (cookie-uri, loguri) sunt păstrate maxim 12 luni.",
      "La expirarea perioadei de retenție, datele sunt șterse sau anonimizate.",
    ],
  },
];

export default function ConfidentialitatePage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0C1220] pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Politica de Confidențialitate & Cookie-uri
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
                Ai întrebări privind datele tale personale? Contactează
                responsabilul nostru de protecția datelor la{" "}
                <a
                  href="mailto:office@wrent.md"
                  className="text-[#E8630A] hover:underline"
                >
                  office@wrent.md
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
