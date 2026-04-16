import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FleetSection from "@/components/FleetSection";
import PricingSection from "@/components/PricingSection";
import LocationsSection from "@/components/LocationsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FleetSection />
    <PricingSection />
    <LocationsSection />
    <ReviewsSection />
    <FAQSection />
    <ContactSection />
    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Index;
