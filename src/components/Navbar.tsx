import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="font-heading text-2xl font-extrabold tracking-tight text-primary-dark">
          APEX<span className="text-primary-light"> PRESSURE WASHING</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-heading text-sm font-semibold text-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="tel:7789960414"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-heading text-sm font-bold text-primary-foreground shadow-md hover:bg-primary-light transition-colors"
          >
            <Phone className="h-4 w-4" />
            778-996-0414
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block font-heading text-sm font-semibold text-foreground py-2">
              {l.label}
            </a>
          ))}
          <a
            href="tel:7789960414"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-heading text-sm font-bold text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            778-996-0414
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
