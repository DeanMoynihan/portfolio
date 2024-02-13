import LineBreak from "../lineBreak/lineBreak";
import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";

export default function About({about}: {about: string}) {
  
  return (
    <>
      <FadeOnScroll threshold={0.66} title={"ABOUT ME"} delay={0}>
        <div className={`about-container`}>
          <h2 dangerouslySetInnerHTML={{ __html: about }}></h2>
        </div>
      </FadeOnScroll>
      <LineBreak showIcon={false}/>
    </>
  );
}
