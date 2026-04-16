import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-accent text-accent-foreground py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">🚗 Shiv Car Rental</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your trusted car rental partner in Morbi and across Gujarat. Reliable rides, transparent pricing, and professional service since 12 years.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Home", "About", "Fleet", "Pricing", "Gallery", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Local Car Rental", "Outstation Trips", "Wedding functions", "Door-to-door pickup", "5 Seater Cars", "7 Seater Cars"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" /> Parshvanath Complex, Morbi-2, Gujarat</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0 text-primary" /> +91 97257 63394</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 flex-shrink-0 text-primary" /> +91 83201 03289</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-sm text-muted-foreground/40">
        © {new Date().getFullYear()} Shiv Car Rental. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
