import { Phone, Menu, X, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#quote" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/98 backdrop-blur-lg shadow-lg" : "bg-card/90 backdrop-blur-md"} border-b border-border`}>
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="font-heading text-xl md:text-2xl font-extrabold tracking-tight">
          <span className="text-primary-dark">APEX</span>
          <span className="text-primary"> PRESSURE WASHING</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-heading text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="tel:7789960414"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground transition-all hover:scale-105"
            style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
          >
            <Phone className="h-4 w-4" />
            778-996-0414
          </a>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2 pt-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block font-heading text-sm font-semibold text-foreground py-2.5 hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="tel:7789960414" className="flex items-center justify-center gap-2 rounded-lg py-3 font-heading text-sm font-bold text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
                <Phone className="h-4 w-4" /> Call 778-996-0414
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
