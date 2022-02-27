import { Button, makeStyles, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import "./TenantRegistration.css";
// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  item: {
    marginTop: "15px",
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      // flexDirection: "column",
      display: "flex",
      //   justifyContent: "center",
    },
  },
}));

const TenantRegistration = () => {
  const classes = useStyles();

  return (
    <div className="tanant-registration-container">
      <span className="form-heading">New Tenant Registration</span>
      <form>
        {/* persoanl details start */}
        <div className="form-sections">
          <div className="form-sections-1st-2">
            <div className="form-sections-inner">
              <div className="section-separator mt-5"></div>
              <div className="personal-details-div">
                <span className="section-heading">Your details</span>
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
                <div className={classes.item}>
                  <TextField
                    id="outlined-basic"
                    label="Contact Number"
                    variant="outlined"
                    size="small"
                    style={{ width: "36vh" }}
                  />
                </div>
                <div className={classes.item}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    style={{ width: "36vh" }}
                  />
                </div>
                <div className={classes.item}>
                  <TextField
                    id="outlined-basic"
                    label="Profession"
                    variant="outlined"
                    size="small"
                    style={{ width: "36vh" }}
                  />
                </div>
              </div>
            </div>
            {/* Personl details end */}
            <div className="form-sections-inner">
              <div className="section-separator mt-5"></div>
              {/* Expected requirements start  */}
              <div className="requiremenets-div">
                <span className="section-heading">Expected requirements</span>
                <div className={classes.item}>
                  <TextField
                    id="outlined-basic"
                    label="Post Code"
                    variant="outlined"
                    size="small"
                    style={{ width: "36vh" }}
                  />
                </div>
                <div className={classes.item}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={maxRent}
                    getOptionLabel={(option) => option.value}
                    style={{ width: "36vh" }}
                    size="small"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Expected Rent Per Month (£)"
                        variant="outlined"
                      />
                    )}
                  />
                </div>
                <div className={classes.item}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={bedNumber}
                    getOptionLabel={(option) => option.bed}
                    style={{ width: "36vh" }}
                    size="small"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="No. of Bedrooms"
                        variant="outlined"
                      />
                    )}
                  />
                </div>
                <div className={classes.item}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={numberofOccupy}
                    getOptionLabel={(option) => option.value}
                    style={{ width: "36vh" }}
                    size="small"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="No. of Occupy"
                        variant="outlined"
                      />
                    )}
                  />
                </div>
                <div className={classes.item}>
                  <TextField
                    id="outlined-basic"
                    label="Additional Information"
                    variant="outlined"
                    size="small"
                    style={{ width: "36vh" }}
                  />
                </div>
              </div>
            </div>

            {/* Expected requirments end */}
            {/* Moving date start */}
            {/* Moving date end */}
            <div className="form-sections-inner">
              <div className="section-separator mt-5"></div>
              <div className="moving-date-div">
                <span className="section-heading">Moving date</span>
                <div className="field-and-button-container">
                  <div className={classes.item}>
                    <TextField
                      id="date"
                      label="Moving Date From"
                      type="date"
                      defaultValue="2022-01-28"
                      style={{ width: "36vh" }}
                      variant="outlined"
                      size="small"
                      // className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div className={classes.item}>
                    <TextField
                      id="date"
                      label="Moving Date To"
                      type="date"
                      defaultValue="2022-01-28"
                      style={{ width: "36vh" }}
                      variant="outlined"
                      size="small"
                      // className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div className="submit-button">
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
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const bedNumber = [
  { bed: "1" },
  { bed: "2" },
  { bed: "3" },
  { bed: "4" },
  { bed: "5" },
];
const numberofOccupy = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "10" },
];

const maxRent = [
  { value: "500-1000" },
  { value: "1000-1500" },
  { value: "1500-2000" },
  { value: "2000-2500" },
  { value: "2500-3000" },
  { value: "3000-3500" },
  { value: "3500-4000" },
  { value: "4000-4500" },
  { value: "4500-5000" },
  { value: "5000-5500" },
  { value: "5500-6000" },
  { value: "6000-6500" },
  { value: "6500-7000" },
  { value: "7000-7500" },
  { value: "7500-8000" },
  { value: "8000-8500" },
  { value: "8500-9000" },
  { value: "9000-9500" },
  { value: "9500-10000" },
  { value: "More than 10000" },
];

export default TenantRegistration;
