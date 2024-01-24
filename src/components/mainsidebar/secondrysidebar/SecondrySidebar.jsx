import "./secondrysidebar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
  PartitionOutlined,
  DollarOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const SecondrySidebar = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const navigate = useNavigate();
  function handelClick(key) {
    if (key == "log-out") {
      return console.log("log-out");
    }
    return navigate(`/admin/profile/${key}`);
  }

  return (
    <div className="sec-container">
      <h2 className="profile-heading">Profile</h2>
      <hr />
      <Menu
        mode="inline"
        openKeys={openKeys}
        onClick={(info) => handelClick(info.key)}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={items}
        defaultOpenKeys={["sub1"]}
      />
    </div>
  );
};

export default SecondrySidebar;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(
    "Profile Information",
    "sub1",
    null,
    [
      getItem("User Profile", "user/:id", <UserOutlined />),
      getItem(
        "Business Profile",
        "business-profile/:id",
        <PartitionOutlined />
      ),
    ],
    "group"
  ),
  getItem(
    "Plan & Subscription",
    "P&S",
    null,
    [
      getItem("Upgrade Plan", "upgrade-plans", <AppstoreOutlined />),
      getItem("Add-Ons Plans", "active-plans", <DollarOutlined />),
      // getItem("Active Plans", "active-plans", <CrownOutlined />),
    ],
    "group"
  ),
  getItem("Log Out", "log-out", <LogoutOutlined />),
];
