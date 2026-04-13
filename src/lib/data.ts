export type Language = "en" | "sq";

export type LocalizedText = {
  en: string;
  sq: string;
};

export type ApartmentPreview = {
  id: string;
  name: LocalizedText;
  area: LocalizedText;
  guests: string;
  bookingUrl: string;
  image: string;
};

export type Apartment = ApartmentPreview & {
  summary: LocalizedText;
  description: LocalizedText;
  amenities: LocalizedText[];
};

export const homeContent = {
  hero: {
    eyebrow: {
      en: "VISITIRANA APARTMENTS",
      sq: "VISITIRANA APARTMENTS",
    },
    title: {
      en: "Modern short-stay apartments in Tirana",
      sq: "Apartamente moderne me qëndrim të shkurtër në Tiranë",
    },
    description: {
      en: "Guest-focused stays with practical comfort, self check-in, and strong locations near Tirana's most useful areas.",
      sq: "Qëndrime të fokusuara te komoditeti, self check-in dhe lokacione shumë të mira pranë zonave më të dobishme të Tiranës.",
    },
    bullets: {
      en: ["Guest Favourite", "Self Check-In", "Enjoy Tirana"],
      sq: ["Të preferuara nga vizitorët", "Self Check-In", "Shijo Tiranën"],
    },
  },
  featured: {
    eyebrow: {
      en: "Featured Apartments",
      sq: "Apartamentet Kryesore",
    },
    title: {
      en: "Stay options designed for comfort and convenience",
      sq: "Opsione qëndrimi të menduara për rehati dhe praktikë",
    },
    description: {
      en: "A clean starter selection for the homepage. Later we will connect richer cards, galleries, and live property data.",
      sq: "Një përzgjedhje fillestare e pastër për homepage. Më vonë do lidhim karta më të plota, galeri dhe të dhëna reale të apartamenteve.",
    },
  },
  whyChooseUs: {
    eyebrow: {
      en: "Why Choose Us",
      sq: "Pse të na zgjidhni",
    },
    title: {
      en: "Simple booking flow, fast access, and a smoother arrival",
      sq: "Proces i thjeshtë rezervimi, hyrje e shpejtë dhe mbërritje më e lehtë",
    },
    description: {
      en: "This section prepares the site for the self check-in story. Later we can replace these blocks with the final illustrated sequence.",
      sq: "Ky seksion përgatit faqen për historinë e self check-in. Më vonë mund t’i zëvendësojmë këto blloqe me ilustrimin final.",
    },
    steps: {
      en: [
        "Choose apartment and travel dates",
        "Receive check-in and location details",
        "Arrive and self check-in easily",
      ],
      sq: [
        "Zgjidh apartamentin dhe datat",
        "Merr detajet e hyrjes dhe lokacionit",
        "Mbërrij dhe bëj self check-in lehtësisht",
      ],
    },
    cta: {
      en: "Contact on WhatsApp",
      sq: "Na kontakto në WhatsApp",
    },
  },
  contact: {
    eyebrow: {
      en: "Contact",
      sq: "Kontakt",
    },
    title: {
      en: "Need help choosing the right apartment?",
      sq: "Të duhet ndihmë për të zgjedhur apartamentin e duhur?",
    },
    description: {
      en: "For now this section acts as a strong homepage CTA. Later we can upgrade it into the full branded contact form experience.",
      sq: "Për tani ky seksion shërben si CTA e fortë në homepage. Më vonë mund ta kthejmë në formën e plotë të branduar të kontaktit.",
    },
    buttonPrimary: {
      en: "Go to contact page",
      sq: "Shko te faqja e kontaktit",
    },
    buttonSecondary: {
      en: "Browse apartments",
      sq: "Shiko apartamentet",
    },
  },
};

