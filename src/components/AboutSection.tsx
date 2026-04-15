import { Car, Clock, MapPin, Shield, Users } from "lucide-react";

const stats = [
  { icon: Clock, label: "Years of Service", value: "15+" },
  { icon: Car, label: "Vehicles in Fleet", value: "50+" },
  { icon: Users, label: "Happy Customers", value: "10K+" },
  { icon: MapPin, label: "Cities Covered", value: "25+" },
];

const AboutSection = () => (
  <section id="about" className="py-16 lg:py-24 bg-surface-warm">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full inline-block">About Us</span>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mt-6 mb-6 tracking-tight">
          Your Trusted Travel Partner in Gujarat
        </h2>
        <p className="text-muted-foreground text-xl leading-relaxed">
          Jay Jogmaya Travels operates a modern, diverse fleet of <strong className="text-foreground">50+ premium vehicles</strong>. With <strong className="text-foreground">15 years</strong> of excellence, we guarantee comfort, safety, and timely service for local rides, outstation trips, and airport transfers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-elevated transition-all border border-border/50 group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
              <s.icon className="w-8 h-8 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <div className="text-4xl font-heading font-black text-foreground">{s.value}</div>
            <div className="text-base font-semibold text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
