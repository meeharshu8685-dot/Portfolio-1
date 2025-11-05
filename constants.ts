
import type { Project, SkillCategory, Inspiration } from './types';
import { GithubIcon, LinkedinIcon, InstagramIcon, CodeWithHarryIcon, TharunNaikIcon, LanguagesIcon, AiIcon, ToolsIcon, ExploringIcon, SoftSkillsIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    title: 'Project Zenith',
    description: 'An interactive data visualization platform for tracking market trends, built with React and D3.js.',
    imageUrl: 'https://picsum.photos/seed/project1/1000/800',
    tags: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    repoUrl: 'https://github.com/meeharshu8685-dot/project-zenith',
  },
  {
    title: 'CodeSphere',
    description: 'A collaborative code editor with real-time editing features, similar to Google Docs for developers.',
    imageUrl: 'https://picsum.photos/seed/project2/1000/800',
    tags: ['Next.js', 'WebSockets', 'Node.js', 'Prisma'],
    repoUrl: 'https://github.com/meeharshu8685-dot/codesphere',
  },
  {
    title: 'E-Commerce Fusion',
    description: 'A modern, performant e-commerce storefront with a headless CMS integration for dynamic content.',
    imageUrl: 'https://picsum.photos/seed/project3/1000/800',
    tags: ['React', 'GraphQL', 'Stripe', 'Headless CMS'],
    repoUrl: 'https://github.com/meeharshu8685-dot/ecommerce-fusion',
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