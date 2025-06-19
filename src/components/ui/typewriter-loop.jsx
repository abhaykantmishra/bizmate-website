import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const TypewriterLoop = ( {strings, subtitle, className} ) => {
//   const strings = [
//     "Welcome to our amazing platform",
//     "Experience the future of technology",
//     "Build something incredible today",
//     "Your journey starts here",
//     "Innovation meets creativity"
//   ];

  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    let timeout;
    
    if (isTyping) {
      // Typing phase
      if (currentText.length < currentString.length) {
        timeout = setTimeout(() => {
          setCurrentText(prev => currentString.slice(0, prev.length + 1));
        }, 40); // Typing speed
      } else {
        // Finished typing, wait 1 second then start erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1300);
      }
    } else {
      // Erasing phase
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(prev => prev.slice(0, -1));
        }, 20); // Erasing speed (faster than typing)
      } else {
        // Finished erasing, move to next string
        timeout = setTimeout(() => {
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          setIsTyping(true);
        }, 200); // Small delay before starting next string
      }
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentText, currentStringIndex, isTyping]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 className={cn("text-4xl md:text-6xl mb-8", className)}>
          <span className="">
            {currentText}
          </span>
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
            |
          </span>
        </h1>
        
        { subtitle && <div className="text-lg text-gray-300 max-w-full mx-auto">
          {subtitle}
        </div>}
        
        {/* Progress indicator */}
        {/* <div className="mt-8 flex justify-center space-x-2">
          {strings.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStringIndex 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div> */}
        
        {/* Optional: Current string counter */}
        {/* <div className="mt-4 text-sm text-gray-500">
          {currentStringIndex + 1} / {strings.length}
        </div> */}
      </div>
    </div>
  );
};

export default TypewriterLoop;