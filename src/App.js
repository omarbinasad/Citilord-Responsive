import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Page/Home";
import NavBar from "./Shared_components/Shared/NavBar/NavBar";
import Footer from "./Shared_components/Shared/Footer/Footer";
import FreeValuation from "./Pages/FreeValuation/FreeValuation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuickResponse from "./Pages/QuickResponse/QuickResponse";
import ForSaleSearch from "./Pages/ForSaleSearch/ForSaleSearch";
import ToRentSearch from "./Pages/ToRentSearch/ToRentSearch";
import ScrollToTop from "./Pages/ScrollToTop";
import Tenants from "./Pages/Tenants/Page/Tenants";
import TenantRegistration from "./Pages/TenantRegistration/TenantRegistration";
import LandLordRenter from "./Pages/LandLord/LandLordRenter/Page/LandLordRenter";
import LandLordSeller from "./Pages/LandLord/LandLordSeller/Page/LandLordSeller";
import BuyerRequest from "./Pages/BuyerRequest/BuyerRequest";
import About from "./Pages/About/Page/About";
import Contact from "./Pages/Contact/Page/Contact";
import ToRentProperties from "./Pages/ToRentProperties/Page/ShortLet/ToRentProperties";
import LongLet from "./Pages/ToRentProperties/Page/LongLet/LongLet";
import ForSaleProperties from "./Pages/ForSaleProperties/Page/ForSaleProperties";
import PropertyDetail from "./Pages/PropertyDetail/Page/PropertyDetail";
import GalleryPage from "./Pages/Gallery/Page/GalleryPage";
import AllTeamMembers from "./Pages/AllTeamMembers/Page/AllTeamMembers";
import AllProperties from "./Pages/AllProperties/Page/AllProperties";
import SingleProperty from "./Pages/SingleProperty/Page/SingleProperty";
import ShortLetPage from "./Pages/AllProperties/Components/ShortletPage/ShortLetPage";
import LongLetPage from "./Pages/AllProperties/Components/LongLetPage/LongLetPage";
import SellPage from "./Pages/AllProperties/Components/SellPage/SellPage";
import SingleRoom from "./Pages/SingleRoom/Page/SingleRoom";
import AllRooms from "./Pages/AllRooms/AllRooms";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/free-valuation" element={<FreeValuation />}></Route>
        <Route path="/quick-response" element={<QuickResponse />}></Route>
        <Route path="/property-for-sale" element={<ForSaleSearch />}></Route>
        <Route path="/property-to-rent" element={<ToRentSearch />}></Route>
        <Route path="/tenants" element={<Tenants />}></Route>
        <Route
          path="/tenant-registration"
          element={<TenantRegistration />}
        ></Route>
        <Route path="/landlord-renter" element={<LandLordRenter />}></Route>
        <Route path="/landlord-seller" element={<LandLordSeller />}></Route>
        <Route path="/buyer-request" element={<BuyerRequest />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/all-properties-short-let"
          element={<ToRentProperties />}
        ></Route>
        <Route path="/all-properties-long-let" element={<LongLet />}></Route>
        <Route
          path="/all-properties-for-sale"
          element={<ForSaleProperties />}
        ></Route>
        <Route path="/property-details" element={<PropertyDetail />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/all-team-members" element={<AllTeamMembers />}></Route>
        <Route path="/all-properties" element={<AllProperties />}></Route>

        <Route path="/single-property" element={<SingleProperty />}></Route>
        <Route path="/all-properties/longlet" element={<LongLetPage />}></Route>
        <Route
          path="/all-properties/shortlet"
          element={<ShortLetPage />}
        ></Route>
        <Route path="/all-properties/sell" element={<SellPage />}></Route>
        <Route path="/single-room" element={<SingleRoom />}></Route>
        <Route path="/all-rooms" element={<AllRooms />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
