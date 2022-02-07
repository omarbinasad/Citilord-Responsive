import React from "react";
import ContactBannerImg from "./contactBanner.png";
import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <div>
      <div class="contact-banner">
        <img src={ContactBannerImg} className="contact-banner-img" alt="..." />
      </div>
    </div>
  );
};

export default ContactBanner;
