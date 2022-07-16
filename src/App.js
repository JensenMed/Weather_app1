

import React, {useState, useEffect, useMemo}  from 'react'
import Weather from './components/Weather'
import WeatherList from './components/WeatherList'

const App = () => {

  const[country, setCountry] = useState([])
  const[city, setCity] = useState([])
  const[state, setState] = useState([])

  // const 






  return (
    <div>
       <Weather 
       country= {country}
       city = {city}
       state = {state}
       setCountry = {setCountry}
       setCity = {setCity}
       setState = {setState}
       />

       <WeatherList 
       country = {country}
       state = {state}
       city = {city}

       
       />
       

    </div>
  )
}

export default App