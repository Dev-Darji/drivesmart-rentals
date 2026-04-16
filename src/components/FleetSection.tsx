import { Fuel, Users, Settings, Snowflake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import swiftImg from "@/assets/fleet_swift.png";
import ertigaImg from "@/assets/fleet_ertiga.png";
import innovaImg from "@/assets/fleet_innova.png";

const cars = [
  { name: "Swift", type: "Hatchback", transmission: "Manual", mileage: "22 km/l", seats: "5 Seater", ac: "A/C", rate: "Premium", image: swiftImg },
  { name: "New Ertiga", type: "MPV (7 Seater)", transmission: "Manual", mileage: "19 km/l", seats: "7 Seater", ac: "Dual A/C", rate: "Executive", image: ertigaImg, popular: true },
  { name: "Innova Crysta", type: "Luxury SUV", transmission: "Manual", mileage: "14 km/l", seats: "7 Seater", ac: "Dual A/C", rate: "Luxury", image: innovaImg },
];

const FleetSection = () => (
  <section id="fleet" className="py-24 lg:py-32 bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

    <div className="container relative z-10">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mt-2 tracking-tight">Our Premium Fleet</h2>
        <p className="text-muted-foreground mt-4 text-lg">Select the perfect vehicle for your journey. All our cars are well-maintained, sanitized, and driven by professional chauffeurs.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div key={car.name} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 group border border-border flex flex-col h-full relative translate-y-0 hover:-translate-y-2">
            {car.popular && (
              <div className="absolute top-4 right-4 z-20 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Most Popular
              </div>
            )}
            
            {/* Image Container with precise dimensions */}
            <div className="h-56 overflow-hidden bg-muted relative w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
              <img src={car.image} alt={car.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0" />
            </div>
            
            <div className="p-8 pt-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-sm">{car.type}</span>
                  <h3 className="font-heading font-bold text-2xl text-foreground mt-2 tracking-tight">{car.name}</h3>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-black text-foreground">{car.rate}</span>
                </div>
              </div>
              
              <div className="h-[1px] w-full bg-border my-5"></div>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8 mt-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Settings className="w-4 h-4 text-primary" /> {car.transmission}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Fuel className="w-4 h-4 text-primary" /> {car.mileage}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Users className="w-4 h-4 text-primary" /> {car.seats}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <Snowflake className="w-4 h-4 text-primary" /> {car.ac}
                </div>
              </div>
              
              <a href={`https://wa.me/919725763394?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20book%20the%20${car.name}`} target="_blank" rel="noopener noreferrer" className="block mt-auto w-full">
                <Button className="w-full bg-white/5 text-white/80 hover:bg-primary hover:text-primary-foreground group/btn h-14 rounded-xl text-base font-bold shadow-sm transition-all border border-white/10">
                  Reserve Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FleetSection;
