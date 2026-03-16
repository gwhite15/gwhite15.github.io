import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does pressure washing cost?",
    a: "Pricing depends on the size and condition of the area. We offer free, no-obligation quotes — just give us a call at 778-996-0414 or fill out our quote form and we'll get back to you the same day.",
  },
  {
    q: "Is pressure washing safe for my home's siding?",
    a: "Absolutely. We use soft-wash techniques with adjustable pressure settings for delicate surfaces like vinyl siding, stucco, and painted wood. Our methods are safe and won't damage your property.",
  },
  {
    q: "How often should I pressure wash my home?",
    a: "We recommend having your home's exterior cleaned at least once a year. In the Pacific Northwest, moss and algae grow quickly due to moisture — annual cleaning prevents buildup and protects your surfaces.",
  },
  {
    q: "Do you use chemicals or just water?",
    a: "We use a combination of commercial-grade, eco-friendly cleaning solutions and hot/cold water depending on the surface. Our detergents are biodegradable and safe for your landscaping and pets.",
  },
  {
    q: "How long does a typical pressure washing job take?",
    a: "Most residential jobs take between 2–4 hours depending on the scope. A full house wash with driveway typically takes about half a day. We'll give you a time estimate with your quote.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Not necessarily. As long as we have access to water and the areas being cleaned, we can complete the job. We'll send you before-and-after photos when we're done!",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Maple Ridge and serve the entire Lower Mainland including Pitt Meadows, Langley, Coquitlam, Port Coquitlam, Surrey, and surrounding areas.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Everything you need to know about our pressure washing services.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl px-6 border-none"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <AccordionTrigger className="font-heading font-bold text-foreground text-left text-sm md:text-base py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;
