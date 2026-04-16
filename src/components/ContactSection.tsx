import { Phone, MapPin, Clock, MessageCircle, Navigation, Send, Award, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24">
          
          {/* Left Side: Contact Cards */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="mb-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
                <Headphones className="w-4 h-4" />
                Contact Info
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-black text-white mb-4">Direct Connectivity</h2>
              <p className="text-muted-foreground text-base max-w-md">Our office is located at the heart of Morbi, ready to serve you 24/7.</p>
            </div>

            <div className="grid gap-6">
              <div className="group bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-card/60 transition-all duration-500 hover:border-primary/20">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                    <MapPin className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-1">Office Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Parshvanath Complex, Morbi-2, Gujarat</p>
                  </div>
                </div>
              </div>

              <div className="group bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-card/60 transition-all duration-500 hover:border-primary/20">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                    <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-1">Call Bookings</h3>
                    <p className="text-muted-foreground text-sm font-bold tracking-wide">+91 97257 63394 / 83201 03289</p>
                  </div>
                </div>
              </div>

              <div className="group bg-card/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-card/60 transition-all duration-500 hover:border-primary/20">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                    <Clock className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white mb-1">Service Hours</h3>
                    <p className="text-muted-foreground text-sm">Open 24/7 – Always Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <a href="tel:+919725763394">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-14 px-8 rounded-2xl font-black text-lg">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/919725763394" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white gap-3 h-14 px-8 rounded-2xl font-black text-lg">
                  <MessageCircle className="w-6 h-6" /> WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="bg-card/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 lg:p-14 shadow-elevated group/form transition-all duration-500 hover:border-primary/20">
              <div className="mb-12 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-heading font-black text-white mb-4">Send Inquiry</h3>
                <p className="text-muted-foreground text-lg italic tracking-tight">"A reliable journey starts with a simple conversation."</p>
              </div>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-black text-primary/60 uppercase tracking-widest ml-1 group-focus-within/input:text-primary transition-colors">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all text-white shadow-inner" />
                  </div>
                  <div className="space-y-3 group/input">
                    <label className="text-xs font-black text-primary/60 uppercase tracking-widest ml-1 group-focus-within/input:text-primary transition-colors">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all text-white shadow-inner" />
                  </div>
                </div>
                <div className="space-y-3 group/input">
                  <label className="text-xs font-black text-primary/60 uppercase tracking-widest ml-1 group-focus-within/input:text-primary transition-colors">Destination / Service Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:bg-white/10 transition-all text-white/50 appearance-none cursor-pointer">
                    <option className="bg-background">Local (Morbi City)</option>
                    <option className="bg-background">Outstation Trip</option>
                    <option className="bg-background">Wedding Ceremonies</option>
                    <option className="bg-background">Custom Tour Package</option>
                  </select>
                </div>
                <Button className="w-full h-20 rounded-[1.5rem] bg-primary text-primary-foreground font-black text-xl gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_20px_40px_-10px_hsla(var(--primary),0.3)]">
                  Submit Reservation <Send className="w-6 h-6 group-hover/form:translate-x-1 group-hover/form:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Full Width Map Section below */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="rounded-[3rem] overflow-hidden shadow-elevated h-[500px] border border-white/10 group relative">
            <div className="absolute top-8 left-8 z-10 bg-background/80 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 inline-flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white font-black text-sm uppercase tracking-[0.2em]">Our Central Depot – Morbi-2</span>
            </div>
            <iframe
              title="Shiv Car Rental Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14711.516049219362!2d70.83536854999999!3d22.8105742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c168df9f9293%3A0xf64c2439366e8648!2sMorbi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert opacity-40 group-hover:opacity-100 group-hover:invert-0 group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
