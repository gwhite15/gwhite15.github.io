import { Droplets, Home, Umbrella, Leaf, Eye } from "lucide-react";
import { motion } from "framer-motion";
import baDriveway from "@/assets/ba-driveway.jpg";
import baHouse from "@/assets/ba-house.jpg";
import baRoof from "@/assets/ba-roof.jpg";
import baDeck from "@/assets/ba-deck.jpg";
import beforeAfter from "@/assets/before-after.jpg";

const services = [
  { icon: Droplets, title: "Pressure Washing", desc: "Driveways, walkways, patios, and decks restored to like-new condition.", img: baDriveway },
  { icon: Home, title: "House Washing", desc: "Gentle soft-wash that removes years of dirt, mildew, and stains.", img: baHouse },
  { icon: Umbrella, title: "Roof Washing", desc: "Safe, low-pressure cleaning that extends the life of your roof.", img: baRoof },
  { icon: Leaf, title: "Moss Removal", desc: "Eliminate moss and algae from roofs, walkways, and walls.", img: baDeck },
  { icon: Eye, title: "Window Cleaning", desc: "Crystal-clear windows inside and out for maximum curb appeal.", img: beforeAfter },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Services</p>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
          Professional Exterior Cleaning Solutions
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From driveways to rooftops, we have the expertise and equipment to make every surface shine.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-blue)" }}>
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
