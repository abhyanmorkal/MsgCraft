import { ChatItem } from "react-chat-elements";
import "./conversion.scss";
const Conversion = () => {
  return (
    <div id="conversion-container">
      <div id="profile-header">
        <ChatItem
          avatar={"https://facebook.github.io/react/img/logo.svg"}
          title="bag $ walet"
          subtitle={"+911231231234"}
          date={false}
        />
        <div className="icon">hello world</div>
      </div>
      <div id="message-body">body</div>
      <div id="message-input">input</div>
    </div>
  );
};

export default Conversion;
