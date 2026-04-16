import { useState, useEffect } from "react";
import { Phone, Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Fleet", href: "#fleet" },
  { label: "Pricing", href: "#pricing" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(l => l.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = "#" + section;
        }
      }
      if (current) {
        setActiveHash(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-2xl border-b border-white/5 shadow-elevated py-3" : "bg-transparent py-5 lg:py-8"}`}>
      <div className="max-w-8xl mx-auto px-6 lg:px-16 flex justify-between items-center w-full">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-start"
        >
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-all duration-700 border border-primary/20">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`text-xl lg:text-2xl font-extrabold tracking-wide ${scrolled ? "text-foreground" : "text-white"} transition-colors whitespace-nowrap ml-1`}>
              Shiv<span className="text-primary">&nbsp;Car Rental</span>
            </span>
          </a>
        </motion.div>

        {/* Links */}
        <div className="hidden lg:flex justify-center flex-1 mx-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-10"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-bold transition-all relative group py-2 ${activeHash === l.href
                  ? "text-primary"
                  : scrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-white/70 hover:text-primary"
                  }`}
              >
                {l.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${activeHash === l.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* CTA Icons */}
        <div className="flex justify-end items-center gap-2 lg:gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
              className="bg-primary text-primary-foreground w-11 h-11 flex items-center justify-center rounded-2xl shadow-lg hover:bg-primary/90 transition-all border border-primary/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="bg-primary text-primary-foreground w-11 h-11 flex items-center justify-center rounded-2xl shadow-lg hover:bg-primary/90 transition-all border border-primary/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919725763394" 
              className="bg-primary text-primary-foreground w-11 h-11 flex items-center justify-center rounded-2xl shadow-lg hover:bg-primary/90 transition-all border border-primary/20"
            >
              <Phone className="w-5 h-5" />
            </motion.a>
          </div>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl backdrop-blur-md border ${scrolled ? 'text-foreground border-border bg-card' : 'text-white border-white/20 bg-white/10'}`} 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-3xl border-b border-white/5 shadow-elevated overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={l.href}
                  href={l.href}
                  onClick={() => { setOpen(false); setActiveHash(l.href); }}
                  className={`block px-5 py-4 rounded-2xl transition-all font-bold text-lg ${activeHash === l.href ? "text-primary bg-primary/10" : "text-foreground/80 hover:text-primary hover:bg-primary/5"}`}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center gap-6 py-8 border-t border-white/5 mt-4"
              >
                <a href="https://facebook.com" className="bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg border border-primary/20 transition-all group-hover:scale-105 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="https://instagram.com" className="bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg border border-primary/20 transition-all group-hover:scale-105 transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="tel:+919725763394" className="bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg border border-primary/20 transition-all"><Phone className="w-6 h-6" /></a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
