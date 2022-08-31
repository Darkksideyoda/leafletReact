import React, { useState,useEffect } from "react";
import { TileLayer,useMapEvents, MapContainer, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import floorPlan from "../assets/0-Model.svg"
import HotDesk from "./HotDesk";
import CoordinateData from "../mapComponents/coordinates.json"
import RoomArea from "./RoomArea";
import ToiletArea from "./ToiletAreaMale"
import KitchenArea from "./KitchenArea"
import maleLogo from "../assets/male.png"
import femaleLogo from "../assets/femenine.png"
import HotDeskArea from "./HotDeskArea";
import WorkShopArea from "./workShopArea";
import MeetingRoom from "./meetingRoom";
import SalesRoom from "./salesRoom"
import axios from "axios";
import ToiletAreaMale from "./ToiletAreaMale";
import ToiletAreaFemale from "./ToiletAreaFemale";
function LeafletComponent({passTableDataFromOutline}) {
  const [triggerToiletPolygon ,setTriggerToiletPolygon] = useState(true);




  const _created = (e) => console.log(e);


  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        alert(e.latlng);
      },
    });
    return null;
  };
  const purpleOptions = { color: "green" };
  const redOptions = { color: "red" };

  //    onmouseover = (e) =>{
  //     setColorHover(redOptions)
  // }




  return (
    <div style={{ width: "100%", height: "100%" }}>
    <MapContainer
      style={{ backgroundColor: "transparent" }}
      center={[41.1075701, 29.0323177]}
      zoom={20}
      scrollWheelZoom={true}
      attributionControl={false}
    >
         {/* <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  /> */}
      {/* <LocationFinderDummy /> */}
   
   

      <ImageOverlay
        url={floorPlan}
        bounds={[
          [41.10737003518703, 29.031747579574585],
          [41.108004622259045, 29.032501280307773],
          [41.107774231483404, 29.032876789569855],
          [41.107141663179526, 29.03212308883667],
          [41.10736927731662, 29.03174389153719],
        ]}
      />






<ToiletAreaMale
toiletColor={"cyan"}
toiletCoordinate={CoordinateData.TOILET_1}

/>

<ToiletAreaFemale
toiletColor={"cyan"}
toiletCoordinate={CoordinateData.TOILET_2}
/>

<KitchenArea

kitchenId={"R06"}
kitchenName={"R06"}
      RoomColor={"#5CEEB2"}
      kitchenCoordinate={CoordinateData.KITCHEN}
      />


<RoomArea
roomId={"BALCONY_1"}
roomName={"BALCONY"}
roomCoordinates={CoordinateData.BALCONY}
RoomColor={"red"}
/>


<WorkShopArea
roomId={"R04"}
roomName={"R04"}
      workShopColor={"#0A0138"}
      workShopAreaCoordinates={CoordinateData.R04}
      />

<RoomArea
roomId={"R05"}
roomName={"R05"}
      RoomColor={"#2E0404"}
      roomCoordinates={CoordinateData.R05}
      />

<RoomArea
roomId={"R07"}
roomName={"R07"}
      RoomColor={"#2E0404"}
      roomCoordinates={CoordinateData.R07}
      />


<RoomArea
roomId={"R08"}
roomName={"R08"}
      RoomColor={"#2E0404"}
      roomCoordinates={CoordinateData.R08}
      />


<RoomArea
roomId={"R09"}
roomName={"R09"}
      RoomColor={"#2E0404"}
      roomCoordinates={CoordinateData.R09}
      />



<RoomArea
roomId={"R01"}
roomName={"R01"}
      RoomColor={"#215B56"}
      roomCoordinates={CoordinateData.R01}
      />


<SalesRoom

      SalesRoomColor={"green"}
      SalesRoomCoordinates={CoordinateData.R02}
      />


<MeetingRoom

      MettingRoomColor={"orange"}
      MeetingRoomCoordinates={CoordinateData.R03}
      />
        
<HotDesk
      passDeskData={passTableDataFromOutline}
        hotDeskName={"M01"}
        hotDeskId={"01"}
        hotDeskCoordinate={CoordinateData.M01}
      />
        
  
        <HotDeskArea
        RoomColor={"violet"}

           hotDeskAreaCoordinate={CoordinateData.R00}
      />
 
        <HotDesk
         passDeskData={passTableDataFromOutline}
        hotDeskName={"M02"}
        hotDeskId={"02"}
        hotDeskCoordinate={CoordinateData.M02}
      />

  
<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M03"}
        hotDeskId={"03"}
        hotDeskCoordinate={CoordinateData.M03}
      />
<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M04"}
        hotDeskId={"04"}
        hotDeskCoordinate={CoordinateData.M04}
      />
<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M05"}
        hotDeskId={"05"}
        hotDeskCoordinate={CoordinateData.M05}
      />

<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M06"}
        hotDeskId={"06"}
        hotDeskCoordinate={CoordinateData.M06}
      />

<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M07"}
        hotDeskId={"07"}
        hotDeskCoordinate={CoordinateData.M07}
      />

<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M08"}
        hotDeskId={"08"}
        hotDeskCoordinate={CoordinateData.M08}
      />


<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M09"}
        hotDeskId={"09"}
        hotDeskCoordinate={CoordinateData.M09}
      />


<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M10"}
        hotDeskId={"10"}
        hotDeskCoordinate={CoordinateData.M10}
      />



<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M11"}
        hotDeskId={"11"}
        hotDeskCoordinate={CoordinateData.M11}
      />



<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M12"}
        hotDeskId={"12"}
        hotDeskCoordinate={CoordinateData.M12}
      />


<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M13"}
        hotDeskId={"13"}
        hotDeskCoordinate={CoordinateData.M13}
      />



<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M14"}
        hotDeskId={"14"}
        hotDeskCoordinate={CoordinateData.M14}
      />


<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M15"}
        hotDeskId={"15"}
        hotDeskCoordinate={CoordinateData.M15}
      />



<HotDesk
 passDeskData={passTableDataFromOutline}
        hotDeskName={"M16"}
        hotDeskId={"16"}
        hotDeskCoordinate={CoordinateData.M16}
      />




  
    </MapContainer>
  </div>
  );
}

export default LeafletComponent;


