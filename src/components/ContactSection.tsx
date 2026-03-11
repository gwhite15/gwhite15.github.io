import { Phone, Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire up to a backend/email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Request Your Free Quote
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Call, text, or fill out the form below. We respond same day!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <a href="tel:7789960414" className="flex items-center gap-4 p-5 rounded-xl bg-primary text-primary-foreground hover:bg-primary-light transition-colors group">
              <Phone className="h-6 w-6 shrink-0" />
              <div>
                <p className="font-heading font-bold text-sm">Call Us</p>
                <p className="text-primary-foreground/80 text-sm">778-996-0414</p>
              </div>
            </a>

            <a href="sms:7789960414" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group" style={{ boxShadow: "var(--shadow-card)" }}>
              <MessageSquare className="h-6 w-6 text-primary shrink-0" />
              <div>
                <p className="font-heading font-bold text-sm text-foreground">Text Us</p>
                <p className="text-muted-foreground text-sm">778-996-0414</p>
              </div>
            </a>

            <a href="mailto:apexpressurewashing604@gmail.com" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group" style={{ boxShadow: "var(--shadow-card)" }}>
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <div>
                <p className="font-heading font-bold text-sm text-foreground">Email</p>
                <p className="text-muted-foreground text-sm">apexpressurewashing604@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <MapPin className="h-6 w-6 text-primary shrink-0" />
              <div>
                <p className="font-heading font-bold text-sm text-foreground">Service Area</p>
                <p className="text-muted-foreground text-sm">Maple Ridge & the Lower Mainland</p>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card rounded-2xl p-10 text-center" style={{ boxShadow: "var(--shadow-card-hover)" }}>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Quote Request Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within a few hours. Thanks for choosing Apex!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 space-y-5" style={{ boxShadow: "var(--shadow-card-hover)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Name *</label>
                    <input
                      required
                      maxLength={100}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Phone *</label>
                    <input
                      required
                      type="tel"
                      maxLength={20}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Email</label>
                  <input
                    type="email"
                    maxLength={255}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Service Needed</label>
                  <select
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="house-washing">House Washing</option>
                    <option value="roof-washing">Roof Washing</option>
                    <option value="moss-removal">Moss Removal</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="exterior-cleaning">General Exterior Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Message</label>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg py-4 font-heading text-base font-bold text-primary-foreground transition-all hover:scale-[1.02]"
                  style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)", color: "hsl(0,0%,100%)" }}
                >
                  Get My Free Quote →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
