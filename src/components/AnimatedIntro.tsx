import { useLanguage } from "@/contexts/LanguageContext";

export default function AnimatedIntro() {
  const { language } = useLanguage();

  const bullets =
    language === "en"
      ? ["Guest Favourite", "Self Check-In", "Enjoy Tirana"]
      : ["Të preferuara nga vizitorët", "Self Check-In", "Shijo Tiranën"];

  return (
    <section className="edge-hero bg-black text-white">
      <div className="container relative">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Visitirana Apartments
          </div>

          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-14 shadow-2xl md:px-10 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[8%] top-[18%] h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute right-[10%] top-[20%] h-36 w-36 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute bottom-[12%] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-400/10 blur-3xl" />
            </div>

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-primary">
                {language === "en" ? "Premium apartment experience" : "Eksperiencë premium apartamentesh"}
              </p>

              <h1 className="mt-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                {language === "en"
                  ? "A cleaner and more premium first impression for Tirana stays"
                  : "Një prezantim më i pastër dhe më premium për qëndrimet në Tiranë"}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                {language === "en"
                  ? "This intro structure gives the homepage a stronger visual entrance before the main booking content starts."
                  : "Kjo strukturë hyrëse i jep homepage-it një hyrje vizuale më të fortë përpara se të fillojë përmbajtja kryesore e rezervimit."}
              </p>

              <div className="mt-12 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
                  {bullets[0]}
                </div>

                <div className="hidden h-px w-10 bg-white/20 md:block" />

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/85">
                  {bullets[1]}
                </div>

                <div className="hidden h-px w-10 bg-white/20 md:block" />

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  {bullets[2]}
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}