import axios from "axios";
import React, { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(
        "http://localhost:3001/api/users/friends/" + currentId
      );
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {

  

      const res = await axios.get(
        `http://localhost:3001/api/conversations/find/${currentId}/${user._id}`
      );
     

        if(!res.data){
          const foo = await axios.post(`http://localhost:3001/api/conversations/`, {
            receiverId: currentId,
            senderId: user._id,
          });
          const res = await axios.get(
            `http://localhost:3001/api/conversations/find/${currentId}/${user._id}`
          );
          setCurrentChat(res.data);
        } else {
          setCurrentChat(res.data);
        }

     
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/d/9/d/2d9d9708f2b58900e511693d00fb67c1.jpg"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o?.name}</span>
        </div>
      ))}
    </div>
  );
}
