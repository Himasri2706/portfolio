'use client';

import { PERSONAL_INFO } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-24 md:py-32 max-w-5xl mx-auto px-6 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none -z-10"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 w-full"
      >
        <div className="space-y-6 flex-1">
          <h2 className="text-accent font-semibold tracking-wide uppercase text-sm md:text-base flex items-center gap-3">
            <span className="w-8 h-[2px] bg-accent rounded-full"></span>
            {PERSONAL_INFO.role}
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-5xl leading-[1.1]">
            I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>.<br />
            <span className="text-muted-foreground">{PERSONAL_INFO.valueProp}</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mt-6 leading-relaxed font-medium">
            Based in {PERSONAL_INFO.location}. Focused on delivering high-impact, scalable machine learning solutions from research to production.
          </p>
          
          <div className="pt-8 flex flex-wrap gap-6">
            <Link 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-accent text-accent-foreground font-medium transition-all hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <a 
              href={PERSONAL_INFO.resume} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass border border-border text-foreground font-medium transition-all hover:bg-white/5 hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Premium Profile Image Section */}
        <div className="relative w-64 h-80 md:w-72 md:h-96 shrink-0 mx-auto md:mx-0 group [perspective:1000px]">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
          
          {/* The Interactive Card */}
          <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-br from-indigo-500/50 via-transparent to-cyan-500/50 transition-all duration-700 ease-out group-hover:[transform:rotateY(-10deg)_rotateX(5deg)] shadow-2xl">
            <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-card/40 backdrop-blur-sm border border-white/5">
              
              {/* Image */}
              <Image 
                src="/profile.jpg" 
                alt={PERSONAL_INFO.name} 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                priority
              />
              
              {/* Cinematic Bottom Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none"></div>
              
              {/* Hover Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                <p className="text-sm font-medium text-foreground flex items-center justify-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Open to Opportunities
                </p>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
