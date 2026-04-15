import { Shield, Clock, Users, Briefcase } from "lucide-react";

const features = [
  { icon: Users, title: "30+ Trained Drivers", desc: "All drivers are professionally trained with valid commercial licenses." },
  { icon: Clock, title: "10+ Years Experience", desc: "Average driving experience of over 10 years for safe journeys." },
  { icon: Shield, title: "Background Verified", desc: "Every driver undergoes thorough police verification and background checks." },
  { icon: Briefcase, title: "We're Hiring!", desc: "Experienced drivers with valid commercial licenses can apply to join our growing team." },
];

const DriversSection = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Drivers</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Professional & Safe Drivers</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          All our chauffeurs are experienced, courteous, and committed to providing a comfortable ride every time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DriversSection;
