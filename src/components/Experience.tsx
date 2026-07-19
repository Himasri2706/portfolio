import { EXPERIENCES } from '@/lib/data';

export default function Experience() {
  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-foreground">Experience & Training</h2>
        
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0 reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              {/* Timeline line on mobile */}
              <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-border last:bottom-0"></div>
              {/* Timeline dot on mobile */}
              <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent"></div>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-medium text-muted-foreground mt-1 md:mt-0">{exp.duration}</span>
              </div>
              
              <div className="text-accent text-lg font-medium mb-3">{exp.company}</div>
              
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
