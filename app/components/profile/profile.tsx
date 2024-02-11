import pic from "../../../public/headshot.png";

export default function Profile() {
  return (
    <div className="profile-picture">
      <div className="profile-container">
        <div className="profile" style={{ backgroundImage: `url(${pic.src})` }}></div>
      </div>
    </div>
  );
}
