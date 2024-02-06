import "react-chat-elements/dist/main.css";
import { ChatList } from "react-chat-elements";
import { Input } from "antd";
const { Search } = Input;
import axios from "axios";
import { useEffect, useState } from "react";
import "./contactcard.scss";

const onSearch = (value, _e, info) => console.log(info?.source, value);
// eslint-disable-next-line react/prop-types
const ContactCard = ({ onContactClick }) => {
  const storedChatList = JSON.parse(localStorage.getItem("chatList")) || [];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [categoryList, setCategoryList] = useState(storedChatList);

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
          // Save the chat list to local storage
          localStorage.setItem("chatList", JSON.stringify(categoryName));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);

  return (
    <div>
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
              avatar: "https://avatars.githubusercontent.com/u/80540635?v=8",
              alt: "kursat_avatar",
              subtitle: category.category_description,
              date: new Date(),
              unread: category.status,

              // Add other properties if needed
            }))}
            onClick={onContactClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
