
import React, { useEffect, useState } from 'react';
import { SpiderIcon } from './Icons';

interface SplashProps {
  onAnimationComplete: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onAnimationComplete }) => {
  const [phase, setPhase] = useState('entering'); // 'entering' -> 'visible' -> 'exiting'

  useEffect(() => {
    const fadeInTimer = setTimeout(() => setPhase('visible'), 100);
    const visibleTimer = setTimeout(() => setPhase('exiting'), 2200);
    const completeTimer = setTimeout(onAnimationComplete, 3000); // Total duration

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(visibleTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  const getPhaseClasses = () => {
    switch (phase) {
      case 'entering':
        return 'opacity-0 scale-90';
      case 'visible':
        return 'opacity-100 scale-100';
      case 'exiting':
        return 'opacity-0 scale-110';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white">
      <div className={`relative transition-all duration-700 ease-in-out ${getPhaseClasses()}`}>
         <h1 className="text-9xl font-black uppercase tracking-tighter">H.</h1>
         <div className="absolute top-4 -right-5 text-white">
            <SpiderIcon className="spider-sway w-6 h-9" />
         </div>
      </div>
    </div>
  );
};
