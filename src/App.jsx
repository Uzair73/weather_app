import { useState } from 'react';
import './App.css'
import ToggleButton from './component/header/ToggleButton'
import Display_time from './component/header/display_time/Display_time';
import Weather_details from './component/header/weather-details/Weather_details';
import Days_weather from './component/days-weather/Days_weather';
import Hourly_forcast from './component/hourly-forcast/Hourly_forcast';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <div className="w-[100vw] h-[100vh] body_color">
      <ToggleButton onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <div className='flex justify-between'>
      <Display_time/>
      <Weather_details/>
      </div>
      <div className=' flex justify-between'>      
      <Days_weather/>
      <Hourly_forcast/>
      </div>

    </div>
    </>
  )
}

export default App
