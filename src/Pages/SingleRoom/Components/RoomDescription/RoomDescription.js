import React from "react";
import KingBedIcon from "@material-ui/icons/KingBed";
import BathtubIcon from "@material-ui/icons/Bathtub";
import { Button, makeStyles } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

const useStyles = makeStyles((theme) => ({
  eachBtn: {
    backgroundColor: "black",
    // borderColor: "red",
    width: "150px",
    color: "white",
    // fontWeight: "bold",
    // borderColor: "lightgreen",
    // borderRadius: "10px",
    "&:hover": {
      color: "black",
      //   borderColor: "red",
      //   marginLeft: "10px",
      //   marginRight: "10px",
      //   borderRadius: "10px",
      transition: "0.5s",
      transform: "scale(1.1)",
    },
  },
}));

const RoomDescription = () => {
  const classes = useStyles();
  return (
    <div className="description-container">
      <div className="property-desc-title">
        Spacious 3 bedroom Maisonette with Large Reception & Kitchen in Mile End
      </div>
      <div className="property-desc-icons-container">
        <div className="proeprty-desc-icons">
          <KingBedIcon className="desc-property-icon" />
          <span style={{ marginRight: "10px" }}>Bed</span>
          <span style={{ fontWeight: "bold" }}>6</span>
        </div>
        <div className="proeprty-desc-icons">
          <BathtubIcon className="desc-property-icon" />
          <span style={{ marginRight: "10px" }}>Bathrooms</span>
          <span style={{ fontWeight: "bold" }}>3</span>
        </div>
      </div>
      <div className="property-desc-brief">
        City Lord are pleased to present this wonderful 3 bedrooms 2nd floor
        flat with Large Kitchen, reception and 2 toilets, 1 bathroom available
        from beginning of February.
      </div>
      <div className="property-desc-container-button">
        <Button className={classes.eachBtn}>Virtual Tour</Button>
      </div>
      <div className="property-desc-container-contact">
        <CallIcon className="desc-property-contact-icon" />
        <span>Contact us on: 123456789</span>
      </div>
    </div>
  );
};

export default RoomDescription;
