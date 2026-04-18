import { MapPin, Plane, Map as MapIcon } from "lucide-react";
import { motion } from "framer-motion";

const cities = ["Ahmedabad", "Rajkot", "Surat", "Baroda", "Bhuj", "Mandvi", "Jamnagar", "Junagadh", "Mumbai", "Pune", "Rajasthan", "Morbi"];

const routes = [
  { from: "Morbi", to: "Ahmedabad", distance: "190 km", icon: Plane },
  { from: "Morbi", to: "Rajkot", distance: "65 km", icon: MapPin },
  { from: "Morbi", to: "Surat", distance: "420 km", icon: MapIcon },
  { from: "Morbi", to: "Vadodara", distance: "280 km", icon: Plane },
  { from: "Morbi", to: "Mumbai", distance: "650 km", icon: Plane },
  { from: "Morbi", to: "Bhuj", distance: "170 km", icon: MapIcon },
  { from: "Morbi", to: "Jamnagar", distance: "95 km", icon: MapPin },
  { from: "Morbi", to: "Rajasthan", distance: "600+ km", icon: MapIcon },
];

const LocationsSection = () => (
  <section id="locations" className="py-24 lg:py-32 bg-surface-warm overflow-hidden relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.03)_0,transparent_70%)]" />

    <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Locations</span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mt-2 tracking-tight">Popular Routes & Destinations</h2>
        <p className="text-muted-foreground mt-4 text-lg">Reliable intercity trips, airport transfers, and outstation tours starting from Morbi.</p>
      </motion.div>

        <div className="space-y-12 lg:space-y-20">
          {/* Right to Left Marquee: Cities */}
          <div className="w-full relative flex overflow-x-hidden group">
            <div className="absolute top-0 bottom-0 left-0 w-20 lg:w-40 bg-gradient-to-r from-surface-warm to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-20 lg:w-40 bg-gradient-to-l from-surface-warm to-transparent z-10"></div>

            <div className="animate-marquee flex flex-row gap-8 lg:gap-12 whitespace-nowrap py-4 group-hover:[animation-play-state:paused] w-max">
              {[...cities, ...cities, ...cities, ...cities].map((c, idx) => (
                <span key={`${c}-${idx}`} className="inline-flex px-10 py-5 rounded-[1.5rem] border border-white/5 bg-card text-foreground font-bold text-lg shadow-sm hover:border-primary/40 hover:text-primary transition-all cursor-default">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Left to Right Marquee: Routes */}
          <div className="w-full relative flex overflow-x-hidden group">
            <div className="absolute top-0 bottom-0 left-0 w-20 lg:w-40 bg-gradient-to-r from-surface-warm to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-20 lg:w-40 bg-gradient-to-l from-surface-warm to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marqueer flex flex-row gap-10 lg:gap-16 whitespace-nowrap py-6 group-hover:[animation-play-state:paused] w-max">
              {[...routes, ...routes, ...routes, ...routes].map((r, idx) => (
                <a
                  key={`${r.from}-${r.to}-${idx}`}
                href={`https://wa.me/919725763394?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20book%20a%20trip%20from%20${r.from}%20to%20${r.to}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-w-[320px] bg-card rounded-[2rem] p-8 shadow-card border border-white/5 hover:border-primary/50 transition-all group/route relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <r.icon className="w-20 h-20 text-foreground" />
                </div>

                <div className="flex flex-col gap-3 w-full relative z-10">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-extrabold text-foreground text-xl">{r.from}</span>
                    <div className="flex-1 border-b-2 border-dashed border-primary/20 mx-4 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/40"></div>
                    </div>
                    <span className="font-extrabold text-foreground text-xl">{r.to}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="px-3 py-1 bg-white/5 rounded-lg text-xs font-bold text-muted-foreground uppercase tracking-widest">{r.distance}</div>
                    <span className="text-xs font-bold text-primary group-hover/route:translate-x-1 transition-transform flex items-center gap-2">
                      BOOK NOW <MapPin className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationsSection;
