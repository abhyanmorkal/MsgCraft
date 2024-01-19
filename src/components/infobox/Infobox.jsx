import React from "react";
import "./Infobox.scss";
import { Card, Space } from "antd";
import arrowIcon from "../../assets/svgicon/arrow.svg";

const Infobox = ({ title, body }) => {
  return (
    <Space direction="vertical" size={50}>
      <Card
        size="small"
        fontFamily="poppins"
        title={title}
        extra={<a href="#">View</a>}
        style={{ width: 400 }}
      >
        <p>{body}</p>
      </Card>
    </Space>
  );
};

export default Infobox;

// <div className="maincontainer">
{
  /* <div className="heading">
<h3>Today’s update</h3>
<p>Delay of 24hrs is needed to refresh data</p>
</div>
<img src={arrowIcon} alt="" /> */
}
// </div>
