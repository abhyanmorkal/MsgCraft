import MainSidebar from "../../components/mainsidebar/MainSidebar";
import "./contact.scss";
import TableData from "./TableData";
import { SubHeading } from "../../components/header/SubHeading";

const contact = () => {
  return (
    <div className="main">
      <MainSidebar />
      <div className="body">
        <div className="contact-container">
          <SubHeading />
          <div className="contact-table">
            <TableData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
