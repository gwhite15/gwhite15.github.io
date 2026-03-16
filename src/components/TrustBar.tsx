import { ShieldCheck, Star, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Star, label: "50+ Five-Star Reviews" },
  { icon: Clock, label: "Same-Day Response" },
  { icon: MapPin, label: "Maple Ridge & Lower Mainland" },
];

const TrustBar = () => (
  <section className="relative -mt-8 z-10 pb-4">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        style={{ boxShadow: "var(--shadow-card-hover)" }}
      >
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--gradient-blue)" }}>
              <item.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-heading text-sm font-bold text-foreground leading-tight">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TrustBar;
