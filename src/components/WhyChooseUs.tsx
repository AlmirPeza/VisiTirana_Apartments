import { ArrowRight, CheckCircle2, DoorOpen, Smartphone } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/lib/data";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const content = homeContent.whyChooseUs;

  const icons = [Smartphone, ArrowRight, DoorOpen];

  return (
    <section className="bg-[#ff7a6a] py-24 text-white">
      <div className="container">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/85">
            {content.eyebrow[language]}
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            {content.title[language]}
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/85">
            {content.description[language]}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {content.steps[language].map((step, index) => {
            const Icon = icons[index] ?? CheckCircle2;

            return (
              <div
                key={step}
                className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#ff5b4d]">
                  <Icon size={22} />
                </div>

                <p className="text-lg font-semibold leading-8 text-white">
                  {step}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href="https://wa.me/355000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:brightness-95"
          >
            {content.cta[language]}
          </a>
        </div>
      </div>
    </section>
  );
}