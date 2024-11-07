import { useState, useEffect } from 'react';
import { days_weather_data } from "../../api/weather_api"

// weather conditions icons
import sunny_pic from '/images/clear 1.svg'
import clouds_img from '/images/clouds 1.svg'
import drizzle_img from '/images/drizzle 1.svg'
import mist_img from '/images/mist 1.svg'
import rain_mist from '/images/rain 1.svg'
import snow_img from '/images/snow 1.svg'

// winds directions icons
import wind_straight from '/images/navigation 1.svg'
import wind_left from '/images/navigation 2.svg'
import wind_right from '/images/navigation 3.svg'

const HourlyForecast = () => {
  const [forecastData, setForecastData] = useState([])

  // icons of weather
  const weather_icon = {
    "01d": sunny_pic,
    "01n": sunny_pic,
    "02d": clouds_img,
    "02n": clouds_img,
    "03d": clouds_img,
    "03n": clouds_img,
    "04d": clouds_img,
    "04n": clouds_img,
    "09d": drizzle_img,
    "09n": drizzle_img,
    "10d": rain_mist,
    "10n": rain_mist,
    "11d": rain_mist,
    "11n": rain_mist,
    "12d": snow_img,
    "12n": snow_img,
    "50d": mist_img,
    "50n": mist_img
  }

// logic to set the wind directions icons
  const getWindDirectionIcon = (deg) => {
    if ((deg >= 0 && deg <= 45) || (deg > 315 && deg <= 360)) {
      return wind_straight; // north
    } else if (deg > 45 && deg <= 135) {
      return wind_right; // east
    } else if (deg > 135 && deg <= 225) {
      return wind_left; // south
    } else if (deg > 225 && deg <= 315) {
      return wind_straight; // west
    } else {
      return wind_straight;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await days_weather_data(28.6128, 73.1338)
      console.log("res of data in hourly forecast>>", res.data);
      const hourlyForecast = res.data.list.slice(0, 5).map(hour => {
        const weather_icons = weather_icon[hour.weather[0].icon] || sunny_pic
        const directions_icons = getWindDirectionIcon(hour.wind.deg)
        return {
          date: new Date(hour.dt * 1000).toLocaleDateString(),
          time: new Date(hour.dt * 1000).toLocaleTimeString("es-US",{hour: "2-digit", minute: "2-digit", timeZone: 'UTC'}),
          temperature: Math.floor(hour.main.temp),
          windSpeed: Math.floor(hour.wind.speed),
          wind_deg: hour.wind.deg,
          icons_weather: weather_icons,
          icon_directions: directions_icons
        }
      })
      console.log("time issues>>",  hourlyForecast);
      setForecastData(hourlyForecast.slice(0, 5))
    }
    fetchData()
  }, [])

  return (
    <div className="mx-auto my-4 h-80 px-4 py-6 w-[90vw] max-w-[800px] rounded-[18px] shadow-md font-[Poppins] bg-primary box_shadow">
      <h2 className="text-center font-semibold text-xl mb-4">Hourly Forecast:</h2>
      <div className="flex justify-evenly">
        {forecastData.map((hour, i) => (
          <div key={i} className={`w-[15vw] max-w-[90px] p-4 rounded-[18px] flex flex-col items-center text-center ${
              i % 2 === 0 ? 'bg-[#F88508]' : 'bg-[#443D64] text-white'
            }`}
          >
            <span className="text-lg font-semibold">{hour.time}</span>
            <img src={hour.icons_weather} alt="weather icon" className="w-10 h-10 my-2" />
            <span className="text-lg font-semibold">{`${hour.temperature}°C`}</span>
            <img src={hour.icon_directions} alt="wind direction" className="h-10" />
            <span className="text-sm mt-1">{`${hour.windSpeed} m/s`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
