import React, { useState ,useEffect} from "react";
import { Polygon, Popup , ImageOverlay} from "react-leaflet";
import Lottie from "lottie-react";

import "leaflet/dist/leaflet.css";
import CalenderAnim from "../assets/calenderAnim.json"

import "../../src/App.css"


const MeetingRoomStyle = {
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




function MeetingRoom({ MeetingRoomCoordinates,MettingRoomColor}) {
    const [colorHover1, setColorHover1] = useState(MettingRoomColor);
    const [PopUpColor,setPopUpColor] = useState(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(197, 219, 255, 1);}.leaflet-popup-tip{background-color:rgba(197, 219, 255, 1);")
  
  
  return (
    <Polygon
      stroke={5}
      opacity={0}
      eventHandlers={{
        mouseover: (e) => setColorHover1("blue"),
        mouseout: (e) => setColorHover1(MettingRoomColor),
      }}
      pathOptions={{ color: colorHover1 }}
      positions={MeetingRoomCoordinates}
    >
      

      <Popup  style={{}} className="PopUpToilet">

<div className="positiveContiner" style={MeetingRoomStyle.positiveContiner}>
  
  <style>
    {PopUpColor}
  </style>
  <div style={{textAlign:"center",margin:"auto",marginTop:"-20px"}}>
  <Lottie
   style={{width:"100px"}}
  animationData={CalenderAnim}
  loop={true}
  />
  </div>
  <div  style={{marginBottom:"50px"}}>
  
    <span style={{color:"rgba(81, 81, 81, 1)"}}>This is the Meeting Room. You can make a reservation for a date you choose with your team.</span>
   
  </div>
</div>

</Popup>


    </Polygon>
  );
}
export default MeetingRoom;













