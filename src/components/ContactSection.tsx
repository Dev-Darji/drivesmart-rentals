import { Phone, MapPin, Clock, Send, MessageCircle, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    passengers: "1-4",
    serviceType: "Local (Morbi City)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.serviceType}%0A` +
      `*Passengers:* ${formData.passengers}%0A%0A` +
      `_Please get back to me with a price._`;
    
    window.open(`https://wa.me/919725763394?text=${message}`, "_blank");
  };

  const contactItems = [
    { icon: MapPin, title: "Our Office", desc: "Parshvanath Complex, Morbi-2, Gujarat" },
    { icon: Phone, title: "Booking Numbers", desc: "+91 97257 63394" },
    { icon: Mail, title: "Email for Help", desc: "amitsolanki40518@gmail.com" },
    { icon: Clock, title: "Open Hours", desc: "Open 24/7 – Always Ready" }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-warm relative overflow-hidden">
      <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            How to Find Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground/60 text-lg max-w-2xl"
          >
            Our office is in the middle of Morbi. We are ready to help you 24/7 with best cars and polite drivers.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          
          <div className="space-y-12">
            <div className="grid gap-6">
              {contactItems.map((item, i) => (
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
                      <h3 className="font-bold text-xl text-white mb-1">{item.title}</h3>
                      <p className="text-foreground/60 text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10" />
            <div className="bg-card border border-white/10 rounded-[2.5rem] p-8 lg:p-12 shadow-elevated transition-all hover:border-primary/20">
              <h3 className="text-3xl font-bold text-white mb-2">Send a Question</h3>
              <p className="text-foreground/50 text-base mb-10">Fill this form and we will call you back soon.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">Your Name</label>
                       <input 
                         type="text" 
                         placeholder="Enter name" 
                         required
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-white text-sm placeholder:text-white/20" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">Phone Number</label>
                       <input 
                         type="tel" 
                         placeholder="Enter number" 
                         required
                         value={formData.phone}
                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
                         className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-white text-sm placeholder:text-white/20" 
                       />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">Select Service</label>
                      <select 
                        value={formData.serviceType}
                        onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                        className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-white appearance-none cursor-pointer text-sm"
                      >
                        <option className="bg-[#0b0f14]">Local (Morbi City)</option>
                        <option className="bg-[#0b0f14]">Outstation Trip</option>
                        <option className="bg-[#0b0f14]">Wedding Functions</option>
                        <option className="bg-[#0b0f14]">Custom Tour</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">How many people?</label>
                      <div className="relative">
                        <select 
                          value={formData.passengers}
                          onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                          className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all text-white appearance-none cursor-pointer text-sm"
                        >
                          <option className="bg-[#0b0f14]">1-4 People</option>
                          <option className="bg-[#0b0f14]">5-7 People</option>
                          <option className="bg-[#0b0f14]">8+ People</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <Users className="w-4 h-4 text-primary opacity-50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-extrabold text-lg gap-3 hover:bg-primary/90 transition-all shadow-elevated group">
                  Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4 pt-12 justify-center lg:justify-start">
          <a href="tel:+919725763394">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-3 h-14 px-10 rounded-2xl font-bold text-lg shadow-elevated transition-all">
              <Phone className="w-5 h-5" /> Call Now
            </Button>
          </a>
          <a href="https://wa.me/919725763394" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-white/10 glass-morphism text-white gap-3 h-14 px-10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
               <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
