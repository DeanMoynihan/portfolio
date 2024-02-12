"use client"
import LineBreak from "../lineBreak/lineBreak";
import { useState, useEffect } from "react";


export default function FixedHeader() {
    const [scrollPos, setScrollPos] = useState(0);
    const [headerY, setHeaderY] = useState(100);
  
    useEffect(() => {
        const mainElement = document.getElementById('header');
        const yOffset = window.scrollY;
        if(mainElement){
            setHeaderY(mainElement.getBoundingClientRect().top + yOffset - 30);
        }
        
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className="fixed-header" style={{opacity: scrollPos < headerY ? "0" : "1", transitionDuration: "0.25s"}}>
        <LineBreak showIcon={true}/>
    </div>
  );
}
