
import type { Project, SkillCategory, Inspiration, GearCategory } from './types';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodeWithHarryIcon, TharunNaikIcon, LanguagesIcon, AiIcon, ToolsIcon, ExploringIcon, SoftSkillsIcon, MonitorIcon, KeyboardIcon, BrainCircuitIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    title: 'Wikyn – Personal Knowledge Base',
    description: 'A sleek and modern personal wiki application to capture, organize, and retrieve knowledge effortlessly. Built for speed and simplicity, it helps you build your own digital brain.',
    imageUrl: 'https://picsum.photos/seed/wikyn/1000/800',
    tags: ['React', 'Next.js', 'Wiki', 'Knowledge Management', 'Productivity'],
    liveUrl: 'https://wikyn-8nftjmk43-harshus-projects-d6c13ae1.vercel.app/',
  },
  {
    title: 'NotesNest – Personal Notes & Resource Hub',
    description: 'A modern and interactive web-based platform designed to organize, manage, and showcase college study materials in a visually appealing and accessible way. It serves as a centralized hub where a student can store, categorize, and share subject-wise notes, PDFs, and learning resources — integrated directly with Google Drive links.',
    imageUrl: 'https://picsum.photos/seed/notes-nest/1000/800',
    tags: ['React', 'Web App', 'Education', 'Google Drive', 'Resource Hub'],
    liveUrl: 'https://notes-nest-weld.vercel.app/',
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

export const GEAR_CATEGORIES: GearCategory[] = [
    {
        icon: MonitorIcon,
        title: 'Main Setup',
        items: ['MacBook Air M1', 'Lenovo ThinkVision T32h', 'Lenovo Thinkpad C13 Yoga', 'Samsung S24', 'Oneplus 7t'],
    },
    {
        icon: KeyboardIcon,
        title: 'Peripherals',
        items: ['Keychron K2 Keyboard', 'Logitech MX Master 3S', 'Sony WH-1000XM4', 'Sony arcrux'],
    },
    {
        icon: ToolsIcon,
        title: 'Core Software',
        items: ['macOS Sonoma', 'VS Code', 'iTerm2', 'Google Chrome'],
    },
    {
        icon: BrainCircuitIcon,
        title: 'Productivity',
        items: ['Notion', 'Things 3', 'Spotify (for focus)', 'Apple Music', 'Coffee'],
    }
];

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/meeharshu8685-dot', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harsh-vishwakarma-20870b37b', icon: LinkedinIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/iyk.hrshu?igsh=am1jb203ZzRnZ2Ry', icon: InstagramIcon },
];