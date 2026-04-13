import ApartmentListingCard from "@/components/ApartmentListingCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { apartments } from "@/lib/data";

export default function Apartments() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-white py-20">
        <div className="container">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {language === "en" ? "Apartments" : "Apartamentet"}
          </p>

          <h1 className="max-w-4xl font-heading text-5xl font-bold leading-tight md:text-6xl">
            {language === "en"
              ? "Browse all current apartment options"
              : "Shiko të gjitha opsionet aktuale të apartamenteve"}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {language === "en"
              ? "This page now introduces a more realistic apartment listing structure. Later we can connect local JSON image libraries and Supabase-driven property content."
              : "Kjo faqe tani sjell një strukturë më reale listimi apartamentesh. Më vonë mund ta lidhim me libraritë lokale të fotove dhe përmbajtje të drejtuar nga Supabase."}
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          {apartments.map((apartment) => (
            <ApartmentListingCard
              key={apartment.id}
              id={apartment.id}
              title={apartment.name[language]}
              area={apartment.area[language]}
              guests={apartment.guests}
              summary={apartment.summary[language]}
              bookingUrl={apartment.bookingUrl}
              image={apartment.image}
              detailsLabel={language === "en" ? "View details" : "Shiko detajet"}
              bookLabel={language === "en" ? "Book now" : "Rezervo tani"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}