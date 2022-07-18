

import React, {useState, useEffect} from 'react'
import axios from 'axios'







const WeatherList = (props) => {

    const[latitude, setLatitude] = useState([])
    const[longitude, setLongitude] = useState([])
    const[description , setDescription] = useState([])



    //weather info

    const weather = props.weather
    const setWeather = props.setWeather
    // console.log(weather)



    //place info 
    const country = props.country
    const state = props.state
    const city = props.city



    // button info

    const clicked = props.isOn




    // api 1 geolocation data

    const url1 = "http://api.openweathermap.org/geo/1.0/direct?q="
    const url2 = "&limit=&appid="
    const key = 'd845f68063b14f8ed4800c279bc2a518'


    //api 2 weather data

    const weather1 = 'https://api.openweathermap.org/data/2.5/weather?lat='
    const weather2 = '&lon='
    const weather3 = '&appid='




    useEffect(() =>{

        if(clicked == true){
            // for(let i = 0; i < 1; i++){

                axios.get('http://api.openweathermap.org/geo/1.0/direct?q={London},{ON},{CA}&limit=&appid=d845f68063b14f8ed4800c279bc2a518')
                .then(res => {
                const data = res.data;
                // console.log(data)
                data.map(response => {
                    // console.log(response)
                    setLatitude([response.lat])
                })
                data.map(response2 => {
                    setLongitude([response2.lon])

                })
                })
                .catch(err => {
                    console.log(err)
                })


        }

    }, [clicked])





    //Runs if latitude changes

    useEffect(() => {

        if(clicked == true){
            async function fetchData(){
                const newUrl = `${weather1}${latitude}${weather2}${longitude}${weather3}${key}`
                const request = await axios.get(newUrl)
                .then(res => {
                    const response = res.data.weather
                    response.map(stuff => {
                        setWeather([stuff.main])
                        
                    })
                    response.map(stuff => {
                        setDescription([stuff.description])
                    })
                    })
                .catch(err => {
                    console.log(err)
                })
                
                
    
            }
            fetchData()

        }
   

    }, [latitude])













  return (
    <div>



        {latitude}
        {longitude}
        {description}
        {weather}

        {/* {clicked == true ? } */}


    </div>
  )
}

export default WeatherList