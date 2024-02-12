import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";
import WorkControlls from "./workControlls";

export default async function Work({works}:{works:any}) {
  return (
    <div className="work-container">
        <FadeOnScroll>
          <WorkControlls works={works} />
        </FadeOnScroll>
    </div>
  );
}
