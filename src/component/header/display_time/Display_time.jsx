import React, { useState, useEffect } from 'react'
import { time_data } from '../../../api/db'
import { current_weather_api } from '../../../api/weather_api'
const Display_time = () => {
    const [time, setTime] = useState(time_data)
    const [weather_data, setWeather_data] = useState(null)

    useEffect(() => {
        const fetch_weather_data = async () => {
            const data = await current_weather_api('new york') // Assuming the function can take a city parameter
            console.log("london weather data>>", data.data);
            setWeather_data({
                city_name: data.data.name,
                time: data.data.dt,
                id: data.data.id
            })
        }
        fetch_weather_data()
    }, [])

    console.log(time)
    return (
        <>
            <div className="mx-16 px-4 container flex flex-col justify-center items-center w-[23vw] h-[31vh] border border-[#000000] rounded-[18px] bg-primary font-[Poppins] box_shadow">
                {weather_data ? (
                    <div className='flex flex-col items-center'>
                        <h1 className='font-bold p-3 text-lg'>{weather_data.city_name}</h1>
                        <h1 className='font-extrabold text-4xl mx-1 text-black_primary'>{new Date(weather_data.time * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h1>

                        <p className='text-xl mx-1 text-black_primary'>{new Date(weather_data.time * 1000).toLocaleString('en-UK', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'short',
                        })}</p>
                    </div>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </>
    )
}

export default Display_time