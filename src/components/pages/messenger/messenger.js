import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../../contexts/AuthContext";
import ChatOnline from "../../chatOnline/ChatOnline";
import Conversation from "../../conversation/Conversation";
import Message from "../../message/Message";
import {io} from "socket.io-client"
import "./messenger.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [userAvatar, setUserAvatar] = useState([])
  const [loading, setLoading] = useState(false)
  const socket = useRef()
  const scrollRef = useRef()

  console.log({currentChat})

  const { user } = useContext(AuthContext);

    useEffect(() => {
        socket.current = io(process.env.REACT_APP_SOCKET) 
        socket.current.on("getMessage", data =>{
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    },[]);

    useEffect(()=> {
        arrivalMessage && 
        currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev) => [...prev, arrivalMessage])
    },[arrivalMessage, currentChat])

    useEffect(() => {
        socket.current.emit("addUser", user._id)
        socket.current.on("getUsers", users=> {
            setOnlineUsers(user.followings.filter(f=> users.some(u=>u.userId === f)))
        })
    },[user])

//   useEffect(() => {
//       socket?.on("welcome", message =>{
//           console.log(message)
//       })
//   },[socket])

  useEffect(() => {
     
    const getConversations = async () => {
      setLoading(true)
      try {
        const res = await axios.get(
          "https://royalty-api.onrender.com/api/conversations/" + user._id
        );
        setConversations(res.data);
        setLoading(false)
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
          const res = await axios.get("https://royalty-api.onrender.com/api/messages/" + currentChat?._id)
          setMessages(res.data)
      }catch(err){
          console.log(err)
      }
      }
      getMessages()

      if (currentChat) {

        const notMe = currentChat.members.find(member => member !== user._id)
  
        console.log({notMe});

        const getUser = async () => {
          try{
            const res = await axios("https://royalty-api.onrender.com/api/users/" + notMe)
            setUserAvatar(res.data.avatar)
          } catch(err){
            console.log(err)
          }
        };
        getUser()
      }

  },[currentChat])

  const handleSubmit = async (e) => {
      e.preventDefault();
      const message = {
          sender: user._id,
          text: newMessage,
          conversationId: currentChat._id
      };

      const receiverId = currentChat.members.find(member=> member !==user._id)

      socket.current.emit("sendMessage", {
          senderId: user._id,
          receiverId,
          text: newMessage
      })

      try{
        const res = await axios.post("https://royalty-api.onrender.com/api/messages/", message)
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
      
      
        { loading ? (
          <div className="cliploader2" >
          <ClipLoader  size={200} color={"#fff"}/>
          </div>
        ):(<div className="chatMenu">
            <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversations.map((c, index) => (
                  <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversation={c} currentUser={user} key={index} />
                  </div>
             ))}
        </div>
        </div>
        )}
      
      <div className="chatBox">
        <div className="chatBoxWrapper messenger-form">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                  {messages.map(m=>(
                      <div ref={scrollRef}>
                          <Message message={m} own={m.sender === user._id} photo={m.sender === user._id ? user.avatar : userAvatar}/>
                      </div>
                  ))}
                
              </div>
              <form onSubmit={handleSubmit} className="chatBoxBottom">
              <input style={{ color: 'black'}}
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              ></input>
              <button className="chatSubmitButton">Send</button>
              </form>
            </>
          ) : (
            <span className="noConversationText">Open a conversation to start a chat.</span>
          )}
          
        </div>
        
      </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline onlineUsers={onlineUsers}
             currentId={user._id}
            setCurrentChat={setCurrentChat}/>
          </div>
        </div>
    </div>
  );
}
