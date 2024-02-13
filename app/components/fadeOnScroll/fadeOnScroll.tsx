"use client"
import { useInView } from 'react-intersection-observer';

export default function FadeOnScroll({children, title, threshold = 0.66, delay = 0}:{children: any, title:string, threshold:number, delay: number}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const animationClass = inView ? 'fade' : 'hidden';
  
  return (
    <div ref={ref} className={`${animationClass} content`} title={title} style={{transitionDelay: `${0.33 * delay}s`}}>
        {children}
    </div>
  );
}
