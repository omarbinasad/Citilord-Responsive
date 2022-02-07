import React from "react";
import "./QueueDiv.css";
import { Link } from "react-router-dom";

const queueDiv = () => {
  return (
    <div className="divcontainer">
      <div className="queue-div-heading-container">
        <h3 className="queue-div-heading">Get A Quick Response</h3>
      </div>

      <div className="buttonContainer">
        <div className="buttonContainerSingle">
          <span>Get Call First</span>
          <Link to="/buyer-request">
            <button className="custom-btn btn-5">
              <span>Buyer</span>
            </button>
          </Link>
        </div>
        <div className="buttonContainerSingle">
          <span>Get Email Alerts</span>
          <Link to="/landlord-renter">
            <button className="custom-btn btn-5">
              <span>Renter Landlord</span>
            </button>
          </Link>
        </div>
        <div className="buttonContainerSingle">
          <span>Get Price Reductions</span>
          <Link to="/landlord-seller">
            <button className="custom-btn btn-5">
              <span>Seller Landlord</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default queueDiv;
