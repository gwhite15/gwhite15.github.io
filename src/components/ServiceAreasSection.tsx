import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  "Maple Ridge",
  "Pitt Meadows",
  "Langley",
  "Coquitlam",
  "Port Coquitlam",
  "Surrey",
  "Lower Mainland",
];

const ServiceAreasSection = () => (
  <section id="areas" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Service Areas</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
          Proudly Serving the Lower Mainland
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Professional pressure washing services across Maple Ridge and surrounding communities.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {areas.map((area, i) => (
          <motion.div
            key={area}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="inline-flex items-center gap-2 bg-card rounded-xl px-6 py-4 font-heading font-bold text-foreground text-sm"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <MapPin className="h-4 w-4 text-primary" />
            {area}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreasSection;
