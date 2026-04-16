import { Clock, Shield, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Service",
      desc: "Always available for you, day or night. Never miss a ride."
    },
    {
      icon: Shield,
      title: "No Hidden Charges",
      desc: "Transparent and honest pricing. What you see is what you pay."
    },
    {
      icon: Users,
      title: "Professional Drivers",
      desc: "Expert, polite and verified pilots for a safe journey."
    },
    {
      icon: MapPin,
      title: "Door-to-Door Pickup",
      desc: "We pick you up from your doorstep and drop you at your destination."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container max-w-6xl px-5 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full mb-6 inline-block">Our Excellence</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">Why Choose Shiv Car Rental?</h2>
          <p className="text-muted-foreground mt-4 text-base max-w-2xl mx-auto">We provide the most reliable car rental services in Morbi, focused on safety, comfort, and premium experience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-card rounded-[2rem] p-8 text-center shadow-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-elevated relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-all duration-500 group-hover:rotate-6">
                <feature.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
