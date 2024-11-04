import React, { useEffect, useState } from 'react'
import { current_weather_api } from '../../../api/weather_api'
import sunny_pic from '../../../../public/images/clear 1.svg'
import humidity_pic from '../../../../public/images/humidity 1.svg'
import pressure_pic from '../../../../public/images/pressure-white 1.svg'
import sunrise_pic from '../../../../public/images/sunrise-white 1.svg'
import sunset_pic from '../../../../public/images/sunset-white 1.svg'
import uv_pic from '../../../../public/images/uv-white 1.svg'
import wind_pic from '../../../../public/images/wind 1.svg'

const Weather_details = () => {
    const [weatherData, setWeatherData] = useState(null)

    // fetch the data
    useEffect(() => {
        const fetch_data = async () => {
            const response = await current_weather_api('new york')
            console.log("fetch the data in weather_details>>", response.data);
            setWeatherData({
                temp: response.data.main.temp,
                tempFahrenheit: (response.data.main.temp * 9/5) + 32,
                condition: response.data.weather[0].main,
                conditionIcon: response.data.weather[0].icon,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString(),
                wind: response.data.wind.speed,
                uv: response.data.wind.deg // Assuming this is a placeholder for actual UV index data
            })
            console.log("img_data>>",weatherData.conditionIcon);
            
        }
        fetch_data()
    }, [])

    return (
        <>
            <div className="mx-16 px-4 container flex w-[40vw] h-[35vh] rounded-[18px] bg-primary font-[Poppins] box_shadow">
                {weatherData ? (
                    <div className='flex justify-between'>
                        {/* Box-1 */}
                        <div className="box1 flex-col">
                            <h1 className='my-2 mx-2 text-6xl gradient-text'>{weatherData.tempFahrenheit.toFixed(0)}°F</h1>
                            <span className='text-md'>Feels like: <span className='text-black_primary opacity-[80%] text-xl p-1 font-bold'>{weatherData.temp.toFixed(0)}°C</span></span>
                            <div className='mt-8 '>
                                {/* sun rise */}
                                <div className='flex'>
                                    <img src={sunrise_pic} alt="sunrise" className='mx-4 w-[35px]' />
                                    <div className='flex-col'>
                                        <p className='text-sm font-bold'>Sunrise</p>
                                        <p className='font-semibold w-[70px]'>{weatherData.sunrise}</p>     
                                    </div>
                                </div>
                            </div>
                            {/*sun set  */}
                            <div className='mb-6'>
                                <div className='flex'>
                                    <img src={sunset_pic} alt="sunset" className='mx-4 w-[35px]' />
                                    <div className='flex-col'>
                                        <p className='text-sm font-bold'>Sunset</p>
                                        <p className='font-semibold w-[75px]'>{weatherData.sunset}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Box-2 */}
                        <div className="box2 my-5 mx-3 flex flex-col justify-center items-center">
                            <img src={`https://openweathermap.org/img/wn/${weatherData.conditionIcon}@2x.png`} alt="condition" className='w-[13vw] h-[23vh]' />
                            <h3 className='text-2xl font-bold'>{weatherData.condition}</h3>
                        </div>
                        {/* Box-3 */}
                        <div className="box-3 flex flex-wrap my-3 w-15">
                            <div className="box-a mx-4 flex flex-col justify-center items-center">
                                <img src={humidity_pic} alt="humidity" className='w-[35px] py-2' />
                                <h1 className='font-bold text-lg'>{weatherData.humidity}%</h1>
                                <h1 className=' text-lg'>Humidity</h1>
                            </div>
                            <div className="box-b px-2 flex flex-col justify-center items-center">
                                <img src={wind_pic} alt="wind" className='w-[35px] py-2'/>
                                <h1 className='font-bold text-lg'>{weatherData.wind}km/h</h1>
                                <h1 className=' text-lg'>Wind Speed</h1>
                            </div>
                            <div className="box-c mx-5 flex flex-col justify-center items-center">
                                <img src={pressure_pic} alt="pressure" className='w-[35px] py-2' />
                                <h1 className='font-bold text-lg'>{weatherData.pressure}hPa</h1>
                                <h1 className=' text-lg'>Pressure</h1>
                            </div>
                            <div className="box-d ml-9 flex flex-col justify-center items-center">
                                <img src={uv_pic} alt="uv" className='w-[35px] py-2' />
                                <h1 className='font-bold text-lg'>{weatherData.uv}</h1>
                                <h1 className='text-lg'>UV</h1>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
        </>
    )
}

export default Weather_details