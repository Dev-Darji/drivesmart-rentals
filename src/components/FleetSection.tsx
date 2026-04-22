import { Users, Settings, Snowflake, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import swiftImg from "@/assets/fleet_swift_dzire.png";
import ertigaImg from "@/assets/fleet_ertiga.png";
import innovaImg from "@/assets/fleet_innova.png";
import { motion } from "framer-motion";

const cars = [
  {
    name: "Swift Dzire",
    type: "Sedan",
    transmission: "Manual",
    seats: "5 Seater",
    ac: "A/C",
    rate: "4.9",
    image: swiftImg,
    color: "from-blue-500/10 to-transparent"
  },
  {
    name: "New Ertiga",
    type: "7 Seater",
    transmission: "Manual",
    seats: "7 Seater",
    ac: "Dual A/C",
    rate: "4.8",
    image: ertigaImg,
    popular: true,
    color: "from-primary/10 to-transparent"
  },
  {
    name: "Innova Crysta",
    type: "Luxury Car",
    transmission: "Manual",
    seats: "7 Seater",
    ac: "Dual A/C",
    rate: "5.0",
    image: innovaImg,
    color: "from-purple-500/10 to-transparent"
  },
];

const FleetSection = () => (
  <section id="fleet" className="py-24 lg:py-32 bg-surface-warm relative overflow-hidden">
    <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Our Cars</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">Best Cars for Your Trip</h2>
        <p className="text-muted-foreground mt-4 text-base">Travel in style and comfort. Every car in our fleet is cleaned and ready for your ride.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car, i) => (
          <motion.div
            key={car.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-card rounded-2xl overflow-hidden shadow-card border border-border group flex flex-col h-full relative hover:border-primary/30 transition-colors duration-500`}
          >
            {car.popular && (
              <div className="absolute top-6 right-6 z-20 glass-morphism text-primary text-[10px] font-bold px-4 py-2 rounded-full flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> MOST POPULAR
              </div>
            )}

            <div className={`h-60 overflow-hidden relative w-full bg-gradient-to-b ${car.color}`}>
              <img
                src={car.image}
                alt={car.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="px-8 pb-8 pt-0 flex flex-col flex-grow relative -mt-8">
              <div className="flex justify-between items-end mb-3">
                <div className="flex-1">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-widest">{car.type}</span>
                  <h3 className="font-extrabold text-2xl text-foreground mt-5 group-hover:text-primary transition-colors truncate pr-2">{car.name}</h3>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20">
                      <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                      <span className="text-sm font-black text-white leading-none">{car.rate}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-white/5 mb-6"></div>

              <div className="flex items-center justify-between text-xs font-medium text-foreground/60 w-full">
                <div className="flex items-center gap-2"><Settings className="w-4 h-4 text-primary" /> {car.transmission}</div>
                <div className="flex items-center gap-2"><Snowflake className="w-4 h-4 text-primary" /> {car.ac}</div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium text-foreground/60 w-full mt-2">
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> {car.seats}</div>
              </div>

              <a
                href={`https://wa.me/919725763394?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20book%20the%20${car.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-auto w-full group/btn"
              >
                <Button className="w-full bg-white/5 text-foreground hover:bg-primary hover:text-primary-foreground h-14 rounded-xl text-base font-bold transition-all border mt-7 border-white/5 group-hover:border-primary">
                  Book This Journey
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;
