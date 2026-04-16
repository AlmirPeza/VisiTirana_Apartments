import { ArrowRight, CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/lib/data";

export default function Hero() {
  const { language } = useLanguage();

  const sideCards =
    language === "en"
      ? [
          {
            title: "Self check-in ready",
            text: "A smoother arrival process prepared for short-stay guests.",
          },
          {
            title: "Useful Tirana locations",
            text: "Positioning the apartments around practical and attractive areas.",
          },
          {
            title: "Guest-first presentation",
            text: "Cleaner structure, clearer routing, and stronger booking flow.",
          },
        ]
      : [
          {
            title: "Gati për self check-in",
            text: "Një proces më i lehtë mbërritjeje i përgatitur për vizitorët afatshkurtër.",
          },
          {
            title: "Lokacione të dobishme në Tiranë",
            text: "Pozicionim i apartamenteve pranë zonave praktike dhe tërheqëse.",
          },
          {
            title: "Prezantim i fokusuar te vizitori",
            text: "Strukturë më e pastër, navigim më i qartë dhe rrjedhë më e mirë rezervimi.",
          },
        ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {homeContent.hero.eyebrow[language]}
          </p>

          <h2 className="max-w-4xl font-heading text-5xl font-bold leading-tight md:text-6xl">
            {homeContent.hero.title[language]}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {homeContent.hero.description[language]}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/apartments"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
            >
              {language === "en" ? "Browse apartments" : "Shiko apartamentet"}
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
            >
              {language === "en" ? "Contact us" : "Na kontakto"}
              <MessageCircle size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {homeContent.hero.bullets[language].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-[#fffaf8] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-primary" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-gradient-to-br from-[#fff4ef] via-white to-[#ffe2da] p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  {language === "en" ? "City stay structure" : "Strukturë qëndrimi në qytet"}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold">
                  {language === "en"
                    ? "Built for clarity and trust"
                    : "Ndërtuar për qartësi dhe besim"}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {language === "en"
                ? "The homepage now feels closer to a premium apartment brand instead of a simple placeholder layout."
                : "Homepage tani ndihet më afër një brandi premium apartamentesh sesa një layout-i thjesht placeholder."}
            </p>
          </div>

          {sideCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                {language === "en" ? "Highlight" : "Pikë kryesore"}
              </p>

              <h3 className="mt-3 font-heading text-2xl font-bold leading-tight">
                {card.title}
              </h3>

              <p className="mt-3 text-base leading-8 text-muted-foreground">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}