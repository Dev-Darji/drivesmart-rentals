import { MapPin, Navigation } from "lucide-react";

const cities = ["Ahmedabad", "Rajkot", "Surat", "Vadodara", "Gandhinagar", "Bhavnagar", "Jamnagar", "Junagadh", "Mehsana", "Bhuj", "Anand", "Morbi"];

const routes = [
  { from: "Ahmedabad", to: "Udaipur", distance: "265 km" },
  { from: "Ahmedabad", to: "Somnath", distance: "415 km" },
  { from: "Ahmedabad", to: "Dwarka", distance: "465 km" },
  { from: "Rajkot", to: "Dwarka", distance: "215 km" },
  { from: "Ahmedabad", to: "Mumbai", distance: "530 km" },
  { from: "Ahmedabad", to: "Mount Abu", distance: "225 km" },
  { from: "Surat", to: "Mumbai", distance: "280 km" },
  { from: "Vadodara", to: "Statue of Unity", distance: "90 km" },
];

const LocationsSection = () => (
  <section id="locations" className="py-24 lg:py-32 bg-surface-warm overflow-hidden">
    <div className="container relative z-10">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full inline-block">Locations</span>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mt-6 tracking-tight">We Serve Across Gujarat & Beyond</h2>
        <p className="text-muted-foreground mt-4 text-lg">Whether you need to travel within the city or across states, we provide reliable connectivity and excellent service.</p>
      </div>

      <div className="mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground">Cities We Cover</h3>
        </div>
        
        {/* Right to Left Marquee */}
        <div className="w-full relative flex overflow-x-hidden group">
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface-warm to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface-warm to-transparent z-10"></div>
          
          <div className="animate-marquee flex flex-row gap-4 whitespace-nowrap py-2 group-hover:[animation-play-state:paused]">
            {[...cities, ...cities, ...cities].map((c, idx) => (
              <span key={`${c}-${idx}`} className="inline-flex px-8 py-4 rounded-xl border border-border bg-card text-foreground font-bold text-lg shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
            <Navigation className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground">Most Popular Routes</h3>
        </div>
        
        {/* Left to Right Marquee */}
        <div className="w-full relative flex overflow-x-hidden group">
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-surface-warm to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-surface-warm to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marqueer flex flex-row gap-6 whitespace-nowrap py-4 group-hover:[animation-play-state:paused]">
            {[...routes, ...routes].map((r, idx) => (
              <a
                key={`${r.from}-${r.to}-${idx}`}
                href={`https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20book%20${r.from}%20to%20${r.to}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between min-w-[320px] bg-foreground rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-primary transition-all group/route"
              >
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-heading font-bold text-background text-lg">{r.from}</span>
                    <div className="flex-1 border-b-2 border-dashed border-background/20 mx-4 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-background/50"></div>
                    </div>
                    <span className="font-heading font-bold text-background text-lg">{r.to}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-semibold text-background/60">{r.distance}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-background/80 group-hover/route:text-white flex items-center">
                      Book Trip <MapPin className="w-3 h-3 ml-1" />
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
