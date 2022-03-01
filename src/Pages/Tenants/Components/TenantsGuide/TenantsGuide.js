import React from "react";
import "./TenantsGuide.css";
import TenantsGuideImg from "./tenantsGuide.jpg";

const TenantsGuide = () => {
  return (
    <div>
      <div className="container">
        <div data-aos="fade-up" className="bg-warning tenantsGuide-title-div">
          <h1 className="text-center">Services for Tenants</h1>
        </div>
        <h4
          data-aos="fade-up"
          style={{ marginBottom: "10px", marginTop: "10px" }}
        >
          TENANT'S GUIDE
        </h4>
        <div className="tenantsGuide-container d-flex">
          <div className="tenantsGuide-img-div">
            <img
              data-aos="zoom-in"
              src={TenantsGuideImg}
              alt=""
              width="300"
              height="200"
            />
          </div>
          <div data-aos="fade-up" className="tenantsGuide-text-div">
            <p>
              Tenants information and terms & conditions to rent a property from
              Citi Lord Ltd.
            </p>
            <p>
              <b>Findng a Propert</b> <br /> Findng a Propert Prospective
              tenants should view any property they wish to consider, whereafter
              they can submit an application to rent. All properties are
              available on Assured Shorthold Agreements for a minimum of six
              months. Longer periods can be agreed by separate negotiation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantsGuide;
