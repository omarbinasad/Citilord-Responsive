import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import SingleTeamMember from "./SingleTeamMember/SingleTeamMember";
import "./Team.css";

const Team = () => {
  return (
    <div>
      {/* <h1
        className="text-center"
        style={{ fontWeight: "bold", marginLeft: "70px" }}
      >
        Team Members
      </h1> */}

      <section className="our-team-section">
        <div className="container">
          <h1
            className="text-center"
            data-aos="zoom-in"
            data-aos-once="true"
            style={{ fontWeight: "bold" }}
          >
            Team Members
          </h1>
          <div className="row">
            <SingleTeamMember></SingleTeamMember>
            <SingleTeamMember></SingleTeamMember>
            <SingleTeamMember></SingleTeamMember>
            <SingleTeamMember></SingleTeamMember>
          </div>
        </div>
        <div className="py-4 d-flex justify-content-center">
          <Link className="view-more-btn" to="/all-team-members">
            <Button>View More</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Team;
