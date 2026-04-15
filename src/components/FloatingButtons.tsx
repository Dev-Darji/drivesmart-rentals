import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp floating button */}
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20car"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>

    {/* Sticky call bar for mobile */}
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <a
        href="tel:+919876543210"
        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 font-semibold text-base shadow-elevated"
      >
        <Phone className="w-5 h-5" /> Call Now — +91 98765 43210
      </a>
    </div>
  </>
);

export default FloatingButtons;
