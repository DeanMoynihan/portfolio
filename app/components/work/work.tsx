import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";
import Rework from "./reWork";

export default function Work({works}:{works:any}) {
  return (
    <FadeOnScroll threshold={0.25} title={"WORK"} delay={0}>
      <div className="work-container">
          <Rework works={works} />
      </div>
    </FadeOnScroll>
  );
}
