import { Badge } from "@material-ui/core";
import { KingBed } from "@material-ui/icons";
import React from "react";
import "./Cards.css";

const Cards = (props) => {
  return (
    <Badge
      badgeContent={props.name}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      color="primary"
      style={{ margin: "30px" }}
    >
      <div className="card">
        <div className="img"></div>
        <div className="content">
          {/* middle icon container start */}
          <div className="card-icon-container">
            <div className="card-icon-container-bed">
              <i
                class="fas fa-address-card"
                style={{ marginRight: "10px" }}
              ></i>

              <label style={{ fontWeight: "bold" }}>EC1A</label>
            </div>
            <div className="card-icon-contaner-bed">
              <i class="fas fa-home" style={{ marginRight: "10px" }}></i>
              <label style={{ fontWeight: "bold" }}>Flat</label>
            </div>
          </div>
          {/* middle icon container end */}
          <div className="icon-border-div"></div>
          {/* <h3>Short Let London</h3> */}
          <p>
            Spacious 3/4 Bedrooms Ground floor flat with front driveway and back
            garden in Devons Rd
          </p>

          {/* bottom icon container start */}
          <div className="card-icon-container">
            <div className="card-icon-container-bed">
              <KingBed style={{ marginRight: "10px" }} />
              <label style={{ fontWeight: "bold" }}>4 Bed</label>
            </div>
            <div className="card-icon-contaner-bed">
              <i
                className="fas fa-pound-sign"
                style={{ marginRight: "10px" }}
              ></i>
              <label style={{ fontWeight: "bold" }}>400/PM</label>
            </div>
          </div>
          {/* bottom icon container end */}

          <a>
            <button>View More</button>
          </a>
        </div>
      </div>
    </Badge>
  );
};

export default Cards;
