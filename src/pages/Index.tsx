import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          VisiTirana Apartments
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
          Modern short-stay apartment platform for Tirana
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          This is the clean starter foundation for the VisiTirana project. Next we will
          layer in navigation, homepage sections, listings, bilingual logic, Supabase,
          and maps.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            to="/apartments"
            className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            View apartments
          </Link>

          <Link
            to="/contact"
            className="rounded-md border border-border px-6 py-3 font-semibold"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}