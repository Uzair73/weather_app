// Header.js
import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationArrow, FaBars } from "react-icons/fa";

function Header({ onToggleTheme, isDarkMode, temp_search, setTempSearch, set_DataSearch, updateCoordinates }) {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  // Logic for pressing the enter key button
  const handlePress = (e) => {
    if (e.key === 'Enter') {
      set_DataSearch(e.target.value);
    }
  };

  // Logic for the current location
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          updateCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <header className="flex max-sm:flex-row max-sm:justify-between items-center justify-between p-4">
        
        {/* Dark Mode Toggle with Label */}
        <div className="flex items-center space-x-2 max-sm:hidden">
          <div 
            onClick={onToggleTheme} 
            className={`w-20 px-2 h-8 flex items-center border border-black rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-6 h-6 ${isDarkMode ? "bg-black" : "bg-white"} rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </div>
          <div className={`font-bold py-4 ${isDarkMode ? "text-white" : ""}`}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-[30vw] max-sm:hidden">
          <IoSearchOutline onClick={() => { set_DataSearch(temp_search) }} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 hover:cursor-pointer" />
          <input
            type="search"
            placeholder="Search for your preferred city..."
            onChange={(e) => { setTempSearch(e.target.value) }}
            onKeyPress={handlePress}
            className={`pl-10 p-2 w-full rounded-full border ${isDarkMode ? "bg-[#444444]" : ""} ${isDarkMode ? "text-white" : ""} border-gray-300 focus:outline-none`}
          />
        </div>

        {/* Current Location Button */}
        <button onClick={handleCurrentLocation} className="bg-location_button text-white p-2 rounded-full flex items-center max-sm:order-1">
          <FaLocationArrow className="mr-2" />
          Current Location
        </button>

        {/* Toggle Button on the right for mobile */}
        <FaBars onClick={toggleButton} className="md:hidden max-sm:flex max-sm:justify-end text-xl cursor-pointer" />
      </header>

      {/* Dropdown menu for mobile view */}
      {toggle && (
        <div className={`flex flex-col items-center bg-${isDarkMode ? 'gray-800' : 'white'} shadow-md p-4 space-y-4 max-sm:block`}>
          {/* Dark Mode Toggle for mobile */}
          <div 
            onClick={onToggleTheme} 
            className={`w-20 px-2 h-8 flex items-center border border-black rounded-full p-1 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? 'bg-primary' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-6 h-6 ${isDarkMode ? "bg-black" : "bg-white"} rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </div>

          {/* Search Bar in dropdown */}
          <div className="relative w-full">
            <IoSearchOutline onClick={() => { set_DataSearch(temp_search) }} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 hover:cursor-pointer" />
            <input
              type="search"
              placeholder="Search for your preferred city..."
              onChange={(e) => { setTempSearch(e.target.value) }}
              onKeyPress={handlePress}
              className={`pl-10 p-2 w-full rounded-full border ${isDarkMode ? "bg-[#444444]" : ""} ${isDarkMode ? "text-white" : ""} border-gray-300 focus:outline-none`}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
