import React from 'react';
import hourly_data from '../../api/db';

const HourlyForecast = () => {
  return (
    <div className="mx-auto my-4 h-80 px-4 py-6 w-[90vw] max-w-[800px] rounded-[18px] shadow-md font-[Poppins] bg-primary box_shadow">
      <h2 className="text-center font-semibold text-xl mb-4">Hourly Forecast:</h2>
      <div className="flex justify-evenly">
        {hourly_data.map((hour, i) => (
          <div
            key={i}
            className={`w-[15vw] max-w-[90px] p-4 rounded-[18px] flex flex-col items-center text-center ${
              hour.id % 2 === 0 ? 'bg-[#F88508]' : 'bg-[#443D64] text-white'
            }`}
          >
            <span className="text-lg font-semibold">{hour.time}</span>
            <img src={hour.icon} alt="weather icon" className="w-10 h-10 my-2" />
            <span className="text-lg font-semibold">{hour.temperature}</span>
            <img src={hour.icon} alt="wind" />
            <span className="text-sm mt-1">{hour.wind}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
