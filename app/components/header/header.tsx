import { HeaderType } from "@/app/types";
import Profile from "../profile/profile";
import LineBreak from "../lineBreak/lineBreak";

export default async function Header({header,about}: {header: HeaderType; about: string}) {
  return (
    <>
      <div className="title">
        <h1>{header.title}<br />{header.subtitle}</h1>
        <Profile url={header.profile}/>
      </div>
      <LineBreak showIcon={true}/>
      <div className="fade delay-1">
        <h2 dangerouslySetInnerHTML={{ __html: about }}></h2>
      </div>
      <LineBreak showIcon={false}/>
    </>
  );
}
