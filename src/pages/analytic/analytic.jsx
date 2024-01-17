import { useState } from "react";
import { Segmented, ConfigProvider, DatePicker } from "antd";
import MainSidebar from "../../components/mainsidebar/MainSidebar";
import "./analytic.css";
import YellowButton from "../../components/button/buttonReg/yellowButton";
const { RangePicker } = DatePicker;

const analytic = () => {
  return (
    <div className="main">
      <MainSidebar />
      <div className="body">
        <div id="content-heading">
          <div id="heading-group">
            <h2 id="heading">Analytic</h2>
            <Tab></Tab>
          </div>
          <div id="date-group">
            <RangePicker />
            <YellowButton title="Apply-filter" padding="0.5rem 0.7rem" />
          </div>
        </div>
        <hr />
        <div id="content-body"></div>
      </div>
    </div>
  );
};

export default analytic;

export const Tab = () => {
  const [value, setValue] = useState("conversation");
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            trackPadding: 1,
          },
        },
      }}
    >
      <Segmented
        options={["Conversation", "Message", "Campaign"]}
        value={value}
        onChange={setValue}
      />
    </ConfigProvider>
  );
};
