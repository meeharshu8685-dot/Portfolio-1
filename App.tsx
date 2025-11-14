
import React, { useRef, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SocialIcons } from './components/SocialIcons';
import { PROJECTS, SKILL_CATEGORIES, SOCIAL_LINKS, INSPIRATIONS, GEAR_CATEGORIES } from './constants';
import { ArrowDownIcon, MailIcon, SunIcon, MoonIcon } from './components/Icons';
import { ShuffleText } from './components/ShuffleText';
import type { Project } from './types';
import { Cursor } from './components/Cursor';

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
        
        const unwantedRepoNames = ['task-and-finance-manage', 'habitflow-frontend', 'habitflow', 'wikyn'];

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
        const curatedProjects = PROJECTS.filter(p => p.title.includes('Blusdesk') || p.title.includes('NotesNest'));
        
        // Combine curated projects with other fetched projects, avoiding duplicates.
        const allProjects = [
          ...curatedProjects,
          ...fetchedProjects.filter(p => {
            const normalizedTitle = p.title.toLowerCase().replace(/[^a-z0-9]/g, '');
            return !normalizedTitle.includes('notesnest') &&
                   !normalizedTitle.includes('blusdesk') &&
                   !normalizedTitle.includes('portfolio');
          })
        ].filter(Boolean) as Project[];

        if (allProjects.length > 0) {
          // Explicitly filter out habitflow just in case it slipped through
          const finalProjects = allProjects.filter(p => !p.title.toLowerCase().includes('habitflow'));
          // Show the best projects
          setProjects(finalProjects.slice(0, 4));
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
      <Cursor />
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
              <ShuffleText text="HARSHU" isShuffling={isHarshuShuffling} />
            </h1>
            <p className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-300 transition-all duration-700 ease-out delay-200 ${heroAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Computer Science Student | Aspiring AI Engineer
            </p>
            <div className={`mt-8 transition-all duration-700 ease-out delay-500 ${heroAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={handleViewWorkClick}
                onMouseEnter={() => setIsButtonShuffling(true)}
                onMouseLeave={handleButtonMouseLeave}
                className="group relative inline-block text-lg font-bold uppercase tracking-widest text-white py-4 px-8 border-2 border-white transition-colors duration-300 hover:bg-white hover:text-black"
              >
                <span className="relative z-10">
                    <ShuffleText text="View My Work" isShuffling={isButtonShuffling} />
                </span>
              </button>
            </div>
          </div>
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-700 delay-1000 ${heroAnimated ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={() => scrollTo(aboutRef)} aria-label="Scroll to about section">
              <ArrowDownIcon className="w-8 h-8 animate-bounce" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <Section ref={aboutRef} id="about" title="The Blueprint">
            <div className={`max-w-4xl mx-auto text-center text-lg md:text-xl transition-opacity duration-700 ease-out ${heroAnimated ? 'opacity-100' : 'opacity-0'}`}>
                <p className="mb-4">
                    I'm a computer science student with a deep curiosity for artificial intelligence and machine learning. My goal is to build intelligent systems that solve real-world problems and push the boundaries of technology.
                </p>
                <p>
                    This space is a showcase of my journey—the projects I've built, the skills I'm developing, and the ideas that keep me up at night. I believe in learning by doing, and every line of code is a step forward.
                </p>
            </div>
        </Section>
        
        {/* Skills Section */}
        <Section ref={skillsRef} id="skills" title="Toolkit">
          <div className={`skills-section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ${skillsVisible ? 'section-is-visible' : ''}`}>
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="skill-card bg-white dark:bg-neutral-900 p-8 text-center border border-neutral-200 dark:border-neutral-800 transition-all duration-300 ease-in-out hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-black/20">
                <category.icon className="w-16 h-16 mx-auto mb-6 text-black dark:text-white" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{category.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 mb-4 text-sm">{category.description}</p>
                <ul className="space-y-1">
                  {category.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Philosophy Section */}
        <Section ref={philosophyRef} id="philosophy" title="Inspiration Sparks">
          <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${philosophyVisible ? 'opacity-100 section-is-visible' : 'opacity-0'}`}>
            <p className="text-center text-lg md:text-xl mb-12">
              Inspired by creators who simplify complexity and build with purpose.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {INSPIRATIONS.map((inspiration) => (
                <div key={inspiration.name} className="bg-white dark:bg-neutral-900 p-8 border border-neutral-200 dark:border-neutral-800">
                  <inspiration.icon className="w-12 h-12 mx-auto mb-4 text-black dark:text-white" />
                  <h3 className="text-2xl font-bold">{inspiration.name}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg">"{inspiration.motto}"</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        
        {/* Projects Section */}
        <Section ref={projectsRef} id="projects" title="Featured Work">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-1000 ${projectsVisible ? 'opacity-100' : 'opacity-0'}`}>
            {projects.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* Gear Section */}
        <Section 
            ref={gearRef} 
            id="gear" 
            title="My Gear"
            isCollapsible={true}
            isOpen={isGearSectionOpen}
            onTitleClick={() => setIsGearSectionOpen(!isGearSectionOpen)}
        >
          <div className={`gear-section-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto ${gearVisible ? 'section-is-visible' : ''}`}>
            {GEAR_CATEGORIES.map((category) => (
              <div key={category.title} className="gear-card bg-white dark:bg-neutral-900 p-8 text-center border border-neutral-200 dark:border-neutral-800">
                <category.icon className="w-12 h-12 mx-auto mb-6 text-black dark:text-white" />
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{category.title}</h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  {category.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>
        
        {/* Contact Section */}
        <Section ref={contactRef} id="contact" title="Get In Touch">
          <div className={`text-center max-w-3xl mx-auto transition-opacity duration-1000 ${contactVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl mb-8">
              Have a project, an idea, or just want to talk about tech? I'm always open to connecting.
            </p>
            <div className="flex justify-center items-center gap-8">
              <button
                onClick={handleEmailClick}
                className="inline-flex items-center text-lg font-bold uppercase tracking-widest text-white py-4 px-8 bg-black dark:bg-white dark:text-black transition-transform duration-300 hover:scale-105"
              >
                <MailIcon className="mr-3"/>
                Send an Email
              </button>
            </div>
            <div className="mt-12">
                <SocialIcons links={SOCIAL_LINKS} iconClassName="w-8 h-8"/>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-200 dark:bg-black py-8">
        