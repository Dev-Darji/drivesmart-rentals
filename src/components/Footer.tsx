import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-card text-foreground py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 text-center sm:text-left">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h3 className="font-extrabold text-2xl mb-6 tracking-tight">🚗 Shiv Car Rental</h3>
          <p className="text-foreground/60 text-base leading-relaxed">
            Your trusted Car Rental partner in Morbi and across Gujarat. Reliable rides, transparent pricing, and professional service since 15 years.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
        >
          <h4 className="font-semibold mb-6 text-primary text-xs uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            {["Home", "About", "Fleet", "Locations", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors flex items-center justify-center sm:justify-start gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all"></span> {l}</a></li>
            ))}
          </ul>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <h4 className="font-semibold mb-6 text-primary text-xs uppercase tracking-widest">Our Services</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            {["Local Car Rental", "Outstation Trips", "Ceramic Industry Tours", "Corporate Travel"].map((s) => (
              <li key={s} className="flex items-center justify-center sm:justify-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/20"></span> {s}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="lg:col-span-1"
        >
          <h4 className="font-semibold mb-6 text-primary text-xs uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li className="flex items-start justify-center sm:justify-start gap-3">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
              <span>Shiv car rental opposite Hanumanji Temple, In Front of Raj Nagar, Panchasar Road, Morbi-363641</span>
            </li>
            <li className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center justify-center sm:justify-start gap-3 text-primary font-bold">
                <Phone className="w-4 h-4" /> <span>+91 97257 63394</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 pl-7 text-[13px]">
                <span>+91 63548 10299</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 pl-7 text-[13px]">
                <span>+91 72650 53531</span>
              </div>
            </li>
            <li className="space-y-2 pt-2 border-t border-white/5">
              <div className="flex items-center justify-center sm:justify-start gap-3 group">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:amitsolanki40518@gmail.com" className="hover:text-primary transition-colors text-[13px]">amitsolanki40518@gmail.com</a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 group pl-7">
                <a href="mailto:pradipgoshai838@gmail.com" className="hover:text-primary transition-colors text-[13px]">pradipgoshai838@gmail.com</a>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-white/5 pt-10 text-center">
        <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} Shiv Car Rental • Crafted with Pride in Morbi
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
