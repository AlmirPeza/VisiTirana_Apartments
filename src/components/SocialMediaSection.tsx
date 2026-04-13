import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type GoogleMapProps = {
  title?: string;
  subtitle?: string;
};

export default function GoogleMap({ title, subtitle }: GoogleMapProps) {
  const { language } = useLanguage();

  const defaultTitle =
    language === "en" ? "Location preview" : "Pamje e lokacionit";

  const defaultSubtitle =
    language === "en"
      ? "This is a structured placeholder for the Google Maps component. Later we can connect the real map, markers, and apartment coordinates."
      : "Ky është një placeholder i strukturuar për komponentin Google Maps. Më vonë mund ta lidhim me hartën reale, marker-at dhe koordinatat e apartamenteve.";

  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/5 p-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {title ?? defaultTitle}
        </p>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          {subtitle ?? defaultSubtitle}
        </p>
      </div>

      <div className="relative h-[320px] overflow-hidden bg-gradient-to-br from-[#fff3ef] via-[#ffe3dd] to-[#ffd6cf]">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute left-[12%] top-[20%] h-24 w-24 rounded-full border border-white/40" />
          <div className="absolute left-[38%] top-[38%] h-32 w-32 rounded-full border border-white/40" />
          <div className="absolute right-[18%] top-[18%] h-20 w-20 rounded-full border border-white/40" />
          <div className="absolute bottom-[18%] left-[22%] h-28 w-28 rounded-full border border-white/40" />
          <div className="absolute bottom-[22%] right-[24%] h-24 w-24 rounded-full border border-white/40" />

          <div className="absolute left-0 top-[32%] h-px w-full bg-white/40" />
          <div className="absolute left-0 top-[56%] h-px w-full bg-white/40" />
          <div className="absolute left-[24%] top-0 h-full w-px bg-white/40" />
          <div className="absolute left-[58%] top-0 h-full w-px bg-white/40" />
        </div>

        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg">
            <MapPin size={24} />
          </div>

          <div className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow">
            {language === "en" ? "Tirana city area" : "Zona e qytetit të Tiranës"}
          </div>
        </div>
      </div>
    </div>
  );
}