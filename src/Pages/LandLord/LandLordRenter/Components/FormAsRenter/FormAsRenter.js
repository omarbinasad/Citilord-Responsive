import {
  Box,
  Button,
  Container,
  Icon,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import "./FormAsRenter.css";
import { Add, AddBox, IndeterminateCheckBox, Send } from "@material-ui/icons";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
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

const FormAsRenter = () => {
  const [inputFields, setInputFields] = useState([
    {
      houseNameNumber: "",
      roadNumber: "",
      postcode: "",
      city: "",
      propertyType: "",
      houseType: "",
      bedrooms: "",
      bathrooms: "",
      floor: "",
      lift: "",
      driveWay: "",
      garden: "",
      serviceRequired: "",
      chainFree: "",
      availableDate: "",
      valuationDate: "",
    },
  ]);

  const classes = useStyles();

  const handleChangeInput = (event, index) => {
    const { name, value } = event.target;
    const newInputFields = [...inputFields];
    newInputFields[index][name] = value;
    setInputFields(newInputFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        houseNameNumber: "",
        roadNumber: "",
        postcode: "",
        city: "",
        propertyType: "",
        houseType: "",
        bedrooms: "",
        bathrooms: "",
        floor: "",
        lift: "",
        driveWay: "",
        garden: "",
        serviceRequired: "",
        chainFree: "",
        availableDate: "",
        valuationDate: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  return (
    <div className="landlord-renter-form-container">
      <div className="form-main">
        <form className={classes.root} onSubmit={handleSubmit}>
          <div className="form-heading">
            <h3>Renter Landlord</h3>
          </div>

          {/* personal information start */}
          <span className={classes.subHeading}>Personal Information</span>
          <div className="personal-info-section">
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
              name="phoneNumber"
              label="Telephone Number"
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

          {/* Personal Information end */}
          <span className={classes.subHeading}>
            Add Your Property Information Here
          </span>
          <IconButton onClick={() => handleAddFields()}>
            <AddBox className={classes.iconButton} />
          </IconButton>
          {inputFields.map((inputField, index) => (
            <div key={index}>
              <div className="row-section">
                <TextField
                  name="houseNameNumber"
                  label="House Name/Number"
                  variant="outlined"
                  size="small"
                  value={inputField.houseNameNumber}
                  className={classes.textField}
                  onChange={(event) => handleChangeInput(event, index)}
                ></TextField>
                <TextField
                  name="roadNumber"
                  label="Road Number"
                  variant="outlined"
                  size="small"
                  value={inputField.roadNumber}
                  className={classes.textField}
                  onChange={(event) => handleChangeInput(event, index)}
                ></TextField>
                <TextField
                  name="postcode"
                  label="Postcode"
                  variant="outlined"
                  size="small"
                  value={inputField.postcode}
                  className={classes.textField}
                  onChange={(event) => handleChangeInput(event, index)}
                ></TextField>
                <TextField
                  name="city"
                  label="City"
                  variant="outlined"
                  size="small"
                  value={inputField.city}
                  className={classes.textField}
                  onChange={(event) => handleChangeInput(event, index)}
                ></TextField>
                <Autocomplete
                  id="combo-box-demo"
                  options={houseTypes}
                  getOptionLabel={(option) => option.type}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="House Type"
                      variant="outlined"
                    />
                  )}
                />
              </div>
              <div className="row-section">
                <Autocomplete
                  id="combo-box-demo"
                  options={bedrooms}
                  getOptionLabel={(option) => option.bed}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Bedrooms"
                      variant="outlined"
                    />
                  )}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={bathrooms}
                  getOptionLabel={(option) => option.bath}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Bathrooms"
                      variant="outlined"
                    />
                  )}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={floors}
                  getOptionLabel={(option) => option.floor}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField {...params} label="Floor" variant="outlined" />
                  )}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={lifts}
                  getOptionLabel={(option) => option.lift}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField {...params} label="Lift" variant="outlined" />
                  )}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={driveWays}
                  getOptionLabel={(option) => option.driveWay}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Driveway"
                      variant="outlined"
                    />
                  )}
                />
              </div>
              <div className="row-section">
                <Autocomplete
                  id="combo-box-demo"
                  options={gardens}
                  getOptionLabel={(option) => option.garden}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField {...params} label="Garden" variant="outlined" />
                  )}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={serviceRequired}
                  getOptionLabel={(option) => option.service}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Service Required"
                      variant="outlined"
                    />
                  )}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={chainFree}
                  getOptionLabel={(option) => option.type}
                  size="small"
                  style={{ width: 200 }}
                  className={classes.textFieldAuto}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Chain Free"
                      variant="outlined"
                    />
                  )}
                />
                <TextField
                  id="date"
                  label="Available Date"
                  type="date"
                  defaultValue="2022-01-28"
                  style={{ width: 200 }}
                  variant="outlined"
                  size="small"
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="date"
                  label="Valuation Date"
                  type="date"
                  defaultValue="2022-01-28"
                  style={{ width: 200 }}
                  variant="outlined"
                  size="small"
                  // className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <IconButton
                className={classes.iconButtonIncrsDecrse}
                onClick={() => handleRemoveFields(index)}
              >
                <IndeterminateCheckBox />
              </IconButton>
              <IconButton onClick={() => handleAddFields()}>
                <AddBox />
              </IconButton>
            </div>
          ))}
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
];
const floors = [
  { floor: "1st" },
  { floor: "2nd" },
  { floor: "3rd" },
  { floor: "4th" },
  { floor: "5th" },
  { floor: "6th" },
  { floor: "7th" },
  { floor: "8th" },
  { floor: "9th" },
  { floor: "10th" },
  { floor: "11th" },
  { floor: "12th" },
  { floor: "13th" },
  { floor: "14th" },
  { floor: "15th" },
  { floor: "16th" },
  { floor: "17th" },
  { floor: "18th" },
];

const lifts = [{ lift: "Yes" }, { lift: "No" }];
const driveWays = [{ driveWay: "Yes" }, { driveWay: "No" }];
const gardens = [{ garden: "Yes" }, { garden: "No" }];
const serviceRequired = [
  { service: "Let Only" },
  { service: "Let and Rent" },
  { service: "Management" },
  { service: "Rent to Rent" },
  { service: "Guaranteed Rent" },
];
const chainFree = [{ type: "Yes" }, { type: "No" }];

export default FormAsRenter;
