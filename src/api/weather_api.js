import axios from "axios";

export const current_weather_api =  async (city)=>{
const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_CURRENT_WEATHER_API}`
const res = await axios.get(url)
return res
}

export const days_weather_data = async (lat, lon) =>{
 const res  = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_CURRENT_WEATHER_API}`)
 const data = res
//  console.log("data of days forcast>>", data);
 return data
 }