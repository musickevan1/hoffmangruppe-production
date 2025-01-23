import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-left': '-translate-x-10 opacity-0',
    'fade-right': 'translate-x-10 opacity-0',
    'zoom-in': 'scale-95 opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView 
          ? 'translate-y-0 translate-x-0 scale-100 opacity-100' 
          : animations[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
