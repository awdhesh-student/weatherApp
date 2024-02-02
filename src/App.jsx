import React from 'react';

import './App.css';
import Header from './componets/Header';
import CardContent from './componets/CardContent';

import { UserCityContext } from './componets/context data/UserCityContext';


function App() {
  const date = new Date().getFullYear();

  return (
    <UserCityContext>
      <Header />
      <CardContent />
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          © {date} Copyright: Weather App
        </div>
      </footer>
    </UserCityContext>
  );
}

export default App;