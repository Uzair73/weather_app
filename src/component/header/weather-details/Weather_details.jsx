import React, { useEffect, useState } from 'react'
import { current_weather_api,days_weather_data } from '../../../api/weather_api'

// main weather forcast icons
import humidity_pic from '../../../../public/images/humidity 1.svg'
import pressure_pic from '../../../../public/images/pressure-white 1.svg'
import sunrise_pic from '../../../../public/images/sunrise-white 1.svg'
import sunset_pic from '../../../../public/images/sunset-white 1.svg'
import uv_pic from '../../../../public/images/uv-white 1.svg'
import wind_pic from '../../../../public/images/wind 1.svg'
import sunrise_white_pic from '../../../../public/images/sunrise-white-img.svg'
import sunset_white_pic from '../../../../public/images/sunset-white-img.svg'
import humidity_white_pic from '../../../../public/images/humidity-white-img.svg'
import wind_white_pic from '../../../../public/images/wind-white-img.svg'
import pressure_white_pic from '../../../../public/images/pressure-white-img.svg'
import uv_white_pic from '../../../../public/images/uv-white-img.svg'

// weather conditions ions
import sunny_pic from '../../../../public/images/clear 1.svg'
import clouds_img from '../../../../public/images/clouds 1.svg'
import drizzle_img from '../../../../public/images/drizzle 1.svg'
import mist_img from '../../../../public/images/mist 1.svg'
import rain_mist from '../../../../public/images/rain 1.svg'
import snow_img from '../../../../public/images/snow 1.svg'

const Weather_details = ({data_search, isDarkMode}) => {
    const [weatherData, setWeatherData] = useState(null)
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

    // fetch the data
    useEffect(() => {
        const fetch_data = async () => {
            if(data_search){
            const response = await current_weather_api(data_search)
            console.log("fetch the data in weather_details>>", response.data);
            const all_icons = weather_icon[response.data.weather[0].icon] || sunny_pic
            setWeatherData({
                temp: response.data.main.temp,
                tempFahrenheit: (response.data.main.temp * 9/5) + 32,
                condition: response.data.weather[0].main,
                conditionIcon: all_icons,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                sunrise: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                sunset: new Date(response.data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                wind: response.data.wind.speed,
                uv: response.data.wind.deg
            })
            }
            // console.log("img_data>>",weatherData.conditionIcon);
        }
        fetch_data()
    }, [data_search])

    return (
        <>
            <div className={`mx-16 px-4 container flex w-[50vw] h-auto rounded-[18px] font-[Poppins] box_shadow ${isDarkMode ? "bg-[#444444]" : "bg-primary"}`}>
                {weatherData ? (
                    <div className={`flex justify-between ${isDarkMode ? "text-white" : "text-black"}`}>
                        {/* Box-1 */}
                        <div className="box1 flex-col">
                            <h1 className={`my-2 mx-2 text-6xl ${isDarkMode ? "gradient-white" : "gradient-text"}`}>{weatherData.tempFahrenheit.toFixed(0)}°F</h1>
                            <span className={`text-md ${isDarkMode ? 'text-[#bcbcbc]' : ''}`}>Feels like: <span className={`${isDarkMode ? "text-[#bcbcbc]" : "text-black_primary opacity-[80%]"} text-xl p-1 font-bold`}>{weatherData.temp.toFixed(0)}°C</span></span>
                            <div className='mt-5 '>
                                {/* sun rise */}
                                <div className='flex'>
                                    <img src={isDarkMode ? sunrise_white_pic : sunrise_pic} alt="sunrise" className='mx-4 w-[35px]' />
                                    <div className='flex-col'>
                                        <p className='text-md font-bold'>Sunrise</p>
                                        <p className='font-semibold w-[70px]'>{weatherData.sunrise}</p>     
                                    </div>
                                </div>
                            </div>
                            {/*sun set  */}
                            <div className='mb-6'>
                                <div className='flex'>
                                    <img src={isDarkMode ? sunset_white_pic : sunset_pic} alt="sunset" className='mx-4 w-[35px]' />
                                    <div className='flex-col'>
                                        <p className='text-md font-bold'>Sunset</p>
                                        <p className='font-semibold w-[75px]'>{weatherData.sunset}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Box-2 */}
                        <div className="box2 my-5 mx-2 ml-10 flex flex-col justify-center items-center">
                            <img src={weatherData.conditionIcon} alt="condition" className='w-[30vw] h-[28vh]' />
                            <h3 className='text-2xl font-bold'>{weatherData.condition}</h3>
                        </div>
                        {/* Box-3 */}
                        <div className="box-3 flex flex-wrap my-3 w-15">
                            <div className="box-a mx-4 flex flex-col justify-center items-center">
                                <img src={isDarkMode ? humidity_white_pic : humidity_pic} alt="humidity" className='w-[35px] py-2' />
                                <h1 className='font-bold text-lg'>{weatherData.humidity}%</h1>
                                <h1 className=' text-lg'>Humidity</h1>
                            </div>
                            <div className="box-b px-2 flex flex-col justify-center items-center">
                                <img src={isDarkMode ? wind_white_pic : wind_pic} alt="wind" className='w-[35px] py-2'/>
                                <h1 className='font-bold text-lg'>{weatherData.wind.toFixed(0)}km/h</h1>
                                <h1 className=' text-lg'>Wind Speed</h1>
                            </div>
                            <div className="box-c mx-5 flex flex-col justify-center items-center">
                                <img src={isDarkMode ? pressure_white_pic : pressure_pic} alt="pressure" className='w-[35px] py-2' />
                                <h1 className='font-bold text-lg'>{weatherData.pressure}hPa</h1>
                                <h1 className=' text-lg'>Pressure</h1>
                            </div>
                            <div className="box-d ml-9 flex flex-col justify-center items-center">
                                <img src={isDarkMode ? uv_white_pic : uv_pic} alt="uv" className='w-[35px] py-2' />
                                <h1 className='font-bold text-lg'>{weatherData.uv}</h1>
                                <h1 className='text-lg'>UV</h1>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className={`${isDarkMode ? "text-white" : "text-black"}`}>Loading weather data...</p>
                )}
            </div>
        </>
    )
}

export default Weather_details