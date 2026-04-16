import { Car, Clock, MapPin, Users } from "lucide-react";
import aboutImg from "@/assets/about_trust.png";

const stats = [
  { icon: Clock, label: "Years of Service", value: "12+" },
  { icon: Car, label: "Vehicles in Fleet", value: "10+" },
  { icon: Users, label: "Happy Customers", value: "5000+" },
  { icon: MapPin, label: "Cities Covered", value: "15+" },
];

const AboutSection = () => (
  <section id="about" className="py-16 lg:py-24 bg-surface-warm">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-6 text-foreground leading-tight">
            A Decade of Excellence in <span className="text-primary">Car Rentals</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Operating for over <span className="text-foreground font-bold">12 years</span>, Shiv Car rental has established itself as the most trusted name for reliable transportation in Morbi and across Gujarat.
            </p>
            <p>
              We maintain a diverse fleet of <span className="text-foreground font-bold">10 well-maintained vehicles</span>, specializing in 5-seater and 7-seater cars that cater to every need—be it local travel, long-distance outstation trips, or the prestige of wedding functions.
            </p>
            <p>
              All our vehicles are manual transmission, ensuring peak performance and reliability on every journey.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12 overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="group/stat space-y-1 hover:translate-x-1 transition-transform duration-300">
                <div className="text-4xl font-black text-primary group-hover/stat:scale-110 transition-transform origin-left inline-block">{s.value}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="absolute -inset-6 bg-primary/20 rounded-[3rem] -z-10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 rotate-6"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-elevated border-[12px] border-card hover:border-primary/20 transition-all duration-700 group-hover:scale-[1.02]">
            <img src={aboutImg} alt="Trusted Car Rental Service in Morbi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
