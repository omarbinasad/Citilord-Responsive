import React from "react";
import "./Footer.css";
import appLogo from "./dd-opts.png";
import appLogo2 from "./career.png";
import appLogo3 from "./apple.png";
import appLogo4 from "./google.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-3 pb-2">
            <div className="row footer-nav">
              <ul className="d-flex justify-content-between list-unstyled">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">Sell</a>
                </li>
                <li>
                  <a href="#about">Long Let</a>
                </li>
                <li>
                  <a href="#about">Short Let</a>
                </li>
                <li>
                  <a href="#p">Property Share</a>
                </li>
                <li>
                  <a href="#services">Landlord</a>
                </li>
                <li>
                  <a href="#tenants">Tenants</a>
                </li>
                <li>
                  <a href="#aboutt">About</a>
                </li>

                <li>
                  <a href="#e">Report Repair</a>
                </li>
                <li>
                  <a href="https://www.gov.uk/find-energy-certificate">
                    EPC Check
                  </a>
                </li>
                <li>
                  <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/942503/6.6642_MHCLG_How_to_Rent_v5.pdf">
                    How to Rent Guide
                  </a>
                </li>
                <li>
                  <a href="#l">Complaints Procedure</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content pt-4 pb-4">
            <div className="row">
              <div className="col-xl-3 col-lg-3 mb-50">
                <div className="footer-widget">
                  {/* <div className="footer-logo">
                    <a href="/">
                      <img src={Logo} className="img-fluid" alt="logo" />
                    </a>
                  </div> */}
                  <div className="footer-text">
                    <div className="footer-widget-heading">
                      <h3>Find Us</h3>
                    </div>
                    <ul className="single-cta">
                      <li>
                        <a href="#">
                          <i class="fas fa-map-marker-alt"></i> road no, Avenue,
                          city name
                        </a>
                      </li>
                      <li>
                        <a href="Tel:+012 345 678">
                          <i className="fas fa-phone"></i> +012 345 678
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@infomail.com">
                          <i class="fas fa-envelope"></i> info@infomail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#home">
                        Privacy Notice & Cookies Policy(Web & Client)
                      </a>
                    </li>
                    <li>
                      <a href="#home">Citi Lord Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Follow Us</h3>
                  </div>
                  <div className="footer-social-icon">
                    <a href="#a">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#b">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#c">
                      <i className="fab fa-linkedin-in linkedin-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Download Apps</h3>
                  </div>
                  <div className="">
                    <a href="">
                      <img className="pe-2" src={appLogo3} alt="" />
                    </a>
                    <a href="">
                      <img src={appLogo4} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                <div className="copyright-text-div">
                  <p className="footer-copiright-text">
                    &copy; Citi Lord 2022 ALL RIGHTS RESERVED | Developed
                    by&nbsp;
                    <a href="https://optimisticsolutions.co.uk/">
                      Optimistic Solutions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
