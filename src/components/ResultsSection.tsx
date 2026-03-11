import beforeAfterImg from "@/assets/before-after.jpg";

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Results</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            See the Difference We Make
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real transformations from homes across Maple Ridge and the Lower Mainland.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-card-hover)" }}>
          <img src={beforeAfterImg} alt="Before and after pressure washing comparison showing dramatic improvement" className="w-full h-auto" />
          <div className="flex">
            <div className="flex-1 bg-muted py-3 text-center font-heading text-sm font-bold text-muted-foreground uppercase tracking-wider">Before</div>
            <div className="flex-1 bg-primary py-3 text-center font-heading text-sm font-bold text-primary-foreground uppercase tracking-wider">After</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { num: "50+", label: "5-Star Reviews" },
            { num: "500+", label: "Homes Cleaned" },
            { num: "Same Day", label: "Response Time" },
            { num: "100%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-extrabold text-primary">{s.num}</div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
