
import React, { useEffect, useState } from 'react'
import WeatherContent from './images'
import '../static/main.css'

// import Cloudy from '../backgrounds/Cloudy.jpg'




const Content = (props) => {


  
  
  const[image, setImage] = useState({
    title:"",
    content: "",
    id: 0
  })
  const weather = props.weather

 

  //useEffect hook to setState
  useEffect(()=> {
    WeatherContent.map(res =>{

      if(res.title == weather){
        setImage({
          title: res.title,
          content: res.content,
          id: res.id,
         } )
      }
  })

  },[weather])


  


  return (
    <div >
      <img  className = 'bcgrnd' src= {image.content}/>
    </div>
  )
}

export default Content