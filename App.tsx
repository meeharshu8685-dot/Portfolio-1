
import React, { useRef, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { SocialIcons } from './components/SocialIcons';
import { PROJECTS, SKILL_CATEGORIES, SOCIAL_LINKS, INSPIRATIONS } from './constants';
import { ArrowDownIcon, MailIcon } from './components/Icons';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

    const currentSkillsRef = skillsRef.current;
    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }

    return () => {
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
      }
    };
  }, []);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:meeharshu8686@gmail.com?subject=Hello from your portfolio!`;
  };

  return (
    <div className="bg-[#111111] text-neutral-200">
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onProjectsClick={() => scrollTo(projectsRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      <main>
        {/* Hero Section */}
        <section className="h-screen w-full relative flex flex-col items-center justify-center text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
            poster="https://picsum.photos/seed/hero/1920/1080"
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 px-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none">
              Harshu
            </h1>
            <p className="mt-4 text-xl md:text-3xl font-semibold text-neutral-300">
              Innovate. Create. Develop.
            </p>
            <button
              onClick={() => scrollTo(projectsRef)}
              className="mt-8 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-300 transition-colors duration-300 flex items-center justify-center mx-auto"
            >
              View Work <ArrowDownIcon className="ml-2" />
            </button>
          </div>
        </section>

        {/* About Section */}
        <Section ref={aboutRef} id="about" title="About Me">
          <div className="max-w-4xl mx-auto">
            <div className="text-lg text-neutral-300 space-y-4 text-center">
              <p>
                Hey there 👋 I’m Harshu — a B.Sc. Computer Science student at BITS Pilani who’s deeply curious about how tech shapes the world.
              </p>
              <p>
                I’m into Artificial Intelligence, Machine Learning, Data Science, and Prompt Engineering — the stuff that makes machines a little smarter (and life a little cooler). Right now, I’m just getting started with C language, but there’s a long way to go — and I’m all in for the ride.
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
        <Section title="My Toolkit">
          <div ref={skillsRef} className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, index) => (
              <div 
                key={category.title} 
                className={`bg-neutral-900 border border-neutral-800 p-6 rounded-lg flex flex-col h-full hover:border-neutral-700 transition-all duration-500 ease-out ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                  <category.icon className="w-6 h-6 mr-3 text-neutral-400" />
                  {category.title}
                </h3>
                <p className="text-neutral-300 mb-4 text-sm leading-relaxed">
                  {category.skills.join(' · ')}
                </p>
                <p className="text-neutral-500 text-sm mt-auto italic">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <div className="border-t border-neutral-800 pt-8">
                <p className="text-lg md:text-xl text-neutral-300">
                <span className="text-2xl mr-2">💡</span>
                <span className="font-bold">Personal Motto:</span> "Keep it simple. Learn deeply. Go with the flow." 🌊
                </p>
            </div>
          </div>
        </Section>
        
        {/* Inspirations Section */}
        <Section title="My Neural Sparks">
            <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                {INSPIRATIONS.map((inspiration) => (
                    <div key={inspiration.name} className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg text-center hover:border-neutral-700 transition-colors duration-300 flex flex-col items-center justify-center">
                        <inspiration.icon className="w-8 h-8 mb-3 text-neutral-400" />
                        <h3 className="text-base font-bold text-white">{inspiration.name}</h3>
                        <p className="text-neutral-500 text-sm mt-1">&mdash; {inspiration.motto}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8 max-w-3xl mx-auto text-neutral-500 italic text-sm">
                <p>Each one powers a different part of my system — curiosity, creativity, and authenticity.</p>
            </div>
        </Section>


        {/* Projects Section */}
        <Section ref={projectsRef} id="projects" title="Selected Work">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section ref={contactRef} id="contact" title="Connect With Me">
            <div className="text-center max-w-2xl mx-auto">
                <p className="text-xl text-neutral-300 mb-8">
                    I'm currently seeking new opportunities and I'm always open to a chat. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                </p>
                <button
                    onClick={handleEmailClick}
                    className="inline-flex items-center justify-center text-xl font-bold text-black bg-white px-10 py-5 group transition-all duration-300 hover:scale-105"
                >
                    <MailIcon className="mr-3 text-black" />
                    Say Hello
                </button>
                 <div className="mt-8 text-neutral-400">
                    <p>Or reach out directly:</p>
                    <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                        <a href="mailto:meeharshu8686@gmail.com" className="font-semibold text-neutral-200 hover:text-white transition-colors">meeharshu8686@gmail.com</a>
                        <span className="text-neutral-600 hidden sm:inline">|</span>
                        <a href="mailto:iykharshu8685@gmail.com" className="font-semibold text-neutral-200 hover:text-white transition-colors">iykharshu8685@gmail.com</a>
                    </div>
                </div>
                <div className="mt-12">
                    <p className="text-neutral-400 mb-6">You can also find me on:</p>
                    <div className="flex justify-center">
                         <SocialIcons links={SOCIAL_LINKS} iconClassName="w-8 h-8" />
                    </div>
                </div>
            </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800">
          <div className="container mx-auto px-6 text-center text-neutral-400 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Harshu. All Rights Reserved.</p>
                <SocialIcons links={SOCIAL_LINKS} />
          </div>
      </footer>
    </div>
  );
};

export default App;
