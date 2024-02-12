"use client"
import { useInView } from 'react-intersection-observer';

export default function FadeOnScroll({children, delay = 0}:{children: any, delay: number}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.66,
  });

  const animationClass = inView ? 'fade' : 'hidden';
  
  return (
    <div ref={ref} className={`${animationClass}`} style={{transitionDelay: `${0.33 * delay}s`}}>
        {children}
    </div>
  );
}
