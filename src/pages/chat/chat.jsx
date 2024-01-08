import React from "react";
import MainSidebar from "../../components/mainsidebar/MainSidebar";
import MainHeading from "../../components/header/MainHeading";
import ChatInbox from "../../components/chat-inbox/ChatInbox";
import "./chat.scss"

const chat = () => {
  return (
    <div className="main">
      <MainSidebar />
      <div className="body">
        <MainHeading></MainHeading>
        <ChatInbox></ChatInbox>
      </div>
    </div>
  );
};

export default chat;
