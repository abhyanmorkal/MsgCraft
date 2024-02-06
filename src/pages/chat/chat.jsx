import MainSidebar from "../../components/mainsidebar/MainSidebar";
import "./chat.scss";
import Infobox from "./Infobox";
import "react-chat-elements/dist/main.css";
import ContactCard from "./ContactCard";
import Conversion from "./Conversion";
import blankChatIcon from "../../assets/conversion.svg";
import { useState } from "react";

const chat = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedContact, setSelectedContact] = useState(null);
  const handleContactClick = (contact) => {
    console.log(contact);
    setSelectedContact(contact);
  };
  return (
    <div className="main">
      <MainSidebar />
      <div className="body">
        <div className="body-container">
          <Infobox />
          <ContactCard onContactClick={handleContactClick} />
          {selectedContact ? (
            <Conversion contact={selectedContact} />
          ) : (
            <>
              <div className="blankScreen">
                <img src={blankChatIcon} alt="chatIcon" />
                <p>Click any particular chat to see messages</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default chat;
