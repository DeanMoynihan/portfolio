import { HeaderType } from "@/app/types";
import Profile from "../profile/profile";
import LineBreak from "../lineBreak/lineBreak";
import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";
import FixedHeader from "./fixedHeader";

export default function Header({header}: {header: HeaderType}) {
  
  return (
    <>
      <FadeOnScroll threshold={0.66} title={""} delay={0}>
        <div className={`title`}>
          <h1>{header.title}<br /><span>{header.subtitle}</span></h1>
          <Profile url={header.profile}/>
        </div>
      </FadeOnScroll>
      <div id="header">
        <LineBreak showIcon={true}/>
      </div>
      {/* <FixedHeader /> */}
    </>
  );
}
