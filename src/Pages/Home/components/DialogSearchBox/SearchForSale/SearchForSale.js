import React from "react";
import "./SearchForSale.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const SearchForSale = (props) => {
  const { event2 } = props;
  return (
    <div className="search-heading-input-and-button">
      <h3 className="serch-bar-heading-div">Search Your Dream Home</h3>
      <input
        placeholder="Search by postcode or station"
        className="search-input-div"
        style={{ textAlign: "center" }}
      ></input>
      <Link to="/all-properties-for-sale" style={{ textDecoration: "none" }}>
        <div onClick={event2}>
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
  );
};

export default SearchForSale;
