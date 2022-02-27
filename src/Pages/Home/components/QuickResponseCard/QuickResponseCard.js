import React from "react";
import "./QuickResponseCard.css";
import { Link } from "react-router-dom";

const QuickResponseCard = (props) => {
  const { title, buttonName, buttonLink, cardIcon } = props;
  return (
    <div class="fancy-cards">
      <div class="fancy-card">
        <div class="top">
          <div>{cardIcon}</div>
          <div class="caption">
            <h3 class="title">{title}</h3>
            <Link
              to={{
                pathname: buttonLink,
              }}
            >
              <button className="button">{buttonName}</button>
            </Link>
          </div>
        </div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </div>
  );
};

export default QuickResponseCard;
