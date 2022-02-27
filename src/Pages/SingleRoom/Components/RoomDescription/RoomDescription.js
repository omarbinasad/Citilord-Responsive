import React, { useState } from "react";
import KingBedIcon from "@material-ui/icons/KingBed";
import BathtubIcon from "@material-ui/icons/Bathtub";
import "./RoomDescription.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleClose();
    alert("Your viewing time has been set");
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="description-container">
      <div className="property-desc-title">Standard Room with King Bed</div>
      <div className="property-desc-icons-container">
        <div className="proeprty-desc-icons">
          <KingBedIcon className="desc-property-icon" />
          <span style={{ marginRight: "10px" }}>Bed</span>
          <span style={{ fontWeight: "bold" }}>1</span>
        </div>
        <div className="proeprty-desc-icons">
          <BathtubIcon className="desc-property-icon" />
          <span style={{ marginRight: "10px" }}>Bathrooms</span>
          <span style={{ fontWeight: "bold" }}>1</span>
        </div>
      </div>
      <div className="property-desc-brief">
        City Lord are pleased to present this wonderful Room with Kitchen and 1
        toilets, 1 bathroom available from beginning of February.
      </div>
      <div className="property-desc-container-button">
        <Button className={classes.eachBtn}>Virtual Tour</Button>
      </div>
      <div className="property-desc-container-button">
        <Button className={classes.eachBtn} onClick={handleOpen}>
          Arrange Viewing
        </Button>
      </div>
      <div className="property-desc-container-contact">
        <CallIcon className="desc-property-contact-icon" />
        <span>Contact us on: 123456789</span>
      </div>
      {/* Modal Start */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Select your best time and date for viewing the property"}
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <DialogContentText id="alert-dialog-description">
            If you are new to City Lord and would like a property valuation,
            please complete the form and a member of our staff team will contact
            you. <Link to="/free-valuation">Please click here</Link>
          </DialogContentText> */}
          {/* <ArrangeViewCarosel /> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="datetime-local"
                // placeholder="Datetime"
                {...register("datetime", {})}
                style={{
                  marginBottom: "20px",
                  height: "50px",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "2px solid green",
                }}
              />
              <input
                style={{
                  width: "100px",
                  background: "lightgreen",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                }}
                type="submit"
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>

      {/* Modal End */}
    </div>
  );
};

export default RoomDescription;
