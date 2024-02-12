import FeatherIcon from "feather-icons-react";
import EmailButton from "./emailButton";
import { ContactType } from "@/app/types";
import LineBreak from "../lineBreak/lineBreak";
import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";

export default async function Contact({links, email}:{links:ContactType[], email: string}) {
  return (
    <>
    
      <div className={`content-container`}>
        <div className="contact-icons">
        <FadeOnScroll delay={0}>
          <EmailButton email={email}/>
          </FadeOnScroll>
          {links.map(
            ({title, icon, url }: {title:string; icon: string; url: string }, index: number) => {
              return (
                <FadeOnScroll delay={index + 1} key={index}>
                  <a
                    href={url}
                    target="_blank"
                    className={`contact-icon ${index === 2 ? "delay-1" : ""}`}
                    title={title}
                  >
                  
                    <FeatherIcon icon={icon} size={32} strokeWidth={0.5} />
                  </a>
                </FadeOnScroll>
              );
            }
          )}
        </div>
      </div>

      <LineBreak showIcon={false}/>
    </>
  );
}
