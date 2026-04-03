import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const closeMobileMenu = () => setMobileOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "nav-link text-sm",
      isActive ? "active-nav-link text-foreground" : "",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={closeMobileMenu}
          aria-label="Go to homepage"
        >
          <span className="inline-block h-3 w-3 rounded-full bg-[#ff5757]" />
          <span className="font-heading text-lg font-bold tracking-[0.22em] text-foreground">
            VISITIRANA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/apartments" className={navLinkClass}>
            Apartments
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            {language === "en" ? "SQ" : "EN"}
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <div className="container flex flex-col gap-2 py-4">
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `rounded-md px-2 py-3 text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/apartments"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `rounded-md px-2 py-3 text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              Apartments
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `rounded-md px-2 py-3 text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-foreground/80"
                }`
              }
            >
              Contact
            </NavLink>

            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                closeMobileMenu();
              }}
              className="mt-2 w-fit rounded-full border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground"
            >
              {language === "en" ? "Switch to SQ" : "Switch to EN"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}