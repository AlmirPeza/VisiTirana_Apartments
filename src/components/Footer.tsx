import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            VisiTirana
          </p>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Guest-focused apartment presentation for Tirana, built with a clean
            React + TypeScript foundation and ready for bilingual content,
            listings, maps, and availability integrations.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <div className="flex items-center gap-4">
            <Link to="/" className="transition hover:text-foreground">
              Home
            </Link>
            <Link to="/apartments" className="transition hover:text-foreground">
              Apartments
            </Link>
            <Link to="/contact" className="transition hover:text-foreground">
              Contact
            </Link>
          </div>

          <p>© {year} VisiTirana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}