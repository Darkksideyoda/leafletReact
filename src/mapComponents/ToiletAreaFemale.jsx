import React, { useState ,useEffect} from "react";
import { Polygon, Popup , ImageOverlay} from "react-leaflet";
import Lottie from "lottie-react";

import "leaflet/dist/leaflet.css";
import EmptyAnim from "../assets/donelottie.json"
import FullAnim from "../assets/undonelottie.json"
import maleLogo from "../assets/male.png"
import femaleLogo from "../assets/femenine.png"
import axios from "axios";



import "../../src/App.css"

const toiletStyle = {
  positiveContiner:{
    display:"flex",
    flexDirection:"column",
    height:"150px",
    width:"100%",
    color:"white",
    fontSize:"12px",
    fontsWeight:""
  },
  negativeContainer:{
    display:"flex",
    flexDirection:"column",
    height:"150px",
    width:"100%",
    color:"white",
    fontSize:"12px"
  }
}


function ToiletAreaFemale({ toiletCoordinate, toiletId, toiletName,toiletColor,isToiletEmpty,toiletGender,getToiletDataMale,getToiletDataFemale}) {

  const [toiletDataFemale,setToiletDataFemale] = useState();
  
  

  let femaleToiletData;



  useEffect(()=>{
  
   
      axios.get("https://localhost:7118/api/bathroom?gender=f")
    .then(
      response => setToiletDataFemale(response.data) // before setting ongoing reservations, sort them according to criteria
      )
    .catch(error => { 
      // what now? 
      console.log(error.response.data) 
    })
    


  },[]); // d



if(toiletDataFemale == "Door open"){
  femaleToiletData = true
}
else{
  femaleToiletData = false
}


console.log("Kadınlar Tuvaleti:"+femaleToiletData)



  const [colorHover1, setColorHover1] = useState(toiletColor);
  const [PopUpColor,setPopUpColor] = useState(".leaflet-popup-content-wrapper{width:200px;background-color:white;}.leaflet-popup-tip{background-color:white")

  const LadysStringPositive = <span>Women's<img width={11} src={femaleLogo}/>Restroom Currently Empty ! Run Before Someone Gets Before You.</span>
  const LadyStringNegative =<span>Unfortunately,the women's<img width={11} src={femaleLogo}/>toilet is full at the moment. Please don't forget to follow the map frequently.</span>
  const MensStringPositive = <span>Men's <img width={11} src={maleLogo}/> Restroom Currently Empty ! Run Before Someone Gets Before You.</span> 
  const MensStringNegative= <span>Unfortunately, the men's <img width={11} src={maleLogo}/>toilet is full at the moment. Please don't forget to follow the map frequently.</span>

  useEffect(() => {
    if(isToiletEmpty){
      setPopUpColor(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(55, 114, 95, 1);}.leaflet-popup-tip{background-color:rgba(55, 114, 95, 1)}")
    }
    if(isToiletEmpty == false){
      setPopUpColor(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(255, 168, 168, 1);}.leaflet-popup-tip{background-color:rgba(255, 168, 168, 1)}")

    }
    
  }, [PopUpColor]);




  return (
    
    <Polygon 
        fillOpacity={0.5}
      opacity={0}
      eventHandlers={{
        mouseover: (e) => setColorHover1("lime"),
        mouseout: (e) => setColorHover1(toiletColor),
        click:() =>{femaleToiletData?setPopUpColor(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(55, 114, 95, 1);}.leaflet-popup-tip{background-color:rgba(55, 114, 95, 1)}"):      setPopUpColor(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(255, 168, 168, 1);}.leaflet-popup-tip{background-color:rgba(255, 168, 168, 1)}")}

      }}
      pathOptions={{ color: colorHover1 }}
      positions={toiletCoordinate}
    >
      <Popup  style={{}} className="PopUpToilet">

        {
          
          femaleToiletData
          ?//if toilet empty
          
          <div className="positiveContiner" style={toiletStyle.positiveContiner}>
            
            <style>
              {PopUpColor}
            </style>
            <div style={{textAlign:"center",margin:"auto",marginTop:"-20px"}}>
            <Lottie
             style={{width:"100px"}}
            animationData={EmptyAnim}
            loop={true}
            />
            </div>
            <div  style={{marginBottom:"10px"}}>
            
            
              <span>{LadysStringPositive}</span>
              
            </div>
          </div>



          ://if toilet full
          <div style={toiletStyle.negativeContainer} className="negativeContiner" >
             <style>
              {PopUpColor}
            </style>
            <div style={{textAlign:"center",margin:"auto",marginTop:"-20px"}}>
            <Lottie
        
            style={{width:"100px"}}
            animationData={FullAnim}
            loop={true}
            />
            </div>
            <div  style={{marginBottom:"10px"}}>
             
             
              <span>{LadyStringNegative}</span>
              
            </div>
   
          </div>
          
        }
          

        </Popup>
    </Polygon>
  );
}

export default ToiletAreaFemale;
