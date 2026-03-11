import { Droplets, Home, Umbrella, Leaf, Sparkles, Eye } from "lucide-react";

const services = [
  { icon: Droplets, title: "Pressure Washing", desc: "Driveways, walkways, patios, and decks restored to like-new condition." },
  { icon: Home, title: "House Washing", desc: "Gentle soft-wash that removes years of dirt, mildew, and stains." },
  { icon: Umbrella, title: "Roof Washing", desc: "Safe, low-pressure cleaning that extends the life of your roof." },
  { icon: Leaf, title: "Moss Removal", desc: "Eliminate moss and algae from roofs, walkways, and walls." },
  { icon: Eye, title: "Window Cleaning", desc: "Crystal-clear windows inside and out for maximum curb appeal." },
  { icon: Sparkles, title: "Exterior Cleaning", desc: "Complete exterior cleaning packages for total property transformation." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Professional Exterior Cleaning Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From driveways to rooftops, we have the expertise and equipment to make every surface shine.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--shadow-card)")}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
