import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import baDriveway from "@/assets/ba-driveway.jpg";
import baHouse from "@/assets/ba-house.jpg";
import baRoof from "@/assets/ba-roof.jpg";
import baDeck from "@/assets/ba-deck.jpg";

const gallery = [
  { before: baDriveway, after: baDriveway, title: "Driveway Cleaning" },
  { before: baHouse, after: baHouse, title: "House Washing" },
  { before: baRoof, after: baRoof, title: "Roof Cleaning" },
  { before: baDeck, after: baDeck, title: "Deck Restoration" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Before & After</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
          See the Transformation
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Drag the slider to see real results from homes across Maple Ridge.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {gallery.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <BeforeAfterSlider
              beforeSrc={item.before}
              afterSrc={item.after}
              beforeAlt={`${item.title} before`}
              afterAlt={`${item.title} after`}
              className="aspect-[4/3]"
            />
            <p className="font-heading font-bold text-foreground text-center mt-3">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
