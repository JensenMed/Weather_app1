


import React, {useEffect, useMemo,  useState} from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import { Country, State, City }  from 'country-state-city';
import '../static/main.css'

// import { ICountry, IState, ICity } from 'country-state-city'
// import { getStatesOfCountry } from 'country-state-city/dist/lib/state';





const Weather = (props) => {


  const optionsCountry = useMemo(() => countryList().getData(), [])
  const optionsState = useMemo(() => State.getStatesOfCountry('CA'), [])
  const optionsCity = useMemo(() => City.getCitiesOfCountry('CA'), [])


  const[countryDes, setCountryDes] = useState('')
  const[stateDes, setStateDes] = useState('')
  const[cityDes, setCityDes] = useState('')


  

  console.log(optionsCountry)



  var stateArr = [{}]
  var cityArr = [{}]



  function Data(){
    optionsState.map(state => stateArr.push({
      value:state.isoCode,
      label:state.name
    }))
  
    optionsCity.map(city => cityArr.push({
      value: city.name,
      label: city.name
    }) )

  }
  Data()

  


  
 

  const isTrue = props.isOn
  const setIsTrue = props.setIsOn





  // Country stuff
  function handleSub(e) {
    e.preventDefault()

  }



  //

  function handleCountryChange(e){
    const newCountry = e.value;
    setCountryDes(e.label)
    props.setCountry([newCountry])

  }

  //State stuff

  function handleStateChange(e){
    const newState = e.value
    setStateDes(e.label)
    props.setState([newState])
  }

  //City stuff

  function handleCityChange(e){
    const newCity = e.value
    setCityDes(e.label)
    props.setCity([newCity])
  }

  //button stuff

  function handleButton(){
    setIsTrue(isTrue => !isTrue)
  }

  






  return (
    <div className = 'inputs'>

      <div>
        <form onSubmit={handleSub}>
          <button className = 'sub' type = 'submit' onClick={handleButton} value = {isTrue}>Submit</button>
          <Select className = 'inp1' options = {optionsCountry} type = 'text'  onChange ={handleCountryChange} value = {props.country} placeholder = 'Enter a country...' ></Select>
          <Select className = 'inp2' options={cityArr} type = 'text' onChange ={handleCityChange} value = {props.city} placeholder = 'Enter a city...'></Select>
          <Select className='inp3' options = {stateArr} type = 'text' onChange ={handleStateChange} value = {props.state} placeholder = 'Enter a state...'></Select>
        </form>

        <h1 className='results'>
          Showing results for {cityDes} {stateDes}, {countryDes}
        </h1>
      </div>
      
     
        
    </div>
  )
}

export default Weather