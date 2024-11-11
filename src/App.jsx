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
    <div className={`w-auto h-auto ${isDarkMode ? "body_color_dark" : "body_color"}`}>
      <ToggleButton onToggleTheme={toggleTheme} isDarkMode={isDarkMode} data_search={search} temp_search={tempsearch} setTempSearch={setTempSearch} set_DataSearch={handleSearch}/>
      <div className='flex justify-between'>
      <Display_time data_search={search} onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Weather_details data_search={search} onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      </div>
      <div className=' flex justify-between'>      
      <Days_weather latitude={latitude} longitude={longitude} onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Hourly_forcast latitude={latitude} longitude={longitude} onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      </div>

    </div>
    </>
  )
}

export default App
