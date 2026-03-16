import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:7789960414"
    className="fixed bottom-20 right-4 z-50 md:hidden w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
    style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
    aria-label="Call Apex Pressure Washing"
  >
    <Phone className="h-6 w-6 text-primary-foreground" />
  </a>
);

export default FloatingCallButton;
