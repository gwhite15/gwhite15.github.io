import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Star, ThumbsUp, Clock } from "lucide-react";

const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const stats = [
  { icon: GraduationCap, value: 0, suffix: "", label: "Student Led" },
  { icon: Star, value: 50, suffix: "+", label: "5-Star Reviews" },
  { icon: ThumbsUp, value: 100, suffix: "%", label: "Satisfaction Rate" },
  { icon: Clock, value: 24, suffix: "hr", label: "Response Time" },
];

const SocialProofSection = () => {
  const counters = stats.map((s) => useCountUp(s.value));

  return (
    <section className="py-16" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
              ref={counters[i].ref}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 bg-primary-foreground/10 backdrop-blur-sm">
                <s.icon className="h-7 w-7 text-accent" />
              </div>
              <p className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground">
                {s.value === 0 ? s.label : `${counters[i].count}${s.suffix}`}
              </p>
              </p>
              <p className="text-primary-foreground/70 text-sm font-medium mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
