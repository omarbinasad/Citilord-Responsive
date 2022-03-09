import React from "react";
import "./QueueDiv.css";
import { Link } from "react-router-dom";
import QuickResponseCard from "../QuickResponseCard/QuickResponseCard";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
const queueDiv = (props) => {
  const { title, buttonName, cardIcon, buttonLink } = props;
  return (
    <div className="quick-response-div">
      <h3>Get A Quick Response</h3>
      <div className="quick-response-fancy-card-div">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="quick-response-fancy-card-each"
        >
          <QuickResponseCard
            title="Get Call First"
            buttonName="Buyer"
            cardIcon={<CallIcon className="fancy-card-icon-each" />}
            buttonLink="/buyer-request"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          className="quick-response-fancy-card-each"
        >
          <QuickResponseCard
            title="Get Email Alerts"
            buttonName="Renter Landlord"
            cardIcon={<EmailIcon className="fancy-card-icon-each" />}
            buttonLink="/landlord-renter"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="quick-response-fancy-card-each"
        >
          <QuickResponseCard
            title="Get Price Reductions"
            buttonName="Seller Landlord"
            cardIcon={<MoneyOffIcon className="fancy-card-icon-each" />}
            buttonLink="/landlord-seller"
          />
        </div>
      </div>
    </div>
  );
};

export default queueDiv;
