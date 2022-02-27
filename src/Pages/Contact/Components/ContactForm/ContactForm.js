import React, { useState } from "react";
import Map from "../Map/Map";
import "./ContactForm.css";
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

const ContactForm = () => {
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
    <div>
      <section id="contact">
        {/* <h1 className="section-header">Contact</h1> */}

        <div className="contact-wrapper">
          {/* <!-- Left contact page -->  */}
          <div className="contact-text-inner-div contact-form-div col-lg-4 p-3">
            <form id="contact-form" className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="NAME"
                    name="name"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="SUBJECT"
                    name="subject"
                    value=""
                  />
                </div>
              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required
              ></textarea>

              <button
                className="btn btn-success send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane"></i>
                  <span className="send-text">SEND</span>
                </div>
              </button>
            </form>
          </div>

          <div className="contact-text-inner-div contact-text-inner-landlord d-flex justify-content-center align-items-center col-lg-4 mx-3">
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
                        background: "#03A404",
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
                        background: "#FACC2E",
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
          <div className="contact-text-inner-div contact-text-inner-tanents col-lg-4 d-flex justify-content-center align-items-center ">
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
                          background: "#03A404",
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
                      background: "#FACC2E",
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
                account related enquiries please send us an email and we will
                get back to you as soon as possible at accounts@citilord.co.uk
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
                If you looking for a new home, please take a look at our
                property page. Alternatively, if interested to any of our
                property and would like to arrange a viewing,{" "}
                <Link to="/tenant-registration">Please click here</Link>.
                <br></br>
                <br></br>
                Or if you have any questions, you can talk to a member of staff
                by contacting us through: 02089804988 EXT: 1 & 2
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
                General Enquiries:For any general enquiries, please contact us
                via email with your full name and property address
                members@citilord.co.uk
                <br></br>
                <br></br>
                Notice:
                <br></br>
                <br></br>
                If you are looking to terminate your tenancy please read your
                tenancy contract’s Terms and Conditions, and send us a notice
                via notice@citilord.co.uk
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
      </section>
    </div>
  );
};

export default ContactForm;
