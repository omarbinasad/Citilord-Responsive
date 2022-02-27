import React from "react";

import ContactBanner from "../Components/ContactBanner/ContactBanner";
import ContactForm from "../Components/ContactForm/ContactForm";
import EnquiriesReference from "../Components/EnquiriesReference/EnquiriesReference";
import Map from "../Components/Map/Map";
import TimeTable from "../Components/TimeTable/TimeTable";
import LandlordTanents from "../LandlordTanents/LandlordTanents";

const Contact = () => {
  return (
    <div className="pb-5">
      <ContactBanner></ContactBanner>
      <div className="container py-4">
        <TimeTable></TimeTable>
        <ContactForm></ContactForm>
        {/* <Map></Map> */}
      </div>
      {/* <LandlordTanents></LandlordTanents> */}
      {/* <EnquiriesReference></EnquiriesReference> */}
    </div>
  );
};

export default Contact;
