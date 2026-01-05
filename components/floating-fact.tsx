"use client";

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const facts = [
  "Reality is just a shared hallucination. Code is the only thing that makes sense.",
  "The best debugger is a fresh pair of eyes... or a rubber duck.",
  "Some people fear AI taking over the world. I fear AI debugging my code and judging me.",
  "Ctrl + C and Ctrl + V are the most powerful spells a developer can cast.",
  "Every great project starts with: 'Let me just try something real quick...'",
  "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. So write clean code.",
  "The universe runs on entropy, but my code runs on 'hope it works'.",
  "I don't believe in fate, but I do believe in semicolons.",
  "Reality is just a simulation, and I'm trying to find the source code.",
  "Existence is temporary, but that one bug in production is eternal.",
  "Life is just an infinite loop until you find the right exit condition.",
  "Philosophy and debugging are the same—both question reality until it makes sense."
];

const FloatingFact = () => {
  const [currentFact, setCurrentFact] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isHovered, setIsHovered] = useState(false);
  const [remainingFacts, setRemainingFacts] = useState([...facts]);

  // Enhanced random position function
  const getNewPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const cardWidth = 320;
    const cardHeight = 150;
    const safeZoneX = viewportWidth - cardWidth - 40;
    const safeZoneY = viewportHeight - cardHeight - 40;
    const x = Math.max(20, Math.min(Math.random() * safeZoneX, safeZoneX));
    const y = Math.max(100, Math.min(Math.random() * safeZoneY, safeZoneY));
    return { x, y };
  };

  const getNextFact = () => {
    // If we've used all facts, reset the pool
    if (remainingFacts.length === 0) {
      setRemainingFacts([...facts]);
    }
    
    // Get random fact from remaining facts
    const randomIndex = Math.floor(Math.random() * remainingFacts.length);
    const nextFact = remainingFacts[randomIndex];
    
    // Remove selected fact from remaining facts
    setRemainingFacts(prev => prev.filter((_, index) => index !== randomIndex));
    
    return nextFact;
  };

  const changeFact = () => {
    if (isHovered) return; // Don't change fact while hovered
    
    setOpacity(0);
    
    setTimeout(() => {
      const newPosition = getNewPosition();
      setPosition(newPosition);
      setCurrentFact(getNextFact());
      
      requestAnimationFrame(() => {
        setOpacity(1);
      });
    }, 1000);
  };

  useEffect(() => {
    // Initial setup with delay
    setTimeout(() => {
      setCurrentFact(getNextFact());
      setPosition(getNewPosition());
      setIsVisible(true);
      setOpacity(1);
    }, 1000);

    // Change fact every minute (60000ms)
    const factInterval = setInterval(changeFact, 60000);

    // Cleanup
    return () => clearInterval(factInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-50 max-w-xs bg-background/95 backdrop-blur-sm border rounded-lg p-4 shadow-lg cursor-pointer
        ${isHovered ? 'scale-105 shadow-xl' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: opacity,
        transition: 'all 0.5s ease-in-out',
        transform: `
          translateY(${opacity === 0 ? '10px' : '0'})
          scale(${isHovered ? 1.05 : 1})
        `,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        title='Close'
        onClick={() => {
          setOpacity(0);
          setTimeout(() => setIsVisible(false), 1000);
        }}
        className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="mb-2">
        <span className="text-primary font-semibold">⚡ Fun Fact</span>
      </div>
      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
        {currentFact}
      </p>
    </div>
  );
};

export default FloatingFact;