import MainSidebar from "../../components/mainsidebar/MainSidebar";
import FirstHeader from "../../components/header/FirstHeader";
import MainHeading from "../../components/header/MainHeading";
import "./profile.scss";
import SecondrySidebar from "../../components/mainsidebar/secondrysidebar/SecondrySidebar";
import { Outlet } from "react-router-dom";

const profile = () => {
  return (
    <div className="main">
      <MainSidebar />
      <SecondrySidebar />
      <div className="body-profile">
        <FirstHeader />
        <MainHeading />
        <Outlet />
      </div>
    </div>
  );
};

export default profile;
