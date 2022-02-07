import { Button, ButtonGroup, makeStyles } from "@material-ui/core";
import React from "react";
import "./PropertyTab.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    margin: theme.spacing(2),
  },
  btnGroup: {
    // backgroundColor: "lightgreen",
    // borderColor: "red",
    // width: "1000px",
    height: "50px",
  },
  eachBtn: {
    backgroundColor: "black",
    // borderColor: "red",
    width: "120px",
    color: "white",
    fontWeight: "bold",
    borderColor: "lightgreen",
    borderRadius: "10px",
    "&:hover": {
      color: "black",
      borderColor: "black",
      marginLeft: "10px",
      marginRight: "10px",
      borderRadius: "10px",
      transition: "0.5s",
      transform: "scale(1.1)",
    },
  },
}));

const PropertyTab = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <ButtonGroup className={classes.btnGroup}>
          <Button className={classes.eachBtn}>One</Button>
          <Button className={classes.eachBtn}>Two</Button>
          <Button className={classes.eachBtn}>One</Button>
          <Button className={classes.eachBtn}>Two</Button>
          <Button className={classes.eachBtn}>One</Button>
          <Button className={classes.eachBtn}>Two</Button>
          <Button className={classes.eachBtn}>One</Button>
          <Button className={classes.eachBtn}>Two</Button>
          <Button className={classes.eachBtn}>Two</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default PropertyTab;
