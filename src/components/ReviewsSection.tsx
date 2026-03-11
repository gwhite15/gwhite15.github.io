import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Griffin's Client", loc: "Maple Ridge", text: "Apex Pressure Washing did an awesome job on our driveway and house wash here in Maple Ridge. Griffin was professional and the results were incredible." },
  { name: "Sarah M.", loc: "Maple Ridge", text: "Our home looks brand new! The siding was covered in green algae and they made it spotless. Fast, professional, and incredible attention to detail." },
  { name: "David K.", loc: "Pitt Meadows", text: "Same-day response and the results blew us away. Our driveway and patio look like they were just poured. Will definitely be calling again." },
  { name: "Jennifer L.", loc: "Port Coquitlam", text: "We had moss all over our roof and walkways. Apex removed every bit of it and our home looks amazing. Worth every penny!" },
  { name: "Mark T.", loc: "Langley", text: "Best pressure washing service in the Lower Mainland. They were on time, professional, and the difference is unbelievable. Highly recommend!" },
  { name: "Lisa R.", loc: "Coquitlam", text: "Griffin and his team were fantastic. Our deck was grey and worn — now it looks brand new. Great communication throughout the whole process." },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
          What Our Customers Say
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
          </div>
          <span className="font-heading font-bold text-foreground">5.0</span>
          <span className="text-muted-foreground text-sm">from 59 Google Reviews</span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-7"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-5">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-primary-foreground text-sm" style={{ background: "var(--gradient-blue)" }}>
                {r.name[0]}
              </div>
              <div>
                <p className="font-heading font-bold text-foreground text-sm">{r.name}</p>
                <p className="text-muted-foreground text-xs">{r.loc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
