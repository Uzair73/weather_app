import React from 'react'
import { weather_data } from '../../../api/db'
import sunny_pic from '../../../../public/images/clear 1.svg'
import humidity_pic from '../../../../public/images/humidity 1.svg'
import pressure_pic from '../../../../public/images/pressure-white 1.svg'
import sunrise_pic from '../../../../public/images/sunrise-white 1.svg'
import sunset_pic from '../../../../public/images/sunset-white 1.svg'
import uv_pic from '../../../../public/images/uv-white 1.svg'
import wind_pic from '../../../../public/images/wind 1.svg'

const Weather_details = () => {
    return (
        <>
            <div className="mx-16 px-4 container flex w-[40vw] h-[35vh] rounded-[18px] bg-primary font-[Poppins] box_shadow">
                <div className='flex'>
                    {weather_data.map((item, i) => {
                        return (
                            <div key={i} className='flex justify-between'>
                                {/* Box-1 */}
                                <div className="box1 flex-col">
                                <h1 className='my-2 mx-2 text-6xl gradient-text'>{item.temperatureFahrenheit}°F</h1>
                                <span className='text-lg'>Feels likes: <span className='text-black_primary opacity-[80%] text-2xl p-1 font-bold'>{item.temperature}°C</span></span>
                                <div className='mt-8 '>
                                {/* sun rise */}
                                    <div className='flex'>
                                        <img src={sunrise_pic} alt="logo" className='mx-4 w-[35px]' />
                                        <div className='flex-col'>
                                            <h3 className='text-xl font-bold'>Sunrise</h3>
                                            <p className='font-semibold'>{item.sunrise}</p>     
                                        </div>
                                    </div>
                                </div>
                                {/*sun set  */}
                                <div className='mb-6'>
                                    <div className='flex'>
                                        <img src={sunset_pic} alt="logo" className='mx-4 w-[35px]' />
                                        <div className='flex-col'>
                                            <h3 className='text-xl font-bold'>Sunset</h3>
                                            <p className='font-semibold'>{item.sunset}</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                {/* Box-2 */}
                                <div className="box2 my-5 mx-3 flex flex-col justify-center items-center">
                                <img src={sunny_pic} alt="condition" className='w-[13vw] h-[23vh]' />
                                <h3 className='text-2xl font-bold'>{item.condition}</h3>
                                </div>
                                {/* Box-3 */}
                                <div className="box-3 flex flex-wrap w-52 my-3">
                                    <div className="box-a mx-4 flex flex-col justify-center items-center">
                                        <img src={humidity_pic} alt="humidity" className='w-[35px] py-2' />
                                        <h1 className='font-bold text-lg'>{item.humidity}%</h1>
                                        <h1 className=' text-lg'>Humidity</h1>
                                    </div>
                                    <div className="box-b px-2 flex flex-col justify-center items-center">
                                        <img src={wind_pic} alt="wind" className='w-[35px] py-2'/>
                                        <h1 className='font-bold text-lg'>{item.wind_speed}km/h</h1>
                                        <h1 className=' text-lg'>Wind Speed</h1>
                                    </div>
                                    <div className="box-c mx-5 flex flex-col justify-center items-center">
                                        <img src={pressure_pic} alt="pressure" className='w-[35px] py-2' />
                                        <h1 className='font-bold text-lg'>{item.pressure}hPa</h1>
                                        <h1 className=' text-lg'>Pressure</h1>
                                    </div>
                                    <div className="box-d ml-9 flex flex-col justify-center items-center">
                                        <img src={uv_pic} alt="uv" className='w-[35px] py-2' />
                                        <h1 className='font-bold text-lg'>{item.uv}</h1>
                                        <h1 className='text-lg'>UV</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Weather_details