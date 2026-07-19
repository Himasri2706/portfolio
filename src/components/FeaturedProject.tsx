import { FEATURED_PROJECT } from '@/lib/data';
import { ExternalLink, Code2, Stethoscope } from 'lucide-react';
import { SkillIcon } from './SkillIcon';

import Link from 'next/link';

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-foreground flex items-center gap-3">
          <span className="w-2 h-8 bg-accent rounded-full"></span>
          Featured Work
        </h2>
        
        <div className="glass border border-border rounded-2xl p-8 md:p-12 shadow-2xl shadow-black/20 hover:border-accent/30 transition-colors duration-500 group relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300">
                <Link href={`/project/${FEATURED_PROJECT.id}`} className="before:absolute before:inset-0">
                  {FEATURED_PROJECT.title}
                </Link>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {FEATURED_PROJECT.description}
              </p>
              
              <div className="bg-background/40 backdrop-blur-md p-5 rounded-xl border border-border/50 border-l-2 border-l-accent">
                <p className="text-base font-medium text-foreground leading-relaxed">
                  <span className="text-accent font-semibold mr-2 uppercase tracking-wider text-xs">Impact:</span>
                  <br className="mb-1" />
                  {FEATURED_PROJECT.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {FEATURED_PROJECT.techStack.map((tech) => (
                  <span key={tech} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors text-sm font-medium rounded-full shadow-inner">
                    <SkillIcon skill={tech} className="w-4 h-4" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-4 relative z-10">
                {FEATURED_PROJECT.link && (
                  <a href={FEATURED_PROJECT.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-accent hover:text-indigo-400 transition-colors">
                    View Live <ExternalLink className="ml-1.5 w-4 h-4" />
                  </a>
                )}
                {FEATURED_PROJECT.github && (
                  <a href={FEATURED_PROJECT.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Source Code <Code2 className="ml-1.5 w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
            
            <div className="relative rounded-2xl aspect-square md:aspect-auto md:h-full min-h-[300px] flex items-center justify-center border border-border/30 bg-gradient-to-br from-indigo-500/10 to-sky-500/5 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center p-8 bg-background/60 backdrop-blur-lg border border-white/10 rounded-full w-48 h-48 shadow-[0_0_50px_rgba(99,102,241,0.2)] group-hover:scale-105 transition-transform duration-700">
                <Stethoscope className="w-16 h-16 text-accent mb-4" />
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">AI Triage</span>
              </div>
              
              {/* Decorative background glows */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
