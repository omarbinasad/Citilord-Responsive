import React from "react";
import Map from "../Map/Map";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <section id="contact">
        {/* <h1 className="section-header">Contact</h1> */}

        <div className="contact-wrapper">
          {/* <!-- Left contact page -->  */}
          <div className="contact-text-inner-div contact-form-div col-lg-4 p-3">
            <form id="contact-form" className="form-horizontal" role="form">
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="NAME"
                    name="name"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    value=""
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="SUBJECT"
                    name="subject"
                    value=""
                  />
                </div>
              </div>

              <textarea
                className="form-control"
                rows="10"
                placeholder="MESSAGE"
                name="message"
                required
              ></textarea>

              <button
                className="btn btn-success send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane"></i>
                  <span className="send-text">SEND</span>
                </div>
              </button>
            </form>
          </div>

          {/* map  */}
          <div className="contact-text-inner-div col-lg-4 mx-3 p-2">
            <Map></Map>
          </div>
          {/*-  contact Right Container-*/}
          <div className="contact-text-inner-div col-lg-4 p-3">
            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <i className="fa fa-map-marker fa-2x">
                    <span className="contact-text place">
                      41 Burdett Road, Mile End, London E3 4TN
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fas fa-mobile-alt">
                    <span className="contact-text phone">
                      <a href="tel:07484190446" title="Give me a call">
                        07484190446 (Letting Enquiry)
                      </a>
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:02089804988" title="Give me a call">
                        02089804988
                      </a>
                    </span>
                  </i>
                </li>

                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span className="contact-text gmail">
                      <a href="mailto:#" title="Send me an email">
                        mileend@citilord.co.uk
                      </a>
                    </span>
                  </i>
                </li>
              </ul>

              <hr />
              <ul className="social-media-list">
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="contact-icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
