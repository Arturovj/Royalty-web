import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import ChatOnline from "../../chatOnline/ChatOnline";
import Conversation from "../../conversation/Conversation";
import Message from "../../message/Message";
import "./messenger.css";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef()

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

  useEffect(() => {
      const getMessages = async ()=> {
      try{
          const res = await axios.get("http://localhost:3001/api/messages/" + currentChat?._id)
          setMessages(res.data)
      }catch(err){
          console.log(err)
      }
      }
      getMessages()
  },[currentChat])

  const handleSubmit = async (e) => {
      e.preventDefault();
      const message = {
          sender: user._id,
          text: newMessage,
          conversationId: currentChat._id
      };
      try{
        const res = await axios.post("http://localhost:3001/api/messages/", message)
        setMessages([...messages, res.data])
        setNewMessage("")
      }catch(err){
        console.log(err)
      }
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth"})
  },[messages])

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
                  {messages.map(m=>(
                      <div ref={scrollRef}>
                          <Message message={m} own={m.sender === user._id}/>
                      </div>
                  ))}
                
              </div>
              <div className="chatBoxBottom"></div>
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              ></textarea>
              <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
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
