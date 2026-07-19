import { PERSONAL_INFO } from '@/lib/data';
import { Code2, Briefcase, Mail, Send } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-muted-foreground font-medium">
          © {year} <span className="text-foreground">{PERSONAL_INFO.name}</span>. Built with Next.js & Tailwind.
        </p>
        
        <div className="flex gap-6">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-all hover:scale-110" aria-label="LinkedIn">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-all hover:scale-110" aria-label="GitHub">
            <Code2 className="w-5 h-5" />
          </a>
          <a href={`https://t.me/${PERSONAL_INFO.telegram}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-all hover:scale-110" aria-label="Telegram">
            <Send className="w-5 h-5" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-muted-foreground hover:text-accent transition-all hover:scale-110" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
