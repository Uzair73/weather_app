import React, { useState, useEffect } from 'react'
import { time_data } from '../../../api/db'
import { current_weather_api } from '../../../api/weather_api'

const Display_time = ({data_search, isDarkMode}) => {
    // const [time, setTime] = useState(time_data)
    const [weather_data, setWeather_data] = useState(null)

    useEffect(() => {
        const fetch_weather_data = async () => {
          if(data_search) {
            const data = await current_weather_api(data_search)
            setWeather_data({
              city_name: data.data.name,
              country_name: data.data.sys.country,
              time: data.data.dt,
              id: data.data.id,
              timezone: data.data.timezone
            });
          }
        };
        fetch_weather_data();
      }, [data_search]); 
    const formatTime = (timestamp, timezone) => {
        const date = new Date((timestamp + timezone) * 1000)
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: "UTC" })
    }
    const formatDate = (timestamp, timezone) => {
        const date = new Date((timestamp + timezone) * 1000)
        return date.toLocaleString('en-PK', {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
        })
    }

    return (
        <div
        className={`mx-16 px-4 container flex flex-col justify-center items-center w-[28vw] h-auto min-h-[30vh] border border-[#000000] rounded-[18px] ${isDarkMode ? 'bg-[#444444]' : 'bg-primary'}  font-[Poppins] box_shadow`}>
            {weather_data ? (
                <div className='flex flex-col items-center '>
                    <h1 className={`font-bold p-3 text-lg ${isDarkMode ? "text-white" : "text-black"}`}>{weather_data.city_name}, <span>{weather_data.country_name}</span></h1>
                <h1 className={`font-extrabold text-4xl mx-1 text-black_primary ${isDarkMode ? "text-white" : "text-black"}`}>
                        {formatTime(weather_data.time, weather_data.timezone)}
                    </h1>
                    <p className={`text-xl mx-1 text-black_primary ${isDarkMode ? "text-white" : "text-black"}`}>
                        {formatDate(weather_data.time, weather_data.timezone)}
                    </p>
                </div>
            ) : (
                <p className={`${isDarkMode ? "text-white" : "text-black"}`}>Loading weather data...</p>
            )}
        </div>
    )
}

export default Display_time
