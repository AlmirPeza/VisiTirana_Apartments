# VisiTirana Apartments

A modern React + TypeScript website for **VisiTirana Apartments**, designed to present short-stay apartments in Tirana with a polished guest-facing interface, bilingual content, and real backend integration.

## Overview

This project is more than a static website. It combines a clean front-end experience with real supporting infrastructure for apartment listings, bilingual presentation, maps, and calendar synchronization.

The website currently includes:

- Homepage with animated hero and branded sections
- Apartments listing page
- Apartment detail pages
- Contact page
- Language toggle support (English / Albanian)
- Google Maps integration
- Supabase integration
- Supabase Edge Function for calendar synchronization
- Database migrations for apartment-related data

## Key Features

- Responsive homepage with dedicated desktop, tablet, and mobile hero assets
- Apartment cards and listing cards with booking-focused UI
- Bilingual content architecture through `LanguageContext`
- Supabase-backed project structure
- Edge Function for syncing Airbnb / Booking calendar feeds
- JSON-based apartment image libraries
- Clean component-based React architecture

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- Supabase
- Supabase Edge Functions
- Google Maps API

## Project Structure

```bash
public/
  lovable-uploads/

src/
  assets/
  components/
    ui/
  contexts/
  hooks/
  integrations/
    supabase/
  lib/
    images/
  pages/
  types/
  App.tsx
  index.css
  main.tsx
```

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Environment Variables

This project uses environment variables for external services such as Supabase and Google Maps.

Create a local `.env` file based on `.env.example` and keep real keys private.

## Notes

This repository is structured as a clean, expandable front-end and integration-ready foundation.

Future improvements may include:

- richer apartment content from live database queries
- stronger reservation workflows
- production contact form delivery
- more detailed availability presentation
- deployment and domain connection
- admin-facing content or listing management tools

## Author

Structured and rebuilt for professional portfolio and GitHub presentation by Almir Peza.
