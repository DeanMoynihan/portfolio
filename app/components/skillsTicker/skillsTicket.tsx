import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";
import LineBreak from "../lineBreak/lineBreak";

export default function SkillsTicker({skills}:{skills: string[]}) {
    const getText = function(){
        return skills.map((skill, i) => <><a style={{textDecoration: "none"}} key={i}>{skill.toUpperCase()}</a>{" | "}</>)
    }
    
    return (
        <>
            <FadeOnScroll delay={0}>
                <div style={{minHeight: "150px", display: "flex", alignItems: "center", flexDirection: "row", textWrap: "nowrap", overflowX: "hidden"}}>
                <div style={{display: "flex", animation: "marquee 30s linear infinite"}}>
                    <h2>&nbsp;{getText()}</h2>
                    <h2>&nbsp;{getText()}</h2>
                </div>
                </div>
            </FadeOnScroll>
            <LineBreak showIcon={false}/>
        </>
    );
}