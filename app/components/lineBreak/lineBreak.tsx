import FeatherIcon from "feather-icons-react";

export default async function LineBreak({showIcon}:{showIcon:boolean}) {
  return (
      <div className="line-break-container">
        {showIcon && <FeatherIcon icon={"scissors"} size={24} strokeWidth={0.5} />}
        <div className="line-break" />
      </div>
  );
}
