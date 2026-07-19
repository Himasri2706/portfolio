import { Project, Experience, Certification, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Hima Sri Yalamanchili',
  role: 'AI/ML Engineer',
  valueProp: 'Building production-grade GenAI and ML backend systems.',
  location: 'Vijayawada, India / Remote',
  email: 'honeyalamanchili2706@gmail.com', 
  linkedin: 'https://linkedin.com/in/himasri-yalamanchili', 
  github: 'https://github.com/Himasri2706', 
  telegram: 'Himasriyalamanchili',
  resume: '/resume.pdf',
};

export const IMPACT_METRICS = [
  { label: 'CGPA', value: '8.3' },
  { label: 'LeetCode Solved', value: '286+' },
  { label: 'Hackathon Ranking', value: 'Top Tier' },
];

export const FEATURED_PROJECT: Project = {
  id: 'healthcare-chatbot',
  title: 'Outpatient Symptom Triage Assistant',
  description: 'Architected a bilingual Telugu/English triage chatbot for rural PHCs with P1/P2/P3 urgency classification and full source-traceability documentation.',
  impact: 'Prototyped the academic foundation that was later extended into a scalable production system during my internship at Calibo.',
  techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Kubernetes'],
  detailedDescription: 'This project began as an academic foundation to solve triage bottlenecks in rural Primary Health Centers. It features a bilingual (Telugu/English) chatbot that evaluates patient symptoms and classifies urgency into P1/P2/P3 categories. The core engine is built with Python and FastAPI, ensuring high performance. All decisions are backed by full source-traceability documentation. Due to its success, the prototype was later extended into a full production-scale backend service during my internship at Calibo.',
  github: 'https://github.com/Himasri2706/outpatient-triage',
  featured: true,
  architectureDiagram: `graph TD
  A[User Client] -->|Telugu/English Symptoms| B(FastAPI Backend)
  B --> C{Deterministic Rule Engine}
  C -->|Emergency P1| D[Critical Escalation Alert]
  C -->|Standard Case| E[FAISS Vector Search]
  E <--> F[(PostgreSQL Database)]
  E -->|Context/Similar Cases| B
  B -->|P2/P3 Classification| A
  
  classDef primary fill:#4f46e5,stroke:#312e81,color:#fff;
  classDef secondary fill:#0ea5e9,stroke:#0369a1,color:#fff;
  classDef db fill:#0f172a,stroke:#334155,color:#fff;
  class B primary;
  class E secondary;
  class F db;`,
};

