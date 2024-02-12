"use client"
import { useState, useEffect } from 'react';
import FeatherIcon from "feather-icons-react";

export default function Scissors() {
    const [leftPosition, setLeftPosition] = useState(-24);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            setLeftPosition((prev) => {
                const mainWidth = document.querySelector('main')?.offsetWidth;

                if(mainWidth){
                    const newPos = window.scrollY - 24;

                    setDirection(newPos > prev ? 1 : -1);

                    if(newPos < mainWidth){
                        return window.scrollY - 24;
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

      useEffect(() => {
        console.log(direction);
      }, [direction]);

  return (
    <div className="scissor-container" style={{position: 'absolute', left: `${leftPosition}px`, transform: `${direction === 1 ? "rotate(0deg) translateY(1.2px)" : "rotate(180deg) translateY(2.5px)"}`}}><FeatherIcon icon={"scissors"} size={24} strokeWidth={0.5} /></div>
  );
}
