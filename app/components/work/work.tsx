import WorkControlls from "./workControlls";

export default async function Work({works}:{works:any}) {
  return (
    <div className="work-container fade delay-4">
        <WorkControlls works={works} />
    </div>
  );
}
