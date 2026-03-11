import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCta = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Ready to Restore Your Home's Curb Appeal?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Get your free, no-obligation quote today. Same-day response guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:7789960414"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-heading text-base font-bold transition-all hover:scale-105"
            style={{ background: "var(--gradient-cta)", color: "hsl(0,0%,100%)", boxShadow: "var(--shadow-cta)" }}
          >
            <Phone className="h-5 w-5" />
            Call Now — 778-996-0414
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-heading text-base font-bold text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-blue)", boxShadow: "var(--shadow-blue)" }}
          >
            Request Free Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCta;
