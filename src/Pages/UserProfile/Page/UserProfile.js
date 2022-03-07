import React from "react";
import useFirebase from "../../../hooks/useFirebase";
import "./UserProfile.css";

export const UserProfile = () => {
  const { user } = useFirebase();
  return (
    <div className="">
      <div className="user-profile-main rounded bg-white mt-5 mb-5">
        <div className="user-profile-container shadow row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <label className="photo-label" for="file-input">
                <img
                  className="user-photo rounded-circle mt-5"
                  width="150px"
                  src={user.photoURL}
                />
              </label>
              <input
                style={{ visibility: "hidden" }}
                type="file"
                id="file-input"
              />
              <span className="font-weight-bold">{user.displayName}</span>
              <p className="text-black-50">{user.email}</p>
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
                    placeholder="first name"
                    value=""
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="surname"
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
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
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
                  <label className="labels">Area</label>
                  <input
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="Enter Area"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label className="labels">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="country"
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
              <div className="mt-5 text-center">
                <button
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
      </div>
    </div>
  );
};
