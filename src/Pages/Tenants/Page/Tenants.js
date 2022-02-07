import React from "react";
import AccordionDiv from "../Components/Accordion/AccordionDiv";
import "./Tenants.css";
import TenantsBanner from "../Components/TenantsBanner/TenantsBanner";
import Associations from "../../Home/components/Associations/Associations";
import TenantsGuide from "../Components/TenantsGuide/TenantsGuide";

const Tenants = () => {
  return (
    <div className="tenant-container-main">
      <div className="tenant-container">
        <TenantsBanner />
        <TenantsGuide />
        <AccordionDiv />
        <Associations />
      </div>
    </div>
  );
};

export default Tenants;
