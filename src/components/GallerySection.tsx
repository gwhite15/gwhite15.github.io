import { motion } from "framer-motion";
import baHouseWash from "@/assets/ba-house-wash.png";
import baDeckWash from "@/assets/ba-deck-wash.png";
import baPatioWash from "@/assets/ba-patio-wash.png";
import baRoofWash from "@/assets/ba-roof-wash.jpeg";
import baRoofWash2 from "@/assets/ba-roof-wash2.jpeg";
import baDrivewayWash from "@/assets/ba-driveway-wash.jpeg";
import baWindowWash from "@/assets/ba-window-wash.jpeg";

const gallery = [
  { src: baHouseWash, title: "House Washing" },
  { src: baDeckWash, title: "Deck Restoration" },
  { src: baPatioWash, title: "Patio Cleaning" },
  { src: baRoofWash, title: "Roof Cleaning" },
  { src: baRoofWash2, title: "Moss Removal" },
  { src: baDrivewayWash, title: "Driveway Cleaning" },
  { src: baWindowWash, title: "Window Cleaning" },
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
          Real results from homes across Maple Ridge and the Lower Mainland.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {gallery.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl overflow-hidden bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={`${item.title} before and after`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <p className="font-heading font-bold text-foreground text-center py-3">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
