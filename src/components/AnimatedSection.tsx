
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import React from 'react';

interface AnimatedSectionProps extends React.ComponentPropsWithoutRef<'section'> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const AnimatedSection = ({ children, className = '', as: Component = 'section', ...props }: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  return (
    <Component
      ref={ref}
      className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
