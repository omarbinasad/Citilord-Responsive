import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
// import useFirebase from "../../../hooks/useFirebase";
import "./UserProfile.css";
// import { getStorage, ref, uploadBytes } from "firebase/storage";

export const UserProfile = () => {
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
      <div className="user-profile-main rounded bg-white mt-5 mb-5">
        {user.emailVerified ? (
          <div className="user-profile-container shadow row">
            <div className="col-md-4 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <label className="photo-label" for="file-input">
                  {/* <img
                    className="user-photo rounded-circle mt-5"
                    width="150px"
                    alt=""
                    src={
                      user.photoURL
                        ? user.photoURL
                        : ""
                    }
                  /> */}
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
            <div className="col-md-7 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
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
                </div>

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
