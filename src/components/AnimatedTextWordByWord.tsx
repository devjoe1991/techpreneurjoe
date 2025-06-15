
import React from 'react';

interface AnimatedTextWordByWordProps {
  text: string;
  className?: string;
  stagger?: number;
}

const AnimatedTextWordByWord = ({ text, className, stagger = 0.08 }: AnimatedTextWordByWordProps) => {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block opacity-0 animate-fade-up"
          style={{ animationDelay: `${i * stagger}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
};

export default AnimatedTextWordByWord;
