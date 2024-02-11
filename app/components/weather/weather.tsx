import FeatherIcon from "feather-icons-react";

export default async function Weather({weatherData}:{weatherData:any}) {
  const { mapLoc } = weatherData;

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mapLoc}&appid=${process.env.WEATHER_API_KEY}`)
    const weather = await res.json();

    const getIconByID = function (id: string) {
      if (id === "800") return "sun";
      if (id.startsWith("8")) return "cloud";
      if (id.startsWith("7")) return "wind";
      if (id.startsWith("6")) return "cloud-snow";
      if (id.startsWith("5")) return "cloud-rain";
      if (id.startsWith("3")) return "cloud-drizzle";
      if (id.startsWith("2")) return "cloud-lightning";
      
      return "cloud";
    };

    return (
        <>
          <div className="content-container fade delay-2">
              <h2>BASED IN {weather.name.toUpperCase()}</h2>
              <div className="icon-holder">
              <FeatherIcon icon={getIconByID(weather.weather[0].id.toString())} size={64} strokeWidth={0.33} />
              </div>
          </div>
          <div className="line-break"/>
        </>
    );
  } catch (e) {
    console.error(e);
  }
}
