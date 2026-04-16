import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Local (Morbi City)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Shiv Car Rental, my name is ${formData.name}. I'm interested in booking a car for ${formData.serviceType}. My contact number is ${formData.phone}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919725763394?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-warm relative overflow-hidden">
      <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          
          {/* Left Side: Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="mb-4 text-center lg:text-left">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Contact Info
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">Direct Connectivity</h2>
              <p className="text-foreground/60 text-lg max-w-md">Our office is located at the heart of Morbi, ready to serve you 24/7 with premium cars and polite drivers.</p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: MapPin, title: "Office Address", desc: "Parshvanath Complex, Morbi-2, Gujarat" },
                { icon: Phone, title: "Call Bookings", desc: "+91 97257 63394 / 83201 03289" },
                { icon: Clock, title: "Service Hours", desc: "Open 24/7 – Always Available" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-white/5 rounded-[2rem] p-8 shadow-sm group hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground/60 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <a href="tel:+919725763394">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-3 h-14 px-10 rounded-2xl font-bold text-lg shadow-elevated transition-all">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <a href="https://wa.me/919725763394" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/10 glass-morphism text-foreground gap-3 h-14 px-10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full -z-10" />
            <div className="bg-card border border-white/5 rounded-[2.5rem] p-10 lg:p-14 shadow-elevated relative overflow-hidden">
              <div className="mb-10 text-center lg:text-left">
                <h3 className="text-3xl font-extrabold text-white mb-3">Send Inquiry</h3>
                <p className="text-foreground/50 text-base italic tracking-tight">"A reliable journey starts with a simple conversation."</p>
              </div>
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-white text-base placeholder:text-white/20" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-white text-base placeholder:text-white/20" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Service Type</label>
                  <select 
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-white appearance-none cursor-pointer text-base"
                  >
                    <option className="bg-[#0b0f14]">Local (Morbi City)</option>
                    <option className="bg-[#0b0f14]">Outstation Trip</option>
                    <option className="bg-[#0b0f14]">Wedding Ceremonies</option>
                    <option className="bg-[#0b0f14]">Custom Tour Package</option>
                  </select>
                </div>
                <Button type="submit" className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-extrabold text-lg gap-3 hover:bg-primary/90 transition-all shadow-elevated group">
                  Submit Reservation <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Full Width Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden shadow-elevated h-96 border-4 border-card group relative"
        >
          <div className="absolute top-8 left-8 z-10 glass-morphism px-5 py-3 rounded-2xl border border-white/10 inline-flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="text-white font-bold text-xs tracking-widest uppercase">Our Central Depot</span>
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
            className="grayscale invert opacity-40 hover:opacity-100 hover:invert-0 hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
