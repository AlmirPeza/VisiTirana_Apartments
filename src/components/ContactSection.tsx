import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent, siteContent } from "@/lib/data";

export default function ContactSection() {
  const { language } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-[#fff1ec] via-[#ffe2da] to-[#ffd8d2] py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              {homeContent.contact.eyebrow[language]}
            </p>

            <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
              {homeContent.contact.title[language]}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {homeContent.contact.description[language]}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
              >
                {homeContent.contact.buttonPrimary[language]}
              </Link>

              <Link
                to="/apartments"
                className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                {homeContent.contact.buttonSecondary[language]}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Email
                  </p>
                  <p className="mt-1 text-base text-foreground">
                    {siteContent.contactInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-base text-foreground">
                    {siteContent.contactInfo.whatsapp}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {language === "en" ? "Location" : "Lokacioni"}
                  </p>
                  <p className="mt-1 text-base text-foreground">
                    {siteContent.contactInfo.location[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}