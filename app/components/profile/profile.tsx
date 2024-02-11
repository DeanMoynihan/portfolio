export default function Profile({url}:{url:string}) {
  return (
    <div className="profile-picture">
      <div className="profile-container">
        <div className="profile" style={{ backgroundImage: `url(${url})` }}></div>
      </div>
    </div>
  );
}
