
import React, { useState, useEffect } from 'react';
import { SpiderIcon, DownloadIcon } from './Icons';

interface HeaderProps {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAboutClick, onProjectsClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (scrollFunc: () => void) => {
    scrollFunc();
    setIsMenuOpen(false); // This will only be effective on mobile, harmless on desktop
  };
  
  const navLinks = (
    <>
      <button onClick={() => handleLinkClick(onAboutClick)} className="hover:text-black dark:hover:text-white transition-colors duration-300">About</button>
      <button onClick={() => handleLinkClick(onProjectsClick)} className="hover:text-black dark:hover:text-white transition-colors duration-300">Projects</button>
      <button onClick={() => handleLinkClick(onContactClick)} className="hover:text-black dark:hover:text-white transition-colors duration-300">Contact</button>
      <a 
        href="/Harsh_Vishwakarma_Resume.pdf" 
        download="Harsh_Vishwakarma_Resume.pdf"
        className="hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center"
        aria-label="Download Resume"
      >
        Resume <DownloadIcon className="ml-1.5 w-4 h-4" />
      </a>
    </>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'} ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="relative">
          <a href="#" className="text-2xl font-black uppercase tracking-tighter">H.</a>
          <div className="absolute top-2 -right-3 text-black dark:text-neutral-200">
              <SpiderIcon className="spider-sway w-4 h-6" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-neutral-700 dark:text-neutral-300 font-semibold uppercase text-sm tracking-wider">
          {navLinks}
        </nav>

        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative" aria-label="Toggle menu">
                <svg className="w-6 h-6 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
        </div>
      </div>
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <nav className="flex flex-col items-center space-y-6 py-8 text-neutral-700 dark:text-neutral-300 font-semibold uppercase text-lg tracking-wider">
            {navLinks}
          </nav>
      </div>
    </header>
  );
};
