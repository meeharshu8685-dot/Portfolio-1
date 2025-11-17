
import type { Project, SkillCategory, Inspiration, GearCategory } from './types';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodeWithHarryIcon, TharunNaikIcon, LanguagesIcon, AiIcon, ToolsIcon, ExploringIcon, SoftSkillsIcon, MonitorIcon, KeyboardIcon, BrainCircuitIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    title: 'Blusdesk - All-in-One Business Platform',
    description: 'A comprehensive suite of tools for ticketing, knowledge base management, and customer support. Blusdesk helps streamline workflows, improve customer satisfaction, and empower support teams.',
    imageUrl: 'https://picsum.photos/seed/blusdesk/1000/800',
    tags: ['Next.js', 'TypeScript', 'SaaS', 'Customer Support', 'Prisma', 'Tailwind CSS'],
    liveUrl: 'https://blusdesk.vercel.app/',
    repoUrl: 'https://github.com/meeharshu8685-dot/blusdesk',
  },
  {
    title: 'NotesNest – Personal Notes & Resource Hub',
    description: 'A modern and interactive web-based platform designed to organize, manage, and showcase college study materials in a visually appealing and accessible way. It serves as a centralized hub where a student can store, categorize, and share subject-wise notes, PDFs, and learning resources — integrated directly with Google Drive links.',
    imageUrl: 'https://myimgs.org/storage/images/11767/_.jpeg',
    tags: ['React', 'Web App', 'Education', 'Google Drive', 'Resource Hub'],
    liveUrl: 'https://notes-nest-weld.vercel.app/',
    repoUrl: 'https://github.com/meeharshu8685-dot/notes-nest',
  },
  {
    title: 'Innerdecode',
    description: 'A simple, powerful, choice-based system that maps your problem and gives you real solutions—instantly.',
    imageUrl: 'https://myimgs.org/storage/images/11768/Stanford Social Innovation Review - Child Mental….jpeg',
    tags: ['Web Development', 'Learning', 'Programming', 'Frontend'],
    liveUrl: 'https://innerdecode.vercel.app/',
    repoUrl: undefined,
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
        items: ['MacBook Air M1', 'Lenovo ThinkVision T32h', 'Lenovo Thinkpad C13 Yoga', 'Samsung S24', 'Samsung S22 Plus', 'Oneplus 7t'],
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
