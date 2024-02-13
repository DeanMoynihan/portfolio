import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";
import LineBreak from "../lineBreak/lineBreak";

export default function SkillsTicker({skills}:{skills: string[]}) {
    const getText = function(){
        return skills.map((skill, i) => <><a style={{textDecoration: "none"}} key={i}>{skill.toUpperCase()}</a>{" | "}</>)
    }
    
    return (
        <>
            <FadeOnScroll title={"SKILLS"} delay={0}>
                <div className="skills-container">
                    <div className="skills-ani">
                        <h2>&nbsp;{getText()}</h2>
                        <h2>&nbsp;{getText()}</h2>
                    </div>
                </div>
            </FadeOnScroll>
            <LineBreak showIcon={false}/>
        </>
    );
}