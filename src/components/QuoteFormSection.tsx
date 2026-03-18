import { Send, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-quote", {
        body: formData,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      console.error("Quote submission error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring font-body";

  return (
    <section id="quote" className="py-20" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent mb-2">Free Estimate</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground">
              Get Your Instant Free Quote
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4 text-primary-foreground/80">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">We respond the same day.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="bg-card rounded-2xl p-12 text-center" style={{ boxShadow: "var(--shadow-card-hover)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--gradient-blue)" }}>
                  <Send className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Quote Request Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you within a few hours. Thanks for choosing Apex!</p>
                <a href="tel:7789960414" className="inline-flex items-center gap-2 mt-6 rounded-xl px-6 py-3 font-heading text-sm font-bold text-primary-foreground" style={{ background: "var(--gradient-cta)" }}>
                  <Phone className="h-4 w-4" /> Or Call Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 space-y-5" style={{ boxShadow: "var(--shadow-card-hover)" }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Name *</label>
                    <input required maxLength={100} className={inputClass} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Phone *</label>
                    <input required type="tel" maxLength={20} className={inputClass} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Email</label>
                    <input type="email" maxLength={255} className={inputClass} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">City</label>
                    <select className={inputClass} value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })}>
                      <option value="">Select your city...</option>
                      <option value="maple-ridge">Maple Ridge</option>
                      <option value="pitt-meadows">Pitt Meadows</option>
                      <option value="langley">Langley</option>
                      <option value="coquitlam">Coquitlam</option>
                      <option value="port-coquitlam">Port Coquitlam</option>
                      <option value="surrey">Surrey</option>
                      <option value="other">Other (Lower Mainland)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Service Needed</label>
                  <select className={inputClass} value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                    <option value="">Select a service...</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="house-washing">House Washing</option>
                    <option value="roof-washing">Roof Washing</option>
                    <option value="moss-removal">Moss Removal</option>
                    <option value="window-cleaning">Window Cleaning</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5 font-heading">Message</label>
                  <textarea rows={3} maxLength={1000} className={`${inputClass} resize-none`} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl py-4 font-heading text-base font-bold text-primary-foreground transition-all hover:scale-[1.02]"
                  style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)", color: "hsl(0,0%,100%)" }}
                >
                  Get My Free Quote →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
