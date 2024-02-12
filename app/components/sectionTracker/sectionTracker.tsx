"use client"
import { useState, useEffect } from "react";

export default function SectionTracker() {
    const [scrollYPos, setScrollYPos] = useState(0);
    const [scrolledContents, setScrolledContents] = useState<string[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollYPos(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        const allContent = document.querySelectorAll('.content');
        const viewportCenterY = window.innerHeight / 2;

        allContent.forEach(element => {
            const rect = element.getBoundingClientRect();
            if(viewportCenterY > rect.bottom - rect.height) {
                setScrolledContents((prev) => {
                    const tit = element.getAttribute("title");
                    if(tit && !prev.includes(tit)){
                        return [...prev, tit]
                    }

                    return prev;
                })
            }
            
            if(viewportCenterY < rect.top) {
                setScrolledContents((prev) => {
                    const tit = element.getAttribute("title");
                    if(tit && prev.includes(tit)){
                        return prev.filter((ele) => ele !== tit);
                    }

                    return prev;
                })
            }
        });

      }, [scrollYPos]);

    return (
        <div className="section-tracker">
          <h1 style={{background: "black", color: "white", padding: "0px 8px"}}>{scrolledContents && scrolledContents[scrolledContents.length - 1]}</h1>
        </div>
    );
}
