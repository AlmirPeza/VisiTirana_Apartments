import {
  CalendarDays,
  CheckCircle2,
  KeyRound,
  MessageCircle,
  MapPinned,
} from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/lib/data";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const steps =
    language === "en"
      ? [
          {
            icon: CalendarDays,
            title: "Choose your dates",
            text: "Start with the apartment that fits your trip and timing.",
          },
          {
            icon: MessageCircle,
            title: "Receive your details",
            text: "Guest communication and arrival information stay clear and practical.",
          },
          {
            icon: KeyRound,
            title: "Use self check-in",
            text: "A smoother access flow keeps the arrival experience simpler.",
          },
          {
            icon: CheckCircle2,
            title: "Settle in quickly",
            text: "The goal is less friction and a better first impression for the stay.",
          },
        ]
      : [
          {
            icon: CalendarDays,
            title: "Zgjidh datat",
            text: "Fillo me apartamentin që i përshtatet udhëtimit dhe kohës tënde.",
          },
          {
            icon: MessageCircle,
            title: "Merr detajet",
            text: "Komunikimi me vizitorin dhe informacioni i hyrjes mbeten të qarta dhe praktike.",
          },
          {
            icon: KeyRound,
            title: "Përdor self check-in",
            text: "Një rrjedhë më e lehtë hyrjeje e bën mbërritjen më të thjeshtë.",
          },
          {
            icon: CheckCircle2,
            title: "Sistematohu shpejt",
            text: "Qëllimi është më pak fërkim dhe një përshtypje më e mirë në fillim të qëndrimit.",
          },
        ];

  return (
    <section className="bg-[#ff6c4d] py-24 text-white">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
            {homeContent.whyChooseUs.eyebrow[language]}
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            {homeContent.whyChooseUs.title[language]}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            {homeContent.whyChooseUs.description[language]}
          </p>

          <div className="mt-8 rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <MapPinned size={18} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                  {language === "en" ? "Guest flow" : "Rrjedha e vizitorit"}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold">
                  {language === "en"
                    ? "A clearer booking-to-arrival story"
                    : "Një histori më e qartë nga rezervimi te mbërritja"}
                </h3>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-white/85">
              {language === "en"
                ? "This section now feels more intentional and helps the homepage explain how the stay experience works."
                : "Ky seksion tani ndihet më i menduar dhe ndihmon homepage-in të shpjegojë si funksionon eksperienca e qëndrimit."}
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <Icon size={20} />
                  </div>

                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/65">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-bold leading-tight">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-white/85">
                  {step.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}