export const OTHER_PROJECTS: Project[] = [
  {
    id: 'hybrid-ranking',
    title: 'Hybrid AI Candidate Ranking System',
    description: 'Built for India RUNS Hackathon 2026. A 3-layer hybrid scoring engine combining semantic embeddings and rule-based scoring.',
    impact: 'Successfully validated candidate rankings against 4 complex adversarial test cases.',
    techStack: ['Python', 'FAISS', 'Sentence-Transformers'],
    detailedDescription: 'Developed during the India RUNS Hackathon 2026, this system aimed to revolutionize how candidates are ranked by combining multiple evaluation layers. The core is a 3-layer hybrid scoring engine that utilizes semantic embeddings (FAISS + Sentence-Transformers) for deep text understanding, alongside a deterministic rule-based scoring module. A behavioral availability multiplier was also integrated to fine-tune results. The system proved robust, successfully validating against 4 distinct adversarial test cases.',
    github: 'https://github.com/Himasri2706/india-runs-ranker',
    architectureDiagram: `graph LR
  A[Candidate Resume] --> B(Sentence Transformers)
  B --> C[(FAISS Semantic DB)]
  A --> D{Deterministic Rules}
  C --> E[Hybrid Score Aggregator]
  D --> E
  E --> F[Availability Multiplier]
  F --> G[Final Ranking]
  
  classDef default fill:#1e293b,stroke:#334155,color:#fff;
  classDef accent fill:#6366f1,stroke:#4338ca,color:#fff;
  class B accent;
  class C accent;`,
  },
  {
    id: 'ai-study-dashboard',
    title: 'AI Study Dashboard (RAG Platform)',
    description: 'A RAG pipeline that restricts LLM answers strictly to uploaded curriculum PDFs to eliminate hallucinations.',
    impact: 'Achieved sub-2-second query response times with zero-cost local vector search.',
    techStack: ['Python', 'Flask', 'LangChain', 'React', 'Gemini'],
    detailedDescription: 'Built a robust RAG (Retrieval-Augmented Generation) pipeline specifically designed for educational environments. The system strictly restricts the LLMs context to uploaded curriculum PDFs, entirely eliminating hallucinations on out-of-scope queries. By implementing local vector search with FAISS and HuggingFace embeddings, the platform achieves sub-2-second query responses with zero recurring database costs. The full-stack solution is presented through a React frontend secured by JWT role-based access.',
    github: 'https://github.com/Himasri2706/AI-STUDY-DASHBOARD',
    architectureDiagram: `graph LR
  A[Student Frontend React] -->|Query + JWT| B(Flask API)
  B --> C[HuggingFace Embeddings]
  C --> D[(FAISS Local Vector DB)]
  D -->|Top-K Curriculum Matches| E[Gemini LLM]
  E -->|Strict Context Answer| A
  
  classDef default fill:#1e293b,stroke:#334155,color:#fff;
  classDef accent fill:#6366f1,stroke:#4338ca,color:#fff;
  class E accent;
  class B accent;`,
  },
  {
    id: 'job-portal',
    title: 'Next-Gen Job Portal',
    description: 'Full-Stack SaaS application with role-based dashboards and real-time applicant tracking.',
    impact: 'Production-deployed a secure, scalable portal with Flask-Login and Werkzeug hashing.',
    techStack: ['Flask', 'SQLAlchemy', 'Render.com'],
    detailedDescription: 'A comprehensive full-stack SaaS application designed to streamline the hiring process. The platform features 3 distinct role-based dashboards tailored for applicants, recruiters, and administrators. It includes real-time applicant tracking to monitor pipeline velocity. The backend is powered by Flask and SQLAlchemy, with security prioritized via Flask-Login and Werkzeug hashing for credential management. The entire system is production-deployed and scalable.',
    github: 'https://github.com/Himasri2706/job-portal',
    architectureDiagram: `graph TD
  A[Users] --> B{Role-based Auth}
  B -->|Applicant| C[Job Board & Tracking]
  B -->|Recruiter| D[Applicant Pipeline]
  B -->|Admin| E[System Dashboard]
  C & D & E --> F(Flask Backend)
  F <--> G[(SQLAlchemy DB)]
  
  classDef default fill:#1e293b,stroke:#334155,color:#fff;
  classDef accent fill:#0ea5e9,stroke:#0369a1,color:#fff;
  class F accent;`,
  },
  {
    id: 'presentation-llm',
    title: 'Presentation LLM',
    description: 'Qwen2.5-7B-powered .pptx generator with 8 auto-selected color themes.',
    impact: 'Generates fully formatted presentations instantly using LLMs.',
    techStack: ['Python', 'Streamlit', 'HuggingFace', 'Qwen2.5-7B'],
    detailedDescription: 'A generative AI tool that creates complete, formatted PowerPoint presentations from simple text prompts. It is powered by the Qwen2.5-7B model hosted via HuggingFace. The system intelligently auto-selects from 8 different color themes based on the context of the presentation. The entire frontend is built with Streamlit for a fast, intuitive user experience.',
    github: 'https://github.com/Himasri2706/Presentation_llm',
    architectureDiagram: `graph LR
  A[Text Prompt] --> B(Streamlit UI)
  B --> C[Qwen2.5-7B LLM]
  C -->|Content Generation| D{Theme Engine}
  D --> E[Auto-Format .pptx]
  E --> F[Download Ready]
  
  classDef default fill:#1e293b,stroke:#334155,color:#fff;
  classDef accent fill:#4f46e5,stroke:#312e81,color:#fff;
  class C accent;`,
  },
  {
    id: 'air-canvas',
    title: 'Air Canvas',
    description: 'Real-time hand-gesture drawing app using OpenCV contour detection.',
    impact: 'Maintained smooth 25–30 FPS real-time rendering.',
    techStack: ['Python', 'OpenCV', 'NumPy'],
    detailedDescription: 'An interactive computer vision application that allows users to draw on their screen simply by moving their hands in the air. Built entirely in Python using OpenCV, it uses advanced contour detection and color tracking to follow finger movements. The application is highly optimized, maintaining a smooth 25-30 frames per second during real-time rendering.',
    github: 'https://github.com/Himasri2706/Air-Canvas-AI',
    architectureDiagram: `graph TD
  A[Webcam Feed] --> B[OpenCV Image Processing]
  B --> C{HSV Color Tracking}
  C --> D[Contour Detection]
  D --> E[Draw Coordinates]
  E --> F[Real-time Render 30FPS]
  
  classDef default fill:#1e293b,stroke:#334155,color:#fff;
  classDef accent fill:#10b981,stroke:#047857,color:#fff;
  class B accent;
  class C accent;`,
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    blurb: 'My core stack for building intelligent systems, semantic search pipelines, and training scalable models.',
    skills: ['LangChain', 'FAISS', 'HuggingFace', 'Gemini API', 'Qwen2.5-7B', 'OpenCV', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'Languages',
    blurb: 'My favorite programming languages for systems architecture, ML engineering, and data analysis.',
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Backend & Web',
    blurb: 'My preferred frameworks for designing high-performance REST APIs and building modern web applications.',
    skills: ['FastAPI', 'Flask', 'React', 'Tailwind CSS', 'SQLAlchemy', 'PostgreSQL'],
  },
  {
    title: 'Deployment & Infra',
    blurb: 'My go-to tools for container orchestration, version control, and continuous deployment.',
    skills: ['Docker', 'Kubernetes', 'Git', 'Vercel', 'Render', 'HuggingFace Spaces'],
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'AI Engineering Intern',
    company: 'Calibo',
    duration: 'Apr 2026 – Present',
    description: 'Designed and built an AI-integrated backend service combining ML classification, FAISS vector search, and rule-based escalation into a scalable production system. Engineered a high-throughput similarity search service for low-latency case retrieval.',
  },
  {
    id: 'exp-2',
    role: 'Data Analytics Intern',
    company: 'Infinity Startup',
    duration: 'Aug 2025 – Nov 2025',
    description: 'Analyzed campaign data to surface engagement trends, raising average post reach by ~18%. Automated weekly KPI dashboards, cutting reporting time from 3 hours to under 30 minutes.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Retrieval-Augmented Generation (RAG)',
    issuer: 'IBM',
    date: '2026',
  },
  {
    id: 'cert-2',
    title: 'Gemini AI & Cloud Cybersecurity',
    issuer: 'Google',
    date: '2026',
  },
  {
    id: 'cert-3',
    title: 'Blockchain & Human Interaction',
    issuer: 'NPTEL',
    date: '2026',
  },
  {
    id: 'cert-4',
    title: 'Cloud Computing',
    issuer: 'Microsoft Launchpad',
    date: '2026',
  }
];
