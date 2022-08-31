import React, { useState,Component,useEffect} from "react";
import Slider from "react-slick";
import Lottie from "lottie-react";

import { Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RadarAnim from "../assets/radarAnim.json"
import TemperatureAnim from "../assets/temperature1.json"
import HumidtyAnim from "../assets/humidty1.json"
import HotDeskAreaPhoto from "../assets/deskAreaRealPhoto.jpg"
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


function HotDeskArea({ hotDeskAreaCoordinate,RoomColor}) {



  const [hotDeskAreaTemperature,setHotDeskAreaTemperature] = useState();
  const [hotDeskAreaHumidity,setHotDeskAreaHumidty] = useState()
  

  let femaleToiletData;



  useEffect(()=>{
  
   
      axios.get("https://localhost:7118/api/roomvariables?room=h&variable=t")
    .then(
      response => setHotDeskAreaTemperature(response.data) // before setting ongoing reservations, sort them according to criteria
      )
    .catch(error => { 

      console.log(error.response.data) 
    }
    )
    
      
   
    axios.get("https://localhost:7118/api/roomvariables?room=h&variable=h")
    .then(
      response => setHotDeskAreaHumidty(response.data) // before setting ongoing reservations, sort them according to criteria
      )
    .catch(error => { 
      // what now? 
      console.log(error.response.data) 
    })
    


  },[]); // d

 
 
 




  const [colorHover, setColorHover] = useState(RoomColor);
  const [PopUpColorKitchen,setPopUpColorKitchen] = useState(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(68, 83, 97, 1);}.leaflet-popup-tip{background-color:rgba(68, 83, 97, 1)}")


function onMouseOverFirst(){
  setPopUpColorKitchen(".leaflet-popup-content-wrapper{height:230px;width:200px;background-color:rgba(68, 83, 97, 1);}.leaflet-popup-tip{background-color:rgba(68, 83, 97, 1)}")

      }
      function onMouseOverSecond(){        
        setPopUpColorKitchen(".leaflet-popup-content-wrapper{height:230px;width:200px;background-color:rgba(255, 98, 0, 1);}.leaflet-popup-tip{background-color:rgba(255, 98, 0, 1)}")

      }

  
      function onMouseOverThird(){        
        setPopUpColorKitchen(".leaflet-popup-content-wrapper{height:230px;width:200px;background-color:rgba(7, 60, 110, 1);}.leaflet-popup-tip{background-color:rgba(7, 60, 110, 1);}")

      }

      function onMouseOverFourth(){        
        setPopUpColorKitchen(".leaflet-popup-content-wrapper{height:230px;width:200px;background-color:rgba(234, 255, 185, 1);}.leaflet-popup-tip{background-color:rgba(234, 255, 185, 1);}")

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
      positions={hotDeskAreaCoordinate}
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
              animationData={RadarAnim}
              />
          </div>

          <div>
            <span style={{color:"white"}}>This Area Is Radar Controlled And Responds To Your Behavior At Your Desk.</span>
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
      <span style={{color:"white"}}>The temperature information of the HotDesk Area is displayed here.</span>
        <h2 style={{marginTop:"20px",color:"white", marginLeft:"auto",marginRight:"auto"}}>{hotDeskAreaTemperature}°C</h2>
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
      <span style={{color:"white"}}>The HotDesk Area's Humidity information is displayed here.</span>
        <h2 style={{marginTop:"20px",color:"white", marginLeft:"auto",marginRight:"auto"}}>{hotDeskAreaHumidity}%</h2>
      </div>
      </div>
      

      {/* <div onMouseOver={onMouseOverFourth} style={KitchenStyle.KitchenTemperatureContainer} className="KitchenFoodContainer">
      <div style={KitchenStyle.AnimationContainer}>
             <img
             style={{borderRadius:"10px"}}
                width={150}
             src={HotDeskAreaPhoto}/>
          </div>
      <div style={{display:"flex",margin:"auto",flexDirection:"column"}}>
      <span style={{margin:"auto",color:"white"}}></span>
        <h2 style={{marginTop:"20px",color:"black", marginLeft:"auto",marginRight:"auto"}}>Hot-Desk Area.</h2>
      </div>
      </div>
       */}
                    

        </Slider>

      </Popup>
    </Polygon>
  );
}

export default HotDeskArea;
