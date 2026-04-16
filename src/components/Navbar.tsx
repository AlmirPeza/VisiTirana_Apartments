import { Link, NavLink } from "react-router-dom";

import { useLanguage } from "@/contexts/LanguageContext";
import { siteContent } from "@/lib/data";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "text-sm font-semibold uppercase tracking-[0.2em] transition",
      isActive ? "text-primary" : "text-foreground/70 hover:text-foreground",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {siteContent.brand.name}
            </p>
            <p className="text-sm font-medium text-foreground/70">
              {siteContent.brand.title[language]}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass} end>
            {siteContent.navbar.home[language]}
          </NavLink>

          <NavLink to="/apartments" className={navLinkClass}>
            {siteContent.navbar.apartments[language]}
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            {siteContent.navbar.contact[language]}
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={toggleLanguage}
          className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground transition hover:border-primary hover:text-primary"
        >
          {language === "en" ? "SQ" : "EN"}
        </button>
      </div>
    </header>
  );
}