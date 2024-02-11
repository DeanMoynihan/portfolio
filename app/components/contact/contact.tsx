import FeatherIcon from "feather-icons-react";
import EmailButton from "./emailButton";
import { ContactType } from "@/app/types";
import LineBreak from "../lineBreak/lineBreak";

export default async function Contact({links, email}:{links:ContactType[], email: string}) {
  return (
    <>
      <div className={`content-container fade delay-3`}>
        <h2>CONTACT</h2>
        <div className="contact-icons">
          <EmailButton email={email}/>
          {links.map(
            ({title, icon, url }: {title:string; icon: string; url: string }, index: number) => {
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  className="contact-icon"
                  title={title}
                >
                  <FeatherIcon icon={icon} size={32} strokeWidth={0.5} />
                </a>
              );
            }
          )}
        </div>
      </div>
      <LineBreak showIcon={false}/>
    </>
  );
}
