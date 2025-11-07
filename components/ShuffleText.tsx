import React, { useState, useEffect, useRef } from 'react';

interface ShuffleTextProps {
  text: string;
  isShuffling: boolean;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?';

export const ShuffleText: React.FC<ShuffleTextProps> = ({ text, isShuffling }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isShuffling) {
      intervalRef.current = window.setInterval(() => {
        const newText = text
          .split('')
          .map((char) => {
            if (char === ' ') return ' ';
            // Only shuffle a small percentage of characters each frame for a subtle effect
            if (Math.random() > 0.1) {
              return char;
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('');
        setDisplayedText(newText);
      }, 120); // Interval for a slower, constant shuffle
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayedText(text);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isShuffling, text]);

  return <span aria-label={text} role="text">{displayedText}</span>;
};
