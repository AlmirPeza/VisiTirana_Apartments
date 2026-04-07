import { MapPin, Users } from "lucide-react";

type ApartmentCardProps = {
  title: string;
  area: string;
  guests: string;
  bookingUrl: string;
  image: string;
};

export default function ApartmentCard({
  title,
  area,
  guests,
  bookingUrl,
  image,
}: ApartmentCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
          {title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span>{area}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="text-primary" />
            <span>{guests} guests</span>
          </div>
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          Book
        </a>
      </div>
    </article>
  );
}