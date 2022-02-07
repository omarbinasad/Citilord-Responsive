import React from "react";
import CardTab from "../components/CardTab/CardTab";
import WelcomeDiv from "../components/WelcomeDiv/WelcomeDiv";
import "./Home.css";
import QueueDiv from "../components/queueDiv/QueueDiv";
import HomeStat from "../components/HomeStat/HomeStat";
import Search from "../components/Search/Search";
import Banner from "../components/Banner/Banner";
import Associations from "../components/Associations/Associations";
import QuickLinksDiv from "../components/QuickLinksDiv/QuickLinksDiv";
import SearchShortlet from "../components/DialogSearchBox/SearchShortlet/SearchShortlet";

const Home = (props) => {
  return (
    <div className="home">
      {/* <SearchShortlet /> */}
      <Banner />
      <Search />
      <QuickLinksDiv />
      <CardTab />
      {/* <WelcomeDiv /> */}
      <QueueDiv />
      {/* <HomeStat /> */}
      <Associations name="Our Associations" />
    </div>
  );
};

export default Home;
