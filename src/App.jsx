import { useState } from 'react';
import './App.css'
import ToggleButton from './component/header/ToggleButton'
import Display_time from './component/header/display_time/Display_time';
import Weather_details from './component/header/weather-details/Weather_details';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <div className="container w-[100vw] h-[100vh] mx-10 body_color">
      <ToggleButton onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <div className='flex justify-between'>
      <Display_time/>
      <Weather_details/>
      </div>
    </div>
    </>
  )
}

export default App
