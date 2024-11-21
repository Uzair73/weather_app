import axios from "axios";
// const host = 'http://localhost:3000'
const host = import.meta.env.VITE_BACKEND_HOST;


export const current_weather_api =  async (city)=>{
const url =  `${host}/weather-forcast?city=${city}&units=metric`
const res = await axios.get(url)
return res
}

export const days_weather_data = async (lat, lon) =>{
 const res  = await axios.get(`${host}/hourly-forcast?lat=${lat}&lon=${lon}`)
 const data = res
//  console.log("data of days forcast>>", data);
 return data
 }