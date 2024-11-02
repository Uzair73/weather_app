import React,{useState} from 'react'
import { time_data } from '../../../api/db'
const Display_time = () => {
    const [time, setTime] = useState(time_data)

    console.log(time)
  return (
    <>
    <div className="mx-16 px-4 container flex flex-col justify-center items-center w-[23vw] h-[31vh] border border-[#000000] rounded-[18px] bg-primary font-[Poppins] box_shadow">
    <div>
        {time.map((item,index)=>{
            return(
                <div key={index}>
                    <h1 className=' font-bold p-3 text-lg'>{`${item.city}`}</h1>
                    <h1 className='font-extrabold text-3xl mx-1 text-black_primary'>{new Date('1970-01-01T' + item.time).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h1>
                    <p className='py-1'>{(item.day_date)}</p>
                </div>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default Display_time