import Contact from "./components/contact/contact";
import Weather from "./components/weather/weather";
import Work from "./components/work/work";
import Header from "./components/header/header";
import About from "./components/about/about";
import { GoogleAnalytics } from '@next/third-parties/google'
import { DataType } from "./types";
import SkillsTicker from "./components/skillsTicker/skillsTicket";
import SectionTracker from "./components/sectionTracker/sectionTracker";

export default async function Home() {
  try {
    const res = await fetch(process.env.API_HOST as string);
    const data:DataType = await res.json();

    return (
      <main>
        <SectionTracker />
        <GoogleAnalytics gaId="G-1V20XCBKGF" />
        <Header header={data.header} />
        <About about={data.about}/>
        <SkillsTicker skills={data.skills}/>
        <Weather weatherData={data.weather}/>
        <Contact links={data.contact} email={data.email}/>
        <Work works={data.work}/>
      </main>
    );
  }catch(e){
    console.log(e);
    return (
    <main>
      <div className="title">
        Down for maintenance.
      </div>
    </main>
    )
  }
}