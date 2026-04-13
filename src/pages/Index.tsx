import ContactSection from "@/components/ContactSection";
import FeaturedApartments from "@/components/FeaturedApartments";
import Hero from "@/components/Hero";
import SocialMediaSection from "@/components/SocialMediaSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <FeaturedApartments />
      <WhyChooseUs />
      <ContactSection />
      <SocialMediaSection />
    </main>
  );
}