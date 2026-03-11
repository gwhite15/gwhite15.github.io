import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", loc: "Maple Ridge", text: "Apex transformed our home! The siding looks brand new. Fast, professional, and incredible attention to detail. Highly recommend!" },
  { name: "David K.", loc: "Pitt Meadows", text: "Same-day response and the results blew us away. Our driveway and patio look like they were just poured. Will definitely be calling again." },
  { name: "Jennifer L.", loc: "Port Coquitlam", text: "We had moss all over our roof and walkways. Apex removed every bit of it and our home looks amazing. Worth every penny!" },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-xl p-7" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
