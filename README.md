# Weather App with React and Vite

This project is a dynamic Weather App built using React and powered by the Open Weather API. It offers real-time weather updates, forecasts, and various weather-related data visualizations. The app is designed to be responsive, providing an optimal user experience across different devices.

## Features

- Real-time weather data: Fetches and displays current weather conditions using the Open Weather API.
- Search functionality: Allows users to search for weather information by city names.
- Dark mode: Supports a toggle between light and dark themes for user preference.
- Responsive design: Ensures a seamless experience on both desktop and mobile devices.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies with `npm install`.
3. Get an API key from [Open Weather Map](https://openweathermap.org/api) and set it in your `.env` file as `VITE_CURRENT_WEATHER_API=your_api_key_here`.
4. Run the project using `npm run dev`.

## Technologies Used

- React: For building the user interface.
- Vite: As the build tool for fast development and bundling.
- Open Weather API: For fetching weather data.

## Plugins

This project uses the following Vite plugins for an enhanced development experience:

- `@vitejs/plugin-react`: For integrating React with Vite, including support for Fast Refresh.
- `@vitejs/plugin-react-swc`: An alternative to Babel, using SWC for faster compilation times.
