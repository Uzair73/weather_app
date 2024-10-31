import { useState } from 'react';
import './App.css'
import ToggleButton from './component/header/ToggleButton'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <div className="container w-[100vw] h-full mx-10 body_color">
      <ToggleButton onToggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
    </div>
    </>
  )
}

export default App
