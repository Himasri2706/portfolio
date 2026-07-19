import { CheckCircle2 } from 'lucide-react';
import { 
  SiPython, SiJavascript, 
  SiFastapi, SiFlask, SiReact, SiTailwindcss, SiPostgresql,
  SiDocker, SiKubernetes, SiGit, SiVercel, SiRender,
  SiPandas, SiScikitlearn, SiOpencv, SiHuggingface
} from 'react-icons/si';
import { FaRobot, FaBrain, FaDatabase, FaNetworkWired, FaJava, FaCode, FaLink } from 'react-icons/fa';

export const SkillIcon = ({ skill, className = "w-5 h-5 text-muted-foreground mr-3" }: { skill: string, className?: string }) => {
  switch(skill.toLowerCase()) {
    case 'python': return <SiPython className={className} />;
    case 'java': return <FaJava className={className} />;
    case 'c': return <FaCode className={className} />;
    case 'javascript': return <SiJavascript className={className} />;
    case 'fastapi': return <SiFastapi className={className} />;
    case 'flask': return <SiFlask className={className} />;
    case 'react': return <SiReact className={className} />;
    case 'tailwind css': return <SiTailwindcss className={className} />;
    case 'postgresql': return <SiPostgresql className={className} />;
    case 'docker': return <SiDocker className={className} />;
    case 'kubernetes': return <SiKubernetes className={className} />;
    case 'git': return <SiGit className={className} />;
    case 'vercel': return <SiVercel className={className} />;
    case 'render': return <SiRender className={className} />;
    case 'pandas': return <SiPandas className={className} />;
    case 'scikit-learn': return <SiScikitlearn className={className} />;
    case 'opencv': return <SiOpencv className={className} />;
    case 'huggingface': 
    case 'huggingface spaces': return <SiHuggingface className={className} />;
    case 'langchain': return <FaLink className={className} />;
    case 'gemini api': return <FaRobot className={className} />;
    case 'qwen2.5-7b': return <FaBrain className={className} />;
    case 'sqlalchemy': return <FaDatabase className={className} />;
    case 'faiss': return <FaNetworkWired className={className} />;
    default: return <CheckCircle2 className={className} />;
  }
};
