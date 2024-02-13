"use client"
import { useState, useEffect } from "react";

export default function Profile({url}:{url:string}) {

  const [yPos, setYPos] = useState(150);

  useEffect(() => {
      const handleScroll = () => {
        const newPos = 150 + window.scrollY;
          setYPos((prev) => newPos < 400 ? newPos : prev);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="profile-picture">
      <div className="profile-container">
        <div className="glare" style={{height: `${yPos}px`}}></div>
        <div className="profile" style={{ backgroundImage: `url(${url})` }}></div>
      </div>
    </div>
  );
}
