import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '@/lib/data';
import { SkillIcon } from './SkillIcon';

export default function Skills() {
  return (
    <section className="py-24 max-w-5xl mx-auto px-6 relative">
      <div className="absolute inset-0 bg-accent/5 skew-y-3 -z-10"></div>
      
      <div className="reveal">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-foreground flex items-center justify-center gap-3">
          <Cpu className="w-8 h-8 text-accent" />
          Technical Arsenal
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={category.title} 
              className="glass border border-border/50 rounded-xl p-6 hover:border-accent/30 transition-colors reveal" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 uppercase tracking-wider mb-2 pb-2 border-b border-border/50">
                {category.title}
              </h3>
              {category.blurb && (
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {category.blurb}
                </p>
              )}
              <ul className="space-y-4 mt-auto">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-base flex items-center font-medium group">
                    <SkillIcon skill={skill} className="w-5 h-5 group-hover:text-accent transition-colors text-muted-foreground mr-3" />
                    <span className="group-hover:text-foreground transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
