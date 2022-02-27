import React from "react";
import "./ExtraDetails.css";

const ExtraDetails = () => {
  return (
    <div className="extra-details-main ">
      <div className="extra-details-inner d-flex me-2">
        <div className="extra-details-inner-left col-5 mx-3">
          <table className="table extra-details-table">
            <thead>
              <tr>
                <th scope="col">Extra cost</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deposit</td>
                <td>£824.00</td>
              </tr>
              <tr>
                <td>Bills included?</td>
                <td>Some</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="extra-details-inner-right col-6 ">
          <table className="table extra-details-table">
            <thead>
              <tr>
                <th scope="col">Amenities</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Furnishings</td>
                <td>Furnished</td>
              </tr>
              <tr>
                <td>Parking</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Garage</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Garden/terrace</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Balcony/Patio</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Disabled access</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Living room</td>
                <td>shared</td>
              </tr>
              <tr>
                <td>Broadband included</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="extra-details-inner d-flex ms-2">
        <div className="extra-details-inner-left col-5 mx-3">
          <table className="table extra-details-table">
            <thead>
              <tr>
                <th scope="col">Current household</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td># flatmates</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Total # rooms</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Smoker?</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Any pets?</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Language</td>
                <td>English</td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>2 Females</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="extra-details-inner-right col-6 ">
          <table className="table extra-details-table">
            <thead>
              <tr>
                <th scope="col">New flatmate preferences</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Couples OK?</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Smoking OK?</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Pets OK?</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Occupation</td>
                <td>Don't mind</td>
              </tr>
              <tr>
                <td>References?</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>Males or females</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExtraDetails;
