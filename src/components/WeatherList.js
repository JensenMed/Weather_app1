

import React, {useState, useEffect} from 'react'
import axios from 'axios'







const WeatherList = (props) => {

  const country = props.country
  const state = props.state
  const city = props.city

//   const latitude;
//   const 





  function test(){
    axios.get('http://api.openweathermap.org/geo/1.0/direct?q={London},{ON},{CA}&limit=&appid=b4e7ed643827bbd56ddb52aa6ebf541f')
    .then(res => {
      const data = res.data;
      //work on setting up latituide and l;ogitude
      
      

    })
    .catch(err => console.log(err.data))

   
  }
  test()








  return (
    <div>
    </div>
  )
}

export default WeatherList
