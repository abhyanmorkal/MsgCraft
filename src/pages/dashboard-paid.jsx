import React from "react";
import "../styles/dashboard-paid.scss";
import MainSidebar from "../components/mainsidebar/MainSidebar";
import FirstHeader from "../components/header/FirstHeader";
import MainHeading from "../components/header/MainHeading";

function Dashboard() {
  return (
    <div className="maindashboard">
      <MainSidebar />
      <div className="body">
        <FirstHeader></FirstHeader>
        <MainHeading></MainHeading>
      </div>
    </div>
  );
}
export default Dashboard;
