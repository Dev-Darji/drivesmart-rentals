import { useState, useEffect } from "react";
import { Phone, Menu, X, Car, Home, Info, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Fleet", href: "#fleet", icon: Car },
  { label: "Locations", href: "#locations", icon: MapPin },
  { label: "Contact", href: "#contact", icon: MessageSquare },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  // Handle window resize to automatically close menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && open) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-2xl border-b border-white/5 shadow-elevated py-3" : "bg-transparent py-5 lg:py-8"}`}>
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
        <div className="flex justify-end items-center gap-4 lg:gap-6">
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [0.98, 1, 0.98]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative group"
            >
              <div className="absolute inset-x-0 -inset-y-1 bg-primary/40 blur-xl rounded-xl"></div>
              <div className="relative flex flex-col items-center justify-center bg-[#0b0f14] border border-primary/60 w-24 h-12 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                <span className="text-[9px] font-bold text-primary uppercase tracking-[0.1em] leading-none mb-1">Available</span>
                <span className="text-[15px] font-black text-white leading-none tracking-wider">24 / 7</span>
              </div>
            </motion.div>
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
            className={`lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl backdrop-blur-md border z-[10000] transition-colors ${open ? 'bg-primary text-primary-foreground border-primary/20' : scrolled ? 'text-foreground border-border bg-card' : 'text-white border-white/20 bg-white/10'}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
            />

            {/* Sidebar Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="lg:hidden mobile-menu fixed top-0 right-0 bottom-0 w-[100%] z-[9999] flex flex-col p-6 overflow-y-auto border-l border-white/5 bg-[#0b0f14]"
            >
              <div className="flex items-center justify-between mb-10 px-2 mt-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-black text-white">SHIV CAR</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 py-4">
                {navLinks.map((l, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-lg ${activeHash === l.href ? "text-primary bg-primary/10" : "text-white/60 hover:text-white"}`}
                  >
                    <l.icon className="w-5 h-5" />
                    {l.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pb-8">
                <div className="grid grid-cols-1 gap-3">
                  <a href="tel:+919725763394" className="bg-primary text-primary-foreground h-14 rounded-2xl text-center shadow-lg flex items-center justify-center gap-3 font-black text-sm">
                    <Phone className="w-4 h-4" />
                    CALL NOW
                  </a>
                  <a href="https://wa.me/919725763394" className="bg-[#25D366] text-white h-14 rounded-2xl text-center shadow-lg flex items-center justify-center gap-3 font-black text-sm">
                    <MessageSquare className="w-4 h-4" />
                    WHATSAPP
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
