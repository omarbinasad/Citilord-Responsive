import {
  Paper,
  Tab,
  Tabs,
  AppBar,
  makeStyles,
  ButtonGroup,
  Button,
  Tooltip,
  IconButton,
  Zoom,
  withStyles,
} from "@material-ui/core";
import {
  Map,
  NearMe,
  Phone,
  LocalGasStation,
  School,
  Place,
  EvStation,
  Train,
  DepartureBoard,
  AccountBalance,
} from "@material-ui/icons";
import { TabPanel, TabContext, TabList } from "@material-ui/lab";
import { styled } from "@material-ui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Banner.css";
// import slidePhoto from "./home.jpg"
// import slidePhoto2 from "./home2.jpg"
// import slidePhoto3 from "./home3.jpg"

const BannerButton = styled(Button)({
  textTransform: "capitalize",
  fontSize: 16,
  margin: "0px 10px ",
  padding: "10px 16px",
  backgroundColor: "rgb(223, 152, 0)",
  color: "white",

  "&:hover": {
    backgroundColor: "rgb(255,185,29)",
  },
  "&:nth-child(2)": {
    backgroundColor: "rgb(0 110 18)",
  },
  "&:nth-child(2):hover": {
    backgroundColor: "#449637",
  },
});

const useStyle = makeStyles((theme) => ({
  sliderTabText: {
    // font: "10px",
    // fontWeight: "bold",
    // color: "black",
    // margin: "0",
    // padding: "0",
    // borderRadius: "5px",
    // backgroundColor: "transparent",
  },
}));

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#F4D03F",
    color: "black",
    boxShadow: theme.shadows[1],
    fontSize: 11,
    fontWeight: "bold",
  },
}))(Tooltip);

const Banner = () => {
  const classes = useStyle();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconToolTipPlace = () => {
    return (
      <LightTooltip title="Browse a Map" TransitionComponent={Zoom}>
        <IconButton>
          <div className="icon-button-style">
            <Place style={{ color: "black", fontSize: "20px" }} />
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: "bold",
                color: "black",
                fontSize: "13px",
              }}
            >
              Place
            </p>
          </div>
        </IconButton>
      </LightTooltip>
    );
  };

  // Map function

  const iconToolTipMap = () => {
    return (
      <LightTooltip
        title="Search properties near you"
        TransitionComponent={Zoom}
      >
        <IconButton>
          <div className="icon-button-style">
            <Map style={{ color: "black", fontSize: "20px" }} />
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: "bold",
                color: "black",
                fontSize: "13px",
              }}
            >
              Map
            </p>
          </div>
        </IconButton>
      </LightTooltip>
    );
  };
  // Station function

  const iconToolTipStation = () => {
    return (
      <LightTooltip
        title="Search properties around a station"
        TransitionComponent={Zoom}
      >
        <IconButton>
          <div className="icon-button-style">
            <DepartureBoard style={{ color: "black", fontSize: "20px" }} />
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: "bold",
                color: "black",
                fontSize: "13px",
              }}
            >
              Station
            </p>
          </div>
        </IconButton>
      </LightTooltip>
    );
  };

  // School function

  const iconToolTipSchool = () => {
    return (
      <LightTooltip
        title="Search properties around a school/college/university"
        TransitionComponent={Zoom}
      >
        <IconButton>
          <div className="icon-button-style">
            <AccountBalance style={{ color: "black", fontSize: "20px" }} />
            <p
              style={{
                margin: "0px",
                padding: "0px",
                fontWeight: "bold",
                color: "black",
                fontSize: "13px",
              }}
            >
              School
            </p>
          </div>
        </IconButton>
      </LightTooltip>
    );
  };

  return (
    <div>
      <div className="banner-wrapper-main d-flex align-items-center justify-content-center">
        <div className="welcome-and-icons-container">
          <div className="slider-content text-white">
            {/* <h1 style={{ fontSize: "70px" }}>Welcome to Citi Lord</h1> */}
          </div>
          {/* banner contents main div start */}
          <div className="banner-contents-div-main">
            <Link to={"/free-valuation"} style={{ textDecoration: "none" }}>
              <BannerButton
                variant="contained"
                style={{ background: "green", fontWeight: "bold" }}
              >
                Free Valuation
              </BannerButton>
            </Link>
            <Link to={"/quick-response"} style={{ textDecoration: "none" }}>
              <BannerButton
                variant="contained"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Quick-response
              </BannerButton>
            </Link>
          </div>
          {/* banner contents main div end */}
          <div className="slider-icons-container">
            {/* slider icons div */}
            <TabContext value={value}>
              <AppBar position="static">
                <TabList
                  onChange={handleChange}
                  aria-label="simple tabs example"
                  backgroundColor="transparent"
                >
                  {/* <Tab
                    label={iconToolTipPlace()}
                    // value="null"
                    className="sliderTabText"
                  /> */}
                  <Tab
                    label={iconToolTipPlace()}
                    // value="null"
                    // className={classes.sliderTabText}
                  />
                  <Tab label={iconToolTipMap()} />
                  {/* <Tab
                    label={<NearMe />}
                    // value="null"
                    className="sliderTabText"
                  /> */}
                  <Tab
                    label={iconToolTipStation()}
                    // value="5"
                    className="sliderTabText"
                  />
                  <Tab
                    label={iconToolTipSchool()}
                    value="null"
                    className="sliderTabText"
                  />
                </TabList>
              </AppBar>
              <TabPanel value="1">
                <ButtonGroup
                  orientation="horizontal"
                  color="primary"
                  // aria-label="vertical outlined primary button group"
                >
                  <Button color="primary">Buy</Button>
                  <Button>Long let</Button>
                  <Button>Short let</Button>
                </ButtonGroup>
              </TabPanel>
              <TabPanel value="2">
                <ButtonGroup
                  orientation="horizontal"

                  // aria-label="vertical outlined primary button group"
                >
                  <Button>Buy</Button>
                  <Button>Long let</Button>
                  <Button>Short let</Button>
                </ButtonGroup>
              </TabPanel>
              <TabPanel value="3">
                <ButtonGroup
                  orientation="horizontal"
                  color="primary"
                  // aria-label="vertical outlined primary button group"
                >
                  <Button>Buy</Button>
                  <Button>Long let</Button>
                  <Button>Short let</Button>
                </ButtonGroup>
              </TabPanel>
              <TabPanel value="4">
                <ButtonGroup
                  orientation="horizontal"
                  color="primary"
                  // aria-label="vertical outlined primary button group"
                >
                  <Button>Buy</Button>
                  <Button>Long let</Button>
                  <Button>Short let</Button>
                </ButtonGroup>
              </TabPanel>
              <TabPanel value="5">
                <ButtonGroup
                  orientation="horizontal"
                  color="primary"
                  // aria-label="vertical outlined primary button group"
                >
                  <Button>Buy</Button>
                  <Button>Long let</Button>
                  <Button>Short let</Button>
                </ButtonGroup>
              </TabPanel>
            </TabContext>

            {/* slider icons div end */}
          </div>
        </div>

        <div className="slideshows">
          <div className="slideshow slideshow--hero">
            <div className="slides">
              <div className="slide slide0"></div>
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--before">
            <div className="slides">
              <div className="slide slide0"></div>
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
          <div className="slideshow slideshow--contrast slideshow--contrast--after">
            <div className="slides">
              <div className="slide slide0"></div>
              <div className="slide slide1"></div>
              <div className="slide slide2"></div>
              <div className="slide slide3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
