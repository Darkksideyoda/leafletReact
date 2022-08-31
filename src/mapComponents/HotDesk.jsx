import React, { useState } from "react";
import { Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


function HotDesk({ hotDeskCoordinate, hotDeskId, hotDeskName,passDeskData}) {
  const [colorHover1, setColorHover1] = useState("yellow");


  return (
    <Polygon
        fillOpacity={0.5}
      opacity={0}
      eventHandlers={{
        mouseover: (e) => setColorHover1("lime"),
        mouseout: (e) => setColorHover1("yellow"),
        click:(e)=>passDeskData(hotDeskId)
      }}
      pathOptions={{ color: colorHover1 }}
      positions={hotDeskCoordinate}
    >
      <Popup>Masa {hotDeskName} Tıklandı</Popup>
    </Polygon>
  );
}

export default HotDesk;
