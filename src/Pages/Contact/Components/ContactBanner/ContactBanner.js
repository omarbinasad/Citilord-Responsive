import React from "react";
import ContactBannerImg from "./contactBanner.png";
import "./ContactBanner.css";
import { Button, styled } from "@material-ui/core";
import { Link } from "react-router-dom";

const BannerButton = styled(Button)({
  textTransform: "capitalize",
  fontSize: "16px",
  margin: "0px 10px ",
  padding: "10px 16px",
  backgroundColor: "#03A404",
  color: "white",
});
const BannerButton2 = styled(Button)({
  textTransform: "capitalize",
  fontSize: 16,
  margin: "0px 10px ",
  padding: "10px 16px",
  backgroundColor: "#FACC2E",
  color: "white",

  "&:hover": {
    backgroundColor: "#FACC2E",
  },
});

const ContactBanner = () => {
  return (
    <div>
      <div class="contact-banner" data-aos="zoom-in">
        <div className="contact-banner-button-div">
          <div className="contact-banner-buttons">
            <Link to={"/free-valuation"} style={{ textDecoration: "none" }}>
              <BannerButton
                variant="contained"
                style={{ background: "green", fontWeight: "bold" }}
                data-aos="fade-right"
                data-aos-delay="1500"
                data-aos-duration="1000"
              >
                Free Valuation
              </BannerButton>
            </Link>
            <Link to={"/quick-response"} style={{ textDecoration: "none" }}>
              <BannerButton2
                variant="contained"
                style={{ color: "black", fontWeight: "bold" }}
                data-aos="fade-left"
                data-aos-delay="1500"
                data-aos-duration="1000"
              >
                Quick-response
              </BannerButton2>
            </Link>
          </div>
        </div>
        <img src={ContactBannerImg} className="contact-banner-img" alt="..." />
      </div>
    </div>
  );
};

export default ContactBanner;
