import { Mail, MapPin, Send } from "lucide-react";

import GoogleMap from "@/components/GoogleMap";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-white py-20">
        <div className="container">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {language === "en" ? "Contact" : "Kontakt"}
          </p>

          <h1 className="max-w-4xl font-heading text-5xl font-bold leading-tight md:text-6xl">
            {language === "en"
              ? "Get in touch about apartment stays in Tirana"
              : "Na kontakto për qëndrimet në apartamente në Tiranë"}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            {language === "en"
              ? "This page now reflects a more realistic contact experience for Visitirana. Later we can connect real email delivery, WhatsApp actions, and live map locations."
              : "Kjo faqe tani pasqyron një eksperiencë më reale kontakti për Visitirana. Më vonë mund ta lidhim me dërgim real email-i, veprime WhatsApp dhe lokacione reale në hartë."}
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
            <div className="border-b border-black/5 p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                    {language === "en" ? "Email Us" : "Na shkruaj me email"}
                  </p>
                  <h2 className="mt-1 font-heading text-3xl font-bold">
                    {language === "en" ? "Send a message" : "Dërgo një mesazh"}
                  </h2>
                </div>
              </div>
            </div>

            <div className="space-y-5 p-8">
              <div className="rounded-2xl border border-black/5 bg-[#fffaf8] p-4">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {language === "en" ? "Your Name" : "Emri juaj"}
                </label>
                <div className="h-12 rounded-xl bg-white" />
              </div>

              <div className="rounded-2xl border border-black/5 bg-[#fffaf8] p-4">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {language === "en" ? "Your Email" : "Email-i juaj"}
                </label>
                <div className="h-12 rounded-xl bg-white" />
              </div>

              <div className="rounded-2xl border border-black/5 bg-[#fffaf8] p-4">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {language === "en" ? "Your Message" : "Mesazhi juaj"}
                </label>
                <div className="h-32 rounded-xl bg-white" />
              </div>

              <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95">
                <Send size={16} />
                {language === "en" ? "Send Message" : "Dërgo Mesazh"}
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                {language === "en" ? "Contact Details" : "Detajet e kontaktit"}
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      {language === "en" ? "Location focus" : "Fokus lokacioni"}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      {language === "en"
                        ? "Tirana city apartments with practical guest access."
                        : "Apartamente në qytetin e Tiranës me akses praktik për vizitorët."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      hello@visitirana.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <GoogleMap
              title={language === "en" ? "Google Maps" : "Google Maps"}
              subtitle={
                language === "en"
                  ? "Structured placeholder for apartment and city-area mapping."
                  : "Placeholder i strukturuar për hartën e apartamenteve dhe zonës së qytetit."
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}