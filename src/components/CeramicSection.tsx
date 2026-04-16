import { motion } from "framer-motion";
import { Globe, Factory, ArrowRight, Box } from "lucide-react";
import ceramicImg from "@/assets/ceramic_industrial_service.png";

const CeramicSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.05)_0%,transparent_50%)]" />
      
      <div className="container max-w-7xl px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/3] group">
              <img 
                src={ceramicImg} 
                alt="Ceramic Industry Help" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="glass-morphism px-6 py-4 rounded-2xl">
                  <span className="text-primary font-bold block text-sm tracking-widest uppercase">Global Help</span>
                  <span className="text-white text-xl font-extrabold mt-1 block">Morbi Ceramic Hub</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Special Help</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Helping the <br/><span className="text-primary">Ceramic Business</span>
              </h2>
              <p className="text-white/60 text-lg mt-6 leading-relaxed">
                Apart from car rental, we also help Morbi's factories. We provide easy transport for ceramic business and import-export work.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: Globe, 
                  title: "Import & Export Help", 
                  desc: "Easy car help for your international trade and business travels." 
                },
                { 
                  icon: Factory, 
                  title: "Factory Pickup & Drop", 
                  desc: "Special cars for factory visits and office work." 
                },
                { 
                  icon: Box, 
                  title: "Sample & Goods Help", 
                  desc: "Safe and fast delivery for your ceramic samples and small items." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-amber-950 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
               <a href="https://wa.me/919725763394?text=Hi%20Shiv%20Car%20Rental%2C%20I%20want%20to%20know%20more%20about%20your%20Ceramic%20Industry%20Services" target="_blank" rel="noopener noreferrer">
                 <button className="flex items-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-2xl border border-white/10 transition-all group">
                   Ask About Factory Solutions
                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CeramicSection;
