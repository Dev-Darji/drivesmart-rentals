import { Phone, MessageCircle, MapPin, Calendar, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <img src={heroBg} alt="Luxury car on highway" className="absolute inset-0 w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

      <div className="container relative z-10 py-12 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:bg-white/20 cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Trusted by 10,000+ Customers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-900 text-white leading-[1.1] tracking-tight">
              Premium Car Rental Service in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Ahmedabad</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light">
              Experience luxury, safety, and comfort. Whether it's a local trip, an outstation journey, or an airport transfer, we drive you with excellence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel:+919876543210" className="group">
                <Button size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base shadow-[0_0_30px_rgba(25,155,83,0.3)] transition-all group-hover:scale-105 rounded-xl font-bold">
                  <Phone className="w-5 h-5" /> Book via Call
                </Button>
              </a>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20car" target="_blank" rel="noopener noreferrer" className="group">
                <Button size="lg" className="h-14 px-8 bg-[#25D366] text-white hover:bg-[#20BE5A] gap-2 text-base shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all group-hover:scale-105 rounded-xl font-bold">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-[2rem] blur opacity-40 animate-pulse"></div>
            <div className="relative bg-card/95 backdrop-blur-xl rounded-[2rem] p-8 mt-10 lg:mt-0 shadow-elevated border border-white/20">
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-foreground">Quick Booking</h2>
                <p className="text-muted-foreground mt-1">Get an instant quote for your journey</p>
              </div>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input type="text" placeholder="Pickup Location" className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" />
                </div>
                
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input type="text" placeholder="Drop Location" className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input type="date" className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors pointer-events-none">
                      <Car className="w-5 h-5" />
                    </div>
                    <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm appearance-none cursor-pointer">
                      <option value="" disabled selected hidden>Car Type</option>
                      <option>Sedan (Dzire)</option>
                      <option>MPV (Ertiga)</option>
                      <option>SUV (Innova)</option>
                      <option>Traveler</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground text-lg py-7 rounded-xl font-bold shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-all mt-4 transform hover:translate-y-[-2px]">
                  Request Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
