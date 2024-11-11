import React, { useEffect, useState } from 'react'
import { days_weather_data } from '../../api/weather_api'

// weather conditions icons
import sunny_pic from '../../../public/images/clear 1.svg'
import clouds_img from '../../../public/images/clouds 1.svg'
import drizzle_img from '../../../public/images/drizzle 1.svg'
import mist_img from '../../../public/images/mist 1.svg'
import rain_mist from '../../../public/images/rain 1.svg'
import snow_img from '../../../public/images/snow 1.svg'

const Days_weather = ({latitude, longitude, isDarkMode}) => {
  const [forecastData, setForecastData] = useState([])

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
    "13d": snow_img,
    "13n": snow_img,
    "50d": mist_img,
    "50n": mist_img
  }

  useEffect(() => {
    const fetch_data = async () => {
      if (latitude && longitude) {
      const res = await days_weather_data(latitude, longitude)
      // console.log("data of the days>>", res.data);
      
      if (res.data && res.data.list.length > 0) {
        const fiveDayForecast = res.data.list.filter((item, index) => index % 8 === 0).slice(0, 5).map(item => ({
          date: item.dt_txt,
          temp: item.main.temp,
          icon: weather_icon[item.weather[0].icon] || sunny_pic
        }));
        setForecastData(fiveDayForecast);
      }
    }
  }
  fetch_data()
  }, [latitude, longitude])

  return (
    <>
      <div className={`container my-4  mx-16 rounded-[18px] font-[Poppins] box_shadow w-[28vw] h-auto min-h-[30vh] opacity-[1.3] ${isDarkMode ? "bg-[#444444]" : "bg-primary"}`}>
        <div className={`flex flex-col justify-center items-center ${isDarkMode ? "text-white" : "text-black"}`}>
          <div className={`font-extrabold text-2xl my-3 ${isDarkMode ? "text-white" : "text-black_primary"}`}>5-Day Forecast:</div>
          {forecastData.length > 0 ? (
            forecastData.map((forecast, index) => (
              <div key={index} className='flex px-3'>
                <img src={forecast.icon} alt="weather icon" className='mx-5 w-[55px]'/>
                <h1 className='text-lg mx-4 font-bold my-4'>{forecast.temp.toFixed(0)}°C</h1>
                <div className='flex mx-3'>
                  <h1 className='text-lg font-bold w-52 my-4'>
                    {new Date(forecast.date).toLocaleDateString('en-PK', { weekday: 'long', day: 'numeric', month: 'short' })}
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <div>Loading forecast data...</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Days_weather
