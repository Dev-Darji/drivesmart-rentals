import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Rajesh Patel", rating: 5, review: "Excellent service! The driver was very punctual and the car was spotlessly clean. Best Car Rental across Gujarat." },
  { name: "Priya Sharma", rating: 5, review: "Booked an Innova for our family trip to Udaipur. Very comfortable ride and reasonable pricing. Highly recommended!" },
  { name: "Amit Desai", rating: 4, review: "Been using their airport pickup service for a year now. Always on time and very professional drivers." },
  { name: "Sneha Joshi", rating: 5, review: "Prompt service and very polite drivers. The car was in excellent condition, making our long trip very comfortable. Truly reliable!" },
  { name: "Kiran Mehta", rating: 5, review: "Transparent pricing with no hidden charges. The WhatsApp booking is super convenient. Great experience overall." },
  { name: "Deepak Shah", rating: 4, review: "Very reliable for outstation trips. The driver knew all the routes well and was very courteous." },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-24 lg:py-32 bg-background relative overflow-hidden">
    <div className="container max-w-6xl px-5 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 inline-block">Direct Feedback</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mt-2 tracking-tight">What Our Customers Say</h2>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <a href="#" className="inline-flex items-center gap-3 bg-card border border-white/5 px-8 py-4 rounded-[1.5rem] shadow-card hover:border-primary/30 transition-all">
            <span className="text-primary font-bold text-xl">4.8</span>
            <div className="flex gap-1">
               <Star className="w-5 h-5 fill-primary text-primary" />
               <Star className="w-5 h-5 fill-primary text-primary" />
               <Star className="w-5 h-5 fill-primary text-primary" />
               <Star className="w-5 h-5 fill-primary text-primary" />
               <Star className="w-5 h-5 fill-primary text-primary" />
            </div>
            <span className="text-foreground/60 font-bold text-xs uppercase tracking-widest ml-2">on Google</span>
          </a>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div 
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card border border-white/5 rounded-[2.5rem] p-10 shadow-card hover:border-primary/30 transition-all duration-500 relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
               <span className="text-8xl font-serif text-white">"</span>
            </div>
            <div className="flex gap-1 mb-6 relative z-10">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < r.rating ? "fill-primary text-primary" : "text-white/5"}`} />
              ))}
            </div>
            <p className="text-foreground/70 text-base mb-8 leading-relaxed italic relative z-10">"{r.review}"</p>
            <div className="relative z-10">
              <p className="font-extrabold text-foreground group-hover:text-primary transition-colors">{r.name}</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Verified Client</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
