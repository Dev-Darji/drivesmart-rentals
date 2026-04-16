import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-card text-foreground py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h3 className="font-extrabold text-2xl mb-6 tracking-tight">🚗 Shiv Car Rental</h3>
          <p className="text-foreground/60 text-base leading-relaxed">
            Your trusted Car Rental partner in Morbi and across Gujarat. Reliable rides, transparent pricing, and professional service since 12 years.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
        >
          <h4 className="font-bold mb-6 text-lg uppercase tracking-widest text-primary text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            {["Home", "About", "Fleet", "Pricing", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></span> {l}</a></li>
            ))}
          </ul>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <h4 className="font-bold mb-6 text-lg uppercase tracking-widest text-primary text-xs">Our Services</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            {["Local Car Rental", "Outstation Trips", "Wedding functions", "Door-to-door pickup", "5 Seater Cars", "7 Seater Cars"].map((s) => (
              <li key={s} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/20"></span> {s}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
        >
          <h4 className="font-bold mb-6 text-lg uppercase tracking-widest text-primary text-xs">Contact Info</h4>
          <ul className="space-y-6 text-sm text-foreground/70">
            <li className="flex items-start gap-4">
              <div className="p-2 bg-primary/5 rounded-lg"><MapPin className="w-4 h-4 flex-shrink-0 text-primary" /></div>
              <span>Parshvanath Complex, Morbi-2, Gujarat</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="p-2 bg-primary/5 rounded-lg"><Phone className="w-4 h-4 flex-shrink-0 text-primary" /></div>
              <span className="font-bold underline underline-offset-4 decoration-primary/30">+91 97257 63394</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="p-2 bg-primary/5 rounded-lg"><Phone className="w-4 h-4 flex-shrink-0 text-primary" /></div>
              <span className="font-bold">+91 83201 03289</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-white/5 pt-10 text-center">
        <p className="text-xs font-bold text-foreground/30 uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} Shiv Car Rental • Crafted with Pride in Morbi
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
