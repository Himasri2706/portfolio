import { IMPACT_METRICS } from '@/lib/data';

export default function ImpactStrip() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {IMPACT_METRICS.map((metric, index) => (
            <div key={index} className="flex flex-col reveal" style={{ transitionDelay: `${index * 100}ms`}}>
              <span className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {metric.value}
              </span>
              <span className="text-muted-foreground font-medium text-sm md:text-base uppercase tracking-wider">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
