import { Phone, MessageSquare, FileText } from "lucide-react";

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-border bg-card/98 backdrop-blur-lg">
    <div className="grid grid-cols-3">
      <a
        href="tel:7789960414"
        className="flex flex-col items-center justify-center gap-1 py-3 font-heading text-xs font-bold text-primary-foreground"
        style={{ background: "var(--gradient-cta)" }}
      >
        <Phone className="h-5 w-5" />
        Call
      </a>
      <a
        href="sms:7789960414"
        className="flex flex-col items-center justify-center gap-1 py-3 font-heading text-xs font-bold text-primary"
      >
        <MessageSquare className="h-5 w-5" />
        Text
      </a>
      <a
        href="#quote"
        className="flex flex-col items-center justify-center gap-1 py-3 font-heading text-xs font-bold text-primary-foreground"
        style={{ background: "var(--gradient-blue)" }}
      >
        <FileText className="h-5 w-5" />
        Quote
      </a>
    </div>
  </div>
);

export default MobileBottomBar;
