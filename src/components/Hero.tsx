import { Link } from "react-router-dom";

import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/lib/data";

export default function Hero() {
  const { language } = useLanguage();
  const content = homeContent.hero;

  return (
    <section className="edge-hero">
      <div className="container grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff6b6b]">
            {content.eyebrow[language]}
          </p>

          <h1 className="max-w-5xl font-heading text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            {content.title[language]}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            {content.description[language]}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium uppercase tracking-[0.22em] text-white/80">
            {content.bullets[language].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/apartments"
              className="rounded-full bg-[#ff5757] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff3d3d]"
            >
              {language === "en" ? "Explore apartments" : "Shiko apartamentet"}
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {language === "en" ? "Contact us" : "Na kontakto"}
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#ff5f6d] via-[#ff8a5b] to-[#7b61ff] p-8">
            <div className="space-y-6 rounded-[1.25rem] bg-black/20 p-8 text-white">
              <div className="h-3 w-24 rounded-full bg-white/40" />
              <div className="h-3 w-40 rounded-full bg-white/30" />
              <div className="grid gap-4 pt-4">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                    Tirana stays
                  </p>
                  <p className="mt-2 text-2xl font-semibold">
                    {language === "en" ? "Modern, practical, central" : "Moderne, praktike, qendrore"}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-white/10" />
                  <div className="h-20 rounded-2xl bg-white/10" />
                  <div className="h-20 rounded-2xl bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}