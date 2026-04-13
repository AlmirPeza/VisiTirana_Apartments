import { Link } from "react-router-dom";
import { MapPin, Users } from "lucide-react";

type ApartmentListingCardProps = {
  id: string;
  title: string;
  area: string;
  guests: string;
  summary: string;
  bookingUrl: string;
  image: string;
  detailsLabel: string;
  bookLabel: string;
};

export default function ApartmentListingCard({
  id,
  title,
  area,
  guests,
  summary,
  bookingUrl,
  image,
  detailsLabel,
  bookLabel,
}: ApartmentListingCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
            {title}
          </h3>

          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>{area}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} className="text-primary" />
              <span>{guests} guests</span>
            </div>
          </div>
        </div>

        <p className="text-base leading-7 text-muted-foreground">{summary}</p>

        <div className="flex flex-wrap gap-3">
          <Link
            to={`/apartments/${id}`}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
          >
            {detailsLabel}
          </Link>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            {bookLabel}
          </a>
        </div>
      </div>
    </article>
  );
}