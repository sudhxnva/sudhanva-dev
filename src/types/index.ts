export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  stack: string[];
  highlight?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  coursework: string[];
  location: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}
