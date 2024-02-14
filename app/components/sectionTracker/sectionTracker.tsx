"use client"
import { useState, useEffect } from "react";

export default function SectionTracker() {
    const [scrollYPos, setScrollYPos] = useState(0);
    const [scrolledContents, setScrolledContents] = useState<string[]>([]);
    const [leftPos, setLeftPos] = useState(0);

    useEffect(() => {
        const mainElement = document.querySelector('main');
        const mainRect = mainElement?.getBoundingClientRect();

        const handleScroll = () => {
            setScrollYPos(window.scrollY);
        };

        const handleResize = () => {
            const mainRectReact = mainElement?.getBoundingClientRect();

            if(mainRectReact){
                setLeftPos(Clamp(mainRectReact.left / 2 - 200, 0, 1000));
            } 
        };
        
        setLeftPos(mainRect ? Clamp(mainRect.left / 2 - 200, 0, 1000) : 0);

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
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

      const Clamp = function(value:number, min:number, max:number){
        if(value < min){
            return min;
        }

        if(value > max){
            return min;
        }

        return value;
      }

    return (
        <div className="section-tracker" style={{ minWidth: "200px", left: leftPos}}>
          <h1 style={{background: "black", float: "right", color: "white", padding: "0px 8px"}}>{scrolledContents && scrolledContents[scrolledContents.length - 1]}</h1>
        </div>
    );
}

