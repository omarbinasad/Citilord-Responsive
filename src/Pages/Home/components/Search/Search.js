import { Button, ButtonGroup, Input, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Search.css";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className="searchBarContainer-main"
    >
      <div className="searchBarContainer">
        {/* <h3 className="serch-bar-heading">Search Your Home</h3> */}
        {/* <h4 style={{ marginBottom: "20px", color: "black" }}>
          Search properties to rent and for sell
        </h4> */}

        <form className="searchForm">
          <div className="input-and-buttons-container">
            <div className="input-container">
              <input
                placeholder="Search by postcode or station"
                className="search-input"
              ></input>
            </div>
            <div className="home-search-btn-div">
              <Link to="/property-to-rent" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className="search-input-button"
                  style={{
                    backgroundColor: "#FACC2E",
                    color: "black",
                    width: "150px",
                  }}
                >
                  To Rent
                </Button>
              </Link>
              <Link to="/property-for-sale" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className="search-input-button"
                  style={{
                    backgroundColor: "#03A404",
                    color: "black",
                    width: "150px",
                  }}
                >
                  For Sale
                </Button>
              </Link>
            </div>
          </div>
          {/* <Autocomplete
          options={findByLet}
          getOptionLabel={(option) => option.let}
          style={{
            width: 400,
            marginLeft: "10px",
            backgroundColor: "#F1F1F1",
          }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Find by" variant="filled" />
          )}
        /> */}
          {/* <Autocomplete
          options={places}
          getOptionLabel={(option) => option.place}
          style={{
            width: 400,
            marginLeft: "10px",
            backgroundColor: "#F1F1F1",
          }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Place" variant="filled" />
          )}
        />
        <Autocomplete
          options={propertyType}
          getOptionLabel={(option) => option.type}
          style={{ width: 400, marginLeft: "10px", backgroundColor: "#F1F1F1" }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Property Type" variant="filled" />
          )}
        />
        <Autocomplete
          options={bedRoomes}
          getOptionLabel={(option) => option.bed}
          style={{ width: 400, marginLeft: "10px", backgroundColor: "#F1F1F1" }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Bedroom" variant="filled" />
          )}
        />
        <Autocomplete
          options={prices}
          getOptionLabel={(option) => option.price}
          style={{
            width: 400,
            marginLeft: "10px",
            backgroundColor: "#F1F1F1",
          }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Price" variant="filled" />
          )}
        /> */}

          {/* <Button
          variant="contained"
          color="secondary"
          style={{
            marginLeft: "10px",
            backgroundColor: "#238324",
            //width: 120,
            height: "48px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 10px 10px 0px",
          }}
        >
          <SearchIcon style={{ fontSize: "30" }} />
        </Button> */}
        </form>
      </div>
    </div>
  );
};

export default Search;

const findByLet = [{ let: "Short let" }, { let: "Long let" }, { let: "Buy" }];

const places = [
  { place: "Bedfordshire" },
  { place: "Berkshire" },
  { place: "Buckinghamshire" },
  { place: "Cambridgeshire" },
  { place: "Cheshire" },
  { place: "Cleveland" },
  { place: "Cornwall" },
  { place: "Cumbria" },
  { place: "Derbyshire" },
  { place: "Devon" },
];

const propertyType = [
  { type: "Flat" },
  { type: "House" },
  { type: "Bungalow" },
  { type: "Maisonette" },
  { type: "Apartment" },
  { type: "Detached" },
  { type: "Semi-Detached" },
  { type: "Terraced" },
  { type: "End of Terrace" },
  { type: "Cottage" },
  { type: "Villa" },
];

const bedRoomes = [
  { bed: "1" },
  { bed: "2" },
  { bed: "3" },
  { bed: "4" },
  { bed: "5" },
  { bed: "6" },
  { bed: "7" },
  { bed: "8" },
  { bed: "9" },
  { bed: "10" },
];

const prices = [
  { price: "£300-£700" },
  { price: "£700-£1000" },
  { price: "£1000-£1500" },
  { price: "£1500-£2000" },
  { price: "£2000-£2500" },
  { price: "£2500-£3000" },
  { price: "£3000-£3500" },
  { price: "£3500-£4000" },
  { price: "£4000-£4500" },
  { price: "£4500-£5000" },
  { price: "£5000-£5500" },
];
