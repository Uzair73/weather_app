// Header.js
import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";

function Header({ onToggleTheme, isDarkMode, data_search,set_DataSearch}) {

  // login for press the enter key button
  const handlePress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      }
    }
  return (
    <header className="flex items-center justify-between p-4">
      <div 
        onClick={onToggleTheme} 
        className={`w-20 px-2 h-8 flex items-center border border-black rounded-full p-1 cursor-pointer transition-colors duration-300  ${
          isDarkMode ? 'bg-primary' : 'bg-gray-300'
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? 'translate-x-8' : 'translate-x-0'
          }`}
        />
      </div>
    <div className="relative w-[30vw]">
  <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
  <input
    type="search"
    placeholder="Search for your preferred city..."
    value={data_search}
    onChange={(e)=>{set_DataSearch(e.target.value)}}
    onKeyPress={handlePress}
    className="pl-10 p-2 w-full rounded-full border border-gray-300 focus:outline-none"
  />
</div>
      <button className="bg-location_button text-white p-2 rounded-full flex items-center">
        <FaLocationCrosshairs className="mr-2"/>
        Current Location
      </button>
    </header>
  );
}

export default Header;
