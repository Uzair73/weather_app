import { useState } from 'react';
import './App.css'
import ToggleButton from './component/header/ToggleButton'
import Display_time from './component/header/display_time/Display_time';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <div className="container w-[100vw] h-[100vh] mx-10 body_color">
      <ToggleButton onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Display_time/>
    </div>
    </>
  )
}

export default App
