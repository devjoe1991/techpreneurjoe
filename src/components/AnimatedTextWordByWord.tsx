import React from 'react';

interface AnimatedTextWordByWordProps {
  lines: string[];
  className?: string;
  stagger?: number;
}

const AnimatedTextWordByWord = ({ lines, className, stagger = 0.08 }: AnimatedTextWordByWordProps) => {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <div
          key={`${line}-${i}`}
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: `${i * stagger}s` }}
        >
          {line}
        </div>
      ))}
    </span>
  );
};

export default AnimatedTextWordByWord;
