import React from "react";
import MainSidebar from "../components/mainsidebar/MainSidebar";
import FirstHeader from "../components/header/FirstHeader";
import MainHeading from "../components/header/MainHeading";


const campaign = () => {
  return (
    <div className="maindashboard">
      <MainSidebar />
      <div className="body">
        <FirstHeader></FirstHeader>
        <MainHeading></MainHeading>
      </div>
    </div>
  );
};

export default campaign;
