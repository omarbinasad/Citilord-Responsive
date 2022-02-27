import React from "react";
// import PropertyCard from "../Components/PropertyCard/PropertyCard";
import "./AllRooms.css";
import RoomCard from "./RoomCard/RoomCard";
const AllRooms = () => {
  return (
    <div className="container all-properties-container">
      <h3>All Rooms</h3>
      <div className="proeprty-list-container">
        <RoomCard />
        <RoomCard />
      </div>
      <div className="proeprty-list-container">
        <RoomCard />
        <RoomCard />
      </div>
      <div className="proeprty-list-container">
        <RoomCard />
        <RoomCard />
      </div>
    </div>
  );
};

export default AllRooms;
