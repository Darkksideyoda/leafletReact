import React, { useState } from "react";

import { Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";



function RoomArea({ roomCoordinates, roomId, roomName,RoomColor,isFeatured}) {
  const [colorHover, setColorHover] = useState(RoomColor);

  return (
    <Polygon
      stroke={5}
      opacity={0}
      eventHandlers={{
        mouseover: (e) => setColorHover("blue"),
        mouseout: (e) => setColorHover(RoomColor),
      }}
      pathOptions={{ color: colorHover }}
      positions={roomCoordinates}
    >
      <Popup> Oda {roomName} Tıklandı</Popup>
    </Polygon>
  );
}

export default RoomArea;
