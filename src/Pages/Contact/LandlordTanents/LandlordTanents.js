import React, { useState } from "react";
import "./LandlordTanents.css";
import { Link } from "react-router-dom";
import {
  Backdrop,
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  makeStyles,
  Modal,
  ThemeProvider,
} from "@material-ui/core";
import { green, yellow } from "@material-ui/core/colors";
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

const LandlordTanents = () => {
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
    <div className="land-lord-tanent-div-main-container">
      <div className="land-lord-tanent-div-main-container-div-contents">
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
        <div className="section-separator-div"></div>
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
            please complete the form and a member of our staff team will contact
            you. <Link to="/free-valuation">Please click here</Link>
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
            Please contact the appropriate department for enquiries Any account
            related enquiries please send us an email and we will get back to
            you as soon as possible at accounts@citilord.co.uk
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
            page. Alternatively, if interested to any of our property and would
            like to arrange a viewing,{" "}
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
        <DialogTitle id="alert-dialog-title">{"Existing Tenant?"}</DialogTitle>
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
  );
};

export default LandlordTanents;
