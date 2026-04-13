import { Link, useParams } from "react-router-dom";
import { MapPin, Users, CheckCircle2 } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { getApartmentById } from "@/lib/data";

export default function ApartmentDetail() {
  const { id } = useParams();
  const { language } = useLanguage();

  const apartment = getApartmentById(id ?? "");

  if (!apartment) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <section className="container py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {language === "en" ? "Apartment" : "Apartamenti"}
          </p>

          <h1 className="font-heading text-5xl font-bold md:text-6xl">
            {language === "en" ? "Apartment not found" : "Apartamenti nuk u gjet"}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {language === "en"
              ? "The apartment you tried to open does not exist in the current data set."
              : "Apartamenti që u përpoqe të hapje nuk ekziston në të dhënat aktuale."}
          </p>

          <Link
            to="/apartments"
            className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            {language === "en" ? "Back to apartments" : "Kthehu te apartamentet"}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-white py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-gray-100 shadow-sm">
            <img
              src={apartment.image}
              alt={apartment.name[language]}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {language === "en" ? "Apartment Detail" : "Detajet e Apartamentit"}
            </p>

            <h1 className="font-heading text-5xl font-bold leading-tight md:text-6xl">
              {apartment.name[language]}
            </h1>

            <div className="mt-6 space-y-3 text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>{apartment.area[language]}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={18} className="text-primary" />
                <span>{apartment.guests} guests</span>
              </div>
            </div>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              {apartment.description[language]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={apartment.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                {language === "en" ? "Book this apartment" : "Rezervo këtë apartament"}
              </a>

              <Link
                to="/apartments"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
              >
                {language === "en" ? "Back to listings" : "Kthehu te listimet"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {language === "en" ? "Summary" : "Përmbledhje"}
            </p>

            <p className="text-lg leading-8 text-muted-foreground">
              {apartment.summary[language]}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {language === "en" ? "Highlights" : "Pikat kryesore"}
            </p>

            <div className="space-y-4">
              {apartment.amenities.map((item) => (
                <div key={item.en} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 text-primary" />
                  <p className="text-base leading-7 text-muted-foreground">
                    {item[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}