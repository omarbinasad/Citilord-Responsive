import React from "react";
// import aboutImg from "./about.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    // className="py-5"
    <div style={{ paddingBottom: "30px" }}>
      <h1
        className="text-center"
        style={{ paddingBottom: "30px", fontWeight: "bold" }}
      >
        About Us
      </h1>
      <div className="about-section-container">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/28/10/08/purchase-3113198_960_720.jpg"
          alt="about-img"
        />
        <p>
          Combining expertise, knowledge of the London rental market and modern
          marketing, Citi Lord offers both landlords and tenants the best value
          and service in lettings and property management. Covering property in
          East, North, South East London and the City of London areas, Citi Lord
          is an innovative and dynamic company, which has quickly evolved into
          one of London’s leading independent letting and property management
          agents. We pride ourselves on delivering clients with excellent and
          efficient customer service. Our offices are open 6 days a week and our
          in-house repair teams are open 7 days a week till late (on an
          appointment basis), allowing us to respond to any our clients’ needs
          promptly and effectively.
        </p>
        <p>
          Citi Lord’s success has been built upon the single-minded desire and
          determination of our staff to provide clients, with exceptional,
          dedicated and personalised service, a commitment evidenced by our
          5-star reviews and high referral rate. With a high street branch based
          in the heart of East London, our clients can easily visit our offices
          at any time without an appointment. We always have friendly and
          professional staff on hand to deal directly with any questions or
          queries you may have.{" "}
          <p class="collapse" id="collapseExample">
            With a good knowledge of letting market and our modern technology we
            use daily basis which help us to offers a new experience to let and
            manage property in London and Essex. From the beginning of the
            journey till today, we progressed step by step and now we are in a
            position to compete with other top letting & managing agent in
            London. Citi Lord has won the confidence and goodwill of its
            landlords and clients. We have goodwill with our entire existing and
            present landlord. We thank all our valued Landlords, Tenants and
            associated personals without the help of whom it would not have been
            possible to achieve the success and reputation we hold now. Citi
            lord has reputation as a reliable letting and managing agent. We
            managed block of property around east, north and city of London. One
            of the strength of Citi Lord is its efficient customer service. We
            are open 6 days a week and our in-house repairs teams provide
            service 7 days a week till late on the appointment basis. The
            company gives personal attention to each client and is known for
            it’s prompt and effective action. Moving is a busy and exciting time
            and we're here to make sure the experience goes as smoothly as
            possible by giving you all the help you need under one roof. The
            company has always used latest technology, but the company's biggest
            strength is the genuinely warm, friendly and professional approach
            and commitment that we offer all of our clients. Our record of
            success has been built upon a single-minded desire to provide our
            clients, with a top class personal service delivered by highly
            motivated and trained staff. A sign of this success is the fact that
            a large proportion of our business is from referrals, satisfied
            Clients who have recommended us to their friends and family. Citi
            Lord stands for honesty, trust, faith, quality and commitment, which
            are the guiding force behind the company’s excellence as a trusted
            agency. We are based in heart of east London on the high street
            branch where our clients can easily popped in any time with there
            necessity without any appointment which is very rare to any other
            agency. We have always someone there to listen to them and our
            manager make a meeting straightway when is necessary and for clients
            satisfaction. We believe we bring you’re the way you think and which
            is one of the most important
          </p>
        </p>{" "}
        <button
          class="btn btn-default read-more-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
