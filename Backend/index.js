import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/weather-forcast', async (req, res) => {
  const { city, units } = req.query
  const apiKey = process.env.WEATHER_API_KEY;
  console.log('API Key for current weather:', apiKey)
  if (!apiKey) {
    return res.status(500).send("API key is missing");
  }
  const cureent_weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

// current weather api
    try {
        const response = await axios.get(cureent_weather_url);
        res.json(response.data);
    } catch (error) {
        console.error("Failed to fetch weather data", error);
        res.status(500).send("Failed to fetch weather data");
    }
    });

// hourly weather api
app.get('/hourly-forcast', async (req,res)=>{
    const {lat,lon}=req.query;
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        return res.status(500).send("API key is missing");
    }
    console.log('API Key for hourly forcast:', apiKey);
    const hourly_url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`


    try {
        const res_data = await axios.get(hourly_url)
        res.json(res_data.data);
    } catch (error) {
        console.error("Failed to fetch weather data", error);
        res.status(500).send("Failed to fetch weather data") 
    }
    })

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});