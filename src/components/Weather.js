


import React from 'react'
// import countryList from 'react-select-country-list'



const Weather = (props) => {
  // console.log(props.country)




  // Country stuff
  function handleSub(e) {
    e.preventDefault()

  }

  function handleCountryChange(e){
    
    const newCountry = e.target.value;
    props.setCountry([newCountry])

  }

  //State stuff

  function handleStateChange(e){
    const newState = e.target.value
    props.setState([newState])
  }

  //City stuff

  function handleCityChange(e){
    const newCity = e.target.value
    props.setCity([newCity])
  }

  






  return (
    <div>

      <div>
        <form onSubmit={handleSub}>
          <button type = 'submit'>Add</button>
          <input type = 'text'  onChange ={handleCountryChange} value = {props.country} placeholder = 'Enter a city...'></input>
          <input type = 'text' onChange ={handleCityChange} value = {props.city} placeholder = 'Enter a city...'></input>
          <input type = 'text' onChange ={handleStateChange} value = {props.state} placeholder = 'Enter a city...'></input>
        </form>

        <h1>
          Showing results for {props.city} {props.state}, {props.country}
        </h1>
      </div>
      
     
        
    </div>
  )
}

export default Weather