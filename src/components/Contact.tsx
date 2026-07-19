import { PERSONAL_INFO } from '@/lib/data';
import { Mail, ArrowRight, MessageSquare, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 -z-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-accent/20 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-3xl mx-auto px-6 text-center reveal">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Initiate Collaboration
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
          Currently accepting inquiries for new opportunities. Whether you need a highly scalable ML backend or want to discuss GenAI architecture, let's schedule a consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-accent-foreground text-base font-medium transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 w-full sm:w-auto"
          >
            <Calendar className="mr-3 w-5 h-5" />
            Book a Discovery Call
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a 
            href={`https://t.me/${PERSONAL_INFO.telegram}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 rounded-xl glass border border-border text-foreground text-base font-medium transition-all hover:bg-white/5 hover:-translate-y-1 w-full sm:w-auto"
          >
            <MessageSquare className="mr-3 w-5 h-5 text-indigo-400" />
            @Hima Sri Yalamanchili
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
