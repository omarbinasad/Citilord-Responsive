import React from "react";
import { Button } from "@material-ui/core";
import "./QuickLinksDiv.css";
import { Description, Home, House } from "@material-ui/icons";
import { Link } from "react-router-dom";

const QuickLinksDiv = () => {
  return (
    <div className="quick-response-container-main">
      <div className="page-title-container">
        {/* <div className="page-title">Get a quick response</div> */}
      </div>
      <div className="button-and-title-conatiner">
        <div className="button-and-title-container-each">
          <h4>Register for a new Property</h4>

          <Link to="/tenant-registration">
            <Button variant="contained" className="custom-button-each">
              <Home className="button-icon-quick-links-div" />
            </Button>
          </Link>
          <p style={{ textAlign: "center" }}>
            If you are looking to rent a property now or in future, please
            register your details here.
          </p>
        </div>
        <div className="button-and-title-container-each">
          <h4>Instant online property valuation in 30 seconds</h4>

          <Button variant="contained" className="custom-button-each">
            <House className="button-icon-quick-links-div" />
          </Button>

          <p style={{ textAlign: "center" }}>
            The valuation to see what you can achieve for your property.
          </p>
        </div>
        <div className="button-and-title-container-each">
          <h4>Request a property valuation</h4>
          <Link to="/free-valuation">
            <Button variant="contained" className="custom-button-each">
              <Description className="button-icon-quick-links-div" />
            </Button>
          </Link>
          <p style={{ textAlign: "center" }}>
            Setting a successful rental price for your property is a balance
            Citi Lord can help you with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickLinksDiv;
