import Scissors from "./scissors";

export default function LineBreak({showIcon}:{showIcon:boolean}) {
  return (
      <div className="line-break-container">
        {showIcon && <Scissors/>}
        <div className="line-break" />
      </div>
  );
}
