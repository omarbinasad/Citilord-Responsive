import React from "react";
import "./QuickResponseCard.css";
import { Link } from "react-router-dom";

const QuickResponseCard = (props) => {
  const { title, buttonName, buttonLink, cardIcon } = props;
  return (
    <div className="fancy-cards">
      <div className="fancy-card">
        <div className="top">
          <div>{cardIcon}</div>
          <div className="caption">
            <h3 className="title">{title}</h3>
            <Link
              to={{
                pathname: buttonLink,
              }}
            >
              <button className="button">{buttonName}</button>
            </Link>
          </div>
        </div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default QuickResponseCard;
