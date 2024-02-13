import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";
import Rework from "./reWork";
import WorkControlls from "./workControlls";

export default async function Work({works}:{works:any}) {
  return (
    <div className="work-container">
        <FadeOnScroll title={"WORK"} delay={0}>
          {/* <WorkControlls works={works} /> */}
          <Rework works={works} />
        </FadeOnScroll>
    </div>
  );
}
