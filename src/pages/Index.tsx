import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CeramicSection from "@/components/CeramicSection";
import FleetSection from "@/components/FleetSection";
import LocationsSection from "@/components/LocationsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageReveal from "@/components/PageReveal";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageReveal><HeroSection /></PageReveal>
    <PageReveal><AboutSection /></PageReveal>
    <PageReveal><CeramicSection /></PageReveal>
    <PageReveal><FleetSection /></PageReveal>
    <PageReveal><LocationsSection /></PageReveal>
    <PageReveal><ReviewsSection /></PageReveal>
    <PageReveal><FAQSection /></PageReveal>
    <PageReveal><ContactSection /></PageReveal>
    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Index;
