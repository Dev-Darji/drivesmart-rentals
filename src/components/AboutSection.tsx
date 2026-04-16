import { Car, Clock, MapPin, Users, ShieldCheck, Heart, Zap, Mail } from "lucide-react";
import aboutImg from "@/assets/about_trust.png";
import { motion } from "framer-motion";

const excellenceCards = [
  {
    icon: Clock,
    title: "12+ Years of Trusted Help",
    desc: "Helping Morbi people since 2012 with safe and easy car booking.",
    color: "from-blue-500/20 to-transparent"
  },
  {
    icon: Car,
    title: "10+ Best Quality Cars",
    desc: "Our clean and well-kept cars make your trip very comfortable.",
    color: "from-primary/20 to-transparent"
  },
  {
    icon: Users,
    title: "5000+ Happy Trips",
    desc: "Finished thousands of successful trips all over Gujarat.",
    color: "from-green-500/20 to-transparent"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Good Drivers",
    desc: "Our drivers are very polite, professional and verified for your safety.",
    color: "from-purple-500/20 to-transparent"
  }
];

const AboutSection = () => (
  <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />
    
    <div className="container max-w-6xl px-5 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary text-xs font-bold uppercase tracking-[0.3em] block"
        >
          Our Story
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          12 Years of <span className="text-primary italic">Trust</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-foreground/60 text-lg max-w-2xl mx-auto"
        >
          Shiv Car Rental is Morbi's favorite choice for travel. We provide great service with easy and fast booking for everyone.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-[2.5rem] p-10 lg:p-14 border border-white/5 shadow-elevated relative overflow-hidden group"
        >
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl font-bold text-white">The Shiv Promise</h3>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Serving Morbi since 2012. We work on three simple things: <span className="text-primary font-bold italic">Honesty, Safety, and Good Prices.</span>
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              If you are planning for a wedding or a long trip, we are always here for your comfort.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="p-4 bg-primary/10 rounded-2xl"><Heart className="w-6 h-6 text-primary" /></div>
              <div className="p-4 bg-primary/10 rounded-2xl"><Zap className="w-6 h-6 text-primary" /></div>
              <div className="p-4 bg-primary/10 rounded-2xl"><ShieldCheck className="w-6 h-6 text-primary" /></div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] overflow-hidden border-4 border-card shadow-elevated relative group"
        >
          <img src={aboutImg} alt="Shiv Car Rental Trust" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3000ms]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-10 left-10">
            <div className="glass-morphism px-6 py-4 rounded-2xl border border-white/10">
               <span className="text-white font-bold block text-lg italic">"Morbi's Safest Rides"</span>
               <span className="text-white/60 text-xs font-medium uppercase tracking-widest mt-1 block">Since 2012</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {excellenceCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`bg-card p-8 rounded-[2rem] border border-white/5 shadow-card hover:border-primary/20 transition-all duration-500 relative overflow-hidden group`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <card.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
