import React from "react";
import "./contactcard.scss";
import random from "../../assets/svgicon/Ellipse 41.svg";

const ContactCard = () => {
  return (
    <div>
      <div className="contactWraper">
        <div className="img">
          <img src={random} alt="profile" />
        </div>
        <div className="text"></div>
        <div className="date"></div>
      </div>
    </div>
  );
};

export default ContactCard;
