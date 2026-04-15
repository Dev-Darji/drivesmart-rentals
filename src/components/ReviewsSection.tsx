import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Patel", rating: 5, review: "Excellent service! The driver was very punctual and the car was spotlessly clean. Best car rental in Ahmedabad." },
  { name: "Priya Sharma", rating: 5, review: "Booked an Innova for our family trip to Udaipur. Very comfortable ride and reasonable pricing. Highly recommended!" },
  { name: "Amit Desai", rating: 4, review: "Been using their airport pickup service for a year now. Always on time and very professional drivers." },
  { name: "Sneha Joshi", rating: 5, review: "Used their tempo traveller for a group trip to Somnath. Everything was perfectly arranged. Will book again!" },
  { name: "Kiran Mehta", rating: 5, review: "Transparent pricing with no hidden charges. The WhatsApp booking is super convenient. Great experience overall." },
  { name: "Deepak Shah", rating: 4, review: "Very reliable for outstation trips. The driver knew all the routes well and was very courteous." },
];

const ReviewsSection = () => (
  <section className="py-16 lg:py-24 bg-surface-warm">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Reviews</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">What Our Customers Say</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-xl p-6 shadow-card">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < r.rating ? "fill-primary text-primary" : "text-border"}`} />
              ))}
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{r.review}"</p>
            <p className="font-heading font-bold text-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
