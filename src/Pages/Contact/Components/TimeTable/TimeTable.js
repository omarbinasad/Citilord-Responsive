import React from "react";
import Map from "../Map/Map";
import "./TimeTable.css";

const TimeTable = () => {
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
      <div className="contact-text-div d-flex">
        <div className="contact-text-inner-div col-lg-6 me-3  px-3">
          <h3 className="">Holiday Message</h3>
          <p></p>
        </div>
        <div className="contact-text-inner-div col-lg-6  px-3 ">
          <h3 className="">Repair and Maintenance</h3>
          <p>
            Citi Lord property management is separate from lettings office.For
            any kind of repairs please report a problem through our website
            repairs. if you call to lettings department they wont be able to
            help. but we always recommend you to report the problem via our
            repairs system.
          </p>
        </div>
      </div>
      <div className="contact-text-div d-flex mt-3">
        {/* map  */}
        <div className="contact-text-inner-div col-lg-6 me-3   px-3">
          <Map></Map>
        </div>
        {/* table  */}
        <div className="contact-text-inner-div col-lg-6 px-3 pb-3">
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
      </div>
    </div>
  );
};

export default TimeTable;
