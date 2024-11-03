import React from 'react'
import { days_data } from '../../api/db'
const Days_weather = () => {
  return (
    <>
    <div className="container my-4 mx-16 rounded-[18px] bg-primary font-[Poppins] box_shadow w-[23vw] h-[37vh] opacity-[1.3]">
        <div className='flex flex-col justify-center items-center'>
        <div className='font-extrabold text-2xl text-black_primary my-3'>5 Days Forecast:</div>
      <div className='flex flex-col space-x-4'>
        {days_data.map((item) => {
          return (
            <div key={item.id} className='flex mx-3 px-3 pl-[0.3rem]'>
              <img src={item.image_url} alt="img" className='mx-5'/>
              <h1 className='text-lg mx-4 font-bold leading-8'>{item.temperature}</h1>
              <div className='flex mx-3'>
              <h1 className='text-lg font-bold leading-10'>{item.day}</h1>
              <h1 className='text-lg font-bold leading-10'>{item.date}</h1>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    </div>
    </>
  )
}

export default Days_weather