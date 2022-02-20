import React from "react";
import "./KeyFeatures.css";

const KeyFeatures = () => {
  return (
    <div className="key-features-container">
      <div className="key-features-left-div">
        <div className="key-features-title-div">Key Features</div>
        <div className="key-features-descr-div">
          <ul>
            <li>Large Living Room</li>
            <li>Large Kitchen</li>
            <li>Gas Central Heating </li>
            <li>Double Glazing </li>
            <li>Laminated Flooring </li>
          </ul>
        </div>
      </div>
      <div className="key-features-right-div">
        <div className="key-features-title-div">Property Description</div>
      </div>
      <div className="key-features-right-div">
        <div className="key-features-title-div">Summary</div>
      </div>
    </div>
  );
};

export default KeyFeatures;
