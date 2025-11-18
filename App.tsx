
import React, { useRef, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SocialIcons } from './components/SocialIcons';
import { PROJECTS, SKILL_CATEGORIES, SOCIAL_LINKS, INSPIRATIONS, GEAR_CATEGORIES } from './constants';
import { ArrowDownIcon, MailIcon, SunIcon, MoonIcon } from './components/Icons';
import { ShuffleText } from './components/ShuffleText';
import type { Project } from './types';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const gearRef = useRef<HTMLDivElement>(null);

  const [skillsVisible, setSkillsVisible] = useState(false);
  const [philosophyVisible, setPhilosophyVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [gearVisible, setGearVisible] = useState(false);
  
  const [heroAnimated, setHeroAnimated] = useState(false);
  const [isGearSectionOpen, setIsGearSectionOpen] = useState(false);
  const [isSparksSectionOpen, setIsSparksSectionOpen] = useState(false);
  const [isButtonShuffling, setIsButtonShuffling] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isHarshuShuffling, setIsHarshuShuffling] = useState(false);
  const [theme, setTheme] = useState('dark');

  // State for projects, initialized with static data as a fallback
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    setHeroAnimated(true);
    
    // Fetch dynamic project data from GitHub
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/meeharshu8685-dot/repos?sort=pushed&direction=desc');
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        const data = await response.json();
        
        const unwantedRepoNames = ['task-and-finance-manage', 'habitflow-frontend', 'habitflow', 'wikyn', 'inner-code', 'portfolio-v2', 'portfolio']; // Added portfolio-v2 to unwanted

        const fetchedProjects: Project[] = data
          .filter((repo: any) => 
            !repo.fork && 
            repo.description && 
            repo.name !== 'meeharshu8685-dot' &&
            !unwantedRepoNames.includes(repo.name.toLowerCase())
          )
          .map((repo: any) => ({
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
            description: repo.description,
            imageUrl: `https://picsum.photos/seed/${repo.name}/1000/800`,
            tags: repo.topics || [],
            liveUrl: repo.homepage || undefined,
            repoUrl: repo.html_url,
          }));

        // Keep the curated projects from static data, as they are key projects.
        const curatedProjects = PROJECTS.filter(p => p.title.includes('Blusdesk') || p.title.includes('NotesNest') || p.title.includes('Innerdecode'));
        
        // Combine curated projects with other fetched projects, avoiding duplicates.
        const allProjects = [
          ...curatedProjects,
          ...fetchedProjects.filter(p => {
            const normalizedTitle = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            return !normalizedTitle.includes('notesnest') &&
                   !normalizedTitle.includes('blusdesk') &&
                   !normalizedTitle.includes('innerdecode');
          })
        ].filter(Boolean) as Project[];

        if (allProjects.length > 0) {
          // Explicitly filter out habitflow just in case it slipped through
          const finalProjects = allProjects.filter(p => !p.title.toLowerCase().includes('habitflow'));
          // Show the best projects
          setProjects(finalProjects.slice(0, 3)); // Displaying top 3 now, since Portfolio V2 is removed
        }

      } catch (error) {
        console.error('Failed to fetch projects from GitHub. Falling back to static data.', error);
        // On failure, the component will use the initial state (PROJECTS from constants.ts)
      }
    };

    fetchProjects();

  }, []);

  useEffect(() => {
    const shuffleDuration = 5000; // 5 seconds of shuffling
    const pauseDuration = 10000; // 10 seconds of pause
    const cycleDuration = shuffleDuration + pauseDuration;

    let timeoutId: number;
    let intervalId: number;

    const shuffleCycle = () => {
      setIsHarshuShuffling(true);
      timeoutId = window.setTimeout(() => {
        setIsHarshuShuffling(false);
      }, shuffleDuration);
    };
    
    // Delay the start to sync better with hero animation
    const startDelay = setTimeout(() => {
        shuffleCycle();
        intervalId = window.setInterval(shuffleCycle, cycleDuration);
    }, 700);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === skillsRef.current) setSkillsVisible(true);
            if (entry.target === philosophyRef.current) setPhilosophyVisible(true);
            if (entry.target === projectsRef.current) setProjectsVisible(true);
            if (entry.target === contactRef.current) setContactVisible(true);
            if (entry.target === gearRef.current) setGearVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const refs = [skillsRef, philosophyRef, projectsRef, contactRef, gearRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:meeharshu8686@gmail.com?subject=Hello from your portfolio!`;
  };

  const handleViewWorkClick = () => {
    scrollTo(projectsRef);
    setIsButtonClicked(true);
    setIsButtonShuffling(false);
  };

  const handleButtonMouseLeave = () => {
    if (!isButtonClicked) {
      setIsButtonShuffling(true);
    }
  };


  return (
    <div className="bg-neutral-100 dark:bg-[#111111] text-neutral-800 dark:text-neutral-200 transition-colors duration-300">
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      <main>
        {/* Hero Section */}
        <section className="h-screen w-full relative flex flex-col items-center justify-center text-center text-white overflow-hidden">
          <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out z-0 ${heroAnimated ? 'opacity-60' : 'opacity-80'}`}></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`hero-video transition-opacity duration-1000 ease-in-out ${heroAnimated ? 'opacity-100' : 'opacity-0'}`}
            poster="https://picsum.photos/seed/hero/1920/1080"
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 px-4">
            <h1 className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none transition-all duration-700 ease-out ${heroAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ShuffleText text="Harshu" isShuffling={isHarshuShuffling} shuffleInterval={200} shuffleProbability={0.03} />
            </h1>
            <p className={`mt-4 text-xl md:text-3xl font-semibold text-neutral-300 transition-all duration-700 ease-out delay-200 ${heroAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Innovate. Create. Develop.
            </p>
            <button
              onClick={handleViewWorkClick}
              onMouseEnter={() => setIsButtonShuffling(false)}
              onMouseLeave={handleButtonMouseLeave}
              className={`mt-8 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-300 flex items-center justify-center mx-auto transition-all duration-700 ease-out delay-400 ${heroAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <ShuffleText text="View Work" isShuffling={isButtonShuffling} /> <ArrowDownIcon className="ml-2" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <Section ref={aboutRef} id="about" title="About Me">
          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-neutral-600 dark:text-neutral-300 space-y-4 text-center">
              <p>
                Hey there 👋 I’m Harshu — a B.Sc. Computer Science student at BITS Pilani who’s deeply curious about how tech shapes the world.
              </p>
              <p>
                I’m into Artificial Intelligence, Machine Learning, Data Science, and Prompt Engineering — the stuff that makes machines a little smarter (and life a little cooler). I'm also a no-code developer, building solutions visually. Right now, I’m getting started with C language, but there’s a long way to go — and I’m all in for the ride.
              </p>
               <p>
                I’m kind of an introvert — I love my silence, my space, and the calm that comes with being alone. Still, I’ve got a soft spot for nature, traveling, and my friends, who mean more to me than anything else.
              </p>
              <p>
                I like keeping things simple: learn more, stay curious, and go with the flow 🌊
              </p>
            </div>
          </div>
        </Section>
        
        {/* Skills Section */}
        <Section ref={skillsRef} title="My Toolkit">
          <div className={`max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 skills-section-container ${skillsVisible ? 'section-is-visible' : ''}`}>
            {SKILL_CATEGORIES.map((category, index) => (
              <div 
                key={category.title} 
                className={`skill-card bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 rounded-lg flex flex-col h-full hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-700 ease-out ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center text-neutral-900 dark:text-white">
                  <category.icon className="w-6 h-6 mr-3 text-neutral-500 dark:text-neutral-400" />
                  {category.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm leading-relaxed">
                  {category.skills.join(' · ')}
                </p>
                <p className="text-neutral-500 text-sm mt-auto italic">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Philosophy Section */}
        <Section ref={philosophyRef} title="My Philosophy">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">
                {[{
                    title: "Simplicity First",
                    description: "Aiming for clean, elegant solutions. Because the most powerful ideas are often the simplest."
                }, {
                    title: "Curiosity Driven",
                    description: "Embracing the \"why\" and \"what if.\" Every project is a new world to explore