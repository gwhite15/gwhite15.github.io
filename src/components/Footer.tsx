import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="py-12" style={{ background: "hsl(210 95% 12%)" }}>
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 text-primary-foreground">
        <div>
          <h3 className="font-heading text-xl font-extrabold mb-3">APEX PRESSURE WASHING</h3>
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Professional exterior cleaning services for Maple Ridge and the Lower Mainland. Fully insured with 59 five-star Google reviews.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-3 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Pressure Washing</li>
            <li>House Washing</li>
            <li>Roof Washing</li>
            <li>Moss Removal</li>
            <li>Window Cleaning</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-3 uppercase tracking-wider">Contact</h4>
          <div className="space-y-3 text-sm text-primary-foreground/60">
            <a href="tel:7789960414" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" /> 778-996-0414
            </a>
            <a href="mailto:apexpressurewashing604@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4" /> apexpressurewashing604@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Maple Ridge & Lower Mainland
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Apex Pressure Washing. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
