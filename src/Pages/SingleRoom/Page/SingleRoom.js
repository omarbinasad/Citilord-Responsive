import React from "react";
import "./SingleRoom.css";
import RoomCarousel from "../Components/RoomCarousel/RoomCarousel";
import RoomTab from "../Components/RoomTab/RoomTab";
import RoomDescription from "../Components/RoomDescription/RoomDescription";
import KeyFeatures from "../Components/KeyFeatures/KeyFeatures";
import ExtraDetails from "../Components/ExtraDetails/ExtraDetails";

const SingleRoom = () => {
  return (
    <div className="single-room-main">
      <div className="carosel-menutab-description-container">
        <div className="carosel-menutab-container">
          <RoomCarousel />
          <RoomTab />
        </div>
        <RoomDescription />
      </div>
      <KeyFeatures />
      <ExtraDetails />
    </div>
  );
};

export default SingleRoom;
