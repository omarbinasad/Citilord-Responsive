import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React from "react";
import "./FreeValuation.css";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  item: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "column",
      display: "flex",
      //   justifyContent: "center",
    },
  },

  groupItems: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groupItemsRadio: {
    display: "flex",
    // justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      //   alignItems: "center",
      //   justifyContent: "center",
    },
  },
}));

const FreeValuation = () => {
  const classes = useStyles();
  return (
    <div className="main-free-valuation-form-container">
      <div className="free-valuation-container">
        <div className="free-valuation-form-container">
          <div className="form-title-container">
            <div className="form-title">Property Valuation</div>
          </div>
          <div className={classes.groupItems}>
            <div className={classes.item}>
              <Autocomplete
                id="combo-box-demo"
                options={buildingTypes}
                getOptionLabel={(option) => option.type}
                style={{ width: "36vh" }}
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
            <div className={classes.item}>
              <Autocomplete
                id="combo-box-demo"
                options={houseTypes}
                getOptionLabel={(option) => option.type}
                style={{ width: "36vh" }}
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
          <div className={classes.groupItems}>
            <div className={classes.item}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                style={{ width: "36vh" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                style={{ width: "36vh" }}
              />
            </div>
          </div>
          <div className={classes.groupItems}>
            <div className={classes.item}>
              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                size="small"
                style={{ width: "36vh" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-basic"
                label="Post Code"
                variant="outlined"
                size="small"
                style={{ width: "36vh" }}
              />
            </div>
          </div>

          <div className={classes.groupItems}>
            <div className={classes.item}>
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                size="small"
                style={{ width: "36vh" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-basic"
                label="Select Expected Deadline"
                variant="outlined"
                size="small"
                style={{ width: "36vh" }}
              />
            </div>
          </div>

          <div className={classes.groupItems}>
            <div className={classes.item}>
              <Autocomplete
                id="combo-box-demo"
                options={suitableTimes}
                getOptionLabel={(option) => option.time}
                style={{ width: "36vh" }}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Suitable time to contact"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div className={classes.item}>
              <Autocomplete
                id="combo-box-demo"
                options={clientSituation}
                getOptionLabel={(option) => option.situation}
                style={{ width: "36vh" }}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="What is your situation?"
                    variant="outlined"
                  />
                )}
              />
            </div>
          </div>

          {/* radio button start */}
          <div className={classes.groupItemsRadio}>
            <div className={classes.item}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  Are you the legal owner of the property?
                </FormLabel>
                <RadioGroup
                  row
                  // aria-labelledby="demo-row-radio-buttons-group-label"
                  // name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.item} style={{ paddingLeft: "60px" }}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  style={{ marginBottom: "15px" }}
                >
                  What are you looking for?
                </FormLabel>
                <RadioGroup
                  row
                  // aria-labelledby="demo-row-radio-buttons-group-label"
                  // name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="sales"
                    control={<Radio />}
                    label="Sales"
                  />
                  <FormControlLabel
                    value="rental"
                    control={<Radio />}
                    label="Rental"
                  />
                  <FormControlLabel
                    value="both"
                    control={<Radio />}
                    label="Both"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {/* radio button end */}

          {/* Submit Button Start */}
          <div className="form-button-container">
            <Button
              variant="contained"
              style={{
                width: "150px",
                height: "50px",
                color: "black",
                backgroundColor: "#FFB91D",
              }}
            >
              Submit
            </Button>
          </div>

          {/* Start Button End  */}
        </div>
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

const clientSituation = [
  { situation: "Planning to sell" },
  { situation: "Planning to let" },
  { situation: "Just curious" },
  { situation: "Ready to sell" },
  { situation: "Ready to let" },
];

const suitableTimes = [
  { time: "08-10 am" },
  { time: "10-12 am" },
  { time: "12-02 pm" },
  { time: "02-04 pm" },
  { time: "04-06 pm" },
  { time: "06-08 pm" },
  { time: "08-10 pm" },
];

export default FreeValuation;
