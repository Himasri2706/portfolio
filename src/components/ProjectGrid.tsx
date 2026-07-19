'use client';

import { OTHER_PROJECTS } from '@/lib/data';
import { ExternalLink, Code2, Terminal } from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { SkillIcon } from './SkillIcon';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProjectGrid() {
  return (
    <section className="pb-24 max-w-5xl mx-auto px-6 overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold tracking-tight mb-12 text-foreground flex items-center gap-3">
          <Terminal className="w-8 h-8 text-accent" />
          Other Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OTHER_PROJECTS.map((project) => (
            <motion.div 
              variants={item}
              key={project.id} 
              className="group glass border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                <Link href={`/project/${project.id}`} className="before:absolute before:inset-0">
                  {project.title}
                </Link>
              </h3>
              <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6 bg-background/50 rounded-lg p-4 border border-border/50">
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  <span className="text-accent mr-2 font-semibold">Outcome:</span>
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span key={tech} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/5 text-muted-foreground hover:text-foreground hover:border-accent/50 transition-colors text-sm font-medium rounded-md">
                    <SkillIcon skill={tech} className="w-3.5 h-3.5" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-6 pt-5 border-t border-border/50 relative z-10">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-accent hover:text-indigo-400 transition-colors relative z-20">
                    Live <ExternalLink className="ml-1.5 w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative z-20">
                    Code <Code2 className="ml-1.5 w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
