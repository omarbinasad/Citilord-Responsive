// import Map from "../Map/Map";
import "./TimeTable.css";
import React, { useState } from "react";

import {
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { green, yellow } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    color1: green,
    color2: yellow,
  },
});
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}));
const TimeTable = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };
  return (
    <div className="timtable-container-main">
      <p className="">
        If you are a tenant looking for a rental property, or a landlord wanting
        to rent your property in Mile End, Tower Hamlets, East, North, North
        East and South East London, please don’t hesitate to get in touch. We
        offer free consultations and valuations, so if you have any questions or
        queries about finding a property, finding a tenant or property
        management services, our friendly staff will be more than happy to offer
        their advice and expertise.
      </p>
      <div className="contact-text-div ">
        {/* <div className="contact-text-inner-div col-lg-4 me-3 px-3">
          <h3 className="">Holiday Message</h3>
          <p></p>
        </div> */}
        <div className="contact-text-inner-div col-lg-3 px-3 ">
          <h3 className="text-center">Repair and Maintenance</h3>
          <p>
            Citi Lord property management is separate from lettings office.For
            any kind of repairs please report a problem through our website
            repairs. if you call to lettings department they wont be able to
            help. but we always recommend you to report the problem via our
            repairs system.
          </p>
        </div>
        <div className="contact-text-inner-div col-lg-3 mx-3 px-3">
          <h3 className="text-center">Official Enquiries</h3>
          <p>
            Please note that citi lord ltd do not keep any existing tenants
            information after 1 month of tenancy termination. For any enquiries
            regarding council tax or information about present or existing
            tenants, please contact us
          </p>
        </div>
        <div className="contact-text-inner-div col-lg-3 me-3 px-3">
          <h3 className="text-center">Tenant's Reference</h3>
          <p>
            If you require any references for any of our existing tenants,
            please bear in mind that City Lord does not hold any tenancy
            information 1 month after the tenancy termination. Therefore, if you
            are a tenant or an organisation that require tenancy references,
            please contact us
          </p>
        </div>

        <div className="contact-text-inner-div col-lg-3 px-3">
          <h3 className="text-center">Holiday Message</h3>
          <p></p>
        </div>
      </div>
      <div className="contact-text-div d-flex mt-3">
        {/* map  */}
        {/* <div className="contact-text-inner-div col-lg-3 p-3">
          <Map></Map>
        </div> */}
        {/* table  */}
        <div className="contact-text-inner-div col-lg-4 px-3 pb-3">
          <h3 className="">Office Opening & Closing Time</h3>
          <table class="table-fill">
            <thead>
              <tr>
                <th class="text-left">Day</th>
                <th class="text-left">Hours</th>
              </tr>
            </thead>
            <tbody class="table-hover">
              <tr>
                <td class="text-left">MONDAY</td>
                <td class="text-left">Closed</td>
              </tr>
              <tr>
                <td class="text-left">TUESDAY</td>
                <td class="text-left">9:00AM-6:00PM</td>
              </tr>
              <tr>
                <td class="text-left">WEDNESDAY</td>
                <td class="text-left">9:00AM-6:00PM</td>
              </tr>
              <tr>
                <td class="text-left">THURSDAY</td>
                <td class="text-left">9:00AM-6:00PM</td>
              </tr>
              <tr>
                <td class="text-left">FRIDAY</td>
                <td class="text-left"> 9:00AM-6:00PM</td>
              </tr>
              <tr>
                <td class="text-left">SATURDAY</td>
                <td class="text-left">10:00AM-4:30PM</td>
              </tr>
              <tr>
                <td class="text-left">SUNDAY</td>
                <td class="text-left">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="contact-text-inner-div d-flex justify-content-center align-items-center col-lg-4 mx-3 px-3">
          <div className="landlord-section">
            <div>
              <h3 className="landlord-section-title">Landlord</h3>
            </div>
            <div className="button-container">
              <ThemeProvider theme={theme}>
                <div className="button-each ">
                  <Button
                    variant="contained"
                    //   color="color1"
                    onClick={handleOpen}
                    style={{
                      fontWeight: "bold",
                      background: "#217F21",
                      color: "white",
                    }}
                  >
                    New Landlord
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    //   color="color2"

                    onClick={handleOpen2}
                    style={{
                      fontWeight: "bold",
                      background: "#DFAB00",
                      color: "black",
                    }}
                  >
                    Existing Landlord
                  </Button>
                </div>
              </ThemeProvider>
            </div>
          </div>
        </div>
        <div className="contact-text-inner-div col-lg-4 d-flex justify-content-center align-items-center px-3 ">
          <div className="tenants-section">
            <div>
              <h3 className="tanents-section-title">Tanents</h3>
            </div>
            <div className="button-container">
              <ThemeProvider theme={theme}>
                <div className="button-each ">
                  <div className="div-for-dialog-1">
                    <Button
                      variant="contained"
                      // color="color1"
                      style={{
                        fontWeight: "bold",
                        background: "#217F21",
                        color: "white",
                      }}
                      onClick={handleOpen3}
                    >
                      New Tanent
                    </Button>
                  </div>
                </div>
                <Button
                  variant="contained"
                  // color="color2"
                  style={{ fontWeight: "bold" }}
                  onClick={handleOpen4}
                  style={{
                    fontWeight: "bold",
                    background: "#DFAB00",
                    color: "black",
                  }}
                >
                  Existing Tanent
                </Button>
              </ThemeProvider>
            </div>
          </div>
        </div>
        {/* Modal start */}

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"New Landlord?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you are new to City Lord and would like a property valuation,
              please complete the form and a member of our staff team will
              contact you. <Link to="/free-valuation">Please click here</Link>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
          </DialogActions>
        </Dialog>

        {/* Modal end */}

        <Dialog
          open={open2}
          onClose={handleClose2}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Existing Landlord?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please contact the appropriate department for enquiries Any
              account related enquiries please send us an email and we will get
              back to you as soon as possible at accounts@citilord.co.uk
              <br></br>
              <br></br>
              Property maintenance related enquiries please contact us at
              landlords@citilord.co.uk, 02089804988 EXT: 3
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>Close</Button>
            {/* <Button onClick={handleClose2} autoFocus>
            Agree
          </Button> */}
          </DialogActions>
        </Dialog>

        <Dialog
          open={open3}
          onClose={handleClose3}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"New Tenant?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              If you looking for a new home, please take a look at our property
              page. Alternatively, if interested to any of our property and
              would like to arrange a viewing,{" "}
              <Link to="/tenant-registration">Please click here</Link>.<br></br>
              <br></br>
              Or if you have any questions, you can talk to a member of staff by
              contacting us through: 02089804988 EXT: 1 & 2
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose3}>Close</Button>
            {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
          </DialogActions>
        </Dialog>

        {/* Modal end */}

        <Dialog
          open={open4}
          onClose={handleClose4}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Existing Tenant?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              General Enquiries:For any general enquiries, please contact us via
              email with your full name and property address
              members@citilord.co.uk
              <br></br>
              <br></br>
              Notice:
              <br></br>
              <br></br>
              If you are looking to terminate your tenancy please read your
              tenancy contract’s Terms and Conditions, and send us a notice via
              notice@citilord.co.uk
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose4}>Close</Button>
            {/* <Button onClick={handleClose2} autoFocus>
            Agree
          </Button> */}
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default TimeTable;
