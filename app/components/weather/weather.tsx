import FeatherIcon from "feather-icons-react";
import LineBreak from "../lineBreak/lineBreak";
import FadeOnScroll from "../fadeOnScroll/fadeOnScroll";

export default async function Weather({weatherData}:{weatherData:any}) {
  const { mapLoc } = weatherData;

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${mapLoc}&appid=${process.env.WEATHER_API_KEY}`)
    const weather = await res.json();

    const isNight = function(){
      return (weather.dt > weather.sys.sunset && weather.dt < weather.sys.sunrise)
    }

    const getIconByID = function (id: string) {
      if (id === "800") return isNight() ? "moon" : "sun";
      if (id.startsWith("8")) return isNight() ? "moon" : "cloud";
      if (id.startsWith("7")) return isNight() ? "moon" : "wind";
      if (id.startsWith("6")) return "cloud-snow";
      if (id.startsWith("5")) return "cloud-rain";
      if (id.startsWith("3")) return "cloud-drizzle";
      if (id.startsWith("2")) return "cloud-lightning";
      
      return isNight() ? "moon" : "cloud";
    };

    return (
      <>
          <FadeOnScroll title={"WHERE?"} delay={0}>
          <div className="content-container">
              <div className="weather-title">
                <h2>CURRENTLY BASED IN {weather.name.toUpperCase()}</h2>
              </div>
              <div className="icon-holder" title="Cambridge Right Now">
                <FeatherIcon icon={getIconByID(weather.weather[0].id.toString())} size={64} strokeWidth={0.33} />
              </div>
          </div>
          </FadeOnScroll>
          <LineBreak showIcon={false}/>
        </>
    );
  } catch (e) {
    console.error(e);
  }
}

const mockWeather = {
    "coord": {
    "lon": 0.1167,
    "lat": 52.2
    },
    "weather": [
    {
    "id": 103,
    "main": "Clouds",
    "description": "scattered clouds",
    "icon": "03n"
    }
    ],
    "base": "stations",
    "main": {
    "temp": 280.9,
    "feels_like": 278.42,
    "temp_min": 280.31,
    "temp_max": 281.65,
    "pressure": 994,
    "humidity": 84
    },
    "visibility": 10000,
    "wind": {
    "speed": 3.93,
    "deg": 287,
    "gust": 8.23
    },
    "clouds": {
    "all": 50
    },
    "dt": 1707671205,
    "sys": {
    "type": 2,
    "id": 2037784,
    "country": "GB",
    "sunrise": 1707636249,
    "sunset": 1707671012
    },
    "timezone": 0,
    "id": 2653941,
    "name": "Cambridge",
    "cod": 200
    }