import { FEATURED_PROJECT, OTHER_PROJECTS } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Code2, ExternalLink } from 'lucide-react';
import MermaidDiagram from '@/components/MermaidDiagram';

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const allProjects = [FEATURED_PROJECT, ...OTHER_PROJECTS];
  const project = allProjects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-32">
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
        </Link>
        
        <div className="glass border border-border/50 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10"></div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-10 pb-10 border-b border-border/30">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 text-muted-foreground text-sm font-medium rounded-full">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none">
            {/* Detailed Description */}
            <div className="mt-16 text-lg text-muted-foreground leading-relaxed space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-6">About the Project</h2>
              <p>{project.detailedDescription || project.description}</p>
            </div>

            {/* Architecture Diagram */}
            {project.architectureDiagram && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">System Architecture</h2>
                <MermaidDiagram chart={project.architectureDiagram} />
              </div>
            )}

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-semibold text-accent mb-2">Key Outcome</h3>
              <p className="text-foreground leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-border/30">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-accent-foreground font-medium transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 overflow-hidden flex-1"
              >
                <span className="relative z-10 flex items-center text-lg">
                  <Code2 className="mr-3 w-5 h-5" />
                  View Code on GitHub
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            )}
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl glass border border-border text-foreground font-medium transition-all hover:bg-white/5 hover:-translate-y-1 flex-1"
              >
                <span className="relative z-10 flex items-center text-lg">
                  <ExternalLink className="mr-3 w-5 h-5" />
                  View Live Project
                </span>
              </a>
            )}
            
            {!project.github && !project.link && (
              <p className="text-muted-foreground italic">Links for this project are currently private or unavailable.</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
