import React, { createContext, useState } from 'react'
import axios from 'axios'

export const UserCity = createContext()

export const UserCityContext = ({ children }) => {
   const [city, setCity] = useState('New Delhi');
   const [weatherData, setWeatherData] = useState({})
   const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: { city },
      headers: {
         'X-RapidAPI-Key': import.meta.env.VITE_APP_X_RapidAPI_Key,
         'X-RapidAPI-Host': import.meta.env.VITE_APP_X_RapidAPI_Host
      }
   };

   const fetchData = async () => {
      try {
         const response = await axios.request(options);
         setWeatherData(response.data);
      } catch (error) {
         console.error(error);
      }
   }

   return (
      <UserCity.Provider value={{ city, setCity, fetchData, weatherData }}>
         {children}
      </UserCity.Provider>
   )
}

export default UserCityContext
