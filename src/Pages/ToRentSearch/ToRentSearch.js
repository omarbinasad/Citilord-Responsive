import { Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
// import "./ToRentSearch.css";

const ToRentSearch = () => {
  return (
    <div className="sale-form-container">
      <div className="sale-form">
        <div className="form-heading">
          <h3>Property to rent</h3>
        </div>
        <form>
          <div className="price-input-container">
            <span className="field-title">Property Price</span>
            <div className="input-field">
              <Autocomplete
                id="combo-box-demo"
                options={priceRanges}
                getOptionLabel={(option) => option.value}
                style={{ width: "180px" }}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Minimum Price"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div className="input-field">
              <Autocomplete
                id="combo-box-demo"
                options={priceRanges}
                getOptionLabel={(option) => option.value}
                style={{ width: "180px" }}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Maximum Price"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
          <div className="bed-input-container">
            <span className="field-title" style={{ marginLeft: "-57px" }}>
              Number of Bedrooms
            </span>
            <div className="input-field">
              <Autocomplete
                id="combo-box-demo"
                options={bedNumbers}
                getOptionLabel={(option) => option.bed}
                style={{ width: "180px" }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Minimum" variant="outlined" />
                )}
              />
            </div>
            <div className="input-field">
              <Autocomplete
                id="combo-box-demo"
                options={bedNumbers}
                getOptionLabel={(option) => option.bed}
                style={{ width: "180px" }}
                size="small"
                renderInput={(params) => (
                  <TextField {...params} label="Maximum" variant="outlined" />
                )}
              />
            </div>
          </div>
          <div className="building-house-input-container">
            <span className="field-title">Property Type</span>
            <div className="input-field">
              <Autocomplete
                id="combo-box-demo"
                options={buildingTypes}
                getOptionLabel={(option) => option.type}
                style={{ width: "180px" }}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type of Building"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div className="input-field">
              <Autocomplete
                id="combo-box-demo"
                options={houseTypes}
                getOptionLabel={(option) => option.type}
                style={{ width: "180px" }}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type of House"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>
          <div className="search-button-container">
            <Button
              variant="contained"
              style={{
                width: "200px",
                height: "50px",
                color: "black",
                backgroundColor: "#FFB91D",
                fontWeight: "bold",
              }}
            >
              Search Properties
            </Button>
          </div>
        </form>
      </div>
    </div>

    // <div className="sale-form-container">
    //   <div className="sale-form">
    //     <div className="form-heading">
    //       <h3>Property to rent</h3>
    //     </div>
    //     <form>
    //       <div className="price-input-container">
    //         <div className="input-field">
    //           <Autocomplete
    //             id="combo-box-demo"
    //             options={priceRanges}
    //             getOptionLabel={(option) => option.value}
    //             style={{ width: "20vh" }}
    //             size="small"
    //             renderInput={(params) => (
    //               <TextField
    //                 {...params}
    //                 label="Minimum Price"
    //                 variant="standard"
    //               />
    //             )}
    //           />
    //         </div>
    //         <div className="input-field">
    //           <Autocomplete
    //             id="combo-box-demo"
    //             options={priceRanges}
    //             getOptionLabel={(option) => option.value}
    //             style={{ width: "20vh" }}
    //             size="small"
    //             renderInput={(params) => (
    //               <TextField
    //                 {...params}
    //                 label="Maximum Price"
    //                 variant="standard"
    //               />
    //             )}
    //           />
    //         </div>
    //       </div>
    //       <div className="bed-input-container">
    //         <div className="input-field">
    //           <Autocomplete
    //             id="combo-box-demo"
    //             options={bedNumbers}
    //             getOptionLabel={(option) => option.bed}
    //             style={{ width: "20vh" }}
    //             size="small"
    //             renderInput={(params) => (
    //               <TextField
    //                 {...params}
    //                 label="Number of Bedrooms"
    //                 variant="standard"
    //               />
    //             )}
    //           />
    //         </div>
    //         <div className="input-field">
    //           <Autocomplete
    //             id="combo-box-demo"
    //             options={bedNumbers}
    //             getOptionLabel={(option) => option.bed}
    //             style={{ width: "20vh" }}
    //             size="small"
    //             renderInput={(params) => (
    //               <TextField
    //                 {...params}
    //                 label="Number of Bedrooms"
    //                 variant="standard"
    //               />
    //             )}
    //           />
    //         </div>
    //       </div>
    //       <div className="building-house-input-container">
    //         <div className="input-field">
    //           <Autocomplete
    //             id="combo-box-demo"
    //             options={buildingTypes}
    //             getOptionLabel={(option) => option.type}
    //             style={{ width: "20vh" }}
    //             size="small"
    //             renderInput={(params) => (
    //               <TextField
    //                 {...params}
    //                 label="Type of Building"
    //                 variant="standard"
    //               />
    //             )}
    //           />
    //         </div>
    //         <div className="input-field">
    //           <Autocomplete
    //             id="combo-box-demo"
    //             options={houseTypes}
    //             getOptionLabel={(option) => option.type}
    //             style={{ width: "20vh" }}
    //             size="small"
    //             renderInput={(params) => (
    //               <TextField
    //                 {...params}
    //                 label="Type of House"
    //                 variant="standard"
    //               />
    //             )}
    //           />
    //         </div>
    //       </div>
    //       <div className="search-button-container">
    //         <Button
    //           variant="contained"
    //           style={{
    //             width: "200px",
    //             height: "50px",
    //             color: "black",
    //             backgroundColor: "#FFB91D",
    //             fontWeight: "bold",
    //           }}
    //         >
    //           Search Properties
    //         </Button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

const priceRanges = [
  { value: "£50,000" },
  { value: "£100,000" },
  { value: "£150,000" },
  { value: "£200,000" },
  { value: "£250,000" },
  { value: "£300,000" },
  { value: "£350,000" },
  { value: "£400,000" },
  { value: "£450,000" },
  { value: "£500,000" },
  { value: "£550,000" },
  { value: "£600,000" },
  { value: "£650,000" },
  { value: "£700,000" },
  { value: "£750,000" },
  { value: "£800,000" },
  { value: "£850,000" },
  { value: "£900,000" },
  { value: "£950,000" },
  { value: "£1,000,000" },
];

const bedNumbers = [
  { bed: "1" },
  { bed: "2" },
  { bed: "3" },
  { bed: "4" },
  { bed: "5" },
];

const buildingTypes = [
  { type: "Flat" },
  { type: "House" },
  { type: "Bungalow" },
  { type: "Maisonette" },
  { type: "Apartment" },
  { type: "Cottage" },
  { type: "Villa" },
];

const houseTypes = [
  { type: "Detached" },
  { type: "Semi-Detached" },
  { type: "Mid-terrace" },
  { type: "End-terrace" },
];

export default ToRentSearch;
