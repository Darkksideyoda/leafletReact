import React, { useState ,useEffect} from "react";
import { Polygon, Popup , ImageOverlay} from "react-leaflet";
import Lottie from "lottie-react";

import "leaflet/dist/leaflet.css";
import CubeWorkAnim from "../assets/91767-cube-workshop.json"





import "../../src/App.css"


const WorkShopStyle = {
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


function WorkShopArea({ workShopAreaCoordinates,workShopColor}) {
  const [colorHover1, setColorHover1] = useState(workShopColor);
  const [PopUpColor,setPopUpColor] = useState(".leaflet-popup-content-wrapper{width:200px;background-color:rgba(130, 0, 61, 1);}.leaflet-popup-tip{background-color:rgba(130, 0, 61, 1)")






  return (
    
    <Polygon 
        fillOpacity={0.5}
      opacity={0}
      eventHandlers={{
        mouseover: (e) => setColorHover1("lime"),
        mouseout: (e) => setColorHover1(workShopColor),

      }}
      pathOptions={{ color: colorHover1 }}
      positions={workShopAreaCoordinates}
    >
      <Popup  style={{}} className="PopUpToilet">

          <div className="positiveContiner" style={WorkShopStyle.positiveContiner}>
            
            <style>
              {PopUpColor}
            </style>
            <div style={{textAlign:"center",margin:"auto",marginTop:"-20px"}}>
            <Lottie
             style={{width:"100px"}}
            animationData={CubeWorkAnim}
            loop={true}
            />
            </div>
            <div  style={{marginBottom:"50px"}}>
            
              <span >This Area is the Workshop Area.</span>
             
            </div>
          </div>


          

        </Popup>
    </Polygon>
  );
}

export default WorkShopArea;
