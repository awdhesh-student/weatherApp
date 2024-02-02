
import React, { useContext, useEffect, useState } from 'react'

import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

import { UserCity } from './context data/UserCityContext';

const CardContent = () => {
   const { city, fetchData, weatherData } = useContext(UserCity)
   useEffect(() => {
      fetchData()
   }, [])

   const conversionTime = (time) => {
      const oldTime = new Date(time * 1000);
      const newTime = oldTime.toLocaleTimeString();
      return newTime;
   }
   return (
      <div className='container'>
         <h1 className="mb-4 fw-bold">Weather for <span id="cityName">{city}</span></h1>
         <div className="card-container">
            <div className="card-wrapper">
               <div className="mx-3 card light">
                  <div className="text-overlay">
                     <h2>Temperature Info</h2>
                     <h3 className="card-title pricing-card-title text-center">
                        <span id="heading">{weatherData.max_temp}&#176;C</span>
                     </h3>
                     <div className="details-text">
                        <ul className="list-unstyled mt-3 mb-4">
                           <li>Temperature : <span id="temp"></span><span> {weatherData.max_temp}&#176;C</span></li>
                           <li>Min Temperature : <span id="min_temp"></span><span> {weatherData.min_temp}&#176;C</span></li>
                           <li>Max Temperature : <span id="max_temp"></span><span>{weatherData.max_temp}&#176;C</span></li>
                        </ul>
                     </div>
                  </div>
                  <div className="purchase-button-container">
                     <h2 className="back-h2">Temperature Info</h2>
                     <DeviceThermostatRoundedIcon style={{ fontSize: '3rem' }} />

                  </div>
               </div>
            </div>
            <div className="card-wrapper">
               <div className="card dark">
                  <div className="text-overlay">
                     <h2>Humidity Info</h2>
                     <h3 className="card-title pricing-card-title text-center">
                        <span id='heading'>{weatherData.cloud_pct}%</span>
                     </h3>
                     <div className="details-text">
                        <ul className="list-unstyled mt-3 mb-4">
                           <li>Cloud PCT : <span id="cloud_pct">{weatherData.cloud_pct}%</span></li>
                           <li>Feels Like : <span id="feels_like"></span><span> {weatherData.feels_like}&#176;C</span></li>
                           <li>Humidity : <span id="humidity">{weatherData.humidity}</span>%</li>
                        </ul>
                     </div>
                  </div>
                  <div className="purchase-button-container">
                     <h2 className="back-h2">Humidity Info</h2>
                     <WaterDropRoundedIcon style={{ fontSize: '3rem' }} />
                  </div>
               </div>
            </div>
            <div className="card-wrapper">
               <div className="mx-3 card light">
                  <div className="text-overlay">
                     <h2>Sun Info</h2>
                     <h3 className="card-title pricing-card-title text-center">
                        <span id="heading">{conversionTime(weatherData.sunrise)}</span>
                     </h3>
                     <div className="details-text">
                        <ul className="list-unstyled mt-3 mb-4">
                           <li>Wind speed : <span id="wind_speed">{weatherData.wind_speed}</span> km/hr</li>
                           <li>Sunrise : <span id="sunrise">{conversionTime(weatherData.sunrise)}</span></li>
                           <li>Sunset : <span id="sunset">{conversionTime(weatherData.sunset)}</span></li>
                        </ul>
                     </div>
                  </div>
                  <div className="purchase-button-container">
                     <h2 className="back-h2">Sun Info</h2>
                     <WbSunnyRoundedIcon style={{ fontSize: '3rem' }} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CardContent
