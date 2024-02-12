"use client"
import { useState, useEffect } from 'react';
import FeatherIcon from "feather-icons-react";

export default function Scissors() {
    const [leftPosition, setLeftPosition] = useState(-24);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            
            setLeftPosition((prev) => {
                const mainElement = document.querySelector('main');

                if(mainElement){
                  const mainWidth = mainElement.offsetWidth;
                  const mainHeight = mainElement.offsetHeight;
                  const totalScrollableDistance = mainHeight - window.innerHeight;

                    //const newPos = (mainWidth < 800 ? (window.scrollY / 2) : (window.scrollY / mainHeight)) - 24;
                    const newPos = ((window.scrollY / totalScrollableDistance) * mainWidth) - 24;

                    setDirection(newPos > prev ? 1 : -1);

                    if(newPos < mainWidth){
                        return newPos;
                    }

                    return mainWidth;
                }
                
                return leftPosition;
            });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className="scissor-container" style={{position: 'absolute', left: `${leftPosition}px`, transform: `${direction === 1 ? "rotate(0deg) translateY(1.2px)" : "rotate(180deg) translateY(2.5px)"}`}}><FeatherIcon icon={"scissors"} size={24} strokeWidth={0.5} /></div>
  );
}
