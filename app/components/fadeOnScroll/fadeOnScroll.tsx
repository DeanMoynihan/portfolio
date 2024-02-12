"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeOnScroll({children}:{children: any}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.66,
  });

  const animationClass = inView ? 'fade' : 'hidden';
  
  return (
    <div ref={ref} className={`${animationClass}`}>
        {children}
    </div>
  );
}
