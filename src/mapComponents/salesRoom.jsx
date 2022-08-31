import React, { useState ,useEffect} from "react";
import { Polygon, Popup , ImageOverlay} from "react-leaflet";
import Lottie from "lottie-react";

import "leaflet/dist/leaflet.css";
import SalesAnim from "../assets/89118-money.json"

import "../../src/App.css"


const SalesRoomStyle = {
  positiveContiner:{
    display:"flex",
    flexDirection:"column",
    height:"110px",
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




function MeetingRoom({ SalesRoomCoordinates,SalesRoomColor}) {
    const [colorHover1, setColorHover1] = useState(SalesRoomColor);
    const [PopUpColor,setPopUpColor] = useState(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(1, 0, 140, 1);}.leaflet-popup-tip{background-color:rgba(1, 0, 140, 1);")
  
  
  return (
    <Polygon
      stroke={5}
      opacity={0}
      eventHandlers={{
        mouseover: (e) => setColorHover1("blue"),
        mouseout: (e) => setColorHover1(SalesRoomColor),
      }}
      pathOptions={{ color: colorHover1 }}
      positions={SalesRoomCoordinates}
    >
      

      <Popup  style={{}} className="PopUpToilet">

<div className="positiveContiner" style={SalesRoomStyle.positiveContiner}>
  
  <style>
    {PopUpColor}
  </style>
  <div style={{textAlign:"center",margin:"auto",marginTop:"-10px"}}>
  <Lottie
   style={{width:"100px"}}
  animationData={SalesAnim}
  loop={true}
  />
  </div>
  <div  style={{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"50px"}}>
  
    <span style={{color:"white"}}>Sales Room</span>
   
  </div>
</div>

</Popup>


    </Polygon>
  );
}
export default MeetingRoom;













