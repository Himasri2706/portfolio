import Hero from '@/components/Hero';
import ImpactStrip from '@/components/ImpactStrip';
import FeaturedProject from '@/components/FeaturedProject';
import ProjectGrid from '@/components/ProjectGrid';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollReveal />
      <Hero />
      <ImpactStrip />
      <FeaturedProject />
      <ProjectGrid />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
