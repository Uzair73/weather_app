import { useState, useEffect } from 'react';
import './App.css'
import ToggleButton from './component/header/ToggleButton'
import Display_time from './component/header/display_time/Display_time';
import Weather_details from './component/header/weather-details/Weather_details';
import Days_weather from './component/days-weather/Days_weather';
import Hourly_forcast from './component/hourly-forcast/Hourly_forcast';
import {current_weather_api} from "./api/weather_api"
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchCoords = async () => {
      if (search) {
        try {
          const response = await current_weather_api(search);
          setLatitude(response.data.coord.lat);
          setLongitude(response.data.coord.lon);
        } catch (error) {
          console.error("Failed to fetch coordinates", error);
        }
      }
    };
    fetchCoords();
  }, [search]);
  

  return (
    <>
    <div className="w-[100vw] h-[100vh] body_color">
      <ToggleButton onToggleTheme={toggleTheme} isDarkMode={isDarkMode} data_search={search} set_DataSearch={setSearch}/>
      <div className='flex justify-between'>
      <Display_time data_search={search}/>
      <Weather_details data_search={search}/>
      </div>
      <div className=' flex justify-between'>      
      <Days_weather latitude={latitude} longitude={longitude}/>
      <Hourly_forcast latitude={latitude} longitude={longitude}/>
      </div>

    </div>
    </>
  )
}

export default App
