import MainSidebar from "../../components/mainsidebar/MainSidebar";
import "./chat.scss";
import Infobox from "./Infobox";
import { Input } from "antd";
import "react-chat-elements/dist/main.css";
import { ChatList } from "react-chat-elements";
const { Search } = Input;
import axios from "axios";
import { useEffect, useState } from "react";

const onSearch = (value, _e, info) => console.log(info?.source, value);
const chat = () => {
  const [categoryList, setCategoryList] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://items.pyrexapps.com/api/user/get/item/categories"
        );

        const dataObject = response.data.data;

        if (dataObject && typeof dataObject === "object") {
          // Using Object.values to get an array of values
          const categoryName = Object.values(dataObject);

          // Set the categoryList state with the array of category names
          setCategoryList(categoryName);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);
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
            <div className="chat-wraper">
              <ChatList
                className="chat-list"
                dataSource={categoryList.map((category) => ({
                  title: category.category_name,
                  avatar:
                    "https://avatars.githubusercontent.com/u/80540635?v=8",
                  alt: "kursat_avatar",
                  subtitle: category.category_description,
                  date: new Date(),
                  unread: category.status,

                  // Add other properties if needed
                }))}
                onClick={() => {
                  console.log("helloworld");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chat;
