import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Slider from './Slider.jsx';
import './App.css';

function App() {
  const [drinks, setDrinks] = useState([])

  const getDrinks = async () => {
    let results = await axios("https://mel-t-cocktail-api.herokuapp.com/")
    setDrinks(results.data)
  }

  useEffect(() => {
    getDrinks()
  }, [])


  return (
    <div className="App">
      <h1>Drinks!</h1>
      <div>
        <Routes>
          <Route path="/" element={<Slider drinks={drinks} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
