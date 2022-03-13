import React from "react";
import useAuth from "../../../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div>
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
    </div>
  );
};

export default UserProfile;
