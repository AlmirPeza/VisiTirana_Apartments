import { Link } from "react-router-dom";

import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/lib/data";

export default function ContactSection() {
  const { language } = useLanguage();
  const content = homeContent.contact;

  return (
    <section className="bg-gradient-to-br from-[#fff3ef] via-[#ffe7e1] to-[#ffe3f0] py-24">
      <div className="container">
        <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-lg">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                {content.eyebrow[language]}
              </p>

              <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
                {content.title[language]}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                {content.description[language]}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  {content.buttonPrimary[language]}
                </Link>

                <Link
                  to="/apartments"
                  className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-black/5"
                >
                  {content.buttonSecondary[language]}
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[#fff7f5] p-6">
              <div className="space-y-4">
                <div className="rounded-2xl border border-black/5 bg-white p-4">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {language === "en" ? "Your Name" : "Emri juaj"}
                  </label>
                  <div className="h-12 rounded-xl bg-muted" />
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {language === "en" ? "Your Email" : "Email-i juaj"}
                  </label>
                  <div className="h-12 rounded-xl bg-muted" />
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4">
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {language === "en" ? "Your Message" : "Mesazhi juaj"}
                  </label>
                  <div className="h-28 rounded-xl bg-muted" />
                </div>

                <div className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground">
                  {language === "en" ? "Send Message" : "Dërgo Mesazh"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}