import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pressure-washing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional pressure washing a house exterior" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(210 95% 15% / 0.85) 0%, hsl(210 90% 30% / 0.7) 50%, hsl(200 85% 40% / 0.6) 100%)" }} />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-1.5 text-sm font-semibold text-accent">
            ⭐ 50+ Five-Star Google Reviews
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-primary-foreground">
            Maple Ridge's Most Trusted{" "}
            <span style={{ color: "hsl(200, 85%, 65%)" }}>Pressure Washing</span>{" "}
            Experts
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl font-body leading-relaxed">
            Restore your home's curb appeal with professional exterior cleaning. Fully insured, same-day response, and results that speak for themselves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="tel:7789960414"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-heading text-base font-bold shadow-lg transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, hsl(38, 95%, 50%) 0%, hsl(30, 95%, 55%) 100%)", color: "hsl(0,0%,100%)", boxShadow: "0 4px 15px -2px hsl(38 95% 55% / 0.4)" }}
            >
              <Phone className="h-5 w-5" />
              Call Now — 778-996-0414
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-7 py-4 font-heading text-base font-bold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 transition-all"
            >
              <MessageSquare className="h-5 w-5" />
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm text-primary-foreground/70 font-medium">
            <span>✓ Fully Insured</span>
            <span>✓ Same-Day Response</span>
            <span>✓ Free Estimates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
