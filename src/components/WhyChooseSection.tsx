import { ShieldCheck, MapPin, Clock, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete liability coverage for your peace of mind. Your property is protected." },
  { icon: MapPin, title: "Local Maple Ridge Company", desc: "We live and work in Maple Ridge. We know the community and care about our neighbors." },
  { icon: Clock, title: "Same-Day Response", desc: "Contact us and hear back the same day. We value your time." },
  { icon: Wrench, title: "Professional Equipment", desc: "Commercial-grade pressure washers and eco-friendly cleaning solutions for the best results." },
];

const WhyChooseSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Why Choose Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
          Why Maple Ridge Homeowners Trust Apex
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 text-center transition-all hover:-translate-y-1 duration-300"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "var(--gradient-blue)", boxShadow: "var(--shadow-blue)" }}>
              <r.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-base font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
