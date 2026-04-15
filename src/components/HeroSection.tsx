import { Phone, MessageCircle, MapPin, Calendar, Car, Star, ShieldCheck, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-24 pb-12 overflow-hidden bg-accent">
      <img src={heroBg} alt="Luxury car on highway" className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/60 to-accent" />

      <div className="container relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8">
          {/* Left content */}
          <div className="space-y-8 lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all hover:bg-white/20 cursor-default">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              Trusted by 10,000+ Customers across Gujarat
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
              Premium Car Rental <br className="hidden md:block" />Service in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary relative whitespace-nowrap">
                Gujarat
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              Experience luxury, safety, and comfort. Whether it's a local trip, outstation journey, or airport transfer, we serve you with excellence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919876543210" className="group">
                <Button size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-base shadow-[0_10px_30px_-10px_rgba(29,78,216,0.6)] transition-all group-hover:shadow-[0_10px_40px_-10px_rgba(29,78,216,0.8)] group-hover:-translate-y-1 rounded-xl font-bold">
                  <Phone className="w-5 h-5" /> Book via Call
                </Button>
              </a>
              <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20a%20car" target="_blank" rel="noopener noreferrer" className="group">
                <Button size="lg" className="h-14 px-8 bg-[#25D366] text-white hover:bg-[#20BE5A] gap-2 text-base shadow-[0_10px_30px_-10px_rgba(37,211,102,0.4)] transition-all group-hover:shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] group-hover:-translate-y-1 rounded-xl font-bold border border-white/10">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-[2.5rem] blur-xl opacity-60"></div>
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl border border-white/20">
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-black text-white">Quick Quote</h2>
                <p className="text-white/70 mt-2 font-medium">Get an instant estimate for your journey</p>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input type="text" placeholder="Pickup Location" className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-black/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner" />
                </div>
                
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input type="text" placeholder="Drop Location" className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-black/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <input type="date" className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-black/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner color-scheme-dark" style={{colorScheme: 'dark'}} />
                  </div>
                  
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors pointer-events-none z-10">
                      <Car className="w-5 h-5" />
                    </div>
                    <select className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-inner appearance-none cursor-pointer relative z-0">
                      <option value="" disabled selected hidden>Car Type</option>
                      <option>Sedan (Dzire)</option>
                      <option>MPV (Ertiga)</option>
                      <option>SUV (Innova)</option>
                      <option>Traveler</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-white text-accent hover:bg-white/90 hover:text-accent font-black text-lg py-7 rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.2)] transition-all mt-4 transform hover:-translate-y-1">
                  Request Estimation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Trust Bar */}
      <div className="container relative z-20 mt-16 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex justify-between items-center px-12 divide-x divide-white/10">
          <div className="flex items-center gap-4 px-6 filter drop-shadow-md hover:scale-105 transition-transform cursor-default">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Car className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-black text-xl">50+ Premium</div>
              <div className="text-white/60 text-sm font-semibold">Vehicles in Fleet</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 filter drop-shadow-md hover:scale-105 transition-transform cursor-default">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-black text-xl">100% Insured</div>
              <div className="text-white/60 text-sm font-semibold">Safe & Secure Rides</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 filter drop-shadow-md hover:scale-105 transition-transform cursor-default">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-black text-xl">Top Rated</div>
              <div className="text-white/60 text-sm font-semibold">Highly Experienced Drivers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
