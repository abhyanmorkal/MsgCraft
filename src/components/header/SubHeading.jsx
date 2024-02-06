import "../../pages/contats/contact.scss";
import { useState } from "react";
import { Input } from "antd";
import YellowButton from "../../components/button/buttonReg/yellowButton";
import OpenDrawer from "../Drawer/Drawer";

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
        <OpenDrawer title="Add Contact" onClose={onClose} open={open} />
        <YellowButton
          title="ADD CONTACT"
          padding="0.8rem 0.7rem"
          onDrawerOpen={handleDrawerOpen}
        />
      </div>
    </div>
  );
};
