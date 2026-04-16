import { Link } from "react-router-dom";

import { useLanguage } from "@/contexts/LanguageContext";
import { siteContent } from "@/lib/data";

export default function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              {siteContent.brand.name}
            </p>

            <h3 className="mt-3 font-heading text-2xl font-bold">
              {siteContent.brand.title[language]}
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              {siteContent.footer.description[language]}
            </p>
          </div>

          <div className="md:text-right">
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                to="/"
                className="text-sm font-medium text-foreground/70 transition hover:text-primary"
              >
                {siteContent.navbar.home[language]}
              </Link>

              <Link
                to="/apartments"
                className="text-sm font-medium text-foreground/70 transition hover:text-primary"
              >
                {siteContent.navbar.apartments[language]}
              </Link>

              <Link
                to="/contact"
                className="text-sm font-medium text-foreground/70 transition hover:text-primary"
              >
                {siteContent.navbar.contact[language]}
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              © {year} {siteContent.brand.name}. {siteContent.footer.rights[language]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}