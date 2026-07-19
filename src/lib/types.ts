export interface Project {
  id: string;
  title: string;
  description: string;
  impact: string;
  techStack: string[];
  detailedDescription?: string;
  link?: string;
  github?: string;
  featured?: boolean;
  architectureDiagram?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string; // Outcome-focused description
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  blurb?: string;
}
