import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./QuickResponse.css";

const QuickResponse = () => {
  return (
    <div className="quick-response-container-main">
      <div className="page-title-container">
        <div>
          <h3 className="quick-response-div-title">Get a quick response</h3>
        </div>
      </div>
      <div className="button-and-title-conatiner">
        <div className="button-and-title-container-each">
          <h4>Get Call First</h4>
          <Link to="/buyer-request" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="custom-button-each">
              Buyer
            </Button>
          </Link>
        </div>
        <div className="button-and-title-container-each">
          <h4>Get Email Alerts</h4>
          <Link to="/landlord-renter" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="custom-button-each">
              Renter Landlord
            </Button>
          </Link>
        </div>
        <div className="button-and-title-container-each">
          <h4>Get Price Reductions</h4>
          <Link to="/landlord-seller" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="custom-button-each">
              Seller Landlord
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickResponse;
