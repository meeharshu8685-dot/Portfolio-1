
import type { Project, SkillCategory, Inspiration, GearCategory, SocialLink } from './types';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodeWithHarryIcon, TharunNaikIcon, LanguagesIcon, AiIcon, ToolsIcon, ExploringIcon, SoftSkillsIcon, MonitorIcon, KeyboardIcon, BrainCircuitIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    title: 'MediGuardia - AI Medical Assistant',
    description: 'An AI-powered medical assistant providing reliable health guidance through an intelligent symptom checker and profile management. Built with Gemini AI to bridge the gap between users and accessible healthcare.',
    imageUrl: 'https://picsum.photos/seed/mediguardia/1000/800',
    tags: ['AI', 'HealthTech', 'Gemini AI', 'Next.js', 'Vercel', 'SaaS'],
    liveUrl: 'https://mediguardia.vercel.app/#',
    repoUrl: undefined,
  },
  {
    title: 'Blusdesk - All-in-One Business Platform',
    description: 'A comprehensive suite of tools for ticketing, knowledge base management, and customer support. Blusdesk streamlines workflows and empowers support teams to enhance customer satisfaction.',
    imageUrl: 'https://picsum.photos/seed/blusdesk/1000/800',
    tags: ['Next.js', 'TypeScript', 'SaaS', 'Customer Support', 'Prisma', 'Tailwind CSS'],
    liveUrl: 'https://blusdesk.vercel.app/',
    repoUrl: 'https://github.com/meeharshu8685-dot/blusdesk',
  },
  {
    title: 'NotesNest – Personal Notes & Resource Hub',
    description: 'A modern web platform for organizing and showcasing college study materials in a visually accessible format. It serves as a centralized hub for notes and resources with direct Google Drive integration.',
    imageUrl: 'https://myimgs.org/storage/images/11767/_.jpeg',
    tags: ['React', 'Web App', 'Education', 'Google Drive', 'Resource Hub'],
    liveUrl: 'https://notes-nest-weld.vercel.app/',
    repoUrl: 'https://github.com/meeharshu8685-dot/notes-nest',
  },
  {
    title: 'Innerdecode',
    description: 'A simple yet powerful choice-based system designed to map user problems and deliver instant, real-world solutions.',
    imageUrl: 'https://myimgs.org/storage/images/11768/Stanford Social Innovation Review - Child Mental….jpeg',
    tags: ['Web Development', 'Learning', 'Programming', 'Frontend', 'React'],
    liveUrl: 'https://innerdecode.vercel.app/',
    repoUrl: undefined,
  },
  {
    title: 'Portfolio',
    description: 'A dynamic, modern portfolio website built to showcase my projects, skills, and journey as a developer. This is the very site you are viewing now.',
    imageUrl: 'https://picsum.photos/seed/portfolio/1000/800',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://meeharshu.vercel.app/',
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

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/meeharshu8685-dot', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harsh-vishwakarma-20870b37b', icon: LinkedinIcon },
    { name: 'Instagram', url: 'https://www.instagram.com/iyk.hrshu?igsh=am1jb203ZzRnZ2Ry', icon: InstagramIcon },
];