import React from "react";
import "./SingleTeamMember.css";

const SingleTeamMember = () => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className="col-lg-3 col-md-6 col-sm-6"
    >
      <div className="our-team">
        <div className="pic">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        </div>
        <div className="team-content">
          <h3 className="title">Team 1</h3>
          <span className="post">Inhaber & Geschäftsführer</span>
        </div>
        <ul className="social">
          <li>
            <a href="#" target="_blank" className="facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" className="twitter">
              <i class="fab fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="#" className="linkedin">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleTeamMember;
