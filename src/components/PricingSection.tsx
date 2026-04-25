import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Local Package",
    subtitle: "Ideal for city tours & events",
    price: "₹1,500",
    unit: "8 Hrs / 80 KM",
    features: ["Swift Hatchback", "Professional chauffeur", "Door-to-door service", "Extra km @ ₹11/km", "Extra hr @ ₹150/hr"],
    popular: false,
  },
  {
    title: "Outstation Trip",
    subtitle: "For inter-city travel & tours",
    price: "₹11",
    unit: "per KM",
    features: ["Minimum 250 km/day", "Red New Ertiga (7 Seater)", "Driver allowance included", "Comfortable AC travel", "24/7 roadside assistance"],
    popular: true,
  },
  {
    title: "Wedding Special",
    subtitle: "Premium cars for your big day",
    price: "Custom",
    unit: "per event",
    features: ["Innova Crysta Luxury", "Decorated car available", "On-time arrival guarantee", "Well-dressed chauffeur", "Flexible waiting time"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 lg:py-32 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
    <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-4 block">Our Plans</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mt-2 tracking-tight">Simple, Honest Pricing</h2>
        <p className="text-muted-foreground mt-4 text-lg">No hidden fees. No surprises. Just premium service at reasonable rates.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-[2.5rem] p-10 transition-all duration-500 relative flex flex-col h-full bg-card group ${
              pkg.popular
                ? "border-2 border-primary shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] md:scale-110 z-10"
                : "border border-border hover:border-primary/30"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg">
                  <Sparkles className="w-3 h-3" /> BEST VALUE
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="font-extrabold text-2xl group-hover:text-primary transition-colors">{pkg.title}</h3>
              <p className="text-sm mt-3 text-muted-foreground font-medium">{pkg.subtitle}</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-white/5">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-extrabold text-foreground">{pkg.price}</span>
              </div>
              <span className="inline-block mt-4 font-bold px-4 py-1.5 rounded-xl text-xs bg-primary/10 text-primary uppercase tracking-widest">
                {pkg.unit}
              </span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-4 text-sm font-medium text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a 
              href={`https://wa.me/916354810299?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20know%20about%20the%20${pkg.title}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-auto block group/btn"
            >
              <Button className={`w-full h-14 rounded-2xl text-base font-bold transition-all ${pkg.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white/5 text-foreground hover:bg-primary hover:text-primary-foreground border border-white/5"}`}>
                Check Availability
                <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
