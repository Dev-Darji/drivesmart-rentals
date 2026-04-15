import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-accent text-accent-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">🚗 Jay Jogmaya Travels</h3>
          <p className="text-accent-foreground/60 text-sm leading-relaxed">
            Your trusted car rental partner in Ahmedabad. Reliable rides, transparent pricing, and professional service since 2009.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-accent-foreground/60">
            {["Home", "About", "Fleet", "Pricing", "Gallery", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-accent-foreground/60">
            {["Local Car Rental", "Outstation Trips", "Airport Transfer", "Corporate Travel", "Wedding Cars", "Tempo Traveller"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-accent-foreground/60">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" /> 123 Ring Road, Satellite, Ahmedabad</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0 text-primary" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 flex-shrink-0 text-primary" /> info@jayjogmaya.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 pt-6 text-center text-sm text-accent-foreground/40">
        © {new Date().getFullYear()} Jay Jogmaya Travels. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
