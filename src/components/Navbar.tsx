import { useState, useEffect } from "react";
import { Phone, Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-full px-8 lg:px-16 grid grid-cols-2 lg:grid-cols-3 items-center w-full">
        {/* Logo - Left */}
        <div className="flex justify-start">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_5px_15px_-5px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform border border-primary/20">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`text-2xl font-heading font-black tracking-tight ${scrolled ? "text-foreground" : "text-white"} transition-colors whitespace-nowrap`}>
              Shiv<span className="text-primary"> Car rental</span>
            </span>
          </a>
        </div>

        {/* Links - Center */}
        <div className="hidden lg:flex justify-center">
          <div className="flex items-center gap-8 bg-black/20 backdrop-blur-md px-8 py-2.5 rounded-full border border-white/5">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className={`relative text-sm font-bold transition-all hover:text-primary group/nav ${scrolled ? "text-foreground/80" : "text-white/80"}`}>
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/nav:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Button - Right */}
        <div className="flex justify-end gap-4">
          <div className="hidden lg:block">
            <a href="tel:+919725763394">
              <Button size="default" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-black shadow-md transition-all rounded-xl h-11 px-6 border border-primary/20 whitespace-nowrap">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
          </div>

          <button className={`lg:hidden p-2 rounded-lg backdrop-blur-md border ${scrolled ? 'text-foreground border-border bg-background' : 'text-white border-white/20 bg-white/10'}`} onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border shadow-elevated p-6 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors font-bold text-lg">
              {l.label}
            </a>
          ))}
          <div className="px-2 pt-6 pb-2">
            <a href="tel:+919725763394">
              <Button className="w-full bg-primary text-primary-foreground gap-3 h-14 rounded-2xl text-xl font-black shadow-xl">
                <Phone className="w-6 h-6" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
