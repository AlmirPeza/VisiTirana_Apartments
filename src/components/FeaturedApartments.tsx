import ApartmentCard from "@/components/ApartmentCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { featuredApartments, homeContent } from "@/lib/data";

export default function FeaturedApartments() {
  const { language } = useLanguage();
  const content = homeContent.featured;

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {content.eyebrow[language]}
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            {content.title[language]}
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {content.description[language]}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featuredApartments.map((apartment) => (
            <ApartmentCard
              key={apartment.id}
              title={apartment.name[language]}
              area={apartment.area[language]}
              guests={apartment.guests}
              bookingUrl={apartment.bookingUrl}
              image={apartment.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}