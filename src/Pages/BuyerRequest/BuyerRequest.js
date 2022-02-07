import { Button, makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState } from "react";
import "./BuyerRequest.css";
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // marginBottom: theme.spacing(2),
    margin: theme.spacing(1),

    width: 200,
  },
  textFieldAuto: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  iconButton: {
    margin: theme.spacing(1),
  },
  iconButtonIncrsDecrse: {
    margin: theme.spacing(1),
  },
  subHeading: {
    margin: theme.spacing(1),
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
}));

const BuyerRequest = () => {
  const [inputFields, setInputFields] = useState([
    {
      firstName: "",
      lastName: "",
      contactNumber: "",
      city: "",
      postCode: "",
      minPrice: "",
      maxPrice: "",
      propertyType: "",
      houseType: "",
      bedrooms: "",
      bathrooms: "",
      tenure: "",
      chainFree: "",
      lift: "",
      garden: "",
      suitableContactTime: "",
      suitableContactDate: "",
      expectedTimeToBuy: "",
    },
  ]);

  const classes = useStyles();

  const handleChangeInput = (event, index) => {
    const { name, value } = event.target;
    const newInputFields = [...inputFields];
    newInputFields[index][name] = value;
    setInputFields(newInputFields);
    console.log(inputFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };
  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-heading">
          <h3> Buyer Request</h3>
        </div>
        <form>
          {/* personal information start */}
          <span className={classes.subHeading}>Personal Information</span>
          <div className="personal-info-fields-colunm">
            <div className="property-info-fields-row">
              <TextField
                name="firstName"
                label="First Name"
                variant="outlined"
                size="small"
                className={classes.textField}
                // value={inputFields.firstName}
                // onChange={(event) => handleChangeInput(event)}
              ></TextField>
              <TextField
                name="lastName"
                label="Last Name"
                variant="outlined"
                size="small"
                className={classes.textField}
                // value={inputFields.firstName}
                // onChange={(event) => handleChangeInput(event)}
              ></TextField>
              <TextField
                name="contactNumber"
                label="Telephone Number"
                variant="outlined"
                size="small"
                className={classes.textField}
                // value={inputFields.firstName}
                // onChange={(event) => handleChangeInput(event)}
              ></TextField>
            </div>
            <div className="property-info-fields-row">
              <TextField
                name="city"
                label="City"
                variant="outlined"
                size="small"
                className={classes.textField}
                // value={inputFields.firstName}
                // onChange={(event) => handleChangeInput(event)}
              ></TextField>

              <TextField
                name="postCode"
                label="Post Code"
                variant="outlined"
                size="small"
                className={classes.textField}
                // value={inputFields.firstName}
                // onChange={(event) => handleChangeInput(event)}
              ></TextField>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                size="small"
                className={classes.textField}
                // value={inputFields.firstName}
                // onChange={(event) => handleChangeInput(event)}
              ></TextField>
            </div>
          </div>

          {/* Personal Information end */}

          {/* Property information start */}
          <span className={classes.subHeading}>
            Add Your Property Information Here
          </span>
          <div className="property-info-fields-colunm">
            <div className="property-info-fields-row">
              <Autocomplete
                id="combo-box-demo"
                options={buildingTypes}
                getOptionLabel={(option) => option.type}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Building Type"
                    variant="outlined"
                  />
                )}
              />
              <Autocomplete
                id="combo-box-demo"
                options={houseTypes}
                getOptionLabel={(option) => option.type}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="House Type"
                    variant="outlined"
                  />
                )}
              />
              <Autocomplete
                id="combo-box-demo"
                options={bedrooms}
                getOptionLabel={(option) => option.bed}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField {...params} label="Bedrooms" variant="outlined" />
                )}
              />
            </div>
            <div className="property-info-fields-row">
              <Autocomplete
                id="combo-box-demo"
                options={lifts}
                getOptionLabel={(option) => option.lift}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField {...params} label="Lift" variant="outlined" />
                )}
              />
              <Autocomplete
                id="combo-box-demo"
                options={gardens}
                getOptionLabel={(option) => option.garden}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField {...params} label="Garden" variant="outlined" />
                )}
              />

              <Autocomplete
                id="combo-box-demo"
                options={bathrooms}
                getOptionLabel={(option) => option.bath}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField {...params} label="Bathrooms" variant="outlined" />
                )}
              />
            </div>
            <div className="property-info-fields-row">
              <Autocomplete
                id="combo-box-demo"
                options={tenureType}
                getOptionLabel={(option) => option.tenure}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField {...params} label="Tenure" variant="outlined" />
                )}
              />
              <Autocomplete
                id="combo-box-demo"
                options={chainFreeOptions}
                getOptionLabel={(option) => option.chainFree}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chain free"
                    variant="outlined"
                  />
                )}
              />

              <TextField
                name="maxPrice"
                label="Budget"
                variant="outlined"
                size="small"
                className={classes.textField}
                // value={inputFields.firstName}
                // onChange={(event) => handleChangeInput(event)}
              ></TextField>
            </div>
            <div className="property-info-fields-row">
              <Autocomplete
                id="combo-box-demo"
                options={expectedTimeToBuy}
                getOptionLabel={(option) => option.time}
                size="small"
                style={{ width: 200 }}
                className={classes.textField}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Extected time to buy"
                    variant="outlined"
                  />
                )}
              />
              <TextField
                id="date"
                label="Suitable Contact Date"
                type="date"
                defaultValue="2022-01-28"
                style={{ width: 200 }}
                variant="outlined"
                size="small"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="time"
                label="Best Time to Contact"
                type="time"
                defaultValue="09:30"
                variant="outlined"
                size="small"
                className={classes.textField}
                // InputLabelProps={{
                //   shrink: true,
                // }}
                // inputProps={{
                //   step: 300, // 5 min
                // }}
              />
            </div>
          </div>

          {/* Property information end */}
          <div className="submit-button-container">
            <Button
              className={classes.button}
              variant="contained"
              endIcon={<Send />}
              style={{ backgroundColor: "#FFB91D" }}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

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

const bedrooms = [
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
const bathrooms = [
  { bath: "1" },
  { bath: "2" },
  { bath: "3" },
  { bath: "4" },
  { bath: "5" },
  { bath: "6" },
  { bath: "7" },
  { bath: "8" },
  { bath: "9" },
  { bath: "10" },
];

const lifts = [{ lift: "Yes" }, { lift: "No" }];
const driveWays = [{ driveWay: "Yes" }, { driveWay: "No" }];
const gardens = [{ garden: "Yes" }, { garden: "No" }];
const tenureType = [{ tenure: "Freehold" }, { tenure: "Leasehold" }];
const chainFreeOptions = [{ chainFree: "Yes" }, { chainFree: "No" }];
const expectedTimeToBuy = [
  { time: "3 week" },
  { time: "5 week" },
  { time: "7 week" },
  { time: "10 week" },
  { time: "12 week" },
  { time: "15 week" },
  { time: "20 week" },
  { time: "24 week" },
];
export default BuyerRequest;
