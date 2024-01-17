import "../../pages/contats/contact.scss";
import { useState } from "react";
import { Input, Drawer } from "antd";
import YellowButton from "../../components/button/buttonReg/yellowButton";
import ContactForm from "../form/Form";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
export const SubHeading = () => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = (data) => {
    // Simulate adding contact to the database
    console.log("Contact data:", data);
    // Add your logic to send data to the database here
  };

  return (
    <div className="contact-heading">
      <h2>Contact & CRM</h2>
      <div className="contact-search">
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <YellowButton title="IMPORT CONTACT" padding="0.8rem 0.7rem" />
        <Drawer title="Add Contacts" onClose={onClose} open={open}>
          <ContactForm onSubmit={onSubmit} />
        </Drawer>
        <YellowButton
          title="ADD CONTACT"
          padding="0.8rem 0.7rem"
          onDrawerOpen={handleDrawerOpen}
        />
      </div>
    </div>
  );
};
