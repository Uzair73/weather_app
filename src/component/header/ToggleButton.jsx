// Header.js
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { days_weather_data } from '../../api/weather_api'

function Header({ onToggleTheme, isDarkMode, temp_search, setTempSearch ,set_DataSearch,updateCoordinates}) {

  // logic for pressing the enter key button
  const handlePress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      set_DataSearch(e.target.value)
    }
  }

  // logic for the current location
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("the lat and lon is>>", latitude, longitude);
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
      <header className="flex items-center justify-between p-4">
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
        <div className="relative w-[30vw]">
          <IoSearchOutline onClick={()=>{set_DataSearch(temp_search)}} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 hover:cursor-pointer" />
          <input
            type="search"
            placeholder="Search for your preferred city..."
            onChange={(e)=>{setTempSearch(e.target.value)}}
            onKeyPress={handlePress}
            className={`pl-10 p-2 w-full rounded-full border ${isDarkMode ? "bg-[#444444]" : ""} ${isDarkMode ? "text-white" : ""} border-gray-300 focus:outline-none`}
          />
        </div>
        <button onClick={handleCurrentLocation} className="bg-location_button text-white p-2 rounded-full flex items-center">
          <FaLocationArrow className="mr-2"/>
          Current Location
        </button>
      </header>
      <div className={`mx-5 -mt-3 mb-4 font-bold ${isDarkMode ? "text-white" : ""}`}>{isDarkMode ? "Dark Mode" : "Light Mode"}</div>
    </>
  );
}

export default Header;
