import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Local Package",
    subtitle: "Perfect for city rides & meetings",
    price: "₹1,500",
    unit: "8 Hrs / 80 KM",
    features: ["Sedan (Swift Dzire)", "Professional chauffeur", "Clean & sanitized vehicle", "Extra km @ ₹11/km", "Extra hr @ ₹150/hr"],
    popular: false,
  },
  {
    title: "Outstation Trip",
    subtitle: "For inter-city travel & tours",
    price: "₹11",
    unit: "per KM",
    features: ["Minimum 250 km/day", "Driver allowance included", "Toll & parking extra", "Comfortable AC sedan", "24/7 roadside assistance"],
    popular: true,
  },
  {
    title: "Airport Transfer",
    subtitle: "Hassle-free pickup & drop",
    price: "₹800",
    unit: "one way",
    features: ["Airport to City or Inter-city", "Premium Meet & greet", "Live flight tracking", "Free 30 min wait time", "Direct point-to-point"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 lg:py-32 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
    <div className="container relative z-10">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full inline-block">Pricing Plans</span>
        <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mt-6 tracking-tight">Transparent & Competitive Rates</h2>
        <p className="text-muted-foreground mt-4 text-lg">No hidden charges, no surprises. We offer straightforward pricing for top-tier service tailored to your needs.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`rounded-3xl p-8 lg:p-10 transition-all duration-300 relative border flex flex-col h-full ${
              pkg.popular
                ? "bg-foreground text-background border-foreground shadow-[0_20px_50px_rgba(0,0,0,0.2)] md:scale-105 z-10"
                : "bg-card text-foreground border-border shadow-card hover:shadow-elevated"
            }`}
          >
            {pkg.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                  Most Popular choice
                </span>
              </div>
            )}
            <div className="mb-6">
              <h3 className="font-heading font-black text-2xl">{pkg.title}</h3>
              <p className={`text-sm mt-2 font-medium ${pkg.popular ? "text-background/70" : "text-muted-foreground"}`}>{pkg.subtitle}</p>
            </div>
            
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex items-end gap-2">
                <span className={`text-5xl font-heading font-black ${pkg.popular ? "text-white" : "text-primary"}`}>{pkg.price}</span>
              </div>
              <span className={`inline-block mt-2 font-bold px-3 py-1 rounded-md text-sm ${pkg.popular ? "bg-white/10 text-white" : "bg-primary/10 text-primary"}`}>
                {pkg.unit}
              </span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[15px] font-medium">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-primary" : "text-primary"}`} />
                  <span className={pkg.popular ? "text-background/90" : "text-muted-foreground"}>{f}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20know%20about%20pricing" target="_blank" rel="noopener noreferrer" className="mt-auto">
              <Button className={`w-full h-14 rounded-xl text-base font-bold shadow-sm transition-all group ${pkg.popular ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]" : "bg-secondary text-secondary-foreground hover:bg-primary/10 border border-border"}`}>
                Get Selected Plan
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
