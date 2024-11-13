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
  const [tempsearch, setTempSearch] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSearch = (cityName) => {
    setSearch(cityName.trim());
  };

  const updateCoordinates = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
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
    <div className={`w-auto min-h-[100vh] max-sm:overflow-clip h-auto ${isDarkMode ? "body_color_dark" : "body_color"}`}>
      <ToggleButton onToggleTheme={toggleTheme} isDarkMode={isDarkMode} data_search={search} temp_search={tempsearch} setTempSearch={setTempSearch} set_DataSearch={handleSearch} updateCoordinates={updateCoordinates}/>


      <div className='flex justify-between max-sm:flex-col'>
      <Display_time data_search={search} isDarkMode={isDarkMode} updateCoordinates={updateCoordinates} latitude={latitude} longitude={longitude}/>
      <Weather_details data_search={search} isDarkMode={isDarkMode}/>
      </div>


      <div className=' flex justify-between max-sm:flex-col'>      
      <Days_weather latitude={latitude} longitude={longitude} onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Hourly_forcast latitude={latitude} longitude={longitude} onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      </div>
        <span className='my-28 font-bold mb-0 flex justify-center items-center text-red-600'>Develop by Uzair Hakeem</span>
    </div>
    </>
  )
}

export default App
