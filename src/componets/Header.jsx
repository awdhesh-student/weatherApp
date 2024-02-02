import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserCity } from './context data/UserCityContext';



const Header = () => {
   const { city, setCity, fetchData } = useContext(UserCity);
   const handleChange = (e) => {
      setCity(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (city.trim() !== "") {
         await setCity(city.trim());
         fetchData();
      } else {
         alert("Please enter a valid city");
      }
   };
   return (
      <nav className="navbar navbar-expand-lg bg-dark">
         <div className="container-fluid">
            <a className="text-light navbar-brand" href={"index.html"}><h3>Weather App</h3></a>
            <div className="d-flex justify-content-end" id="navbarSupportedContent">
               <form className="d-flex" onSubmit={handleSubmit}>
                  <input name='city' value={city} onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" required />
                  <button className="btn btn-outline-info" type="submit">Search</button>
               </form>
            </div>
         </div>
      </nav>
   )
}

export default Header
