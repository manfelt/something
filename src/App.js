import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';

import assetMapping from './assets/assetMapping.json';
import classes from './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import WeatherDetails from './components/weatherdetails/weatherdetails';

function App() {
  return (
    <div className="App">
      
    <Header />
    </div>
  );
}

export default App;
