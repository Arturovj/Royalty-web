import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import ChatOnline from "../../chatOnline/ChatOnline";
import Conversation from "../../conversation/Conversation";
import Message from "../../message/Message";
import "./messenger.css";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/conversations/" + user._id
        );
        setConversations(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversations.map((c, index) => (
                  <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversation={c} currentUser={user} key={index} />
                  </div>

          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                <Message />
                <Message own={true} />
                <Message />
              </div>
              <div className="chatBoxBottom"></div>
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </>
          ) : (
            <span className="noConversationText">Open a conversation to start a chat.</span>
          )}
        </div>
      </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
    </div>
  );
}
