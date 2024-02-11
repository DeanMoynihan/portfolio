import FeatherIcon from "feather-icons-react";
import EmailButton from "./emailButton";

export default async function Contact({links, email}:{links:any, email: string}) {
  return (
    <>
      <div className={`content-container fade delay-3`}>
        <h2>CONTACT</h2>
        <div className="contact-icons">
          <EmailButton email={email}/>
          {links.map(
            ({ icon, url }: { icon: string; url: string }, index: number) => {
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  className="contact-icon"
                >
                  <FeatherIcon icon={icon} size={32} strokeWidth={0.5} />
                </a>
              );
            }
          )}
        </div>
      </div>
      <div className="line-break" />
    </>
  );
}
