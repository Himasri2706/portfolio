import { CERTIFICATIONS } from '@/lib/data';

export default function Certifications() {
  if (!CERTIFICATIONS.length) return null;

  return (
    <section className="pb-24 max-w-3xl mx-auto px-6">
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-foreground">Certifications</h2>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors">
              <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">{cert.title}</h3>
              <div className="flex justify-between items-center text-sm font-medium text-muted-foreground mt-4 pt-3 border-t border-border/50">
                <span className="text-accent">{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
