import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919725763394?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20book%20a%20car"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-elevated flex items-center justify-center hover:scale-110 transition-transform hover:bg-[#20bd5a]"
    >
      <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-[#25D366]"></div>
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
};

export default FloatingWhatsApp;
