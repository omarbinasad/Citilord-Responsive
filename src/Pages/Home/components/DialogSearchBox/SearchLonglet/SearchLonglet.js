import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./SearchLonglet.css";

const SearchLonglet = (props) => {
  const { event1 } = props;
  return (
    <div className="search-heading-input-and-button">
      <h3 className="serch-bar-heading-div">
        Search Your Dream Home For Long Let
      </h3>
      <input
        placeholder="Search by postcode or station"
        className="search-input-div"
        style={{ textAlign: "center" }}
      ></input>
      <Link to="/all-properties-long-let" style={{ textDecoration: "none" }}>
        <div onClick={event1}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="search-input-button-div"
            style={{
              backgroundColor: "#FFAE00",
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

export default SearchLonglet;
