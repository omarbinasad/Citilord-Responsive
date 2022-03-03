import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import React from "react";
import "./PropertyTab.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    // marginLeft: theme.spacing(2.4),
  },
  btnGroup: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // backgroundColor: "lightgreen",
    // borderColor: "red",
    // width: "1000px",
    // height: "50px",
  },
  eachBtn: {
    backgroundColor: "black",
    // borderColor: "red",
    // width: "120px",
    height: "50px",
    color: "white",
    // fontWeight: "bold",
    borderColor: "lightgreen",
    // borderRadius: "10px",
    "&:hover": {
      backgroundColor: "white",
      zIndex: "1",
      color: "black",
      borderColor: "black",
      // marginLeft: "10px",
      // marginRight: "10px",
      // borderRadius: "15px",
      transition: "0.5s",
      transform: "scale(1.1)",
      borderRadius: "5px",
    },
  },
}));

const PropertyTab = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <ButtonGroup className={classes.btnGroup}>
          <Button className={classes.eachBtn}>Property Details</Button>
          <Button className={classes.eachBtn}>Transport</Button>
          <Button className={classes.eachBtn}>Map</Button>
          <Button className={classes.eachBtn}>Streetview</Button>
          <Button className={classes.eachBtn}>EPC</Button>
          <Button className={classes.eachBtn}>Floorplan</Button>
          <Button className={classes.eachBtn}>Schools</Button>
          <Button className={classes.eachBtn}>Brochure</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default PropertyTab;
