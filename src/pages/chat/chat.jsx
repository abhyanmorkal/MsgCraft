import React from "react";
import MainSidebar from "../../components/mainsidebar/MainSidebar";
import "./chat.scss";
import Infobox from "./Infobox";
import { Input } from "antd";
import ContactCard from "./ContactCard";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const chat = () => {
  return (
    <div className="main">
      <MainSidebar />
      <div className="body">
        <div className="body-container">
          <Infobox />
          <div className="contact-area">
            <div className="search">
              <Search
                placeholder="input search text"
                enterButton="Search"
                size="medium"
                onSearch={onSearch}
              />
            </div>
            {/* <ContactCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default chat;
