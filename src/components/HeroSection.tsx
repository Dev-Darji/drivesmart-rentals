import { Phone, MessageCircle, MapPin, Calendar, Car, Star, ShieldCheck, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero_car.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col pt-24 pb-12 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[150px] -z-10 translate-x-1/4 -translate-y-1/4 animate-pulse duration-5000"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[150px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
      
      <img src={heroBg} alt="Shiv Car rental - Premium car in Morbi" className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="container relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-8">
          {/* Left content */}
          <div className="space-y-8 lg:col-span-7 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/50 text-xs font-black backdrop-blur-md border border-white/10 transition-all hover:bg-white/10 cursor-default uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 text-primary" />
              Happy Journey... Safe Journey...
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-[1.05] tracking-tight">
              Premium Car Rental <br className="hidden md:block" />Service in{" "}
              <span className="text-primary relative whitespace-nowrap">
                Morbi
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed font-medium">
              Serving since 12 years with 24/7 service. Specializing in Local, Outstation, and Wedding functions. Trusted by Morbi for safe and happy journeys.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="tel:+919725763394" className="group">
                <Button size="lg" className="h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 gap-3 text-base shadow-xl border border-white/10 transition-all hover:scale-[1.02] rounded-2xl font-black">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/919725763394?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20book%20a%20car" target="_blank" rel="noopener noreferrer" className="group">
                <Button size="lg" className="h-16 px-10 bg-white/5 text-white hover:bg-white/10 gap-3 text-base border border-white/10 transition-all hover:scale-[1.02] rounded-2xl font-black">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl rounded-[2.5rem] p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10">
              <div className="mb-10">
                <h2 className="text-4xl font-heading font-black text-white tracking-tight">Book Now</h2>
                <p className="text-white/40 mt-3 font-bold text-sm uppercase tracking-widest">Located at Parshvanath Complex, Morbi-2</p>
              </div>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input type="text" placeholder="Pickup Location" className="w-full pl-14 pr-6 py-5 rounded-2xl border border-white/5 bg-white/[0.03] text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-white/10 transition-all shadow-inner" />
                </div>
                
                <div className="relative group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input type="text" placeholder="Drop Location" className="w-full pl-14 pr-6 py-5 rounded-2xl border border-white/5 bg-white/[0.03] text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-white/10 transition-all shadow-inner" />
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative group">
                    <input type="date" className="w-full px-6 py-5 rounded-2xl border border-white/5 bg-white/[0.03] text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all shadow-inner color-scheme-dark" style={{colorScheme: 'dark'}} />
                  </div>
                  
                  <div className="relative group">
                    <select className="w-full px-6 py-5 rounded-2xl border border-white/5 bg-white/[0.03] text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all shadow-inner appearance-none cursor-pointer">
                      <option className="bg-[#0a0a0a]">Car Type</option>
                      <option className="bg-[#0a0a0a]">Swift Dzire</option>
                      <option className="bg-[#0a0a0a]">Ertiga (7 Seater)</option>
                      <option className="bg-[#0a0a0a]">Innova Crysta</option>
                    </select>
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 font-black text-xl py-8 rounded-2xl shadow-xl transition-all mt-6">
                  Get Estimation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Trust Bar */}
      <div className="container relative z-20 mt-20 hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
        <div className="bg-[#0a0a0a]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-3xl flex justify-between items-center px-16 divide-x divide-white/5">
          <div className="flex items-center gap-6 px-10 transition-transform cursor-default group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Car className="w-7 h-7 text-white/40 group-hover:text-primary transition-colors" />
            </div>
            <div>
              <div className="text-white font-black text-2xl">10+ Cars</div>
              <div className="text-white/30 text-xs font-bold uppercase tracking-widest">Premium Fleet</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 px-10 transition-transform cursor-default group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ShieldCheck className="w-7 h-7 text-white/40 group-hover:text-primary transition-colors" />
            </div>
            <div>
              <div className="text-white font-black text-2xl">12 Years</div>
              <div className="text-white/30 text-xs font-bold uppercase tracking-widest">Trust & Legacy</div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 px-10 transition-transform cursor-default group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ThumbsUp className="w-7 h-7 text-white/40 group-hover:text-primary transition-colors" />
            </div>
            <div>
              <div className="text-white font-black text-2xl">6 Pilots</div>
              <div className="text-white/30 text-xs font-bold uppercase tracking-widest">Expert Drivers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
