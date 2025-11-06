
import type { Project, SkillCategory, Inspiration } from './types';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodeWithHarryIcon, TharunNaikIcon, LanguagesIcon, AiIcon, ToolsIcon, ExploringIcon, SoftSkillsIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    title: 'NotesNest – Personal Notes & Resource Hub',
    description: 'A modern and interactive web-based platform designed to organize, manage, and showcase college study materials in a visually appealing and accessible way. It serves as a centralized hub where a student can store, categorize, and share subject-wise notes, PDFs, and learning resources — integrated directly with Google Drive links.',
    imageUrl: 'https://picsum.photos/seed/notes-nest/1000/800',
    tags: ['React', 'Web App', 'Education', 'Google Drive', 'Resource Hub'],
    liveUrl: 'https://notes-nest-weld.vercel.app/',
  },
  {
    title: 'Zenith Finance & Task Manager',
    description: 'A comprehensive dashboard to manage your tasks and expenses, view analytics.',
    imageUrl: 'https://picsum.photos/seed/zenith-finance/1000/800',
    tags: ['React', 'Dashboard', 'Finance', 'Task Management', 'Analytics'],
    liveUrl: 'https://task-and-finance-manage.vercel.app/',
  },
  {
    title: 'Portfolio V2',
    description: 'The very portfolio you are browsing, designed with a minimalist, high-impact aesthetic.',
    imageUrl: 'https://picsum.photos/seed/project4/1000/800',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '/',
    repoUrl: 'https://github.com/meeharshu8685-dot/portfolio-v2',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: LanguagesIcon,
    title: 'Languages & Programming',
    skills: ['C (Learning)', 'Python (Beginner)', 'HTML', 'CSS'],
    description: 'Building my foundation one line of code at a time.'
  },
  {
    icon: AiIcon,
    title: 'AI | ML | Data Science',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Prompt Engineering', 'Generative AI'],
    description: 'Exploring how machines think, learn, and create.'
  },
  {
    icon: ToolsIcon,
    title: 'Tools & Platforms',
    skills: ['VS Code', 'GitHub', 'Google Colab', 'Jupyter Notebook', 'ChatGPT'],
    description: 'Where ideas turn into code and experiments come alive.'
  },
  {
    icon: ExploringIcon,
    title: 'Currently Exploring',
    skills: ['C Programming', 'Python for AI/ML', 'Prompt Engineering', 'AI Model Workflows'],
    description: 'Going with the flow — learning, experimenting, and improving.'
  },
  {
    icon: SoftSkillsIcon,
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Curiosity', 'Self-Learning', 'Team Collaboration', 'Adaptability'],
    description: 'Quiet mind. Focused energy. Creative outcomes.'
  },
];

export const INSPIRATIONS: Inspiration[] = [
  {
    icon: CodeWithHarryIcon,
    name: 'CodeWithHarry',
    motto: 'Start & Learn',
  },
  {
    icon: TharunNaikIcon,
    name: 'Tharun Naik',
    motto: 'Create & Improve',
  },
];

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/meeharshu8685-dot', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harsh-vishwakarma-20870b37b', icon: LinkedinIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/iyk.hrshu?igsh=am1jb203ZzRnZ2Ry', icon: InstagramIcon },
];