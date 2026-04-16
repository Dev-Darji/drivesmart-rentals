import { Shield, Clock, Users, Briefcase } from "lucide-react";

const features = [
  { icon: Users, title: "6 Expert Drivers", desc: "Our small team of dedicated, full-time chauffeurs is here to serve you 24/7." },
  { icon: Clock, title: "8-10 Years Experience", desc: "Each driver in our team has substantial experience driving across Gujarat." },
  { icon: Shield, title: "Background Verified", desc: "Every driver undergoes thorough verification for your safety and peace of mind." },
  { icon: Briefcase, title: "Professional Service", desc: "Courteous, punctual, and well-behaved drivers for all your travel needs." },
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
          <div key={f.title} className="group bg-card/40 backdrop-blur-sm rounded-[2rem] p-8 border border-white/10 hover:border-primary/20 hover:bg-card/60 hover:-translate-y-2 transition-all duration-500 text-center shadow-card hover:shadow-elevated">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
              <f.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white mb-3 tracking-tight group-hover:text-primary transition-colors">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DriversSection;
