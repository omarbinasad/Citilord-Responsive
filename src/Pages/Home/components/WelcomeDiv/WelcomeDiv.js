import React from "react";
import "./WelcomeDiv.css";

const WelcomeDiv = () => {
  return (
    // <div className="WelcomeDivcontainer">
    //   <div className="heading">
    //     <div className="heading-content">
    //       <div className="heading-text">
    //         Welcome To <b>Citi Lord</b>
    //         <p className="message">
    //           Founded in 2010, Citi Lord has fast built a reputation as one of
    //           East London’s most popular, trusted and reliable letting agents.
    //           This success has been driven by our expert local knowledge of the
    //           London rental market, a commitment to the highest standards of
    //           client service, and reduced fees provide both tenants and
    //           landlords with exceptional value. Covering the East and North-East
    //           London rental market, such as Tower Hamlets and Mile End, we also
    //           cover parts of North and South-East London. Our friendly and
    //           professional high street branch is conveniently situated close to
    //           Queen Mary University, Canary Wharf and the City of London.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="welcome-box-container">
      <div className="animated-box in">
        <h1>
          Welcome To
          <span
            style={{ color: "#FFB91D", marginLeft: "10px", fontSize: "55px" }}
          >
            Citi Lord
          </span>
        </h1>
        <p>
          Founded in 2010, Citi Lord has fast built a reputation as one of East
          London’s most popular, trusted and reliable letting agents. This
          success has been driven by our expert local knowledge of the London
          rental market, a commitment to the highest standards of client
          service, and reduced fees provide both tenants and landlords with
          exceptional value. Covering the East and North-East London rental
          market, such as Tower Hamlets and Mile End, we also cover parts of
          North and South-East London. Our friendly and professional high street
          branch is conveniently situated close to Queen Mary University, Canary
          Wharf and the City of London.
        </p>
      </div>
    </div>
  );
};

export default WelcomeDiv;
