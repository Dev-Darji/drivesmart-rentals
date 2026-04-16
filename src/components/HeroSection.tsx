import { Phone, MessageCircle, Star, ShieldCheck, Car, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero_car.png";
import { motion } from "framer-motion";

const HeroSection = () => {
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
      {/* Background Image with Parallax-like scale */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src={heroBg} 
          alt="Shiv Car Rental - Premium car in Morbi" 
          className="w-full h-full object-cover" 
          width={1920} 
          height={1080} 
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container relative z-10 flex-grow flex flex-col justify-center max-w-6xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:col-span-8"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-semibold tracking-wide border border-primary/20 backdrop-blur-md"
            >
              <Star className="w-3.5 h-3.5 fill-primary" />
              Trusted Since 12 Years
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight"
            >
              Premium Car Rental <br/>Service in{" "}
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
              className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed font-normal"
            >
              Serving since 12 years with 24/7 service. Specializing in Local, Outstation, and Wedding functions. Trusted by Morbi for safe and happy journeys.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="https://wa.me/919725763394?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20book%20a%20car" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 gap-3 text-lg shadow-elevated transition-all rounded-xl font-bold">
                  <MessageCircle className="w-6 h-6" /> Book via WhatsApp
                </Button>
              </a>
              <a href="tel:+919725763394">
                <Button variant="outline" size="lg" className="h-16 px-10 glass-morphism text-foreground hover:bg-white/10 gap-3 text-lg transition-all rounded-xl font-bold">
                  <Phone className="w-6 h-6" /> Call Now
                </Button>
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-10"
            >
               <div className="flex flex-wrap items-center gap-8">
                 <div className="flex flex-col">
                   <span className="text-3xl font-extrabold text-foreground">10+</span>
                   <span className="text-xs font-semibold uppercase tracking-widest text-primary">Premium Fleet</span>
                 </div>
                 <div className="w-px h-10 bg-white/10 hidden sm:block" />
                 <div className="flex flex-col">
                   <span className="text-3xl font-extrabold text-foreground">12+</span>
                   <span className="text-xs font-semibold uppercase tracking-widest text-primary">Years Experience</span>
                 </div>
                 <div className="w-px h-10 bg-white/10 hidden sm:block" />
                 <div className="flex flex-col">
                   <span className="text-3xl font-extrabold text-foreground">5000+</span>
                   <span className="text-xs font-semibold uppercase tracking-widest text-primary">Happy Trips</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block lg:col-span-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
              <div className="glass-morphism rounded-[2.5rem] p-10 space-y-8 animate-float relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Safety First</h4>
                    <p className="text-xs text-muted-foreground">Certified verified drivers</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Clean Fleet</h4>
                    <p className="text-xs text-muted-foreground">Sanitized after every ride</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">24/7 Support</h4>
                    <p className="text-xs text-muted-foreground">Always here for you</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
