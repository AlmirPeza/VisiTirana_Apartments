# VisiTirana Apartments

A modern React + TypeScript apartment website scaffold for short-stay rentals in Tirana.

This repository contains the structured frontend foundation for the VisiTirana project, including reusable UI components, route-based page architecture, bilingual language switching, apartment listing pages, contact flow, and a stronger premium homepage presentation.

## Project Overview

VisiTirana Apartments is designed as a guest-facing apartment website focused on:

- clearer apartment presentation
- stronger visual branding
- bilingual experience (English / Albanian)
- better homepage structure
- cleaner routing and reusable frontend architecture

The current version in this repository represents a polished frontend starter with reusable components and realistic page sections. It is intended to serve as the clean base for expanding into the full apartment platform.

## Current Features

### Homepage
- premium animated intro section
- structured hero section
- featured apartment cards
- guest journey / self check-in explanation section
- contact call-to-action section
- social media section foundation

### Apartments
- apartments listing page
- apartment detail page structure
- reusable apartment cards
- route-based apartment detail navigation

### Contact
- branded contact page
- Google Map placeholder structure
- reusable contact section

### Shared Structure
- sticky navigation
- footer
- scroll-to-top behavior
- reusable UI primitives
- bilingual language context

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router DOM
- TanStack React Query
- Lucide React

## Project Structure

```text
src/
  components/
    ui/
    AnimatedIntro.tsx
    ApartmentCard.tsx
    ApartmentListingCard.tsx
    ContactSection.tsx
    FeaturedApartments.tsx
    Footer.tsx
    GoogleMap.tsx
    Hero.tsx
    Navbar.tsx
    ScrollToTop.tsx
    SocialMediaSection.tsx
    WhyChooseUs.tsx
  contexts/
    LanguageContext.tsx
  lib/
    data.ts
  pages/
    ApartmentDetail.tsx
    Apartments.tsx
    Contact.tsx
    Index.tsx
    NotFound.tsx
  App.tsx
  index.css
  main.tsx