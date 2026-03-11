import { Phone, MessageSquare } from "lucide-react";

const CtaBanner = () => (
  <section className="py-16" style={{ background: "var(--gradient-hero)" }}>
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
        Ready to Transform Your Property?
      </h2>
      <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
        Get your free, no-obligation quote today. Same-day response guaranteed.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="tel:7789960414"
          className="inline-flex items-center gap-2 rounded-lg px-8 py-4 font-heading text-base font-bold transition-all hover:scale-105"
          style={{ background: "var(--gradient-cta)", color: "hsl(0,0%,100%)", boxShadow: "var(--shadow-cta)" }}
        >
          <Phone className="h-5 w-5" />
          Call 778-996-0414
        </a>
        <a
          href="sms:7789960414"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 font-heading text-base font-bold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 transition-all"
        >
          <MessageSquare className="h-5 w-5" />
          Text Us Now
        </a>
      </div>
    </div>
  </section>
);

export default CtaBanner;
