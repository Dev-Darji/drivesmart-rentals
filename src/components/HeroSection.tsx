import { Phone, MessageCircle, Star, ShieldCheck, Car, Users, MapPin, Calendar, Send, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero_car.png";
import { motion } from "framer-motion";
import { useState } from "react";

const HeroSection = () => {
  const [bookingData, setBookingData] = useState({
    from: "",
    to: "",
    startDate: "",
    endDate: "",
    carType: "Any"
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Quick Booking Inquiry*%0A%0A` +
      `*From:* ${bookingData.from}%0A` +
      `*To:* ${bookingData.to}%0A` +
      `*Start Date:* ${bookingData.startDate}%0A` +
      `*End Date:* ${bookingData.endDate}%0A` +
      `*Preferred Car:* ${bookingData.carType}%0A%0A` +
      `_Please confirm availability for this trip._`;
    
    window.open(`https://wa.me/919725763394?text=${message}`, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col pt-32 pb-20 lg:py-40 overflow-hidden bg-background mesh-bg">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src={heroBg} 
          alt="Shiv Car Rental" 
          className="w-full h-full object-cover" 
          width={1920} 
          height={1080} 
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container relative z-10 flex-grow flex flex-col justify-center max-w-7xl px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:col-span-7 pr-4 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="flex flex-nowrap items-center justify-center lg:justify-start gap-2 lg:gap-3 overflow-x-visible pb-1">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-1.5 px-2 lg:px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-[10px] lg:text-xs font-bold tracking-wide border border-primary/20 backdrop-blur-md whitespace-nowrap"
              >
                <Star className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-primary flex-shrink-0" />
                Trusted Since 12 Years
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="lg:hidden inline-flex items-center gap-1.5 px-2 lg:px-3 py-1.5 rounded-xl bg-green-500/10 text-green-500 text-[10px] lg:text-xs font-bold tracking-wide border border-green-500/20 backdrop-blur-md whitespace-nowrap"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <Clock className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                </motion.div>
                Available 24/7
              </motion.div>
            </div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight"
            >
              Best Car Rental <br/>Service in{" "}
              <span className="text-primary relative whitespace-nowrap">
                Morbi
                <motion.svg 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-3 text-primary/40 -z-10" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </motion.svg>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Serving since 12 years with 24/7 help. We provide cars for Local use, Outstation trips, and Ceramic Industry Tours. Trusted by Morbi for safe journeys.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full"
            >
              <a href="tel:+919725763394">
                <Button variant="outline" size="lg" className="h-16 px-10 glass-morphism text-white border-white/20 hover:bg-white/10 gap-3 text-lg transition-all rounded-xl font-bold">
                  <Phone className="w-6 h-6" /> Call Now
                </Button>
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-6 lg:pt-10 w-full"
            >
               <div className="flex flex-nowrap items-center justify-center lg:justify-start gap-4 lg:gap-12 text-white/80">
                 <div className="flex flex-col">
                   <span className="text-2xl lg:text-3xl font-extrabold text-white">10+</span>
                   <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-primary whitespace-nowrap">Best Cars</span>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div className="flex flex-col">
                   <span className="text-2xl lg:text-3xl font-extrabold text-white">12+</span>
                   <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-primary whitespace-nowrap">Years Exp.</span>
                 </div>
                 <div className="w-px h-8 bg-white/10" />
                 <div className="flex flex-col">
                   <span className="text-2xl lg:text-3xl font-extrabold text-white">5000+</span>
                   <span className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-primary whitespace-nowrap">Trips Done</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute inset-x-0 -top-20 -bottom-20 bg-primary/10 blur-[120px] rounded-full animate-pulse -z-10" />
              <div className="bg-[#0f141d]/60 backdrop-blur-3xl border border-white/10 rounded-[1.5rem] lg:rounded-[2.5rem] p-6 lg:p-10 shadow-elevated relative z-10">
                <div className="mb-6 lg:mb-8 text-center lg:text-left">
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-1.5 tracking-tight">Book Your Ride</h3>
                  <p className="text-white/40 text-xs lg:text-sm">Quick price in 1 minute</p>
                </div>
                
                <form className="space-y-4 lg:space-y-6" onSubmit={handleBooking}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1.5 lg:space-y-2">
                       <label className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">From</label>
                       <div className="relative group">
                         <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-focus-within:bg-primary/20">
                           <MapPin className="w-3.5 h-3.5 text-primary" />
                         </div>
                         <input 
                            type="text" 
                            placeholder="Pick-up" 
                            required
                            value={bookingData.from}
                            onChange={(e) => setBookingData({...bookingData, from: e.target.value})}
                            className="w-full h-12 lg:h-14 bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl pl-12 lg:pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-white text-sm" 
                         />
                       </div>
                    </div>
                    <div className="space-y-1.5 lg:space-y-2">
                       <label className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">To</label>
                       <div className="relative group">
                         <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-focus-within:bg-primary/20">
                           <Navigation className="w-3.5 h-3.5 text-primary" />
                         </div>
                         <input 
                            type="text" 
                            placeholder="Destination" 
                            required
                            value={bookingData.to}
                            onChange={(e) => setBookingData({...bookingData, to: e.target.value})}
                            className="w-full h-12 lg:h-14 bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl pl-12 lg:pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-white text-sm" 
                         />
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                    <div className="space-y-1.5 lg:space-y-2">
                       <label className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">Start</label>
                       <div className="relative group">
                         <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-focus-within:bg-primary/20 pointer-events-none">
                           <Calendar className="w-3.5 h-3.5 text-primary" />
                         </div>
                         <input 
                            type="date" 
                            required
                            value={bookingData.startDate}
                            onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})}
                            className="w-full h-12 lg:h-14 bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl pl-12 lg:pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-white text-sm [color-scheme:dark] cursor-pointer" 
                         />
                       </div>
                    </div>
                    <div className="space-y-1.5 lg:space-y-2">
                       <label className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">End</label>
                       <div className="relative group">
                         <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-focus-within:bg-primary/20 pointer-events-none">
                           <Calendar className="w-3.5 h-3.5 text-primary" />
                         </div>
                         <input 
                            type="date" 
                            required
                            value={bookingData.endDate}
                            onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})}
                            className="w-full h-12 lg:h-14 bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl pl-12 lg:pl-14 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-white text-sm [color-scheme:dark] cursor-pointer" 
                         />
                       </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 lg:space-y-2">
                     <label className="text-[9px] lg:text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-1">Car</label>
                     <div className="relative group">
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-focus-within:bg-primary/20 pointer-events-none">
                           <Car className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <select 
                           value={bookingData.carType}
                           onChange={(e) => setBookingData({...bookingData, carType: e.target.value})}
                           className="w-full h-12 lg:h-14 bg-white/5 border border-white/10 rounded-xl lg:rounded-2xl pl-12 lg:pl-14 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-white appearance-none cursor-pointer text-sm"
                        >
                           <option className="bg-[#0b0f14]">Any Car</option>
                           <option className="bg-[#0b0f14]">Swift (Hatchback)</option>
                           <option className="bg-[#0b0f14]">Ertiga (7 Seater)</option>
                           <option className="bg-[#0b0f14]">Innova Crysta (Luxury)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l border-white/10 pl-3">
                           <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                     </div>
                  </div>

                  <Button type="submit" className="w-full h-14 lg:h-16 rounded-xl lg:rounded-2xl bg-primary text-primary-foreground font-extrabold text-base lg:text-lg gap-3 hover:scale-[1.01] active:scale-[0.98] transition-all shadow-elevated group lg:mt-4">
                    Book on WhatsApp <Send className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
