export type Language = "en" | "sq";

export type ApartmentPreview = {
  id: string;
  name: {
    en: string;
    sq: string;
  };
  area: {
    en: string;
    sq: string;
  };
  guests: string;
  bookingUrl: string;
  image: string;
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

export const featuredApartments: ApartmentPreview[] = [
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
  },
];