export const apartments: Apartment[] = [
  {
    id: "blloku-balcony",
    name: {
      en: "Blloku Balcony",
      sq: "Blloku Balcony",
    },
    area: {
      en: "Ish-Blloku",
      sq: "Ish-Blloku",
    },
    guests: "2–3",
    bookingUrl: "https://www.airbnb.com/",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    summary: {
      en: "A practical stay near one of Tirana's most active and useful areas.",
      sq: "Një qëndrim praktik pranë një prej zonave më aktive dhe të dobishme të Tiranës.",
    },
    description: {
      en: "Blloku Balcony is positioned as a bright, guest-friendly option for travellers who want quick access to central Tirana, cafés, restaurants, and a practical city stay.",
      sq: "Blloku Balcony paraqitet si një opsion i ndriçuar dhe i përshtatshëm për vizitorët që duan akses të shpejtë në qendrën e Tiranës, kafene, restorante dhe një qëndrim praktik në qytet.",
    },
    amenities: [
      {
        en: "Self check-in friendly setup",
        sq: "Mundësi praktike për self check-in",
      },
      {
        en: "Strong central location",
        sq: "Lokacion shumë i mirë qendror",
      },
      {
        en: "Designed for short city stays",
        sq: "I menduar për qëndrime të shkurtra në qytet",
      },
    ],
  },
  {
    id: "one-bedroom-flat",
    name: {
      en: "1 Bedroom Flat",
      sq: "Apartament 1+1",
    },
    area: {
      en: "Taiwani",
      sq: "Taiwani",
    },
    guests: "3–4",
    bookingUrl: "https://www.airbnb.com/",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    summary: {
      en: "A comfortable option for guests who need extra room and a practical Tirana base.",
      sq: "Një opsion komod për vizitorët që duan më shumë hapësirë dhe një bazë praktike në Tiranë.",
    },
    description: {
      en: "This apartment is positioned as a flexible city stay with stronger space distribution, making it suitable for couples, small families, or guests staying slightly longer.",
      sq: "Ky apartament paraqitet si një qëndrim fleksibël në qytet me shpërndarje më të mirë të hapësirës, i përshtatshëm për çifte, familje të vogla ose vizitorë që qëndrojnë pak më gjatë.",
    },
    amenities: [
      {
        en: "Extra room compared with studio stays",
        sq: "Më shumë hapësirë krahasuar me studio",
      },
      {
        en: "Practical city positioning",
        sq: "Pozicionim praktik në qytet",
      },
      {
        en: "Suitable for small groups",
        sq: "I përshtatshëm për grupe të vogla",
      },
    ],
  },
  {
    id: "roma-studio",
    name: {
      en: "Roma Studio",
      sq: "Roma Studio",
    },
    area: {
      en: "City Centre",
      sq: "Qendër",
    },
    guests: "2",
    bookingUrl: "https://www.airbnb.com/",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    summary: {
      en: "A compact and modern stay for guests who want efficiency and city access.",
      sq: "Një qëndrim kompakt dhe modern për vizitorët që duan efikasitet dhe akses në qytet.",
    },
    description: {
      en: "Roma Studio is framed as a straightforward, well-located apartment option for travellers who value simplicity, convenience, and a quick connection to Tirana's centre.",
      sq: "Roma Studio paraqitet si një opsion i thjeshtë dhe i pozicionuar mirë për vizitorët që vlerësojnë thjeshtësinë, praktikën dhe lidhjen e shpejtë me qendrën e Tiranës.",
    },
    amenities: [
      {
        en: "Compact and efficient layout",
        sq: "Planimetri kompakte dhe efikase",
      },
      {
        en: "Modern city-stay style",
        sq: "Stil modern për qëndrim në qytet",
      },
      {
        en: "Suitable for solo or couple stays",
        sq: "I përshtatshëm për një person ose çift",
      },
    ],
  },
  {
    id: "shallvaret-apartment",
    name: {
      en: "Shallvaret Apartment",
      sq: "Apartamenti Shallvaret",
    },
    area: {
      en: "Shallvaret",
      sq: "Shallvaret",
    },
    guests: "2–4",
    bookingUrl: "https://www.airbnb.com/",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    summary: {
      en: "A flexible apartment setup for guests who want practical access and a balanced stay.",
      sq: "Një apartament fleksibël për vizitorët që duan akses praktik dhe një qëndrim të balancuar.",
    },
    description: {
      en: "Shallvaret Apartment is positioned as a guest-friendly stay with balanced comfort, useful access, and enough flexibility for a broader range of short-term visitors.",
      sq: "Apartamenti Shallvaret paraqitet si një qëndrim miqësor për vizitorët me rehati të balancuar, akses të dobishëm dhe fleksibilitet për një gamë më të gjerë vizitorësh afatshkurtër.",
    },
    amenities: [
      {
        en: "Balanced layout and comfort",
        sq: "Planimetri dhe rehati e balancuar",
      },
      {
        en: "Good fit for mixed guest needs",
        sq: "I përshtatshëm për nevoja të ndryshme të vizitorëve",
      },
      {
        en: "Useful location within Tirana",
        sq: "Lokacion i dobishëm brenda Tiranës",
      },
    ],
  },
];

export const featuredApartments: ApartmentPreview[] = apartments.slice(0, 4);

export function getApartmentById(id: string) {
  return apartments.find((apartment) => apartment.id === id);
}