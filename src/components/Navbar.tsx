import { useState, useEffect } from "react";
import { Phone, Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Fleet", href: "#fleet" },
  { label: "Pricing", href: "#pricing" },
  { label: "Locations", href: "#locations" },
  { label: "Gallery", href: "#gallery" },
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
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(29,78,216,0.3)] group-hover:scale-105 transition-transform">
            <Car className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className={`text-2xl font-heading font-black tracking-tight ${scrolled ? "text-foreground" : "text-white"} transition-colors`}>
            Jay<span className="text-primary">Jogmaya</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 bg-background/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-semibold transition-colors hover:text-primary ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919876543210">
            <Button size="default" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-bold shadow-lg hover:shadow-primary/30 transition-all rounded-xl h-11 px-6">
              <Phone className="w-4 h-4" /> Book Now
            </Button>
          </a>
        </div>

        <button className={`lg:hidden p-2 rounded-lg backdrop-blur-md border ${scrolled ? 'text-foreground border-border bg-background' : 'text-white border-white/20 bg-white/10'}`} onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-elevated p-4 flex flex-col gap-2 animate-in slide-in-from-top-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors font-semibold">
              {l.label}
            </a>
          ))}
          <div className="px-2 pt-4 pb-2">
            <a href="tel:+919876543210">
              <Button className="w-full bg-primary text-primary-foreground gap-2 h-12 rounded-xl text-lg font-bold">
                <Phone className="w-5 h-5" /> Call to Book
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
