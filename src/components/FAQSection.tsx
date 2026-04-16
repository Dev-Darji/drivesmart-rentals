import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface-warm relative overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container max-w-3xl px-5 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">Curious About Service?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Everything you need to know about booking with Shiv Car Rental.</p>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-white/5 rounded-[1.5rem] px-8 outline-none shadow-sm hover:border-primary/20 transition-all overflow-hidden">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors py-8 text-left">How do I book a car?</AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-lg leading-relaxed pb-8">
                Booking is incredibly simple! You can easily book your journey via WhatsApp by clicking any of the <span className="text-primary font-bold">"Book via WhatsApp"</span> buttons, or you can call us directly on our hotlines for immediate confirmation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card border border-white/5 rounded-[1.5rem] px-8 outline-none shadow-sm hover:border-primary/20 transition-all overflow-hidden">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors py-8 text-left">What are your payment options?</AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-lg leading-relaxed pb-8">
                We accept all major payment methods including <span className="text-primary font-bold">UPI (PhonePe, Google Pay)</span>, Cash, and Direct Bank Transfers. Payment is usually settled at the end of the trip or as per the package agreement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card border border-white/5 rounded-[1.5rem] px-8 outline-none shadow-sm hover:border-primary/20 transition-all overflow-hidden">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors py-8 text-left">Are drivers included in outstation trips?</AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-lg leading-relaxed pb-8">
                Yes, our <span className="text-primary font-bold">expert pilots</span> are always included in outstation and local packages. We take pride in our professional, polite, and verified drivers who ensure your safety and comfort throughout the ride.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-card border border-white/5 rounded-[1.5rem] px-8 outline-none shadow-sm border-b-0 hover:border-primary/20 transition-all overflow-hidden">
              <AccordionTrigger className="text-xl font-bold hover:no-underline hover:text-primary transition-colors py-8 text-left">What is the fuel & toll policy?</AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-lg leading-relaxed pb-8">
                For our standard local and outstation packages, <span className="text-primary font-bold">Fuel is included</span>. However, state taxes, toll charges, and parking fees are typically extra and payble by the customer during the trip.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
