import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional pressure washing a house exterior" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(210 95% 10% / 0.88) 0%, hsl(210 90% 20% / 0.75) 40%, hsl(200 85% 30% / 0.6) 100%)" }} />
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1.5 text-sm font-bold text-accent font-heading">
              ⭐ 50+ Five-Star Google Reviews
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.1] text-primary-foreground">
              Pressure Washing in Maple Ridge That Makes Your Home{" "}
              <span style={{ color: "hsl(200, 85%, 70%)" }}>Look New Again</span>
            </h1>

            <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl font-body leading-relaxed">
              Professional exterior cleaning for homes across Maple Ridge and the Lower Mainland. Fully insured, same-day response, and backed by 50+ five-star Google reviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href="tel:7789960414"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 font-heading text-base font-bold transition-all hover:scale-105"
                style={{ background: "var(--gradient-cta)", color: "hsl(0,0%,100%)", boxShadow: "var(--shadow-cta)" }}
              >
                <Phone className="h-5 w-5" />
                Call Now — 778-996-0414
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-7 py-4 font-heading text-base font-bold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 transition-all"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="sms:7789960414"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/20 bg-primary-foreground/5 px-6 py-4 font-heading text-base font-bold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/15 transition-all"
              >
                <MessageSquare className="h-5 w-5" />
                Text Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
