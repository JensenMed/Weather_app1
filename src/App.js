

import React, {useState, useEffect, useMemo}  from 'react'
import Weather from './components/Weather'
import WeatherList from './components/WeatherList'
import Content from './components/Content'

const App = () => {

  const[country, setCountry] = useState([])
  const[city, setCity] = useState([])
  const[state, setState] = useState([])
  const[isOn , setIsOn] = useState(false)
  const[weather, setWeather] = useState([])







  return (
    <div>
       <Weather 
       country= {country}
       city = {city}
       state = {state}
       setCountry = {setCountry}
       setCity = {setCity}
       setState = {setState}
       isOn = {isOn}
       setIsOn = {setIsOn}
       />

       <WeatherList 
       country = {country}
       state = {state}
       city = {city}
       isOn = {isOn}
       weather = {weather}
       setWeather = {setWeather}
       

       />

       <Content 

       weather = {weather}
       
       
       />
       

    </div>
  )
}

export default App