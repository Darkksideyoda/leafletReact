import React, { useState,Component,useEffect} from "react";
import Slider from "react-slick";
import Lottie from "lottie-react";

import { Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MushroomAnim from "../assets/mushroom.json"
import TemperatureAnim from "../assets/temperature1.json"
import HumidtyAnim from "../assets/humidty1.json"
import axios from "axios";



const KitchenStyle={
  KitchenFoodContainer:{
      width:"100%",
      height:"100%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      margin:"auto",

      
  },
  AnimationContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    height:"100%",
    
  },
  KitchenTemperatureContainer:{
    width:"100%",
    height:"10px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    margin:"auto",

  }
}


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,visibility:"hidden",marginRight:"3px",display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, visibility:"hidden",marginLeft:"3px", display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}


function KitchenArea({ kitchenCoordinate,RoomColor,isKitchenHaveFood}) {
 
 
  const [kitchenTemperature,setKitchenTemperature] = useState();
  const [kitchenHumidty,setKitchenHumidty] = useState()
  

  let femaleToiletData;



  useEffect(()=>{
  
   
      axios.get("https://localhost:7118/api/roomvariables?room=k&variable=t")
    .then(
      response => setKitchenTemperature(response.data) // before setting ongoing reservations, sort them according to criteria
      )
    .catch(error => { 
      // what now? 
      console.log(error.response.data) 
    })
    
      
   
    axios.get("https://localhost:7118/api/roomvariables?room=k&variable=h")
    .then(
      response => setKitchenHumidty(response.data) // before setting ongoing reservations, sort them according to criteria
      )
    .catch(error => { 
      // what now? 
      console.log(error.response.data) 
    })
    


  },[]); // d

 
 
 
 
 
 
 
 
 
 
 
 
  const [colorHover, setColorHover] = useState(RoomColor);
  const [PopUpColorKitchen,setPopUpColorKitchen] = useState(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(244, 205, 130, 1);}.leaflet-popup-tip{background-color:rgba(244, 205, 130, 1)}")


function onMouseOverFirst(){
  setPopUpColorKitchen(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(244, 205, 130, 1);}.leaflet-popup-tip{background-color:rgba(244, 205, 130, 1)}")

      }
      function onMouseOverSecond(){        
        setPopUpColorKitchen(".leaflet-popup-content-wrapper{height:230px;width:200px;background-color:rgba(255, 98, 0, 1);}.leaflet-popup-tip{background-color:rgba(255, 98, 0, 1)}")

      }

  
      function onMouseOverThird(){        
        setPopUpColorKitchen(".leaflet-popup-content-wrapper{height:230px;width:200px;background-color:rgba(7, 60, 110, 1);}.leaflet-popup-tip{background-color:rgba(7, 60, 110, 1);}")

      }



  const sliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };
  return (
    <Polygon
      stroke={5}
      opacity={0}
      eventHandlers={{
        mouseover: (e) => setColorHover("blue"),
        mouseout: (e) => setColorHover(RoomColor),
        // click:(e) =>setPopUpColorKitchen(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(55, 114, 95, 1);}.leaflet-popup-tip{background-color:rgba(55, 114, 95, 1)}")

      }}
      pathOptions={{ color: colorHover }}
      positions={kitchenCoordinate}
    >
    
      <Popup  style={{backgroundColor:"red"}} >
      <Slider {...sliderSetting}>


   
        
        <div onMouseOver={onMouseOverFirst} style={KitchenStyle.KitchenFoodContainer} className="KitchenFoodContainer">

        <style>
        {PopUpColorKitchen}
      </style>
          <div style={KitchenStyle.AnimationContainer}>
              <Lottie
              style={{width:"100px"}}
              animationData={MushroomAnim}
              />
          </div>

          <div>
            <span style={{color:"black"}}>All the information about the kitchen is here. If there is food, you will receive notification from your phone and website. Also, the smiling/sad face below will inform you.</span>
          </div>




      </div>

      <div onMouseOver={onMouseOverSecond} style={KitchenStyle.KitchenTemperatureContainer} className="KitchenFoodContainer">
      <div style={KitchenStyle.AnimationContainer}>
              <Lottie
              style={{width:"100px"}}
              animationData={TemperatureAnim}
              />
          </div>
      <div style={{margin:"auto",flexDirection:"column", display:"flex",}}>
      <span style={{color:"white"}}>The temperature information of the kitchen is displayed here.</span>
        <h2 style={{marginTop:"20px",color:"white", marginLeft:"auto",marginRight:"auto"}}>{kitchenTemperature}°C</h2>
      </div>
      </div>




      <div onMouseOver={onMouseOverThird} style={KitchenStyle.KitchenTemperatureContainer} className="KitchenFoodContainer">
      <div style={KitchenStyle.AnimationContainer}>
              <Lottie
              style={{width:"100px"}}
              animationData={HumidtyAnim}
              />
          </div>
      <div style={{margin:"auto",flexDirection:"column", display:"flex",}}>
      <span style={{color:"white"}}>The kitchen's Humidity information is displayed here.</span>
        <h2 style={{marginTop:"20px",color:"white", marginLeft:"auto",marginRight:"auto"}}>{kitchenHumidty}%</h2>
      </div>
      </div>
      


        </Slider>

      </Popup>
    </Polygon>
  );
}

export default KitchenArea;
