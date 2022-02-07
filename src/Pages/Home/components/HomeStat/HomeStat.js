import React from "react";
import "./HomeStat.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import HomeChart from "../Chart/HomeChart";

const HomeStat = (props) => {
  return (
    <div className="homestatemaincontainer">
      <div className="homestateconatiner">
        <div className="counterContainer">
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <div> {isVisible ? <HomeChart /> : "Wait"}</div>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                {" "}
                {isVisible ? (
                  <h3 style={{ fontSize: "20", fontWeight: "bold" }}>
                    Property Sold {<CountUp end={51} duration={3} />}
                  </h3>
                ) : (
                  "Wait"
                )}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="counterContainer">
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <div> {isVisible ? <HomeChart /> : "Wait"}</div>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                {" "}
                {isVisible ? (
                  <h3 style={{ fontSize: "20", fontWeight: "bold" }}>
                    Customers Served {<CountUp end={51} duration={3} />}
                  </h3>
                ) : (
                  "Wait"
                )}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="counterContainer">
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <div> {isVisible ? <HomeChart /> : "Wait"}</div>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility={true}>
            {({ isVisible }) => (
              <div>
                {" "}
                {isVisible ? (
                  <h3 style={{ fontSize: "20", fontWeight: "bold" }}>
                    Property {<CountUp end={51} duration={3} />}
                  </h3>
                ) : (
                  "Wait"
                )}
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
};

export default HomeStat;
