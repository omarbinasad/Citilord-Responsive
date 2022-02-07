import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div>
      <div className="top-bar px-5">
        <div>
          <a
            href="tel:+012 345 678"
            className="text-decoration-none text-secondary fs-4"
          >
            <i className="fas fa-phone-square"></i> +012 345 678
          </a>
        </div>
        <div>
          <i className="fab fa-facebook-square text-secondary fs-3 me-3"></i>
          <i className="fab fa-twitter-square text-secondary fs-3 me-3"></i>
          <i className="fab fa-linkedin text-secondary fs-3 me-3"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
