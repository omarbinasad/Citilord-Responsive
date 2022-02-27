import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./SearchShortlet.css";

const SearchShortlet = (props) => {
  const { event } = props;
  return (
    <div className="search-heading-input-and-button">
      <h3 className="serch-bar-heading-div">
        Search Your Dream Home For Short Let
      </h3>
      <input
        placeholder="Search by postcode or station"
        className="search-input-div"
        style={{ textAlign: "center" }}
      ></input>
      <Link to="/all-properties-short-let" style={{ textDecoration: "none" }}>
        <div onClick={event}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="search-input-button-div"
            style={{
              backgroundColor: "#FACC2E",
              color: "black",
              width: "150px",
            }}
          >
            Search
          </Button>
        </div>
      </Link>
    </div>
    // </div>
  );
};

export default SearchShortlet;
