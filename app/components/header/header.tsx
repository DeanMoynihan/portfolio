import { HeaderType } from "@/app/types";
import Profile from "../profile/profile";
import LineBreak from "../lineBreak/lineBreak";
import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";

export default function Header({header,about}: {header: HeaderType; about: string}) {
  
  return (
    <>
    <FadeOnScroll>
      <div className={`title`}>
        <h1>{header.title}<br /><span>{header.subtitle}</span></h1>
        <Profile url={header.profile}/>
      </div>
    </FadeOnScroll>
      <LineBreak showIcon={true}/>
      <FadeOnScroll>
      <div className={`about-container`}>
        <h2 dangerouslySetInnerHTML={{ __html: about }}></h2>
      </div>
      </FadeOnScroll>
      <LineBreak showIcon={false}/>
      </>
  );
}
