import { AppBar, Avatar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import UserBookings from "../Components/UserBookings/UserBookings";
import UserProfile from "../Components/UserProfile/UserProfile";
// import useFirebase from "../../../hooks/useFirebase";
import "./UserDashBoard.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    color: "black",
  },
  tabStyle: {
    color: "black",
  },
}));

export const UserDashBoard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { user, uploadImage } = useAuth();
  // const [imageChange, setImageChange] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState("");

  // upload image onchange handler
  const handleFileChange = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      reader.onload = (e) => {
        setPhotoURL(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSaveClick = () => {
    uploadImage(photo, user);
  };

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user?.photoURL);
    }
  }, [user]);

  return (
    <div className="">
      <div className="user-dahboard-main rounded bg-white mt-5 mb-5">
        {user.emailVerified ? (
          <div className="user-dashboard-container shadow row">
            <div className="col-md-3 dashboard-left">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <label className="photo-label" for="file-input">
                  <Avatar
                    className="user-photo rounded-circle mt-5"
                    src={photoURL}
                  />
                </label>
                <input
                  onChange={handleFileChange}
                  style={{ visibility: "hidden" }}
                  type="file"
                  id="file-input"
                />
                <span className="font-weight-bold">{user?.displayName}</span>
                <p className="text-black-50">{user?.email}</p>
                <span> </span>
              </div>
            </div>
            <div className="col-md-9 border-right">
              <div className="">
                <div className={classes.root}>
                  <AppBar position="static">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="simple tabs example"
                      TabIndicatorProps={{
                        style: {
                          backgroundColor: "#1ead01",
                        },
                      }}
                    >
                      <Tab
                        className={classes.tabStyle}
                        label="Profile"
                        {...a11yProps(0)}
                      />
                      <Tab
                        className={classes.tabStyle}
                        label="Bookings"
                        {...a11yProps(1)}
                      />
                    </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0}>
                    <UserProfile />
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <UserBookings />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={user?.displayName}
                      value={user?.displayName}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={user.email}
                      value={user.email}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      value=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      value=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      value=""
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      value=""
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Post Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Post Code"
                      value=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      value=""
                      placeholder="state"
                    />
                  </div>
                </div> */}
                <div className="mt-5 text-end">
                  <button
                    onClick={handleSaveClick}
                    className="btn btn-primary profile-button"
                    type="button"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="col-md-4"></div> */}
          </div>
        ) : (
          <div className="user-profile-ver-main rounded bg-white mt-5 mb-5">
            <div className="user-profile-ver-container shadow row">
              <h3>A verification link has been sent to your email account</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
