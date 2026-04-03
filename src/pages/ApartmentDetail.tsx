import { useParams } from "react-router-dom";

export default function ApartmentDetail() {
  const { id } = useParams();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Apartment detail
        </p>

        <h1 className="text-5xl font-bold md:text-6xl">
          Apartment: {id ?? "unknown"}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          This page will later contain gallery, property description, map, availability,
          and booking actions.
        </p>
      </section>
    </main>
  );
}